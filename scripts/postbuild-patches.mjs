// Small fixups applied to Quartz's build output that aren't reachable through
// config or content. These are narrow, targeted string/JSON patches on the
// generated `public/` folder - not on any source file - so if a Quartz or
// plugin upgrade changes the underlying output shape, they log a warning
// instead of silently doing nothing.
import { readFileSync, writeFileSync, readdirSync, renameSync } from "fs"
import { join, extname, dirname, basename } from "path"
import { createHash } from "crypto"

// --- 1. Hide .base pages from search/graph/sitemap ---
//
// Bases pages (.base) don't support the `unlisted: true` frontmatter
// convention that hides regular notes from listings - they're generated in a
// build stage that runs after Quartz's filter plugins, so no filter can reach
// them. Strip them directly from the generated contentIndex.json (the shared
// data source for search and graph) instead. The page itself is untouched and
// stays reachable by direct URL.
function hideBasesFromListings() {
  const HIDE_FROM_LISTINGS = ["papers.base"]
  const path = "public/static/contentIndex.json"

  const data = JSON.parse(readFileSync(path, "utf-8"))
  for (const slug of HIDE_FROM_LISTINGS) {
    delete data[slug]
  }
  for (const entry of Object.values(data)) {
    if (Array.isArray(entry.links)) {
      entry.links = entry.links.filter((l) => !HIDE_FROM_LISTINGS.includes(l))
    }
  }
  writeFileSync(path, JSON.stringify(data))
  console.log(`[postbuild] Stripped ${HIDE_FROM_LISTINGS.join(", ")} from contentIndex.json`)
}

// --- 2, 3, 4. Graph script patches ---
//
// The graph plugin (@quartz-community/graph) has no config for any of these,
// so they're patched directly into the compiled client script (found by
// content signature, since its filename is a content hash that changes every
// build) rather than the plugin source:
//
//   - Tags used by more than one paper get an always-visible label,
//     independent of hover. `De` (is this a tag node) and `Tu` (its already-
//     computed radius, = 2 + sqrt(connectionCount)) are both in scope right
//     where each label is created, so `De && Tu > 3` is exactly "a tag with
//     more than one paper". Scoped to tags only - doing this for paper/
//     author nodes too would recreate the label-soup problem this whole
//     graph cleanup started from.
//   - The zoom handler independently resets every non-hovered label's alpha
//     on every zoom/pan tick (that's the "reveal all labels once zoomed in"
//     behavior). Without also patching this, it would immediately undo the
//     always-visible tag labels above the moment the user so much as panned.
//     Patched to also exempt the same "tag with more than one paper" nodes.
//   - Tag label text is generated as "#" + the full tag path (e.g.
//     "#plant/lettuce"). Changed to just the last path segment, title-cased
//     with hyphens turned into spaces (e.g. "Lettuce", "Swiss Chard") to
//     match the styling already used on the /browse page.
//   - Hovering a tag now highlights every OTHER tag that shares at least one
//     paper with it (e.g. hovering "Lettuce" lights up "Tilapia" if some
//     paper carries both), with everything else - other tags, papers,
//     authors - dropped to a very light "background" opacity. There's no
//     direct tag-to-tag edge in the underlying graph (only paper-to-tag), so
//     this needed a real co-occurrence lookup, not just a config tweak:
//       1. Builds a tag -> Set<co-occurring tag> map once, right after the
//          existing paper/tag edge list is built (same paper-tags loop, just
//          also cross-linking every tag in a paper's list with every other
//          tag in that same list).
//       2. `Wu` (sets which nodes count as "active"/highlighted on hover)
//          gets a new branch: when the hovered node is a tag with an entry in
//          that map, "active" becomes {the tag itself} ∪ its co-occurring
//          tags, instead of the default "directly-linked neighbors" behavior
//          used for paper/author nodes.
//       3. `Ke` (applies the dim opacity to inactive nodes) had its dim
//          factor dropped from .2 to .05 - "very light" per the request.
//   - Hover was found to be unreliable on the full-screen graph specifically
//     (large canvas, ~100+ interactive objects) while staying reliable on
//     the small sidebar graph and while drag/click (a separate, D3-driven
//     code path) kept working fine everywhere - consistent with PixiJS's own
//     documented hit-testing cost scaling with object count, not anything in
//     this config. Rather than keep depending on PixiJS's own pointerover
//     system for hover, this drives it from the same manual, D3-based
//     hit-test drag already uses successfully (`Je`, which finds the
//     nearest node to a point by walking simulation positions directly) via
//     a plain mousemove listener on the canvas - sidestepping PixiJS's
//     event system for hover entirely rather than trying to fix it.
//   - With hover actually firing reliably, a latent bug in the plugin's own
//     `qe()` (label alpha/scale updates) became visible: it sets a hovered
//     label's alpha to 1 but never resets it back down, so labels got stuck
//     visible after hovering. Fixed to restore each label's proper resting
//     state (matching the "always-on for multi-paper tags" patch above)
//     whenever it isn't the currently-hovered node.
function patchGraphScript() {
  const dir = "public/static/scripts"
  const patches = [
    {
      name: "always-on tag labels (initial state)",
      target: "lu.anchor.set(.5,1.2),lu.alpha=0,lu.scale.set(1/qu)",
      replacement: "lu.anchor.set(.5,1.2),lu.alpha=De&&Tu>3?1:0,lu.scale.set(1/qu)",
    },
    {
      name: "always-on tag labels (survive zoom/pan)",
      target: "L[v].active&&A.push(L[v].label)",
      replacement:
        "(L[v].active||L[v].simulationData.id.startsWith(\"tags/\")&&ae(L[v].simulationData)>3)&&A.push(L[v].label)",
    },
    {
      name: "tag label text (last segment, title case)",
      target: 'l?"#"+i.substring(5):eu.get(i)?.title||i',
      replacement:
        'l?i.substring(5).split("/").pop().replace(/-/g," ").replace(/\\b\\w/g,c=>c.toUpperCase()):eu.get(i)?.title||i',
    },
    {
      name: "tag co-occurrence map (build)",
      target:
        '});var ru=new Set;if(Vu>=0)',
      replacement:
        '});var tagCooc=new Map();eu.forEach(function(i,l){if(!Re)return;for(var j=(i.tags||[]).filter(function(N){return Ue.indexOf(N)===-1}).map(function(N){return Fu("tags/"+N)}),a=0;a<j.length;a++){tagCooc.has(j[a])||tagCooc.set(j[a],new Set());for(var b=0;b<j.length;b++)a!==b&&tagCooc.get(j[a]).add(j[b])}});var ru=new Set;if(Vu>=0)',
    },
    {
      name: "tag co-occurrence highlight (hover)",
      target:
        'function Wu(i){if(_u=i,i===null){iu=new Set;for(var l=0;l<L.length;l++)L[l].active=!1;for(var l=0;l<z.length;l++)z[l].active=!1}else{iu=new Set;for(var l=0;l<z.length;l++){var F=z[l].simulationData;F.source.id===i||F.target.id===i?(iu.add(F.source.id),iu.add(F.target.id),z[l].active=!0):z[l].active=!1}iu.add(i);for(var l=0;l<L.length;l++)iu.has(L[l].simulationData.id)?L[l].active=!0:L[l].active=!1}}',
      replacement:
        'function Wu(i){if(_u=i,i===null){iu=new Set;for(var l=0;l<L.length;l++)L[l].active=!1;for(var l=0;l<z.length;l++)z[l].active=!1}else if(i.startsWith("tags/")&&tagCooc.has(i)){iu=new Set(tagCooc.get(i));iu.add(i);for(var l=0;l<z.length;l++)z[l].active=!1;for(var l=0;l<L.length;l++)iu.has(L[l].simulationData.id)?L[l].active=!0:L[l].active=!1}else{iu=new Set;for(var l=0;l<z.length;l++){var F=z[l].simulationData;F.source.id===i||F.target.id===i?(iu.add(F.source.id),iu.add(F.target.id),z[l].active=!0):z[l].active=!1}iu.add(i);for(var l=0;l<L.length;l++)iu.has(L[l].simulationData.id)?L[l].active=!0:L[l].active=!1}}',
    },
    {
      name: "very-light dim for non-highlighted nodes",
      target: "_u!==null&&Oe&&(F=l.active?1:.2)",
      replacement: "_u!==null&&Oe&&(F=l.active?1:.05)",
    },
    {
      name: "hit-test finds closest node, not first match, and covers tag label area",
      // Je() (the hit-test drag uses, and that hover now reuses) returns the
      // *first* node in iteration order whose hit radius contains the
      // point, not the *closest* one. Big hub nodes (tags with many papers,
      // e.g. "Experiment" with 76) pull lots of other nodes tightly around
      // them in the force layout, so their large circles overlap with many
      // smaller neighboring nodes - the scan often matches one of those
      // instead of the big node actually under the cursor. Smaller/less-
      // connected nodes (most papers) rarely have this overlap, which is
      // why hover worked for them but not for the big tag hubs.
      //
      // Separately - and this is what was still broken for *every* tag,
      // regardless of size: tags with more than one paper get an always-
      // visible label (see the "always-on tag labels" patch), rendered
      // above the node with anchor.set(.5,1.2). That puts the readable
      // text almost entirely outside the node's own tiny circular hit
      // radius (confirmed directly against the live page: for "Lettuce",
      // label bounds sat ~4-24px above the node center while the hit
      // circle only reached ~13px). Papers never hit this, since their
      // labels only exist *after* a successful hover, so there's nothing
      // to aim for until you've already landed on the node. Widened the
      // hit test so, for these always-labeled tag nodes only, a point in
      // the label's approximate footprint (above the node, roughly as
      // wide as the rendered text) counts as a hit on that node too.
      target:
        "Je=function(i){for(var l=(i.x-P.x)/P.k,F=(i.y-P.y)/P.k,A=0;A<nu.length;A++){var v=nu[A],j=l-v.x-R/2,N=F-v.y-O/2,K=Math.sqrt(j*j+N*N),gu=ae(v);if(K<gu+5)return v}return null}",
      replacement:
        "Je=function(i){for(var l=(i.x-P.x)/P.k,F=(i.y-P.y)/P.k,best=null,bd=1/0,A=0;A<nu.length;A++){var v=nu[A],j=l-v.x-R/2,N=F-v.y-O/2,K=Math.sqrt(j*j+N*N),gu=ae(v),labelHit=v.id.startsWith(\"tags/\")&&gu>3&&Math.abs(j)<40&&N>-30&&N<10;(K<gu+5||labelHit)&&K<bd&&(best=v,bd=K)}return best}",
    },
    {
      name: "reset label alpha when hover ends (pre-existing plugin bug)",
      // qe() sets a hovered label's alpha to 1, but its "not hovered" branch
      // only ever reset the label's *scale*, never its *alpha* back down -
      // so once any label had been hovered, it stayed visible forever. This
      // bug predates all these patches; it just never surfaced before
      // because hover rarely fired at all through PixiJS's own system.
      target:
        "_u===A.simulationData.id?(A.label.alpha=1,A.label.scale.set(l)):A.label.scale.set(i)",
      replacement:
        '_u===A.simulationData.id?(A.label.alpha=1,A.label.scale.set(l)):(A.label.scale.set(i),A.label.alpha=A.simulationData.id.startsWith("tags/")&&ae(A.simulationData)>3?1:0)',
    },
    {
      name: "D3-driven hover (replaces unreliable PixiJS pointerover)",
      target: 'a.select(Z.canvas).call(Qe)}else for(var k=0;k<L.length;k++)',
      replacement:
        'a.select(Z.canvas).call(Qe).on("mousemove.hoverfix",function(i){' +
        "if(Eu)return;" +
        "var pt=a.pointer(i,Z.canvas),hit=Je({x:pt[0],y:pt[1]}),nid=hit?hit.id:null;" +
        "nid!==_u&&(Wu(nid),Au())" +
        '}).on("mouseleave.hoverfix",function(){_u!==null&&(Wu(null),Au())})' +
        "}else for(var k=0;k<L.length;k++)",
    },
  ]

  const files = readdirSync(dir).filter((f) => f.endsWith(".js"))
  const host = files.find((f) => readFileSync(join(dir, f), "utf-8").includes("anchor.set"))
  if (!host) {
    console.warn(
      "[postbuild] WARNING: graph script not found - the graph plugin's " +
        "output shape may have changed. None of the graph patches were applied this build.",
    )
    return
  }

  const path = join(dir, host)
  let content = readFileSync(path, "utf-8")
  for (const { name, target, replacement } of patches) {
    if (!content.includes(target)) {
      console.warn(
        `[postbuild] WARNING: patch target for "${name}" not found in ${host} - ` +
          "the graph plugin's output shape may have changed. This patch was not applied.",
      )
      continue
    }
    content = content.replace(target, replacement)
    console.log(`[postbuild] Patched "${name}" into ${host}`)
  }
  writeFileSync(path, content)
  renameWithFreshHash(path, content)
}

// --- 5. Cache-busting: give patched files a filename that matches their
//        new content ---
//
// Quartz names chunk files after a hash of their *pre-patch* content, then we
// edit the bytes afterward - so the filename stops matching what's actually
// being served. Immutable-looking hashed filenames like these are exactly
// the ones browsers/CDNs cache the longest (GitHub Pages' CDN included), so
// without this, a patched file can keep serving its pre-patch self
// indefinitely to anyone who already has it cached, no matter how many times
// the site is redeployed. Renaming on every patch, and rewriting whoever
// references the old name, keeps the filename an honest cache key again.
const renameLog = new Map()

function renameWithFreshHash(filePath, content) {
  const dir = dirname(filePath)
  const oldName = basename(filePath)
  const ext = extname(oldName)
  const stem = oldName.slice(0, -ext.length).replace(/-[0-9a-f]{8}$/i, "")
  const newHash = createHash("sha256").update(content).digest("hex").slice(0, 8)
  const newName = `${stem}-${newHash}${ext}`

  if (newName === oldName) {
    console.log(`[postbuild] ${oldName} content-hash unchanged, no rename needed`)
    return
  }

  renameSync(filePath, join(dir, newName))
  console.log(`[postbuild] Renamed ${oldName} -> ${newName} to match patched content`)
  renameLog.set(oldName, newName)
  relinkReferences(oldName, newName)
}

// Rewrites every reference to `oldName` across the whole `public/` output to
// `newName`, cascading the same fresh-hash rename to each file that gets
// edited this way (a referencing file's own filename is just as much a
// cache key as the one it points to).
function relinkReferences(oldName, newName) {
  for (const file of walk("public")) {
    if (file.endsWith(newName)) continue // the file we just renamed
    const ext = extname(file)
    if (![".html", ".js", ".json", ".xml"].includes(ext)) continue
    const content = readFileSync(file, "utf-8")
    if (!content.includes(oldName)) continue
    const updated = content.replaceAll(oldName, newName)
    writeFileSync(file, updated)
    console.log(`[postbuild] Updated reference to ${oldName} in ${file}`)
    if (ext === ".js") {
      renameWithFreshHash(file, updated)
    }
  }
}

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name).replaceAll("\\", "/")
    if (entry.isDirectory()) out.push(...walk(full))
    else out.push(full)
  }
  return out
}

// Defensive final pass: re-scan every file for any of the old names renamed
// above. relinkReferences should already have caught all of these - this
// exists only to catch and fix (and loudly flag) any it missed, rather than
// letting a straggler reference silently 404 in production.
function sweepForStraggers() {
  if (renameLog.size === 0) return
  let strays = 0
  for (const file of walk("public")) {
    const ext = extname(file)
    if (![".html", ".js", ".json", ".xml"].includes(ext)) continue
    let content = readFileSync(file, "utf-8")
    let touched = false
    for (const [oldName, newName] of renameLog) {
      if (content.includes(oldName)) {
        content = content.replaceAll(oldName, newName)
        touched = true
      }
    }
    if (touched) {
      writeFileSync(file, content)
      strays++
      console.warn(`[postbuild] WARNING: straggler reference fixed up in ${file} (relinkReferences missed it)`)
    }
  }
  if (strays > 0) {
    console.warn(
      `[postbuild] WARNING: ${strays} file(s) needed a second pass to catch stale filename ` +
        "references - relinkReferences() may have a bug worth investigating.",
    )
  }
}

hideBasesFromListings()
patchGraphScript()
sweepForStraggers()

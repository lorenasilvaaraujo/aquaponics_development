// Small fixups applied to Quartz's build output that aren't reachable through
// config or content. These are narrow, targeted string/JSON patches on the
// generated `public/` folder - not on any source file - so if a Quartz or
// plugin upgrade changes the underlying output shape, they log a warning
// instead of silently doing nothing.
import { readFileSync, writeFileSync, readdirSync } from "fs"
import { join } from "path"

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
}

hideBasesFromListings()
patchGraphScript()

// Small fixups applied to Quartz's build output that aren't reachable through
// config or content. Both are narrow, targeted string/JSON patches on the
// generated `public/` folder - not on any source file - so if a Quartz or
// plugin upgrade changes the underlying output shape, these will log a
// warning instead of silently doing nothing.
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

// --- 2. Always-on labels for tags with more than one paper ---
//
// The graph plugin (@quartz-community/graph) only shows a node's label on
// hover - there's no config option for "always show labels above N
// connections". Its bundled client script creates each label with a
// hardcoded initial `alpha=0` (hidden); right next to it, `De` (whether this
// node is a tag rather than a paper/author) and the node's already-computed
// radius (`Tu`, = 2 + sqrt(connectionCount)) are both in scope, so
// `De && Tu > 3` is exactly "a tag used by more than one paper". Deliberately
// scoped to tags only - doing this for paper/author nodes too would recreate
// the label-soup problem this whole graph cleanup started from.
// Patches the built script (found by content signature, since its filename
// is a content hash that changes every build) rather than the plugin source.
function alwaysShowMultiPaperTagLabels() {
  const dir = "public/static/scripts"
  const target = "lu.anchor.set(.5,1.2),lu.alpha=0,lu.scale.set(1/qu)"
  const replacement = "lu.anchor.set(.5,1.2),lu.alpha=De&&Tu>3?1:0,lu.scale.set(1/qu)"

  const files = readdirSync(dir).filter((f) => f.endsWith(".js"))
  let patched = false
  for (const file of files) {
    const path = join(dir, file)
    const content = readFileSync(path, "utf-8")
    if (content.includes(target)) {
      writeFileSync(path, content.replace(target, replacement))
      console.log(`[postbuild] Patched always-on labels into ${file}`)
      patched = true
      break
    }
  }
  if (!patched) {
    console.warn(
      "[postbuild] WARNING: graph label patch target not found - " +
        "the graph plugin's output shape may have changed. Always-on labels for " +
        "multi-connection nodes will not be applied this build.",
    )
  }
}

hideBasesFromListings()
alwaysShowMultiPaperTagLabels()

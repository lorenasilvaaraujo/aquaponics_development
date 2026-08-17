// Bases pages (.base) don't support the `unlisted: true` frontmatter convention
// that hides regular notes from search/graph/sitemap — they're generated in a
// separate build stage that runs after Quartz's filter plugins, so no filter can
// reach them. This runs after the build to strip specific ones out of the
// generated contentIndex.json directly (the shared data source for search and
// graph). The page itself is untouched and stays reachable by direct URL.
import { readFileSync, writeFileSync } from "fs"

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
console.log(`Stripped ${HIDE_FROM_LISTINGS.join(", ")} from contentIndex.json`)

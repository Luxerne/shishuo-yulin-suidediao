import { copyFileSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const sourceDir = path.resolve("video-assets");
const outputDir = path.resolve("dist/media");
const chunks = readdirSync(sourceDir)
  .filter((name) => /^chunk-\d{3}\.bin$/.test(name))
  .sort();

if (chunks.length !== 24) {
  throw new Error(`Expected 24 video chunks; found ${chunks.length}.`);
}

mkdirSync(outputDir, { recursive: true });
for (const name of chunks) {
  copyFileSync(path.join(sourceDir, name), path.join(outputDir, name));
}

writeFileSync(
  path.join(outputDir, "manifest.json"),
  JSON.stringify({ chunks: chunks.map((name) => `media/${name}`) }),
  "utf8",
);

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry for make.fun bounty u-myronera-post-the-meme-win-the-feed-2de960bf.
// Copies POST.json (the URL of the X post carrying meme.png) into the
// output directory so the grader can read it.

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const post = readFileSync(join(here, "POST.json"), "utf8");
JSON.parse(post); // fail fast if POST.json is not valid JSON
const target = join(outDir, "POST.json");
writeFileSync(target, post, "utf8");
console.log(`POST.json copied to ${target}`);

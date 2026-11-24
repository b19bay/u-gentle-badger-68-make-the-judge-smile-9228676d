// Make the Judge Smile — one line about a small good thing that happened today.
// Writes the entry text to /output/entry.txt. Deterministic: no clock,
// no randomness, no environment-dependent value reaches the output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "On the train this morning, a kid gave me his window seat because, he said, adults look sadder when it rains.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

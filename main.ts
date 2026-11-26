import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Museum label, year 3000: a password sticky note, misread by a deadpan curator.
const line =
  "Sticky Note, 2024. Citizens wrote the secret codes to their machines on paper, then stuck the paper to the machine.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE_1 =
  "Rain falls like tiny puffs of lint floating above a floor fan pointed at the ceiling that only drop when enough wisps tangle into clumps too heavy for the rising breeze to hold.";

const LINE_2 =
  "This maps how upward winds keep cloud droplets aloft until they merge and gravity wins, while leaving out how cooling air first turns invisible water vapor into droplets around specks of dust.";

const ENTRY = `${LINE_1}\n${LINE_2}`;

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
}

main();

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE_1 =
  "A shadow is like the dry patch of pavement under a parked bus in slanting rain, because your body blocks light from landing there instead of painting darkness on the ground.";

const LINE_2 =
  "This maps the bus to your body and angled rain to low sunlight stretching your shape, while leaving out that bounced sky light keeps shadows gray, not black, and a wide sun blurs their edges.";

const ENTRY = `${LINE_1}\n${LINE_2}`;

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
}

main();

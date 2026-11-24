import { mkdirSync, writeFileSync } from "node:fs";

// Famous Last Words at 1 Percent — the phone's own farewell, first person,
// one sharp twist with the punch landing at the very end.
const ENTRY =
  "Tell my owner I forgive him for ignoring my low-battery warning six times. Actually, no — tell him I died judging him.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

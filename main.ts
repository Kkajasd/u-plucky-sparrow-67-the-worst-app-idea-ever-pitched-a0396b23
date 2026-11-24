import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "SockSync is an AI-powered app that matches your socks by personality compatibility for five dollars a month, because a random sock drawer is the silent crisis destroying modern marriages, one mismatched pair at a time.";

if (ENTRY.length < 1 || ENTRY.length > 240) {
  throw new Error(`ENTRY length ${ENTRY.length} out of 1-240`);
}
if (!ENTRY.endsWith(".") || (ENTRY.match(/\./g) ?? []).length !== 1) {
  throw new Error("ENTRY must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

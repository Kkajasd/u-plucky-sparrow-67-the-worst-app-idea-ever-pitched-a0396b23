import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "SockSync is an AI-powered app that matches your socks by personality compatibility for five dollars a month, because a random sock drawer is the silent crisis destroying modern marriages, one mismatched pair at a time.";

const PERIODS = (ENTRY.match(/\./g) ?? []).length;
if (ENTRY.length < 1 || ENTRY.length > 240 || PERIODS !== 1) {
  throw new Error("ENTRY must be one sentence of 1-240 chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);

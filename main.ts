// The Tired Dark Lord: a 100-word villain monologue, written to /output/entry.txt.
// 100 words, 530 chars (limit 600). The joke is the scheduling: tea comes first,
// the nap has been rescheduled since the Third Age — the hero is just an interruption.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "Heroes. Always at the door before I've had my tea.",
  "Listen — the ritual is ready, the moon is right,",
  "the ancient seal is one chant from breaking,",
  "and honestly I just want to sit down.",
  "Do you know how long I've been standing in this drafty hall, monologuing?",
  "Centuries. The minions unionized, the dragon moved out,",
  "and the cursed amulet keeps buzzing at 3 a.m. like a kettle.",
  "So yes, kneel if you must, but make it quick. I've got",
  "a kingdom to conquer, a prophecy to fulfill, and a nap that has been rescheduled since the Third Age.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

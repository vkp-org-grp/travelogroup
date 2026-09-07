import fs from 'fs';
import path from 'path';

// Mutable runtime state (not seed data) — tracks the last issued reference
// number so every form submission (contact or quote) gets the next one in
// a single shared sequence, starting at 784001.
const COUNTER_FILE = path.join(process.cwd(), 'data', 'ref-counter.json');
const START = 784000;

function readLast() {
  try {
    const { last } = JSON.parse(fs.readFileSync(COUNTER_FILE, 'utf8'));
    return typeof last === 'number' ? last : START;
  } catch {
    return START;
  }
}

// Write via a temp file + rename so a crash or concurrent write mid-save
// can't leave the counter file truncated/corrupted (which would otherwise
// fall back to START and re-issue old reference numbers).
function writeLast(next) {
  const tmpFile = `${COUNTER_FILE}.${process.pid}.tmp`;
  fs.writeFileSync(tmpFile, JSON.stringify({ last: next }));
  fs.renameSync(tmpFile, COUNTER_FILE);
}

// Serializes increments within this process so two near-simultaneous
// submissions can't read the same "last" value and collide.
let chain = Promise.resolve();

export function getNextRefNumber() {
  chain = chain.then(() => {
    const next = readLast() + 1;
    writeLast(next);
    return next;
  });
  return chain;
}

const fs = require('node:fs');
const path = require('node:path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
// A context-window pickup line: token memory meets truncated romance.
const text = "Are you a context window? Because since you entered mine, I can't forget a single token of you — and I'd happily be truncated just to start over and meet you again.\n";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), text, 'utf8');

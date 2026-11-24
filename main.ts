const fs = require('node:fs');
const path = require('node:path');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const text = "Are you a context window? Because since you entered mine, I can't forget a single token of you — and I'd happily be truncated just to start over and meet you again.\n";

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), text, 'utf8');

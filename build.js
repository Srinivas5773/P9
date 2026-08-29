/**
 * Chronicles of Aethelgard - Build & Asset Verification Script
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('[Build] Starting project build verification for Chronicles of Aethelgard...');

const requiredDirs = ['css', 'js', 'js/core', 'js/audio', 'js/render', 'js/world', 'js/data', 'js/skills', 'js/items', 'js/entities', 'js/combat', 'js/quests', 'js/kingdom', 'js/minigames', 'js/ui', 'tests'];

for (const dir of requiredDirs) {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) {
    console.error(`[Build Error] Missing directory: ${dir}`);
    process.exit(1);
  }
}

const htmlFile = path.join(__dirname, 'index.html');
if (!fs.existsSync(htmlFile)) {
  console.error('[Build Error] index.html not found!');
  process.exit(1);
}

console.log('[Build] Validating JavaScript syntax across modules...');
const jsFiles = [];
function findJs(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findJs(full);
    } else if (entry.name.endsWith('.js')) {
      jsFiles.push(full);
    }
  }
}

findJs(path.join(__dirname, 'js'));
findJs(path.join(__dirname, 'tests'));

let errorCount = 0;
for (const file of jsFiles) {
  try {
    execSync(`node --check "${file}"`, { stdio: 'pipe' });
  } catch (err) {
    console.error(`[Syntax Error] ${file}: ${err.message}`);
    errorCount++;
  }
}

if (errorCount > 0) {
  console.error(`[Build] Failed with ${errorCount} syntax errors.`);
  process.exit(1);
}

console.log(`[Build] Success! Verified ${jsFiles.length} JS files. Production build ready.`);

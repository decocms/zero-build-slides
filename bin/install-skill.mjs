#!/usr/bin/env node

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgRoot = join(__dirname, '..');
const cwd = process.cwd();

const FILES = [
  'index.html',
  'app.js',
  'layouts.js',
  'data.js',
  'themes.js',
  'context.js',
];

console.log('\n\x1b[1m@decocms/zero-build-slides\x1b[0m\n');

// --- Scaffold presentation files ---
console.log('\x1b[36mScaffolding presentation files...\x1b[0m\n');

let copied = 0;
let skipped = 0;

for (const file of FILES) {
  const dest = join(cwd, file);
  const src = join(pkgRoot, file);

  if (existsSync(dest)) {
    console.log(`  \x1b[33mskip\x1b[0m  ${file} (already exists)`);
    skipped++;
  } else {
    copyFileSync(src, dest);
    console.log(`  \x1b[32mcopy\x1b[0m  ${file}`);
    copied++;
  }
}

console.log(`\n  ${copied} copied, ${skipped} skipped\n`);

// --- Install skill via skills CLI ---
console.log('\x1b[36mInstalling Claude Code skill...\x1b[0m\n');

try {
  execSync('npx skills add @decocms/zero-build-slides', {
    stdio: 'inherit',
    cwd,
  });
  console.log('\n\x1b[32mSkill installed successfully.\x1b[0m\n');
} catch {
  console.log('\n\x1b[33mCould not install skill automatically.\x1b[0m');
  console.log('You can install it manually:\n');
  console.log('  npx skills add @decocms/zero-build-slides\n');
}

// --- Next steps ---
console.log('\x1b[1mNext steps:\x1b[0m\n');
console.log('  1. Preview your slides:');
console.log('     \x1b[36mbunx serve\x1b[0m\n');
console.log('  2. Edit \x1b[1mdata.js\x1b[0m to create your presentation');
console.log('     (see SKILL.md for the full agent reference)\n');

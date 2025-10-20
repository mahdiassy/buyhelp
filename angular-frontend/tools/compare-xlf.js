/**
 * tools/compare-xlf.js
 * Usage: node tools/compare-xlf.js tools/i18n-scan-report.json src/locale/messages.en.xlf
 *
 * Compares scan results to XLF file to find missing msgids
 */
const fs = require('fs');
const path = require('path');
const parser = require('fast-xml-parser');

// Simple color functions (chalk v5+ is ESM only)
const chalk = {
  green: (str) => `\x1b[32m${str}\x1b[0m`,
  blue: (str) => `\x1b[34m${str}\x1b[0m`,
  yellow: (str) => `\x1b[33m${str}\x1b[0m`,
  gray: (str) => `\x1b[90m${str}\x1b[0m`,
  cyan: (str) => `\x1b[36m${str}\x1b[0m`,
  red: (str) => `\x1b[31m${str}\x1b[0m`
};

const reportFile = process.argv[2] || 'tools/i18n-scan-report.json';
const xlfFile = process.argv[3]; // required

if (!fs.existsSync(reportFile)) {
  console.error(chalk.red('❌ Report not found:'), reportFile);
  console.error(chalk.yellow('Run: node tools/scan-i18n.js first'));
  process.exit(1);
}
if (!xlfFile || !fs.existsSync(xlfFile)) {
  console.error(chalk.red('❌ XLF file required and must exist.'));
  console.error(chalk.yellow('Example: node tools/compare-xlf.js tools/i18n-scan-report.json src/locale/messages.en.xlf'));
  console.error(chalk.yellow('First run: ng extract-i18n --output-path src/locale'));
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportFile, 'utf8'));
const scanItems = report.items || [];

const xlfContent = fs.readFileSync(xlfFile, 'utf8');
const xlf = parser.parse(xlfContent, { ignoreAttributes: false });

const units = [];
// try to extract trans-units
function collect(node) {
  if (!node) return;
  if (node['trans-unit']) {
    const tu = node['trans-unit'];
    if (Array.isArray(tu)) tu.forEach(x => units.push(x));
    else units.push(tu);
  } else {
    for (const k of Object.keys(node)) if (typeof node[k] === 'object') collect(node[k]);
  }
}
collect(xlf);

const sourceTexts = new Set(units.map(u => (u['source'] && u['source']['#text']) || u['source'] || ''));

// find missing
const missing = scanItems.filter(it => {
  const t = it.text.trim();
  // rough match
  return !Array.from(sourceTexts).some(s => s && s.trim() === t);
});

const out = { 
  xlfFile, 
  totalScan: scanItems.length, 
  totalInXlf: sourceTexts.size,
  missingCount: missing.length, 
  missing 
};

const outPath = path.join('tools', 'i18n-compare-result.json');
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));

console.log(chalk.green('✅ Compare completed'));
console.log(chalk.blue(`📄 XLF file: ${xlfFile}`));
console.log(chalk.blue(`📊 Total scanned strings: ${scanItems.length}`));
console.log(chalk.blue(`📊 Total in XLF: ${sourceTexts.size}`));
console.log(chalk.yellow(`⚠️  Missing in XLF: ${missing.length}`));
console.log(chalk.gray(`📊 Result saved to: ${outPath}`));

if (missing.length > 0) {
  console.log(chalk.cyan('\n📋 Top 10 missing items:'));
  missing.slice(0, 10).forEach((item, idx) => {
    console.log(chalk.cyan(`  ${idx + 1}. [${item.type}] "${item.text}" in ${item.file}`));
  });
  if (missing.length > 10) {
    console.log(chalk.gray(`  ... and ${missing.length - 10} more (see ${outPath})`));
  }
}

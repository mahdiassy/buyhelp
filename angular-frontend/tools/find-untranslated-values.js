/**
 * Find translation keys where FR/AR values are still in English
 */

const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/assets/i18n/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('src/assets/i18n/fr.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('src/assets/i18n/ar.json', 'utf8'));

console.log('\n🔍 FINDING UNTRANSLATED VALUES IN FR/AR FILES\n');

const untranslatedFR = [];
const untranslatedAR = [];

// Common English words that indicate untranslated content
const englishWords = /^[A-Za-z\s\-]+$/; // Only English letters, spaces, hyphens

Object.keys(en).forEach(key => {
  const enValue = en[key];
  const frValue = fr[key];
  const arValue = ar[key];
  
  // Skip numeric or symbolic values
  if (!enValue || typeof enValue !== 'string') return;
  if (enValue.length < 3) return; // Skip very short values
  
  // Check FR: if it's exactly the same as English AND looks like English
  if (frValue === enValue && englishWords.test(frValue)) {
    untranslatedFR.push({ key, value: enValue });
  }
  
  // Check AR: if it contains only English characters (not Arabic)
  if (arValue && /^[A-Za-z\s\-]+$/.test(arValue) && arValue.length > 2) {
    untranslatedAR.push({ key, value: arValue });
  }
});

console.log(`\x1b[33m⚠️  French values still in English: ${untranslatedFR.length}\x1b[0m\n`);

if (untranslatedFR.length > 0) {
  console.log('Top 50 untranslated French values:\n');
  untranslatedFR.slice(0, 50).forEach((item, idx) => {
    console.log(`${idx + 1}. "${item.key}": "${item.value}"`);
  });
  
  if (untranslatedFR.length > 50) {
    console.log(`\n... and ${untranslatedFR.length - 50} more\n`);
  }
}

console.log(`\n\x1b[33m⚠️  Arabic values still in English: ${untranslatedAR.length}\x1b[0m\n`);

if (untranslatedAR.length > 0) {
  console.log('Top 50 untranslated Arabic values:\n');
  untranslatedAR.slice(0, 50).forEach((item, idx) => {
    console.log(`${idx + 1}. "${item.key}": "${item.value}"`);
  });
  
  if (untranslatedAR.length > 50) {
    console.log(`\n... and ${untranslatedAR.length - 50} more\n`);
  }
}

// Save report
fs.writeFileSync('tools/untranslated-values-report.json', JSON.stringify({
  summary: {
    totalKeys: Object.keys(en).length,
    frenchUntranslated: untranslatedFR.length,
    arabicUntranslated: untranslatedAR.length
  },
  french: untranslatedFR,
  arabic: untranslatedAR
}, null, 2));

console.log('\n\x1b[36m📄 Full report saved to: tools/untranslated-values-report.json\x1b[0m');

if (untranslatedFR.length === 0 && untranslatedAR.length === 0) {
  console.log('\n\x1b[32m✅ All values appear to be translated!\x1b[0m\n');
}

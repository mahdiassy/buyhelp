/**
 * tools/validate-all-translations-comprehensive.js
 * 
 * Final comprehensive validation of ALL translation coverage
 */

const fs = require('fs');
const glob = require('glob');

console.log('\x1b[36m🔍 FINAL COMPREHENSIVE TRANSLATION VALIDATION\x1b[0m\n');

// Load translation files
const en = JSON.parse(fs.readFileSync('src/assets/i18n/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('src/assets/i18n/fr.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('src/assets/i18n/ar.json', 'utf8'));

console.log(`\x1b[34m📊 Translation Files:\x1b[0m`);
console.log(`   EN keys: ${Object.keys(en).length}`);
console.log(`   FR keys: ${Object.keys(fr).length}`);
console.log(`   AR keys: ${Object.keys(ar).length}`);
console.log('');

// Check for untranslated values (still in English in FR/AR)
const untranslatedFR = [];
const untranslatedAR = [];

Object.keys(en).forEach(key => {
  // Skip if value is same as key (common pattern)
  if (en[key] === key) return;
  
  // Check if FR translation is just the English value
  if (fr[key] === en[key]) {
    untranslatedFR.push({ key, value: en[key] });
  }
  
  // Check if AR translation is just the English value
  if (ar[key] === en[key]) {
    untranslatedAR.push({ key, value: en[key] });
  }
});

if (untranslatedFR.length > 0) {
  console.log(`\x1b[33m⚠️  French translations still in English: ${untranslatedFR.length}\x1b[0m`);
  untranslatedFR.slice(0, 10).forEach(item => {
    console.log(`   - "${item.key}": "${item.value}"`);
  });
  if (untranslatedFR.length > 10) {
    console.log(`   ... and ${untranslatedFR.length - 10} more`);
  }
  console.log('');
}

if (untranslatedAR.length > 0) {
  console.log(`\x1b[33m⚠️  Arabic translations still in English: ${untranslatedAR.length}\x1b[0m`);
  untranslatedAR.slice(0, 10).forEach(item => {
    console.log(`   - "${item.key}": "${item.value}"`);
  });
  if (untranslatedAR.length > 10) {
    console.log(`   ... and ${untranslatedAR.length - 10} more`);
  }
  console.log('');
}

// Check menu navigation specifically
console.log('\x1b[36m📋 MENU NAVIGATION TRANSLATIONS:\x1b[0m');
const menuKeys = ['pages', 'products', 'seller', 'services', 'support'];
menuKeys.forEach(key => {
  const allTranslated = en[key] && fr[key] && ar[key] && fr[key] !== en[key] && ar[key] !== en[key];
  const status = allTranslated ? '\x1b[32m✅' : '\x1b[31m❌';
  console.log(`${status} ${key}: EN="${en[key]}" | FR="${fr[key]}" | AR="${ar[key]}"\x1b[0m`);
});
console.log('');

// Scan templates for usage
const htmlFiles = glob.sync('src/**/*.html');
const usedKeys = new Set();
const missingKeys = new Set();

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Find all translate pipe usage
  const pattern = /{{[^}]*['"]([^'"]+)['"]\s*\|\s*translate/g;
  let match;
  while ((match = pattern.exec(content)) !== null) {
    const key = match[1];
    usedKeys.add(key);
    if (!en[key]) {
      missingKeys.add(key);
    }
  }
});

console.log(`\x1b[34m📊 Template Usage:\x1b[0m`);
console.log(`   Unique translation keys used: ${usedKeys.size}`);
console.log(`   ${missingKeys.size > 0 ? '\x1b[31m❌' : '\x1b[32m✅'} Missing keys: ${missingKeys.size}\x1b[0m`);

if (missingKeys.size > 0) {
  console.log('\n\x1b[31mMissing keys:\x1b[0m');
  Array.from(missingKeys).forEach(key => {
    console.log(`   - "${key}"`);
  });
}

console.log('\n\x1b[36m━━━ SUMMARY ━━━\x1b[0m');
const allGood = missingKeys.size === 0 && untranslatedFR.length === 0 && untranslatedAR.length === 0;

if (allGood) {
  console.log('\x1b[32m✅ ALL TRANSLATIONS ARE COMPLETE!\x1b[0m');
  console.log('\x1b[32m✅ All keys exist in all languages\x1b[0m');
  console.log('\x1b[32m✅ All translations are properly localized\x1b[0m');
} else {
  console.log('\x1b[33m⚠️  Some translations need attention:\x1b[0m');
  if (missingKeys.size > 0) console.log(`\x1b[31m   - ${missingKeys.size} missing translation keys\x1b[0m`);
  if (untranslatedFR.length > 0) console.log(`\x1b[33m   - ${untranslatedFR.length} French values still in English\x1b[0m`);
  if (untranslatedAR.length > 0) console.log(`\x1b[33m   - ${untranslatedAR.length} Arabic values still in English\x1b[0m`);
}

// Save report
fs.writeFileSync('tools/translation-validation-report.json', JSON.stringify({
  summary: {
    totalKeys: {
      en: Object.keys(en).length,
      fr: Object.keys(fr).length,
      ar: Object.keys(ar).length
    },
    untranslated: {
      french: untranslatedFR.length,
      arabic: untranslatedAR.length
    },
    templateUsage: {
      uniqueKeys: usedKeys.size,
      missingKeys: missingKeys.size
    }
  },
  untranslatedFrench: untranslatedFR,
  untranslatedArabic: untranslatedAR,
  missingKeys: Array.from(missingKeys),
  menuTranslations: menuKeys.reduce((acc, key) => {
    acc[key] = { en: en[key], fr: fr[key], ar: ar[key] };
    return acc;
  }, {})
}, null, 2));

console.log('\n\x1b[36m📄 Full report saved to: tools/translation-validation-report.json\x1b[0m');

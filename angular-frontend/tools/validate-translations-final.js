/**
 * Comprehensive Translation Validation Script
 */
const fs = require('fs');

console.log('\n🔍 COMPREHENSIVE TRANSLATION VALIDATION\n');

// Read all translation files
const en = JSON.parse(fs.readFileSync('src/assets/i18n/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('src/assets/i18n/fr.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('src/assets/i18n/ar.json', 'utf8'));

const enKeys = Object.keys(en).sort();
const frKeys = Object.keys(fr).sort();
const arKeys = Object.keys(ar).sort();

console.log('📊 Translation Key Counts:');
console.log(`   English: ${enKeys.length} keys`);
console.log(`   French:  ${frKeys.length} keys`);
console.log(`   Arabic:  ${arKeys.length} keys`);

// Find missing keys
const missingInFr = enKeys.filter(key => !frKeys.includes(key));
const missingInAr = enKeys.filter(key => !arKeys.includes(key));
const extraInFr = frKeys.filter(key => !enKeys.includes(key));
const extraInAr = arKeys.filter(key => !enKeys.includes(key));

console.log('\n🔍 Key Differences:');
if (missingInFr.length > 0) {
  console.log(`   ⚠️  Missing in French (${missingInFr.length}): ${missingInFr.join(', ')}`);
} else {
  console.log('   ✅ French has all English keys');
}

if (missingInAr.length > 0) {
  console.log(`   ⚠️  Missing in Arabic (${missingInAr.length}): ${missingInAr.join(', ')}`);
} else {
  console.log('   ✅ Arabic has all English keys');
}

if (extraInFr.length > 0) {
  console.log(`   ⚠️  Extra in French (${extraInFr.length}): ${extraInFr.join(', ')}`);
}

if (extraInAr.length > 0) {
  console.log(`   ⚠️  Extra in Arabic (${extraInAr.length}): ${extraInAr.join(', ')}`);
}

// Check for empty values
console.log('\n🔍 Empty Values Check:');
let emptyCount = { en: 0, fr: 0, ar: 0 };

enKeys.forEach(key => {
  if (!en[key] || en[key].trim() === '') emptyCount.en++;
});
frKeys.forEach(key => {
  if (!fr[key] || fr[key].trim() === '') emptyCount.fr++;
});
arKeys.forEach(key => {
  if (!ar[key] || ar[key].trim() === '') emptyCount.ar++;
});

console.log(`   English: ${emptyCount.en === 0 ? '✅ No empty values' : `⚠️  ${emptyCount.en} empty values`}`);
console.log(`   French:  ${emptyCount.fr === 0 ? '✅ No empty values' : `⚠️  ${emptyCount.fr} empty values`}`);
console.log(`   Arabic:  ${emptyCount.ar === 0 ? '✅ No empty values' : `⚠️  ${emptyCount.ar} empty values`}`);

// Final verdict
console.log('\n' + '='.repeat(50));
if (enKeys.length === frKeys.length && frKeys.length === arKeys.length && 
    missingInFr.length === 0 && missingInAr.length === 0 &&
    emptyCount.en === 0 && emptyCount.fr === 0 && emptyCount.ar === 0) {
  console.log('✅ ALL TRANSLATIONS ARE COMPLETE AND VALID!');
  console.log(`✅ Total: ${enKeys.length} translation keys in all languages`);
} else {
  console.log('⚠️  TRANSLATION ISSUES DETECTED - REVIEW REQUIRED');
}
console.log('='.repeat(50) + '\n');

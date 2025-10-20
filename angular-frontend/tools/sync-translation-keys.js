/**
 * tools/sync-translation-keys.js
 * 
 * Synchronizes all translation keys across en, fr, and ar files.
 * Ensures all files have the same keys.
 */

const fs = require('fs');

const enPath = 'src/assets/i18n/en.json';
const frPath = 'src/assets/i18n/fr.json';
const arPath = 'src/assets/i18n/ar.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frPath, 'utf8'));
const ar = JSON.parse(fs.readFileSync(arPath, 'utf8'));

// Get all unique keys
const allKeys = new Set([...Object.keys(en), ...Object.keys(fr), ...Object.keys(ar)]);

console.log(`\x1b[36m📊 Found ${allKeys.size} unique keys across all files\x1b[0m\n`);

// Translation dictionaries for missing keys
const quickTranslations = {
  'inform_you_that_the_faq__currently_unavailable.': {
    fr: 'Je regrette de vous informer que la FAQ n\'est actuellement pas disponible.',
    ar: 'يؤسفني إبلاغك أن الأسئلة الشائعة غير متاحة حالياً.'
  },
  'inform_you_that_the_faq__currently_unavailable': {
    fr: 'Je regrette de vous informer que la FAQ n\'est actuellement pas disponible.',
    ar: 'يؤسفني إبلاغك أن الأسئلة الشائعة غير متاحة حالياً.'
  },
  'language': {
    fr: 'Langue',
    ar: 'اللغة'
  },
  'services': {
    en: 'Services',
    ar: 'الخدمات'
  },
  'language.select': {
    en: 'Select Language',
    fr: 'Sélectionner la langue'
  },
  'language.switch_to': {
    en: 'Switch to',
    fr: 'Passer à'
  },
  'language.english': {
    en: 'English',
    fr: 'Anglais'
  },
  'language.french': {
    en: 'French',
    ar: 'الفرنسية'
  },
  'language.arabic': {
    en: 'Arabic',
    fr: 'Arabe'
  }
};

let missingInEn = 0;
let missingInFr = 0;
let missingInAr = 0;

// Sync all keys
allKeys.forEach(key => {
  // Add missing keys to English
  if (!en[key]) {
    if (fr[key]) {
      en[key] = quickTranslations[key]?.en || fr[key];
    } else if (ar[key]) {
      en[key] = quickTranslations[key]?.en || ar[key];
    } else {
      en[key] = key; // fallback to key itself
    }
    missingInEn++;
    console.log(`\x1b[33m⚠️  Added to EN: "${key}"\x1b[0m`);
  }
  
  // Add missing keys to French
  if (!fr[key]) {
    if (quickTranslations[key]?.fr) {
      fr[key] = quickTranslations[key].fr;
    } else if (en[key]) {
      fr[key] = en[key]; // fallback to English (needs manual review)
    }
    missingInFr++;
    console.log(`\x1b[33m⚠️  Added to FR: "${key}" = "${fr[key]}"\x1b[0m`);
  }
  
  // Add missing keys to Arabic
  if (!ar[key]) {
    if (quickTranslations[key]?.ar) {
      ar[key] = quickTranslations[key].ar;
    } else if (en[key]) {
      ar[key] = en[key]; // fallback to English (needs manual review)
    }
    missingInAr++;
    console.log(`\x1b[33m⚠️  Added to AR: "${key}" = "${ar[key]}"\x1b[0m`);
  }
});

// Sort all objects
function sortObject(obj) {
  return Object.keys(obj).sort().reduce((result, key) => {
    result[key] = obj[key];
    return result;
  }, {});
}

const sortedEn = sortObject(en);
const sortedFr = sortObject(fr);
const sortedAr = sortObject(ar);

// Create backups
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
fs.writeFileSync(`src/assets/i18n/en.backup-sync-${timestamp}.json`, fs.readFileSync(enPath));
fs.writeFileSync(`src/assets/i18n/fr.backup-sync-${timestamp}.json`, fs.readFileSync(frPath));
fs.writeFileSync(`src/assets/i18n/ar.backup-sync-${timestamp}.json`, fs.readFileSync(arPath));

// Write updated files
fs.writeFileSync(enPath, JSON.stringify(sortedEn, null, 2), 'utf8');
fs.writeFileSync(frPath, JSON.stringify(sortedFr, null, 2), 'utf8');
fs.writeFileSync(arPath, JSON.stringify(sortedAr, null, 2), 'utf8');

console.log(`\n\x1b[32m✅ SYNCHRONIZATION COMPLETE!\x1b[0m\n`);
console.log(`\x1b[36m💾 Backups created: *-sync-${timestamp}.json\x1b[0m\n`);
console.log(`\x1b[33m📊 Summary:\x1b[0m`);
console.log(`   Added to EN: ${missingInEn}`);
console.log(`   Added to FR: ${missingInFr}`);
console.log(`   Added to AR: ${missingInAr}\n`);
console.log(`\x1b[34m📈 Final key count:\x1b[0m`);
console.log(`   EN: ${Object.keys(sortedEn).length} keys`);
console.log(`   FR: ${Object.keys(sortedFr).length} keys`);
console.log(`   AR: ${Object.keys(sortedAr).length} keys\n`);
console.log(`\x1b[32m🎉 All translation files now have ${allKeys.size} keys!\x1b[0m`);

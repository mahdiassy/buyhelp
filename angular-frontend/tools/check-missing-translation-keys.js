/**
 * tools/check-missing-translation-keys.js
 * 
 * Finds translation keys used in templates but missing from JSON files
 */

const fs = require('fs');
const glob = require('glob');

console.log('\x1b[36m🔍 CHECKING FOR MISSING TRANSLATION KEYS\x1b[0m\n');

// Load translation files
const en = JSON.parse(fs.readFileSync('src/assets/i18n/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('src/assets/i18n/fr.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('src/assets/i18n/ar.json', 'utf8'));

const existingKeys = new Set(Object.keys(en));

// Find all translation keys used in templates
const htmlFiles = glob.sync('src/**/*.html');
const usedKeys = new Set();
const missingKeys = new Set();

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Pattern 1: {{ 'key' | translate }}
  const pattern1 = /{{[^}]*'([^']+)'\s*\|\s*translate/g;
  let match;
  while ((match = pattern1.exec(content)) !== null) {
    const key = match[1];
    usedKeys.add(key);
    if (!existingKeys.has(key)) {
      missingKeys.add(key);
    }
  }
  
  // Pattern 2: {{ "key" | translate }}
  const pattern2 = /{{[^}]*"([^"]+)"\s*\|\s*translate/g;
  while ((match = pattern2.exec(content)) !== null) {
    const key = match[1];
    usedKeys.add(key);
    if (!existingKeys.has(key)) {
      missingKeys.add(key);
    }
  }
  
  // Pattern 3: [placeholder]="'key' | translate"
  const pattern3 = /\[[\w-]+\]="'([^']+)'\s*\|\s*translate"/g;
  while ((match = pattern3.exec(content)) !== null) {
    const key = match[1];
    usedKeys.add(key);
    if (!existingKeys.has(key)) {
      missingKeys.add(key);
    }
  }
  
  // Pattern 4: placeholder="{{'key' | translate}}"
  const pattern4 = /[\w-]+="{{[^}]*'([^']+)'\s*\|\s*translate/g;
  while ((match = pattern4.exec(content)) !== null) {
    const key = match[1];
    usedKeys.add(key);
    if (!existingKeys.has(key)) {
      missingKeys.add(key);
    }
  }
});

console.log(`\x1b[34m📊 Translation files have: ${existingKeys.size} keys\x1b[0m`);
console.log(`\x1b[34m📊 Templates use: ${usedKeys.size} unique keys\x1b[0m`);
console.log(`\x1b[${missingKeys.size > 0 ? '31' : '32'}m${missingKeys.size > 0 ? '❌' : '✅'} Missing keys: ${missingKeys.size}\x1b[0m\n`);

if (missingKeys.size > 0) {
  console.log('\x1b[31m━━━ MISSING TRANSLATION KEYS ━━━\x1b[0m\n');
  console.log('\x1b[33mThese keys are used in templates but NOT in translation files:\x1b[0m\n');
  
  const missing = Array.from(missingKeys).sort();
  missing.forEach((key, idx) => {
    console.log(`\x1b[31m${idx + 1}. "${key}"\x1b[0m`);
  });
  
  // Generate suggested translations
  console.log('\n\x1b[36m━━━ SUGGESTED ADDITIONS TO TRANSLATION FILES ━━━\x1b[0m\n');
  
  const suggestions = {};
  missing.forEach(key => {
    // Generate English text from key
    const englishText = key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    suggestions[key] = {
      en: englishText,
      fr: `[FR] ${englishText}`,
      ar: `[AR] ${englishText}`
    };
  });
  
  console.log('\x1b[90mAdd these to your translation files:\x1b[0m\n');
  console.log(JSON.stringify(suggestions, null, 2));
  
  // Save to file
  fs.writeFileSync('tools/missing-translation-keys.json', JSON.stringify({
    summary: {
      totalExisting: existingKeys.size,
      totalUsed: usedKeys.size,
      totalMissing: missingKeys.size
    },
    missingKeys: missing,
    suggestions
  }, null, 2));
  
  console.log(`\n\x1b[36m📄 Full report saved to: tools/missing-translation-keys.json\x1b[0m`);
  console.log(`\x1b[33m💡 Add these keys to en.json, fr.json, and ar.json\x1b[0m`);
} else {
  console.log('\x1b[32m✅ ALL translation keys exist! No missing keys found.\x1b[0m');
}

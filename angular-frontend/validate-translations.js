/**
 * ============================================
 * Translation Validation & Coverage Script
 * ============================================
 * 
 * This script validates:
 * 1. All translation files have the same keys
 * 2. No missing translations
 * 3. Translation coverage percentage
 * 4. Finds potential hardcoded text in HTML templates
 * 
 * Usage: node validate-translations.js
 * ============================================
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

console.log(`${colors.cyan}
╔══════════════════════════════════════════════════╗
║     🌍 Translation Validation Tool 🌍           ║
╚══════════════════════════════════════════════════╝
${colors.reset}`);

// Load translation files
const i18nPath = path.join(__dirname, 'src', 'assets', 'i18n');
const translations = {};

try {
  translations.en = JSON.parse(fs.readFileSync(path.join(i18nPath, 'en.json'), 'utf8'));
  translations.fr = JSON.parse(fs.readFileSync(path.join(i18nPath, 'fr.json'), 'utf8'));
  translations.ar = JSON.parse(fs.readFileSync(path.join(i18nPath, 'ar.json'), 'utf8'));
} catch (error) {
  console.error(`${colors.red}❌ Error loading translation files:${colors.reset}`, error.message);
  process.exit(1);
}

// Get all keys
const enKeys = getKeys(translations.en);
const frKeys = getKeys(translations.fr);
const arKeys = getKeys(translations.ar);

console.log(`${colors.blue}📊 Translation File Statistics:${colors.reset}`);
console.log(`   English (en): ${colors.green}${enKeys.length} keys${colors.reset}`);
console.log(`   French  (fr): ${colors.green}${frKeys.length} keys${colors.reset}`);
console.log(`   Arabic  (ar): ${colors.green}${arKeys.length} keys${colors.reset}`);
console.log('');

// Check for missing keys
let allValid = true;

// Missing in French
const missingInFr = enKeys.filter(k => !frKeys.includes(k));
if (missingInFr.length > 0) {
  allValid = false;
  console.log(`${colors.red}❌ Missing in French (${missingInFr.length} keys):${colors.reset}`);
  missingInFr.slice(0, 10).forEach(key => console.log(`   - ${key}`));
  if (missingInFr.length > 10) {
    console.log(`   ... and ${missingInFr.length - 10} more`);
  }
  console.log('');
}

// Missing in Arabic
const missingInAr = enKeys.filter(k => !arKeys.includes(k));
if (missingInAr.length > 0) {
  allValid = false;
  console.log(`${colors.red}❌ Missing in Arabic (${missingInAr.length} keys):${colors.reset}`);
  missingInAr.slice(0, 10).forEach(key => console.log(`   - ${key}`));
  if (missingInAr.length > 10) {
    console.log(`   ... and ${missingInAr.length - 10} more`);
  }
  console.log('');
}

// Extra keys in French
const extraInFr = frKeys.filter(k => !enKeys.includes(k));
if (extraInFr.length > 0) {
  console.log(`${colors.yellow}⚠️  Extra keys in French (${extraInFr.length}):${colors.reset}`);
  extraInFr.slice(0, 5).forEach(key => console.log(`   - ${key}`));
  if (extraInFr.length > 5) {
    console.log(`   ... and ${extraInFr.length - 5} more`);
  }
  console.log('');
}

// Extra keys in Arabic
const extraInAr = arKeys.filter(k => !enKeys.includes(k));
if (extraInAr.length > 0) {
  console.log(`${colors.yellow}⚠️  Extra keys in Arabic (${extraInAr.length}):${colors.reset}`);
  extraInAr.slice(0, 5).forEach(key => console.log(`   - ${key}`));
  if (extraInAr.length > 5) {
    console.log(`   ... and ${extraInAr.length - 5} more`);
  }
  console.log('');
}

// Calculate coverage
const frCoverage = ((frKeys.length / enKeys.length) * 100).toFixed(2);
const arCoverage = ((arKeys.length / enKeys.length) * 100).toFixed(2);

console.log(`${colors.blue}📈 Translation Coverage:${colors.reset}`);
console.log(`   French:  ${getColoredPercentage(frCoverage)}%`);
console.log(`   Arabic:  ${getColoredPercentage(arCoverage)}%`);
console.log('');

// Validation result
if (allValid) {
  console.log(`${colors.green}
╔══════════════════════════════════════════════════╗
║  ✅ All translations are complete and valid! ✅  ║
╚══════════════════════════════════════════════════╝
${colors.reset}`);
} else {
  console.log(`${colors.red}
╔══════════════════════════════════════════════════╗
║  ❌ Some translations are missing or invalid! ❌  ║
╚══════════════════════════════════════════════════╝
${colors.reset}`);
}

// Scan HTML templates for hardcoded text
console.log(`${colors.blue}🔍 Scanning HTML templates for hardcoded text...${colors.reset}`);
scanTemplates();

// Helper functions
function getKeys(obj, prefix = '') {
  let keys = [];
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

function getColoredPercentage(percentage) {
  const num = parseFloat(percentage);
  if (num >= 100) return `${colors.green}${percentage}${colors.reset}`;
  if (num >= 90) return `${colors.yellow}${percentage}${colors.reset}`;
  return `${colors.red}${percentage}${colors.reset}`;
}

function scanTemplates() {
  const templatePattern = path.join(__dirname, 'src', 'app', '**', '*.html');
  const files = glob.sync(templatePattern);
  
  const suspiciousPatterns = [
    // Hardcoded English words in tags
    />[\s]*[A-Z][a-z]+[\s]*</g,
    // Hardcoded placeholder text
    /placeholder="[^{][A-Za-z\s]+"/g,
    // Hardcoded title text
    /title="[^{][A-Za-z\s]+"/g,
    // Hardcoded aria-label
    /aria-label="[^{][A-Za-z\s]+"/g
  ];

  let totalIssues = 0;
  const issuesByFile = {};

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const issues = [];

    suspiciousPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        matches.forEach(match => {
          // Filter out likely false positives
          if (!match.includes('{{') && 
              !match.includes('translate') &&
              !match.includes('*ngIf') &&
              !match.includes('*ngFor') &&
              match.length > 5) {
            issues.push(match.trim());
          }
        });
      }
    });

    if (issues.length > 0) {
      totalIssues += issues.length;
      issuesByFile[path.relative(__dirname, file)] = issues;
    }
  });

  if (totalIssues === 0) {
    console.log(`${colors.green}   ✅ No obvious hardcoded text found!${colors.reset}`);
  } else {
    console.log(`${colors.yellow}   ⚠️  Found ${totalIssues} potential issues in ${Object.keys(issuesByFile).length} files${colors.reset}`);
    console.log(`${colors.yellow}   (These may be false positives - please review manually)${colors.reset}`);
    console.log('');

    const filesToShow = Object.keys(issuesByFile).slice(0, 5);
    filesToShow.forEach(file => {
      console.log(`   ${colors.cyan}${file}${colors.reset}`);
      issuesByFile[file].slice(0, 3).forEach(issue => {
        console.log(`      - ${issue}`);
      });
      if (issuesByFile[file].length > 3) {
        console.log(`      ... and ${issuesByFile[file].length - 3} more`);
      }
    });

    if (Object.keys(issuesByFile).length > 5) {
      console.log(`   ... and ${Object.keys(issuesByFile).length - 5} more files`);
    }
  }
  console.log('');
}

// Summary
console.log(`${colors.blue}
════════════════════════════════════════════════════
Summary:
════════════════════════════════════════════════════
${colors.reset}`);
console.log(`Total Translation Keys: ${colors.cyan}${enKeys.length}${colors.reset}`);
console.log(`Translation Status: ${allValid ? colors.green + '✅ Complete' : colors.red + '❌ Incomplete'}${colors.reset}`);
console.log(`French Coverage: ${getColoredPercentage(frCoverage)}%`);
console.log(`Arabic Coverage: ${getColoredPercentage(arCoverage)}%`);
console.log('');

console.log(`${colors.blue}
💡 Next Steps:
${colors.reset}`);

if (!allValid) {
  console.log(`${colors.yellow}1. Add missing translation keys to the incomplete files${colors.reset}`);
  console.log(`${colors.yellow}2. Re-run this script to verify${colors.reset}`);
} else {
  console.log(`${colors.green}1. Your translations are complete! ✅${colors.reset}`);
  console.log(`${colors.green}2. Test the language switcher in the browser${colors.reset}`);
  console.log(`${colors.green}3. Verify RTL layout works properly for Arabic${colors.reset}`);
}

console.log('');
process.exit(allValid ? 0 : 1);

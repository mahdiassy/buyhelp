/**
 * tools/comprehensive-hardcode-scanner.js
 * 
 * Ultra-comprehensive scanner for ALL hardcoded text in templates
 */

const fs = require('fs');
const glob = require('glob');

console.log('\x1b[36m🔍 COMPREHENSIVE HARDCODED TEXT SCANNER\x1b[0m\n');

const htmlFiles = glob.sync('src/**/*.html');
const issues = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    const lineNum = index + 1;
    const trimmed = line.trim();
    
    // Skip empty lines
    if (!trimmed) return;
    
    // Skip lines that already use translate
    if (trimmed.includes('| translate')) return;
    
    // Skip Angular template syntax
    if (trimmed.includes('*ngIf') || trimmed.includes('*ngFor') || trimmed.includes('*ngSwitch')) return;
    
    // Skip lines with only Angular expressions
    if (/^{{.*}}$/.test(trimmed)) return;
    
    // Pattern 1: Text between tags without Angular expressions
    // Example: <button>Click Here</button>
    const simpleTextMatch = trimmed.match(/>([A-Z][A-Za-z\s]{2,})<\//);
    if (simpleTextMatch && !trimmed.includes('{{')) {
      const text = simpleTextMatch[1].trim();
      // Filter out likely variable names or single letters
      if (text.length > 2 && !/^\d+$/.test(text)) {
        issues.push({
          file: file.replace(/\\/g, '/'),
          line: lineNum,
          type: 'simple_text',
          text: text,
          original: trimmed,
          severity: 'HIGH'
        });
      }
    }
    
    // Pattern 2: Common button text
    const buttonPatterns = [
      'Add to Cart', 'View All', 'Shop Now', 'Learn More', 'Read More',
      'View Details', 'Quick View', 'Buy Now', 'Apply', 'Clear',
      'Remove', 'Update', 'Save Changes', 'Submit', 'Filter', 'Sort By',
      'Load More', 'Show More', 'Continue', 'Proceed', 'Confirm',
      'Cancel', 'Delete', 'Edit', 'Save', 'Close', 'Back', 'Next'
    ];
    
    buttonPatterns.forEach(pattern => {
      if (trimmed.includes(`>${pattern}<`) && !trimmed.includes('translate')) {
        issues.push({
          file: file.replace(/\\/g, '/'),
          line: lineNum,
          type: 'button_text',
          text: pattern,
          original: trimmed,
          severity: 'CRITICAL'
        });
      }
    });
    
    // Pattern 3: Placeholder text without translate
    const placeholderMatch = trimmed.match(/placeholder="([^"]+)"/);
    if (placeholderMatch && !trimmed.includes('| translate')) {
      const placeholder = placeholderMatch[1];
      // Check if it's not already a translation key
      if (!/^{{\s*'[^']+'\s*\|\s*translate/.test(placeholder)) {
        issues.push({
          file: file.replace(/\\/g, '/'),
          line: lineNum,
          type: 'placeholder',
          text: placeholder,
          original: trimmed,
          severity: 'MEDIUM'
        });
      }
    }
    
    // Pattern 4: Title attribute without translate
    const titleMatch = trimmed.match(/title="([^"]+)"/);
    if (titleMatch && !trimmed.includes('| translate') && !titleMatch[1].includes('{{')) {
      const title = titleMatch[1];
      if (title.length > 2 && /[A-Za-z]/.test(title)) {
        issues.push({
          file: file.replace(/\\/g, '/'),
          line: lineNum,
          type: 'title_attr',
          text: title,
          original: trimmed,
          severity: 'LOW'
        });
      }
    }
    
    // Pattern 5: aria-label without translate
    const ariaMatch = trimmed.match(/aria-label="([^"]+)"/);
    if (ariaMatch && !trimmed.includes('| translate') && !ariaMatch[1].includes('{{')) {
      const ariaLabel = ariaMatch[1];
      if (ariaLabel.length > 2 && /[A-Za-z]/.test(ariaLabel)) {
        issues.push({
          file: file.replace(/\\/g, '/'),
          line: lineNum,
          type: 'aria_label',
          text: ariaLabel,
          original: trimmed,
          severity: 'MEDIUM'
        });
      }
    }
    
    // Pattern 6: Value attribute on buttons/inputs
    const valueMatch = trimmed.match(/value="([^"]+)"/);
    if (valueMatch && trimmed.includes('<button') && !trimmed.includes('| translate')) {
      const value = valueMatch[1];
      if (value.length > 2 && /[A-Za-z]/.test(value)) {
        issues.push({
          file: file.replace(/\\/g, '/'),
          line: lineNum,
          type: 'button_value',
          text: value,
          original: trimmed,
          severity: 'HIGH'
        });
      }
    }
  });
});

// Group by severity
const critical = issues.filter(i => i.severity === 'CRITICAL');
const high = issues.filter(i => i.severity === 'HIGH');
const medium = issues.filter(i => i.severity === 'MEDIUM');
const low = issues.filter(i => i.severity === 'LOW');

console.log(`\x1b[34m📊 Files scanned: ${htmlFiles.length}\x1b[0m`);
console.log(`\x1b[33m⚠️  Total issues found: ${issues.length}\x1b[0m\n`);

console.log(`\x1b[31m🔴 CRITICAL (${critical.length}): Button text\x1b[0m`);
console.log(`\x1b[33m🟡 HIGH (${high.length}): Simple text without {{...}}\x1b[0m`);
console.log(`\x1b[36m🔵 MEDIUM (${medium.length}): Placeholders, aria-labels\x1b[0m`);
console.log(`\x1b[90m⚪ LOW (${low.length}): Title attributes\x1b[0m\n`);

if (issues.length > 0) {
  console.log('\x1b[31m━━━ CRITICAL ISSUES (Must Fix!) ━━━\x1b[0m\n');
  critical.slice(0, 20).forEach((issue, idx) => {
    console.log(`\x1b[31m${idx + 1}. ${issue.file}:${issue.line}\x1b[0m`);
    console.log(`   Text: "${issue.text}"`);
    console.log(`   \x1b[90m${issue.original.substring(0, 100)}${issue.original.length > 100 ? '...' : ''}\x1b[0m\n`);
  });
  
  if (high.length > 0) {
    console.log('\n\x1b[33m━━━ HIGH PRIORITY ISSUES ━━━\x1b[0m\n');
    high.slice(0, 20).forEach((issue, idx) => {
      console.log(`\x1b[33m${idx + 1}. ${issue.file}:${issue.line}\x1b[0m`);
      console.log(`   Text: "${issue.text}"`);
      console.log(`   \x1b[90m${issue.original.substring(0, 100)}${issue.original.length > 100 ? '...' : ''}\x1b[0m\n`);
    });
  }
  
  // Save detailed report
  const report = {
    summary: {
      filesScanned: htmlFiles.length,
      totalIssues: issues.length,
      critical: critical.length,
      high: high.length,
      medium: medium.length,
      low: low.length
    },
    issues: {
      critical,
      high,
      medium,
      low
    }
  };
  
  fs.writeFileSync('tools/comprehensive-scan-report.json', JSON.stringify(report, null, 2));
  console.log(`\n\x1b[36m📄 Full report saved to: tools/comprehensive-scan-report.json\x1b[0m`);
  console.log(`\x1b[33m💡 Review the report and run the auto-fix script next\x1b[0m`);
} else {
  console.log('\x1b[32m✅ NO HARDCODED TEXT FOUND! Everything is properly translated.\x1b[0m');
}

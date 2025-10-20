/**
 * tools/scan-all-untranslated-content.js
 * 
 * Comprehensive scan for ANY untranslated content in templates
 */

const fs = require('fs');
const glob = require('glob');

console.log('\x1b[36m🔍 COMPREHENSIVE UNTRANSLATED CONTENT SCAN\x1b[0m\n');

const htmlFiles = glob.sync('src/**/*.html');
const issues = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    
    // Skip Angular template expressions, ngIf, ngFor, etc.
    if (line.match(/\*ng(If|For|Switch|Template)/)) return;
    if (line.match(/^\s*<!--/)) return; // Skip comments
    if (line.match(/class=|src=|alt=|href=|type=|role=|id=/)) {
      // Skip lines that are primarily attributes
      if (!line.includes('>') || line.match(/\/>/)) return;
    }
    
    // Pattern 1: Hardcoded text in tags (not using translate pipe)
    // Match: >Text here< but NOT >{{ ... }}< or >Text | translate<
    const hardcodedTextPattern = />([A-Z][A-Za-z\s]{2,})</g;
    let match;
    while ((match = hardcodedTextPattern.exec(line)) !== null) {
      const text = match[1].trim();
      
      // Skip if it's part of translate pipe
      if (line.includes(text + ' | translate')) continue;
      if (line.includes(`'${text}'`)) continue;
      if (line.includes(`"${text}"`)) continue;
      
      // Skip common false positives
      if (text.match(/^(Lorem|Ipsum|Home|Shop|Blog|FAQ|About|Contact|Cart|Account|Login|Register|Search|Filter|Sort|Price|Sale|New|Hot|Trending)$/)) continue;
      
      // Check if this looks like UI text (starts with capital, has spaces, reasonable length)
      if (text.length > 3 && text.length < 50 && text.match(/^[A-Z]/)) {
        issues.push({
          file: file.replace(/\\/g, '/'),
          line: lineNum,
          text: text,
          type: 'hardcoded_text',
          severity: 'HIGH',
          context: line.trim()
        });
      }
    }
    
    // Pattern 2: Button with hardcoded text
    const buttonPattern = /<button[^>]*>([^{<][^<]*)<\/button>/g;
    while ((match = buttonPattern.exec(line)) !== null) {
      const text = match[1].trim();
      if (text && !line.includes('| translate') && text.length > 1 && !text.includes('{{')) {
        issues.push({
          file: file.replace(/\\/g, '/'),
          line: lineNum,
          text: text,
          type: 'hardcoded_button',
          severity: 'CRITICAL',
          context: line.trim()
        });
      }
    }
    
    // Pattern 3: Placeholder without translate
    const placeholderPattern = /placeholder="([^{][^"]*)"/g;
    while ((match = placeholderPattern.exec(line)) !== null) {
      const text = match[1].trim();
      if (text && !line.includes('| translate') && text.length > 2) {
        issues.push({
          file: file.replace(/\\/g, '/'),
          line: lineNum,
          text: text,
          type: 'hardcoded_placeholder',
          severity: 'HIGH',
          context: line.trim()
        });
      }
    }
    
    // Pattern 4: Common menu/nav text patterns
    const navTextPattern = /<(?:a|span|li|div)[^>]*>([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)</g;
    while ((match = navTextPattern.exec(line)) !== null) {
      const text = match[1].trim();
      
      // Only flag common navigation keywords
      const navKeywords = ['Pages', 'Products', 'Services', 'Support', 'Seller', 'Dashboard', 
                          'Categories', 'Brands', 'Orders', 'Settings', 'Profile', 'Logout'];
      
      if (navKeywords.includes(text) && !line.includes('| translate')) {
        issues.push({
          file: file.replace(/\\/g, '/'),
          line: lineNum,
          text: text,
          type: 'nav_menu_text',
          severity: 'CRITICAL',
          context: line.trim()
        });
      }
    }
  });
});

// Group by severity
const bySeverity = {
  CRITICAL: issues.filter(i => i.severity === 'CRITICAL'),
  HIGH: issues.filter(i => i.severity === 'HIGH'),
  MEDIUM: issues.filter(i => i.severity === 'MEDIUM'),
  LOW: issues.filter(i => i.severity === 'LOW')
};

console.log(`\x1b[34m📊 Scanned: ${htmlFiles.length} HTML files\x1b[0m`);
console.log(`\x1b[31m❌ Total Issues: ${issues.length}\x1b[0m\n`);

Object.keys(bySeverity).forEach(severity => {
  const count = bySeverity[severity].length;
  if (count > 0) {
    const color = severity === 'CRITICAL' ? '31' : severity === 'HIGH' ? '33' : '36';
    console.log(`\x1b[${color}m${severity}: ${count} issues\x1b[0m`);
  }
});

console.log('\n\x1b[36m━━━ DETAILED ISSUES ━━━\x1b[0m\n');

// Show first 50 issues
const topIssues = issues.slice(0, 50);
topIssues.forEach((issue, idx) => {
  const color = issue.severity === 'CRITICAL' ? '31' : '33';
  console.log(`\x1b[${color}m${idx + 1}. [${issue.severity}] ${issue.type}\x1b[0m`);
  console.log(`   File: ${issue.file}:${issue.line}`);
  console.log(`   Text: "${issue.text}"`);
  console.log(`   Context: ${issue.context.substring(0, 100)}...`);
  console.log('');
});

if (issues.length > 50) {
  console.log(`\x1b[33m... and ${issues.length - 50} more issues\x1b[0m\n`);
}

// Save full report
fs.writeFileSync('tools/untranslated-content-report.json', JSON.stringify({
  summary: {
    filesScanned: htmlFiles.length,
    totalIssues: issues.length,
    bySeverity: {
      critical: bySeverity.CRITICAL.length,
      high: bySeverity.HIGH.length,
      medium: bySeverity.MEDIUM.length,
      low: bySeverity.LOW.length
    }
  },
  issues: issues
}, null, 2));

console.log(`\x1b[36m📄 Full report saved to: tools/untranslated-content-report.json\x1b[0m`);

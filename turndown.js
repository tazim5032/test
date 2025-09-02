const TurndownService = require('turndown');
const fs = require('fs');

const turndownService = new TurndownService();
const html = fs.readFileSync('README.html', 'utf-8');
const markdown = turndownService.turndown(html);

fs.writeFileSync('README.md', markdown);
console.log('Conversion complete!');

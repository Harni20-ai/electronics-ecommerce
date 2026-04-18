const fs = require('fs');
const path = require('path');
const pagesDir = path.join(__dirname, 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Globally map legacy --accent-color to --primary-start
    content = content.replace(/--accent-color/g, '--primary-start');

    // 2. Fix hardcoded styles in deals.html
    if (file === 'deals.html') {
        content = content.replace('style="background: linear-gradient(135deg, #000, #1a1a1a); color: white; padding: 100px 0;"', '');
        content = content.replace('style="margin-top: 80px; background: white; border-radius: 30px; padding: 64px; text-align: center; border: 1px solid var(--border-color);"', 'class="card text-center" style="margin-top: 80px; padding: 64px;"');
    }

    fs.writeFileSync(filePath, content, 'utf8');
});
console.log("Files successfully scrubbed for old styles. (JS version)");

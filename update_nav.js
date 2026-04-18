const fs = require('fs');
const path = require('path');
const pagesDir = path.join(__dirname, 'pages');

const btnHtml = '                <a href="login.html" class="btn" style="border-radius: 50px; background: linear-gradient(135deg, #8E2DE2, #4A00E0); color: white; padding: 6px 18px; font-size: 14px; font-weight: 500; border: none; display: inline-flex; align-items: center; justify-content: center; height: 32px; text-decoration: none; margin-right: 12px; transition: transform 0.2s;">Login</a>\n';

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Insert the login button right after <div class="nav-actions">
    if (!content.includes('<a href="login.html"')) {
        content = content.replace('<div class="nav-actions">\n', `<div class="nav-actions">\n${btnHtml}`);
    }

    // 2. Remove the old "Account" link from nav-links
    const lines = content.split('\n');
    const newLines = lines.filter(line => !line.includes('href="account.html"') || !line.includes('Account</a>'));

    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
});
console.log("Updated all nav menus (JS version)");

const fs = require('fs');
const glob = require('glob'); // Note: run npm install glob if missing, or use basic fs

// Since we may not have glob package, we'll use a basic directory reader
const path = require('path');
const pagesDir = path.join(__dirname, 'pages');

fs.readdir(pagesDir, (err, files) => {
    if (err) throw err;
    files.filter(f => f.endsWith('.html')).forEach(file => {
        const filePath = path.join(pagesDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        let modified = false;
        const lines = content.split('\n');
        const newLines = lines.filter(line => {
            if (line.includes('cart-btn') && (line.includes('fa-shopping-bag') || line.includes('cart.html'))) {
                modified = true;
                return false; // remove this line
            }
            return true;
        });

        if (modified) {
            fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
        }
    });
    console.log("Removed shopping cart buttons (JS version).");
});

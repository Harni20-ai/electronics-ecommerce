import os
import glob

html_files = glob.glob('d:/websites/electro-premium/pages/*.html')

count = 0
for path in html_files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We will remove lines that have both cart-btn and a link or an icon, typical of the navbar item.
    lines = content.split('\n')
    new_lines = []
    modified = False
    
    for line in lines:
        if 'cart-btn' in line and ('fa-shopping-bag' in line or 'cart.html' in line):
            modified = True
            continue # Remove this line
        new_lines.append(line)
        
    if modified:
        count += 1
        with open(path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))

print(f"Removed shopping buttons from {count} files.")

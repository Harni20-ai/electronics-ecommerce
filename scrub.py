import os
import glob

html_files = glob.glob('d:/websites/electro-premium/pages/*.html')

for path in html_files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Globally map legacy --accent-color to --primary-start
    content = content.replace('--accent-color', '--primary-start')
    
    # 2. Fix hardcoded styles in deals.html
    if 'deals.html' in path:
        content = content.replace('style="background: linear-gradient(135deg, #000, #1a1a1a); color: white; padding: 100px 0;"', '')
        content = content.replace('style="margin-top: 80px; background: white; border-radius: 30px; padding: 64px; text-align: center; border: 1px solid var(--border-color);"', 'class="card text-center" style="margin-top: 80px; padding: 64px;"')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Files successfully scrubbed for old styles.")

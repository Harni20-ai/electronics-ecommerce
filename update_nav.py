import os
import glob

html_files = glob.glob('d:/websites/electro-premium/pages/*.html')

btn_html = '                <a href="login.html" class="btn" style="border-radius: 50px; background: linear-gradient(135deg, #8E2DE2, #4A00E0); color: white; padding: 6px 18px; font-size: 14px; font-weight: 500; border: none; display: inline-flex; align-items: center; justify-content: center; height: 32px; text-decoration: none; margin-right: 12px; transition: transform 0.2s;">Login</a>\n'

for path in html_files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Insert the login button right after <div class="nav-actions">
    if '<a href="login.html"' not in content:
        content = content.replace('<div class="nav-actions">\n', f'<div class="nav-actions">\n{btn_html}')
    
    # 2. Remove the old "Account" link from nav-links to keep it clean
    lines = content.split('\n')
    new_lines = [line for line in lines if 'href="account.html"' not in line or 'Account</a>' not in line]
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))

print("Updated all nav menus")

import os
import re

base_dir = "/Users/sashi/Documents/NSGI WEBSITES/NSA OFFICIAL "
batches_dir = os.path.join(base_dir, "batches")
index_path = os.path.join(base_dir, "index.html")

# Read index.html
with open(index_path, 'r', encoding='utf-8') as f:
    index_content = f.read()

# Extract header (from <!-- Top Contact Bar --> to </header>)
header_match = re.search(r'(<!-- Top Contact Bar -->.*?</header>)', index_content, re.DOTALL)
if not header_match:
    print("Could not find header in index.html")
    exit(1)
header_html = header_match.group(1)

# Extract footer (from <footer ...> to </footer>)
footer_match = re.search(r'(<footer.*?</footer>)', index_content, re.DOTALL)
if not footer_match:
    print("Could not find footer in index.html")
    exit(1)
footer_html = footer_match.group(1)

# Update paths in header and footer for use in 'batches/' directory
def fix_paths(html_str):
    # Fix links
    html_str = re.sub(r'href="((?!http|tel|mailto|#|\.\./)[^"]+)"', r'href="../\1"', html_str)
    # Fix images
    html_str = re.sub(r'src="((?!http|\.\./)[^"]+)"', r'src="../\1"', html_str)
    return html_str

new_header = fix_paths(header_html)
new_footer = fix_paths(footer_html)

# Now iterate through all html files in batches/
for filename in os.listdir(batches_dir):
    if not filename.endswith('.html'):
        continue
        
    filepath = os.path.join(batches_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace header
    # We find the <body> tag, and then everything until </header>
    content = re.sub(r'(<body[^>]*>).*?</header>', r'\1\n\n' + new_header, content, flags=re.DOTALL)
    
    # Replace footer
    # We find <footer ...> until </footer>
    content = re.sub(r'<footer.*?</footer>', new_footer, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated {filename}")

print("Done.")

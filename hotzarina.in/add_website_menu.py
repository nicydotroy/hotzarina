#!/usr/bin/env python3
"""
Add 'Website on Rent' menu item to all HTML files in the project.
"""

import os
import re
from pathlib import Path

def update_menu(content):
    """Add Website on Rent menu item if not already present."""
    
    # Pattern to find the nav menu
    pattern = r'(<ul class="nav-menu">.*?<li><a href="contact\.html">Contact</a></li>)(.*?</ul>)'
    
    def replace_menu(match):
        menu_start = match.group(1)
        menu_end = match.group(2)
        
        # Check if "Website on Rent" already exists
        if 'Website on Rent' in menu_end or 'Website on Rent' in menu_start:
            return match.group(0)  # Already has the menu item
        
        # Add the new menu item
        new_item = '\n                    <li><a href="contact.html">Website on Rent</a></li>'
        return menu_start + new_item + menu_end
    
    # Apply the replacement
    updated_content = re.sub(pattern, replace_menu, content, flags=re.DOTALL)
    
    return updated_content

def main():
    # Get all HTML files in current directory
    html_files = list(Path('.').glob('*.html'))
    
    # Exclude google verification files
    html_files = [f for f in html_files if not f.name.startswith('google')]
    
    updated_count = 0
    skipped_count = 0
    
    for html_file in html_files:
        try:
            # Read the file
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Update the content
            updated_content = update_menu(content)
            
            # Check if content changed
            if content != updated_content:
                # Write back the updated content
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
                print(f"✓ Updated: {html_file.name}")
                updated_count += 1
            else:
                print(f"- Skipped: {html_file.name} (already has menu item or no menu found)")
                skipped_count += 1
                
        except Exception as e:
            print(f"✗ Error processing {html_file.name}: {e}")
    
    print(f"\n{'='*60}")
    print(f"Summary:")
    print(f"  Updated: {updated_count} files")
    print(f"  Skipped: {skipped_count} files")
    print(f"  Total:   {len(html_files)} files")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()

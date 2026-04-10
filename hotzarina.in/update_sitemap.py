#!/usr/bin/env python3
"""
Update sitemap.xml with current date for all optimized escort pages
"""

import re
from datetime import datetime

def update_sitemap():
    """Update lastmod dates in sitemap.xml"""
    
    # Read sitemap
    with open('sitemap.xml', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Current date
    current_date = '2026-01-23'
    
    # Pattern to match escort page URLs and their lastmod dates
    pattern = r'(<loc>https://hotzarina\.in/escorts-in-[^<]+</loc>\s*<lastmod>)([^<]+)(</lastmod>)'
    
    # Count replacements
    count = 0
    
    def replace_date(match):
        nonlocal count
        count += 1
        return match.group(1) + current_date + match.group(3)
    
    # Replace all escort page lastmod dates
    new_content = re.sub(pattern, replace_date, content)
    
    # Write back
    with open('sitemap.xml', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("=" * 70)
    print("Sitemap Update Complete")
    print("=" * 70)
    print(f"Updated {count} escort pages with lastmod: {current_date}")
    print("=" * 70)
    
    return count

if __name__ == "__main__":
    update_sitemap()

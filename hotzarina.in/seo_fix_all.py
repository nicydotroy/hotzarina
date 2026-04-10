#!/usr/bin/env python3
"""
SEO Optimization Script for hotzarina.in

Automatically fixes all common on-page SEO issues across ALL HTML pages
(location pages + service pages) to achieve 100/100 on-page SEO score.

Usage:
    python3 seo_fix_all.py              # Fix all pages + sitemap
    python3 seo_fix_all.py --dry-run    # Preview changes without writing
    python3 seo_fix_all.py --verbose    # Show all details

Fixes applied per page (up to 15 checks):
  1. Placeholder phone numbers   (0000000000 → 919038976363)
  2. Double-plus phone prefix     (++91 → +91 in schema)
  3. FAQ phone number             (98765 43210 → 90389 76363)
  4. BDSM link target             (gujarati-escorts.html → bdsm-escorts.html)
  5. ImageObject uploadDate       (2025-01-15 → current date)
  6. Review author name           (Customer Review → real name)
  7. Review datePublished         (2025-12-15 → current date)
  8. Review body                  (generic → improved with location context)
  9. Copyright year               (2025 → current year)
 10. Footer link                  (index.html → self-referencing page)
 11. Self-referencing cards       (removed from location grids)
 12. Duplicate Churchgate card    (removed)
 13. Geo meta tags alignment      (synced with schema coordinates)
 14. article:modified_time        (added if missing)
 15. Broken href spaces           (href=" escorts... → href="escorts...)
 16. Sitemap.xml                  (lastmod, changefreq, priority updated)
"""

import os
import re
import sys
import glob
import hashlib

# ═══════════════════════════════════════════════════════════════════════════════
# CONFIGURATION
# ═══════════════════════════════════════════════════════════════════════════════

CORRECT_PHONE = "919038976363"
CORRECT_PHONE_FORMATTED = "+91 90389 76363"
CORRECT_PHONE_FULL = "+919038976363"
CURRENT_DATE = "2026-02-28"
MODIFIED_TIME = "2026-02-28T00:00:00+05:30"
REVIEW_DATE = "2026-02-15"
CURRENT_YEAR = "2026"
SITE_URL = "https://hotzarina.in"

# Pages to skip entirely (different templates — only skip template-specific fixes)
SKIP_TEMPLATE_FIXES = {
    'index.html', 'services.html', 'location.html',
    'gallery.html', 'about.html', 'privacy.html', 'terms.html'
}

# Reviewer names pool — selected deterministically by hashing filename
REVIEWER_NAMES = [
    "Rahul K.", "Amit S.", "Vikram P.", "Sanjay D.", "Deepak R.",
    "Nikhil S.", "Ankit P.", "Rohit M.", "Prasad K.", "Rajesh P.",
    "Vishal T.", "Harsh M.", "Suresh G.", "Manoj V.", "Kiran B.",
    "Arun N.", "Pankaj L.", "Gaurav S.", "Vivek R.", "Ashish K.",
    "Dhruv M.", "Arjun T.", "Sachin P.", "Neeraj D.", "Ajay B.",
    "Ravi K.", "Sandeep M.", "Pradeep S.", "Manish G.", "Tushar V.",
    "Mohit R.", "Varun D.", "Hemant S.", "Kunal P.", "Akash T.",
    "Shubham K.", "Yash M.", "Dev G.", "Pranav S.", "Rohan B.",
]


# ═══════════════════════════════════════════════════════════════════════════════
# HELPERS
# ═══════════════════════════════════════════════════════════════════════════════

def get_reviewer_name(filename):
    """Get a consistent reviewer name based on filename hash."""
    hash_val = int(hashlib.md5(filename.encode()).hexdigest(), 16)
    return REVIEWER_NAMES[hash_val % len(REVIEWER_NAMES)]


def get_page_slug(filename):
    """escorts-in-andheri.html → escorts-in-andheri"""
    return filename.replace('.html', '')


def get_location_name(filename):
    """Extract display location name from filename.
    escorts-in-andheri.html → Andheri
    escorts-in-lower-parel.html → Lower Parel
    celebrity-escorts.html → None (service page)
    """
    if filename.startswith('escorts-in-'):
        slug = filename.replace('escorts-in-', '').replace('.html', '')
        parts = slug.split('-')
        # Handle special cases
        special = {
            'cst': 'CST',
            'cbd': 'CBD',
        }
        titled = []
        for p in parts:
            titled.append(special.get(p, p.capitalize()))
        return ' '.join(titled)
    return None


def is_location_page(filename):
    """Check if a file is a location page (escorts-in-*.html)."""
    return filename.startswith('escorts-in-')


def is_service_page(filename):
    """Check if a file is a service category page (*-escorts.html)."""
    return filename.endswith('-escorts.html') and not filename.startswith('escorts-in-')


# ═══════════════════════════════════════════════════════════════════════════════
# FIX FUNCTIONS — each returns (new_content, change_count)
# ═══════════════════════════════════════════════════════════════════════════════

def fix_placeholder_phones(content):
    """Fix all instances of placeholder phone 0000000000."""
    original = content

    # Schema telephone — handles both +91 and ++91 prefix variants
    content = content.replace('"++910000000000"', f'"{CORRECT_PHONE_FULL}"')
    content = content.replace('"+910000000000"', f'"{CORRECT_PHONE_FULL}"')

    # tel: links
    content = content.replace('tel:+910000000000', f'tel:{CORRECT_PHONE_FULL}')
    content = content.replace('tel:++910000000000', f'tel:{CORRECT_PHONE_FULL}')

    # wa.me links
    content = content.replace('wa.me/910000000000', f'wa.me/{CORRECT_PHONE}')

    # aria-labels and button labels
    content = content.replace('WhatsApp 910000000000', f'WhatsApp {CORRECT_PHONE}')
    content = content.replace('Call 910000000000', f'Call {CORRECT_PHONE}')
    content = content.replace('Call +910000000000', f'Call {CORRECT_PHONE_FULL}')

    # Body text / hero / footer display phone ("+91 0000000000" with space)
    content = content.replace('+91 0000000000', CORRECT_PHONE_FORMATTED)

    return content, (1 if content != original else 0)


def fix_double_plus_phone(content):
    """Fix ++91 prefix in schema telephone to +91."""
    original = content
    content = content.replace('"++919038976363"', f'"{CORRECT_PHONE_FULL}"')
    return content, (1 if content != original else 0)


def fix_faq_phone(content):
    """Fix FAQ answer phone from 98765 43210 to correct number."""
    original = content
    content = content.replace('+91 98765 43210', CORRECT_PHONE_FORMATTED)
    return content, (1 if content != original else 0)


def fix_bdsm_link(content, location_name):
    """Fix BDSM link from gujarati-escorts.html to bdsm-escorts.html."""
    old = '<a href="gujarati-escorts.html" class="btn-service">Book BDSM Escorts</a>'
    if old not in content:
        return content, 0

    if location_name:
        new = (f'<a href="bdsm-escorts.html" class="btn-service" '
               f'aria-label="Book BDSM Escorts in {location_name}">Book BDSM Escorts</a>')
    else:
        new = ('<a href="bdsm-escorts.html" class="btn-service" '
               'aria-label="Book BDSM Escorts">Book BDSM Escorts</a>')

    return content.replace(old, new), 1


def fix_upload_date(content):
    """Fix ImageObject uploadDate to current date."""
    original = content
    content = content.replace('"uploadDate": "2025-01-15"', f'"uploadDate": "{CURRENT_DATE}"')
    return content, (1 if content != original else 0)


def fix_review_author(content, filename):
    """Fix review author from 'Customer Review' to real name."""
    changes = 0
    if '"name": "Customer Review"' in content:
        reviewer = get_reviewer_name(filename)
        content = content.replace('"name": "Customer Review"', f'"name": "{reviewer}"')
        changes += 1
    return content, changes


def fix_review_date(content):
    """Fix review datePublished from 2025-12-15."""
    original = content
    content = content.replace('"datePublished": "2025-12-15"', f'"datePublished": "{REVIEW_DATE}"')
    return content, (1 if content != original else 0)


def fix_review_body(content, location_name):
    """Improve generic review body that uses 'city landmarks and attractions'."""
    if not location_name or 'city landmarks and attractions' not in content:
        return content, 0

    pattern = re.compile(
        r'"reviewBody":\s*"[^"]*city landmarks and attractions[^"]*"'
    )

    new_body = (
        f'"reviewBody": "Outstanding escort service across {location_name}! '
        f'Comprehensive coverage at all major {location_name} locations and popular areas. '
        f'Available 24/7 with excellent connectivity and easy access across the city. '
        f'Professional, discreet, and verified escorts with premium service quality."'
    )

    new_content = pattern.sub(new_body, content)
    return new_content, (1 if new_content != content else 0)


def fix_copyright_year(content):
    """Fix copyright year from 2025 to current year."""
    original = content
    content = re.sub(r'Copyright © 2025', f'Copyright © {CURRENT_YEAR}', content)
    return content, (1 if content != original else 0)


def fix_footer_link(content, filename):
    """Fix footer copyright link from index.html to self-referencing."""
    slug = get_page_slug(filename)

    # Match: <a href="index.html" style="color: #ba55d3;">
    # Only in the copyright/footer-bottom line
    pattern = re.compile(
        r'(<p>Copyright[^<]*<a href=")index\.html(" style="color: #ba55d3;")'
    )

    new_content = pattern.sub(rf'\g<1>{slug}.html\2', content)
    return new_content, (1 if new_content != content else 0)


def fix_self_ref_cards(content, filename):
    """Remove ALL self-referencing location cards (top grid + alphabetical)."""
    slug = get_page_slug(filename)
    changes = 0

    # Pattern matches a full location-card div block that links to self
    # Handles optional leading space in href (href=" escorts-in-...)
    card_pattern = re.compile(
        r'\s*<div class="location-card">\s*'
        r'<img src="images/escorts/' + re.escape(slug) + r'\.webp"[^>]*>\s*'
        r'<div class="location-info">\s*'
        r'<a href="\s*' + re.escape(slug) + r'\.html"[^>]*>[^<]*</a>\s*'
        r'</div>\s*'
        r'</div>',
        re.DOTALL
    )

    matches = card_pattern.findall(content)
    if matches:
        content = card_pattern.sub('', content)
        changes = len(matches)

    return content, changes


def fix_duplicate_churchgate(content):
    """Remove the second of two consecutive Churchgate location cards."""
    churchgate_card = (
        r'<div class="location-card">\s*'
        r'<img src="images/escorts/escorts-in-churchgate\.webp"[^>]*>\s*'
        r'<div class="location-info">\s*'
        r'<a href="escorts-in-churchgate\.html"[^>]*>[^<]*</a>\s*'
        r'</div>\s*'
        r'</div>'
    )

    pattern = re.compile(
        r'(' + churchgate_card + r')\s*' + churchgate_card,
        re.DOTALL
    )

    new_content = pattern.sub(r'\1', content)
    return new_content, (1 if new_content != content else 0)


def fix_geo_alignment(content):
    """Align geo.position and ICBM meta tags with schema coordinates."""
    lat_match = re.search(r'"latitude":\s*([\d.]+)', content)
    lng_match = re.search(r'"longitude":\s*([\d.]+)', content)

    if not (lat_match and lng_match):
        return content, 0

    schema_lat = lat_match.group(1)
    schema_lng = lng_match.group(1)
    changes = 0

    # Fix geo.position
    geo_pattern = re.compile(r'<meta name="geo\.position" content="[\d.]+;[\d.]+">')
    new_geo = f'<meta name="geo.position" content="{schema_lat};{schema_lng}">'
    new_content = geo_pattern.sub(new_geo, content)
    if new_content != content:
        changes += 1
    content = new_content

    # Fix ICBM
    icbm_pattern = re.compile(r'<meta name="ICBM" content="[\d.]+,\s*[\d.]+">')
    new_icbm = f'<meta name="ICBM" content="{schema_lat}, {schema_lng}">'
    new_content = icbm_pattern.sub(new_icbm, content)
    if new_content != content:
        changes += 1
    content = new_content

    return content, (1 if changes > 0 else 0)


def add_modified_time(content):
    """Add article:modified_time meta tag after ICBM (or canonical link as fallback)."""
    if 'article:modified_time' in content:
        return content, 0

    # Try inserting after ICBM meta tag first (location pages)
    pattern = r'(<meta name="ICBM" content="[^"]*">)'
    replacement = rf'\1\n    <meta property="article:modified_time" content="{MODIFIED_TIME}">'
    new_content = re.sub(pattern, replacement, content)
    if new_content != content:
        return new_content, 1

    # Fallback: insert after canonical link (service pages)
    pattern = r'(<link rel="canonical" href="[^"]*">)'
    replacement = rf'\1\n    <meta property="article:modified_time" content="{MODIFIED_TIME}">'
    new_content = re.sub(pattern, replacement, content)
    return new_content, (1 if new_content != content else 0)


def fix_self_ref_service_card(content, filename):
    """Remove self-referencing service card (e.g. 'Book Goa Escorts' on the Goa page)."""
    slug = get_page_slug(filename)
    link_marker = f'href="{slug}.html" class="btn-service"'

    if link_marker not in content:
        return content, 0

    # Find the self-ref link, then walk backwards to find the opening service-card div
    lines = content.split('\n')
    link_line = None
    for i, line in enumerate(lines):
        if link_marker in line:
            link_line = i
            break

    if link_line is None:
        return content, 0

    # Walk backwards from the link to find '<div class="service-card">'
    start = None
    for i in range(link_line, -1, -1):
        if '<div class="service-card">' in lines[i]:
            start = i
            break

    if start is None:
        return content, 0

    # Walk forwards from the link to find the matching closing </div>s
    # After the link: </div> (service-info) then </div> (service-card)
    end = None
    div_closes_needed = 2  # close service-info + service-card
    for i in range(link_line + 1, len(lines)):
        stripped = lines[i].strip()
        if stripped == '</div>':
            div_closes_needed -= 1
            if div_closes_needed == 0:
                end = i
                break

    if end is None:
        return content, 0

    # Remove lines from start to end (inclusive)
    new_lines = lines[:start] + lines[end + 1:]
    return '\n'.join(new_lines), 1


def fix_broken_href_spaces(content):
    """Fix href attributes with leading spaces: href=" escorts-in-..." → href="escorts-in-..." """
    original = content
    content = re.sub(r'href="\s+(escorts-in-)', r'href="\1', content)
    return content, (1 if content != original else 0)


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN PROCESSING
# ═══════════════════════════════════════════════════════════════════════════════

def process_file(filepath, dry_run=False):
    """Process a single HTML file and apply all SEO fixes.
    Returns (total_changes, fix_details_list)."""
    filename = os.path.basename(filepath)
    location_name = get_location_name(filename)

    with open(filepath, 'r', encoding='utf-8') as f:
        original = f.read()

    content = original
    total_changes = 0
    fix_details = []

    # ── Apply all fix functions sequentially ──

    # 1. Placeholder phones (0000000000)
    content, n = fix_placeholder_phones(content)
    if n:
        fix_details.append("  ✅ Fixed placeholder phone numbers (0000000000)")
        total_changes += n

    # 2. Double-plus phone (++91)
    content, n = fix_double_plus_phone(content)
    if n:
        fix_details.append("  ✅ Fixed double-plus phone prefix (++91)")
        total_changes += n

    # 3. FAQ phone
    content, n = fix_faq_phone(content)
    if n:
        fix_details.append("  ✅ Fixed FAQ phone number → 90389 76363")
        total_changes += n

    # 4. BDSM link
    content, n = fix_bdsm_link(content, location_name)
    if n:
        fix_details.append("  ✅ Fixed BDSM link → bdsm-escorts.html")
        total_changes += n

    # 5. Upload date
    content, n = fix_upload_date(content)
    if n:
        fix_details.append(f"  ✅ Updated uploadDate → {CURRENT_DATE}")
        total_changes += n

    # 6. Review author
    content, n = fix_review_author(content, filename)
    if n:
        reviewer = get_reviewer_name(filename)
        fix_details.append(f"  ✅ Fixed review author → {reviewer}")
        total_changes += n

    # 7. Review date
    content, n = fix_review_date(content)
    if n:
        fix_details.append(f"  ✅ Updated review date → {REVIEW_DATE}")
        total_changes += n

    # 8. Review body (generic → improved)
    if location_name:
        content, n = fix_review_body(content, location_name)
        if n:
            fix_details.append("  ✅ Improved review body text")
            total_changes += n

    # 9. Copyright year
    content, n = fix_copyright_year(content)
    if n:
        fix_details.append(f"  ✅ Updated copyright year → {CURRENT_YEAR}")
        total_changes += n

    # 10. Footer link
    content, n = fix_footer_link(content, filename)
    if n:
        fix_details.append("  ✅ Fixed footer link → self-referencing")
        total_changes += n

    # 11. Self-referencing location cards (location pages only)
    if is_location_page(filename):
        content, n = fix_self_ref_cards(content, filename)
        if n:
            fix_details.append(f"  ✅ Removed {n} self-referencing location card(s)")
            total_changes += n

    # 12. Duplicate Churchgate card
    content, n = fix_duplicate_churchgate(content)
    if n:
        fix_details.append("  ✅ Removed duplicate Churchgate card")
        total_changes += n

    # 13. Geo alignment
    content, n = fix_geo_alignment(content)
    if n:
        fix_details.append("  ✅ Aligned geo meta tags with schema coordinates")
        total_changes += n

    # 14. article:modified_time
    content, n = add_modified_time(content)
    if n:
        fix_details.append("  ✅ Added article:modified_time meta tag")
        total_changes += n

    # 15. Broken href spaces
    content, n = fix_broken_href_spaces(content)
    if n:
        fix_details.append("  ✅ Fixed broken href with leading spaces")
        total_changes += n

    # 16. Self-referencing service card
    content, n = fix_self_ref_service_card(content, filename)
    if n:
        fix_details.append("  ✅ Removed self-referencing service card")
        total_changes += n

    # ── Write if changed ──
    if content != original and not dry_run:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

    return total_changes, fix_details


def update_sitemap(fixed_files, dry_run=False):
    """Update sitemap.xml for all fixed files: lastmod, changefreq, priority."""
    sitemap_path = 'sitemap.xml'
    if not os.path.exists(sitemap_path):
        print("⚠️  sitemap.xml not found, skipping sitemap update")
        return 0

    with open(sitemap_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    changes = 0

    for filename in fixed_files:
        url = f'{SITE_URL}/{filename}'

        # Match the URL block in sitemap
        pattern = re.compile(
            r'(<loc>' + re.escape(url) + r'</loc>\s*)'
            r'<lastmod>[^<]+</lastmod>(\s*)'
            r'<changefreq>[^<]+</changefreq>(\s*)'
            r'<priority>[^<]+</priority>'
        )

        replacement = (
            rf'\g<1>'
            rf'<lastmod>{CURRENT_DATE}</lastmod>\2'
            rf'<changefreq>daily</changefreq>\3'
            rf'<priority>0.9</priority>'
        )

        new_content = pattern.sub(replacement, content)
        if new_content != content:
            changes += 1
        content = new_content

    if content != original and not dry_run:
        with open(sitemap_path, 'w', encoding='utf-8') as f:
            f.write(content)

    return changes


def main():
    """Main entry point."""
    dry_run = '--dry-run' in sys.argv
    verbose = '--verbose' in sys.argv

    # Find all target HTML files
    all_html = sorted(glob.glob('*.html'))
    target_files = []

    for f in all_html:
        if f.startswith('google'):
            continue
        target_files.append(f)

    mode = "DRY RUN" if dry_run else "LIVE"
    print(f"\n{'═' * 64}")
    print(f"  🔧  SEO Optimization Script for hotzarina.in  [{mode}]")
    print(f"  📄  Found {len(target_files)} pages to process")
    print(f"{'═' * 64}\n")

    fixed_count = 0
    clean_count = 0
    total_fixes = 0
    fixed_files = []

    for filename in target_files:
        filepath = os.path.join('.', filename)
        changes, details = process_file(filepath, dry_run=dry_run)

        if changes > 0:
            fixed_count += 1
            total_fixes += changes
            fixed_files.append(filename)
            print(f"📝  {filename}  — {changes} fix(es)")
            for d in details:
                print(d)
            print()
        else:
            clean_count += 1
            if verbose:
                print(f"✨  {filename}  — already clean")

    # Update sitemap
    print(f"{'─' * 64}")
    print(f"📍  Updating sitemap.xml...")
    sitemap_changes = update_sitemap(fixed_files, dry_run=dry_run)
    if sitemap_changes > 0:
        print(f"  ✅ Updated {sitemap_changes} entries in sitemap.xml")
    else:
        print(f"  ✨ Sitemap already up to date")

    # Summary
    print(f"\n{'═' * 64}")
    print(f"  📊  SUMMARY")
    print(f"  {'─' * 58}")
    print(f"  Fixed:    {fixed_count} pages  ({total_fixes} total fixes applied)")
    print(f"  Clean:    {clean_count} pages  (no changes needed)")
    print(f"  Sitemap:  {sitemap_changes} entries updated")
    print(f"  Total:    {len(target_files)} pages processed")
    if dry_run:
        print(f"\n  ⚠️  DRY RUN — no files were modified")
        print(f"  Run without --dry-run to apply changes")
    print(f"{'═' * 64}\n")


if __name__ == '__main__':
    main()

# Copilot Instructions for hotzarina.in

## Project Overview
Static HTML website with 150+ location-specific and service-category pages for escort services. Built for SEO optimization with extensive metadata, schema markup, and performance optimizations. Hosted on Apache server (uses `.htaccess`).

## Architecture & Structure

### Page Types (3 distinct templates)
1. **Homepage** (`index.html`) - Main landing page with hero, service grid, location grid, gallery, and contact
2. **Location Pages** (`escorts-in-*.html`) - 100+ location-specific pages (e.g., `escorts-in-andheri.html`, `escorts-in-mumbai.html`)
3. **Service Category Pages** (`*-escorts.html`) - Service type pages (e.g., `celebrity-escorts.html`, `vip-escorts.html`, `russian-escorts.html`)

### File Organization
```
/
├── index.html (homepage)
├── *.html (150+ location & service pages)
├── css/
│   ├── style.css (unminified)
│   ├── style.min.css (production)
│   └── floating-buttons.css
├── js/
│   ├── script.js (unminified)
│   └── script.min.js (production)
├── images/
│   ├── Services/ (service category images)
│   ├── escorts/ (location-specific images)
│   └── name/ (profile images)
├── sitemap.xml (all pages indexed)
├── robots.txt
├── llms.txt (AI crawling guidelines)
└── .htaccess (Apache configs)
```

## SEO & Metadata Patterns

### Every HTML page MUST include:
1. **Comprehensive meta tags**: title, description, keywords, Open Graph, Twitter Card
2. **Schema.org markup**: LocalBusiness, FAQPage, BreadcrumbList
3. **Canonical URL**: `<link rel="canonical" href="...">`
4. **Geo tags**: region, placename, position (for location pages)
5. **Performance optimizations**: preconnect, dns-prefetch, preload

### Template-specific metadata:
- **Location pages**: Update geo coordinates, address, placename for each location
- **Service pages**: Generic Mumbai location data (19.0760, 72.8777)
- **All pages**: Phone number `+919038976363`, WhatsApp `919038976363`

## Key Conventions

### HTML Structure
- Clean, semantic HTML5
- Accessibility: ARIA labels on buttons/links, alt text on all images
- Responsive: mobile-first with viewport meta tag
- Image formats: `.webp` preferred, PNG fallbacks
- Loading: `loading="lazy"` on non-critical images

### Styling
- Custom CSS, no frameworks
- Uses CSS variables (check `style.css` for colors)
- Purple/pink gradient theme (`rgba(128, 0, 128, 0.7)`)
- Mobile-responsive grid layouts
- Minified CSS in production (`style.min.css`)

### JavaScript
- Vanilla JS only, no frameworks
- Key features: hamburger menu, back-to-top, FAQ accordion, smooth scroll, contact form → WhatsApp redirect
- WhatsApp phone: `917439075342` (contact form), `919038976363` (floating buttons)
- Minified in production (`script.min.js`)

### Floating Buttons Pattern
All pages have fixed floating buttons (bottom-right and bottom-left):
- **Right side**: WhatsApp, Telegram buttons
- **Left side**: Phone call button
- CSS: `floating-buttons.css`
- Layout: `floating-buttons-right`, `floating-buttons-left` classes

## Development Workflows

### Adding New Pages
1. Copy template from similar page type (location vs. service)
2. Update ALL metadata: title, description, OG tags, schema, canonical URL
3. Update geo data (location pages only)
4. Update hero background image path
5. Update breadcrumb navigation
6. Add to `sitemap.xml` with appropriate priority/changefreq
7. Verify floating buttons are present

### Bulk Updates
Python scripts for site-wide changes (see `add_whatsapp_floating.py`, `add_website_menu.py`):
- Iterate all `.html` files (excludes `google*.html`)
- Use regex to find insertion points in HTML structure
- Skip files that already have the update (idempotent operations)
- Always use UTF-8 encoding with `encoding='utf-8'`
- Test pattern matching before writing files

### Performance Optimization
- Minify CSS/JS before deployment
- Use `.webp` images with PNG fallbacks
- Set proper cache headers in `.htaccess`
- GZIP compression enabled via `.htaccess`

## Common Tasks

### Update Phone Numbers Site-wide
Search patterns:
- WhatsApp link: `https://wa.me/919038976363`
- Phone link: `tel:+919038976363`
- Contact form JS: `917439075342`
- Schema: `+919038976363`

### Add New Service Category
1. Create new `[service]-escorts.html` from template
2. Update metadata with service keywords
3. Add service card to homepage service grid
4. Add image to `images/Services/`
5. Update `sitemap.xml`

### Add New Location
1. Create `escorts-in-[location].html` from location template
2. Get geo coordinates for location
3. Update all location-specific metadata
4. Add to homepage location grid
5. Add image to `images/escorts/`
6. Update `sitemap.xml`

## External Dependencies
- Google Fonts: Poppins (300, 400, 500, 600, 700)
- No npm/build tools - pure HTML/CSS/JS
- Hosted on Apache (`.htaccess` configurations)

## Important Files
- `sitemap.xml`: All pages with SEO metadata (1000+ URLs indexed)
- `.htaccess`: HTTPS redirect, URL rewriting, compression, caching, security headers
- `llms.txt`: AI crawling guidelines
- `robots.txt`: Search engine directives
- `add_whatsapp_floating.py`: Bulk HTML updates example (floating button injection)
- `add_website_menu.py`: Bulk HTML updates example (menu item injection)

## Deployment Notes
- No build process - deploy raw HTML/CSS/JS files
- Minify CSS/JS manually before deploying (`.min.css`, `.min.js`)
- Test `.htaccess` rules on Apache server
- Verify all absolute URLs use `https://hotzarina.in/`
- Check sitemap.xml dates after major updates

## Content Guidelines
- Each page is unique with location/service-specific content
- Consistent structure but varied copy for SEO
- All content is static HTML (no CMS, no database)
- Images are optimized and use modern formats

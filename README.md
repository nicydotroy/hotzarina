# Hotzarina Next.js

A modern, high-performance website built with Next.js 14 and Tailwind CSS, optimized for static site generation.

## Features

- ⚡ Static Site Generation (SSG) for optimal performance
- 🎨 Tailwind CSS for responsive design
- 📱 Mobile-first responsive layout
- 🔍 SEO optimized with Next.js built-ins
- 🚀 Fast page loads with image optimization
- ♿ Accessible components (WCAG compliant)
- 🎯 TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

Generate a static site:

```bash
npm run build
```

The static files will be generated in the `out/` directory, ready for deployment.

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Homepage
│   ├── news/              # News section
│   ├── guides/            # Guides section
│   ├── listings/          # Listings section
│   └── not-found.tsx      # 404 page
├── components/            # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── lib/                   # Utilities and helpers
│   └── constants.ts
└── styles/               # Global styles
public/                   # Static assets (images, fonts, etc.)
```

## Creating Pages

Pages are created automatically based on file structure in `src/app/`:

- `src/app/page.tsx` → `/`
- `src/app/news/page.tsx` → `/news`
- `src/app/guides/page.tsx` → `/guides`
- `src/app/guides/[id]/page.tsx` → `/guides/:id` (dynamic route)

## Deployment

The static site can be deployed to any static hosting service:

- Vercel (automatic)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any CDN

## Scaling to 150+ Pages

For optimal build times and organization with 150+ pages:

1. Use dynamic routes `[id]` for similar page templates
2. Organize pages into logical sections (news, guides, listings, etc.)
3. Use reusable components to maintain consistency
4. Keep content data in JSON or database queries during build
5. Monitor build times and optimize as needed

## Styling

- **Framework**: Tailwind CSS (utility-first CSS)
- **Configuration**: `tailwind.config.ts`
- **Global Styles**: `src/app/globals.css`

## Contributing

1. Create a branch for your feature
2. Make your changes
3. Run `npm run lint` to ensure code quality
4. Submit a pull request

## License

MIT

## Support

For issues and questions, please open an issue in the repository.

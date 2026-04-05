<!-- Use this file to provide workspace-specific custom instructions to Copilot. -->

## Hotzarina Next.js Project

Converting hotzarina.in to Next.js with Tailwind CSS for static site generation (150+ pages).

### Project Configuration

**Framework**: Next.js 14+ with App Router
**Styling**: Tailwind CSS
**Language**: TypeScript
**Static Generation**: Enabled for performance
**Target**: 150+ pages (news, guides, listings, etc.)

### Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── news/              # News section
│   ├── guides/            # Guides section
│   ├── listings/          # Listings section
│   ├── api/               # API routes (if needed)
│   └── not-found.tsx      # 404 page
├── components/            # Reusable React components
├── lib/                   # Utilities and helpers
└── styles/               # Global styles
public/                   # Static assets
next.config.ts           # Next.js configuration
tailwind.config.ts       # Tailwind CSS config
```

### Key Features Configured

- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ App Router for modern routing
- ✅ ESLint for code quality
- ✅ Static Site Generation (SSG) ready
- ✅ Image optimization
- ✅ Font optimization

### Development Commands

```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build for production (static export)
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Static Export Configuration

The `next.config.ts` should be configured with:
```typescript
output: 'export'  // Enables static site generation
```

### Next Steps

1. **Create page components** in `src/app/` (news, guides, listings, etc.)
2. **Build reusable components** in `src/components/`
3. **Add utility functions** in `src/lib/`
4. **Configure routes** using App Router file structure
5. **Add content** for 150+ pages
6. **Build and deploy** as static site

### Notes

- Each page automatically becomes a route in Next.js App Router
- Images should be optimized using Next.js `Image` component
- Use dynamic routes (e.g., `[id]`) for pages with similar templates
- Static generation happens at build time for optimal performance

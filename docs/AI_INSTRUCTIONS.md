# AI Instructions for Cosméticos Coreanos Project

This file contains instructions for AI agents working on this project.

## Quick Start

```bash
cd ~/Projects/cosmeticoscoreanos
npm run dev      # Development server
npm run build    # Production build
```

## Adding New Content

### 1. Add New Category
Edit `src/data/categories.ts`:
```typescript
{
  slug: 'nuevo-slug',
  name: 'Nuevo Nombre',
  description: 'Description...',
  metaDescription: 'Meta description (150 chars)...',
  keywords: ['keyword1', 'keyword2'],
  features: ['Feature 1', 'Feature 2'],
  image: '/images/categories/nuevo-slug.jpg'
}
```

### 2. Add New Brand
Edit `src/data/brands.ts`:
```typescript
{
  slug: 'marca-nueva',
  name: 'Marca Nueva',
  nameKo: '마크',
  country: 'Corea del Sur',
  description: 'Description...',
  metaDescription: 'Meta...',
  keywords: ['kw1', 'kw2'],
  features: ['F1', 'F2'],
  popularProducts: ['Product 1', 'Product 2'],
  priceRange: '$$',
  image: '/images/brands/marca-nueva.jpg'
}
```

### 3. Add Blog Post
Create new file in `src/content/blog/`:
```markdown
---
title: "Title in Spanish"
description: "Meta description..."
date: 2026-01-15
author: "Author Name"
image: "/images/blog/post-image.jpg"
category: "serum-facial"
tags: ["tag1", "tag2"]
---

# H1 Title

Content here...
```

## Image Guidelines

### Finding Images
1. Use Google Images: `site:unsplash.com korean cosmetics`
2. Use Pexels or Unsplash (free commercial use)
3. Download from brand official sites

### Image Requirements
- Format: WebP (preferred) or JPG
- Size: 1200x630 for OG, 800x600 for content
- Max size: 200KB
- Location: `public/images/`

### Naming Convention
- Categories: `serum-facial.jpg`
- Brands: `cosrx.jpg`
- Blog posts: `mejores-serum-2026.jpg`

## SEO Rules

### Title Format
- Category: `[Nombre] | Cosméticos Coreanos Colombia`
- Brand: `[Marca] | Cosméticos Coreanos Colombia`
- Blog: `[Título Optimizado] | K-Beauty Colombia`

### Meta Description
- Length: 150-160 characters
- Include primary keyword
- Add call-to-action when possible

### Schema Required
- BreadcrumbList: All pages
- FAQPage: Categories
- Article: Blog posts

## Project Structure

```
src/
├── data/
│   ├── categories.ts    # 8 categories
│   └── brands.ts       # 10 brands
├── content/
│   └── blog/          # Markdown blog posts
├── layouts/
│   ├── BaseLayout.astro   # Base HTML
│   └── MainLayout.astro   # With nav/footer
├── lib/
│   ├── seo.ts         # SEO utilities
│   └── schema.ts      # TypeScript types
└── pages/
    ├── index.astro        # Home
    ├── categorias.astro    # Categories list
    ├── marcas.astro       # Brands list
    ├── rutinas.astro      # K-Beauty routine
    ├── categoria/[slug].astro  # Dynamic category
    └── marca/[slug].astro      # Dynamic brand
```

## Testing

### Local Development
```bash
npm run dev
# Visit http://localhost:4321
```

### Check SEO
- View page source for meta tags
- Check schema: https://validator.schema.org
- Check sitemap: /sitemap-index.xml

## Deployment

### Build
```bash
npm run build
# Output in dist/
```

### Deploy to Netlify
1. Connect GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

## Adding More Pages (pSEO)

To scale to 100,000+ pages:

1. **Add data source**: Create new data file in `src/data/`
2. **Create dynamic route**: Add `src/pages/[type]/[slug].astro`
3. **Add to getStaticPaths**: Return all slugs
4. **Update sitemap**: Edit `astro.config.mjs`

Example for products:
```typescript
// src/data/products.ts
export const products = [
  { slug: 'cosrx-snail-mucin', name: 'COSRX Snail Mucin', ... }
];

// src/pages/producto/[slug].astro
export async function getStaticPaths() {
  return products.map(p => ({ params: { slug: p.slug } }));
}
```

## Common Tasks

### Update Category
1. Edit `src/data/categories.ts`
2. Rebuild: `npm run build`

### Add FAQ to Category
1. Edit `src/pages/categoria/[slug].astro`
2. Add new `<details>` element in FAQ section

### Fix SEO Issue
1. Check `src/lib/seo.ts` for helpers
2. Verify metadata in page component
3. Test with `curl -s https://... | grep meta`

## Troubleshooting

### Build Errors
- Check TypeScript: `npx tsc --noEmit`
- Clear cache: `rm -rf node_modules/.cache`

### Images Not Loading
- Verify path in `public/images/`
- Check file exists: `ls public/images/`
- Use absolute paths starting with `/`

### SEO Not Working
- Verify JSON-LD in page source
- Test with Google Rich Results Test
- Check canonical URLs

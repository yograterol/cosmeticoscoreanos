# Cosméticos Coreanos Colombia - Documentación del Proyecto

## Visión General

**CosméticosCoreanos.co** es un sitio web de SEO programático (pSEO) dedicado a los cosméticos coreanos (K-Beauty) para el mercado colombiano. El objetivo es crear un sitio escalable capaz de generar 100,000+ páginas de contenido único y orientado a intención de búsqueda.

## Objetivos del Proyecto

### SEO Programático
- Generar páginas automáticamente desde datos estructurados
- Cada página con metadata única (title, description, canonical, OG, Twitter)
- Schema.org completo paraRich Snippets
- Evitar contenido fino, duplicación y canibalización de keywords

### Contenido
- Idioma: Español colombiano (es-CO)
- Categorías de productos (sérums, cremas, protectores solares, etc.)
- Marcas coreanas (COSRX, Innisfree, Laneige, etc.)
- Routines K-Beauty
- Blog con artículos detallados

### Arquitectura Técnica
- **Framework:** Astro (static site generation)
- **Enfoque:** pSEO con datos estructurados
- **Hosting:** Netlify / Vercel / Cloudflare Pages

## Estructura del Proyecto

```
cosmeticoscoreanos/
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── content/          # Contenido Markdown (blog)
│   ├── data/             # Datos estructurados (marcas, categorías)
│   ├── layouts/          # Layouts base
│   ├── lib/              # Utilidades SEO y schema
│   ├── pages/            # Páginas (estáticas + dinámicas)
│   └── styles/           # Estilos globales
├── public/               # Assets estáticos
├── docs/                 # Documentación
└── astro.config.mjs      # Configuración de Astro
```

## Tipos de Página

### 1. Página de Inicio (/)
- Hero con appelée a la acción
- Categorías destacadas
- Marcas populares
- Beneficios de K-Beauty

### 2. Categorías (/categoria/[slug])
- Descripción detallada
- Características del producto
- Guía de elección por tipo de piel
- FAQs con Schema FAQPage
- Breadcrumbs

### 3. Marcas (/marca/[slug])
- Información de marca
- Productos populares
- Características
- FAQs

### 4. Rutinas (/rutinas)
- Rutina K-Beauty de 10 pasos
- Guía para principiantes
- Consejos de aplicación

### 5. Blog (/blog)
- Artículos en Markdown
- Reviews de productos
- Guías detalladas

## SEO Implementation

### Metadata Dinámica
```typescript
// Cada página genera su propia metadata
{
  title: "Sérum Facial Coreano | K-Beauty Colombia",
  description: "Los mejores sérum faciales coreanos...",
  canonical: "https://cosmeticoscoreanos.co/categoria/serum-facial",
  og: { title, description, image, locale: "es_CO" },
  twitter: { card: "summary_large_image" }
}
```

### Schema.org
- **Article:** Para blog posts
- **FAQPage:** Para páginas de FAQs
- **BreadcrumbList:** Para migas de pan
- **Product:** Para páginas de productos
- **Organization:** Datos de la empresa

### Ruteo Dinámico
- `/categoria/[slug]` - 8+ páginas de categorías
- `/marca/[slug]` - 10+ páginas de marcas
- `/blog/[slug]` - Artículos del blog

## Escalabilidad

### Para 100,000+ Páginas
1. **Static Generation (SSG):** Páginas pre-renderizadas
2. **Incremental Regeneration:** Actualización sin rebuild completo
3. **Edge Caching:** CDN global
4. **Image Optimization:** WebP/AVIF otomatis
5. **Code Splitting:** JavaScript mínimo

### Evitar Contenido Fino
- Mínimo 300-500 palabras por página
- FAQs sustanciales
- Context único por página
- Datos estructurados ricos

### Evitar Canibalización
- Keywords principal única por página
- Canonical tags correctos
- Internal linking estratégico

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Despliegue

### Netlify (Recomendado)
```bash
# Instalar CLI
npm install -g netlify-cli

# Desplegar
netlify deploy --prod
```

### Vercel
```bash
# Instalar CLI
npm install -g vercel

# Desplegar
vercel --prod
```

### Cloudflare Pages
1. Conectar repo a Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `dist`

## Contenido Futuro

### Expansión Planificada
- [ ] 50+ artículos de blog
- [ ] 100+ productos con reviews
- [ ] Comparativas detalladas
- [ ] Guías por tipo de piel
- [ ] Tutoriales en video
- [ ] Calculadora de rutina

### Categorías Adicionales
- [ ] Maquillaje coreano
- [ ] Cuidado del cabello
- [ ] Cuidado corporal
- [ ] Hombres

## Licencia
MIT License - Feel free to use and modify.

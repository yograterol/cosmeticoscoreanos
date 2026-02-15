# Workflow: Nuevo Artículo de Blog

## Proceso Completo

### 1. Investigación SEO Previa
- Keyword principal + variantes long-tail
- Buscar en Google: `keyword` + `escribir`
- Analizar top 3 resultados
- Identificar gaps de contenido

### 2. Estructura del Artículo
```
---
title: "Título SEO optimizado"
description: "Meta description 150-160 chars"
date: 2026-01-20
author: "Cosméticos Coreanos Colombia"
image: "/images/blog/[slug].webp"
category: "categoria-slug"
tags: ["tag1", "tag2"]
---

# H1 Title

## Introducción (problema + solución)

## H2: Tema Principal

### H3: Subtema

## H2: Siguiente Tema

## FAQ Section (Schema)

## Conclusión + CTA
```

### 3. Imágenes
1. Buscar en Google Images
2. Descargar de Unsplash/Pexels (libre uso comercial)
3. Convertir a WebP
4. Ubicar en `/public/images/blog/`

### 4. Comandos
```bash
# Descargar imagen
cd ~/Projects/cosmeticoscoreanos/public/images/blog
curl -sL "URL" -o nombre.webp

# O desde URL directa
curl -sL "https://images.unsplash.com/photo-xxx?w=800" -o nombre.webp

# Convertir a WebP (si es JPG/PNG)
cwebp -q 80 imagen.jpg -o imagen.webp
rm imagen.jpg
```

### 5. Push a GitHub
```bash
cd ~/Projects/cosmeticoscoreanos
git add -A
git commit -m "Add: [Título del artículo]"
git push origin main
```

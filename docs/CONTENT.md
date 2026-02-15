# Guías de Contenido - Cosméticos Coreanos Colombia

## Idioma y Localización

### Idioma Principal
- **Español colombiano (es-CO)** como idioma principal
- Tono: Profesional pero accesible, como una amiga que recomienda productos
-Ortografía: Español neutro con preferencias colombianas

### Vocabulario Clave
| Término Coreano | Español Recomendado |
|-----------------|-------------------|
| Serum/Sérum | Sérum |
| Toner | Tónico |
| Cream | Crema |
| Essence | Esencia |
| Ampoule | Ampolla |
| Cleanser | Limpiador |
| Sunscreen | Protector solar |
| Moisturizer | Humectante |
| Sheet mask | Mascarilla de tela |
| Sleeping mask | Mascarilla nocturna |

## Estructura de Contenido por Tipo

### 1. Páginas de Categoría

**Estructura requerida:**
- Title: `[Nombre Categoría] | Cosméticos Coreanos Colombia`
- Meta Description: 150-160 caracteres con keyword principal
- H1: Nombre de categoría
- H2: Sección "Qué es..."
- H2: Beneficios principales (lista)
- H2: Guía de elección por tipo de piel
- H2: FAQs (mínimo 5 preguntas)
- Breadcrumb: Inicio > Categorías > [Categoría]

**Longitud mínima:** 800 palabras

### 2. Páginas de Marca

**Estructura requerida:**
- Title: `[Marca] | Cosméticos Coreanos Colombia`
- Meta Description: 150-160 caracteres
- H1: Nombre de marca
- H2: Historia/Filosofía
- H2: Características principales
- H2: Productos populares (lista con descripciones)
- H2: FAQs

**Longitud mínima:** 600 palabras

### 3. Artículos de Blog

**Estructura requerida:**
- Title: Keyword principal + Gancho emocional
- Meta Description: Resumen intrigante
- Introducción: Problema + Solución
- Cuerpo: Encabezados H2/H3
- Conclusión: Resumen + CTA

**Longitud mínima:** 1200 palabras

## Keywords Objetivo

### High Volume (Categorías Principales)
- sérum facial coreano
- protector solar coreano
- crema humectante coreana
- skincare coreano
- k-beauty

### Medium Volume
- sérum vitamina c coreano
- limpiador facial coreano
- mejores cosméticos coreanos
- skincare routine coreana

### Long Tail
- dónde comprar cosméticos coreanos en Colombia
- sérum para piel seca coreano
- protector solar sin whitecast Colombia
- diferencia entre K-beauty y occidental

## Internal Linking

### Estructura Hub-and-Spoke

```
HOME (Hub)
├── Categorías (Hub)
│   ├── Sérum Facial
│   ├── Crema Humectante
│   └── Protector Solar
├── Marcas (Hub)
│   ├── COSRX
│   └── Laneige
└── Rutinas (Hub)
```

###链接 Recomendadas
- 3-5 enlaces internos por página
- Usar anchor text descriptivo
- Incluir enlaces a categorías relacionadas
- Breadcrumbs en todas las páginas

## Schema Markup

### FAQPage (Obligatorio en categorías)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo usar...?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Respuesta detallada..."
      }
    }
  ]
}
```

### BreadcrumbList (Obligatorio)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "/"},
    {"@type": "ListItem", "position": 2, "name": "Categorías", "item": "/categorias"},
    {"@type": "ListItem", "position": 3, "name": "Sérum Facial", "item": "/categoria/serum-facial"}
  ]
}
```

## Imágenes

### Requisitos
- Formato: WebP o AVIF
- Tamaño máximo: 200KB
- Dimensiones: 1200x630 para OG, 800x600 para contenido
- Alt text: Descriptivo en español

### Nombres de Archivo
- `serum-vitamina-c-cosrx.jpg`
- `crema-humectante-laneige.jpg`
- snake_case, descriptivo

## Cosas a Evitar

### ❌ Contenido Fino
- Páginas con menos de 300 palabras
- FAQs con respuestas de una línea
- Descripciones genéricas sin valor

### ❌ Duplicación
- Mismo contenido en múltiples páginas
- Parámetros UTM en URLs canónicas
- Páginas sin contenido único

### ❌ Canibalización
- Misma keyword en múltiples páginas
- Titles casi idénticos
- мета descriptions sin diferenciación

### ❌ Black Hat SEO
- Keyword stuffing
- Links comprados
- Cloaking
- Contenido oculto

## Mejores Prácticas

1. **Escribir para humanos primero, SEO después**
2. **Actualizar contenido regularmente**
3. **Monitorear rankings y tráfico**
4. **Responder preguntas reales de usuarios**
5. **Incluir experiencias personales (reviews)**
6. **Mantener consistencia en estilo y tono**

## Repositorio de Imágenes

Las imágenes deben descargarse de:
- Google Images (búsqueda)
- Sitios oficiales de marcas
- bancos de imágenes gratuitos (Unsplash, Pexels)

**Nota:** Asegurar que las imágenes no tengan derechos de autor restringidos para uso comercial.

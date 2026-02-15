/**
 * Categorías de Productos - Korean Cosmetics Colombia
 * Targeting es-CO audience
 */

export interface Category {
  slug: string;
  name: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  features: string[];
  image: string;
}

export const categories: Category[] = [
  {
    slug: 'serum-facial',
    name: 'Serum Facial Coreano',
    description: 'Descubre los mejores sérum faciales coreanos para hidratar, iluminar y rejuvenecer tu piel. Fórmulas avanzadas de K-Beauty.',
    metaDescription: 'Los mejores sérum faciales coreanos en Colombia. Descubre sérums hydration, vitamina C, ácido hialurónico y más. Envíos a todo el país.',
    keywords: ['sérum facial coreano', 'serum hydration coreano', 'sérum vitamina c coreano', 'serum acido hialuronico coreano', 'k-beauty serum'],
    features: ['Hidratación intensiva', 'Antienvejecimiento', 'Brillo natural', 'Textura ligera'],
    image: '/images/categories/serum-facial.jpg'
  },
  {
    slug: 'crema-humectante',
    name: 'Crema Humectante Coreana',
    description: 'Humectantes coreanas para todo tipo de piel. Cremas ligeras, gel creams y emulsiones de las mejores marcas.',
    metaDescription: 'Crema humectante coreana para piel seca, mixta y grasosa. Las mejores marcas coreanas disponibles en Colombia.',
    keywords: ['crema humectante coreana', 'moisturizer coreano', 'gel cream coreano', 'emulsion coreana k-beauty'],
    features: ['Hidratación 72 horas', 'Textura no grasosa', 'Apto para todo tipo de piel', '不放'],
    image: '/images/categories/crema-humectante.jpg'
  },
  {
    slug: 'protector-solar',
    name: 'Protector Solar Coreano',
    description: 'Protectores solares coreanos SPF 50+ con textura ligera y sin whitecast. Perfectos para el clima colombiano.',
    metaDescription: 'Protector solar coreano SPF 50+ sin whitecast. Textura ligera y водо-resistant. Mejor protección UVA/UVB disponible en Colombia.',
    keywords: ['protector solar coreano', 'sunscreen coreano spf 50', 'sunscreen sin whitecast', 'protector solar k-beauty'],
    features: ['SPF 50+ PA++++', 'Textura ligera', 'Sin whitecast', 'Resistente al agua'],
    image: '/images/categories/protector-solar.jpg'
  },
  {
    slug: 'limpieza-facial',
    name: 'Productos de Limpieza Facial',
    description: 'Aceites limpiadores, water cleansers y jabones coreanos para una doble limpieza efectiva.',
    metaDescription: 'Limpiadores faciales coreanos: oil cleanser, water cleanser, foam cleanser. Doble limpieza al mejor precio en Colombia.',
    keywords: ['oil cleanser coreano', 'water cleanser coreano', 'jabon facial coreano', 'double cleanse k-beauty'],
    features: ['Doble limpieza', 'pH balanceado', 'No reseca la piel', 'Ingredientes naturales'],
    image: '/images/categories/limpieza-facial.jpg'
  },
  {
    slug: 'mascarilla-facial',
    name: 'Mascarillas Coreanas',
    description: 'Mascarillas en sheet mask, wash-off y sleeping mask de las marcas más populares de K-Beauty.',
    metaDescription: 'Mascarillas coreanas: sheet masks, wash-off, sleeping masks. Hidratación intensiva y beneficios anti-aging.',
    keywords: ['mascarilla coreana', 'sheet mask coreana', 'sleeping mask coreana', 'k-beauty mask'],
    features: ['Hidratación intensiva', 'Fácil aplicación', 'Ingredientes naturales', 'Variedad de beneficios'],
    image: '/images/categories/mascarilla-facial.jpg'
  },
  {
    slug: 'tonico-facial',
    name: 'Tónico Facial Coreano',
    description: 'Tónicos Hydrating, exfoliantes y tonificantes de la rutina de skincare coreana.',
    metaDescription: 'Tónicos faciales coreanos: hydrating toner, exfoliating toner, astringent. Equilibra el pH de tu piel.',
    keywords: ['tonico coreano', 'hydrating toner coreano', 'exfoliating toner coreano', 'esencia coreana'],
    features: ['Equilibra el pH', 'Hidratación', 'Exfoliación suave', 'Prepara la piel'],
    image: '/images/categories/tonico-facial.jpg'
  },
  {
    slug: 'accesorios-k-beauty',
    name: 'Accesorios K-Beauty',
    description: 'Guaa sha, rollers de jade, cotton pads y más accesorios para tu rutina de skincare.',
    metaDescription: 'Accesorios coreanos para skincare: gua sha, jade roller, cotton pads. Mejora tu rutina de belleza coreana.',
    keywords: ['gua sha coreano', 'jade roller', 'accesorios k-beauty', 'cotton pads coreanos'],
    features: ['Mejora absorción', 'Relaja músculos', 'Estimula circulación', 'Calidad premium'],
    image: '/images/categories/accesorios.jpg'
  },
  {
    slug: 'rutinas-k-beauty',
    name: 'Rutinas K-Beauty',
    description: 'Aprende la rutina de skincare coreana de 10 pasos y crea tu propia rutina personalizada.',
    metaDescription: 'Rutina coreana de 10 pasos: cleanse, tone, serum, moisturizer, sunscreen. Guía completa para principiantes.',
    keywords: ['rutina k-beauty', '10 pasos skincare coreano', 'rutina coreana para principiantes', 'k-beauty routine'],
    features: ['Guía paso a paso', 'Para principiantes', 'Productos recomendados', 'Resultados comprobados'],
    image: '/images/categories/rutinas.jpg'
  }
];

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}

/**
 * Get all category slugs for static paths
 */
export function getAllCategorySlugs(): string[] {
  return categories.map(cat => cat.slug);
}

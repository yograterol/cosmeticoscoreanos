/**
 * Marcas de Cosméticos Coreanos - Korean Beauty Brands in Colombia
 */

export interface Brand {
  slug: string;
  name: string;
  nameKo?: string;
  country: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  features: string[];
  popularProducts: string[];
  priceRange: string;
  image: string;
  website?: string;
}

export const brands: Brand[] = [
  {
    slug: 'cosrx',
    name: 'COSRX',
    nameKo: '코스덱스',
    country: 'Corea del Sur',
    description: 'Marca líder en K-Beauty especializada en productos hypoallergenic y efectivos. Famosa por sus ácido salicídico y snail mucin.',
    metaDescription: 'COSRX Colombia: Descubre los mejores productos coreanos. Ácido salicídico, snail mucin, almohadillas de hidrogel. Envíos a todo el país.',
    keywords: ['cosrx colombia', 'cosrx acido salicilico', 'snail mucin cosrx', 'cosrx advanced snail'],
    features: ['Hippoallergenic', 'Minimal ingredients', 'Dermatologically tested', 'Effective formulations'],
    popularProducts: ['Advanced Snail 96 Mucin Power Essence', 'Low PH Good Morning Gel Cleanser', 'AHA/BHA Clarifying Treatment Toner', 'One Step Green Hero Calming Pad'],
    priceRange: '$$',
    image: '/images/brands/cosrx.jpg',
    website: 'https://cosrx.co.kr'
  },
  {
    slug: 'innisfree',
    name: 'Innisfree',
    nameKo: '이니스프리',
    country: 'Corea del Sur',
    description: 'Marca ecológica de Amorepacific que usa ingredientes naturales de Jeju Island. Productos frescos y sostenibles.',
    metaDescription: 'Innisfree Colombia: Cosméticos naturales de Jeju Island. Tés verdes, volcanic, aloe vera. Envíos a todo Colombia.',
    keywords: ['innisfree colombia', 'innisfree green tea', 'innisfree volcanic', 'innisfree aloe'],
    features: ['Ingredientes naturales de Jeju', 'Eco-friendly', 'Sin parabenos', 'Vegano'],
    popularProducts: ['Green Tea Seed Hyaluronic Serum', 'Volcanic Pore Toner', 'Aloe Revital Hydrating Gel', 'Orchid Skin'],
    priceRange: '$$',
    image: '/images/brands/innisfree.jpg',
    website: 'https://innisfreeworld.com'
  },
  {
    slug: 'etude-house',
    name: 'Etude House',
    nameKo: '에뛰드하우스',
    country: 'Corea del Sur',
    description: 'Marca divertida y colorida orientada a jóvenes. Productos cute con efectividad comprobada.',
    metaDescription: 'Etude House Colombia: Maquillaje y skincare coreano. Lovely cookie, SoonJung, SoonJung 2x. Envíos a Colombia.',
    keywords: ['etude house colombia', 'etude house soonjung', 'etude housecookie', 'etude house mascara'],
    features: ['Cute packaging', 'Affordable', 'Varied flavors', 'Effective formulas'],
    popularProducts: ['SoonJung 2x Barrier Intensive Cream', 'Dear Darling Lip Tint', 'Proof 10w Caffeine Eye Cream', 'Moistfull Collagen Eye Cream'],
    priceRange: '$',
    image: '/images/brands/etude-house.jpg',
    website: 'https://etude.com'
  },
  {
    slug: 'laneige',
    name: 'Laneige',
    nameKo: '라네즈',
    country: 'Corea del Sur',
    description: 'Marca premium de Amorepacific especializada en hidratación. Famosa por Lip Sleeping Mask y Water Bank.',
    metaDescription: 'Laneige Colombia: Hidratación intensiva coreana. Lip Sleeping Mask, Water Bank, Cream Skin. Envíos a todo el país.',
    keywords: ['laneige colombia', 'laneige lip sleeping mask', 'laneige water bank', 'laneige cream skin'],
    features: ['Hidratación profunda', 'Tecnología Water Science', 'Premium quality', 'Global bestseller'],
    popularProducts: ['Lip Sleeping Mask', 'Water Bank Hydro Essence', 'Cream Skin Refiner', 'Perfect Renew Firming Sleeping Mask'],
    priceRange: '$$$',
    image: '/images/brands/laneige.jpg',
    website: 'https://laneige.com'
  },
  {
    slug: 'missha',
    name: 'MISSHA',
    nameKo: '미샤',
    country: 'Corea del Sur',
    description: 'Marca coreana famosa por susBB creams y productos antiedad. Excelente relación calidad-precio.',
    metaDescription: 'MISSHA Colombia: BB creams, CC creams,Time Revolution. La mejor relación calidad-precio en K-Beauty.',
    keywords: ['missha colombia', 'missha bb cream', 'missha time revolution', 'missha primer'],
    features: ['Excellent value', 'Anti-aging focus', 'Varied shade range', 'Cruelty-free'],
    popularProducts: ['M Perfect Cover BB Cream', 'Time Revolution Night Repair Ampoule', 'Mistify Fixer Primer', '超级女人 Essence'],
    priceRange: '$$',
    image: '/images/brands/missha.jpg',
    website: 'https://missha.co.kr'
  },
  {
    slug: 'purito',
    name: 'Purito',
    nameKo: '푸리토',
    country: 'Corea del Sur',
    description: 'Marca clean beauty con ingredientes seguros y transparentes. Sin fragancias ni colorantes artificiales.',
    metaDescription: 'Purito Colombia: Clean beautycoreano. Centella, Green Level, Cica. Ingredientes seguros y transparentes.',
    keywords: ['purito colombia', 'purito centella', 'purito green level', 'purito cica'],
    features: ['Clean beauty', 'Sin fragancias', 'Ecológico', 'Ingredients-focused'],
    popularProducts: ['Centella Green Level Unscented Serum', 'Green Level Fresh Sun Cream', 'Cica Clearing BB Cream', 'Comforting Panthenol Cream'],
    priceRange: '$$',
    image: '/images/brands/purito.jpg',
    website: 'https://purito.co.kr'
  },
  {
    slug: 'some-by-mi',
    name: 'Some By Mi',
    nameKo:'썸바이미',
    country: 'Corea del Sur',
    description: 'Marca especializada en productos para acne y piel sensible. Famosa porAHA/BHA/30Days Miracle.',
    metaDescription: 'Some By Mi Colombia: Cuidado para acne y piel sensible. AHA/BHA/30Days Miracle. Envíos a Colombia.',
    keywords: ['some by mi colombia', 'some by mi aha bha', 'some by mi 30 days miracle', 'some by mi toner'],
    features: ['Acne-fighting', 'Piel sensible', 'Fast results', 'Dermatologist tested'],
    popularProducts: ['AHA-BHA-PHA 30Days Miracle Toner', 'Galactomyces Pure Toner', 'Beta Panthenol Calming Mask', 'Truecica Miracle Repair Serum'],
    priceRange: '$$',
    image: '/images/brands/some-by-mi.jpg',
    website: 'https://somebyi.com'
  },
  {
    slug: 'beauty-of-joseon',
    name: 'Beauty of Joseon',
    nameKo: '조선미인',
    country: 'Corea del Sur',
    description: 'Marca que combina ingredientes tradicionales coreanos con ciencia moderna. Famosa por Dynasty Cream y Relief Sun.',
    metaDescription: 'Beauty of Joseon Colombia: K-Beauty tradicionalcoreana. Dynasty Cream, Relief Sun, Hanbang. Envíos a Colombia.',
    keywords: ['beauty of joseon colombia', 'beauty of joseon dynasty cream', 'beauty of joseon relief sun', 'beauty of joseon hanbang'],
    features: ['Hanbang ingredients', 'Historical formulas', 'Modern science', 'Clean formulation'],
    popularProducts: ['Dynasty Cream', 'Relief Sun: Rice + Probiotics', 'Centennial extract', 'Glow Deep Serum'],
    priceRange: '$$',
    image: '/images/brands/beauty-of-joseon.jpg',
    website: 'https://beautyofjoseon.com'
  },
  {
    slug: 'pyunkang-yun',
    name: 'Pyunkang Yul',
    nameKo: '평강율',
    country: 'Corea del Sur',
    description: 'Marca minimalista con fórmulas simples pero efectivas. Sin fragancias ni colorantes innecesarios.',
    metaDescription: 'Pyunkang Yul Colombia: Skincare minimalista coreano. Essence Toner, Moisture Ampoule, ATO. Envíos.',
    keywords: ['pyunkang yul colombia', 'pyunkang yul essence toner', 'pyunkang yul moisture', 'pyunkang yul ato'],
    features: ['Minimal ingredients', 'Fragrance-free', 'Sensitive skin', 'Simple routines'],
    popularProducts: ['Essence Toner', 'Moisture Ampoule', 'ATE Pillow Cream', 'Black Tea Time Zero Cream'],
    priceRange: '$$',
    image: '/images/brands/pyunkang-yul.jpg',
    website: 'https://pyunkang.co.kr'
  },
  {
    slug: 'isntree',
    name: 'IsNTree',
    nameKo: '이즈니트리',
    country: 'Corea del Sur',
    description: 'Marca clean beauty con ingredientes naturales. Especializada en hyaluronic acid y green tea.',
    metaDescription: 'IsNTree Colombia: Clean beauty coreano. Hyaluronic Acid, Green Tea, Onion Newcare. Envíos a Colombia.',
    keywords: ['isntree colombia', 'isntree hyaluronic acid', 'isntree green tea', 'isntree onion'],
    features: ['Clean beauty', 'Natural ingredients', 'Eco-friendly', 'Affordable premium'],
    popularProducts: ['Hyaluronic Acid Toner', 'Green Tea Fresh Cream', 'Onion Newcare Pair Serum', 'Chestnut PHA Cream'],
    priceRange: '$$',
    image: '/images/brands/isntree.jpg',
    website: 'https://isntree.com'
  }
];

/**
 * Get brand by slug
 */
export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find(brand => brand.slug === slug);
}

/**
 * Get all brand slugs for static paths
 */
export function getAllBrandSlugs(): string[] {
  return brands.map(brand => brand.slug);
}

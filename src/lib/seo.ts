/**
 * SEO Utilities for Programmatic SEO
 * Provides dynamic metadata, schema markup, and SEO helpers
 */

import type { Article, FAQ, Breadcrumb, Product } from './schema';

export interface SEOParams {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'faq';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  locale?: string;
  noindex?: boolean;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate dynamic metadata for pages
 */
export function generateMetadata(params: SEOParams) {
  const siteUrl = 'https://cosmeticoscoreanos.co';
  const locale = params.locale || 'es-CO';
  
  return {
    title: params.title,
    description: params.description,
    canonical: params.canonical || `${siteUrl}${params.url || ''}`,
    openGraph: {
      title: params.title,
      description: params.description,
      url: params.canonical || siteUrl,
      siteName: 'Cosméticos Coreanos Colombia',
      locale: locale,
      type: params.type === 'article' ? 'article' : 'website',
      image: params.image || `${siteUrl}/og-default.jpg`,
    },
    twitter: {
      card: 'summary_large_image',
      title: params.title,
      description: params.description,
      image: params.image || `${siteUrl}/og-default.jpg`,
    },
    robots: params.noindex ? {
      index: false,
      follow: false,
    } : undefined,
  };
}

/**
 * Generate Article schema
 */
export function generateArticleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author || 'Cosméticos Coreanos Colombia',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cosméticos Coreanos Colombia',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cosmeticoscoreanos.co/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[], currentUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Product schema
 */
export function generateProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: product.brand ? {
      '@type': 'Brand',
      name: product.brand,
    } : undefined,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'COP',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
    aggregateRating: product.rating ? {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    } : undefined,
  };
}

/**
 * Generate Person schema (for authors)
 */
export function generatePersonSchema(name: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url,
  };
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cosméticos Coreanos Colombia',
    url: 'https://cosmeticoscoreanos.co',
    logo: 'https://cosmeticoscoreanos.co/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+57-XXX-XXXX',
      contactType: 'customer service',
      availableLanguage: 'Spanish',
    },
    sameAs: [
      'https://instagram.com/cosmeticoscoreanos',
      'https://facebook.com/cosmeticoscoreanos',
    ],
  };
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Cosméticos Coreanos Colombia',
    url: 'https://cosmeticoscoreanos.co',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://cosmeticoscoreanos.co/buscar?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

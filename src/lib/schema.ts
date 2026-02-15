/**
 * Schema.org Type Definitions
 */

export interface Article {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface Product {
  name: string;
  description: string;
  image: string | string[];
  brand?: string;
  price?: number;
  inStock?: boolean;
  rating?: number;
  reviewCount?: number;
  url: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image?: string;
  parent?: string;
}

export interface Brand {
  name: string;
  slug: string;
  description: string;
  country?: string;
  image?: string;
  popularProducts?: string[];
}

export interface Review {
  productName: string;
  rating: number;
  title: string;
  content: string;
  author: string;
  date: string;
  pros?: string[];
  cons?: string[];
}

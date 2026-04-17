export type ProductFeature = {
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  title: string;
  category: string;
  price: string;
  shortDescription: string;
  image: string;
  isNew: boolean;
  featured: boolean;
  dimensions: string;
  materials: string[];
  shipping: string;
  features: [ProductFeature, ProductFeature, ProductFeature];
};

export const products: Product[] = [
  {
    slug: 'scandinavian-chair',
    title: 'Scandinavian Chair',
    category: 'dining',
    price: '249',
    shortDescription: 'Modern dining chair with sleek Scandinavian design',
    image:
      'https://z-furnishing.com.au/cdn/shop/products/visby-dining-chair-15.jpg?v=1674101012&width=1240',
    isNew: false,
    featured: true,
    dimensions: 'Width: 22 inches / Height:  32 inches / Depth:  23 inches',
    materials: [
      'Solid Oak Frame',
      'High-density Foam Cushion',
      'Premium Polyester Upholstery',
    ],
    shipping: 'Ships within 3-5 business days',
    features: [
      {
        title: 'Ergonomic Design',
        description:
          'Contoured seat and backrest for maximum comfort during long dinner parties',
      },
      {
        title: 'Durable Construction',
        description: 'Solid oak frame built to withstand daily use for years to come',
      },
      {
        title: 'Sustainable Materials',
        description: 'Made with FSC-certified wood from responsibly managed forests',
      },
    ],
  },
  {
    slug: 'modern-platform-bed',
    title: 'Modern Platform Bed',
    category: 'bedroom',
    price: '899',
    shortDescription: 'Contemporary platform bed with sleek design',
    image:
      'https://z-furnishing.com.au/cdn/shop/products/Stockholm-Bed-Frame-Z-furnishing-1637307191.jpg?v=1637307192&width=1620',
    isNew: true,
    featured: true,
    dimensions: 'Width: 62 inches / Height:  14 inches / Depth:  84 inches',
    materials: [
      'Solid Ash Wood Frame',
      'High-density Plywood Slats',
      'Stainless Steel Hardware',
    ],
    shipping: 'Free shipping, delivered in two boxes',
    features: [
      {
        title: 'Modern Design',
        description: 'Clean lines and minimalist design that complements any bedroom decor',
      },
      {
        title: 'Sturdy Construction',
        description: 'Reinforced frame supports up to 800 lbs without squeaking or wobbling',
      },
      {
        title: 'Eco-friendly Materials',
        description:
          'Made with FSC-certified wood and non-toxic finishes for better indoor air quality',
      },
    ],
  },
  {
    slug: 'cloud-bed-set',
    title: 'Cloud Bedroom Set',
    category: 'bedroom',
    price: '2799',
    shortDescription:
      'Contemporary low-profile platform bed with matching nightstands and dresser in white and charcoal finish',
    image: '/images/cloud-bed-set.jpeg',
    isNew: true,
    featured: false,
    dimensions: 'Width: 64 inches (Queen) / Height:  42 inches / Depth:  86 inches',
    materials: [
      'Engineered Wood Construction',
      'Neutral Fabric Upholstery',
      'Two-Tone White & Charcoal Finish',
      'Metal Hardware Accents',
    ],
    shipping: 'Free standard delivery included',
    features: [
      {
        title: 'Low-Profile Platform Design',
        description:
          'Sleek upholstered headboard with clean lines and contemporary styling for modern bedrooms',
      },
      {
        title: 'Complete Bedroom Suite',
        description:
          'Includes platform bed, two matching nightstands, and dresser with mirror for cohesive design',
      },
      {
        title: 'Premium Upholstered Headboard',
        description:
          'Soft neutral fabric headboard with button tufting adds comfort and sophisticated texture',
      },
    ],
  },
  {
    slug: 'green-velvet-living-set',
    title: 'Green Velvet Living Set',
    category: 'living-room',
    price: '2299',
    shortDescription:
      'Luxurious channel-tufted velvet sofa set with ottoman and side table',
    image: '/images/green-velvet-set-main.jpeg',
    isNew: true,
    featured: true,
    dimensions: 'Width: 84 inches / Height:  32 inches / Depth:  36 inches',
    materials: [
      'Premium Velvet Upholstery',
      'Solid Hardwood Frame',
      'High-density Foam Cushioning',
      'Walnut Wood Finish',
    ],
    shipping: 'White glove delivery service included',
    features: [
      {
        title: 'Premium Velvet Upholstery',
        description:
          'Rich forest green velvet fabric with deep channel tufting for ultimate comfort and style',
      },
      {
        title: 'Solid Wood Frame',
        description:
          'Handcrafted hardwood frame with reinforced joints for exceptional durability',
      },
      {
        title: 'Complete Living Set',
        description:
          'Includes matching sofa, ottoman, and round side table for a cohesive living room design',
      },
    ],
  },
  {
    slug: 'cognac-leather-chesterfield-set',
    title: 'Cognac Leather Chesterfield Set',
    category: 'living-room',
    price: '3299',
    shortDescription:
      'Classic button-tufted leather Chesterfield sofa with matching ottoman in rich cognac brown',
    image: '/images/cognac-chesterfield-set-main.jpeg',
    isNew: true,
    featured: true,
    dimensions: 'Width: 90 inches / Height:  30 inches / Depth:  38 inches',
    materials: [
      'Genuine Leather Upholstery',
      'Solid Hardwood Frame',
      'High-density Foam Cushioning',
      'Dark Wood Legs',
    ],
    shipping: 'White glove delivery service included',
    features: [
      {
        title: 'Genuine Leather Upholstery',
        description:
          'Premium cognac brown leather with traditional diamond button tufting for timeless elegance',
      },
      {
        title: 'Solid Wood Frame',
        description:
          'Handcrafted hardwood frame with reinforced joints for exceptional durability',
      },
      {
        title: 'Complete Chesterfield Set',
        description:
          'Includes matching three-seat sofa and button-tufted ottoman for classic living room style',
      },
    ],
  },
];

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

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
    slug: 'cloud-bed-set',
    title: 'Cloud Bedroom Set',
    category: 'bedroom',
    price: '2799',
    shortDescription:
      'A bouclé-wrapped platform bed paired with matching bedside tables, a dresser with round vanity mirror, and a matching bouclé pouf.',
    image: '/images/cloud-bed-set.jpeg',
    isNew: true,
    featured: true,
    dimensions: 'Contact us for exact dimensions.',
    materials: [
      'Bouclé upholstery on the bed frame and pouf',
      'Two-tone white and charcoal casework',
      'Black metal pulls and mirror frame',
    ],
    shipping: 'Contact us to arrange delivery.',
    features: [
      {
        title: 'Entirely bouclé bed frame',
        description:
          'Soft bouclé fabric wraps the full low-profile bed — headboard, sides, and curved foot.',
      },
      {
        title: 'A five-piece suite',
        description:
          'Bed, two bedside tables, dresser, standing vanity mirror and a matching bouclé pouf.',
      },
      {
        title: 'Calm, minimal silhouette',
        description:
          'White drawer fronts with charcoal sides and softly curved edges.',
      },
    ],
  },
  {
    slug: 'green-velvet-living-set',
    title: 'Green Velvet Living Set',
    category: 'living-room',
    price: '2299',
    shortDescription:
      'A channel-tufted three-seater in forest green velvet, paired with a matching footstool and a leather-topped velvet drum pouf.',
    image: '/images/green-velvet-set-main.jpeg',
    isNew: true,
    featured: true,
    dimensions: 'Contact us for exact dimensions.',
    materials: [
      'Forest green velvet upholstery',
      'Dark wood cabriole legs',
      'Leather top on the accent pouf',
    ],
    shipping: 'Contact us to arrange delivery.',
    features: [
      {
        title: 'Channel-tufted forest velvet',
        description:
          'Vertical channel tufting catches the light and shifts in tone as you move around it.',
      },
      {
        title: 'Three coordinated pieces',
        description:
          'Sofa, rectangular footstool and round drum pouf — all upholstered in the same velvet, with a leather-capped top on the pouf.',
      },
      {
        title: 'Cabriole legs in dark wood',
        description:
          'Classic curved wooden legs sit under every piece.',
      },
    ],
  },
  {
    slug: 'cognac-leather-chesterfield-set',
    title: 'Cognac Leather Chesterfield Set',
    category: 'living-room',
    price: '3299',
    shortDescription:
      'A three-seater Chesterfield in cognac leather, with a matching diamond-tufted bench ottoman on carved cabriole legs.',
    image: '/images/cognac-chesterfield-set-main.jpeg',
    isNew: true,
    featured: true,
    dimensions: 'Contact us for exact dimensions.',
    materials: [
      'Cognac leather upholstery',
      'Dark wood cabriole legs',
    ],
    shipping: 'Contact us to arrange delivery.',
    features: [
      {
        title: 'Classic Chesterfield silhouette',
        description:
          'Straight arms at seat height, a deep buttoned back, and low cabriole legs — the traditional Chesterfield shape.',
      },
      {
        title: 'Diamond button tufting',
        description:
          'Deep diamond tufting across the back of the sofa and the top of the bench ottoman.',
      },
      {
        title: 'Sofa + bench ottoman',
        description:
          'A long matching bench that works as a coffee table, footstool, or extra seating.',
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

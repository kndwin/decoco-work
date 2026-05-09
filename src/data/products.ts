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

const bedroomFeatures: [ProductFeature, ProductFeature, ProductFeature] = [
  {
    title: 'Complete bedroom setting',
    description:
      'Bed, bedside storage and coordinating accents are selected to work as one room-ready suite.',
  },
  {
    title: 'Soft upholstered profile',
    description:
      'Padded headboards and low platform bases keep the silhouette calm, comfortable and easy to place.',
  },
  {
    title: 'Balanced materials',
    description:
      'Textured upholstery, clean casework and warm wood or contrast trim give the room depth without clutter.',
  },
];

const livingRoomFeatures: [ProductFeature, ProductFeature, ProductFeature] = [
  {
    title: 'Statement sofa silhouette',
    description:
      'Tufting, channeling and shaped arms give the sofa enough presence to anchor the room.',
  },
  {
    title: 'Coordinated room setting',
    description:
      'Shown with matching ottomans, poufs or benches so the whole seating area feels intentional.',
  },
  {
    title: 'Tactile upholstery',
    description:
      'Velvet and leather finishes bring visible texture, depth and everyday comfort.',
  },
];

export const products: Product[] = [
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
  {
    slug: 'russet-bedroom-set',
    title: 'Russet Bedroom Set',
    category: 'bedroom',
    price: '2799',
    shortDescription:
      'A russet upholstered bed with matching bedside tables, vanity storage and a round pouf.',
    image: '/images/screenshots/russet-bedroom-set.png',
    isNew: true,
    featured: false,
    dimensions: 'Contact us for exact dimensions.',
    materials: ['Russet upholstery', 'White casework', 'Matching upholstered pouf'],
    shipping: 'Contact us to arrange delivery.',
    features: bedroomFeatures,
  },
  {
    slug: 'white-channel-bedroom-set',
    title: 'White Channel Bedroom Set',
    category: 'bedroom',
    price: '2799',
    shortDescription:
      'A white channel-tufted bed paired with matching bedside tables and a dresser.',
    image: '/images/screenshots/white-channel-bedroom-set.png',
    isNew: true,
    featured: false,
    dimensions: 'Contact us for exact dimensions.',
    materials: ['White upholstery', 'White casework', 'Black accent trim'],
    shipping: 'Contact us to arrange delivery.',
    features: bedroomFeatures,
  },
  {
    slug: 'white-bedroom-set-curtains',
    title: 'White Bedroom Set with Curtains',
    category: 'bedroom',
    price: '2799',
    shortDescription:
      'A white upholstered bed suite with matching side tables and dresser in a soft curtain-lined room.',
    image: '/images/screenshots/white-bedroom-set-curtains.png',
    isNew: true,
    featured: false,
    dimensions: 'Contact us for exact dimensions.',
    materials: ['White upholstery', 'White casework', 'Soft contrast piping'],
    shipping: 'Contact us to arrange delivery.',
    features: bedroomFeatures,
  },
  {
    slug: 'charcoal-tufted-bedroom-set',
    title: 'Charcoal Tufted Bedroom Set',
    category: 'bedroom',
    price: '2799',
    shortDescription:
      'A charcoal diamond-tufted bed with matching white and charcoal bedside storage.',
    image: '/images/screenshots/charcoal-tufted-bedroom-set.png',
    isNew: true,
    featured: false,
    dimensions: 'Contact us for exact dimensions.',
    materials: ['Charcoal upholstery', 'White drawer fronts', 'Dark contrast casework'],
    shipping: 'Contact us to arrange delivery.',
    features: bedroomFeatures,
  },
  {
    slug: 'tan-modern-bedroom-set',
    title: 'Tan Modern Bedroom Set',
    category: 'bedroom',
    price: '2799',
    shortDescription:
      'A tan and cream upholstered bed with slim bedside tables and a quiet modern profile.',
    image: '/images/screenshots/tan-modern-bedroom-set.png',
    isNew: true,
    featured: false,
    dimensions: 'Contact us for exact dimensions.',
    materials: ['Tan upholstery', 'Cream paneling', 'Wood bedside tables'],
    shipping: 'Contact us to arrange delivery.',
    features: bedroomFeatures,
  },
  {
    slug: 'walnut-platform-bedroom-set',
    title: 'Walnut Platform Bedroom Set',
    category: 'bedroom',
    price: '2799',
    shortDescription:
      'A cream platform bed with walnut bedside shelves and integrated headboard lighting.',
    image: '/images/screenshots/walnut-platform-bedroom-set.png',
    isNew: true,
    featured: false,
    dimensions: 'Contact us for exact dimensions.',
    materials: ['Cream upholstery', 'Walnut shelves', 'Integrated lighting'],
    shipping: 'Contact us to arrange delivery.',
    features: bedroomFeatures,
  },
  {
    slug: 'navy-platform-bedroom-set',
    title: 'Navy Platform Bedroom Set',
    category: 'bedroom',
    price: '2799',
    shortDescription:
      'A navy upholstered platform bed with wide headboard panels and built-in bedside lighting.',
    image: '/images/screenshots/navy-platform-bedroom-set.png',
    isNew: true,
    featured: false,
    dimensions: 'Contact us for exact dimensions.',
    materials: ['Navy upholstery', 'White bedside casework', 'Integrated lighting'],
    shipping: 'Contact us to arrange delivery.',
    features: bedroomFeatures,
  },
  {
    slug: 'cream-platform-bedroom-set',
    title: 'Cream Platform Bedroom Set',
    category: 'bedroom',
    price: '2799',
    shortDescription:
      'A cream upholstered platform bed with walnut shelves and a soft rounded headboard.',
    image: '/images/screenshots/cream-platform-bedroom-set.png',
    isNew: true,
    featured: false,
    dimensions: 'Contact us for exact dimensions.',
    materials: ['Cream upholstery', 'Walnut shelves', 'Low platform base'],
    shipping: 'Contact us to arrange delivery.',
    features: bedroomFeatures,
  },
  {
    slug: 'black-chesterfield-living-room',
    title: 'Black Chesterfield Living Set',
    category: 'living-room',
    price: '3299',
    shortDescription:
      'A black leather Chesterfield sofa with deep diamond tufting and rolled arms.',
    image: '/images/screenshots/black-chesterfield-living-room.png',
    isNew: true,
    featured: false,
    dimensions: 'Contact us for exact dimensions.',
    materials: ['Black leather upholstery', 'Diamond button tufting', 'Dark wood legs'],
    shipping: 'Contact us to arrange delivery.',
    features: livingRoomFeatures,
  },
  {
    slug: 'mauve-velvet-living-room',
    title: 'Mauve Velvet Living Set',
    category: 'living-room',
    price: '2299',
    shortDescription:
      'A mauve velvet channel-tufted sofa with rolled arms and low wooden legs.',
    image: '/images/screenshots/mauve-velvet-living-room.png',
    isNew: true,
    featured: false,
    dimensions: 'Contact us for exact dimensions.',
    materials: ['Mauve velvet upholstery', 'Channel-tufted back', 'Dark wood legs'],
    shipping: 'Contact us to arrange delivery.',
    features: livingRoomFeatures,
  },
  {
    slug: 'cognac-chesterfield-detail',
    title: 'Cognac Chesterfield Detail Set',
    category: 'living-room',
    price: '3299',
    shortDescription:
      'A cognac leather Chesterfield sofa and matching tufted ottoman in a brick loft setting.',
    image: '/images/screenshots/cognac-chesterfield-detail.png',
    isNew: true,
    featured: false,
    dimensions: 'Contact us for exact dimensions.',
    materials: ['Cognac leather upholstery', 'Diamond button tufting', 'Matching ottoman'],
    shipping: 'Contact us to arrange delivery.',
    features: livingRoomFeatures,
  },
];

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export type Category = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: 'dining',
    title: 'Dining',
    description:
      'Elevate your dining experience with our thoughtfully designed tables, chairs, and dining furniture.',
    image:
      'https://z-furnishing.com.au/cdn/shop/files/beckdiningchair-4.jpg?v=1741238624&width=1620',
  },
  {
    slug: 'bedroom',
    title: 'Bedroom',
    description:
      'Create a peaceful sanctuary with our collection of high-quality bedroom furniture for restful nights.',
    image: '/images/cloud-bed-set.jpeg',
  },
  {
    slug: 'living-room',
    title: 'Living room',
    description:
      'Transform your living room with our comfortable and stylish furniture pieces designed for modern living.',
    image: '/images/green-velvet-set-main.jpeg',
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export type Category = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: 'bedroom',
    title: 'Bedroom',
    description:
      'A considered bedroom suite where bed, bedside tables, dresser and pouf all speak the same language — soft textures, low profiles, quiet materials.',
    image: '/images/cloud-bed-set.jpeg',
  },
  {
    slug: 'living-room',
    title: 'Living room',
    description:
      'Sofa sets built around one idea per piece — a deep cognac Chesterfield, a forest-green velvet three-seater — chosen to anchor a room rather than fill it.',
    image: '/images/green-velvet-set-main.jpeg',
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

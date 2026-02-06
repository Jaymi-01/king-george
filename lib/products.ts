export interface Product {
  id: string;
  category: 'shoes' | 'slippers' | 'belts';
  name: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  sizes?: (string | number)[];
  colors: { name: string; hex: string }[];
}

export const products: Product[] = [
  // Shoes
  {
    id: 'oxford-royal',
    category: 'shoes',
    name: 'The Royal Oxford',
    price: 320,
    image: 'https://images.unsplash.com/photo-1481729379561-24626909fa28?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1481729379561-24626909fa28?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1887&auto=format&fit=crop', // placeholder detail
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=2070&auto=format&fit=crop' // placeholder
    ],
    description: 'A quintessentially British oxford, hand-welted from the finest full-grain calfskin. Features a closed lacing system for a sleek, formal silhouette perfect for black-tie events or the boardroom.',
    features: ['Full-grain calfskin leather', 'Goodyear welted construction', 'Leather sole with rubber heel', 'Hand-finished patina'],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 11, 12],
    colors: [{ name: 'Obsidian Black', hex: '#1A1A1A' }, { name: 'Cognac', hex: '#8C462E' }]
  },
  {
    id: 'monk-strap-duke',
    category: 'shoes',
    name: 'The Duke Monk Strap',
    price: 345,
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=2079&auto=format&fit=crop',
    images: [
       'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=2079&auto=format&fit=crop',
       'https://images.unsplash.com/photo-1618932260643-2b637028bc15?q=80&w=1887&auto=format&fit=crop'
    ],
    description: 'The double monk strap strikes the perfect balance between tradition and flair. Detailed with burnished gold buckles and a hand-painted finish.',
    features: ['Double buckle fastening', 'Burnished gold hardware', 'Blake stitched for flexibility', 'Cushioned leather insole'],
    sizes: [7, 8, 9, 10, 11],
    colors: [{ name: 'Burgundy', hex: '#4A0404' }, { name: 'Espresso', hex: '#3E2723' }]
  },
  
  // Slippers
  {
    id: 'velvet-loafer',
    category: 'slippers',
    name: 'The Earl Velvet Loafer',
    price: 180,
    image: 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=2080&auto=format&fit=crop', // Generic shoe/slipper placeholder
    images: [
      'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=2080&auto=format&fit=crop'
    ],
    description: 'Luxurious velvet loafers with quilted satin lining. Ideal for evening wear or sophisticated lounging.',
    features: ['Premium velvet upper', 'Quilted satin lining', 'Leather outsole', 'Hand-embroidered crest option'],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [{ name: 'Midnight Blue', hex: '#000033' }, { name: 'Emerald', hex: '#004d00' }]
  },
  
  // Belts
  {
    id: 'classic-belt',
    category: 'belts',
    name: 'The Heritage Belt',
    price: 95,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=2070&auto=format&fit=crop',
    images: [
       'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Cut from a single piece of vegetable-tanned shoulder leather. Finished with a solid brass buckle that will age beautifully alongside the leather.',
    features: ['Vegetable-tanned leather', 'Solid brass hardware', 'Beveled edges', '1.25 inch width'],
    sizes: ['30"', '32"', '34"', '36"', '38"', '40"'],
    colors: [{ name: 'Tan', hex: '#D2B48C' }, { name: 'Black', hex: '#000000' }, { name: 'Brown', hex: '#8B4513' }]
  }
];

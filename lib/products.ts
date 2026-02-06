export interface Product {
  id: string;
  category: 'shoes' | 'slippers' | 'belts' | 'bags';
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
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop'
    ],
    description: 'A quintessentially British oxford, hand-welted from the finest full-grain calfskin. Features a closed lacing system for a sleek, formal silhouette perfect for black-tie events or the boardroom.',
    features: ['Full-grain calfskin leather', 'Goodyear welted construction', 'Leather sole with rubber heel', 'Hand-finished patina'],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 11, 12],
    colors: [{ name: 'Obsidian Black', hex: '#1A1A1A' }, { name: 'Cognac', hex: '#8C462E' }]
  },
  {
    id: 'chelsea-boot',
    category: 'shoes',
    name: 'The Kensington Chelsea',
    price: 345,
    image: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=2080&auto=format&fit=crop',
    images: [
       'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=2080&auto=format&fit=crop',
       'https://images.unsplash.com/photo-1620857352353-06d1523f6cb4?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Rugged yet refined, the Kensington Chelsea boot offers versatility for the modern man. Crafted with a single piece of leather for minimal seams and maximum comfort.',
    features: ['Single-cut leather upper', 'Durable elastic side panels', 'Vibram rubber sole', 'Pull tabs for easy entry'],
    sizes: [7, 8, 9, 10, 11],
    colors: [{ name: 'Espresso', hex: '#3E2723' }, { name: 'Tan', hex: '#D2B48C' }]
  },
  
  // Slippers / Palms
  {
    id: 'leather-slide',
    category: 'slippers',
    name: 'The Santorini Slide',
    price: 180,
    image: 'https://images.unsplash.com/photo-1603487742131-4160d6986ba2?q=80&w=1974&auto=format&fit=crop', 
    images: [
      'https://images.unsplash.com/photo-1603487742131-4160d6986ba2?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Effortless luxury for leisure. These hand-woven leather slides feature a molded footbed that conforms to your unique shape over time.',
    features: ['Hand-woven leather straps', 'Molded cork and latex footbed', 'Rubber outsole for grip', 'Breathable leather lining'],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [{ name: 'Chestnut', hex: '#954535' }, { name: 'Midnight', hex: '#191970' }]
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
  },

  // Bags
  {
    id: 'weekender-bag',
    category: 'bags',
    name: 'The Diplomat Weekender',
    price: 550,
    image: 'https://images.unsplash.com/photo-1590874102052-8bea0e30efc9?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1590874102052-8bea0e30efc9?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'The ultimate travel companion. Spacious enough for a long weekend, compliant with airline carry-on regulations, and built to last a lifetime.',
    features: ['Full-grain leather', 'Brass hardware', 'Detachable shoulder strap', 'Internal laptop compartment'],
    sizes: ['One Size'],
    colors: [{ name: 'Vintage Brown', hex: '#5D4037' }, { name: 'Black', hex: '#000000' }]
  },
  {
    id: 'messenger-bag',
    category: 'bags',
    name: 'The Scholar Messenger',
    price: 295,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop'
    ],
    description: 'A modern classic for the daily commute. Features a structured silhouette to protect documents and devices while looking effortlessly sharp.',
    features: ['Vegetable-tanned leather', 'Magnetic latch closure', 'Adjustable strap', 'Fits 15-inch laptop'],
    sizes: ['One Size'],
    colors: [{ name: 'Cognac', hex: '#8C462E' }, { name: 'Navy', hex: '#000080' }]
  }
];
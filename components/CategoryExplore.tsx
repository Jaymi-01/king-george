"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const categories = [
  {
    id: 'shoes',
    name: 'Shoes',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=2070&auto=format&fit=crop', 
    link: '/products/shoes'
  },
  {
    id: 'slippers',
    name: 'Slippers',
    image: 'https://images.unsplash.com/photo-1603487742131-4160d6986ba2?q=80&w=1974&auto=format&fit=crop', 
    link: '/products/slippers'
  },
  {
    id: 'belts',
    name: 'Belts',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=2070&auto=format&fit=crop', 
    link: '/products/belts'
  },
  {
    id: 'bags',
    name: 'Bags',
    image: 'https://images.unsplash.com/photo-1590874102052-8bea0e30efc9?q=80&w=2070&auto=format&fit=crop', 
    link: '/products/bags'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

export default function CategoryExplore() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="font-heading text-4xl font-bold text-primary uppercase tracking-[0.2em] mb-4"
        >
          Curated Essentials
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          className="h-1 w-20 bg-secondary mx-auto"
        ></motion.div>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {categories.map((cat) => (
          <motion.div 
            key={cat.id} 
            variants={itemVariants}
            className="group relative aspect-square overflow-hidden border border-gray-200 shadow-sm bg-background"
          >
            <div 
               className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
               style={{ backgroundImage: `url('${cat.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-[0.3em] mb-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500 drop-shadow-md">
                {cat.name}
              </h3>
              <div className="opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                <Button asChild variant="secondary" className="font-heading uppercase tracking-[0.2em] px-4 py-1 h-auto text-[10px] bg-white text-primary hover:bg-secondary hover:text-white border-none rounded-none shadow-none">
                    <Link href={cat.link}>
                        Explore
                    </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
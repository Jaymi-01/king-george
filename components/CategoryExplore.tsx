"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const categories = [
  {
    id: 'shoes',
    name: 'Shoes',
    image: 'https://res.cloudinary.com/dquzcqxcy/image/upload/v1770394929/xdlensp6yautkemvz9de.jpg', 
    link: '/products/shoes'
  },
  {
    id: 'slippers',
    name: 'Slippers',
    image: 'https://res.cloudinary.com/dquzcqxcy/image/upload/v1770394199/umfcrpyxpvb1mnhw7z47.jpg', 
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
    image: 'https://res.cloudinary.com/dquzcqxcy/image/upload/v1770394301/nydnyazdydty07tqo4nc.jpg', 
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
            className="group relative aspect-square overflow-hidden border border-gray-200 shadow-sm bg-gray-100"
          >
            <Image
               src={cat.image}
               alt={cat.name}
               fill
               sizes="(max-width: 768px) 100vw, 50vw"
               priority
               className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/25 transition-colors duration-500"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
              <h3 className="font-heading text-xl font-bold text-white uppercase tracking-[0.3em] mb-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500 drop-shadow-lg">
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

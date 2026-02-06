"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { motion } from "framer-motion";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
    >
      <Link href={`/product/${product.id}`} className="group block">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50 border border-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="text-white font-heading font-bold uppercase tracking-[0.2em] text-[10px] border-b border-white pb-1">
              View Product
            </span>
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="text-xs font-heading font-bold text-primary uppercase tracking-[0.2em] group-hover:text-secondary transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-xs font-medium text-primary tracking-widest">${product.price}</p>
          </div>
          <p className="text-[10px] text-neutral uppercase tracking-[0.1em] font-light">
            {product.colors.length} {product.colors.length === 1 ? 'Color' : 'Colors'} Available
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

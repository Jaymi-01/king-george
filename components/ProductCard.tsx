import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 border border-gray-200">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
           <span className="text-white font-bold uppercase tracking-wider text-sm">View Details</span>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg font-heading font-bold text-primary uppercase tracking-wide group-hover:text-secondary transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-neutral">{product.colors.length} Colors Available</p>
        </div>
        <p className="text-lg font-medium text-primary">${product.price}</p>
      </div>
    </Link>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/products";
import clsx from "clsx";
import SizingGuideModal from "./SizingGuideModal";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShoppingBag01Icon, RulerIcon } from "@hugeicons/core-free-icons";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState<string | number | null>(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isSizingOpen, setIsSizingOpen] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    
    addToCart(product, selectedSize, selectedColor);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
        {/* Gallery */}
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={clsx(
                  "relative h-20 w-20 flex-shrink-0 overflow-hidden border transition-all",
                  selectedImage === img ? "border-secondary" : "border-transparent hover:border-gray-300"
                )}
              >
                <Image src={img} alt={`View ${idx}`} fill className="object-cover" />
              </button>
            ))}
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-gray-200 bg-gray-100 group">
             <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-125 cursor-zoom-in"
             />
          </div>
        </div>

        {/* Info */}
        <div className="mt-10 lg:mt-0">
          <h1 className="font-heading text-4xl font-bold text-primary uppercase tracking-widest">{product.name}</h1>
          <p className="mt-4 text-2xl font-medium text-secondary">${product.price}</p>
          
          <div className="mt-8 space-y-6">
            <p className="text-neutral font-light leading-relaxed">{product.description}</p>
            
            <ul className="list-disc list-inside space-y-2 text-sm text-neutral">
              {product.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-10">
            {/* Colors */}
            <div className="mb-8">
              <h3 className="font-heading text-sm font-bold text-primary uppercase tracking-wide mb-4">Color</h3>
              <div className="flex items-center gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={clsx(
                      "group relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 focus:outline-none",
                      selectedColor.name === color.name ? "ring-2 ring-secondary ring-offset-2" : ""
                    )}
                    title={color.name}
                  >
                    <span 
                      className="h-8 w-8 rounded-full border border-black/10"
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                ))}
                <span className="ml-2 text-sm text-neutral">{selectedColor.name}</span>
              </div>
            </div>

            {/* Sizes */}
            {product.sizes && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                   <h3 className="font-heading text-sm font-bold text-primary uppercase tracking-wide">Size</h3>
                   <button 
                     onClick={() => setIsSizingOpen(true)}
                     className="flex items-center gap-1 text-sm text-secondary hover:text-primary transition-colors underline"
                   >
                     <HugeiconsIcon icon={RulerIcon} size={16} className="mr-1" />
                     Sizing Guide
                   </button>
                </div>
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={clsx(
                        "flex items-center justify-center py-3 text-sm font-medium uppercase border transition-all",
                        selectedSize === size
                          ? "border-secondary bg-secondary text-white"
                          : "border-gray-200 text-primary hover:border-secondary hover:text-secondary"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button
              onClick={handleAddToCart}
              className="w-full py-7 font-heading font-bold uppercase tracking-[3px] rounded-none"
            >
              <HugeiconsIcon icon={ShoppingBag01Icon} size={20} className="mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <SizingGuideModal 
        isOpen={isSizingOpen} 
        onClose={() => setIsSizingOpen(false)} 
        category={product.category} 
      />
    </div>
  );
}
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  
  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  if (categoryProducts.length === 0) {
     return (
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
            <h1 className="font-heading text-4xl mb-4">Collection Not Found</h1>
            <p>We couldn't find a collection named "{category}".</p>
        </div>
     )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-5xl font-bold text-primary mb-4 uppercase tracking-widest text-center">
        {category}
      </h1>
      <p className="text-center text-neutral mb-12 max-w-2xl mx-auto">
        Explore our handcrafted selection of {category}, designed for elegance and durability.
      </p>
      
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
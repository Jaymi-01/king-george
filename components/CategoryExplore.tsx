import Link from "next/link";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 'shoes',
    name: 'Shoes',
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=1932&auto=format&fit=crop', 
    link: '/products/shoes'
  },
  {
    id: 'slippers',
    name: 'Slippers',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop', 
    link: '/products/slippers'
  },
  {
    id: 'belts',
    name: 'Belts',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=2070&auto=format&fit=crop', 
    link: '/products/belts'
  }
];

export default function CategoryExplore() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-heading text-4xl font-bold text-primary uppercase tracking-[0.2em] mb-4">Curated Essentials</h2>
        <div className="h-1 w-20 bg-secondary mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.id} className="group relative aspect-square overflow-hidden border border-gray-200 shadow-sm">
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
          </div>
        ))}
      </div>
    </section>
  );
}
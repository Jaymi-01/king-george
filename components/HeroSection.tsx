import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-primary">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-background mb-6 tracking-wider uppercase drop-shadow-md">
          Timeless Elegance
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light mb-10 tracking-wide max-w-2xl mx-auto">
          Handcrafted leather goods defined by texture, patina, and legacy. Discover the art of true craftsmanship.
        </p>
        <Button asChild size="lg" variant="secondary" className="font-heading font-bold uppercase tracking-[3px] px-10 py-8 text-lg">
            <Link href="/products">
                Explore Collection
            </Link>
        </Button>
      </div>
    </section>
  );
}
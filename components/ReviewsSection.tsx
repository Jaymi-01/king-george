import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";

const reviews = [
  {
    id: 1,
    name: "James D.",
    role: "Verified Buyer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    text: "The patina on these oxfords is simply incredible. After three months of wear, they look even better than when they arrived. True craftsmanship.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah L.",
    role: "Verified Buyer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    text: "Bought the leather tote for my husband. The stitching is impeccable and the leather smell is divine. Highly recommend King George.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael B.",
    role: "Verified Buyer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
    text: "Comfortable right out of the box. The sizing guide was spot on. I'll definitely be picking up a belt to match.",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-primary uppercase tracking-widest mb-4">Voice of the Customer</h2>
          <p className="text-neutral italic">"Quality is remembered long after the price is forgotten."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="bg-background p-8 border border-gray-100 shadow-lg relative">
              <div className="flex justify-center mb-6">
                 <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-secondary p-1">
                   <div className="w-full h-full rounded-full overflow-hidden relative">
                      <Image 
                        src={review.image} 
                        alt={review.name} 
                        fill
                        className="object-cover"
                      />
                   </div>
                 </div>
              </div>
              <div className="flex justify-center mb-4 text-accent">
                {[...Array(review.rating)].map((_, i) => (
                  <HugeiconsIcon key={i} icon={StarIcon} size={16} color="currentColor" />
                ))}
              </div>
              <p className="text-center text-neutral mb-6 font-light leading-relaxed">
                "{review.text}"
              </p>
              <div className="text-center border-t border-gray-200 pt-4">
                <h4 className="font-heading font-bold text-primary text-lg">{review.name}</h4>
                <span className="text-xs text-secondary uppercase tracking-wider">{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Shield01Icon, StarIcon, GlobalIcon, ThreadIcon } from "@hugeicons/core-free-icons";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="bg-background text-primary overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19?q=80&w=2070&auto=format&fit=crop"
          alt="Leather Crafting"
          fill
          className="object-cover opacity-40 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-[0.3em] mb-4"
          >
            The King George Legacy
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } },
            }}
            className="text-neutral font-light text-lg uppercase tracking-[0.2em]"
          >
            Handcrafted Excellence Since 1992
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-heading text-4xl font-bold uppercase tracking-widest mb-8 border-b border-secondary pb-4 inline-block">
              Our Story
            </h2>
            <div className="space-y-6 text-neutral font-light leading-relaxed text-lg">
              <p>
                Founded on the principles of traditional English leather-working, King George began as a small workshop dedicated to the art of the perfect stitch. We believed then, as we do now, that a leather accessory is more than just an item—it is a companion that grows with you.
              </p>
              <p>
                Every piece we create is a testament to the beauty of slow fashion. We source only the finest full-grain hides, ensuring that each product develops a unique patina that tells your story over years of use.
              </p>
              <p>
                Today, King George stands as a beacon of luxury for the modern gentleman, blending classic silhouettes with contemporary functionality.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] border border-gray-200 p-4 bg-white shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop"
              alt="Artisan at work"
              fill
              className="object-cover p-4"
            />
          </motion.div>
        </div>
      </section>

      {/* Craftsmanship Highlights */}
      <section className="bg-primary text-background py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] mb-4">
              Uncompromising Quality
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
          >
            {[
              {
                icon: Shield01Icon,
                title: "Full-Grain",
                desc: "We use only the top layer of the hide, where the grain is tightest and most durable.",
              },
              {
                icon: ThreadIcon,
                title: "Hand-Stitched",
                desc: "Traditional saddle-stitching ensures that our pieces never unravel, unlike machine-made alternatives.",
              },
              {
                icon: StarIcon,
                title: "Ethical Sourcing",
                desc: "Our leather is a byproduct of the meat industry, sourced from tanneries with gold-rated environmental standards.",
              },
              {
                icon: GlobalIcon,
                title: "Global Legacy",
                desc: "Shipping our handcrafted heritage from London to discerning clients worldwide.",
              },
            ].map((value, idx) => (
              <motion.div key={idx} variants={fadeIn} className="text-center group px-4">
                <div className="mb-4 flex justify-center text-accent group-hover:text-secondary transition-colors">
                  <HugeiconsIcon icon={value.icon} size={32} />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-widest mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed max-w-[250px] mx-auto">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Patina Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-none overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1517406858237-30dff1564bb2?q=80&w=1974&auto=format&fit=crop"
              alt="Leather texture close up"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl font-bold uppercase tracking-widest mb-8">
              Beauty in Aging
            </h2>
            <p className="text-neutral font-light leading-relaxed text-lg mb-6">
              A King George product is never "new" for long. It begins a transformation the moment it touches your hands. 
            </p>
            <p className="text-neutral font-light leading-relaxed text-lg">
              Through the absorption of natural oils and exposure to the elements, the leather develops a <span className="text-secondary font-semibold italic">patina</span>—a glossy, rich sheen that is unique to your lifestyle. It doesn't wear out; it wears in.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Mail01Icon, 
  Call02Icon, 
  Location01Icon, 
  Clock01Icon, 
  WhatsappIcon 
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out. We will get back to you shortly.");
  };

  return (
    <div className="bg-background min-h-screen text-primary">
      {/* Page Header */}
      <section className="py-20 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="font-heading text-4xl md:text-6xl font-bold uppercase mb-4"
          >
            Get In Touch
          </motion.h1>
          <p className="text-neutral font-light uppercase tracking-widest text-sm">
            Whether it's a custom order or a simple inquiry, we're here to help.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Information */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-12"
          >
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest mb-8 text-secondary">
                Connect With Us
              </h2>
              <p className="text-neutral font-light leading-relaxed max-w-md">
                Experience the luxury of King George in person or reach out through any of our digital channels. Our team is dedicated to providing you with the finest service.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="mt-1 text-secondary group-hover:text-primary transition-colors">
                  <HugeiconsIcon icon={Location01Icon} size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold uppercase tracking-widest text-sm mb-2">Our Atelier</h3>
                  <p className="text-neutral font-light text-sm">123 Heritage Lane, Mayfair<br />London, W1K 7HJ, UK</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="mt-1 text-secondary group-hover:text-primary transition-colors">
                  <HugeiconsIcon icon={Call02Icon} size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold uppercase tracking-widest text-sm mb-2">Speak With Us</h3>
                  <p className="text-neutral font-light text-sm">+44 (0) 20 7946 0123</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="mt-1 text-secondary group-hover:text-primary transition-colors">
                  <HugeiconsIcon icon={Mail01Icon} size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold uppercase tracking-widest text-sm mb-2">General Inquiries</h3>
                  <p className="text-neutral font-light text-sm">concierge@kinggeorge.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="mt-1 text-secondary group-hover:text-primary transition-colors">
                  <HugeiconsIcon icon={Clock01Icon} size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold uppercase tracking-widest text-sm mb-2">Opening Hours</h3>
                  <p className="text-neutral font-light text-sm">Mon - Fri: 09:00 - 18:00<br />Sat: 10:00 - 16:00</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h3 className="font-heading font-bold uppercase tracking-widest text-xs mb-4 text-neutral">Instant Support</h3>
              <Button asChild variant="outline" className="rounded-none border-primary text-xs uppercase tracking-widest px-8 py-6 h-auto">
                <a href="https://wa.me/1234567890" target="_blank" className="flex items-center gap-3">
                  <HugeiconsIcon icon={WhatsappIcon} size={20} />
                  Message on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white p-8 md:p-12 border border-gray-100 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-neutral">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full bg-background border border-gray-200 px-4 py-3 text-sm focus:border-secondary outline-none transition-colors rounded-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-neutral">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full bg-background border border-gray-200 px-4 py-3 text-sm focus:border-secondary outline-none transition-colors rounded-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] uppercase tracking-widest font-bold text-neutral">Subject</label>
                <select 
                  id="subject"
                  className="w-full bg-background border border-gray-200 px-4 py-3 text-sm focus:border-secondary outline-none transition-colors rounded-none appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Custom Leather Order</option>
                  <option>Shipping & Delivery</option>
                  <option>Wholesale Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-neutral">Message</label>
                <textarea 
                  id="message" 
                  rows={6}
                  required
                  className="w-full bg-background border border-gray-200 px-4 py-3 text-sm focus:border-secondary outline-none transition-colors rounded-none resize-none"
                  placeholder="How can we assist you today?"
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-primary text-white font-heading font-bold uppercase tracking-[0.3em] py-8 rounded-none hover:bg-secondary transition-all text-xs shadow-lg">
                Send Message
              </Button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

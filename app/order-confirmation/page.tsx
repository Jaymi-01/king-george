"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full bg-white border border-gray-200 p-12 text-center shadow-lg"
      >
        <div className="flex justify-center mb-8 text-green-600">
          <HugeiconsIcon icon={CheckmarkCircle01Icon} size={64} />
        </div>
        
        <h1 className="font-heading text-4xl font-bold uppercase tracking-widest text-primary mb-4">
          Order Received
        </h1>
        
        <p className="text-neutral font-light text-lg mb-8 leading-relaxed">
          Thank you for your purchase. We have received your order details and payment confirmation. Our team will verify your payment shortly.
        </p>
        
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-neutral opacity-60">
            A confirmation email has been sent to you.
          </p>
          
          <Button asChild className="w-full bg-primary text-white font-heading font-bold uppercase tracking-[0.2em] py-6 rounded-none hover:bg-secondary transition-all">
            <Link href="/" className="flex items-center justify-center gap-2">
              Return to Home <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

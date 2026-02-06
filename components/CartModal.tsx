"use client";
import { Cancel01Icon, Delete02Icon, ShieldDoneIcon } from "@hugeicons/react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function CartModal() {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen, cartTotal } = useCart();
  const { user, signInWithGoogle } = useAuth();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = async () => {
    if (!user) {
      const confirmLogin = window.confirm("You must be signed in to proceed to checkout. Sign in with Google?");
      if (confirmLogin) {
        await signInWithGoogle();
      }
    } else {
      setIsCheckoutOpen(true);
      setIsCartOpen(false); 
    }
  };

  return (
    <>
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          {/* Cart Sidebar */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md bg-background shadow-2xl flex flex-col h-full border-l border-gray-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white">
              <h2 className="text-sm font-heading font-bold text-primary uppercase tracking-[0.2em]">Your Selection</h2>
              <Button 
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(false)}
                className="text-neutral hover:text-secondary -mr-2"
              >
                <Cancel01Icon size={20} />
              </Button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-neutral space-y-4">
                   <ShieldDoneIcon size={48} className="opacity-10" />
                   <p className="font-heading uppercase tracking-widest text-xs opacity-40">Your cart is empty</p>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={item.id} 
                    className="flex gap-4"
                  >
                    <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden border border-gray-100 bg-gray-50">
                      <Image 
                        src={item.product.image} 
                        alt={item.product.name} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-[10px] font-bold text-primary font-heading uppercase tracking-widest">{item.product.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-neutral hover:text-red-500 transition-colors"
                          >
                            <Delete02Icon size={14} />
                          </button>
                        </div>
                        <p className="text-[10px] text-neutral mt-2 uppercase tracking-wider">Size: {item.size}</p>
                        <p className="text-[10px] text-neutral mt-1 uppercase tracking-wider">Color: {item.color.name}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-xs font-semibold text-secondary tracking-widest">${item.product.price * item.quantity}</p>
                        <span className="text-[10px] text-neutral uppercase tracking-tighter font-medium">Qty: {item.quantity}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-gray-100 px-8 py-8 bg-white">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-neutral">Total</p>
                  <p className="text-lg font-heading font-bold text-primary tracking-widest">${cartTotal}</p>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-primary text-white font-heading font-bold uppercase tracking-[0.3em] py-8 rounded-none hover:bg-secondary transition-all text-xs"
                >
                  Confirm & Checkout
                </Button>
                <p className="text-[9px] text-center text-neutral mt-4 uppercase tracking-[0.1em]">Taxes and shipping calculated at payment</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>

    <CheckoutModal 
      isOpen={isCheckoutOpen} 
      onClose={() => setIsCheckoutOpen(false)} 
    />
    </>
  );
}
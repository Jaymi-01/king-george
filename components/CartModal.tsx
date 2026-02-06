"use client";
import { X, Trash2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import clsx from "clsx";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import { Button } from "@/components/ui/button";

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
    <div 
      className={clsx(
        "fixed inset-0 z-[60] overflow-hidden pointer-events-none", 
        isCartOpen ? "pointer-events-auto" : ""
      )}
    >
      <div 
         className={clsx(
           "absolute inset-0 bg-black/50 transition-opacity duration-300",
           isCartOpen ? "opacity-100" : "opacity-0"
         )} 
         onClick={() => setIsCartOpen(false)}
      />
      
      <div 
        className={clsx(
          "absolute inset-y-0 right-0 max-w-md w-full bg-background shadow-xl transform transition-transform duration-300 ease-in-out border-l border-gray-200",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
            <h2 className="text-lg font-heading font-bold text-primary uppercase tracking-wide">Your Cart</h2>
            <Button 
              variant="ghost"
              size="icon"
              onClick={() => setIsCartOpen(false)}
              className="text-neutral hover:text-secondary"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-neutral space-y-4">
                 <ShieldCheck className="h-12 w-12 opacity-20" />
                 <p>Your cart is empty.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden border border-gray-200">
                    <Image 
                      src={item.product.image} 
                      alt={item.product.name} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-primary font-heading uppercase">{item.product.name}</h3>
                      <p className="text-xs text-neutral mt-1">Size: {item.size} | Color: {item.color.name}</p>
                      <p className="text-xs text-neutral mt-1">Qty: {item.quantity}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-secondary">${item.product.price * item.quantity}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1"
                      >
                        <Trash2 className="h-3 w-3" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-6 bg-white">
              <div className="flex justify-between text-base font-medium text-primary mb-4">
                <p>Subtotal</p>
                <p>${cartTotal}</p>
              </div>
              <p className="mt-0.5 text-xs text-neutral mb-6">Shipping and taxes calculated at checkout.</p>
              <Button
                onClick={handleCheckout}
                className="w-full bg-primary text-white font-heading font-bold uppercase tracking-[2px] py-6"
              >
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>

    <CheckoutModal 
      isOpen={isCheckoutOpen} 
      onClose={() => setIsCheckoutOpen(false)} 
    />
    </>
  );
}
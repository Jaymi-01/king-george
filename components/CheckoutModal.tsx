"use client";
import { X, MessageCircle, Copy, CheckCircle, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cartTotal, cart } = useCart();
  const { user } = useAuth();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const ACCOUNT_NUMBER = "1234 5678 90";
  const BANK_NAME = "Royal Bank of Leather";
  const ACCOUNT_NAME = "King George Inc.";
  const WHATSAPP_NUMBER = "1234567890"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(ACCOUNT_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    let message = `Hello King George, I have made a payment for Order ID: #${Math.floor(Math.random() * 10000)}.\n\nItems:\n`;
    cart.forEach(item => {
        message += `- ${item.product.name} (${item.size}, ${item.color.name}) x${item.quantity}\n`;
    });
    message += `\nTotal: $${cartTotal}\n\nMy email: ${user?.email}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg bg-background border border-gray-200 shadow-2xl overflow-hidden">
        <Button 
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:text-secondary"
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-secondary/10 flex items-center justify-center rounded-full mb-6 text-secondary">
             <ShieldCheck className="h-8 w-8" />
          </div>
          
          <h2 className="font-heading text-3xl font-bold uppercase tracking-widest text-primary mb-2">
            Complete Your Order
          </h2>
          <p className="text-neutral mb-8">
            Please transfer the total amount to the account below to finalize your purchase.
          </p>

          <div className="bg-white border border-gray-200 p-6 mb-8 text-left relative group">
             <p className="text-xs text-neutral uppercase tracking-wider mb-1">Total Amount</p>
             <p className="text-2xl font-bold text-primary mb-4">${cartTotal}</p>

             <div className="h-px bg-gray-100 my-4"></div>

             <p className="text-xs text-neutral uppercase tracking-wider mb-1">Bank Name</p>
             <p className="font-medium text-primary mb-3">{BANK_NAME}</p>

             <p className="text-xs text-neutral uppercase tracking-wider mb-1">Account Name</p>
             <p className="font-medium text-primary mb-3">{ACCOUNT_NAME}</p>

             <div className="flex justify-between items-end">
                <div>
                    <p className="text-xs text-neutral uppercase tracking-wider mb-1">Account Number</p>
                    <p className="font-heading text-xl font-bold text-primary tracking-widest">{ACCOUNT_NUMBER}</p>
                </div>
                <Button 
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-secondary hover:text-primary"
                >
                    {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copied" : "Copy"}
                </Button>
             </div>
          </div>

          <Button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-7 font-bold uppercase tracking-[1px] hover:bg-[#128C7E] transition-colors shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
            Send Receipt on WhatsApp
          </Button>
          
          <p className="mt-4 text-xs text-neutral">
            Order verification may take up to 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Menu01Icon, 
  ShoppingBag01Icon, 
  UserIcon, 
  Logout01Icon, 
  PackageIcon,
  Cancel01Icon
} from "@hugeicons/core-free-icons";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { cart, setIsCartOpen } = useCart();
  const { user, signInWithGoogle, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Menu Trigger */}
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="p-2 -ml-2 text-primary hover:text-secondary transition-colors focus:outline-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? "open" : "closed"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? (
                      <HugeiconsIcon icon={Cancel01Icon} size={24} />
                    ) : (
                      <HugeiconsIcon icon={Menu01Icon} size={24} />
                    )}
                  </motion.div>
                </AnimatePresence>
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background border-r border-gray-200 p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-gray-100">
                  <SheetTitle className="font-heading text-2xl font-bold tracking-[0.2em] text-primary uppercase text-left">
                    King George
                  </SheetTitle>
                </div>
                <nav className="flex flex-col gap-1 p-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary hover:text-secondary border-b border-gray-50 last:border-0 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
          <Link href="/" className="font-heading text-2xl font-bold tracking-widest text-primary uppercase">
            King George
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:gap-x-8 lg:mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[2px] text-primary hover:text-secondary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions (Sign In / Cart) */}
        <div className="flex items-center space-x-1 sm:space-x-4">
          <div className="flex items-center">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-200 text-primary hover:text-secondary hover:border-secondary transition-colors focus:outline-none">
                    <HugeiconsIcon icon={UserIcon} size={20} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-2 rounded-none border-gray-200 shadow-xl" align="end" forceMount>
                  <DropdownMenuLabel className="font-heading font-bold uppercase tracking-wider text-xs border-b border-gray-50 pb-2">
                    {user.displayName || "My Account"}
                  </DropdownMenuLabel>
                  <DropdownMenuItem asChild className="cursor-pointer focus:bg-secondary/10">
                    <Link href="/orders" className="w-full flex items-center font-heading uppercase tracking-widest text-[10px] py-2">
                      <HugeiconsIcon icon={PackageIcon} size={16} className="mr-2" />
                      <span>View Orders</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="cursor-pointer focus:bg-red-50 text-red-600 font-heading uppercase tracking-widest text-[10px] py-2"
                    onClick={() => signOut()}
                  >
                    <HugeiconsIcon icon={Logout01Icon} size={16} className="mr-2" />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button 
                onClick={() => signInWithGoogle()}
                className="flex items-center gap-2 p-2 text-primary hover:text-secondary transition-colors focus:outline-none"
              >
                <HugeiconsIcon icon={UserIcon} size={20} />
                <span className="hidden sm:inline uppercase tracking-widest text-[10px] font-bold">Sign In</span>
              </button>
            )}
          </div>
          
          <button 
            className="relative p-2 text-primary hover:text-secondary transition-colors focus:outline-none"
            onClick={() => setIsCartOpen(true)}
          >
            <HugeiconsIcon icon={ShoppingBag01Icon} size={20} />
            <span className="sr-only">Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-secondary text-[10px] font-bold text-white flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

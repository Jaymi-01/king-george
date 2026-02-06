"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingBag, User, LogOut } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
        
        {/* Mobile Menu (shadcn Sheet) */}
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-ml-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
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
                <div className="mt-auto p-6 border-t border-gray-100">
                  {user ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {user.photoURL && (
                          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-200">
                            <Image src={user.photoURL} fill className="object-cover" alt="User" />
                          </div>
                        )}
                        <span className="font-heading font-bold uppercase tracking-wider text-xs">{user.displayName}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="uppercase tracking-widest text-[10px]" onClick={() => { signOut(); setIsMobileMenuOpen(false); }}>
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="w-full justify-center gap-3 uppercase tracking-[0.2em] font-heading text-xs py-6 rounded-none border-primary"
                      onClick={() => { signInWithGoogle(); setIsMobileMenuOpen(false); }}
                    >
                      <User className="h-4 w-4" />
                      Sign In
                    </Button>
                  )}
                </div>
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
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="hidden sm:block">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wide hidden lg:inline-block font-semibold">
                  {user.displayName?.split(" ")[0]}
                </span>
                <div className="relative h-8 w-8 overflow-hidden rounded-full border border-gray-200">
                  {user.photoURL ? (
                    <Image src={user.photoURL} alt="User" fill className="object-cover" />
                  ) : (
                    <User className="h-full w-full p-1" />
                  )}
                </div>
                <Button variant="ghost" size="icon" onClick={() => signOut()} title="Sign Out">
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Button variant="ghost" className="uppercase tracking-widest text-xs gap-2" onClick={() => signInWithGoogle()}>
                <User className="h-5 w-5" />
                <span className="hidden lg:inline">Sign In</span>
              </Button>
            )}
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-secondary text-[10px] font-bold text-white flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
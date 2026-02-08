import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { InstagramIcon, Facebook01Icon, NewTwitterIcon } from "@hugeicons/core-free-icons";

export default function Footer() {
  return (
    <footer className="bg-primary text-background py-12 border-t border-accent/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-heading text-3xl font-bold tracking-widest text-background uppercase">
              King George
            </Link>
            <p className="mt-4 text-gray-400 max-w-sm text-sm font-light">
              Crafting timeless leather goods for the modern gentleman. Experience the texture, quality, and legacy of true craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-accent font-heading text-lg font-bold uppercase tracking-widest mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-400 hover:text-accent transition-colors text-sm">Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-accent transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-accent transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h3 className="text-accent font-heading text-lg font-bold uppercase tracking-widest mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <HugeiconsIcon icon={InstagramIcon} size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <HugeiconsIcon icon={Facebook01Icon} size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <HugeiconsIcon icon={NewTwitterIcon} size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <p className="text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} King George.<br />All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

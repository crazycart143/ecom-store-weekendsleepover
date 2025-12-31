"use client";

import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { CartSidebar } from "@/components/cart-sidebar";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <div className="bg-white backdrop-blur-xl border border-white/20 rounded-full py-3 px-6 shadow-2xl flex items-center justify-between">
          
          {/* Mobile Menu Button - Left */}
          <button 
            className="md:hidden p-2 text-brand-dark-pink"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>

          {/* Logo */}
          <Link href="/" className="text-xl  md:text-2xl font-serif font-black text-white italic tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-2">
            <span className="text-brand-dark-pink">WS</span> <span className="hidden md:inline font-sans text-xs not-italic font-bold tracking-widest opacity-60 mt-1"></span>
          </Link>

          {/* Desktop Nav - Centered */}
          <nav className="hidden md:flex lg:ml-30 items-center  space-x-8">
            <Link href="/shop" className="text-sm font-medium text-brand-dark-pink transition-colors relative group">
              Shop
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
            </Link>
            <Link href="/about" className="text-sm font-medium text-brand-dark-pink transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
            </Link>
            <Link href="/support" className="text-sm font-medium text-brand-dark-pink transition-colors relative group">
              Support
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
             <button className="text-brand-dark-pink transition-colors hidden md:block">
               <Search size={18} />
             </button>
             
             <button 
               onClick={() => setIsCartOpen(true)}
               className="text-brand-dark-pink transition-colors relative mr-2 hover:scale-110 active:scale-95"
             >
               <ShoppingBag size={18} />
               <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-red rounded-full ring-2 ring-white/10" />
             </button>

             <button className="hidden md:flex bg-brand-dark-pink text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all shadow-lg hover:shadow-xl">
                Join Waitlist
             </button>
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-brand-dark-pink backdrop-blur-xl flex flex-col p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl text-white font-italic">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white bg-white/10 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6 text-3xl font-serif text-white text-center">
              <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link href="/support" onClick={() => setIsMobileMenuOpen(false)}>Support</Link>
            </nav>
            
            <div className="mt-auto text-center">
              <button className="w-full bg-white text-brand-dark-pink py-4 rounded-full font-bold uppercase tracking-widest">
                Join the Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

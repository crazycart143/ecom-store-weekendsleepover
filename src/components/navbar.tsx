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
      <header className="fixed top-0 left-0 z-50 w-full bg-brand-cream/80 backdrop-blur-md border-b border-brand-dark-pink/5 px-6 md:px-12 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          
          {/* Mobile: Cart (Left) | Desktop: Nav */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-brand-dark-pink hover:text-brand-red transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-brand-red rounded-full" />
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-12">
            <Link href="/shop" className="font-title text-[10px] uppercase tracking-[0.3em] text-brand-dark-pink hover:text-brand-red transition-colors">
              Collection
            </Link>
            <Link href="/about" className="font-title text-[10px] uppercase tracking-[0.3em] text-brand-dark-pink hover:text-brand-red transition-colors">
              Journal
            </Link>
          </nav>

          {/* Logo - Centered Masthead style */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="font-serif text-2xl md:text-4xl text-brand-dark-pink leading-none tracking-tighter whitespace-nowrap">
              WEEKEND <span className="italic font-light">SLEEPOVER</span>
            </span>
          </Link>

          {/* Right side: Search (Desktop) & Menu (Mobile) */}
          <div className="flex items-center space-x-8">
            <button 
              className="text-brand-dark-pink hover:text-brand-red transition-colors hidden md:block"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            
            <div className="hidden md:block">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="text-brand-dark-pink hover:text-brand-red transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-brand-red rounded-full" />
              </button>
            </div>

            <button 
              className="md:hidden text-brand-dark-pink"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <Menu size={20} strokeWidth={1.5} />
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-cream flex flex-col p-12"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-brand-dark-pink"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            
            <nav className="flex flex-col space-y-12 text-5xl font-serif text-brand-dark-pink mt-20">
              <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>Collection</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
              <Link href="/support" onClick={() => setIsMobileMenuOpen(false)}>Support</Link>
            </nav>
            
            <div className="mt-auto">
               <p className="font-title text-[10px] tracking-[0.5em] text-brand-dark-pink/40 uppercase">
                 © 2024 WEEKEND SLEEPOVER
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

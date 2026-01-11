"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartSidebar } from "@/components/cart-sidebar";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-700 px-5 md:px-12 py-4 md:py-6 ${
          !isScrolled ? "bg-white/95 backdrop-blur-md border-b border-transparent" : "bg-brand-background/90 backdrop-blur-sm border-b border-brand-primary/5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-3 items-center relative">
          
          {/* Navigation - Left (Desktop Only) */}
          <nav className="hidden md:flex items-center gap-8 justify-start">
            <Link href="/shop" className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand-primary hover:text-brand-foreground transition-colors font-bold">
              shop
            </Link>
            <Link href="/about" className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand-primary hover:text-brand-foreground transition-colors font-bold">
              about the brand
            </Link>
          </nav>

          {/* Logo - Centered on Desktop, Leftish on Mobile (but we'll keep it centered in the grid) */}
          <div className="flex md:justify-center justify-start">
            <Link 
              href="/" 
            >
              <img 
                src="/logo.png" 
                alt="weekend sleepover" 
                className="h-10 md:h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center justify-end gap-5 md:gap-8">
            <button className="hidden md:block font-sans text-[11px] uppercase tracking-[0.2em] text-brand-primary hover:text-brand-foreground transition-colors font-bold">
              search
            </button>
            <div className="flex items-center gap-4 md:gap-6">
              <button 
                className="relative group p-1"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" strokeWidth={1.5} />
                <span className="absolute top-0 right-0 bg-brand-primary text-[7px] md:text-[8px] text-white w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center font-bold border border-white">
                  0
                </span>
              </button>
              <button 
                className="md:hidden text-brand-primary p-1"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
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
            className="fixed inset-0 z-60 bg-brand-background overflow-hidden"
          >
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
               <img src="/images/filler20.png" alt="" className="w-full h-full object-cover grayscale" />
            </div>

            <div className="relative h-full flex flex-col p-6 sm:p-12 z-10 overflow-y-auto">
              {/* Header inside Menu */}
              <div className="flex justify-between items-center mb-16">
                 <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                   <img src="/logo.png" alt="weekend" className="h-8 md:h-12 w-auto" />
                 </Link>
                 <button 
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="w-12 h-12 rounded-full bg-brand-foreground/5 flex items-center justify-center text-brand-foreground"
                 >
                   <X size={20} strokeWidth={1.5} />
                 </button>
              </div>
              
              <div className="grid grid-cols-1 gap-16">
                {/* Primary Links */}
                <nav className="flex flex-col space-y-4">
                  <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-primary font-black mb-4">shop the ritual</p>
                  {[
                    { name: "the weekend set", href: "/shop" },
                    { name: "all products", href: "/shop" },
                    { name: "about the brand", href: "/about" },
                    { name: "bride bundles", href: "/bride-bundles" },
                    { name: "sorority collabs", href: "/sorority" },
                  ].map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={() => setIsMobileMenuOpen(false)} 
                        className="font-serif text-4xl sm:text-6xl text-brand-foreground hover:text-brand-primary transition-all lowercase hover:italic block group"
                      >
                        {link.name}
                        <span className="inline-block transition-transform duration-500 group-hover:translate-x-4">.</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Secondary Links & Social */}
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-brand-foreground/5">
                   <div className="space-y-6">
                      <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-primary font-black">journal</p>
                      <nav className="flex flex-col space-y-4">
                        <Link href="/journal" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-xl text-brand-foreground/60 hover:text-brand-primary lowercase italic">latest stories</Link>
                        <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-xl text-brand-foreground/60 hover:text-brand-primary lowercase italic">faq</Link>
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-xl text-brand-foreground/60 hover:text-brand-primary lowercase italic">contact us</Link>
                      </nav>
                   </div>
                   <div className="space-y-6">
                      <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-primary font-black">join us</p>
                      <div className="flex gap-4">
                         {["ig", "tk", "yt", "dc"].map((social, i) => (
                           <motion.a
                             key={social}
                             href="#"
                             initial={{ opacity: 0, scale: 0.8 }}
                             animate={{ opacity: 1, scale: 1 }}
                             transition={{ delay: 0.6 + (i * 0.1) }}
                             className="w-10 h-10 rounded-full border border-brand-foreground/10 flex items-center justify-center font-sans text-[10px] font-bold text-brand-foreground/40 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all uppercase"
                           >
                             {social}
                           </motion.a>
                         ))}
                      </div>
                   </div>
                </div>
              </div>

              {/* Footer inside Menu */}
              <div className="mt-20 pt-12 border-t border-brand-foreground/5 flex flex-col gap-6">
                 <div className="p-8 bg-brand-primary/5 rounded-[40px] text-center border border-brand-primary/10 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="font-serif text-2xl text-brand-primary italic lowercase mb-2 relative z-10">want 10% off?</p>
                    <p className="font-sans text-[10px] text-brand-foreground/40 uppercase tracking-widest relative z-10 mb-6">join the secret sleepover</p>
                    <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="relative z-10 font-sans text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary underline underline-offset-4">Join now</Link>
                 </div>
                 
                 <div className="flex justify-between items-center text-[9px] uppercase tracking-[0.3em] font-black text-brand-foreground/20">
                    <p>© 2026 weekend sleepover</p>
                    <p>based in ca</p>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const links = [
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/support" },
    { name: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-white text-brand-red pt-24 pb-12 border-t border-brand-red/10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Minimalist Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="max-w-xs">
             <h3 className="font-serif text-2xl italic mb-4">Weekend Sleepover</h3>
             <p className="opacity-60 text-sm leading-relaxed font-sans">
               Essentials for the professional lounger. <br/> Est. 2024 in Paradise.
             </p>
          </div>

          <div className="hidden md:block">
             <button 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="p-4 rounded-full border border-brand-red/20 hover:bg-brand-red hover:text-white transition-colors"
             >
                <ArrowUpRight size={20} />
             </button>
          </div>
        </div>

        {/* Unique Link Spread - Large & Airy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
           {links.map((link, i) => (
             <a 
               key={i} 
               href={link.href}
               className="group flex flex-col border-t border-brand-red/20 pt-6 hover:border-brand-red transition-colors"
             >
                <span className="font-sans text-[10px] uppercase tracking-widest opacity-50 mb-2 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                <span className="font-serif text-3xl md:text-4xl group-hover:italic transition-all duration-300 transform group-hover:translate-x-2">
                  {link.name}
                </span>
             </a>
           ))}
        </div>

        {/* Bottom Minimal Info */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-brand-red/10 pt-8 opacity-60 text-[10px] font-bold uppercase tracking-widest">
           <div className="flex gap-8 mb-4 md:mb-0">
             <span>Terms</span>
             <span>Privacy</span>
             <span>Returns</span>
           </div>
           
           <p>© 2025 Weekend Sleepover Inc.</p>
        </div>

      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CreatorBadge() {
  return (
    <motion.a
      href="https://keanuworksva.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02 }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-100 group"
    >
      <div className="bg-brand-background/90 backdrop-blur-md border border-brand-foreground/5 px-4 py-3 rounded-full shadow-sm flex items-center gap-3 transition-shadow hover:shadow-lg">
        <div className="w-6 h-6 rounded-full bg-brand-foreground flex items-center justify-center">
            <span className="text-brand-background text-[10px] font-bold">k</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[7px] font-sans uppercase tracking-[0.2em] text-brand-foreground/40 font-bold leading-none mb-1">created by</span>
          <span className="text-[10px] font-serif italic text-brand-foreground leading-none lowercase">keanu works va</span>
        </div>
        <ArrowUpRight size={14} className="text-brand-foreground/20 group-hover:text-brand-primary transition-colors" />
      </div>
    </motion.a>
  );
}

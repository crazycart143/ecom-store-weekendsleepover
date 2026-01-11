"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { ArrowUpRight } from "lucide-react";

/**
 * 1. MOCK DATA - REPLICATING THE "CLEAN" BOARD LOOK
 * Using your project's local assets to ensure perfect style.
 */
const boards = [
  {
    title: "Breakfast in Bed",
    pins: "80 Pins",
    main: "/images/robe7.png",
    sub1: "/images/filler13.png",
    sub2: "/images/filler14.jpg",
  },
  {
    title: "French Riviera",
    pins: "81 Pins",
    main: "/images/filler72.jpg",
    sub1: "/images/robe9.png",
    sub2: "/images/robe12.png",
  },
  {
    title: "Weekend Moods",
    pins: "49 Pins",
    main: "/images/filler70.jpg",
    sub1: "/images/filler73.jpg",
    sub2: "/images/filler75.jpg",
  },
  {
    title: "Home of Leisure",
    pins: "74 Pins",
    main: "/images/robe8.png",
    sub1: "/images/filler17.png",
    sub2: "/images/robe11.png",
  },
  {
    title: "Parisian Weekends",
    pins: "56 Pins",
    main: "/images/filler74.jpg",
    sub1: "/images/filler18.JPG",
    sub2: "/images/filler15.jpg",
  },
  {
    title: "Stripes of Leisure",
    pins: "32 Pins",
    main: "/images/stripe-bag1.png",
    sub1: "/images/stripe-bag2.png",
    sub2: "/images/stripe-bag3.png",
  }
];

/**
 * Custom Pinterest Board Component
 * Recreates the "one large, two small" collage cover UI
 */
function PinterestBoard({ board }: { board: typeof boards[0] }) {
  return (
    <div className="group cursor-pointer">
      {/* Board Cover Collage */}
      <div className="aspect-[4/2.8] w-full flex gap-[2px] rounded-[24px] overflow-hidden border border-brand-foreground/5 mb-4 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-1 transition-all duration-700 bg-brand-secondary/5">
        {/* Main Large Image */}
        <div className="w-[66%] relative">
          <Image 
            src={board.main} 
            alt={board.title} 
            fill 
            className="object-cover transition-transform duration-[3s] group-hover:scale-110" 
          />
        </div>
        {/* Sub Stack */}
        <div className="flex-1 flex flex-col gap-[2px]">
          <div className="flex-1 relative">
            <Image src={board.sub1} alt={board.title} fill className="object-cover" />
          </div>
          <div className="flex-1 relative">
            <Image src={board.sub2} alt={board.title} fill className="object-cover" />
          </div>
        </div>
      </div>
      {/* Board Info */}
      <div className="px-1 flex justify-between items-start">
        <div>
          <h3 className="font-sans font-bold text-sm text-brand-foreground group-hover:text-brand-primary transition-colors lowercase">{board.title}</h3>
          <p className="font-sans text-[11px] text-brand-foreground/40 mt-0.5 lowercase">{board.pins} • curated</p>
        </div>
        <div className="w-8 h-8 rounded-full border border-brand-foreground/5 flex items-center justify-center text-brand-foreground/20 group-hover:border-brand-primary group-hover:text-brand-primary transition-all">
          <ArrowUpRight size={14} />
        </div>
      </div>
    </div>
  );
}

export function LeisureWorld() {
  return (
    <section className="py-24 md:py-40 bg-brand-background overflow-hidden relative">
      <Script 
        async 
        defer 
        src="//assets.pinterest.com/js/pinit.js" 
        strategy="lazyOnload"
      />
      
      <div className="editorial-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 px-4 md:px-0">
          <div className="max-w-2xl">
            <span className="font-sans text-[10px] md:text-[11px] tracking-[0.4em] text-brand-primary uppercase mb-6 block font-bold">
              leisure world
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-brand-foreground leading-[0.9] lowercase">
              curated for <br/>
              <span className="italic text-brand-primary font-light">the slow life.</span>
            </h2>
          </div>
          <motion.a 
            href="https://www.pinterest.com" // Replace with actual Pinterest Profile
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-brand-foreground/5 font-sans text-[11px] font-bold uppercase tracking-widest text-brand-foreground hover:bg-brand-secondary transition-colors"
          >
            Follow on Pinterest
            <div className="w-5 h-5 rounded-full bg-[#E60023] flex items-center justify-center text-white">
              <span className="text-[10px] leading-none mb-0.5">P</span>
            </div>
          </motion.a>
        </div>

        {/* Clean Board Grid (Mocking her actual pins for better performance/style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 px-4 md:px-0 mb-32">
          {boards.map((board, index) => (
            <motion.div
              key={board.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <PinterestBoard board={board} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


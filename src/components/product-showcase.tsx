"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, ShieldCheck, Truck, RotateCcw, ArrowRight } from "lucide-react";
import { CartSidebar } from "@/components/cart-sidebar";

export function ProductShowcase() {
  const [showSticky, setShowSticky] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 33, seconds: 12 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Show sticky when section header is out of view, hide when bottom is reached
        setShowSticky(rect.top < 0 && rect.bottom > 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: 23, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 md:py-42 relative bg-brand-background" 
      id="shop"
    >
      <div className="editorial-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
          
          {/* LEFT: Sticky Details (The "Control Panel") */}
          <div className="lg:w-5/12 lg:h-[calc(100vh-100px)] lg:sticky lg:top-24 flex flex-col justify-center mb-12 lg:mb-0">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="space-y-8 md:space-y-10"
            >
              {/* Header */}
              <div>
                 <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                    <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-brand-primary">Limited Drop 001</span>
                 </div>
                 <h2 className="font-serif text-5xl md:text-6xl lg:text-8xl text-brand-primary leading-[0.85] mb-4 md:mb-6">
                   the <br /> <span className="italic">weekend</span> <br /> set.
                 </h2>
                 <p className="font-sans text-xs md:text-sm md:text-base text-brand-foreground/60 leading-relaxed max-w-sm">
                   The official uniform of doing absolutely nothing. A heavy-weight organic terry robe paired with our signature skincare headband.
                 </p>
              </div>

              {/* Price & Timer */}
              <div className="flex items-end gap-6 md:gap-8 border-b border-brand-foreground/10 pb-6 md:pb-8">
                 <div>
                    <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-brand-foreground/40 mb-1">Bundle Price</p>
                    <p className="font-serif text-3xl md:text-4xl text-brand-primary">$165</p>
                 </div>
                 <div className="h-8 md:h-10 w-px bg-brand-foreground/10" />
                 <div>
                    <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-brand-foreground/40 mb-1">Drop Closes In</p>
                    <div className="flex gap-1 font-sans text-xs md:text-sm font-bold text-brand-primary">
                       <span>{String(timeLeft.days).padStart(2, '0')}d</span> : 
                       <span>{String(timeLeft.hours).padStart(2, '0')}h</span> : 
                       <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
                    </div>
                 </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                 <button 
                   onClick={() => setIsCartOpen(true)}
                   className="w-full bg-brand-foreground text-brand-background py-4 md:py-5 rounded-full font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-primary transition-colors duration-300 flex items-center justify-center gap-4 group"
                 >
                   <span>Add to Bag</span>
                   <span className="w-1.5 h-1.5 rounded-full bg-brand-background group-hover:bg-white transition-colors" />
                 </button>
                 <p className="text-center font-sans text-[9px] md:text-[10px] text-brand-foreground/40 uppercase tracking-widest">
                   Free shipping on orders over $200
                 </p>
              </div>

              {/* Details List */}
              <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                 {[
                   { label: "Fabric", val: "100% Sustainable Cotton Terry" },
                   { label: "Fit", val: "Girly, Petite, Bright & Fun" },
                   { label: "Care", val: "Machine wash cold, tumble dry low" }
                 ].map((item, i) => (
                   <div key={i} className="flex justify-between items-baseline group cursor-default">
                      <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-brand-foreground/50 group-hover:text-brand-primary transition-colors">{item.label}</span>
                      <span className="font-serif text-base md:text-lg italic text-brand-foreground text-right ml-4">{item.val}</span>
                   </div>
                 ))}
              </div>

            </motion.div>
          </div>

          {/* RIGHT: Scrollable Gallery (The "Editorial Spread") */}
          <div className="lg:w-7/12 space-y-12 md:space-y-24 pt-0 lg:pt-0">
             {[
               { src: "/images/robe14.png", caption: "Deep hooded design for maximum privacy." },
             ].map((img, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ margin: "-10% 0px -10% 0px" }}
                 transition={{ duration: 1 }}
               >
                 <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-secondary/20 mb-3 md:mb-4 rounded-[1px]">
                    <Image 
                      src={img.src} 
                      alt="Product Detail" 
                      fill 
                      className="object-cover hover:scale-105 transition-transform duration-[1.5s]" 
                    />
                 </div>
                 <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-brand-foreground/40 text-center">
                   fig. 0{i+1} — {img.caption}
                 </p>
               </motion.div>
             ))}
          </div>

        </div>
      </div>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Sticky Add To Cart (Mobile/Scroll) */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-t border-brand-foreground/5 px-5 py-3 md:px-6 md:py-4 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
          >
            <div className="flex flex-col">
              <span className="font-serif italic text-base md:text-lg text-brand-primary">the weekend set</span>
              <span className="text-[9px] md:text-[10px] font-sans text-brand-foreground/40 tracking-widest uppercase">$165 / bundle</span>
            </div>
            <button 
               onClick={() => setIsCartOpen(true)}
               className="bg-brand-primary text-white py-2.5 px-6 md:py-3 md:px-8 rounded-full font-sans text-[9px] md:text-[10px] uppercase tracking-widest font-bold hover:bg-brand-primary/90 transition-colors"
            >
              Add to Bag
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

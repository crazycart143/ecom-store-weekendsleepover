"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const rituals = [
  {
    title: "Slow Mornings",
    desc: "Coffee, cold water, and the heavy drape of the Weekend Robe. Your first ritual of the day should be your best.",
    image: "/images/filler62.png",
    tag: "01. AM"
  },
  {
    title: "Get Ready With Me",
    desc: "Hair back, skin on, and the world on pause. The official uniform for your morning protocol.",
    image: "/images/robe11.png",
    tag: "02. PREP"
  },
  {
    title: "Breakfast in Bed",
    desc: "Sunday recovery made elegant. Purity in comfort for the moments that belong only to you.",
    image: "/images/robe1.jpg",
    tag: "03. RESET"
  },
  {
    title: "Afternoon Nap",
    desc: "The mid-day pause you've earned. A weightless layer for when you decide to disappear for an hour.",
    image: "/images/robe15.png",
    tag: "04. PAUSE"
  },
  {
    title: "Evening Wind Down",
    desc: "Shed the day. Reclaim your time. The final transition into your true state of rest.",
    image: "/images/robe9.png",
    tag: "05. PM"
  }
];

export function Ritual() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isAutoScrolling = useRef(true);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAutoScrolling.current || !scrollRef.current) return;

      const nextIndex = (activeIndex + 1) % rituals.length;
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile 
        ? scrollRef.current.offsetWidth * 0.85 + 24 
        : scrollRef.current.offsetWidth / 3 + 48; // Estimate based on gap
      
      scrollRef.current.scrollTo({
        left: nextIndex * (isMobile ? scrollAmount : scrollAmount - 20), // Slight offset adjustment
        behavior: "smooth"
      });
      setActiveIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Sync index with manual scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const isMobile = window.innerWidth < 768;
    const itemWidth = isMobile 
      ? scrollRef.current.offsetWidth * 0.85 + 24 
      : scrollRef.current.offsetWidth / 3 + 48;
    
    const newIndex = Math.round(scrollPosition / itemWidth);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-24 md:py-20 bg-brand-background overflow-hidden">
      <div className="editorial-container mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <span className="font-sans text-[10px] md:text-[11px] tracking-[0.3em] text-brand-primary uppercase mb-6 block font-bold">
              lifestyle
            </span>
            <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl text-brand-foreground leading-[0.85]">
              for your <span className="italic font-light">daily rituals.</span>
            </h2>
          </motion.div>
          
          <div className="max-w-xs md:text-right pb-4">
            <p className="font-sans text-[10px] md:text-[12px] text-brand-foreground/40 uppercase tracking-[0.2em] leading-loose">
              How it fits into your morning protocol, your travel kit, and your Sunday reset.
            </p>
          </div>
        </div>
      </div>

      {/* Modern Carousel - All Devices */}
      <div className="relative">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onTouchStart={() => isAutoScrolling.current = false}
          onMouseDown={() => isAutoScrolling.current = false}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 md:gap-12 px-6 md:px-12 lg:px-24"
        >
          {rituals.map((ritual, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: index * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-20 flex-none w-[85vw] md:w-[45vw] lg:w-[30vw] snap-center flex flex-col group mb-12"
            >
              <div className="relative aspect-3/4 bg-brand-secondary overflow-hidden mb-12 md:mb-16 rounded-sm shadow-sm">
                <Image 
                  src={ritual.image} 
                  alt={ritual.title} 
                  fill 
                  className="object-cover transition-transform duration-2000 group-hover:scale-105" 
                />
                <div className="absolute top-8 left-8 bg-brand-background/95 backdrop-blur-sm px-5 py-2 rounded-full border border-brand-border/50">
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-foreground uppercase">{ritual.tag}</span>
                </div>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-foreground mb-6 italic lowercase font-light leading-none">
                {ritual.title}
              </h3>
              <p className="font-sans text-sm md:text-lg text-brand-foreground/60 leading-relaxed lowercase max-w-[90%] md:max-w-[400px]">
                {ritual.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination Indicators - All Devices */}
        <div className="flex justify-center gap-3 mt-12 md:mt-20">
           {rituals.map((_, i) => (
             <button
               key={i}
               onClick={() => {
                 isAutoScrolling.current = false;
                 const isMobile = window.innerWidth < 768;
                 const itemWidth = isMobile 
                   ? (scrollRef.current?.offsetWidth || 0) * 0.85 + 24 
                   : (scrollRef.current?.offsetWidth || 0) / 3 + 48;
                 scrollRef.current?.scrollTo({ left: i * itemWidth, behavior: 'smooth' });
                 setActiveIndex(i);
               }}
               className={`h-1 rounded-full transition-all duration-700 ${i === activeIndex ? 'w-12 bg-brand-primary' : 'w-3 bg-brand-primary/10'}`} 
             />
           ))}
        </div>
      </div>
    </section>
  );
}

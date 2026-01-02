"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/user-hero-beach.jpg",
    title: "Shoreline",
    label: "01 / ARCHIVE"
  },
  {
    src: "/images/scrapbook-image2.webp",
    title: "Morning Mist",
    label: "02 / ARCHIVE"
  },
  {
    src: "/images/user-ambient-beach.jpg",
    title: "Golden Hour",
    label: "03 / ARCHIVE"
  },
  {
    src: "/images/scrapbook-image6.jpg",
    title: "The Object",
    label: "04 / ARCHIVE"
  },
  {
    src: "/images/scrapbook-image7.jpg",
    title: "Soft Focus",
    label: "05 / ARCHIVE"
  }
];

export function LeisureWorld() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Limit how far we can scroll based on screen size
  // On desktop we show ~2.5 slides, so we stop earlier to avoid empty space
  const maxIndex = isMobile ? slides.length - 1 : slides.length - 3;
  const safeIndex = Math.min(activeIndex, maxIndex);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="bg-white">
      {/* Visual Diary Slider */}
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
          <div>
            <span className="font-title text-[10px] tracking-[0.5em] text-brand-dark-pink/40 uppercase mb-4 block">Visual Diary</span>
            <h2 className="font-serif text-5xl md:text-6xl text-brand-dark-pink">THE WEEKEND <br /> <span className="italic">WORLD</span></h2>
          </div>
          <div className="hidden md:block">
            <button className="font-title text-[10px] tracking-widest text-brand-dark-pink border-b border-brand-dark-pink/20 pb-2 uppercase hover:text-brand-red hover:border-brand-red transition-all">
              View Social Journal
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-visible px-4 md:px-12">
            <motion.div 
              className="flex gap-6 md:gap-8"
              animate={{ x: isMobile ? `-${safeIndex * 85}vw` : `-${safeIndex * 482}px` }}
              transition={{ type: "spring", stiffness: 150, damping: 25 }}
            >
              {slides.map((slide, i) => (
                <motion.div 
                  key={i}
                  className="flex-shrink-0 w-[80vw] lg:w-[450px]"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 shadow-2xl">
                    <Image 
                      src={slide.src} 
                      alt={slide.title}
                      fill
                      className="object-cover transition-transform duration-1000 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-pink/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex justify-between items-baseline px-2">
                    <h3 className="font-serif text-2xl text-brand-dark-pink">{slide.title}</h3>
                    <span className="font-title text-[8px] tracking-widest text-brand-dark-pink/60 uppercase">{slide.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Circles */}
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  safeIndex === i 
                    ? "bg-brand-red w-8" 
                    : "bg-brand-dark-pink/20 hover:bg-brand-dark-pink/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Life of Leisure Hero Section */}
      <section className="pb-32 bg-white pt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center border border-brand-dark-pink/10 rounded-[2rem] overflow-hidden bg-white shadow-sm">
            
            {/* Left: Content */}
            <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center items-start text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-script text-5xl md:text-7xl text-brand-dark-pink mb-6 md:mb-8"
              >
                " Life of Leisure "
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-lg md:text-2xl text-brand-dark-pink/80 leading-relaxed max-w-sm mb-8 md:mb-12"
              >
                Where heavy organic terry cloth feels like a love language, routines are cinematic rituals, and your morning coffee is part of the scene.
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="px-12 py-3 border border-brand-dark-pink rounded-full font-title text-[10px] tracking-[0.3em] uppercase text-brand-dark-pink hover:bg-brand-dark-pink hover:text-white transition-all duration-500"
              >
                Escape Here
              </motion.button>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[700px]">
              <Image 
                src="/images/brand-modal-image.webp" 
                alt="Life of Leisure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

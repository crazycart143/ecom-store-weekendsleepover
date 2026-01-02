"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Moodboard() {
  const items = [
    {
      src: "/images/contact-form-image.webp",
      rotate: -3,
      size: "w-full",
      colSpan: "col-span-12 md:col-span-4",
      caption: "the coffee ritual",
    },
    {
      src: "/images/user-ambient-beach.jpg",
      rotate: 2,
      size: "w-full",
      colSpan: "col-span-12 md:col-span-8",
      caption: "riviera stripes",
    },
    {
   src: "/images/scrapbook-image5.jpg",
      rotate: -2,
      size: "w-full",
      colSpan: "col-span-12 md:col-span-3",
      caption: "daily morning journal",
    },
    {
      src: "/images/scrapbook-image3.webp",
      rotate: 4,
      size: "w-full",
      colSpan: "col-span-12 md:col-span-6",
      caption: "european summer dreams",
    },
    {
     src: "/images/scrapbook-image4.jpg",
      rotate: -1,
      size: "w-full",
      colSpan: "col-span-12 md:col-span-3",
      caption: "organic terry texture",
    },
  ];

  return (
    <section 
      className="py-32 bg-white relative overflow-hidden"
      style={{ 
        backgroundImage: 'linear-gradient(90deg, var(--color-brand-light-pink) 50%, transparent 50%)',
        backgroundSize: '120px 100%',
      }}
    >
      {/* Background Doodles */}
      <div className="absolute top-20 left-10 w-24 h-24 opacity-10 rotate-12">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 50C10 27.9086 27.9086 10 50 10C72.0914 10 90 27.9086 90 50C90 72.0914 72.0914 90 50 90C27.9086 90 10 72.0914 10 50Z" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-start mb-20">
          <span className="font-script text-3xl text-brand-red mb-2">curated with love</span>
          <h2 className="font-serif text-5xl md:text-7xl text-brand-dark-pink">THE SCRAPBOOK</h2>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`relative ${item.colSpan}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className="polaroid group hover:z-50 transition-all duration-500"
                style={{ transform: `rotate(${item.rotate}deg)` }}
              >
                <div className="tape bg-white/60" />
                <div className="relative aspect-square md:aspect-video w-full overflow-hidden">
                   <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                   <p className="font-script text-2xl text-brand-dark-pink">{item.caption}</p>
                   <span className="font-title text-[10px] text-brand-dark-pink/40">0{index + 1}</span>
                </div>
              </div>

              {/* Decorative Stickers */}
              {index === 1 && (
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center p-4 border-2 border-dashed border-brand-dark-pink/20 rotate-12 z-20">
                   <span className="font-title text-[8px] text-center font-bold text-brand-dark-pink/60 uppercase">Heavenly morning</span>
                </div>
              )}
              
              {index === 3 && (
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-pink text-white rounded-full flex items-center justify-center rotate-[-15deg] z-20 shadow-lg">
                   <span className="text-xl">☆</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export function Moodboard() {
  const images = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2620&auto=format&fit=crop", // Model pink
    "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2673&auto=format&fit=crop", // Beach aesthetic
    "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2666&auto=format&fit=crop", // Cosmetics
    "https://images.unsplash.com/photo-1548689816-c399f954f3dd?q=80&w=2670&auto=format&fit=crop", // Friends laughing
    "https://images.unsplash.com/photo-1520025139972-87002636a0fb?q=80&w=2621&auto=format&fit=crop", // Soft texture
    "https://images.unsplash.com/photo-1616486029423-aaa478965c97?q=80&w=2662&auto=format&fit=crop", // Sunset
  ];

  return (
    <section className="py-24 bg-brand-light-pink">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="font-sans text-brand-dark-pink text-xs uppercase tracking-[0.2em] font-bold">Inspo</span>
          <h2 className="font-serif text-5xl text-brand-cocoa mt-4">Weekends Look Like This</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-sm group ${
                index === 1 || index === 4 ? "md:col-span-2" : ""
              } ${index === 2 ? "row-span-2" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <img
                src={src}
                alt="Aesthetic mood"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    src: "/images/journal-1.jpg",
    colSpan: "col-span-12 md:col-span-6",
    title: "Morning in Paris",
    desc: "The Weekend Set in its natural habitat."
  },
  {
    src: "/images/journal-2.jpg",
    colSpan: "col-span-12 md:col-span-6",
    title: "The Texture",
    desc: "Organic terry cloth that feels like a hug."
  },
  {
    src: "/images/journal-3.jpg",
    colSpan: "col-span-12",
    title: "Life of Leisure",
    desc: "The art of doing absolutely nothing, beautifully."
  }
];

export function Moodboard() {
  return (
    <section className="py-24 md:py-40 bg-brand-background">
      <div className="editorial-container">
        
        <div className="flex flex-col mb-20 md:mb-32">
          <span className="font-sans text-[11px] tracking-[0.3em] text-brand-primary uppercase mb-6 block font-bold">
            archive
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-brand-foreground leading-none lowercase">
            selected <span className="italic text-brand-primary">journal</span> entries
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-16">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`relative ${item.colSpan}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-video md:aspect-auto md:h-[600px] w-full overflow-hidden bg-brand-secondary rounded-sm mb-6">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[3s] hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-start">
                 <h3 className="font-serif text-3xl text-brand-foreground mb-2 italic lowercase">{item.title}</h3>
                 <p className="font-sans text-sm text-brand-foreground/40 uppercase tracking-widest">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

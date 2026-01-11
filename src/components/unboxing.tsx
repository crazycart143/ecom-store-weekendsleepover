"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const details = [
  { title: "Flame Scarlet Branding", desc: "Our signature logo, hot-stamped for a luxury finish." },
  { title: "Limited Numbering", desc: "Every set comes with a hand-numbered card of authenticity." },
  { title: "The Dust Bag", desc: "Breathable organic cotton for hotel-room storage." },
];

export function Unboxing() {
  return (
    <section className="py-32 md:py-48 bg-brand-background overflow-hidden">
      <div className="editorial-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-sans text-[11px] tracking-[0.3em] text-brand-primary uppercase mb-6 block font-bold">
                the presentation
              </span>
              <h2 className="font-serif text-5xl md:text-7xl text-brand-foreground mb-8 leading-tight lowercase">
                designed to be <br /><span className="italic font-light">unveiled.</span>
              </h2>
              <p className="font-sans text-lg text-brand-foreground/60 leading-relaxed mb-12 max-w-md lowercase">
                luxury isn't just what you wear, it's the sequence of moments that lead up to it. every weekend set arrives in custom fsc-certified packaging.
              </p>

              <div className="space-y-8">
                {details.map((detail, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="font-serif italic text-2xl text-brand-primary">0{i+1}</span>
                    <div>
                      <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold mb-1 text-brand-foreground">{detail.title.toLowerCase()}</h4>
                      <p className="font-sans text-sm text-brand-foreground/50 leading-relaxed lowercase">{detail.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Media */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-4/5 bg-brand-secondary rounded-sm overflow-hidden"
            >
              <Image 
                src="/images/placeholder-packaging.jpg" 
                alt="Packaging Detail"
                fill
                className="object-cover"
              />
              <div className="absolute top-8 left-8">
                 <p className="font-sans text-[10px] tracking-[0.5em] text-white/60 uppercase">unboxing 01</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

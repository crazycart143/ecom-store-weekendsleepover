"use client";

import { motion } from "framer-motion";
import { Package, Sparkles } from "lucide-react";
import Image from "next/image";

export function Unboxing() {
  return (
    <section className="py-24 bg-brand-light-pink/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Centered Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-4 block">The Experience</span>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-cocoa mb-6">
              Unbox <span className="text-brand-dark-pink italic">Luxury</span>
          </h2>
          <p className="text-brand-cocoa/80 text-lg md:text-xl leading-relaxed">
              Your Weekend Set arrives in our signature magnetic keepsake box. Perfect for gifting (or keeping all to yourself).
          </p>
        </motion.div>

        {/* Hero Visual */}
        <motion.div 
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-white rounded-[2rem] md:rounded-[3rem] p-4 border border-brand-pink shadow-2xl flex items-center justify-center overflow-hidden group">
                <Image 
                  src="/images/unboxing-gift-image.png" 
                  alt="Custom Gift Box Unboxing" 
                  fill
                  className="object-cover rounded-[1.5rem] md:rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105 p-4"
                />
                
                {/* Floating labels / dots - optional premium touch */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-none" />
                
                <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-brand-red/10"
                >
                    <Sparkles className="text-brand-red" size={28} />
                </motion.div>
            </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { title: "The Weekend Robe", desc: "Cloud-soft fleece in signature pink." },
                { title: "Skincare Headband", desc: "Matching plush accessory." },
                { title: "Satin Travel Pouch", desc: "To keep your essentials safe." },
                { title: "Welcome Card", desc: "A personalized note from us." }
            ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/40 border border-white/50 backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                    <span className="font-serif text-brand-red font-bold text-2xl mb-4 opacity-50 italic">0{i+1}</span>
                    <h3 className="font-bold text-brand-dark-pink mb-2 uppercase tracking-wider text-sm">{item.title}</h3>
                    <p className="text-sm text-brand-cocoa/70 leading-relaxed font-sans">{item.desc}</p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}

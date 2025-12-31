"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="py-24 bg-white text-brand-cocoa overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Press Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale mb-24">
           {/* Placeholder text logos for now, normally SVGs */}
           <span className="font-serif text-2xl font-bold">VOGUE</span>
           <span className="font-serif text-2xl font-bold">ELLE</span>
           <span className="font-serif text-2xl font-bold">Harper's BAZAAR</span>
           <span className="font-serif text-2xl font-bold">Refinery29</span>
        </div>

        <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
                <div className="flex justify-center gap-1 text-brand-red mb-8">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
                </div>
                <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
                    "The only thing I want to wear when I get home. It’s not just a robe, it’s a whole mood."
                </h2>
                <div className="flex flex-col items-center gap-2">
                    <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
                        alt="Sarah J." 
                        className="w-16 h-16 rounded-full object-cover border-2 border-brand-red/20" 
                    />
                    <p className="font-bold text-brand-dark-pink tracking-widest text-xs uppercase">Sarah J. • Verified Buyer</p>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
}

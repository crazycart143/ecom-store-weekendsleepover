"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  const notes = [
    {
      text: "The only thing I want to wear when I get home. It's not just a robe, it's a whole mood.",
      author: "Sarah J.",
      rotate: -2,
    },
    {
      text: "I've never felt more like a main character while doing my skincare. Total game changer.",
      author: "Mia W.",
      rotate: 3,
    },
    {
      text: "The fabric is like a literal hug. Can I live in this forever please?",
      author: "Elena R.",
      rotate: -1,
    }
  ];

  return (
    <section className="py-24 bg-brand-cream overflow-hidden border-y border-brand-dark-pink/5">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Editor's Note Style Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
           <div>
              <span className="font-title text-[10px] tracking-[0.5em] text-brand-cocoa/40 uppercase mb-4 block">Section 03 / Reviews</span>
              <h2 className="font-serif text-5xl md:text-6xl text-brand-cocoa leading-none">WHO WE <br /><span className="italic font-script text-brand-red normal-case text-7xl">vibe with</span></h2>
           </div>
           <div className="max-w-sm">
              <p className="font-sans text-sm text-brand-dark-pink/60 leading-relaxed italic">
                "Born from the frustration of scratchy boutique hotel robes, we set out to create the ultimate cinematic escape—right in your own living room."
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {notes.map((note, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="relative"
             >
                <div 
                   className="bg-white p-10 shadow-sm border border-brand-cocoa/5 min-h-[300px] flex flex-col justify-center text-center"
                   style={{ transform: `rotate(${note.rotate}deg)` }}
                >
                   {/* Sticker / Stamp */}
                   <div className="absolute top-4 right-4 w-12 h-12 border-2 border-brand-red/10 rounded-full flex items-center justify-center rotate-12">
                      <span className="font-title text-[8px] text-brand-red/40 font-bold uppercase">Approved</span>
                   </div>

                   <p className="font-script text-3xl text-brand-cocoa leading-snug mb-8">
                     "{note.text}"
                   </p>
                   <div className="flex flex-col items-center">
                      <div className="w-12 h-[1px] bg-brand-pink mb-4" />
                      <p className="font-title text-[10px] tracking-widest text-brand-red uppercase font-bold">{note.author}</p>
                   </div>
                </div>
                
                {/* Shadow detail to look like it's lifting off */}
                <div className="absolute inset-0 bg-brand-cocoa/5 -z-10 blur-xl translate-y-4" />
             </motion.div>
           ))}
        </div>

        {/* Press Bar - Editorial Style */}
        <div className="mt-32 pt-12 border-t border-brand-cocoa/5">
           <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale group">
              <span className="font-serif text-xl tracking-tighter hover:opacity-100 transition-opacity cursor-default">VOGUE</span>
              <span className="font-serif text-xl tracking-tighter hover:opacity-100 transition-opacity cursor-default uppercase">Elle</span>
              <span className="font-serif text-xl tracking-tighter hover:opacity-100 transition-opacity cursor-default uppercase italic">Harper's BAZAAR</span>
              <span className="font-serif text-xl tracking-tighter hover:opacity-100 transition-opacity cursor-default">Refinery29</span>
           </div>
        </div>

      </div>
    </section>
  );
}

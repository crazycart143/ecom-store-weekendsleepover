"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Unboxing() {
  const contents = [
    { title: "The Signature Box", desc: "Magnetic closure, matte finish, gold-stamped logo." },
    { title: "Silk Tissue", desc: "Sustainable acid-free paper to protect the delicate flora." },
    { title: "The Weekend Set", desc: "Your hand-selected robe and matching headband." },
    { title: "The Love Note", desc: "A handwritten welcome into the slow living community." }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header Section - Asymmetrical */}
        <div className="flex flex-col lg:flex-row gap-12 items-baseline mb-24">
           <motion.div 
             className="lg:w-2/3"
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="font-serif text-6xl md:text-8xl text-brand-dark-pink leading-none tracking-tighter">
                 THE <br /> <span className="italic font-light">ANATOMY</span> OF <br /> <span className="font-script text-brand-red normal-case text-8xl md:text-9xl ml-8">weekend set</span>
              </h2>
           </motion.div>
           <motion.div 
             className="lg:w-1/3 border-t border-brand-pink pt-8"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
           >
              <p className="font-sans text-sm text-brand-dark-pink/70 leading-relaxed italic">
                 "Luxury isn't just what you wear, it's the sequence of moments that lead up to it. Every box is curated to be a ritual in itself."
              </p>
           </motion.div>
        </div>

        {/* Main Visual Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           
           {/* Left: Annotations */}
           <div className="lg:col-span-4 order-2 lg:order-1 space-y-16">
              {contents.map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="group cursor-default"
                 >
                    <div className="flex items-center gap-4 mb-3">
                       <span className="font-title text-[10px] text-brand-red font-black border border-brand-red/20 w-6 h-6 rounded-full flex items-center justify-center">
                          {i + 1}
                       </span>
                       <h3 className="font-title text-[10px] tracking-[0.3em] uppercase text-brand-dark-pink font-bold group-hover:text-brand-red transition-colors">
                          {item.title}
                       </h3>
                    </div>
                    <p className="font-sans text-sm text-brand-dark-pink/60 leading-relaxed pl-10 max-w-xs">
                       {item.desc}
                    </p>
                 </motion.div>
              ))}
              
              <div className="pt-8 pl-10">
                 <button className="flex items-center gap-4 group font-title text-[10px] uppercase tracking-[0.4em] text-brand-red font-black">
                    See the process <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>

           {/* Right: Large Editorial Shot */}
           <div className="lg:col-span-8 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
              >
                 {/* Decorative Background Element */}
                 <div className="absolute -inset-10 bg-brand-light-pink rounded-full blur-[120px] opacity-30 -z-10" />
                 
                 <div className="polaroid p-6 pb-20 bg-white shadow-[-40px_40px_80px_rgba(0,0,0,0.05)] relative z-10 rotate-1">
                    <div className="tape bg-brand-pink/30" />
                    <div className="relative aspect-[4/5] md:aspect-video overflow-hidden">
                       <Image 
                         src="/images/user-ambient-beach.jpg" 
                         alt="Preimum Packaging Flatlay"
                         fill
                         className="object-cover"
                       />
                    </div>
                    
                    {/* Tiny Magazine Captions */}
                    <div className="absolute bottom-6 right-8 text-right">
                       <p className="font-title text-[8px] tracking-widest text-brand-dark-pink/40 uppercase">Shot 04 // Studio A</p>
                       <p className="font-title text-[8px] tracking-widest text-brand-dark-pink/40 uppercase">Weekend Sleepover Essentials</p>
                    </div>

                    <div className="absolute top-12 left-12">
                       <motion.div 
                         animate={{ scale: [1, 1.1, 1] }}
                         transition={{ duration: 3, repeat: Infinity }}
                         className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border border-brand-pink"
                       >
                          <Sparkles size={20} className="text-brand-red" />
                       </motion.div>
                    </div>
                 </div>

                 {/* Vertical Detail */}
                 <div className="absolute -right-12 top-1/2 -translate-y-1/2 rotate-90 hidden xl:block">
                    <p className="font-title text-[10px] tracking-[1em] text-brand-dark-pink/20 uppercase whitespace-nowrap">
                       UNBOXING EXPERIENCE • PACKAGING DESIGN • 2024
                    </p>
                 </div>
              </motion.div>
           </div>

        </div>
      </div>
    </section>
  );
}

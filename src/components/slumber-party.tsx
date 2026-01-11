"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, Sparkles } from "lucide-react";

export function SlumberParty() {
  return (
    <section className="py-24 md:py-48 bg-brand-background text-brand-foreground overflow-hidden relative border-t border-brand-foreground/5">

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="editorial-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
              <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-brand-primary">The Sanctuary</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-8xl leading-[0.85] lowercase mb-12">
              welcome to the <br /> <span className="italic font-light">slumber party.</span>
            </h2>
            
            <p className="font-sans text-lg md:text-xl text-brand-foreground/60 leading-relaxed lowercase italic mb-16 max-w-xl">
             “ This is a space for the girls who love travel, wellness, beauty, brand building and all the little luxuries in life to connect. “ 💘
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              {[
                { icon: MessageSquare, title: "Chat Room", desc: "Late night thoughts & ritual sharing." },
                { icon: Sparkles, title: "Inner Circle", desc: "First look at every new collection." },
              ].map((item, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-foreground/5 border border-brand-foreground/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500">
                    <item.icon size={20} strokeWidth={1.5} className="text-brand-foreground/40 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-serif text-2xl lowercase italic">{item.title}</h4>
                  <p className="font-sans text-xs text-brand-foreground/40 leading-relaxed lowercase">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="bg-brand-primary text-white px-12 py-6 rounded-full font-sans text-xs uppercase tracking-[0.3em] font-black hover:brightness-110 transition-all duration-500 shadow-2xl shadow-brand-primary/20 active:scale-95">
              join our discord channel
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-brand-primary/10 to-transparent rounded-[60px] blur-3xl opacity-30" />
            <div className="relative h-full w-full rounded-[60px] border border-brand-foreground/5 overflow-hidden bg-brand-background shadow-2xl shadow-brand-foreground/5 p-4">
              {/* Box Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/filler20.png" 
                  alt="Community atmosphere" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              <div className="absolute inset-0 p-12 mt-60 flex flex-col justify-center gap-12 text-center z-10">
                 <div className="space-y-4">
                   <div className="flex justify-center -space-x-4 mb-8">
                     {[1,2,3,4,5].map(i => (
                       <div key={i} className="w-16 h-16 rounded-full border-4 border-brand-background bg-brand-foreground/5 overflow-hidden">
                         <img src={`/images/filler${i + 3}.png`} alt="member" className="w-full h-full object-cover group-hover:opacity-100 transition-opacity" />
                       </div>
                     ))}
                     <div className="w-16 h-16 rounded-full border-4 border-brand-background bg-brand-primary flex items-center justify-center text-[10px] font-black font-sans tracking-tight text-white">
                       2.4K+
                     </div>
                   </div>
                   <h3 className="font-serif text-3xl italic text-white">"the only discord i don't mute."</h3>
                   <span className="font-sans text-[10px] uppercase tracking-widest text-brand-foreground/30">— @jess_slows</span>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

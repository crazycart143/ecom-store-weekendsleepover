"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/waitlist-form";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-brand-light-pink selection:bg-brand-red selection:text-white">
      {/* Background Image - Retro Grainy Beach */}
      <Image 
        src="/images/hero-background.png"
        alt="Relaxing beach background"
        fill
        priority
        className="object-cover z-0"
        sizes="100vw"
        quality={90}
      />
      
      {/* Grain Overlay */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} 
      />

      {/* Dark Overlay - Optimized for better text contrast */}
      <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-[2px]" />
      
      {/* Pink Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-brand-pink/50 via-brand-light-pink/30 to-brand-red/10 mix-blend-overlay" />
      <div className="absolute inset-0 z-10 bg-white/5" />

      {/* Floating Glass UI Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-5 md:left-32 z-20 bg-white backdrop-blur-xl border border-white/40 p-3 md:p-4 rounded-2xl shadow-xl hidden lg:block rotate-[-6deg]"
      >
        <span className="text-brand-dark-pink font-bold text-[10px] uppercase tracking-widest block mb-1">Status</span>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-serif text-brand-red italic text-sm">Departing Soon</span>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-5 md:right-32 z-20 bg-white backdrop-blur-xl border border-white/40 p-3 md:p-4 rounded-2xl shadow-xl hidden lg:block rotate-[6deg]"
      >
        <span className="text-brand-dark-pink font-bold text-[10px] uppercase tracking-widest block mb-1">The Weekend Set</span>
         <span className="font-serif text-brand-red text-lg block">Limited Launch ✦</span>
      </motion.div>


      {/* Main Content */}
      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="mb-6"
        >
             <span className="inline-block py-2 px-6 rounded-full bg-white backdrop-blur-md text-brand-red font-serif italic text-xl md:text-xl border border-white/40 shadow-sm">
                Welcome to
            </span>
        </motion.div>

        <motion.h1 
          className="font-serif text-7xl md:text-7xl lg:text-9xl text-white font-black tracking-tighter leading-[0.85] drop-shadow-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-brand-dark-pink drop-shadow-sm">WEEKEND</span>
          <span className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">SLEEPOVER</span>
        </motion.h1>

        <motion.div 
          className="font-sans text-base md:text-xl text-brand-dark-pink font-medium mb-10 max-w-xl mx-auto leading-relaxed glass-text bg-white p-6 rounded-2xl backdrop-blur-xl border border-white/50 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="mb-2 font-bold uppercase tracking-widest text-xs text-brand-red">Official Product Launch</p>
          <p >Introducing <span className="font-serif italic text-2xl text-brand-red">The Weekend Set</span>.</p>
          <p className="mt-2 text-sm md:text-base opacity-90">The ultimate Robe + Skincare Headband duo designed for your perfect night in.</p>
        </motion.div>


        
        <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
        >
             <WaitlistForm />
        </motion.div>

      </div>
    </section>
  );
}

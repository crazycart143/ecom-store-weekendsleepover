"use client";

import { motion } from "framer-motion";
import { Star, Check, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { CountdownTimer } from "@/components/countdown-timer";
import Image from "next/image";

export function ProductShowcase() {
  return (
    <section 
      className="py-32 bg-white overflow-hidden relative"
      style={{ 
        backgroundImage: 'linear-gradient(90deg, var(--color-brand-light-pink) 50%, transparent 50%)',
        backgroundSize: '120px 100%'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Typography & Vertical Detail */}
          <div className="lg:col-span-3 lg:pt-20 relative z-10">
             <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/20 inline-block lg:block"
             >
                <p className="font-title text-[10px] tracking-[0.5em] text-brand-dark-pink uppercase mb-8 [writing-mode:vertical-rl] rotate-180 hidden lg:inline-block h-48 opacity-60">
                   Object Spotlight — 002
                </p>
                <h3 className="font-script text-5xl text-brand-red mb-4">the intention</h3>
                <p className="font-sans text-sm text-brand-dark-pink leading-relaxed max-w-[200px]">
                   An ode to the sun-soaked spirit of the French Riviera. Hefty organic weaves and a soft rebellion against the generic.
                </p>
             </motion.div>
          </div>

          {/* Center: Main Image (Polaroid style) */}
          <div className="lg:col-span-5">
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 p-4 bg-white shadow-2xl rotate-1"
             >
                <div className="relative aspect-[4/5] overflow-hidden">
                   <Image 
                     src="/images/product-image2.webp" 
                     alt="Product Spotlight"
                     fill
                     className="object-cover"
                   />
                </div>
                <div className="mt-8 pb-4 text-center">
                   <p className="font-title text-[10px] tracking-[1em] text-brand-dark-pink/40 uppercase">WEEKEND SLEEPOVER</p>
                </div>
             </motion.div>
          </div>

          {/* Right: Selection & Details */}
          <div className="lg:col-span-4 lg:pt-20 relative z-10">
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-md p-6 md:p-10 rounded-[2.5rem] border border-white/40 shadow-xl"
             >
                <div className="flex items-center gap-4 mb-4">
                   <span className="font-serif text-3xl text-brand-dark-pink">$120</span>
                   <span className="w-12 h-[1px] bg-brand-pink" />
                   <span className="font-title text-[10px] tracking-widest text-brand-red font-bold uppercase">Limited Drop</span>
                </div>

                <h2 className="font-serif text-5xl md:text-6xl text-brand-dark-pink mb-8 leading-none">
                  THE <br /><span className="italic">WEEKEND</span> SET
                </h2>

                <div className="space-y-6 mb-12">
                   <div className="flex items-start gap-4">
                      <span className="font-title text-[10px] text-brand-red font-black">01.</span>
                      <p className="font-sans text-sm text-brand-dark-pink font-medium capitalize">Signature Riviera Robe (Organic Terry Cloth)</p>
                   </div>
                   <div className="flex items-start gap-4">
                      <span className="font-title text-[10px] text-brand-red font-black">02.</span>
                      <p className="font-sans text-sm text-brand-dark-pink font-medium capitalize">Matching Skincare Headband (The Bundle Exclusive)</p>
                   </div>
                   <div className="flex items-start gap-4">
                      <span className="font-title text-[10px] text-brand-red font-black">03.</span>
                      <p className="font-sans text-sm text-brand-dark-pink font-medium capitalize">Designed for Coffee, Skincare & Journaling Rituals</p>
                   </div>
                </div>

                {/* Urgency - Minimal Style */}
                <div className="mb-10 p-4 md:p-6 border border-brand-red/10 bg-brand-pink/5 rounded-sm">
                   <p className="font-title text-[7px] md:text-[8px] tracking-[0.3em] text-brand-red uppercase mb-4 text-center lg:text-left">Launching in limited quantities</p>
                   <CountdownTimer theme="dark" />
                </div>

                <div className="flex flex-col gap-4">
                   <button className="w-full bg-brand-dark-pink text-white py-4 font-title text-[10px] uppercase tracking-[0.3em] hover:bg-brand-red transition-colors">
                      Pre-order Now
                   </button>
                   <button className="w-full border border-brand-dark-pink/10 py-4 font-title text-[10px] uppercase tracking-[0.3em] hover:bg-brand-cream transition-colors">
                      Discover the Ritual
                   </button>
                </div>
                
                <div className="mt-12 p-4 border-l-2 border-brand-pink bg-brand-pink/5">
                   <p className="font-sans text-[10px] text-brand-dark-pink italic leading-relaxed">
                      DESIGN NOTE: Reclaiming the luxury of hotel mornings without the scratchy textures. A bold, striped sanctuary for your morning coffee and daily ink.
                   </p>
                </div>
                
                <div className="mt-8 flex justify-between items-center opacity-60 text-brand-dark-pink">
                   <Truck size={16} />
                   <ShieldCheck size={16} />
                   <RotateCcw size={16} />
                   <Star size={16} />
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

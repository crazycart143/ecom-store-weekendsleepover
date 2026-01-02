"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/waitlist-form";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-full w-full pt-28 md:pt-32 lg:pt-32 lg:pb-40 px-6 md:px-12 bg-brand-cream overflow-hidden">
      {/* Editorial Layout Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* Left Column: Typography */}
        <div className="relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-script text-3xl md:text-4xl text-brand-red block mb-2 md:mb-4">the limited launch</span>
            <h1 className="font-serif text-5xl md:text-8xl lg:text-8xl xl:text-9xl text-brand-dark-pink leading-[0.9] tracking-tighter mb-6 md:mb-8">
              WEEKEND <br />
              <span className="italic">SET</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-md"
          >
            <p className="font-sans text-base md:text-lg text-brand-dark-pink/80 italic mb-6 md:mb-8 border-l-2 border-brand-pink pl-6">
             Introducing the bundle for your slow mornings. Our signature organic terry robe + matching skincare headband.
            </p>
            
            <div className="space-y-6">
              <p className="font-sans text-sm tracking-widest uppercase font-bold text-brand-dark-pink/60">
                Exclusive First Access
              </p>
              <WaitlistForm />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Imagery */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative z-10"
          >
            <div className="polaroid aspect-[3/2] relative scale-110">
              <div className="tape" />
              <Image 
                src="/images/user-hero-beach.jpg"
                alt="Retro Beach Lifestyle"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Floating Element 1 - Doodle / Star */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="hidden lg:block absolute -top-[450px] lg:-top-20 -right-22 w-32 h-32 opacity-20 pointer-events-none"
          >
             <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L55.9 33.3L89.4 18.2L66.7 44.1L100 50L66.7 55.9L89.4 81.8L55.9 66.7L50 100L44.1 66.7L10.6 81.8L33.3 55.9L0 50L33.3 44.1L10.6 18.2L44.1 33.3L50 0Z" fill="var(--color-brand-red)" />
             </svg>
          </motion.div>

          {/* Floating Element 2 - Polaroid Overlay */}
          <motion.div
             initial={{ opacity: 0, x: 50, rotate: 5 }}
             animate={{ opacity: 1, x: 0, rotate: 8 }}
             transition={{ delay: 0.6, duration: 0.8 }}
             className="hidden lg:block absolute -bottom-10 -left-10 w-48 aspect-square bg-white p-2 shadow-xl z-20 hidden"
          >
             <div className="relative w-full h-full bg-brand-light-pink overflow-hidden">
                <Image 
                  src="/images/contact-form-image.webp"
                  alt="Detail"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-brand-pink/20 mix-blend-multiply" />
             </div>
             <p className="font-script text-brand-dark-pink text-center mt-2 text-lg">01. Rituals</p>
          </motion.div>
        </div>
      </div>

      {/* Magazine Detail - Page Number / Edition */}
      <div className="absolute bottom-8 left-8 hidden lg:block">
        <p className="font-title text-[10px] tracking-[0.5em] text-brand-dark-pink/40 uppercase">
          Edition No. 04 / Page 12
        </p>
      </div>
      
      {/* Vertical Side Text */}
      <div className="absolute top-1/2 -right-12 -translate-y-1/2 rotate-90 hidden xl:block">
        <p className="font-title text-[10px] tracking-[0.5em] text-brand-dark-pink/40 uppercase whitespace-nowrap">
          The Art of Living Slow • Weekend Sleepover • Est. 2024
        </p>
      </div>
    </section>
  );
}

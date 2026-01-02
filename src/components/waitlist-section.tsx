"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export function WaitlistSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section 
      className="py-24 bg-white relative overflow-hidden"
      style={{ 
        backgroundImage: 'linear-gradient(90deg, var(--color-brand-light-pink) 50%, transparent 50%)',
        backgroundSize: '120px 100%',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-cream shadow-2xl flex flex-col md:flex-row max-w-5xl mx-auto border border-brand-dark-pink/10 relative"
        >
          {/* Postcard Stamps/Details */}
          <div className="absolute top-8 right-8 w-20 h-24 bg-brand-pink/20 border-2 border-brand-red/10 rounded-sm flex flex-col items-center justify-center p-2 z-10 hidden md:flex">
             <div className="w-full h-[1px] bg-brand-red/10 my-1" />
             <span className="font-title text-[8px] text-brand-red/40 font-bold uppercase text-center italic">Express <br />Postage</span>
             <div className="w-full h-[1px] bg-brand-red/10 my-1" />
          </div>

          <div className="absolute bottom-8 left-8 hidden md:block z-10">
             <span className="font-title text-[8px] tracking-[0.5em] text-brand-dark-pink/40 uppercase">
               Ref. 1224-B • PARIS / LONDON
             </span>
          </div>
          
          {/* Left: Lifestyle Image (The Photo part of the postcard) */}
          <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px] p-6">
            <div className="relative w-full h-full overflow-hidden polaroid p-4 pb-12 rotate-[-1deg]">
              <Image 
                src="/images/waitlist-image.webp" 
                alt="Morning Light" 
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full text-center">
                 <p className="font-script text-3xl text-brand-dark-pink">Wish you were here x</p>
              </div>
            </div>
          </div>

          {/* Right: Form (The Message part of the postcard) */}
          <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center relative">
            {/* Center vertical line like a postcard */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-brand-dark-pink/10 hidden md:block" />

            <div className="mb-12">
               <span className="font-script text-3xl text-brand-red block mb-2">Hello love,</span>
                <h3 className="font-serif text-4xl md:text-5xl text-brand-dark-pink leading-tight">
                  Join the <span className="italic">Guest List?</span>
                </h3>
                <p className="font-sans text-sm text-brand-dark-pink/60 mt-4 leading-relaxed">
                  Inspired by the bold stripes of the Côte d'Azur. Leave your details below for an invitation to our next limited drop of cinematic morning essentials.
                </p>
            </div>

            <form className="space-y-8 w-full">
              <div className="relative">
                <p className="font-title text-[10px] uppercase tracking-widest text-brand-red/40 mb-1">To:</p>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-brand-dark-pink/20 py-2 text-brand-dark-pink placeholder:text-brand-dark-pink/40 focus:outline-none focus:border-brand-red transition-all italic font-script text-3xl"
                />
              </div>

              <div className="relative">
                <p className="font-title text-[10px] uppercase tracking-widest text-brand-red/40 mb-1">Address details:</p>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-brand-dark-pink/20 py-2 text-brand-dark-pink placeholder:text-brand-dark-pink/40 focus:outline-none focus:border-brand-red transition-all italic font-script text-3xl"
                />
              </div>

              <div className="pt-8">
                <button className="flex items-center gap-4 group">
                  <span className="bg-brand-red text-white px-8 py-3 rounded-full font-title text-[10px] uppercase tracking-widest group-hover:bg-brand-dark-pink transition-colors">
                    Send Invitation
                  </span>
                  <div className="w-12 h-[1px] bg-brand-dark-pink/20 group-hover:w-20 transition-all" />
                </button>
              </div>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

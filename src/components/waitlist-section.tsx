"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function WaitlistSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-light-pink/30 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-w-6xl mx-auto border border-brand-pink/50"
        >
          
          {/* Left: Lifestyle Image */}
          <div className="w-full md:w-1/2 relative min-h-[500px]">
            <img 
              src="/images/contact-form-image.webp" 
              alt="Life of Leisure" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply" />
            
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
               <motion.div 
                 initial={{ opacity: 0, rotate: -5 }}
                 whileInView={{ opacity: 1, rotate: -12 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.4 }}
                 className="text-center"
               >
                 <span className="font-serif italic text-6xl md:text-8xl text-white drop-shadow-lg leading-none block transform -translate-y-4">Life</span>
                 <span className="font-serif italic text-6xl md:text-8xl text-white drop-shadow-lg leading-none block ml-12">of</span>
                 <span className="font-serif italic text-6xl md:text-8xl text-white drop-shadow-lg leading-none block -ml-8">Leisure</span>
               </motion.div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-1/2 bg-white p-12 md:p-20 flex flex-col justify-center text-center">
            
            <div className="mb-10">
               <h3 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-dark-pink mb-3">Sign up to know when we launch</h3>
               <p className="font-serif text-3xl md:text-4xl text-brand-red">
                 First access to the <br/> <span className="italic">limited drop</span>
               </p>
            </div>

            <form className="space-y-6 w-full max-w-sm mx-auto">
              <div className="relative group">
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First Name"
                  className="w-full bg-transparent border-b-2 border-brand-red/20 py-3 text-brand-cocoa placeholder:text-brand-cocoa/40 focus:outline-none focus:border-brand-red transition-all text-lg font-serif"
                />
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b-2 border-brand-red/20 py-3 text-brand-cocoa placeholder:text-brand-cocoa/40 focus:outline-none focus:border-brand-red transition-all text-lg font-serif"
                />
              </div>

              <div className="relative group">
                <input 
                  type="tel" 
                  placeholder="Phone Number (SMS Updates)"
                  className="w-full bg-transparent border-b-2 border-brand-red/20 py-3 text-brand-cocoa placeholder:text-brand-cocoa/40 focus:outline-none focus:border-brand-red transition-all text-lg font-serif"
                />
              </div>

              <button className="w-full bg-white text-brand-red border-2 border-brand-red py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all duration-300 mt-8 shadow-lg hover:shadow-brand-red/30">
                Sign Up
              </button>
            </form>

            <p className="mt-8 text-[10px] text-brand-cocoa/40 uppercase tracking-widest">
               No spam, just vibes.
            </p>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

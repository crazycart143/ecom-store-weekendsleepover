"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/waitlist-form";
import Image from "next/image";

export function WaitlistSection() {
  return (
    <section className="py-32 md:py-20 bg-brand-secondary/30 overflow-hidden relative" id="waitlist-section">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          {/* Left Column: Messaging */}
          <div className="lg:col-span-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <h2 className="font-serif text-6xl md:text-9xl text-brand-foreground mb-10 leading-[0.85]">
                become <br /><span className="italic font-light">a guest.</span>
              </h2>
              <p className="font-sans text-[16px] md:text-lg text-brand-foreground/60 mb-12 max-w-sm leading-relaxed lowercase">
                be the first to shop the next release. our collections are produced in intentional quantities. skip the line and join the guest list for priority access.
              </p>
              
              <WaitlistForm />
              
              <div className="mt-16 flex gap-12 border-t border-brand-foreground/5 pt-12">
                <div>
                   <p className="font-sans text-[10px] text-brand-foreground/40 uppercase tracking-[0.2em] mb-2 font-bold">status</p>
                   <p className="font-serif italic text-2xl text-brand-primary">guest list open</p>
                </div>
                <div>
                   <p className="font-sans text-[10px] text-brand-foreground/40 uppercase tracking-[0.2em] mb-2 font-bold">availability</p>
                   <p className="font-serif italic text-2xl text-brand-primary">limited release</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Imagery */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-4/5 bg-brand-background p-4 shadow-3xl rounded-sm"
            >
              <div className="relative w-full h-full overflow-hidden bg-brand-secondary">
                <Image 
                  src="/images/weekend-box.png" 
                  alt="exclusive access"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-12 left-12">
                <p className="font-serif text-white text-4xl italic font-light drop-shadow-sm">open access.</p>
              </div>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -top-12 -right-12 w-40 h-40 opacity-5 pointer-events-none text-brand-primary">
               <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L55.9 33.3L89.4 18.2L66.7 44.1L100 50L66.7 55.9L89.4 81.8L55.9 66.7L50 100L44.1 66.7L10.6 81.8L33.3 55.9L0 50L33.3 44.1L10.6 18.2L44.1 33.3L50 0Z" fill="currentColor" />
               </svg>
            </div>
          </div>

        </div>
      </div>
    </section>


  );
}

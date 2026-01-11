"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export function BrandModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenBrandModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenBrandModal", "true");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 z-100 bg-brand-foreground/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-101 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-brand-background pointer-events-auto rounded-sm w-full max-w-4xl overflow-hidden flex flex-col md:flex-row shadow-3xl relative">
                
                <button 
                  onClick={handleClose}
                  className="absolute top-6 right-6 z-10 p-2 hover:bg-brand-secondary transition-colors rounded-full"
                  aria-label="Close"
                >
                  <X size={20} className="text-brand-foreground" strokeWidth={1} />
                </button>

                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-brand-secondary">
                  <Image 
                    src="/images/placeholder-modal.jpg" 
                    alt="weekend sleepover" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-foreground/5" />
                </div>

                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                  <span className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-brand-primary mb-6">
                    guest list open
                  </span>
                  
                  <h2 className="font-serif text-5xl text-brand-foreground mb-6 leading-none lowercase">
                    the first <br/> <span className="italic font-light">drop.</span>
                  </h2>
                  
                  <p className="font-sans text-brand-foreground/60 mb-10 leading-relaxed text-sm lowercase max-w-xs">
                    our collections are released in small batches. join the list to secure your invite to our upcoming debut drop.
                  </p>

                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
                    <div className="border-b border-brand-foreground/10 pb-2">
                       <input 
                        type="email" 
                        placeholder="email address"
                        className="w-full bg-transparent py-2 placeholder:text-brand-foreground/30 text-brand-foreground focus:outline-none italic font-serif text-xl lowercase"
                        required
                      />
                    </div>
                    
                    <button className="w-full bg-brand-foreground text-brand-background font-sans text-[11px] uppercase tracking-[0.2em] py-5 rounded-full shadow-lg transition-all hover:bg-brand-foreground/90 font-medium">
                      join the guest list
                    </button>
                  </form>

                  <button 
                    onClick={handleClose}
                    className="mt-8 text-[9px] font-bold uppercase tracking-widest text-brand-foreground/30 hover:text-brand-foreground transition-colors text-center"
                  >
                    continue to site
                  </button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
           <motion.button
             onClick={() => setIsOpen(true)}
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-40 group"
             aria-label="Open waitlist"
           >
             <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center pointer-events-none">
                <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
                   <svg viewBox="0 0 100 100" width="100%" height="100%" className="w-full h-full overflow-visible">
                      <defs>
                        <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                      </defs>
                      <text fontSize="10" fontWeight="bold" fill="var(--color-brand-primary)" letterSpacing="2.5">
                        <textPath xlinkHref="#circlePath" startOffset="0%">
                          JOIN THE GUEST LIST • WEEKEND SLEEPOVER •
                        </textPath>
                      </text>
                   </svg>
                </div>
                
                <div className="absolute w-12 h-12 md:w-16 md:h-16 bg-brand-foreground rounded-full flex items-center justify-center shadow-lg text-brand-background border border-brand-background/10 pointer-events-auto group-hover:bg-brand-primary transition-colors">
                   <span className="font-serif italic text-xl md:text-2xl">ws</span>
                </div>
             </div>
           </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

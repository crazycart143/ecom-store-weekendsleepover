"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function BrandModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem("hasSeenBrandModal");
    
    if (!hasSeenModal) {
      // Show modal after 2 seconds on first visit
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white pointer-events-auto rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
                
                {/* Close Button */}
                <button 
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-colors"
                >
                  <X size={20} className="text-brand-cocoa" />
                </button>

                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-brand-light-pink">
                  <img 
                    src="/images/brand-modal-image.webp" 
                    alt="Morning Ritual" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply" />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center text-center">
                  <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-4">
                    WEEKEND SLEEPOVER
                  </span>
                  
                  <h2 className="font-serif text-4xl md:text-5xl text-brand-cocoa mb-6 leading-none">
                    Drop Day <br/> <span className="italic text-brand-dark-pink">Incoming</span>
                  </h2>
                  
                  <p className="font-sans text-brand-cocoa/70 mb-8 leading-relaxed">
                    Join our mailing list to be the first to know. Get exclusive early access & secret offers.
                  </p>

                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full bg-brand-light-pink/30 border border-brand-pink/50 rounded-lg px-4 py-3 placeholder:text-brand-dark-pink/40 text-brand-dark-pink focus:outline-none focus:border-brand-red transition-colors text-center font-medium"
                      required
                    />
                    
                    <button className="w-full bg-brand-dark-pink text-white font-bold uppercase tracking-widest py-4 rounded-full shadow-lg transition-all hover:scale-[1.02]">
                      Sign Me Up!
                    </button>
                  </form>

                  <button 
                    onClick={handleClose}
                    className="mt-6 text-[10px] font-bold uppercase tracking-widest text-brand-cocoa/40 hover:text-brand-cocoa transition-colors"
                  >
                    No, thanks
                  </button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button (Bottom Right) */}
      <AnimatePresence>
        {!isOpen && (
           <motion.button
             onClick={() => setIsOpen(true)}
             initial={{ scale: 0, rotate: 180 }}
             animate={{ scale: 1, rotate: 0 }}
             exit={{ scale: 0, rotate: -180 }}
             whileHover={{ scale: 1.05 }}
             className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 group active:scale-95"
           >
             <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center pointer-events-none">
                {/* Rotating Text Ring */}
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite]">
                   <svg viewBox="0 0 100 100" width="100%" height="100%" className="w-full h-full">
                      <defs>
                        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                      </defs>
                      <text fontSize="12" fontWeight="bold" fill="#c51253" letterSpacing="2">
                        <textPath xlinkHref="#circle" startOffset="50%" textAnchor="middle">
                          JOIN WAITLIST • GET ACCESS •
                        </textPath>
                      </text>
                   </svg>
                </div>
                
                {/* Center Circle */}
                <div className="absolute w-10 h-10 md:w-14 md:h-14 bg-brand-red rounded-full flex items-center justify-center shadow-lg text-white pointer-events-auto">
                   <span className="font-serif italic font-bold text-lg md:text-xl">WS</span>
                </div>
             </div>
           </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

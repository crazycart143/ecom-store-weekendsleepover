"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 });

  useEffect(() => {
    // Show modal after 1.5 seconds if user hasn't seen it before
    const hasSeenModal = localStorage.getItem("hasSeenWelcomeModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenWelcomeModal", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative bg-brand-background rounded-lg shadow-2xl max-w-4xl w-full overflow-hidden border border-[#CE032A]/10">
              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Left Side - Image */}
                <div className="relative h-64 md:h-auto bg-brand-secondary">
                  <Image
                    src="/images/robe14.png"
                    alt="Weekend Sleepover"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Urgency Badge */}
                  <div className="absolute top-6 left-6 bg-[#CE032A] text-white px-4 py-2 rounded-full">
                    <p className="text-[10px] uppercase tracking-widest font-bold">drop 001 • live now</p>
                  </div>

                  <div className="absolute bottom-8 left-8">
                    <img 
                      src="/logo.png" 
                      alt="Weekend Sleepover" 
                      className="h-12 md:h-16 w-auto"
                    />
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="relative p-8 md:p-12 flex flex-col justify-center">
                  {/* Close Button */}
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-brand-foreground/5 hover:bg-brand-foreground/10 transition-colors"
                  >
                    <X size={20} className="text-brand-foreground" />
                  </button>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#CE032A] animate-pulse" />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#CE032A]">limited drop</span>
                      </div>
                      
                      <h2 className="font-serif text-3xl md:text-4xl text-brand-foreground mb-4 leading-tight">
                        the weekend set <br />
                        <span className="italic">drops in:</span>
                      </h2>

                      {/* Countdown Timer */}
                      <div className="flex gap-3 mb-6">
                        <div className="flex-1 bg-brand-secondary/50 rounded-lg p-3 text-center border border-[#CE032A]/10">
                          <div className="text-2xl md:text-3xl font-serif text-[#CE032A] leading-none">
                            {String(timeLeft.hours).padStart(2, '0')}
                          </div>
                          <div className="text-[9px] uppercase tracking-widest text-brand-foreground/40 mt-1">hours</div>
                        </div>
                        <div className="flex-1 bg-brand-secondary/50 rounded-lg p-3 text-center border border-[#CE032A]/10">
                          <div className="text-2xl md:text-3xl font-serif text-[#CE032A] leading-none">
                            {String(timeLeft.minutes).padStart(2, '0')}
                          </div>
                          <div className="text-[9px] uppercase tracking-widest text-brand-foreground/40 mt-1">mins</div>
                        </div>
                        <div className="flex-1 bg-brand-secondary/50 rounded-lg p-3 text-center border border-[#CE032A]/10">
                          <div className="text-2xl md:text-3xl font-serif text-[#CE032A] leading-none">
                            {String(timeLeft.seconds).padStart(2, '0')}
                          </div>
                          <div className="text-[9px] uppercase tracking-widest text-brand-foreground/40 mt-1">secs</div>
                        </div>
                      </div>

                      <p className="text-brand-foreground/70 text-sm leading-relaxed mb-4">
                        Only <span className="font-bold text-[#CE032A]">50 units</span> available. Once they're gone, the next drop won't be for weeks.
                      </p>
                    </div>

                    <div className="border-t border-brand-foreground/10 pt-4">
                      <p className="text-brand-foreground/60 text-xs leading-relaxed mb-4">
                        Get notified the moment the drop goes live + exclusive early access for future releases.
                      </p>

                      {/* Email Form */}
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="relative">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-3 border border-brand-foreground/20 rounded-lg focus:outline-none focus:border-[#CE032A] transition-colors bg-white text-brand-foreground placeholder:text-brand-foreground/40 text-sm"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-[#CE032A] text-white py-3.5 rounded-lg font-serif text-sm uppercase tracking-[0.2em] hover:bg-[#B00220] transition-colors shadow-lg"
                        >
                          notify me
                        </button>
                      </form>

                      <p className="text-[9px] text-brand-foreground/40 uppercase tracking-widest text-center mt-3">
                        join 2,847 others on the waitlist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


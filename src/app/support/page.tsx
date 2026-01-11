"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Plus, Minus, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "how long does shipping take?",
    a: "we ship all orders within 24 hours. domestic shipping typically takes 2-4 business days."
  },
  {
    q: "what is the return policy?",
    a: "we have a 30-day glow guarantee. if you don't love it, return it for a full refund. no hard feelings."
  },
  {
    q: "does the headband fit all sizes?",
    a: "yes! our headbands are made with super-stretchy cloud elastic designed to fit everyone."
  },
  {
    q: "do you ship internationally?",
    a: "we currently ship to the us, canada, uk, and australia. more locations coming soon!"
  }
];

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-brand-background selection:bg-brand-primary selection:text-brand-background">
      <Navbar />
      
      <div className="pt-32 pb-20 editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* FAQ Section */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl text-brand-foreground mb-12 lowercase">faq</h1>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className={`border-b border-brand-foreground/5 transition-all duration-300 ${openFaq === i ? "pb-6" : ""}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className="font-serif text-xl text-brand-foreground group-hover:italic transition-all lowercase">{faq.q}</span>
                    <span className="text-brand-primary">
                      {openFaq === i ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-brand-foreground/60 leading-relaxed font-sans text-sm lowercase">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl text-brand-foreground mb-12 lowercase">contact us</h1>
            <form className="space-y-8">
               <div className="space-y-2">
                 <label className="block text-brand-foreground font-bold text-[10px] uppercase tracking-widest">name</label>
                 <input type="text" className="w-full bg-transparent border-b border-brand-foreground/20 py-3 focus:outline-none focus:border-brand-primary transition-colors font-serif italic text-xl placeholder:text-brand-foreground/20 text-brand-foreground" placeholder="your name" />
               </div>
               <div className="space-y-2">
                 <label className="block text-brand-foreground font-bold text-[10px] uppercase tracking-widest">email</label>
                 <input type="email" className="w-full bg-transparent border-b border-brand-foreground/20 py-3 focus:outline-none focus:border-brand-primary transition-colors font-serif italic text-xl placeholder:text-brand-foreground/20 text-brand-foreground" placeholder="your email" />
               </div>
               <div className="space-y-2">
                 <label className="block text-brand-foreground font-bold text-[10px] uppercase tracking-widest">message</label>
                 <textarea rows={4} className="w-full bg-transparent border-b border-brand-foreground/20 py-3 focus:outline-none focus:border-brand-primary transition-colors font-serif italic text-xl placeholder:text-brand-foreground/20 text-brand-foreground resize-none" placeholder="how can we help?" />
               </div>
               <button className="w-full bg-brand-foreground text-brand-background py-6 rounded-full font-sans text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-brand-foreground/90 transition-all flex items-center justify-center gap-3">
                 send message <ArrowRight size={14} />
               </button>
            </form>
          </motion.div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}

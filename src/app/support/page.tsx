"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Plus, Minus, Send } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How long does shipping take?",
    a: "We ship all orders within 24 hours. Domestic shipping typically takes 2-4 business days."
  },
  {
    q: "What is the return policy?",
    a: "We have a 30-day glow guarantee. If you don't love it, return it for a full refund. No hard feelings."
  },
  {
    q: "Does the headband fit all sizes?",
    a: "Yes! Our headbands are made with super-stretchy cloud elastic designed to fit everyone."
  },
  {
    q: "Do you ship internationally?",
    a: "We currently ship to the US, Canada, UK, and Australia. More locations coming soon!"
  }
];

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-brand-light-pink selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* FAQ Section */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl text-brand-red mb-8">FAQ</h1>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className={`bg-white/40 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 ${openFaq === i ? "bg-white/60 shadow-lg" : "hover:bg-white/50"}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-serif text-xl text-brand-dark-pink">{faq.q}</span>
                    <span className="text-brand-red">
                      {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === i ? "pb-6 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-brand-cocoa leading-relaxed">{faq.a}</p>
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
            <h1 className="font-serif text-5xl text-brand-red mb-8">Contact Us</h1>
            <form className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl space-y-6 border border-white">
               <div>
                 <label className="block text-brand-dark-pink font-bold text-xs uppercase tracking-widest mb-2">Name</label>
                 <input type="text" className="w-full bg-brand-light-pink/50 border border-brand-pink rounded-lg p-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="Your name" />
               </div>
               <div>
                 <label className="block text-brand-dark-pink font-bold text-xs uppercase tracking-widest mb-2">Email</label>
                 <input type="email" className="w-full bg-brand-light-pink/50 border border-brand-pink rounded-lg p-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="your@email.com" />
               </div>
               <div>
                 <label className="block text-brand-dark-pink font-bold text-xs uppercase tracking-widest mb-2">Message</label>
                 <textarea rows={4} className="w-full bg-brand-light-pink/50 border border-brand-pink rounded-lg p-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="How can we help?" />
               </div>
               <button className="w-full bg-brand-red text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-brand-dark-pink transition-all flex items-center justify-center gap-2">
                 Send Message <Send size={16} />
               </button>
            </form>
          </motion.div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}

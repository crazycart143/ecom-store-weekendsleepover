"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const faqCategories = [
  {
    title: "shipping & orders",
    items: [
      {
        q: "how long does shipping take?",
        a: "we ship all orders within 24 hours. domestic shipping typically takes 2-4 business days. international shipping varies by location but usually takes 7-14 business days."
      },
      {
        q: "how can i track my ritual?",
        a: "once your package is on its way, we'll email you a tracking link. you can also track it through our website using your order number and email."
      },
      {
        q: "do you ship internationally?",
        a: "yes, we ship to most countries worldwide. international rates and duties are calculated at checkout so there are no surprises at your door."
      }
    ]
  },
  {
    title: "the products",
    items: [
      {
        q: "what is the weekend set?",
        a: "the weekend set is our signature duo—the cloud terry robe and matching skincare headband. it's designed to be the ultimate uniform for your daily ritual."
      },
      {
        q: "how do i care for my robe?",
        a: "our organic terry becomes softer with every wash. we recommend washing on a gentle cycle with cold water and tumble drying on low. avoid bleach to keep the colors vibrant."
      },
      {
        q: "is the headband one-size-fits-all?",
        a: "yes! our headbands feature a high-stretch cloud elastic that comfortably fits all head sizes without being too tight on your temples."
      }
    ]
  },
  {
    title: "returns & exchanges",
    items: [
      {
        q: "what is your return policy?",
        a: "we have a 30-day glow guarantee. if you aren't completely in love with your set, you can return it within 30 days of delivery for a full refund."
      },
      {
        q: "how do i start a return?",
        a: "simply visit our returns portal, enter your order number, and follow the steps. we'll provide a pre-paid shipping label for domestic returns."
      }
    ]
  }
];

function FAQItem({ q, a, isOpen, toggle }: { q: string, a: string, isOpen: boolean, toggle: () => void }) {
  return (
    <div className="border-b border-brand-foreground/10 last:border-0">
      <button 
        onClick={toggle}
        className="w-full flex items-center justify-between py-8 text-left group"
      >
        <span className={`font-serif text-2xl md:text-3xl transition-all duration-500 lowercase ${isOpen ? "italic text-brand-primary" : "text-brand-foreground group-hover:italic"}`}>
          {q}
        </span>
        <div className={`shrink-0 ml-4 transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0 text-brand-primary"}`}>
          {isOpen ? <Minus size={24} strokeWidth={1} /> : <Plus size={24} strokeWidth={1} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-10 pr-12 text-brand-foreground/60 font-sans leading-relaxed text-base md:text-lg lowercase max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-brand-background selection:bg-brand-primary selection:text-brand-background">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-40 md:pt-56 pb-20 border-b border-brand-foreground/5">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans text-[11px] tracking-[0.4em] text-brand-primary uppercase mb-8 block font-bold"
            >
              support center
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-6xl md:text-8xl text-brand-foreground leading-none mb-12 lowercase"
            >
              your questions, <br/>
              <span className="italic font-light">answered.</span>
            </motion.h1>
            
            {/* Search Bar - Aesthetic Focus */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="relative max-w-md group"
            >
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-primary group-focus-within:text-brand-foreground transition-colors" size={20} strokeWidth={1.5} />
              <input 
                type="text" 
                placeholder="search our help library..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-brand-foreground/20 py-4 pl-10 focus:outline-none focus:border-brand-primary transition-all font-sans text-sm placeholder:italic placeholder:text-brand-foreground/30 text-brand-foreground"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-32">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left Column: Categories Navigation (Desktop) */}
            <div className="hidden lg:block lg:col-span-3 h-fit sticky top-40">
              <h3 className="font-sans text-[10px] uppercase tracking-widest font-bold text-brand-foreground/40 mb-10">categories</h3>
              <div className="space-y-6">
                {faqCategories.map((cat, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                      const element = document.getElementById(cat.title.replace(/\s+/g, '-'));
                      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className="block font-serif text-2xl text-brand-foreground/60 hover:text-brand-primary hover:italic transition-all lowercase"
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
              
              <div className="mt-20 p-8 bg-brand-secondary/30 rounded-2xl border border-brand-primary/10">
                <p className="font-serif text-xl mb-6 italic leading-snug lowercase">couldn't find it?</p>
                <a href="mailto:hello@weekendsleepover.com" className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest text-brand-primary group">
                  contact our team <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Collapsible Items */}
            <div className="lg:col-span-9 space-y-20">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex} id={category.title.replace(/\s+/g, '-')} className="scroll-mt-40">
                  <h2 className="font-sans text-[11px] uppercase tracking-[0.3em] font-bold text-brand-primary mb-10 border-b border-brand-primary/10 pb-4">
                    {category.title}
                  </h2>
                  <div className="flex flex-col">
                    {category.items.map((item, itemIndex) => (
                      <FAQItem 
                        key={itemIndex}
                        q={item.q}
                        a={item.a}
                        isOpen={openIndex === `${catIndex}-${itemIndex}`}
                        toggle={() => setOpenIndex(openIndex === `${catIndex}-${itemIndex}` ? null : `${catIndex}-${itemIndex}`)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="relative py-24 md:py-48 mt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/filler13.png" 
            alt="Atmosphere" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="editorial-container text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            
            <h2 className="font-serif text-4xl md:text-7xl mb-8 lowercase text-white">
              don't be a <span className="italic">stranger.</span>
            </h2>
            
            <p className="font-sans text-white mb-12 text-lg md:text-xl lowercase leading-relaxed max-w-2xl mx-auto">
              our ritual is better together. if you have questions about orders, sizing, or just want to tell us about your slow sunday—our team is waiting for you.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <motion.a 
                href="/contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-12 py-6 bg-brand-primary text-white rounded-full font-sans text-[11px] font-bold uppercase tracking-widest transition-all shadow-xl shadow-brand-primary/30"
              >
                message us
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-12 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                live chat
              </motion.a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

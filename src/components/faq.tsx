"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  const id = question.toLowerCase().replace(/\s+/g, "-");
  
  return (
    <div className="border-b border-brand-foreground/5 last:border-0">
      <button 
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${id}`}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`font-serif text-xl md:text-3xl transition-all duration-500 lowercase ${isOpen ? "italic text-brand-primary" : "text-brand-foreground group-hover:italic"}`}>
          {question}
        </span>
        <span className={`ml-4 shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180 text-brand-primary" : "rotate-0 text-brand-primary/50"}`}>
          {isOpen ? <Minus size={22} strokeWidth={1} /> : <Plus size={22} strokeWidth={1} />}
        </span>
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            id={`faq-content-${id}`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 pr-12 text-brand-foreground/60 font-sans leading-relaxed text-sm md:text-lg lowercase max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "when is the next drop?",
      answer: "we operate on a limited-drop schedule to ensure the highest quality and exclusivity. sign up for our waitlist to be notified of the exact launch time—members get 24-hour early access."
    },
    {
      question: "what is included in the weekend set?",
      answer: "the set includes our signature organic terry robe and a matching ultra-soft skincare headband. occassionally, special drops include limited edition accessories like travel bags or candles."
    },
    {
      question: "do you offer group orders for brides?",
      answer: "yes! we love being part of your big day. please visit our bachelorette & bride page for group gifting and bulk order inquiries."
    },
    {
      question: "do you ship internationally?",
      answer: "yes, we ship to most countries worldwide. international rates and duties are calculated at checkout so there are no surprises at your door."
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-brand-background overflow-hidden">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32">
          
          <div className="lg:col-span-4">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="sticky top-32"
             >
               <span className="font-sans text-[11px] tracking-[0.3em] text-brand-primary uppercase mb-6 block font-bold">
                 assistance
               </span>
               <h2 className="font-serif text-5xl md:text-7xl text-brand-foreground leading-none mb-10 lowercase">
                 the <span className="italic font-light">questions.</span>
               </h2>
               <p className="font-sans text-sm md:text-base text-brand-foreground/60 leading-relaxed italic lowercase mb-12">
                 "our goal is to make your ritual seamless. if you can't find what you're looking for, our full library is just a click away."
               </p>
               
               <Link 
                 href="/faq" 
                 className="inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary group border-b border-brand-primary/20 pb-2 hover:border-brand-primary transition-all"
               >
                 view all faq <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </Link>
             </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="border-t border-brand-foreground/10"
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

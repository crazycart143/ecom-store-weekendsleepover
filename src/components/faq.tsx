"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  const id = question.toLowerCase().replace(/\s+/g, "-");
  
  return (
    <div className="border-b border-brand-pink/30 last:border-0">
      <button 
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${id}`}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-serif text-xl md:text-2xl text-brand-cocoa group-hover:text-brand-dark-pink transition-colors">
          {question}
        </span>
        <span className="ml-4 flex-shrink-0 text-brand-red">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-content-${id}`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-8 text-brand-cocoa/70 font-sans leading-relaxed text-base md:text-lg">
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
      question: "When is the official drop day?",
      answer: "The waitlist gets access 24 hours before the public. Sign up now to secure your spot—our limited quantity drops usually sell out within minutes."
    },
    {
      question: "What's included in the Weekend Set?",
      answer: "Each set comes with our signature cloud-fleece robe, matching skincare headband, and a satin travel pouch, all packaged in a magnetic keepsake box."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship worldwide. Shipping is free for all waitlist members on launch day."
    },
    {
      question: "What is the return policy?",
      answer: "We offer a 30-day happiness guarantee. If you don't feel like the main character in your robe, sends it back for a full refund, no questions asked."
    }
  ];

  return (
    <section className="py-24 bg-brand-cream/50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-3 block">
            The Details
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-cocoa">
            Frequently Asked <span className="italic text-brand-dark-pink">Questions</span>
          </h2>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 backdrop-blur-sm"
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
    </section>
  );
}

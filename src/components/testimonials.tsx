"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const comments = [
  {
    user: "lily.rituals",
    text: "Literal uniform since it arrived. So soft I actually can't.",
    likes: "2.4k"
  },
  {
    user: "sophie.lifestyle",
    text: "The way I’ve been waiting for this drop... limited supply is so stressful lol but so worth it.",
    likes: "1.2k"
  },
  {
    user: "claire.mornings",
    text: "Actually felt put together for my morning coffee for once 🙏",
    likes: "850"
  },
  {
    user: "emma_wells",
    text: "Need the headband in every color please!!",
    likes: "3.1k"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-brand-background overflow-hidden">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl md:text-6xl text-brand-foreground leading-tight">
              from the <span className="italic font-light">community.</span>
            </h2>
          </motion.div>
          <div className="flex items-center gap-3 opacity-20">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold">club notes</span>
            <div className="w-16 h-px bg-brand-foreground" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {comments.map((comment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1.2 }}
              className="flex flex-col space-y-6"
            >
              <div className="space-y-4">
                <p className="font-serif text-xl italic leading-relaxed text-brand-foreground/80 lowercase">
                  "{comment.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-secondary border border-brand-border/30" />
                  <span className="font-sans text-[11px] font-bold text-brand-foreground/40 tracking-wider">@{comment.user}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

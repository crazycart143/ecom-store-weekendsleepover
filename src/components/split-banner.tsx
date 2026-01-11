"use client";

import { motion } from "framer-motion";

export function SplitBanner() {
  return (
    <section 
      className="w-full py-24 flex items-center justify-center overflow-hidden border-y border-brand-primary/10 relative"
      style={{
        backgroundImage: "repeating-linear-gradient(90deg, #CE032A, #CE032A 40px, #ffffff 40px, #ffffff 80px)"
      }}
    >
      {/* Center Label */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-brand-background px-10 py-6 md:px-16 md:py-8 shadow-2xl border border-brand-primary/10 rotate-[-2deg]"
      >
        <span className="font-serif italic text-3xl md:text-5xl text-brand-primary lowercase text-nowrap">
          offline on purpose.
        </span>
      </motion.div>
    </section>
  );
}

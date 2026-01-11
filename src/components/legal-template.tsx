"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

interface LegalTemplateProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalTemplate({ title, lastUpdated, children }: LegalTemplateProps) {
  return (
    <main className="min-h-screen bg-brand-background selection:bg-brand-primary selection:text-brand-background">
      <Navbar />
      
      <div className="pt-40 md:pt-56 pb-32">
        <div className="editorial-container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-primary font-black mb-8">
                official documentation
              </p>
              <h1 className="font-serif text-5xl md:text-8xl text-brand-foreground leading-none mb-4 lowercase">
                {title}
              </h1>
              <p className="font-sans text-[10px] uppercase tracking-widest text-brand-foreground/30 mb-20 italic">
                last updated — {lastUpdated}
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3, duration: 1 }}
               className="prose prose-sm md:prose-base prose-headings:font-serif prose-headings:lowercase prose-headings:italic prose-headings:font-normal prose-headings:text-brand-foreground prose-p:text-brand-foreground/70 prose-p:font-sans prose-p:leading-relaxed prose-strong:text-brand-primary prose-li:text-brand-foreground/70"
            >
              <div className="space-y-16">
                {children}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

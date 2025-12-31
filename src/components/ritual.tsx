"use client";

import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Cancel Plans",
        desc: "The hardest part is saying no. The easy part is putting on the Weekend Set.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop"
    },
    {
        num: "02",
        title: "Apply Skincare",
        desc: "Pull your hair back with the cloud-soft headband. No drip, no mess, just glow.",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2525&auto=format&fit=crop"
    },
    {
        num: "03",
        title: "Do Nothing",
        desc: "This is the most important step. Sit back, relax, and let the week melt away.",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af93?q=80&w=2670&auto=format&fit=crop"
    }
];

export function Ritual() {
  return (
    <section className="py-24 bg-brand-light-pink text-brand-dark-pink">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-4 block">The Ritual</span>
            <h2 className="font-serif text-4xl md:text-6xl text-brand-red">Your Friday Night Protocol</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex flex-col"
                >
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-8 relative group">
                        <img 
                            src={step.image} 
                            alt={step.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                         <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center font-serif italic text-brand-red font-bold text-xl shadow-lg">
                            {step.num}
                        </div>
                    </div>
                    <h3 className="font-serif text-3xl mb-4 text-brand-red">{step.title}</h3>
                    <p className="font-sans text-brand-cocoa leading-relaxed opacity-80">{step.desc}</p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}

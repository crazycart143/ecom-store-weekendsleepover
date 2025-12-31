"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-brand-light-pink selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-8">
        <motion.div 
           className="max-w-4xl mx-auto text-center"
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
           <h1 className="font-serif text-6xl md:text-8xl text-brand-red mb-12">The Manifesto</h1>
           
           <div className="space-y-12 font-serif text-2xl md:text-4xl text-brand-dark-pink leading-normal">
              <p>
                We believe that <span className="text-brand-red italic underline decoration-wavy decoration-2">doing nothing</span> is an art form.
              </p>
              <p>
                Weekend Sleepover isn't just a brand; it's a permission slip. A permission slip to cancel plans, stay in, and apply that third face mask.
              </p>
              <p>
                We make essentials for the professional lounger. For the girls who know that the best party is the one happening in your bathroom at 9 PM on a Friday.
              </p>
           </div>
           
           <div className="mt-20 relative">
               <div className="absolute inset-0 bg-brand-red blur-[100px] opacity-20 rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?q=80&w=2670&auto=format&fit=crop" 
                alt="Friends laughing"
                className="relative z-10 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700"
              />
           </div>
        </motion.div>
      </div>
      
      <Footer />
    </main>
  );
}

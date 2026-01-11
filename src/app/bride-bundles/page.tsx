"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, Heart, Star, Sparkles } from "lucide-react";

export default function BrideBundles() {
  return (
    <main className="min-h-screen bg-brand-background selection:bg-brand-primary selection:text-brand-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 md:pt-56 pb-20 overflow-hidden">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans text-[11px] tracking-[0.4em] text-brand-primary uppercase mb-8 block font-black">the bridal collection</span>
              <h1 className="font-serif text-6xl md:text-9xl text-brand-foreground leading-[0.8] lowercase mb-12">
                the morning of <br /> <span className="italic font-light">your dreams.</span>
              </h1>
              <p className="font-sans text-lg text-brand-foreground/60 leading-relaxed max-w-md lowercase italic mb-12">
                "curated bundles for the bride and her inner circle. elevate your getting-ready ritual with our signature cloud terry sets."
              </p>
              
              <div className="flex flex-wrap gap-8 mb-12">
                 {[
                   { icon: Heart, text: "Group Pricing" },
                   { icon: Sparkles, text: "Bride Styling" },
                   { icon: Star, text: "Early Access" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-brand-foreground/40 font-sans text-[10px] uppercase tracking-widest font-bold">
                     <item.icon size={14} className="text-brand-primary" />
                     {item.text}
                   </div>
                 ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative aspect-4/5 rounded-[60px] overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/filler17.png" 
                alt="Bridal Ritual" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-brand-secondary/20">
        <div className="editorial-container text-center">
           <div className="max-w-3xl mx-auto space-y-12">
              <h2 className="font-serif text-4xl md:text-7xl leading-tight lowercase text-brand-foreground">
                it's more than <span className="italic">just a robe.</span>
              </h2>
              <p className="font-sans text-xl text-brand-foreground/60 italic lowercase leading-relaxed">
                "from the first sip of matcha to the final zip of the dress, we believe your wedding morning should feel as soft and intentional as the rest of your life. our bundles are designed to create a cohesive, editorial look for your photos and a lasting memory for your bridesmaids."
              </p>
           </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 md:py-48">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-20 rounded-[80px] shadow-2xl shadow-brand-foreground/5 border border-brand-foreground/5">
               <div className="text-center mb-16">
                  <h3 className="font-serif text-4xl md:text-6xl lowercase mb-4 italic">request a bride bundle.</h3>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-brand-foreground/40 font-bold">typically responded to within 12 hours.</p>
               </div>

               <form className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="font-sans text-[10px] uppercase tracking-widest font-black opacity-30">Your Name</label>
                      <input type="text" className="w-full bg-transparent border-b border-brand-foreground/10 py-4 focus:outline-none focus:border-brand-primary transition-all font-serif italic text-2xl" placeholder="full name" />
                    </div>
                    <div className="space-y-4">
                      <label className="font-sans text-[10px] uppercase tracking-widest font-black opacity-30">Wedding Date</label>
                      <input type="text" className="w-full bg-transparent border-b border-brand-foreground/10 py-4 focus:outline-none focus:border-brand-primary transition-all font-serif italic text-2xl" placeholder="mm/dd/yyyy" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="font-sans text-[10px] uppercase tracking-widest font-black opacity-30">Number of Robes</label>
                      <input type="number" className="w-full bg-transparent border-b border-brand-foreground/10 py-4 focus:outline-none focus:border-brand-primary transition-all font-serif italic text-2xl" placeholder="qty" />
                    </div>
                    <div className="space-y-4">
                      <label className="font-sans text-[10px] uppercase tracking-widest font-black opacity-30">Instagram Handle</label>
                      <input type="text" className="w-full bg-transparent border-b border-brand-foreground/10 py-4 focus:outline-none focus:border-brand-primary transition-all font-serif italic text-2xl" placeholder="@yourhandle" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="font-sans text-[10px] uppercase tracking-widest font-black opacity-30">Your Vision</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-brand-foreground/10 py-4 focus:outline-none focus:border-brand-primary transition-all font-serif italic text-2xl resize-none" placeholder="tell us about your colors and bridal party ritual..." />
                  </div>

                  <button className="w-full bg-brand-primary text-white py-8 rounded-full font-sans text-xs uppercase tracking-[0.3em] font-black hover:brightness-110 transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-4 group">
                    <span>Send Inquiry</span>
                    <Send size={16} />
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Send, Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-brand-background selection:bg-brand-primary selection:text-brand-background">
      <Navbar />
      
      <div className="pt-40 md:pt-56 pb-32">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            
            {/* Left Column: Heading & Info */}
            <div className="lg:col-span-5 space-y-12">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
               >
                  <span className="font-sans text-[11px] tracking-[0.4em] text-brand-primary uppercase mb-8 block font-black">Get in touch</span>
                  <h1 className="font-serif text-6xl md:text-8xl text-brand-foreground leading-[0.85] lowercase mb-12">
                    don't be a <br /> <span className="italic font-light">stranger.</span>
                  </h1>
                  <p className="font-sans text-lg text-brand-foreground/60 leading-relaxed max-w-md lowercase italic">
                    "our ritual is better together. whether you have questions about your order or just want to tell us about your slow morning—we're here."
                  </p>
               </motion.div>

               <div className="space-y-8 pt-8">
                  {[
                    { icon: Mail, label: "email", val: "hello@weekendsleepover.com" },
                    { icon: Instagram, label: "instagram", val: "@weekendsleepover" },
                    { icon: MessageCircle, label: "press", val: "press@weekendsleepover.com" },
                    { icon: MapPin, label: "hq", val: "los angeles, ca" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="flex items-center gap-6 group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-full border border-brand-foreground/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500">
                        <item.icon size={18} strokeWidth={1} className="text-brand-foreground/40 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-sans text-[9px] uppercase tracking-widest text-brand-foreground/30 font-bold mb-1">{item.label}</p>
                        <p className="font-serif text-xl text-brand-foreground transition-all group-hover:italic group-hover:text-brand-primary">{item.val}</p>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                 className="bg-white p-8 md:p-16 rounded-[40px] shadow-2xl shadow-brand-foreground/5 border border-brand-foreground/5 relative overflow-hidden"
               >
                 <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                 
                 <form className="space-y-12 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="font-sans text-[10px] uppercase tracking-widest font-black opacity-30">Your Name</label>
                        <input type="text" className="w-full bg-transparent border-b border-brand-foreground/10 py-4 focus:outline-none focus:border-brand-primary transition-all font-serif italic text-2xl text-brand-foreground placeholder:text-brand-foreground/5" placeholder="full name" />
                      </div>
                      <div className="space-y-4">
                        <label className="font-sans text-[10px] uppercase tracking-widest font-black opacity-30">Your Email</label>
                        <input type="email" className="w-full bg-transparent border-b border-brand-foreground/10 py-4 focus:outline-none focus:border-brand-primary transition-all font-serif italic text-2xl text-brand-foreground placeholder:text-brand-foreground/5" placeholder="email@address.com" />
                      </div>
                    </div>

                    <div className="space-y-4">
                       <label className="font-sans text-[10px] uppercase tracking-widest font-black opacity-30">Reason for ritual</label>
                       <select className="w-full bg-transparent border-b border-brand-foreground/10 py-4 focus:outline-none focus:border-brand-primary transition-all font-serif italic text-2xl text-brand-foreground cursor-pointer appearance-none">
                          <option>general inquiry</option>
                          <option>order support</option>
                          <option>press & collaborations</option>
                          <option>sustainability questions</option>
                       </select>
                    </div>

                    <div className="space-y-4">
                      <label className="font-sans text-[10px] uppercase tracking-widest font-black opacity-30">The details</label>
                      <textarea rows={4} className="w-full bg-transparent border-b border-brand-foreground/10 py-4 focus:outline-none focus:border-brand-primary transition-all font-serif italic text-2xl text-brand-foreground placeholder:text-brand-foreground/5 resize-none" placeholder="tell us about it..." />
                    </div>

                    <button className="w-full bg-brand-foreground text-brand-background py-8 rounded-full font-sans text-xs uppercase tracking-[0.3em] font-black hover:bg-brand-primary hover:text-white transition-all duration-500 shadow-xl shadow-brand-foreground/10 flex items-center justify-center gap-4 group active:scale-95">
                      <span>Send Ritual Message</span>
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    
                    <p className="text-center font-sans text-[10px] text-brand-foreground/30 uppercase tracking-widest">
                      typically responded to within 12 hours.
                    </p>
                 </form>
               </motion.div>
            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

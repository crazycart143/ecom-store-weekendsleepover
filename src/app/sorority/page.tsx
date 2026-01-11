"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, Users, Zap, Coffee } from "lucide-react";

export default function SororityCollabs() {
  return (
    <main className="min-h-screen bg-brand-background selection:bg-brand-primary selection:text-brand-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 md:pt-56 pb-20">
        <div className="editorial-container">
           <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1 space-y-8"
              >
                 <span className="font-sans text-[11px] tracking-[0.4em] text-brand-primary uppercase font-black block">chapter collaborations</span>
                 <h1 className="font-serif text-6xl md:text-9xl text-brand-foreground leading-[0.8] lowercase">
                   at your <br /> <span className="italic font-light">house.</span>
                 </h1>
                 <p className="font-sans text-xl text-brand-foreground/60 leading-relaxed italic lowercase max-w-lg">
                   "bring the weekend sleepover ritual to your sorority chapter. exclusive colorways, pop-up events, and chapter-wide collaborations designed for the modern sisterhood."
                 </p>
                 <div className="flex gap-12 pt-8">
                    <div className="text-center">
                       <p className="font-serif text-3xl text-brand-primary mb-1 italic">pop-ups</p>
                       <p className="font-sans text-[9px] uppercase tracking-widest text-brand-foreground/40 font-bold">on-campus events</p>
                    </div>
                    <div className="text-center">
                       <p className="font-serif text-3xl text-brand-primary mb-1 italic">custom</p>
                       <p className="font-sans text-[9px] uppercase tracking-widest text-brand-foreground/40 font-bold">exclusive colors</p>
                    </div>
                    <div className="text-center">
                       <p className="font-serif text-3xl text-brand-primary mb-1 italic">VIP</p>
                       <p className="font-sans text-[9px] uppercase tracking-widest text-brand-foreground/40 font-bold">sisterhood pricing</p>
                    </div>
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 relative aspect-square w-full md:w-auto"
              >
                  <div className="relative h-full w-full rounded-[60px] overflow-hidden rotate-3 shadow-2xl">
                     <Image 
                       src="/images/filler13.png" 
                       alt="Sorority Ritual" 
                       fill 
                       className="object-cover"
                     />
                  </div>
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-[40px] overflow-hidden -rotate-6 shadow-2xl border-4 border-white">
                     <Image 
                       src="/images/filler10.png" 
                       alt="Sisters" 
                       fill 
                       className="object-cover"
                     />
                  </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Narrative Split */}
      <section className="py-24 md:py-48 bg-brand-background text-brand-foreground border-t border-brand-primary/5">
         <div className="editorial-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
               <div className="order-2 md:order-1 relative aspect-4/5 rounded-[40px] overflow-hidden shadow-2xl">
                  <Image src="/images/filler23.png" alt="Pop up event" fill className="object-cover" />
                  <div className="absolute inset-0 bg-brand-primary/10" />
               </div>
               <div className="order-1 md:order-2 space-y-12">
                  <h2 className="font-serif text-4xl md:text-8xl leading-none lowercase">beyond the <br /><span className="italic">letters.</span></h2>
                  <p className="font-sans text-xl text-brand-foreground/60 lowercase leading-relaxed italic">
                    "we're reimagining sisterhood rituals. from bid day bundles to chapter wellness retreats, we provide the uniform for those slow, meaningful moments between classes and events."
                  </p>
                  <ul className="space-y-6">
                     {[
                       { icon: Coffee, title: "Wellness Popups", desc: "Digital detox & ritual mornings at your house." },
                       { icon: Users, title: "Pledge Class Bundles", desc: "Curated sets for your new members." },
                       { icon: Zap, title: "Chapter Exclusives", desc: "Collaborations in your official colors." }
                     ].map((item, i) => (
                       <li key={i} className="flex gap-6 group">
                          <div className="w-10 h-10 rounded-xl bg-brand-foreground/5 border border-brand-foreground/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500">
                             <item.icon size={18} strokeWidth={1} className="text-brand-foreground/40 group-hover:text-white transition-colors" />
                          </div>
                          <div>
                             <h4 className="font-serif text-2xl lowercase italic">{item.title}</h4>
                             <p className="font-sans text-sm text-brand-foreground/30 lowercase">{item.desc}</p>
                          </div>
                       </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 md:py-48">
         <div className="editorial-container">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-24 rounded-[80px] border border-brand-foreground/5 shadow-2xl shadow-brand-foreground/5">
                <div className="text-center mb-20">
                   <span className="font-sans text-[10px] uppercase tracking-widest text-brand-primary font-black mb-4 block">bring us to campus</span>
                   <h3 className="font-serif text-5xl md:text-7xl lowercase italic">start the ritual.</h3>
                </div>

                <form className="space-y-12">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="font-sans text-[10px] uppercase tracking-widest font-black opacity-30">Your Role</label>
                        <select className="w-full bg-transparent border-b border-brand-foreground/10 py-4 focus:outline-none focus:border-brand-primary font-serif italic text-2xl appearance-none cursor-pointer">
                           <option>Social Chair</option>
                           <option>President</option>
                           <option>Philanthropy</option>
                           <option>Marketing / PR</option>
                           <option>Other</option>
                        </select>
                      </div>
                      <div className="space-y-4">
                        <label className="font-sans text-[10px] uppercase tracking-widest font-black opacity-30">Sorority & University</label>
                        <input type="text" className="w-full bg-transparent border-b border-brand-foreground/10 py-4 focus:outline-none focus:border-brand-primary font-serif italic text-2xl" placeholder="ABC University" />
                      </div>
                   </div>

                   <div className="space-y-4">
                     <label className="font-sans text-[10px] uppercase tracking-widest font-black opacity-30">Inquiry Type</label>
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {["Pop-up Event", "Custom Colorway", "Chapter Bundle", "Philanthropy Collab", "Press Inquiry"].map((type) => (
                          <button key={type} type="button" className="px-6 py-4 rounded-2xl border border-brand-foreground/10 font-sans text-[9px] uppercase tracking-widest font-bold hover:border-brand-primary hover:text-brand-primary transition-all">
                            {type}
                          </button>
                        ))}
                     </div>
                   </div>

                   <div className="space-y-4">
                     <label className="font-sans text-[10px] uppercase tracking-widest font-black opacity-30">Tell us about your chapter</label>
                     <textarea rows={4} className="w-full bg-transparent border-b border-brand-foreground/10 py-4 focus:outline-none focus:border-brand-primary font-serif italic text-2xl resize-none" placeholder="number of members, your vision, timeline..." />
                   </div>

                   <button className="w-full bg-brand-primary text-white py-8 rounded-full font-sans text-xs uppercase tracking-[0.3em] font-black hover:brightness-110 shadow-xl shadow-brand-primary/20 transition-all flex items-center justify-center gap-4 active:scale-95 group">
                      <span>Send Sorority Inquiry</span>
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </form>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

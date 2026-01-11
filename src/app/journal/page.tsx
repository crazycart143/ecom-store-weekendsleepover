"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const journalEntries = [
  {
    category: "ritual",
    title: "the anatomy of a slow sunday morning.",
    date: "jan 05, 2026",
    excerpt: "why doing less is actually the ultimate form of self-care. a guide to reclaiming your time.",
    image: "/images/filler1.png",
    id: "slow-sunday"
  },
  {
    category: "travel",
    title: "packing the set: a getaway guide.",
    date: "dec 28, 2025",
    excerpt: "from hotel rooms to beach houses, how to take the weekend sleepover vibe with you.",
    image: "/images/filler2.png",
    id: "getaway-guide"
  },
  {
    category: "behind the brand",
    title: "our cotton: from field to ritual.",
    date: "dec 15, 2025",
    excerpt: "an inside look at our sustainable organic turkish cotton and the hands that weave it.",
    image: "/images/filler15.png",
    id: "our-cotton"
  },
  {
    category: "community",
    title: "morning routines with emma slows.",
    date: "dec 02, 2025",
    excerpt: "we sat down with our favorite ritualist to talk skincare, tea, and early morning intentions.",
    image: "/images/filler13.png",
    id: "emma-slows"
  }
];

export default function Journal() {
  return (
    <main className="min-h-screen bg-brand-background selection:bg-brand-primary selection:text-brand-background">
      <Navbar />
      
      <div className="pt-40 md:pt-56 pb-32">
        <div className="editorial-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-brand-primary font-black mb-8 block">the journal</span>
            <h1 className="font-serif text-6xl md:text-9xl text-brand-foreground leading-[0.8] lowercase">
              stories for <br /> <span className="italic font-light">slow living.</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
             {journalEntries.map((entry, i) => (
               <motion.div
                 key={entry.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 1 }}
                 className="group cursor-pointer"
               >
                 <Link href={`/journal/${entry.id}`}>
                   <div className="relative aspect-16/10 overflow-hidden rounded-[40px] mb-10 shadow-2xl shadow-brand-foreground/5">
                      <Image 
                        src={entry.image} 
                        alt={entry.title} 
                        fill 
                        className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
                      />
                      <div className="absolute top-8 left-8">
                         <span className="bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-brand-primary shadow-lg">
                           {entry.category}
                         </span>
                      </div>
                   </div>
                   
                   <div className="space-y-6 max-w-xl">
                      <p className="font-sans text-[10px] uppercase tracking-widest text-brand-foreground/30 font-bold">{entry.date}</p>
                      <h2 className="font-serif text-3xl md:text-5xl text-brand-foreground leading-tight lowercase group-hover:text-brand-primary transition-colors">
                        {entry.title}
                      </h2>
                      <p className="font-sans text-brand-foreground/60 leading-relaxed lowercase text-lg italic">
                        "{entry.excerpt}"
                      </p>
                      <div className="flex items-center gap-3 text-brand-primary font-sans text-[10px] font-black uppercase tracking-widest pt-4">
                        Read Story <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                      </div>
                   </div>
                 </Link>
               </motion.div>
             ))}
          </div>

          {/* Newsletter / CTA Section */}
          <section className="mt-48 py-32 bg-brand-primary/5 rounded-[60px] border border-brand-primary/10 text-center px-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
               <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
             </div>
             
             <div className="relative z-10 max-w-2xl mx-auto space-y-12">
                <h3 className="font-serif text-4xl md:text-7xl leading-[0.85] lowercase text-brand-foreground">
                  never miss <br /> <span className="italic">a slow moment.</span>
                </h3>
                <p className="font-sans text-brand-foreground/60 leading-relaxed italic lowercase text-lg">
                  join our ritual newsletter for early access to articles, weekend playlists, and drop notifications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="flex-1 bg-white px-8 py-5 rounded-full font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 border border-brand-foreground/5"
                    />
                    <button className="bg-brand-primary text-white px-10 py-5 rounded-full font-sans text-xs uppercase tracking-widest font-black shadow-xl shadow-brand-primary/20 hover:brightness-110 transition-all">
                      Subscribe
                    </button>
                </div>
             </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

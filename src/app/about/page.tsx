"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-brand-background selection:bg-brand-primary selection:text-brand-background">
      <Navbar />
      
      <section className="pt-40 md:pt-56 pb-24 md:pb-40">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Header */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-sans text-[11px] tracking-[0.3em] text-brand-primary uppercase mb-8 block font-bold">
                  the brand story
                </span>
                <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-brand-foreground leading-[0.85] tracking-tight mb-12">
                  essentials for the <br />
                  <span className="italic">professional</span> <br />
                  lounger.
                </h1>
              </motion.div>
            </div>

            {/* Sidebar Manifesto Snippet */}
            <div className="lg:col-span-4 lg:pt-32">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="font-sans text-lg text-brand-foreground/60 leading-relaxed italic border-l border-brand-foreground/10 pl-8 lowercase"
              >
                "we believe that doing nothing is an art form. weekend sleepover is a permission slip to romanticize your own ritual."
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-24 md:py-40 bg-brand-background">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <div className="relative aspect-3/4 bg-brand-secondary rounded-sm overflow-hidden">
               <Image src="/images/placeholder-about-1.jpg" alt="about mood" fill className="object-cover" />
            </div>

            <div className="max-w-xl">
               <h2 className="font-serif text-4xl md:text-5xl text-brand-foreground mb-8 lowercase">born from slow <br /><span className="italic">mornings.</span></h2>
               <div className="space-y-6 font-sans text-lg text-brand-foreground/70 leading-relaxed lowercase">
                  <p>
                    weekend sleepover started with a simple observation: we spend our best moments in our most oversized, scratchy t-shirts. we wanted to create a uniform that reflected the beauty of those quiet, in-between times.
                  </p>
                  <p>
                    our signature weekend set is the result of months of searching for the perfect organic terry—heavy enough to feel substantial, but soft enough to live in until monday.
                  </p>
                  <p className="font-serif italic text-2xl text-brand-foreground pt-4">
                    welcome to the guest list.
                  </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Visual Break */}
      {/* <section className="py-12 bg-brand-foreground text-brand-background overflow-hidden">
         <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2, 3].map((i) => (
              <p key={i} className="font-serif text-[120px] md:text-[200px] leading-none opacity-10 italic pr-24 uppercase">
                life of leisure • weekend sleepover • 
              </p>
            ))}
         </div>
      </section> */}

      <Footer />
    </main>
  );
}

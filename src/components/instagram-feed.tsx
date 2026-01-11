"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram } from "lucide-react";

const igPosts = [
  { src: "/images/filler17.png", type: "portrait" },
  { src: "/images/filler23.png", type: "landscape" },
  { src: "/images/filler26.png", type: "portrait" },
  { src: "/images/filler4.png", type: "portrait" },
  { src: "/images/filler5.png", type: "square" },
  { src: "/images/filler6.png", type: "portrait" },
];

export function InstagramFeed() {
  return (
    <section className="py-24 md:py-48 bg-brand-background overflow-hidden border-t border-brand-primary/5">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Instagram size={16} className="text-brand-primary" />
              <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-brand-primary">Stay Connected</span>
            </div>
            <h2 className="font-serif text-5xl md:text-8xl text-brand-foreground leading-[0.85] lowercase">
              live the <br /> <span className="italic font-light">weekend</span> every day.
            </h2>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-6">
            <p className="font-sans text-sm text-brand-foreground/40 text-left md:text-right italic lowercase leading-relaxed max-w-[280px]">
              "the official signal that you are now unapologetically unavailable."
            </p>
            <a 
              href="https://instagram.com/weekendsleepover" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-4 px-10 rounded-full border border-brand-primary/20 hover:bg-brand-primary hover:text-white transition-all duration-500"
            >
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-black">@weekendsleepover</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex gap-4 md:gap-8 px-4 md:px-12 animate-scroll-horizontal">
        <div className="flex gap-4 md:gap-8 min-w-max">
          {[...igPosts, ...igPosts].map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden rounded-[32px] md:rounded-[60px] cursor-pointer group shadow-2xl shadow-black/5 ${
                post.type === "portrait" ? "w-[260px] md:w-[400px] aspect-4/5" :
                post.type === "landscape" ? "w-[300px] md:w-[500px] aspect-5/4" :
                "w-[260px] md:w-[400px] aspect-square"
              }`}
            >
              <Image 
                src={post.src} 
                alt="Instagram Ritual" 
                fill 
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/40">
                  <Instagram size={24} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-horizontal {
          animation: scroll-horizontal 60s linear infinite;
        }
        .animate-scroll-horizontal:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

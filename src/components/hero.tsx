"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const videos = [
    // "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4"
  ];

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    // Ensure video plays when the source changes
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, [currentVideoIndex]);

  return (
    <section className="relative h-[500px] md:h-[700px] lg:h-screen max-h-[800px] pb-12 lg:pb-8 w-full bg-brand-foreground overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
           initial={{ scale: 1.1 }}
           animate={{ scale: 1 }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="w-full h-full relative"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            poster="/images/filler13.png"
            className="absolute inset-0 w-full h-full object-cover"
            onEnded={handleVideoEnd}
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay Filter */}
          <div className="absolute inset-0 bg-black/35" />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-90" />
        </motion.div>
      </div>

      {/* Editorial Label (Book/Magazine Feel) */}
      <div className="absolute top-24 md:top-40 left-6 md:left-12 z-20">
        <div className="flex items-center gap-4">
          <span className="font-sans text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/80 font-bold border border-white/30 px-2 py-0.5 md:px-3 md:py-1 bg-black/10 backdrop-blur-md">
            Vol. 01
          </span>
          <span className="font-serif italic text-white/90 text-xs md:text-base">
            The Debut
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end pb-12 md:pb-64 editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white leading-[0.85] mb-6 md:mb-8 lowercase tracking-tight">
            life of <br />
            <span className="italic font-light ml-4 md:ml-8">leisure.</span>
          </h1>
          
          <p className="font-sans text-xs md:text-base text-white/90 mb-8 md:mb-10 max-w-sm md:max-w-lg leading-relaxed md:leading-loose lowercase pl-3 border-l-2 border-white/20 ml-1 py-1 pr-4">
            meet the weekend set. a signature robe paired with a matching skincare headband. designed for slow mornings, vanity rituals, and the luxury of unhurried time.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-brand-foreground font-sans text-[9px] md:text-[10px] tracking-[0.25em] uppercase px-8 md:px-10 py-3.5 md:py-4 rounded-sm shadow-xl transition-all hover:bg-brand-secondary font-bold"
            onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
          >
            join first drop
          </motion.button>
        </motion.div>
      </div>

      {/* "Who it's for" - The Muses / Community (Bottom Right) */}
      {/* <div className="absolute bottom-6 right-6 md:bottom-24 md:right-12 z-20">
         <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 1, duration: 1 }}
           className="flex flex-col gap-4 items-end scale-75 md:scale-100 origin-bottom-right"
         >
            <div className="flex gap-4">
               {['/images/robe5.png', '/images/robe12.png', '/images/robe16.png'].map((src, i) => (
                 <div key={i} className="w-36 h-48 bg-white/10 backdrop-blur-md border border-white/20 p-1.5 transform hover:-translate-y-2 transition-transform duration-500 rounded-sm relative group">

                    <div className="w-full h-full relative overflow-hidden bg-brand-secondary/20">
                      <Image 
                        src={src}
                        alt="Guest"
                        fill
                        className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                      />
                    </div>
                 </div>
               ))}
            </div>
         </motion.div>
      </div> */}
      
      {/* Scroll indicator - Optional, can keep or remove. Removing for cleaner look matching Rhode */}
    </section>
  );
}

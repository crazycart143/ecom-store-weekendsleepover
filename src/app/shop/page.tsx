"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Check, Shield, Truck, RotateCcw, Heart, Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const media = [
  { type: "image", src: "/images/robe7.png", alt: "POV lifestyle" },
  { type: "image", src: "/images/filler74.jpg", alt: "Aesthetic detail" },
  { type: "video", src: "/images/filler66.mp4", poster: "/images/robe9.png", alt: "The ritual in motion" },
  { type: "image", src: "/images/robe15.png", alt: "Texture focus" },
  { type: "image", src: "/images/robe12.png", alt: "Full set view" },
  { type: "image", src: "/images/weekend-box.png", alt: "Packaging" },
];

export default function Shop() {
  const [activeMedia, setActiveMedia] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>("S/M");
  const [showSticky, setShowSticky] = useState(false);
  const buyBoxRef = useRef<HTMLDivElement>(null);

  const colors = [
    { id: 'amalfi', name: "Amalfi", secondary: "flame + petal", gradient: "repeating-linear-gradient(90deg, #FF6B4E, #FF6B4E 15px, #FF9BCD 15px, #FF9BCD 30px)" },
    { id: 'nantucket', name: "Nantucket", secondary: "navy + cream", gradient: "repeating-linear-gradient(90deg, #2C3347, #2C3347 15px, #FDFCF8 15px, #FDFCF8 30px)" },
    { id: 'palm-beach', name: "Palm Beach", secondary: "emerald + blush", gradient: "repeating-linear-gradient(90deg, #007E63, #007E63 15px, #F5D6E1 15px, #F5D6E1 30px)" },
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  // COUNTDOWN LOGIC (Target: 4 days from now for demo)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set a target date (e.g., 3 days, 12 hours from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(targetDate.getHours() + 12);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const sizes = ["S/M", "L/XL"];

  // Auto-advance logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMedia((prev) => (prev + 1) % media.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (buyBoxRef.current) {
        const rect = buyBoxRef.current.getBoundingClientRect();
        setShowSticky(rect.bottom < 150);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-brand-background selection:bg-brand-primary selection:text-brand-background pt-32 lg:pt-40">
      <Navbar />
      
      {/* Product Section */}
      <section className="pt-64 md:pt-96 pb-20 editorial-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* 1. AUTO-CHANGING MEDIA CONTAINER */}
          <div className="w-full lg:w-[60%] relative group">
            <div className="relative aspect-4/5 bg-brand-secondary/5 overflow-hidden rounded-[40px] shadow-2xl shadow-brand-foreground/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMedia}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  {media[activeMedia].type === "video" ? (
                    <video
                      src={media[activeMedia].src}
                      poster={media[activeMedia].poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image 
                      src={media[activeMedia].src} 
                      alt={media[activeMedia].alt} 
                      fill
                      priority
                      className="object-cover"
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Floating Thumbnails (Reference Style) */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
                {media.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMedia(idx)}
                    className={`relative w-14 h-14 rounded-2xl overflow-hidden border-2 transition-all duration-500 scale-90 hover:scale-100 ${
                      activeMedia === idx 
                        ? "border-white shadow-lg scale-110" 
                        : "border-transparent opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
                    }`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    {item.type === "video" ? (
                      <div className="w-full h-full relative">
                        <Image src={item.poster || ""} alt="video thumb" fill className="object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play size={10} fill="white" className="text-white" />
                        </div>
                      </div>
                    ) : (
                      <Image src={item.src} alt="thumb" fill className="object-cover" />
                    )}
                  </button>
                ))}
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-10">
                 <span className="bg-white/90 backdrop-blur-md text-brand-foreground text-[9px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full shadow-lg">
                   Batch #004 — The Weekend Uniform
                 </span>
                 <div className="flex gap-1.5 pb-2">
                    {media.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`h-0.5 rounded-full transition-all duration-700 ${
                          activeMedia === idx ? "w-8 bg-white" : "w-2 bg-white/30"
                        }`} 
                      />
                    ))}
                 </div>
              </div>
            </div>
          </div>

          {/* 2. PURCHASE COLUMN (Sticky) */}
          <div className="w-full lg:w-[40%] relative">
            <div ref={buyBoxRef} className="lg:sticky lg:top-32 space-y-12">
              
              {/* Header Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >

                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5 text-brand-primary">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest opacity-40">2,400+ Trusted rituals</span>
                  </div>
                  <div className="bg-brand-primary/5 px-3 py-1 rounded-full border border-brand-primary/10">
                     <span className="text-[9px] font-bold text-brand-primary uppercase tracking-widest">In Stock</span>
                  </div>
                </div>

                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h1 className="font-serif text-5xl md:text-7xl text-brand-primary leading-[0.8] lowercase mb-4">
                      the <br /><span className="italic font-light text-brand-primary">weekend</span> set
                    </h1>
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-primary font-bold">Robe + Skincare Headband Bundle</p>
                  </div>
                  <div className="pt-2">
                    <p className="font-serif text-3xl md:text-4xl text-brand-foreground">$165</p>
                  </div>
                </div>

                <div className="space-y-6 mb-12">
                   <p className="font-sans text-xl text-brand-foreground font-light leading-snug italic lowercase">
                     "your weekend uniform — for slow mornings, hotel rooms, and feeling put together without trying."
                   </p>
                   <p className="font-sans text-sm text-brand-foreground/60 leading-relaxed lowercase">
                     The complete ritual. A heavy-weight organic terry robe designed with deep pockets and a cinematic drape, paired with our signature cloud skincare headband.
                   </p>
                </div>
              </motion.div>

              {/* Selection Logic */}
              <div className="space-y-10">
                {/* Color Selector */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                    <label>select color: <span className="text-brand-foreground ml-2 opacity-100 italic lowercase">{selectedColor.name}</span></label>
                  </div>
                  <div className="flex gap-4">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color)}
                        className={`group relative flex-1 flex flex-col items-center gap-3 p-4 rounded-[24px] border transition-all duration-500 ${
                          selectedColor.id === color.id
                            ? "border-brand-primary bg-brand-primary/5 shadow-lg shadow-brand-primary/5"
                            : "border-brand-foreground/5 hover:border-brand-foreground/20"
                        }`}
                      >
                        <div 
                          className={`w-full aspect-2/1 rounded-xl border border-black/5 shadow-sm transition-transform duration-500 group-hover:scale-105 ${
                            selectedColor.id === color.id ? "scale-105" : ""
                          }`}
                          style={{ background: color.gradient }}
                        />
                        <span className={`text-[8px] uppercase tracking-widest font-black transition-colors ${
                          selectedColor.id === color.id ? "text-brand-primary" : "text-brand-foreground/30"
                        }`}>
                          {color.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                    <label>select size</label>
                    <button className="underline underline-offset-4 hover:text-brand-primary transition-colors">size guide</button>
                  </div>
                  <div className="flex gap-4">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`flex-1 py-5 rounded-2xl border font-sans text-sm font-bold transition-all duration-300 ${
                          selectedSize === size
                            ? "border-brand-primary bg-brand-primary text-white shadow-xl shadow-brand-primary/10"
                            : "border-brand-foreground/10 hover:border-brand-primary/40 text-brand-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  {/* URGENCY TIMER - REPOSITIONED */}
                  <div className="flex items-center justify-between px-6 py-5 bg-brand-primary/5 rounded-[24px] border border-brand-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-ping absolute opacity-50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-primary relative" />
                      </div>
                      <span className="text-[10px] font-sans font-black uppercase tracking-[0.2em] text-brand-primary">Drop countdown:</span>
                    </div>
                    <div className="flex gap-4 items-baseline">
                      {[
                        { l: 'd', v: timeLeft.days },
                        { l: 'h', v: timeLeft.hours },
                        { l: 'm', v: timeLeft.minutes },
                        { l: 's', v: timeLeft.seconds }
                      ].map((time, i) => (
                        <div key={i} className="flex flex-col items-center min-w-10">
                          <span className="font-serif italic text-2xl text-brand-primary tabular-nums tracking-tighter">{time.v.toString().padStart(2, '0')}</span>
                          <span className="text-[8px] font-sans font-black opacity-30 uppercase tracking-widest">{time.l}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-brand-primary text-white py-7 rounded-full font-sans text-xs uppercase tracking-[0.3em] font-black hover:brightness-110 transition-all duration-500 shadow-2xl shadow-brand-primary/20 active:scale-[0.98]">
                     join current drop
                  </button>
                  <p className="text-center font-sans text-[9px] text-brand-foreground/40 uppercase tracking-[0.2em] italic">
                    Sold out in 4 minutes last batch. Don&apos;t linger.
                  </p>
                </div>

                <div className="bg-brand-secondary/20 p-8 rounded-[32px] border border-brand-foreground/5">
                   <h4 className="font-sans text-[10px] uppercase tracking-widest font-black opacity-30 mb-6">the bundle details:</h4>
                   <div className="space-y-6">
                      <div className="flex gap-4">
                         <div className="w-12 h-12 bg-white rounded-xl overflow-hidden shadow-sm shrink-0">
                            <Image src="/images/robe15.png" alt="Robe" width={48} height={48} className="object-cover" />
                         </div>
                         <div>
                            <p className="text-sm font-bold text-brand-foreground lowercase">The Cloud Terry Robe</p>
                            <p className="text-[11px] text-brand-foreground/50 lowercase">500gsm organic cotton. intentional weight.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="w-12 h-12 bg-white rounded-xl overflow-hidden shadow-sm shrink-0">
                            <Image src="/images/filler17.png" alt="Headband" width={48} height={48} className="object-cover" />
                         </div>
                         <div>
                            <p className="text-sm font-bold text-brand-foreground lowercase">The Ritual Headband</p>
                            <p className="text-[11px] text-brand-foreground/50 lowercase">ultra-soft elastic. zero-pressure skincare.</p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Trust Section */}
              <div className="pt-10 border-t border-brand-foreground/5">
                <div className="flex justify-between items-center px-4">
                   {[
                     { icon: Truck, text: "Fast ship" },
                     { icon: RotateCcw, text: "30-day glow" },
                     { icon: Shield, text: "Secure" }
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col items-center gap-2 group cursor-help">
                        <item.icon size={16} strokeWidth={1.5} className="text-brand-foreground/20 group-hover:text-brand-primary transition-colors" />
                        <span className="text-[8px] uppercase font-bold tracking-widest text-brand-foreground/30">{item.text}</span>
                     </div>
                   ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. THE RHODE GRID (Specs & Feeling) */}
      <section className="py-24 md:py-48 bg-white/50 backdrop-blur-sm border-y border-brand-foreground/5">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <h2 className="font-serif text-4xl md:text-6xl text-brand-foreground leading-tight lowercase mb-8">
                The uniform <br /> for your <span className="italic font-light">daily ritual.</span>
              </h2>
              <p className="font-sans text-brand-foreground/60 leading-relaxed italic lowercase text-lg">
                "this set isn't just clothing. it's a boundary. it's the official signal that you are now unapologetically unavailable."
              </p>
            </div>
            
            <div className="md:col-span-7">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-foreground/10 border border-brand-foreground/10 rounded-[40px] overflow-hidden">
                  {[
                    { title: "best for", val: "skincare rituals & slow coffee" },
                    { title: "feels like", val: "a heavy hotel robe you took home" },
                    { title: "gsm", val: "500 — cinematic drape" },
                    { title: "fyi", val: "gets softer with every wash" },
                    { title: "material", val: "100% organic turkish cotton" },
                    { title: "packaging", val: "sustainable, ritual-ready box" }
                  ].map((spec, i) => (
                    <div key={i} className="bg-brand-background p-10 group hover:bg-brand-primary/5 transition-colors">
                      <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-black text-brand-primary block mb-6">{spec.title}</span>
                      <p className="font-serif text-xl text-brand-foreground lowercase italic leading-tight">{spec.val}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TARGETING SECTION (Rhode Vibe) */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <Image 
          src="/images/filler21.png" 
          alt="Atmosphere" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="editorial-container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl bg-white/5 backdrop-blur-2xl p-12 md:p-24 rounded-[60px] border border-white/10 text-white"
          >
            <span className="font-sans text-[11px] uppercase tracking-[0.5em] font-bold mb-10 block opacity-50">the intention</span>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.8] lowercase mb-16">
              wear the weekend set to <span className="italic">target:</span>
            </h2>
            <div className="space-y-10">
               {[
                 { label: "stressful mornings", active: false },
                 { label: "sensory overload", active: false },
                 { label: "cluttered thoughts", active: false },
                 { label: "the slow life", active: true }
               ].map((item, i) => (
                 <div key={i} className={`flex items-baseline gap-8 text-3xl md:text-5xl font-serif transition-all duration-700 ${item.active ? "text-brand-primary italic opacity-100 translate-x-4" : "text-white/20 line-through decoration-white/30"}`}>
                   <span className="text-xs font-sans font-bold opacity-30 tracking-widest">0{i + 1}</span>
                   {item.label}
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. UGC / SOCIAL PROOF (Rhode GRWM Style) */}
      <section className="py-24 md:py-48 bg-brand-background">
        <div className="editorial-container">
           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
              <div className="max-w-2xl">
                <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-brand-primary mb-6 block">living portraits</span>
                <h2 className="font-serif text-5xl md:text-8xl text-brand-foreground leading-none lowercase">
                  get ready with <br /><span className="italic font-light">the weekend set.</span>
                </h2>
              </div>
              <p className="font-sans text-sm md:text-base text-brand-foreground/40 max-w-sm italic lowercase leading-relaxed">
                "nothing feels as good as being alone and looking cute while doing it." — join the collective at @weekendsleepover
              </p>
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
              {[
                { src: "/images/filler13.png", tag: "@emma_slows" },
                { src: "/images/filler17.png", tag: "@ritual_living" },
                { src: "/images/filler74.jpg", tag: "@soft_sunday" },
                { src: "/images/filler72.jpg", tag: "@the_set_club" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative aspect-9/16 rounded-[40px] overflow-hidden group cursor-pointer"
                >
                  <Image src={item.src} alt="Ritual Moment" fill className="object-cover transition-transform duration-[3s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 scale-0 group-hover:scale-100 transition-transform">
                      <Play size={20} className="text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-10 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                    <span className="text-white font-sans text-[10px] font-black tracking-[0.2em] uppercase bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">{item.tag}</span>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Sticky Bottom Bar (Mobile Skims Logic) */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: 200 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed bottom-0 left-0 right-0 z-100 bg-white/80 backdrop-blur-2xl border-t border-brand-foreground/5 p-4 md:p-8 flex items-center justify-between shadow-[0_-30px_60px_rgba(0,0,0,0.12)]"
          >
            <div className="flex flex-col ml-4">
              <span className="font-serif italic text-xl md:text-2xl text-brand-primary leading-none lowercase">the weekend set</span>
                <div className="flex items-center gap-3 mt-2">
                 <span className="text-[10px] md:text-[11px] text-brand-primary font-black tracking-[0.2em] uppercase">$165.00</span>
                 <span className="w-1 h-1 rounded-full bg-brand-foreground/20" />
                 <span className="text-[9px] text-brand-foreground/40 font-bold uppercase tracking-widest italic">{selectedColor.name}</span>
                 <span className="w-1 h-1 rounded-full bg-brand-foreground/20" />
                 <span className="text-[9px] text-brand-foreground/40 font-bold uppercase tracking-widest">{selectedSize || "select size"}</span>
              </div>
            </div>
            <div className="flex gap-4">
               <button className="hidden sm:flex w-16 h-16 rounded-full border border-brand-foreground/10 items-center justify-center hover:bg-brand-primary/5 hover:border-brand-primary/30 transition-all active:scale-90">
                 <Heart size={20} className="text-brand-foreground/40 hover:text-brand-primary transition-colors" />
               </button>
               <button className="bg-brand-primary text-white px-10 md:px-20 py-5 md:py-6 rounded-full font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] font-black shadow-2xl shadow-brand-primary/30 hover:brightness-110 transition-all duration-500 active:scale-95">
                  join the ritual
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star, Check, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { CountdownTimer } from "@/components/countdown-timer";

import Image from "next/image";

export function ProductShowcase() {
  const benefits = [
    "Cloud-soft fleece material",
    "Absorbent skincare headband",
    "Oversized 'boyfriend' fit",
    "Perfect for lazy sundays"
  ];

  return (
    <section className="py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Product Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/product-image.png" 
                alt="The Weekend Set Robe"
                width={800}
                height={1000}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
               <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg rotate-12">
                  <span className="font-serif text-brand-dark-pink font-bold italic">Bestseller</span>
               </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-brand-cocoa/60 text-sm font-medium">5.0 (124 reviews)</span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl text-brand-cocoa mb-6 leading-tight">
              The Weekend <span className="text-brand-dark-pink italic">Set</span>
            </h2>

            <p className="text-brand-cocoa/80 text-lg mb-8 leading-relaxed">
              Everything you need for the perfect night in. Our signature cloud-soft robe paired with the cult-favorite skincare headband. It's not just loungewear, it's a lifestyle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-brand-pink/30 p-1 rounded-full text-brand-dark-pink">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-brand-cocoa font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Countdown for Urgency */}
            <div className="mb-8 scale-75 origin-center  lg:origin-left ">
              <p className="text-xs font-bold uppercase text-center lg:text-left tracking-widest text-brand-red mb-2 ml-4">Launch Offer Ends In:</p>
              <CountdownTimer theme="dark" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-dark-pink text-white font-sans font-bold uppercase tracking-widest rounded-full shadow-xl hover:bg-brand-dark-pink/90 transition-all hover:scale-105">
                Add to Cart — $120
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-brand-cocoa/10 text-brand-cocoa font-sans font-bold uppercase tracking-widest rounded-full hover:bg-brand-cocoa/5 transition-all">
                View Details
              </button>
            </div>
            
             <p className="mt-8 text-xs text-brand-cocoa/50 text-center sm:text-left">
                Free shipping on orders over $150 ✦ 30-day glow guarantee
             </p>

             {/* Trust Badges */}
             <div className="mt-8 pt-8 border-t border-brand-cocoa/5 flex flex-wrap justify-center sm:justify-start gap-8 opacity-60">
                <div className="flex flex-col items-center sm:items-start gap-2">
                   <ShieldCheck size={20} className="text-brand-dark-pink" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cocoa">Secure Checkout</span>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-2">
                   <Truck size={20} className="text-brand-dark-pink" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cocoa">Express Global Shipping</span>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-2">
                   <RotateCcw size={20} className="text-brand-dark-pink" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cocoa">30-Day Happiness Guarantee</span>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

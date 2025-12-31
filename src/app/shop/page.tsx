"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Star, Check, Shield, Truck } from "lucide-react";
import { useState } from "react";

export default function Shop() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/images/product-image.png",
    "/images/product-image2.webp",
    "/images/product-image.png",
    "/images/product-image2.webp",
  ];

  return (
    <main className="min-h-screen bg-brand-light-pink selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2 space-y-4">
            <motion.div 
              className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={images[selectedImage]} 
                alt="Product View" 
                className="w-full h-full object-cover"
              />
               <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                Selling Fast
              </div>
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedImage === idx ? "border-brand-red scale-95" : "border-transparent hover:border-brand-red/30"}`}
                >
                  <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
             >
                <div className="flex items-center gap-2 mb-4 text-brand-dark-pink font-bold uppercase tracking-widest text-xs">
                  <span>New Arrival</span>
                  <span className="w-1 h-1 bg-brand-red rounded-full" />
                  <span>Limited Edition</span>
                </div>

                <h1 className="font-serif text-5xl md:text-7xl text-brand-red mb-4 leading-none">
                  The Weekend Set
                </h1>

                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-sans font-medium text-brand-dark-pink">$120</span>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <span className="text-sm opacity-60 underline">142 verified reviews</span>
                </div>

                <p className="text-brand-cocoa/80 text-lg leading-relaxed mb-8">
                  Transform your routine into a ritual. Our signature cloud-soft robe paired with a matching skincare headband. Designed for the girls who take their downtime seriously.
                </p>

                {/* Benefits */}
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white mb-8">
                  <ul className="space-y-3">
                     {[
                        "Cloud-soft, sustainable fleece",
                        "Absorbent headband for skincare routines",
                        "Deep pockets for essentials",
                        "Oversized 'boyfriend' fit"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-brand-cocoa font-medium">
                         <div className="bg-brand-red/10 p-1 rounded-full text-brand-red">
                           <Check size={14} strokeWidth={3} />
                         </div>
                         {item}
                       </li>
                     ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-4">
                  <button className="w-full bg-brand-red text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-brand-dark-pink transition-all shadow-lg hover:shadow-brand-red/30 hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2">
                     Add to Cart
                  </button>
                  <p className="text-center text-xs text-brand-cocoa/50 font-medium">
                    Free shipping worldwide on orders over $150
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-brand-red/10">
                   <div className="flex items-center gap-3 text-sm font-bold text-brand-dark-pink opacity-80">
                      <Truck size={20} />
                      <span>Fast & Free Shipping</span>
                   </div>
                   <div className="flex items-center gap-3 text-sm font-bold text-brand-dark-pink opacity-80">
                      <Shield size={20} />
                      <span>30-Day returns</span>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

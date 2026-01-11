"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, ArrowRight, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "the weekend set",
      variant: "signature bone / s/m",
      price: 165,
      image: "/images/placeholder-product-1.jpg",
      quantity: 1
    }
  ]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-100 bg-brand-foreground/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-101 h-full w-full max-w-md bg-brand-background shadow-3xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 flex items-center justify-between border-b border-brand-primary/10">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-brand-primary" strokeWidth={1} />
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-brand-primary">your bag ({cartItems.length})</span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-brand-secondary rounded-full transition-colors text-brand-primary"
              >
                <X size={20} strokeWidth={1} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-brand-secondary flex items-center justify-center">
                    <ShoppingBag size={24} className="text-brand-primary/20" strokeWidth={1} />
                  </div>
                  <p className="font-serif text-2xl italic text-brand-primary/40 font-light lowercase">your bag is empty</p>
                  <button 
                    onClick={onClose}
                    className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] border-b border-brand-primary text-brand-primary pb-1 hover:text-brand-foreground hover:border-brand-foreground transition-all"
                  >
                    return to ritual
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-6"
                  >
                    <div className="w-24 h-32 bg-brand-secondary rounded-sm overflow-hidden shrink-0 relative">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-xl text-brand-primary leading-none italic font-light lowercase">{item.name}</h4>
                          <button onClick={() => setCartItems(items => items.filter(i => i.id !== item.id))} className="text-brand-primary/40 hover:text-brand-primary transition-colors">
                            <Trash2 size={16} strokeWidth={1} />
                          </button>
                        </div>
                        <p className="text-[10px] font-sans uppercase tracking-widest text-brand-primary/60 mt-3">{item.variant}</p>
                      </div>
                      <div className="flex justify-between items-end">
                         <div className="flex items-center border border-brand-primary/20 rounded-full px-4 py-1.5 gap-6 text-xs font-bold font-sans text-brand-primary">
                            <button onClick={() => {}} className="text-brand-primary/40 hover:text-brand-primary">-</button>
                            <span className="min-w-[12px] text-center">{item.quantity}</span>
                            <button onClick={() => {}} className="text-brand-primary/40 hover:text-brand-primary">+</button>
                         </div>
                         <p className="font-serif text-lg text-brand-primary">${item.price}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-8 border-t border-brand-primary/10 bg-brand-secondary/30 space-y-6">
                <div className="flex justify-between items-center text-brand-primary">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60 font-sans">subtotal</span>
                  <span className="font-serif text-2xl">${subtotal}</span>
                </div>
                <p className="text-[10px] text-brand-primary/60 text-center uppercase tracking-widest font-medium font-sans">
                  complimentary shipping on all drops
                </p>
                <button className="w-full bg-brand-primary text-white py-6 rounded-full font-sans text-[11px] uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-3 hover:bg-brand-primary/90 transition-all group shadow-lg">
                  place invitation order
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

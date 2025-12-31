"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, ArrowRight, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  // Mock Cart Items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "The Weekend Set",
      variant: "Signature Pink / S/M",
      price: 120,
      image: "/images/product-image.png",
      quantity: 1
    }
  ]);

  // Lock body scroll when open
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-[101] h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 flex items-center justify-between border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 uppercase tracking-widest text-xs font-bold text-brand-cocoa">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} />
                <span>Your Bag ({cartItems.length})</span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50 space-y-4">
                  <ShoppingBag size={48} className="text-brand-pink" />
                  <p className="font-serif text-xl italic text-brand-cocoa">Your bag is empty</p>
                  <button 
                    onClick={onClose}
                    className="text-xs font-bold uppercase tracking-widest border-b border-brand-red text-brand-red pb-1"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4"
                  >
                    <div className="w-24 h-32 bg-brand-light-pink rounded-xl overflow-hidden shrink-0 border border-brand-pink/20">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-lg text-brand-cocoa leading-none">{item.name}</h4>
                          <button onClick={() => setCartItems(items => items.filter(i => i.id !== item.id))} className="text-gray-400 hover:text-brand-red transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{item.variant}</p>
                      </div>
                      <div className="flex justify-between items-end">
                         <div className="flex items-center border border-gray-200 rounded-lg px-2 py-1 gap-3 text-sm">
                            <button onClick={() => {}}>-</button>
                            <span className="font-medium">{item.quantity}</span>
                            <button onClick={() => {}}>+</button>
                         </div>
                         <p className="font-medium text-brand-cocoa">${item.price}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-brand-light-pink/10 space-y-4">
                <div className="flex justify-between items-center text-brand-cocoa">
                  <span className="text-sm font-medium">Subtotal</span>
                  <span className="font-serif text-xl font-bold">${subtotal}</span>
                </div>
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="w-full bg-brand-dark-pink text-white py-4 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-dark-pink transition-all group">
                  Checkout
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

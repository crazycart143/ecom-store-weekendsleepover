"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function CreatorBadge() {
  return (
    <motion.a
      href="https://keanuworksva.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover="hover"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-3 pl-2 pr-5 py-2 rounded-full shadow-2xl group transition-all duration-300 bg-[#EBEBEB] hover:bg-black border border-white/10"
    >
      {/* Circle Icon */}
      <motion.div 
        variants={{
          hover: { backgroundColor: "#5842F4" }
        }}
        className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0 transition-colors duration-300"
      >
        <span className="text-white font-bold text-lg leading-none">K</span>
      </motion.div>

      {/* Text Content */}
      <div className="flex flex-col justify-center">
        <motion.span 
          variants={{
            hover: { color: "rgba(255,255,255,0.5)" }
          }}
          className="text-[9px] uppercase tracking-widest font-black text-[#9FA2A7] transition-colors duration-300 leading-none mb-1"
        >
          CREATED BY
        </motion.span>
        <motion.span 
          variants={{
            hover: { color: "#FFFFFF" }
          }}
          className="text-[14px] font-black text-[#0A0A0A] transition-colors duration-300 whitespace-nowrap leading-none"
        >
          Keanu Works VA
        </motion.span>
      </div>

      {/* External Link Icon */}
      <motion.div
        variants={{
          hover: { opacity: 1, x: 0, width: "auto" }
        }}
        initial={{ opacity: 0, x: -5, width: 0 }}
        className="text-white flex items-center overflow-hidden"
      >
        <ExternalLink size={14} strokeWidth={3} className="ml-1" />
      </motion.div>
    </motion.a>
  );
}

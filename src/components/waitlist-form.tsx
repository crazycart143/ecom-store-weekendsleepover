"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="w-full max-w-lg mx-auto relative group">
       {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-brand-dark-pink rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
      
      <motion.form 
        onSubmit={handleSubmit}
        className="relative bg-white backdrop-blur-xl p-1.5 md:p-2 rounded-xl border border-white/50 shadow-xl flex items-center gap-1 md:gap-2"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="pl-2 md:pl-4 text-brand-dark-pink shrink-0">
          <Sparkles size={18} className="md:w-5 md:h-5" />
        </div>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address" 
          className="flex-1 min-w-0 bg-transparent border-none outline-none text-brand-dark-pink placeholder:text-brand-dark-pink/30 md:placeholder:text-brand-dark-pink/50 font-medium h-10 md:h-12 text-sm md:text-base"
          required
        />
        <button 
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="bg-brand-dark-pink text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-bold font-sans uppercase text-[10px] md:text-xs tracking-widest hover:bg-brand-red transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-1.5 md:gap-2 shrink-0"
        >
          {status === "loading" ? "..." : status === "success" ? "In!" : (
            <>
              Join <ArrowRight size={14} />
            </>
          )}
        </button>
      </motion.form>
      
      {status === "success" && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-8 left-0 right-0 text-center text-brand-dark-pink text-xs font-bold bg-white/50 backdrop-blur-sm py-1 rounded-full"
        >
          Welcome to the club! Check your inbox soon. 💌
        </motion.p>
      )}
    </div>
  );
}

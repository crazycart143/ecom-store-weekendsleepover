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
        className="relative bg-white backdrop-blur-xl p-2 rounded-xl border border-white/50 shadow-xl flex items-center gap-2"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="pl-4 text-brand-dark-pink">
          <Sparkles size={20} />
        </div>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email to join the waitlist" 
          className="flex-1 bg-transparent border-none outline-none text-brand-dark-pink placeholder:text-brand-dark-pink/50 font-medium h-12"
          required
        />
        <button 
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="bg-brand-dark-pink text-white px-6 py-3 rounded-lg font-bold font-sans uppercase text-xs tracking-widest hover:bg-brand-red transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {status === "loading" ? "Joining..." : status === "success" ? "You're In!" : (
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

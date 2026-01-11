"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="w-full relative">
      {status === "success" ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center md:text-left py-4"
        >
          <p className="font-serif italic text-2xl text-brand-primary mb-2">you're on the list.</p>
          <p className="font-sans text-xs text-brand-foreground/40 uppercase tracking-widest font-bold">expect an invitation soon.</p>
        </motion.div>
      ) : (
        <form 
          onSubmit={handleSubmit}
          className="relative flex flex-col md:flex-row items-center gap-4 border-b border-brand-foreground/20 pb-4 focus-within:border-brand-primary transition-all"
        >
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email" 
            className="flex-1 w-full bg-transparent border-none outline-none text-brand-foreground placeholder:text-brand-foreground/30 font-serif text-2xl italic lowercase placeholder:lowercase"
            required
          />
          <button 
            type="submit"
            disabled={status === "loading"}
            className="w-full md:w-auto bg-brand-primary text-brand-background px-10 py-4 rounded-full font-sans text-[10px] items-center gap-2 uppercase tracking-[0.2em] font-bold hover:bg-brand-foreground transition-all flex justify-center group"
          >
            {status === "loading" ? "joining..." : "join drop"}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
}

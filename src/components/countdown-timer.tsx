"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CountdownTimer({ theme = "light" }: { theme?: "light" | "dark" }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to 3 days from now for demo
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-1 justify-center lg:justify-start mt-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="w-9 h-9 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 shadow-sm flex items-center justify-center mb-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-brand-red/20 transition-colors" />
            <span className={`font-serif text-sm md:text-xl font-bold relative z-10 ${theme === "dark" ? "text-brand-dark-pink" : "text-white"}`}>
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className={`text-[5px] md:text-[7px] uppercase tracking-tighter font-black opacity-60 ${theme === "dark" ? "text-brand-dark-pink" : "text-white"}`}>
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}

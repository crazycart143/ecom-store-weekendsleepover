"use client";

import Link from "next/link";
import { Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  const navigateLinks = [
    { name: "shop all", href: "/shop" },
    { name: "the weekend set", href: "/shop" },
    { name: "our story", href: "/about" },
    { name: "the journal", href: "/journal" },
    { name: "bride bundles", href: "/bride-bundles" },
    { name: "sorority collabs", href: "/sorority" },
    { name: "where to find us", href: "/contact" },
  ];

  const socialLinks = [
    { name: "instagram", icon: Instagram, href: "https://instagram.com/weekendsleepover" },
    { name: "youtube", icon: Youtube, href: "#" },
    { name: "tiktok", icon: Twitter, href: "#" }, 
  ];

  const officialLinks = [
    { name: "privacy", href: "/privacy" },
    { name: "terms", href: "/terms" },
    { name: "accessibility", href: "#" },
    { name: "shipping", href: "/shipping" },
    { name: "returns & glow", href: "/returns" },
    { name: "contact", href: "/contact" },
  ];

  const supportLinks = [
    { text: "we're here m-f 9am - 6pm pst." },
    { text: "drop us a note anytime." },
    { name: "faq", href: "/faq" },
    { name: "cookie preferences", href: "#" },
  ];

  return (
    <footer className="bg-brand-background text-brand-primary pt-12 pb-12 border-t border-brand-primary/10 overflow-hidden">
      <div className="editorial-container">
        
        {/* MASSIVE LOGO (The Statement Piece) */}
        <div className="w-full py-16 md:py-32 flex justify-center border-b border-brand-primary/10 mb-20">
          <h2 className="font-serif text-[clamp(120px,30vw,700px)] leading-[0.7] tracking-[-0.04em] text-center lowercase text-brand-primary select-none">
            weekend
          </h2>
        </div>

        {/* FOOTER COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          
          {/* Newsletter Column */}
          <div className="md:col-span-4 space-y-8">
            <div className="space-y-4">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-brand-primary text-center md:text-left">join us for a slow morning.</p>
              <p className="font-sans text-sm text-brand-primary/80 leading-relaxed lowercase text-center md:text-left">
                 the slow life manual: ritual tips, exclusive drops, and more.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="email address" 
                  className="bg-brand-secondary/30 border border-brand-primary/20 rounded-full px-6 py-4 text-xs font-sans w-full focus:outline-none focus:border-brand-primary/40 lowercase placeholder:text-brand-primary/40 text-brand-primary"
                />
                <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-sans text-[10px] uppercase tracking-widest font-bold hover:brightness-110 transition-all">
                  subscribe
                </button>
              </div>
              <p className="font-sans text-[9px] text-brand-primary/50 px-4 lowercase text-center md:text-left">
                by signing up, you agree to our <Link href="/privacy" className="underline underline-offset-2">privacy policy</Link>.
              </p>
            </div>
          </div>

          {/* Spacer Column for large screens */}
          <div className="hidden md:block md:col-span-1" />

          {/* Links Section */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-12 md:gap-4">
            
            {/* Column 1: Navigate */}
            <div className="space-y-8">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">navigate</h4>
              <ul className="space-y-4">
                {navigateLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="font-sans text-[11px] hover:text-brand-primary transition-colors lowercase opacity-80 hover:opacity-100 italic md:not-italic md:hover:italic">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Social */}
            <div className="space-y-8">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">social</h4>
              <ul className="space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="font-sans text-[11px] hover:text-brand-primary transition-colors lowercase flex items-center gap-2 opacity-80 hover:opacity-100">
                      <link.icon size={12} strokeWidth={1.5} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Official */}
            <div className="space-y-8">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">official</h4>
              <ul className="space-y-4">
                {officialLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="font-sans text-[11px] hover:text-brand-primary transition-colors lowercase opacity-80 hover:opacity-100">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Support */}
            <div className="space-y-8">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">support</h4>
              <ul className="space-y-4">
                {supportLinks.map((item, i) => (
                  <li key={i}>
                    {"href" in item ? (
                      <Link href={item.href!} className="font-sans text-[11px] hover:text-brand-primary transition-colors lowercase opacity-80 hover:opacity-100">{item.name}</Link>
                    ) : (
                      <span className="font-sans text-[11px] lowercase opacity-50 leading-relaxed block">{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-primary/10 pt-12 gap-8 md:gap-0">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="font-sans text-[9px] text-brand-primary/40 uppercase tracking-[0.3em] font-black">
              © 2026 weekend sleepover • all rights reserved
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-brand-primary/20" />
            <p className="font-serif italic text-xs text-brand-primary/30 lowercase">slow mornings, forever.</p>
          </div>
          
          <div className="flex gap-4 grayscale opacity-20 invert transition-all hover:opacity-40">
             <div className="w-8 h-4 bg-brand-primary rounded-[2px]" />
             <div className="w-8 h-4 bg-brand-primary/60 rounded-[2px]" />
             <div className="w-8 h-4 bg-brand-primary/80 rounded-[2px]" />
          </div>
        </div>

      </div>
    </footer>
  );
}

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProductShowcase } from "@/components/product-showcase";
import { Testimonials } from "@/components/testimonials";
import { Ritual } from "@/components/ritual";
import { Moodboard } from "@/components/moodboard";
import { LeisureWorld } from "@/components/leisure-world";
import { Unboxing } from "@/components/unboxing";
import { WaitlistSection } from "@/components/waitlist-section";
import { BrandModal } from "@/components/brand-modal";
import { CreatorBadge } from "@/components/creator-badge";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream selection:bg-brand-pink selection:text-brand-dark-pink">
      <Navbar />
      <BrandModal />
      <CreatorBadge />
      
      <Hero />
      {/* <Testimonials /> */}
      <ProductShowcase />
      <Moodboard />
      {/* <Ritual /> */}
      <LeisureWorld />
      {/* <Unboxing /> */}
      <WaitlistSection />
      <FAQ />
      
      <Footer />
    </main>
  );
}

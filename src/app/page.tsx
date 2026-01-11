import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProductShowcase } from "@/components/product-showcase";
import { Testimonials } from "@/components/testimonials";
import { Ritual } from "@/components/ritual";
import { Moodboard } from "@/components/moodboard";
import { SlumberParty } from "@/components/slumber-party";
import { InstagramFeed } from "@/components/instagram-feed";
import { Unboxing } from "@/components/unboxing";
import { WaitlistSection } from "@/components/waitlist-section";
import { BrandModal } from "@/components/brand-modal";
import { CreatorBadge } from "@/components/creator-badge";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { WelcomeModal } from "@/components/welcome-modal";

import { SplitBanner } from "@/components/split-banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-background selection:bg-brand-primary selection:text-brand-background">
      <Navbar />
      <WelcomeModal />
      {/* <BrandModal /> */}
      {/* <CreatorBadge /> */}
      
      <Hero />
      <ProductShowcase />
      <Testimonials />
      <SlumberParty />
   
      <Ritual />
     
      {/* <Moodboard /> */}
      {/* <Unboxing /> */}
      <WaitlistSection />
      {/* <FAQ /> */}
      
      <InstagramFeed />
      <Footer />
    </main>
  );
}

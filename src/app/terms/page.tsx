"use client";

import { LegalTemplate } from "@/components/legal-template";

export default function TermsPage() {
  return (
    <LegalTemplate title="terms of service" lastUpdated="january 07, 2026">
      <section className="space-y-6">
        <h2 className="text-3xl">welcome to the club.</h2>
        <p>
          By using our website and purchasing from Weekend Sleepover, you agree to follow our rules. These terms are designed to protect both our community and our brand.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl">orders.</h2>
        <p>
          We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. 
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl">intellectual property.</h2>
        <p>
          All content on this site, including the "weekend" wordmark, designs, and photographs, are the property of Weekend Sleepover. Please don't use them without our permission.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl">governing law.</h2>
        <p>
          These terms are governed by the laws of the State of California. Any disputes will be handled in the courts of Los Angeles.
        </p>
      </section>
    </LegalTemplate>
  );
}

"use client";

import { LegalTemplate } from "@/components/legal-template";

export default function PrivacyPage() {
  return (
    <LegalTemplate title="privacy policy" lastUpdated="january 07, 2026">
      <section className="space-y-6">
        <h2 className="text-3xl">our approach to your ritual data.</h2>
        <p>
          At Weekend Sleepover, your privacy is a core part of your ritual. We only collect the information necessary to fulfill your orders and enhance your experience with us. We never sell your data to third parties—it stays within our inner circle.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl">what we collect.</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Identity Data:</strong> name, email, and social handles if you tag us.</li>
          <li><strong>Transaction Data:</strong> details about payments and orders (we never see your full credit card info).</li>
          <li><strong>Usage Data:</strong> how you interact with our shop to help us make the ritual better.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl">your rights.</h2>
        <p>
          You have the right to request access to your data, or ask us to delete it entirely. Just send a note to <span className="italic text-brand-primary">privacy@weekendsleepover.com</span> and we'll handle it immediately.
        </p>
      </section>
    </LegalTemplate>
  );
}

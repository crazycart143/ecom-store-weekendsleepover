"use client";

import { LegalTemplate } from "@/components/legal-template";

export default function ShippingPage() {
  return (
    <LegalTemplate title="shipping policy" lastUpdated="january 07, 2026">
      <section className="space-y-6">
        <h2 className="text-3xl">our shipping philosophy.</h2>
        <p>
          Your ritual shouldn't have to wait. We strive to process and ship all orders as quickly as possible so you can start living your weekend every day. All orders are packed in our signature sustainable ritual boxes.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl">processing times.</h2>
        <p>
          Standard orders are processed within 24-48 business hours. During new collection drops, please allow an additional 2-3 business days for our small team to carefully pack your set.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl">domestic (us) shipping.</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Standard (3-5 business days):</strong> Free on all orders over $150.</li>
          <li><strong>Expedited (2 business days):</strong> $15 flat rate.</li>
          <li><strong>Next Day Ritual:</strong> $35 flat rate.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl">international shipping.</h2>
        <p>
          We currently ship to Canada, UK, Australia, and select EU countries. Shipping rates and estimated duties are calculated at checkout. Please note that international rituals may take 7-14 business days to arrive.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl">lost or delayed packages.</h2>
        <p>
          Once a package leaves our HQ, it's in the hands of the carrier. However, we're here to help. If your package is delayed more than 5 days past its expected delivery, please reach out to <span className="italic text-brand-primary">hello@weekendsleepover.com</span>.
        </p>
      </section>
    </LegalTemplate>
  );
}

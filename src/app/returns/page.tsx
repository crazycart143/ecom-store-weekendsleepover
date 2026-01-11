"use client";

import { LegalTemplate } from "@/components/legal-template";

export default function ReturnsPage() {
  return (
    <LegalTemplate title="returns & exchanges" lastUpdated="january 07, 2026">
      <section className="space-y-6">
        <h2 className="text-3xl">the 30-day glow guarantee.</h2>
        <p>
          We want you to be completely in love with your weekend set. If for any reason your ritual doesn't feel right, we offer a 30-day window for returns or exchanges on all unwashed and unworn items in their original ritual box.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl">how to start a return.</h2>
        <p>
          1. Visit our <span className="italic text-brand-primary">returns portal</span> (link emailed with your order).<br />
          2. Enter your order number and zip code.<br />
          3. Print your pre-paid label and drop it in the mail.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl">refunds.</h2>
        <p>
          Once we receive your return, we'll inspect the items and issue a refund to your original payment method. Please allow 5-10 business days for the credit to appear in your account.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl">exchanges.</h2>
        <p>
          Need a different size? We offer free exchanges. The moment you drop your return in the mail, we'll ship out your new size so you don't have to wait to start your ritual.
        </p>
      </section>
    </LegalTemplate>
  );
}

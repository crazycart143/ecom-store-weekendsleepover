import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";

const serif = Libre_Baskerville({
  variable: "--font-serif-editor",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  fallback: ['Georgia', 'serif'],
});

const sans = Inter({
  variable: "--font-sans-main",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weekend Sleepover | Life of Leisure",
  description: "A luxury leisure, lifestyle-driven brand for your weekend rituals. Home of The Weekend Set.",
  icons: {
    icon: '/logo-abbreviation.ico',
    apple: '/logo-abbreviation.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${sans.variable} antialiased font-serif bg-brand-background text-brand-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

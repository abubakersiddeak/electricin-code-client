
import "@/styles/globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/provider/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "SparkFix Electricals - Powering Your Home, Professionally",
  description:
    "Professional electrical services including residential wiring, commercial installation, emergency repairs, solar panel setup, and generator systems. Licensed, bonded, and insured electricians serving the metro area for over 15 years.",
  keywords:
    "electrician, electrical services, residential wiring, commercial installation, emergency electrical repair, solar panel installation, generator backup system, licensed electrician, SparkFix",
  authors: [{ name: "SparkFix Electricals" }],
  robots: "index, follow",
  openGraph: {
    title: "SparkFix Electricals - Powering Your Home, Professionally",
    description:
      "Professional electrical services with certified master electricians. 24/7 emergency service available. Serving the metro area for over 15 years.",
    type: "website",
    locale: "en_US",
  },
};

export default function ElectricianLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider defaultTheme="system" storageKey="mest-showcase-theme">
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

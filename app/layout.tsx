import type { Metadata } from "next";
import { Marcellus, Karla, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/data";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"], variable: "--font-marcellus", display: "swap" });
const karla = Karla({ subsets: ["latin"], variable: "--font-karla", display: "swap" });
const plexMono = IBM_Plex_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-plex-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "KOSHA — Luxury Interior Design & Architecture Studio, Bengaluru",
    template: "%s — KOSHA Studio",
  },
  description:
    "KOSHA is a luxury interior design and architecture studio in Bengaluru. 120+ residences, villas, hotels, restaurants and offices across India, designed with quiet material discipline.",
  keywords: ["interior design Bengaluru", "luxury interiors India", "architecture studio", "villa interior design", "hotel interior design", "turnkey interiors"],
  openGraph: {
    type: "website",
    siteName: "KOSHA Studio",
    title: "KOSHA — The Architecture of Stillness",
    description: "Luxury interior design & architecture across India. Residences, hotels, restaurants and workplaces built with quiet material discipline.",
    url: site.url,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOSHA — The Architecture of Stillness",
    description: "Luxury interior design & architecture studio, Bengaluru.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KOSHA Studio",
  description: "Luxury interior design and architecture studio",
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 7, Lavelle Road",
    addressLocality: "Bengaluru",
    postalCode: "560001",
    addressCountry: "IN",
  },
  sameAs: [site.instagram],
  priceRange: "₹₹₹₹",
  areaServed: "IN",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${marcellus.variable} ${karla.variable} ${plexMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-espresso focus:px-4 focus:py-2 focus:text-linen">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

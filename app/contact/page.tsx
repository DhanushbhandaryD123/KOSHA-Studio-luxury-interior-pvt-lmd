import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a design consultation with KOSHA Studio — Lavelle Road, Bengaluru. Call, WhatsApp, or send the project brief form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        sheet="A-900"
        eyebrow="Contact"
        title={<>Start with<br />a conversation.</>}
        lede="Every engagement begins with a two-hour consultation — at your site or our studio. Tell us about the project below, or reach us directly."
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-36">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* form */}
          <div className="lg:col-span-7">
            <Reveal><ContactForm /></Reveal>
          </div>

          {/* direct channels + map */}
          <div className="space-y-10 lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <div className="titleblock divide-y divide-espresso/12">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="group flex items-center gap-4 p-6 transition-colors hover:bg-plaster-deep">
                  <span className="flex size-11 shrink-0 items-center justify-center border border-brass text-brass"><Phone size={17} strokeWidth={1.5} /></span>
                  <span>
                    <span className="spec block text-stone">Call the studio</span>
                    <span className="mt-0.5 block font-medium">{site.phone}</span>
                  </span>
                </a>
                <a href={`https://wa.me/${site.whatsapp}?text=Hello%20KOSHA%2C%20I%27d%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-6 transition-colors hover:bg-plaster-deep">
                  <span className="flex size-11 shrink-0 items-center justify-center border border-brass text-brass"><MessageCircle size={17} strokeWidth={1.5} /></span>
                  <span>
                    <span className="spec block text-stone">WhatsApp</span>
                    <span className="mt-0.5 block font-medium">Message us directly</span>
                  </span>
                </a>
                <div className="flex items-center gap-4 p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center border border-brass text-brass"><Clock size={17} strokeWidth={1.5} /></span>
                  <span>
                    <span className="spec block text-stone">Studio hours</span>
                    <span className="mt-0.5 block font-medium">Mon–Sat · 10:00–18:30 IST</span>
                  </span>
                </div>
                <div className="flex items-start gap-4 p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center border border-brass text-brass"><MapPin size={17} strokeWidth={1.5} /></span>
                  <span>
                    <span className="spec block text-stone">Visit</span>
                    <span className="mt-0.5 block font-medium leading-snug">{site.address}</span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="titleblock overflow-hidden">
                <iframe
                  title="KOSHA Studio location — Lavelle Road, Bengaluru"
                  src="https://www.google.com/maps?q=Lavelle+Road,+Bengaluru,+Karnataka+560001&output=embed"
                  className="h-72 w-full grayscale contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <p className="spec px-4 py-3 text-stone">Grid ref · 12.968° N, 77.596° E</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

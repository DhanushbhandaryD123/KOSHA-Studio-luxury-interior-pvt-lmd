import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Accordion } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { faqs, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to the questions every KOSHA project begins with — minimum scope, timelines, fees, contractors, renovations and more.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        sheet="A-700"
        eyebrow="FAQ"
        title={<>Asked before<br />every project.</>}
        lede="The eight questions almost every first meeting begins with, answered plainly."
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8"><Reveal><Accordion items={faqs} /></Reveal></div>
          <Reveal delay={0.15} className="lg:col-span-3 lg:col-start-10">
            <div className="titleblock p-8">
              <p className="spec text-brass">Still deciding?</p>
              <p className="mt-4 leading-relaxed text-stone">Write to {site.email} or book a consultation — the smallest, lowest-risk way to work with us.</p>
              <div className="mt-7"><MagneticButton href="/contact">Contact the studio</MagneticButton></div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

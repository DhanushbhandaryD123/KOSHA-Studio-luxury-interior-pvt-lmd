import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { pricing } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent design fees: consultation sessions, design-only per sq ft, and turnkey delivery. No percentage-of-purchases model, ever.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        sheet="A-600"
        eyebrow="Pricing"
        title={<>Published rates.<br />No surprises.</>}
        lede="Design fees are printed here because we believe transparency is a design decision too. No percentage-of-purchases model — our incentive is never to make you buy more."
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-36">
        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {pricing.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col p-8 md:p-10 ${
                  t.featured
                    ? "bg-espresso text-linen shadow-plinth lg:-mt-6 lg:pb-16"
                    : "titleblock"
                }`}
              >
                <p className={`spec ${t.featured ? "text-brass-soft" : "text-brass"}`}>{t.name}</p>
                <p className="display mt-6 text-5xl">{t.price}</p>
                <p className={`spec mt-2 ${t.featured ? "text-linen/50" : "text-stone"}`}>{t.unit}</p>
                <p className={`mt-6 leading-relaxed ${t.featured ? "text-linen/70" : "text-stone"}`}>{t.body}</p>
                <ul className="mt-8 flex-1 space-y-3.5">
                  {t.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-3 text-sm">
                      <Check size={15} className={`mt-0.5 shrink-0 ${t.featured ? "text-brass-soft" : "text-brass"}`} />
                      {inc}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <MagneticButton href="/contact" variant={t.featured ? "brass" : "dark"}>
                    {t.name === "Consultation" ? "Book a session" : "Discuss this scope"}
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-14 max-w-2xl text-sm leading-relaxed text-stone">
            All fees exclusive of GST. Travel outside Karnataka is scheduled into the proposal, never invoiced as a surprise. Full commercial terms are shared before any agreement is signed — the common questions are answered in the{" "}
            <Link href="/faq" className="text-brass underline underline-offset-4">FAQ</Link>.
          </p>
        </Reveal>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { careers, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at KOSHA Studio, Bengaluru — interior designers, architects, visualizers and site engineers who care about the tenth year, not the handover photo.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        sheet="A-950"
        eyebrow="Careers"
        title={<>Work where craft<br />pays properly.</>}
        lede="We are forty people who argue about shadow gaps and win awards for restraint. If your portfolio shows what you removed, not just what you added — write to us."
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="divide-y divide-espresso/12 border-y border-espresso/12">
              {careers.map((c, i) => (
                <Reveal key={c.role} delay={i * 0.05}>
                  <a
                    href={`mailto:${site.email}?subject=Application%20—%20${encodeURIComponent(c.role)}`}
                    className="group grid gap-3 py-8 transition-colors hover:bg-plaster-deep md:grid-cols-[1fr_auto] md:items-center md:px-4"
                  >
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                        <h2 className="display text-2xl transition-colors group-hover:text-brass md:text-3xl">{c.role}</h2>
                        <span className="spec text-stone">{c.type} · {c.exp}</span>
                      </div>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone">{c.body}</p>
                    </div>
                    <span className="spec inline-flex items-center gap-2 text-brass">
                      Apply <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15} className="lg:col-span-3 lg:col-start-10">
            <div className="titleblock p-8">
              <Eyebrow>How to apply</Eyebrow>
              <p className="mt-5 text-sm leading-relaxed text-stone">
                One email to {site.email}: a portfolio under 20 MB, three lines on why this studio, and one project you would have designed differently — including one of ours.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone">
                No role that fits? Send it anyway. Two of our current leads arrived that way.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

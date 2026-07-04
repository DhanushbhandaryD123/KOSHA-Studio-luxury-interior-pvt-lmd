import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealImage } from "@/components/Reveal";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal",
  description: "Field notes from the KOSHA studio — on light, materials, open plans, coastal building and how honest sites are run.",
  alternates: { canonical: "/blog" },
};

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  const [lead, ...rest] = blogPosts;
  return (
    <>
      <PageHeader
        sheet="A-800"
        eyebrow="Journal"
        title={<>Field notes<br />from the studio.</>}
        lede="What we learn on site, written down before we forget it. On light, materials, and the unglamorous logistics of honest building."
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-36">
        {/* lead article: full-width split */}
        <Link href={`/blog/${lead.slug}`} className="group mb-20 grid gap-8 lg:grid-cols-12 lg:items-end">
          <RevealImage className="lg:col-span-7">
            <div className="curtain relative aspect-[16/9]">
              <Image src={lead.cover} alt={lead.title} fill priority sizes="(max-width:1024px) 100vw, 58vw" className="object-cover" />
            </div>
          </RevealImage>
          <div className="lg:col-span-5">
            <Reveal><p className="spec text-brass">Latest · {fmt(lead.date)} · {lead.read}</p></Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-4 text-3xl leading-tight transition-colors group-hover:text-brass md:text-5xl">{lead.title}</h2>
            </Reveal>
            <Reveal delay={0.14}><p className="mt-5 leading-relaxed text-stone">{lead.excerpt}</p></Reveal>
            <Reveal delay={0.2}>
              <span className="spec mt-6 inline-flex items-center gap-2 text-brass">Read note <ArrowUpRight size={14} /></span>
            </Reveal>
          </div>
        </Link>

        {/* the rest: ledger rows */}
        <div className="divide-y divide-espresso/12 border-y border-espresso/12">
          {rest.map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.04}>
              <Link href={`/blog/${b.slug}`} className="group grid items-center gap-5 py-8 transition-colors hover:bg-plaster-deep md:grid-cols-[130px_1fr_1fr_auto] md:gap-10 md:px-4">
                <div className="relative hidden aspect-[4/3] overflow-hidden md:block">
                  <Image src={b.cover} alt="" fill sizes="130px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="display text-2xl transition-colors group-hover:text-brass">{b.title}</h3>
                <p className="text-sm leading-relaxed text-stone">{b.excerpt}</p>
                <div className="spec text-stone md:text-right">
                  {fmt(b.date)}<br />{b.read}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

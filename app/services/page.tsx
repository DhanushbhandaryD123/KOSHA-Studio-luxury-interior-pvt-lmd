import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal, RevealImage } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { services, img } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Interior design, architecture, space planning, furniture and lighting design, landscape, 3D visualization, renovation and turnkey delivery — one studio, one drawing set.",
  alternates: { canonical: "/services" },
};

const sectors = [
  { href: "/services/residential", title: "Residential", body: "Villas, apartments, penthouses and weekend homes — full-scope interiors and architecture.", image: img.living1, spec: "S-201" },
  { href: "/services/commercial", title: "Commercial", body: "Offices, hotels, restaurants, retail and clinics — spaces that must perform every single day.", image: img.rest1, spec: "S-202" },
  { href: "/services/architecture", title: "Architecture", body: "Ground-up buildings designed climate-first, from plot study to occupation certificate.", image: img.villa3, spec: "S-203" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        sheet="A-200"
        eyebrow="Services"
        title={<>Everything a project<br />needs, under one roof.</>}
        lede="From the first plot walk to the one-year care visit — ten disciplines coordinated in a single drawing set, so nothing is lost between consultants."
      />

      {/* three sectors — alternating split rows, each different */}
      <section className="mx-auto max-w-[1400px] space-y-24 px-5 pb-24 md:px-10 md:pb-36">
        {sectors.map((s, i) => (
          <div key={s.href} className={`grid items-center gap-10 lg:grid-cols-12`}>
            <RevealImage className={i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-6 lg:order-2 lg:col-start-7"}>
              <Link href={s.href} className="group block">
                <div className={`curtain relative ${i === 1 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <Image src={s.image} alt={`${s.title} projects by KOSHA`} fill sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" priority={i === 0} />
                </div>
              </Link>
            </RevealImage>
            <div className={i % 2 === 0 ? "lg:col-span-4 lg:col-start-9" : "lg:col-span-5 lg:order-1"}>
              <Reveal><p className="spec text-stone">Sheet {s.spec}</p></Reveal>
              <Reveal delay={0.06}>
                <h2 className="display mt-4 text-4xl md:text-5xl">{s.title}</h2>
              </Reveal>
              <Reveal delay={0.12}><p className="mt-5 leading-relaxed text-stone">{s.body}</p></Reveal>
              <Reveal delay={0.18}>
                <Link href={s.href} className="spec mt-7 inline-flex items-center gap-2 text-brass transition-colors hover:text-espresso">
                  Explore {s.title.toLowerCase()} <ArrowUpRight size={14} />
                </Link>
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      {/* full discipline index */}
      <section className="bg-espresso py-24 text-linen md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal><Eyebrow light>The full index</Eyebrow></Reveal>
          <Reveal delay={0.08}><h2 className="display mt-5 text-4xl md:text-6xl">Ten disciplines</h2></Reveal>
          <div className="mt-14 grid gap-px overflow-hidden bg-linen/12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <div className="group h-full bg-espresso p-8 transition-colors hover:bg-espresso-soft">
                  <p className="spec text-brass-soft">{s.index}</p>
                  <h3 className="display mt-4 text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-linen/60">{s.brief}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-14"><MagneticButton href="/contact" variant="brass">Discuss your scope</MagneticButton></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

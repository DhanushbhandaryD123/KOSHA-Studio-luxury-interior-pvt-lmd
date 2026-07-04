import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal, RevealImage } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ProjectCard } from "@/components/ProjectCard";
import { Testimonials } from "@/components/Testimonials";
import { ProcessRail } from "@/components/ProcessRail";
import { MagneticButton } from "@/components/MagneticButton";
import { projects, services, stats, timeline, img } from "@/lib/data";

const featured = [
  projects.find((p) => p.slug === "the-quiet-house")!,
  projects.find((p) => p.slug === "hotel-elara")!,
  projects.find((p) => p.slug === "brasserie-noon")!,
  projects.find((p) => p.slug === "sona-penthouse")!,
  projects.find((p) => p.slug === "house-of-courtyards")!,
];

const igTiles = [img.detail1, img.kitchen1, img.rest2, img.bedroom1, img.detail6, img.villa2];

export default function Home() {
  return (
    <>
      <Hero />

      <Marquee
        items={[
          "Residential", "Luxury Villas", "Hotels", "Restaurants", "Offices",
          "Architecture", "Landscape", "Furniture", "Renovation", "Turnkey",
        ]}
      />

      {/* ── Intro: editorial split, image offset off-grid ─────────── */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal><Eyebrow>The studio</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-6 text-4xl leading-tight md:text-6xl">
                We remove more<br />than we add.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-md leading-relaxed text-stone">
                Since 2014, KOSHA has designed homes, hotels and workplaces across India with one measure of success: does the space feel calmer in its tenth year than on the day of handover?
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-5 max-w-md leading-relaxed text-stone">
                That means climate-first plans, materials that age forward, and a drawing set thick enough that the site holds no surprises.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10">
                <MagneticButton href="/about">Our story</MagneticButton>
              </div>
            </Reveal>
          </div>
          <div className="relative lg:col-span-6">
            <RevealImage className="ml-auto w-[86%]">
              <div className="relative aspect-[4/5]">
                <Image src={img.living2} alt="Restored heritage living room in teak and lime wash" fill sizes="(max-width:1024px) 90vw, 45vw" className="object-cover" />
              </div>
            </RevealImage>
            <RevealImage delay={0.2} className="absolute -bottom-12 left-0 hidden w-[44%] shadow-plinth md:block">
              <div className="relative aspect-square">
                <Image src={img.detail5} alt="Joinery detail in walnut and brass" fill sizes="25vw" className="object-cover" />
              </div>
            </RevealImage>
            <p className="spec absolute -bottom-6 right-0 text-stone md:bottom-2">Heritage Bungalow Revival · 2025</p>
          </div>
        </div>
      </section>

      {/* ── Stats: dark band with counters as a title block ───────── */}
      <section className="bg-espresso py-20 text-linen md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="titleblock titleblock--light grid divide-y divide-linen/12 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="p-8 md:p-10">
                <p className="display text-6xl text-brass-soft md:text-7xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="spec mt-4 text-linen/55">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services: index list, each row a different rhythm ─────── */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal><Eyebrow>What we do</Eyebrow></Reveal>
            <Reveal delay={0.08}><h2 className="display mt-5 text-4xl md:text-6xl">Ten disciplines,<br />one drawing set.</h2></Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link href="/services" className="spec inline-flex items-center gap-2 text-brass hover:text-espresso transition-colors">
              All services <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
        <div className="divide-y divide-espresso/12 border-y border-espresso/12">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link
                href="/services"
                className="group grid items-baseline gap-2 py-7 transition-colors hover:bg-plaster-deep md:grid-cols-[80px_1fr_1.2fr_40px] md:gap-8 md:px-4"
              >
                <span className="spec text-brass">{s.index}</span>
                <span className="display text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">{s.title}</span>
                <span className="text-sm leading-relaxed text-stone">{s.brief}</span>
                <ArrowUpRight size={18} className="hidden justify-self-end text-brass opacity-0 transition-opacity group-hover:opacity-100 md:block" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Featured projects: handcrafted asymmetric grid ────────── */}
      <section className="bg-plaster-deep py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="mb-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <Reveal><Eyebrow>Selected work</Eyebrow></Reveal>
              <Reveal delay={0.08}><h2 className="display mt-5 text-4xl md:text-6xl">Five sheets<br />from the archive.</h2></Reveal>
            </div>
            <Reveal delay={0.15}><MagneticButton href="/projects" variant="dark">All 30 projects</MagneticButton></Reveal>
          </div>

          {/* row 1: wide + narrow */}
          <div className="grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-7"><ProjectCard p={featured[0]} ratio="aspect-[16/10]" priority /></Reveal>
            <Reveal delay={0.1} className="lg:col-span-5 lg:mt-24"><ProjectCard p={featured[1]} ratio="aspect-[4/5]" /></Reveal>
          </div>
          {/* row 2: three uneven columns */}
          <div className="mt-8 grid gap-8 lg:mt-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-4 lg:mt-16"><ProjectCard p={featured[2]} ratio="aspect-square" /></Reveal>
            <Reveal delay={0.08} className="lg:col-span-5"><ProjectCard p={featured[3]} ratio="aspect-[3/4]" /></Reveal>
            <Reveal delay={0.16} className="lg:col-span-3 lg:mt-32"><ProjectCard p={featured[4]} ratio="aspect-[5/7]" /></Reveal>
          </div>
        </div>
      </section>

      {/* ── Interactive process rail ───────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal><Eyebrow>How a project runs</Eyebrow></Reveal>
        <div className="mt-5 mb-14 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.08}><h2 className="display text-4xl md:text-6xl">Five phases.<br />Zero fog.</h2></Reveal>
          <Reveal delay={0.15}>
            <Link href="/process" className="spec inline-flex items-center gap-2 text-brass hover:text-espresso transition-colors">
              The full process <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.1}><ProcessRail /></Reveal>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────── */}
      <section className="border-y border-espresso/12 bg-linen py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal><Eyebrow>Client words</Eyebrow></Reveal>
          <Reveal delay={0.1}><div className="mt-8"><Testimonials /></div></Reveal>
        </div>
      </section>

      {/* ── Timeline: horizontal ledger ────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal><Eyebrow>Since 2014</Eyebrow></Reveal>
        <Reveal delay={0.08}><h2 className="display mt-5 text-4xl md:text-6xl">Twelve years,<br />one obsession.</h2></Reveal>
        <div className="mt-14 overflow-x-auto pb-4">
          <ol className="flex min-w-max gap-0 border-l border-espresso/15">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <li className="w-64 border-r border-espresso/15 px-6 py-2 md:w-72">
                  <p className="display text-5xl text-brass">{t.year}</p>
                  <p className="mt-5 text-sm leading-relaxed text-stone">{t.event}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Instagram band ─────────────────────────────────────────── */}
      <section className="bg-espresso py-20 text-linen md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Reveal>
              <a href="https://instagram.com/kosha.studio" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3">
                <Instagram size={20} className="text-brass-soft" strokeWidth={1.5} />
                <span className="display text-3xl md:text-4xl transition-colors group-hover:text-brass-soft">@kosha.studio</span>
              </a>
            </Reveal>
            <Reveal delay={0.1}><p className="spec text-linen/50">Site diaries · details · works in progress</p></Reveal>
          </div>
          <div className="grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
            {igTiles.map((src, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <a href="https://instagram.com/kosha.studio" target="_blank" rel="noopener noreferrer" className="curtain group relative block aspect-square overflow-hidden">
                  <Image src={src} alt="KOSHA on Instagram — project detail" fill sizes="(max-width:768px) 33vw, 16vw" className="object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center bg-espresso/0 transition-colors duration-300 group-hover:bg-espresso/40">
                    <ArrowUpRight size={20} className="text-linen opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="titleblock grid gap-10 p-8 md:grid-cols-[1.4fr_1fr] md:p-14">
          <div>
            <Reveal><Eyebrow>Start a project</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-4xl leading-tight md:text-6xl">
                Bring us the plot,<br />the plan, or the problem.
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col justify-end gap-5">
            <Reveal delay={0.14}>
              <p className="leading-relaxed text-stone">
                Every engagement begins with a two-hour consultation — at your site or our Lavelle Road studio. You leave with a written direction note either way.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <MagneticButton href="/contact" variant="brass">Book a consultation</MagneticButton>
                <MagneticButton href="/pricing">See pricing</MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

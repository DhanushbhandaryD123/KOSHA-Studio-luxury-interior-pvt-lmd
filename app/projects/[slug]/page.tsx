import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal, RevealImage } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { MagneticButton } from "@/components/MagneticButton";
import { projects, site } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.category}, ${p.location}`,
    description: p.story.slice(0, 155),
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title: p.name, description: p.story.slice(0, 155), images: [p.cover] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = projects.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const p = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.name,
    creator: { "@type": "Organization", name: "KOSHA Studio", url: site.url },
    locationCreated: p.location,
    dateCreated: p.year,
    description: p.story,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* header: title left, title-block spec sheet right */}
      <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-32 md:px-10 md:pt-44">
        <Reveal>
          <Link href="/projects" className="spec inline-flex items-center gap-2 text-stone transition-colors hover:text-brass">
            <ArrowLeft size={13} /> All projects
          </Link>
        </Reveal>
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal delay={0.06}><Eyebrow>{p.category} · {p.year}</Eyebrow></Reveal>
            <Reveal delay={0.12}><h1 className="display mt-5 text-5xl md:text-7xl">{p.name}</h1></Reveal>
            <Reveal delay={0.18}><p className="mt-4 text-lg text-stone">{p.location}</p></Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4">
            <dl className="titleblock grid grid-cols-2 divide-x divide-espresso/15">
              <div className="p-5">
                <dt className="spec text-stone">Area</dt>
                <dd className="display mt-1.5 text-xl">{p.area}</dd>
              </div>
              <div className="p-5">
                <dt className="spec text-stone">Budget</dt>
                <dd className="display mt-1.5 text-xl">{p.budget}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* cover */}
      <section className="mx-auto max-w-[1400px] px-5 md:px-10">
        <RevealImage>
          <div className="relative aspect-[21/10]">
            <Image src={p.cover} alt={`${p.name}, ${p.location}`} fill priority sizes="100vw" className="object-cover" />
          </div>
        </RevealImage>
      </section>

      {/* story + materials */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <Reveal><Eyebrow>Client story</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <p className="display mt-6 text-2xl leading-snug md:text-3xl">{p.story}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-3 lg:col-start-9">
            <Reveal delay={0.1}>
              <p className="spec text-stone">Materials schedule</p>
              <ul className="mt-5 divide-y divide-espresso/12 border-y border-espresso/12">
                {p.materials.map((m, i) => (
                  <li key={m} className="flex items-baseline gap-4 py-3.5">
                    <span className="spec text-brass">M{i + 1}</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* gallery: staggered pair rows */}
      <section className="mx-auto max-w-[1400px] space-y-8 px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-12">
          <RevealImage className="md:col-span-7">
            <div className="relative aspect-[4/3]"><Image src={p.images[1]} alt={`${p.name} — interior view`} fill sizes="(max-width:768px) 100vw, 58vw" className="object-cover" /></div>
          </RevealImage>
          <RevealImage delay={0.12} className="md:col-span-5 md:mt-20">
            <div className="relative aspect-[3/4]"><Image src={p.images[2]} alt={`${p.name} — material detail`} fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" /></div>
          </RevealImage>
        </div>
        <RevealImage className="md:mx-24">
          <div className="relative aspect-[16/9]"><Image src={p.images[3]} alt={`${p.name} — living space`} fill sizes="(max-width:768px) 100vw, 80vw" className="object-cover" /></div>
        </RevealImage>
      </section>

      {/* before / after when available */}
      {p.before && p.after && (
        <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <Reveal><Eyebrow>Before / After</Eyebrow></Reveal>
          <Reveal delay={0.08}><h2 className="display mb-10 mt-5 text-3xl md:text-5xl">Drag the line.</h2></Reveal>
          <Reveal delay={0.12}><BeforeAfter before={p.before} after={p.after} name={p.name} /></Reveal>
        </section>
      )}

      {/* prev / next rail */}
      <nav aria-label="More projects" className="border-t border-espresso/12">
        <div className="mx-auto grid max-w-[1400px] divide-y divide-espresso/12 px-5 md:grid-cols-2 md:divide-x md:divide-y-0 md:px-10">
          <Link href={`/projects/${prev.slug}`} className="group flex items-center gap-5 py-10 pr-8 transition-colors hover:bg-plaster-deep md:py-14">
            <ArrowLeft size={20} className="text-brass transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="spec text-stone">Previous</span>
              <span className="display block text-2xl md:text-3xl">{prev.name}</span>
            </span>
          </Link>
          <Link href={`/projects/${next.slug}`} className="group flex items-center justify-end gap-5 py-10 pl-8 text-right transition-colors hover:bg-plaster-deep md:py-14">
            <span>
              <span className="spec text-stone">Next</span>
              <span className="display block text-2xl md:text-3xl">{next.name}</span>
            </span>
            <ArrowRight size={20} className="text-brass transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 className="display text-3xl md:text-4xl">A project like this in mind?</h2>
          <MagneticButton href="/contact" variant="brass">Book a consultation</MagneticButton>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal, RevealImage } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { processSteps, img } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Process",
  description: "Five phases from first meeting to handover — Listen, Concept, Develop, Build, Handover. How a KOSHA project runs with zero fog.",
  alternates: { canonical: "/process" },
};

const phaseImages = [img.detail5, img.detail6, img.detail4, img.detail3, img.living1];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        sheet="A-500"
        eyebrow="Process"
        title={<>Five phases.<br />Zero fog.</>}
        lede="Most construction disputes begin in fog — a fortnight where nobody quite knows what happened, followed by a bill. Our process is engineered to make fog impossible."
      />

      <section className="mx-auto max-w-[1400px] space-y-24 px-5 pb-24 md:px-10 md:space-y-32 md:pb-36">
        {processSteps.map((s, i) => (
          <div key={s.phase} className="grid items-center gap-10 lg:grid-cols-12">
            <div className={i % 2 === 0 ? "lg:col-span-5" : "lg:order-2 lg:col-span-5 lg:col-start-8"}>
              <Reveal>
                <div className="flex items-baseline gap-6">
                  <span className="display text-7xl text-brass/40 md:text-8xl">{String(i + 1).padStart(2, "0")}</span>
                  <span className="spec text-stone">{s.weeks}</span>
                </div>
              </Reveal>
              <Reveal delay={0.08}><h2 className="display mt-2 text-4xl md:text-5xl">{s.title}</h2></Reveal>
              <Reveal delay={0.14}><p className="mt-6 max-w-md leading-relaxed text-stone">{s.body}</p></Reveal>
            </div>
            <RevealImage delay={0.1} className={i % 2 === 0 ? "lg:col-span-6 lg:col-start-7" : "lg:order-1 lg:col-span-6"}>
              <div className={`relative ${i % 2 === 0 ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
                <Image src={phaseImages[i]} alt={`${s.title} phase — KOSHA process`} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" priority={i === 0} />
              </div>
            </RevealImage>
          </div>
        ))}
      </section>

      <section className="bg-espresso py-24 text-linen md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal><Eyebrow light>The Friday log</Eyebrow></Reveal>
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <Reveal delay={0.08} className="lg:col-span-7">
              <h2 className="display text-3xl leading-snug md:text-5xl">
                Every site publishes a photographed progress log, every Friday, before the weekend.
              </h2>
            </Reveal>
            <div className="space-y-5 leading-relaxed text-linen/70 lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.14}><p>Forty to sixty annotated photographs: what was done, what slipped, what decision is needed by Tuesday.</p></Reveal>
              <Reveal delay={0.2}><p>Clients stopped asking what is happening — because the answer arrives before the question.</p></Reveal>
              <Reveal delay={0.26}><MagneticButton href="/contact" variant="brass">Start phase one</MagneticButton></Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

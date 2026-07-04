import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal, RevealImage } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { awards, timeline, img } from "@/lib/data";

export const metadata: Metadata = {
  title: "About the Studio",
  description: "KOSHA is a 40-person interior design and architecture studio founded in Bengaluru in 2014. Our story, values, awards and the people behind 120+ projects.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Quiet over loud", body: "A room should never compete with the life inside it. We design for the tenth year, not the handover photograph." },
  { title: "Climate before style", body: "Sun path, breeze, and monsoon decide the plan before any moodboard does. A beautiful room that fights its climate loses daily." },
  { title: "Material honesty", body: "Laterite looks like laterite. Brass is allowed to darken. Nothing on our sites pretends to be something it is not." },
  { title: "Fog-free delivery", body: "Every site publishes a photographed Friday log. Budget, schedule and drawings tell one story from day one." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        sheet="A-100"
        eyebrow="The studio"
        title={<>A studio built<br />above a timber yard.</>}
        lede="KOSHA began in 2014 in a single room in Shivajinagar, Bengaluru, over a yard that sold reclaimed teak. Twelve years and 120 projects later, the smell of cut timber is still the standard everything else must meet."
      />

      {/* story: offset editorial images */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-36">
        <div className="grid gap-10 lg:grid-cols-12">
          <RevealImage className="lg:col-span-7">
            <div className="relative aspect-[16/10]">
              <Image src={img.detail3} alt="Rammed earth wall in the KOSHA material library" fill sizes="(max-width:1024px) 100vw, 58vw" className="object-cover" priority />
            </div>
          </RevealImage>
          <RevealImage delay={0.15} className="lg:col-span-5 lg:mt-28">
            <div className="relative aspect-[4/5]">
              <Image src={img.detail1} alt="Stairwell in plaster and brass, The Quiet House" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </RevealImage>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow>Our story</Eyebrow></Reveal>
            <Reveal delay={0.08}><h2 className="display mt-5 text-4xl md:text-5xl">Why we exist</h2></Reveal>
          </div>
          <div className="space-y-6 leading-relaxed text-stone lg:col-span-6 lg:col-start-6">
            <Reveal><p>Our founders — an architect and a furniture maker — kept meeting the same client: someone who had spent real money on a home and ended up with a showroom. Impressive at the housewarming, exhausting by the second monsoon.</p></Reveal>
            <Reveal delay={0.06}><p>KOSHA (Sanskrit: a vessel, a sheath, a treasury) was founded on the opposite promise. A home is a container for a life, and the container should hold still so the life can move. Everything we have built since — the climate-first plans, the in-house workshop, the Friday photo logs — exists to keep that promise at scale.</p></Reveal>
            <Reveal delay={0.12}><p>Today we are a forty-person studio of architects, interior designers, site engineers and six master carpenters, working from Bengaluru across nine Indian states.</p></Reveal>
          </div>
        </div>
      </section>

      {/* mission / vision as a split ledger */}
      <section className="bg-espresso py-24 text-linen md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-px overflow-hidden bg-linen/12 px-5 md:grid-cols-2 md:px-10">
          <div className="bg-espresso py-12 md:pr-14">
            <p className="spec text-brass-soft">Mission</p>
            <p className="display mt-6 text-3xl leading-snug md:text-4xl">
              To build spaces that grow calmer with use — through climate-first design, honest materials, and fog-free delivery.
            </p>
          </div>
          <div className="bg-espresso py-12 md:pl-14">
            <p className="spec text-brass-soft">Vision</p>
            <p className="display mt-6 text-3xl leading-snug md:text-4xl">
              An India where the best-crafted rooms are also the longest-lasting ones — and where craft pays its craftspeople well.
            </p>
          </div>
        </div>
      </section>

      {/* values: 2x2 uneven */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal><Eyebrow>What we hold to</Eyebrow></Reveal>
        <Reveal delay={0.08}><h2 className="display mt-5 max-w-2xl text-4xl md:text-6xl">Four rules older than the studio.</h2></Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07} className={i % 2 === 1 ? "md:mt-14" : ""}>
              <div className="titleblock h-full p-8 transition-colors hover:bg-plaster-deep md:p-10">
                <p className="spec text-brass">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-4 text-2xl md:text-3xl">{v.title}</h3>
                <p className="mt-4 leading-relaxed text-stone">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* awards ledger */}
      <section className="border-y border-espresso/12 bg-linen py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal><Eyebrow>Recognition</Eyebrow></Reveal>
          <Reveal delay={0.08}><h2 className="display mt-5 text-4xl md:text-6xl">Awards</h2></Reveal>
          <div className="mt-12 divide-y divide-espresso/12 border-y border-espresso/12">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="grid items-baseline gap-2 py-6 md:grid-cols-[100px_1fr_auto] md:gap-10">
                  <span className="display text-2xl text-brass">{a.year}</span>
                  <span className="text-lg">{a.title}</span>
                  <span className="spec text-stone">{a.project}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* timeline vertical on about */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow>Company timeline</Eyebrow></Reveal>
            <Reveal delay={0.08}><h2 className="display mt-5 text-4xl md:text-5xl">2014 → today</h2></Reveal>
            <Reveal delay={0.16}><div className="mt-10"><MagneticButton href="/careers" variant="brass">Join the studio</MagneticButton></div></Reveal>
          </div>
          <ol className="space-y-0 border-l border-espresso/15 lg:col-span-7 lg:col-start-6">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <li className="relative pb-10 pl-10">
                  <span aria-hidden className="absolute -left-[5px] top-2 size-2.5 rotate-45 bg-brass" />
                  <p className="display text-3xl">{t.year}</p>
                  <p className="mt-2 max-w-lg leading-relaxed text-stone">{t.event}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { MagneticButton } from "@/components/MagneticButton";
import { projects, type Category } from "@/lib/data";

export function SectorPage({
  sheet, eyebrow, title, lede, cats, scope, heroImage, heroAlt,
}: {
  sheet: string;
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  cats: Category[];
  scope: { title: string; body: string }[];
  heroImage: string;
  heroAlt: string;
}) {
  const work = projects.filter((p) => cats.includes(p.category)).slice(0, 6);
  const ratios = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/6]", "aspect-[4/5]", "aspect-square"];

  return (
    <>
      <PageHeader sheet={sheet} eyebrow={eyebrow} title={title} lede={lede} />

      <section className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image src={heroImage} alt={heroAlt} fill priority sizes="100vw" className="object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal><Eyebrow>Scope of work</Eyebrow></Reveal>
        <div className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {scope.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="border-t border-espresso/15 pt-6">
                <p className="spec text-brass">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-3 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-plaster-deep py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <Reveal><h2 className="display text-4xl md:text-5xl">Built work</h2></Reveal>
            <Reveal delay={0.1}><MagneticButton href="/projects">All projects</MagneticButton></Reveal>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06} className={i % 3 === 1 ? "lg:mt-12" : ""}>
                <ProjectCard p={p} ratio={ratios[i % ratios.length]} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

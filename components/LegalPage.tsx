import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export function LegalPage({
  sheet, eyebrow, title, updated, sections,
}: {
  sheet: string;
  eyebrow: string;
  title: string;
  updated: string;
  sections: { h: string; p: string[] }[];
}) {
  return (
    <>
      <PageHeader sheet={sheet} eyebrow={eyebrow} title={title} lede={`Last updated ${updated}. Written to be read, not to be skipped.`} />
      <section className="mx-auto max-w-[860px] px-5 pb-24 md:pb-36">
        <div className="space-y-14">
          {sections.map((s, i) => (
            <Reveal key={s.h} delay={Math.min(i * 0.03, 0.12)}>
              <div className="grid gap-4 md:grid-cols-[56px_1fr]">
                <span className="spec pt-2 text-brass">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="display text-2xl md:text-3xl">{s.h}</h2>
                  {s.p.map((para, j) => (
                    <p key={j} className="mt-4 leading-relaxed text-stone">{para}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  lede,
  sheet,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  sheet: string; // architectural sheet number, e.g. "A-201"
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-32 md:px-10 md:pb-20 md:pt-44">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.08}>
            <h1 className="display mt-5 max-w-4xl text-5xl md:text-7xl lg:text-8xl">{title}</h1>
          </Reveal>
          {lede && (
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-stone md:text-lg">{lede}</p>
            </Reveal>
          )}
        </div>
        <Reveal delay={0.2}>
          <p className="spec hidden text-stone md:block">Sheet {sheet} · KOSHA</p>
        </Reveal>
      </div>
    </section>
  );
}

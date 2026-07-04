export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-espresso/12 bg-plaster-deep py-5" aria-hidden>
      <div className="flex w-max animate-marquee gap-12 motion-reduce:animate-none">
        {row.map((t, i) => (
          <span key={i} className="spec flex items-center gap-12 whitespace-nowrap text-stone">
            {t}
            <span className="inline-block size-1.5 rotate-45 bg-brass" />
          </span>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

/* Title-block card — every project reads like an architect's drawing sheet */
export function ProjectCard({ p, ratio = "aspect-[4/5]", priority = false }: { p: Project; ratio?: string; priority?: boolean }) {
  return (
    <Link href={`/projects/${p.slug}`} className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass">
      <div className={`curtain relative ${ratio} bg-plaster-deep`}>
        <Image
          src={p.cover}
          alt={`${p.name} — ${p.category} in ${p.location}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="spec absolute left-4 top-4 bg-linen/90 px-3 py-1.5 text-espresso backdrop-blur-sm">
          {p.category}
        </span>
      </div>
      <div className="titleblock mt-0 flex items-stretch justify-between border-t-0">
        <div className="px-4 py-4 md:px-5">
          <h3 className="display text-xl md:text-2xl transition-colors group-hover:text-brass">{p.name}</h3>
          <p className="mt-1 text-sm text-stone">{p.location}</p>
        </div>
        <div className="flex flex-col items-end justify-between border-l border-espresso/15 px-4 py-4">
          <span className="spec text-stone">{p.year}</span>
          <span className="spec text-stone">{p.area}</span>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2 text-sm text-brass opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        View project <ArrowUpRight size={14} />
      </div>
    </Link>
  );
}

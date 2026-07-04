"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects, type Category } from "@/lib/data";

const cats: ("All" | Category)[] = [
  "All", "Villa", "Apartment", "Residential", "Office", "Hotel",
  "Restaurant", "Retail", "Architecture", "Landscape", "Renovation", "Commercial",
];

/* Ratios cycle so no two neighbouring cards share a height — a handcrafted rhythm */
const ratios = [
  "aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/6]",
  "aspect-[4/5]", "aspect-[1/1.15]", "aspect-square", "aspect-[3/4]",
];
const offsets = ["", "lg:mt-16", "lg:mt-8", "lg:mt-0", "lg:mt-12", "lg:mt-4"];

export function ProjectsExplorer() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const list = useMemo(
    () => (cat === "All" ? projects : projects.filter((p) => p.category === cat)),
    [cat]
  );

  return (
    <>
      <div className="mb-12 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
        {cats.map((c) => {
          const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`spec px-4 py-2.5 transition-colors focus-visible:outline-2 focus-visible:outline-brass ${
                cat === c ? "bg-espresso text-linen" : "border border-espresso/20 hover:border-brass hover:text-brass"
              }`}
            >
              {c} <span className="opacity-50">{count}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.div
              layout
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: [0.19, 1, 0.22, 1] }}
              className={offsets[i % offsets.length]}
            >
              <ProjectCard p={p} ratio={ratios[i % ratios.length]} priority={i < 3} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

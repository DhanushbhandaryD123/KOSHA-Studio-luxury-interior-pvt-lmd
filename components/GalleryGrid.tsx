"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "@/lib/data";

const cats = ["All", "Residential", "Hospitality", "Architecture", "Workspace", "Details"];

export function GalleryGrid() {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const items = cat === "All" ? galleryItems : galleryItems.filter((g) => g.cat === cat);

  const step = useCallback(
    (d: number) => setActive((a) => (a === null ? a : (a + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, step]);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery">
        {cats.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => { setCat(c); setActive(null); }}
            className={`spec px-4 py-2.5 transition-colors focus-visible:outline-2 focus-visible:outline-brass ${
              cat === c ? "bg-espresso text-linen" : "border border-espresso/20 hover:border-brass hover:text-brass"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {items.map((g, i) => (
            <motion.button
              layout
              key={g.src + g.alt}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45 }}
              onClick={() => setActive(i)}
              className={`group relative mb-5 block w-full break-inside-avoid overflow-hidden bg-plaster-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass ${
                g.tall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
              aria-label={`Open image: ${g.alt}`}
            >
              <Image src={g.src} alt={g.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              <span className="absolute inset-0 bg-espresso/0 transition-colors duration-300 group-hover:bg-espresso/25" />
              <span className="spec absolute bottom-4 left-4 translate-y-3 bg-linen/90 px-3 py-1.5 text-espresso opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {g.cat}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active !== null && items[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-espresso/95 p-5 md:p-14"
            role="dialog"
            aria-modal="true"
            aria-label={items[active].alt}
            onClick={() => setActive(null)}
          >
            <button className="absolute right-5 top-5 p-2 text-linen/80 hover:text-linen" aria-label="Close" onClick={() => setActive(null)}>
              <X size={26} strokeWidth={1.5} />
            </button>
            <button className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-linen/70 hover:text-linen md:left-8" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); step(-1); }}>
              <ChevronLeft size={30} strokeWidth={1.2} />
            </button>
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-linen/70 hover:text-linen md:right-8" aria-label="Next image" onClick={(e) => { e.stopPropagation(); step(1); }}>
              <ChevronRight size={30} strokeWidth={1.2} />
            </button>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="relative h-[78vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={items[active].src} alt={items[active].alt} fill sizes="90vw" className="object-contain" />
              <p className="spec absolute -bottom-9 left-0 text-linen/60">
                {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")} — {items[active].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

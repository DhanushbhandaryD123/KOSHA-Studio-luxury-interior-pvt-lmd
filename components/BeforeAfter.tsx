"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export function BeforeAfter({ before, after, name }: { before: string; after: string; name: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(96, Math.max(4, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[16/9] cursor-ew-resize select-none overflow-hidden"
      onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
      onMouseDown={(e) => move(e.clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
      role="slider"
      aria-label={`Before and after comparison, ${name}`}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 5));
        if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 5));
      }}
    >
      <Image src={after} alt={`${name} — after`} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={`${name} — before`} fill sizes="100vw" className="object-cover grayscale" />
        <span className="spec absolute left-4 top-4 bg-espresso/80 px-3 py-1.5 text-linen">Before</span>
      </div>
      <span className="spec absolute right-4 top-4 bg-linen/90 px-3 py-1.5 text-espresso">After</span>
      <div aria-hidden className="absolute inset-y-0 w-px bg-linen" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-linen bg-espresso/70 text-linen backdrop-blur-sm">
          ⇔
        </span>
      </div>
    </div>
  );
}

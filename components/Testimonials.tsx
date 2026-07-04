"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const t = testimonials[i];

  const go = (d: number) => {
    setDir(d);
    setI((v) => (v + d + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      <span aria-hidden className="display pointer-events-none absolute -top-10 left-0 text-[9rem] leading-none text-brass/25 md:text-[13rem]">
        &ldquo;
      </span>
      <div className="min-h-[280px] md:min-h-[240px]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={i}
            custom={dir}
            initial={{ opacity: 0, x: dir * 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -36 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <blockquote className="display max-w-3xl pt-12 text-2xl leading-snug md:text-4xl">
              {t.quote}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span aria-hidden className="h-px w-10 bg-brass" />
              <span>
                <span className="block font-medium">{t.name}</span>
                <span className="spec text-stone">{t.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <button onClick={() => go(-1)} aria-label="Previous testimonial" className="flex size-12 items-center justify-center border border-espresso/25 transition-colors hover:border-brass hover:text-brass focus-visible:outline-2 focus-visible:outline-brass">
          <ArrowLeft size={17} strokeWidth={1.5} />
        </button>
        <button onClick={() => go(1)} aria-label="Next testimonial" className="flex size-12 items-center justify-center border border-espresso/25 transition-colors hover:border-brass hover:text-brass focus-visible:outline-2 focus-visible:outline-brass">
          <ArrowRight size={17} strokeWidth={1.5} />
        </button>
        <span className="spec ml-2 text-stone">
          {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

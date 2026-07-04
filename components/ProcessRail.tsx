"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

/* Interactive process — hover/focus a phase to expand it, like pulling one drawing from a set */
export function ProcessRail() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 lg:h-[440px] lg:flex-row">
      {processSteps.map((s, i) => {
        const open = active === i;
        return (
          <motion.button
            key={s.phase}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            animate={{ flexGrow: open ? 3.2 : 1 }}
            transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
            className={`titleblock relative flex min-h-[110px] basis-0 flex-col justify-between overflow-hidden p-5 text-left transition-colors md:p-6 ${
              open ? "bg-espresso text-linen" : "bg-transparent hover:bg-plaster-deep"
            } focus-visible:outline-2 focus-visible:outline-brass`}
            aria-expanded={open}
          >
            <div className="flex items-start justify-between gap-4">
              <span className={`spec ${open ? "text-brass-soft" : "text-brass"}`}>{s.phase}</span>
              <span className={`spec ${open ? "text-linen/50" : "text-stone"}`}>{s.weeks}</span>
            </div>
            <div>
              <span className="display block text-2xl md:text-3xl">{s.title}</span>
              <motion.p
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
                transition={{ duration: 0.4 }}
                className="mt-3 max-w-md overflow-hidden text-sm leading-relaxed text-linen/70"
              >
                {s.body}
              </motion.p>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

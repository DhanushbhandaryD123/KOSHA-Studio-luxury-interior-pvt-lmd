"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { img } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // mouse-tracked floating panel
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(useTransform(mx, [-0.5, 0.5], [18, -18]), { stiffness: 60, damping: 20 });
  const py = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), { stiffness: 60, damping: 20 });

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        if (reduce) return;
        mx.set(e.clientX / window.innerWidth - 0.5);
        my.set(e.clientY / window.innerHeight - 0.5);
      }}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso text-linen"
      aria-label="KOSHA — the architecture of stillness"
    >
      {/* cinematic background — swap for a hero video (see docs/video-prompts.md):
          <video autoPlay muted loop playsInline poster={img.heroA} className="absolute inset-0 h-full w-full object-cover" src="/hero.mp4" /> */}
      <motion.div style={{ y: reduce ? 0 : yBg }} className="absolute inset-0">
        <div className="absolute inset-0 animate-drift motion-reduce:animate-none">
          <Image
            src={img.heroA}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/45 to-espresso/25" />
      </motion.div>

      {/* floating detail panel — reacts to the mouse like a piece of furniture caught mid-air */}
      <motion.div
        style={{ x: px, y: py, opacity: fade }}
        className="titleblock titleblock--light absolute right-[6%] top-[16%] hidden w-64 lg:block xl:w-72"
        aria-hidden
      >
        <div className="relative aspect-[4/5]">
          <Image src={img.detail1} alt="" fill sizes="300px" className="object-cover" />
        </div>
        <p className="spec px-4 py-3 text-linen/70">Dtl 07 — Stair, brass & plaster</p>
      </motion.div>

      <motion.div style={{ y: reduce ? 0 : yText, opacity: fade }} className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-16 md:px-10 md:pb-24">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="spec text-brass-soft"
        >
          Interior Design · Architecture · Bengaluru, est. 2014
        </motion.p>

        <h1 className="display mt-6 text-[15vw] leading-[0.92] sm:text-7xl md:text-8xl lg:text-[7.2rem]">
          <Line delay={0.35}>The architecture</Line>
          <Line delay={0.5}><em className="not-italic text-brass-soft">of stillness.</em></Line>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="max-w-md leading-relaxed text-linen/75"
          >
            We design homes, hotels and workplaces that hold their silence — 120+ projects across nine Indian states, built to be quieter in year ten than on day one.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton href="/projects" variant="light">View projects</MagneticButton>
            <MagneticButton href="/contact" variant="brass">Book a consult</MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <ArrowDown size={18} className="animate-bounce text-linen/50 motion-reduce:animate-none" />
      </motion.div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.19, 1, 0.22, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

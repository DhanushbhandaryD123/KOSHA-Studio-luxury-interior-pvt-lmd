"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Studio" },
  { href: "/process", label: "Process" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

const menuLinks = [
  ...links,
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/careers", label: "Careers" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-plaster/90 backdrop-blur-md shadow-[0_1px_0_rgb(34_28_22/0.1)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
          <Link href="/" aria-label="KOSHA — home" className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass">
            <Logo className="h-7 w-auto md:h-8" />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`spec !text-[0.66rem] transition-colors hover:text-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass ${
                  pathname.startsWith(l.href) ? "text-brass" : "text-espresso"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="spec !text-[0.66rem] border border-espresso px-5 py-2.5 transition-colors hover:bg-espresso hover:text-linen focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
            >
              Book a consult
            </Link>
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden p-2 focus-visible:outline-2 focus-visible:outline-brass"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-espresso text-linen"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-5 py-4 md:px-10 md:py-5">
              <Logo className="h-7 w-auto" light />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 focus-visible:outline-2 focus-visible:outline-brass">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <nav aria-label="Menu" className="flex h-[calc(100%-80px)] flex-col justify-between px-5 pb-10 md:px-10">
              <ul className="mt-6 space-y-1">
                {menuLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.5 }}
                  >
                    <Link
                      href={l.href}
                      className="display group flex items-baseline gap-4 py-2 text-4xl md:text-5xl transition-colors hover:text-brass-soft"
                    >
                      <span className="spec text-brass-soft opacity-60">{String(i + 1).padStart(2, "0")}</span>
                      {l.label}
                      <ArrowUpRight size={20} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <p className="spec text-linen/50">Bengaluru · Goa · Mumbai — studio@kosha.studio</p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

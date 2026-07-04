import Link from "next/link";
import { Instagram, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { site } from "@/lib/data";

const cols = [
  {
    head: "Studio",
    items: [
      { href: "/about", label: "About & Story" },
      { href: "/process", label: "Process" },
      { href: "/careers", label: "Careers" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    head: "Work",
    items: [
      { href: "/projects", label: "Projects" },
      { href: "/gallery", label: "Gallery" },
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    head: "Connect",
    items: [
      { href: "/contact", label: "Contact" },
      { href: "/blog", label: "Journal" },
      { href: site.instagram, label: "Instagram" },
      { href: `mailto:${site.email}`, label: site.email },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-espresso text-linen">
      {/* newsletter band */}
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:px-10 md:py-20">
        <div>
          <p className="spec text-brass-soft">The Site Diary — monthly</p>
          <h2 className="display mt-4 text-3xl md:text-5xl">
            One project, opened up.<br />No promotions, ever.
          </h2>
        </div>
        <NewsletterForm />
      </div>

      <div className="border-t border-linen/10">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)] md:px-10">
          <div className="space-y-5">
            <Logo className="h-8 w-auto" light />
            <p className="max-w-xs text-sm leading-relaxed text-linen/60">
              Interior design & architecture studio.<br />
              {site.address}
            </p>
            <a
              href={site.instagram}
              className="inline-flex items-center gap-2 text-sm text-brass-soft hover:text-linen transition-colors"
              target="_blank" rel="noopener noreferrer"
            >
              <Instagram size={16} strokeWidth={1.5} /> @kosha.studio
            </a>
          </div>
          {cols.map((c) => (
            <nav key={c.head} aria-label={c.head}>
              <p className="spec text-linen/40">{c.head}</p>
              <ul className="mt-5 space-y-3">
                {c.items.map((i) => (
                  <li key={i.label}>
                    <Link href={i.href} className="group inline-flex items-center gap-1.5 text-sm text-linen/75 transition-colors hover:text-brass-soft">
                      {i.label}
                      <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* title block strip */}
      <div className="border-t border-linen/10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-5 py-6 md:px-10">
          <p className="spec text-linen/40">Sheet A-000 · KOSHA Studio · Rev 2026</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="spec text-linen/40 hover:text-linen/80 transition-colors">Privacy</Link>
            <Link href="/terms" className="spec text-linen/40 hover:text-linen/80 transition-colors">Terms</Link>
          </div>
          <p className="spec text-linen/40">© {new Date().getFullYear()} KOSHA Design LLP</p>
        </div>
      </div>
    </footer>
  );
}

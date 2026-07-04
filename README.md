# KOSHA — Luxury Interior Design & Architecture Studio

**The Architecture of Stillness.** A production-grade marketing website for a fictional
premium interior design and architecture studio, built with Next.js 15.

![Stack](https://img.shields.io/badge/Next.js-15-black) ![TS](https://img.shields.io/badge/TypeScript-strict-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8)

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build
```

Node 18.18+ required (Node 20 LTS recommended).

## Stack

| Layer      | Choice                                        |
|------------|-----------------------------------------------|
| Framework  | Next.js 15 (App Router, React 19, RSC)        |
| Language   | TypeScript (strict)                           |
| Styling    | Tailwind CSS v4 (`@theme` design tokens)      |
| Motion     | Framer Motion 12 (reduced-motion aware)       |
| Forms      | React Hook Form + Zod                         |
| Icons      | Lucide React                                  |
| Images     | next/image + Unsplash (swap with AI renders)  |
| Fonts      | Marcellus / Karla / IBM Plex Mono (next/font) |

## Pages

`/` Home · `/about` Studio & story, awards, timeline · `/services` (+ `/residential`, `/commercial`, `/architecture`) · `/projects` 30-project archive with filtering · `/projects/[slug]` detail with spec title-block, materials schedule, before/after slider · `/gallery` masonry + lightbox · `/process` · `/pricing` · `/blog` + `/blog/[slug]` · `/faq` (FAQ schema) · `/contact` (validated form, map, WhatsApp/call) · `/careers` · `/privacy` · `/terms` · custom `404`.

SEO: per-page metadata + canonical, Open Graph/Twitter, JSON-LD (ProfessionalService, Article, FAQPage, CreativeWork), `sitemap.xml`, `robots.txt` — all generated from `lib/data.ts`.

## Folder structure

```
app/                 # routes (App Router)
  layout.tsx         # fonts, metadata, org JSON-LD, skip link
  page.tsx           # home
  sitemap.ts robots.ts icon.svg not-found.tsx
  about/ services/ projects/[slug]/ gallery/ process/
  pricing/ blog/[slug]/ faq/ contact/ careers/ privacy/ terms/
components/          # UI system (Navbar, Footer, Hero, ProjectCard,
                     # GalleryGrid, ContactForm, BeforeAfter, ProcessRail…)
lib/data.ts          # single content source: 30 projects, services,
                     # testimonials, blog, FAQ, pricing, timeline
docs/                # brand guidelines, design system, AI image &
                     # video prompts, deployment guide
public/              # logo.svg / logo-dark.svg / monogram.svg
```

## Content & imagery

All copy is original. Images currently reference Unsplash for development;
`docs/image-prompts.md` and `docs/video-prompts.md` contain editorial-quality
AI generation prompts to produce a fully owned image/video set — then swap the
URLs in `lib/data.ts` (one file, everything updates).

To use a hero **video**: drop `public/hero.mp4` and uncomment the `<video>` block
in `components/Hero.tsx`.

## Design system

Documented in `docs/design-system.md` and encoded as Tailwind v4 tokens in
`app/globals.css` — palette (plaster/espresso/brass/stone), type scale,
the signature *title-block* framing device, motion easings, and a11y rules
(keyboard focus rings, `prefers-reduced-motion`, semantic landmarks, skip link).

## Deployment

Vercel: push the repo, import, deploy — zero config. Update `site.url` in
`lib/data.ts` to the production domain (drives canonical URLs, sitemap, OG).
Full guide in `docs/deployment.md`.

---
© 2026 KOSHA Design LLP (fictional brand created for this project).

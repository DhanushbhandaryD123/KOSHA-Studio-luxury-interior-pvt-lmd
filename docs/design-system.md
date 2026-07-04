# KOSHA Design System — Engineering Reference

Tokens live in `app/globals.css` under `@theme` (Tailwind v4) and are consumed
as utilities: `bg-plaster`, `text-espresso`, `text-brass`, `bg-linen`, etc.

## Tokens

**Color** — plaster / plaster-deep / linen / espresso / espresso-soft / brass /
brass-soft / stone (see brand-guidelines.md §3 for hex + roles).

**Type** — `--font-display` (Marcellus), `--font-body` (Karla), `--font-mono`
(IBM Plex Mono), loaded via `next/font` in `app/layout.tsx` with `display: swap`.
Helpers: `.display` (headline setting), `.spec` (mono label setting).

**Spacing** — Tailwind scale; section paddings standardized at `py-24 md:py-36`
(hero-adjacent), `py-20/28` (bands). Grid gaps 6–8 (24–32 px).

**Radius** — `--radius-sheet: 2px`. **Shadows** — `shadow-plinth` (floating
panels), `shadow-hairline` (inset 1 px frame).

**Animation** — `animate-drift` (22 s ken-burns), `animate-marquee` (40 s loop);
interaction easing `[0.19, 1, 0.22, 1]` everywhere.

## Component inventory

| Component        | Kind    | Notes |
|------------------|---------|-------|
| `Navbar`         | client  | scroll-condensing header, full-screen indexed menu, focus-trapped overlay |
| `Footer`         | server  | newsletter band, 3 link columns, sheet-number strip |
| `Hero`           | client  | parallax layers, line-mask headline, mouse-tracked floating panel, video-ready |
| `Reveal / RevealImage` | client | scroll reveal + plaster-curtain image uncover |
| `Counter`        | client  | rAF eased count-up on viewport entry |
| `MagneticButton` | client  | spring-magnetic CTA, 3 variants |
| `Eyebrow`        | server  | rule + mono label section opener |
| `ProjectCard`    | server  | image + title-block footer; `ratio` prop for handcrafted grids |
| `ProjectsExplorer` | client | category filter with layout animation, cycling ratios/offsets |
| `GalleryGrid`    | client  | masonry columns, filter, keyboard-navigable lightbox |
| `BeforeAfter`    | client  | drag/keyboard comparison slider (ARIA slider) |
| `ProcessRail`    | client  | flex-grow expanding phase rail |
| `Testimonials`   | client  | directional slide quotes |
| `Accordion`      | client  | FAQ with height animation, aria-expanded |
| `ContactForm`    | client  | RHF + Zod, inline errors, success state |
| `Marquee`        | server  | CSS keyframe capability ticker |
| `PageHeader`     | server  | eyebrow + display title + sheet number |
| `SectorPage` / `LegalPage` | server | page templates |

## Accessibility floor

Skip link → `#main`; landmarks (`header/nav/main/footer`); visible
`focus-visible` rings (brass, offset); lightbox & menu manage `Escape`/arrow
keys and body scroll; forms use real `<label>`s + `role="alert"` errors;
`prefers-reduced-motion` collapses all animation globally; alt text is
descriptive of material and place, never "image of".

## Performance

- `next/image` everywhere with accurate `sizes`; AVIF/WebP enabled.
- Above-the-fold images `priority`; the rest lazy by default.
- Server components by default; client bundles limited to interactive leaves.
- Static generation for all routes incl. `generateStaticParams` on
  `/projects/[slug]` and `/blog/[slug]`.
- Fonts self-hosted via `next/font` (zero layout shift, no external request).

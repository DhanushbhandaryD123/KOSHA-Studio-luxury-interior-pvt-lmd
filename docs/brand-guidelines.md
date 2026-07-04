# KOSHA — Brand Guidelines v1.0

## 1. The brand

**Name.** KOSHA — Sanskrit for *vessel, sheath, treasury*. A home is a container
for a life; the container should hold still so the life can move.

**Tagline.** *The Architecture of Stillness.*

**Positioning.** A luxury Indian studio that sells restraint. Where competitors
promise more — more finishes, more drama, more Instagram — KOSHA promises less,
executed perfectly, and a space that is calmer in year ten than on handover day.

**Voice.** Plain, confident, specific. Short sentences. Numbers over adjectives
("120 projects, nine states" — never "countless projects across India").
Craft vocabulary used correctly: junction, joinery, shadow gap, drawing set.
Never: "elevate", "bespoke luxury living", "dream home".

## 2. Logo

The mark is a **plan-view square with a threshold cut** — a doorway drawn the way
an architect draws it. Outer wall in ink, inner room in brass, the opening on axis.

- `public/logo.svg` — primary lockup (light backgrounds)
- `public/logo-dark.svg` — reversed lockup (espresso backgrounds)
- `public/monogram.svg` — mark only (favicons, avatars, stamps)
- `app/icon.svg` — favicon

Clear space: one inner-square width on all sides. Minimum lockup width 110 px.
Never rotate, recolor, add effects, or set the wordmark in another face.

## 3. Color

| Token          | Hex       | Role                                     |
|----------------|-----------|------------------------------------------|
| Plaster        | `#F2EEE8` | Primary background — warm mineral white  |
| Plaster Deep   | `#E9E3D9` | Alternate section background             |
| Linen          | `#FAF8F4` | Cards, reversed text                     |
| Espresso       | `#221C16` | Ink — text, dark bands, primary buttons  |
| Espresso Soft  | `#35302A` | Hover state on dark                      |
| Brass          | `#A8895B` | Accent — hardware, rules, active states  |
| Brass Soft     | `#C3AC86` | Accent on dark backgrounds               |
| Stone          | `#8B857C` | Muted body text, captions                |

Rules: brass is **hardware, not paint** — hairlines, indices, one accent per view.
Never brass on plaster-deep at body size (contrast). Espresso text on plaster
passes WCAG AAA; linen on espresso passes AAA.

## 4. Typography

| Role     | Face            | Usage                                        |
|----------|-----------------|----------------------------------------------|
| Display  | **Marcellus**   | Headlines only. Tight leading (0.98), −1% tracking. Never below 20 px. |
| Body     | **Karla**       | Paragraphs, UI, navigation. 1.6–1.85 leading. |
| Spec     | **IBM Plex Mono** | The drawing-sheet voice: labels, indices, areas, budgets. 10–11 px, +18% tracking, uppercase. |

Type scale (desktop): 12 / 14 / 16 / 18 / 24 / 30 / 40 / 60 / 96 / 115 px.

## 5. The signature device — the title block

Every project, card and data panel is framed like an **architect's drawing sheet**:
a double hairline border (`.titleblock`), mono-type spec labels, sheet numbers
(A-100, A-201…) in page corners, and material schedules set as ledgers.
This device is the brand. Use it once per composition; keep everything else quiet.

## 6. Layout & spacing

- Max content width 1400 px; gutters 20 px mobile / 40 px desktop.
- 12-column grid, but columns are **broken deliberately**: offset stacks,
  images bleeding past text blocks, staggered card tops (`lg:mt-*` offsets).
- Section rhythm 96–144 px vertical. No two adjacent sections share a layout.
- Radius: 2 px max ("sheet" radius) — edges are architectural, not friendly.

## 7. Imagery

Warm natural light, one strong shadow, materials in close-up, people absent or
incidental. Editorial 4:5 / 3:4 / 21:9 crops, never square-cropped grids of
identical size. Full art direction in `docs/image-prompts.md`.

## 8. Motion

Ease `cubic-bezier(0.19, 1, 0.22, 1)` ("book-shutting" ease), 0.5–1.1 s.
Reveals rise ≤ 28 px; images uncover behind a plaster curtain; magnetic buttons
drift ≤ 18 px. Everything respects `prefers-reduced-motion`. Motion should feel
like weight settling — never bouncing.

## 9. Icon system

Lucide, `strokeWidth 1.5`, sized 13–22 px, ink or brass only.
Directional icons (ArrowUpRight) reserved for links that leave the current view.

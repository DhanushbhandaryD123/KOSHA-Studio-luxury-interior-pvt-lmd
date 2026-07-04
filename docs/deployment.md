# Deployment Guide

## Vercel (recommended)
1. Push this repo to GitHub.
2. vercel.com → Add New Project → import the repo. Framework auto-detected (Next.js).
3. Deploy. No environment variables are required.
4. Set the production domain, then update `site.url` in `lib/data.ts`
   (drives canonicals, sitemap.xml, robots.txt, Open Graph) and redeploy.

## Any Node host
```bash
npm ci
npm run build
npm start          # serves on PORT (default 3000) behind your reverse proxy
```

## Static-ish notes
Every route is statically generated at build time (including all 30 project
pages and 6 articles via `generateStaticParams`). No database, no API keys.

## Going live checklist
- [ ] Replace Unsplash URLs in `lib/data.ts` with owned/AI imagery (see docs/image-prompts.md)
- [ ] Add `public/hero.mp4` and enable the video block in `components/Hero.tsx`
- [ ] Wire `ContactForm.onSubmit` to your API route / CRM / email service
- [ ] Wire `NewsletterForm` to your ESP
- [ ] Update `site.*` contact details in `lib/data.ts`
- [ ] Add a real OG image (`app/opengraph-image.png`, 1200×630)
- [ ] Run Lighthouse on the deployed URL (build is optimized for 95–100)

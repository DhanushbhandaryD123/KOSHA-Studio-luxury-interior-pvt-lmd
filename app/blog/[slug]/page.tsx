import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Reveal, RevealImage } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { blogPosts, site } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = blogPosts.find((x) => x.slug === slug);
  if (!b) return {};
  return {
    title: b.title,
    description: b.excerpt,
    alternates: { canonical: `/blog/${b.slug}` },
    openGraph: { type: "article", title: b.title, description: b.excerpt, images: [b.cover], publishedTime: b.date },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = blogPosts.find((x) => x.slug === slug);
  if (!b) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: b.title,
    datePublished: b.date,
    author: { "@type": "Organization", name: "KOSHA Studio", url: site.url },
    image: b.cover,
    description: b.excerpt,
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-[820px] px-5 pb-10 pt-32 md:pt-44">
        <Reveal>
          <Link href="/blog" className="spec inline-flex items-center gap-2 text-stone transition-colors hover:text-brass">
            <ArrowLeft size={13} /> Journal
          </Link>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="spec mt-8 text-brass">
            {new Date(b.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · {b.read} read
          </p>
        </Reveal>
        <Reveal delay={0.12}><h1 className="display mt-5 text-4xl leading-tight md:text-6xl">{b.title}</h1></Reveal>
        <Reveal delay={0.18}><p className="mt-6 text-lg leading-relaxed text-stone">{b.excerpt}</p></Reveal>
      </div>

      <div className="mx-auto max-w-[1100px] px-5">
        <RevealImage>
          <div className="relative aspect-[16/9]">
            <Image src={b.cover} alt={b.title} fill priority sizes="(max-width:1100px) 100vw, 1100px" className="object-cover" />
          </div>
        </RevealImage>
      </div>

      <div className="mx-auto max-w-[720px] space-y-6 px-5 py-16 text-[1.05rem] leading-[1.85] md:py-20">
        {b.body.split("\n\n").map((para, i) => (
          <Reveal key={i} delay={Math.min(i * 0.03, 0.15)}>
            <p className={i === 0 ? "first-letter:display first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-brass" : ""}>
              {para}
            </p>
          </Reveal>
        ))}
        <div className="border-t border-espresso/12 pt-10">
          <p className="spec text-stone">Written by the KOSHA studio team</p>
          <div className="mt-6"><MagneticButton href="/contact" variant="brass">Discuss a project</MagneticButton></div>
        </div>
      </div>
    </article>
  );
}

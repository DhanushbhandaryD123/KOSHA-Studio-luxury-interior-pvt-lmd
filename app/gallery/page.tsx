import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual index of KOSHA details — living rooms, kitchens, hotel suites, restaurant interiors and material close-ups from twelve years of built work.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        sheet="A-400"
        eyebrow="Gallery"
        title={<>The detail index.</>}
        lede="Corners, junctions and rooms from twelve years of building. Filter by sector, click any frame to study it closer."
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-36">
        <GalleryGrid />
      </section>
    </>
  );
}

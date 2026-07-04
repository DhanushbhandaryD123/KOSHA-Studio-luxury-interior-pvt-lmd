import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Projects",
  description: "30 built projects across nine Indian states — villas, apartments, hotels, restaurants, offices, retail and landscapes by KOSHA Studio.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        sheet="A-300"
        eyebrow="The archive"
        title={<>Thirty sheets,<br />nine states.</>}
        lede="Every project below was photographed after at least one monsoon in use — because handover-day photographs prove nothing."
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-36">
        <ProjectsExplorer />
      </section>
    </>
  );
}

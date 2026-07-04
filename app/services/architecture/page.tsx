import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { img } from "@/lib/data";

export const metadata: Metadata = {
  title: "Architecture",
  description: "Climate-first residential and boutique commercial architecture by KOSHA — courtyard houses, coastal homes and hillside builds across India.",
  alternates: { canonical: "/services/architecture" },
};

export default function Page() {
  return (
    <SectorPage
      sheet="A-203"
      eyebrow="Architecture"
      title={<>The climate draws<br />the first line.</>}
      lede="Sun path, breeze and monsoon decide the plan before any elevation is sketched. Our buildings cool, light and drain themselves first — then they get beautiful."
      cats={["Architecture", "Villa", "Landscape"]}
      heroImage={img.villa3}
      heroAlt="Courtyard house in exposed concrete and granite"
      scope={[
        { title: "Plot study & feasibility", body: "Solar mapping, soil, bye-laws and budget realism — a written go/no-go before you commit to design fees." },
        { title: "Residential architecture", body: "Courtyard houses, coastal homes, hillside builds — each answered to its own climate, not to a catalogue." },
        { title: "Boutique commercial", body: "Small hotels, restaurants and galleries where the building itself is the brand." },
        { title: "Landscape design", body: "Native-first planting and water-wise gardens designed as rooms, delivered with the building — never bolted on after." },
        { title: "Structure & services", body: "Structural, MEP and sustainability consultants coordinated inside our single drawing set." },
        { title: "Approvals & site", body: "Sanction drawings, liaison, and weekly site presence through to occupation certificate." },
      ]}
    />
  );
}

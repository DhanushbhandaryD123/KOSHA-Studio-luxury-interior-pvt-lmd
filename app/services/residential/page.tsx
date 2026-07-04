import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { img } from "@/lib/data";

export const metadata: Metadata = {
  title: "Residential Interior Design",
  description: "Luxury villas, apartments, penthouses and renovations — full-scope residential interiors and architecture by KOSHA Studio.",
  alternates: { canonical: "/services/residential" },
};

export default function Page() {
  return (
    <SectorPage
      sheet="A-201"
      eyebrow="Residential"
      title={<>Homes that hold<br />their silence.</>}
      lede="Villas, apartments, penthouses and weekend houses — designed around your actual mornings, not a moodboard's."
      cats={["Residential", "Villa", "Apartment", "Renovation"]}
      heroImage={img.living4}
      heroAlt="Sunlit residential living space in white lime and bleached teak"
      scope={[
        { title: "Full-home interiors", body: "Concept to the last cushion — planning, joinery, finishes, lighting, soft furnishing and styling." },
        { title: "Villas & bungalows", body: "Ground-up or shell-and-core, coordinated with our architecture team from the plot walk onward." },
        { title: "Apartments & penthouses", body: "Society-rulebook-fluent renovation, structural review, and service rerouting handled in-house." },
        { title: "Heritage renovation", body: "Conservation assessment first, intervention second. Old teak and red-oxide floors get a second life." },
        { title: "Custom furniture", body: "One-off pieces from our own workshop — teak, ash, stone and brass, built to be reupholstered, not replaced." },
        { title: "Turnkey delivery", body: "One contract, one team, one handover date, one Friday photo log every week in between." },
      ]}
    />
  );
}

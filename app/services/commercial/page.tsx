import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { img } from "@/lib/data";

export const metadata: Metadata = {
  title: "Commercial Interior Design",
  description: "Offices, hotels, restaurants, retail showrooms and clinics — commercial interiors by KOSHA Studio, designed to perform daily.",
  alternates: { canonical: "/services/commercial" },
};

export default function Page() {
  return (
    <SectorPage
      sheet="A-202"
      eyebrow="Commercial"
      title={<>Spaces that earn<br />their keep.</>}
      lede="A commercial interior is judged every single day — by guests, staff, and the P&L. We design for all three."
      cats={["Office", "Hotel", "Restaurant", "Retail", "Commercial"]}
      heroImage={img.office1}
      heroAlt="Daylit office interior with timber acoustic baffles"
      scope={[
        { title: "Workplaces", body: "Offices planned around how your teams actually work — daylight mapping, acoustic zoning, and rooms where rooms are needed." },
        { title: "Hotels", body: "Boutique and heritage properties from 10 to 50 keys. We design the in-between spaces guests actually remember." },
        { title: "Restaurants & bars", body: "Service choreography mapped before walls are drawn. Lighting schemes that sell the second course." },
        { title: "Retail & showrooms", body: "Flagships and experience centres where the architecture is the merchandising." },
        { title: "Clinics & wellness", body: "Healthcare spaces engineered for calm — measurably lower anxiety, without a single clinical white wall." },
        { title: "Design-build", body: "Fixed contract price, published rate card, and phased fit-outs that keep your business trading." },
      ]}
    />
  );
}

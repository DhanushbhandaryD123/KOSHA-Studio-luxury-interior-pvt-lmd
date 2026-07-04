import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the KOSHA Studio website and engagement of our services.",
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <LegalPage
      sheet="A-991"
      eyebrow="Legal"
      title="Terms of Service"
      updated="1 June 2026"
      sections={[
        { h: "About these terms", p: [
          "This website is operated by KOSHA Design LLP (\"KOSHA\", \"we\"). By using the site you accept these terms. Engagement of our design services is governed by a separate written agreement issued per project; nothing on this website constitutes a binding offer.",
        ]},
        { h: "Intellectual property", p: [
          "All content on this site — photography, drawings, text, the KOSHA name and mark — is the property of KOSHA Design LLP or used with permission of our clients and photographers. It may not be reproduced, scraped or used to train commercial datasets without written consent.",
        ]},
        { h: "Project photography", p: [
          "Photographs of built projects are published with the written consent of each client. Locations are described at neighbourhood level only, and no private address is ever published.",
        ]},
        { h: "Pricing information", p: [
          "Rates published on this site are indicative and current as of the last update date. Every engagement is quoted formally in writing; the written proposal supersedes any figure shown here.",
        ]},
        { h: "Consultations", p: [
          "Consultation bookings are confirmed by email and payable in advance. Rescheduling is free with 48 hours' notice; sessions cancelled with less notice are charged in full, because a director's diary was held for you.",
        ]},
        { h: "Liability", p: [
          "The website is provided as-is for information. We accept no liability for decisions made on the basis of website content alone. Professional duties, insurances and liabilities for engaged projects are set out in the project agreement.",
        ]},
        { h: "Governing law", p: [
          "These terms are governed by the laws of India, with courts in Bengaluru, Karnataka holding exclusive jurisdiction.",
        ]},
      ]}
    />
  );
}

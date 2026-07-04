import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How KOSHA Studio collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      sheet="A-990"
      eyebrow="Legal"
      title="Privacy Policy"
      updated="1 June 2026"
      sections={[
        { h: "What we collect", p: [
          "When you contact us or book a consultation, we collect the information you give us: name, email, phone number, project location and the details of your brief. When you subscribe to The Site Diary, we collect your email address only.",
          "Our website uses privacy-respecting analytics that record aggregate page views. We do not use advertising trackers, and we do not build profiles of individual visitors.",
        ]},
        { h: "How we use it", p: [
          "Your contact details are used to respond to your enquiry, schedule consultations, and administer any project we undertake together. Project information is shared internally with the team assigned to your work and with consultants engaged on your project under confidentiality terms.",
          "Newsletter addresses are used solely to send the monthly Site Diary. Every issue includes a one-click unsubscribe.",
        ]},
        { h: "What we never do", p: [
          "We never sell, rent or trade your personal information. We never share project photographs, addresses or budgets publicly without your written consent — including in our own portfolio and social media.",
        ]},
        { h: "Retention & your rights", p: [
          "Enquiry data is retained for two years; project records for eight years as required by professional practice. You may request a copy, correction or deletion of your data at any time by writing to studio@kosha.studio. We respond within 30 days.",
        ]},
        { h: "Security", p: [
          "Data is stored on access-controlled systems with encryption in transit. Physical drawings and documents are held in our Bengaluru studio with restricted access.",
        ]},
        { h: "Contact", p: [
          "Questions about this policy: studio@kosha.studio, or KOSHA Design LLP, No. 7 Lavelle Road, Bengaluru 560001.",
        ]},
      ]}
    />
  );
}

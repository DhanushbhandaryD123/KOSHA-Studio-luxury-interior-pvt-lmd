/* ── KOSHA content layer ─────────────────────────────────────── */

export const site = {
  name: "KOSHA",
  tagline: "The Architecture of Stillness",
  url: "https://kosha.studio",
  phone: "+91 98450 22110",
  whatsapp: "919845022110",
  email: "studio@kosha.studio",
  address: "No. 7, Lavelle Road, Bengaluru 560001, India",
  instagram: "https://instagram.com/kosha.studio",
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const img = {
  heroA: u("photo-1600585154340-be6161a56a0c", 2200),
  heroB: u("photo-1616486338812-3dadae4b4ace", 2200),
  living1: u("photo-1600585154340-be6161a56a0c"),
  living2: u("photo-1586023492125-27b2c045efd7"),
  living3: u("photo-1618221195710-dd6b41faaea6"),
  living4: u("photo-1615873968403-89e068629265"),
  living5: u("photo-1598928506311-c55ded91a20c"),
  kitchen1: u("photo-1556911220-bff31c812dba"),
  kitchen2: u("photo-1556909114-f6e7ad7d3136"),
  bedroom1: u("photo-1616594039964-ae9021a400a0"),
  bedroom2: u("photo-1616593969747-4797dc75033e"),
  bath1: u("photo-1584622650111-993a426fbf0a"),
  villa1: u("photo-1600596542815-ffad4c1539a9"),
  villa2: u("photo-1613490493576-7fde63acd811"),
  villa3: u("photo-1600047509807-ba8f99d2cdde"),
  apt1: u("photo-1560448204-e02f11c3d0e2"),
  apt2: u("photo-1502672260266-1c1ef2d93688"),
  apt3: u("photo-1493809842364-78817add7ffb"),
  office1: u("photo-1497366216548-37526070297c"),
  office2: u("photo-1497366754035-f200968a6e72"),
  hotel1: u("photo-1590490360182-c33d57733427"),
  hotel2: u("photo-1571508601891-ca5e7a713859"),
  rest1: u("photo-1517248135467-4c7edcad34c4"),
  rest2: u("photo-1552566626-52f8b828add9"),
  detail1: u("photo-1600607687939-ce8a6c25118c"),
  detail2: u("photo-1600607687920-4e2a09cf159d"),
  detail3: u("photo-1600210492486-724fe5c67fb0"),
  detail4: u("photo-1631679706909-1844bbd07221"),
  detail5: u("photo-1617806118233-18e1de247200"),
  detail6: u("photo-1600566753086-00f18fb6b3ea"),
  detail7: u("photo-1600121848594-d8644e57abab"),
};

export type Category =
  | "Residential" | "Villa" | "Apartment" | "Commercial"
  | "Office" | "Hotel" | "Restaurant" | "Retail"
  | "Architecture" | "Landscape" | "Renovation";

export interface Project {
  slug: string;
  name: string;
  location: string;
  area: string;
  budget: string;
  year: string;
  category: Category;
  materials: string[];
  cover: string;
  images: string[];
  story: string;
  before?: string;
  after?: string;
}

const pick = (...keys: (keyof typeof img)[]) => keys.map((k) => img[k]);

export const projects: Project[] = [
  { slug: "the-quiet-house", name: "The Quiet House", location: "Indiranagar, Bengaluru", area: "4,800 sq ft", budget: "₹2.4 Cr", year: "2026", category: "Villa", materials: ["Kota stone", "White oak", "Lime plaster", "Unlacquered brass"], cover: img.villa1, images: pick("villa1","living1","kitchen1","bedroom1"), story: "A retired surgeon asked us for a home where nothing demanded attention. We answered with a single material palette carried through every room, daylight choreographed by deep verandah overhangs, and joinery that closes with the sound of a book shutting.", before: img.detail3, after: img.living1 },
  { slug: "cascara-villa", name: "Cascara Villa", location: "Assagao, Goa", area: "6,200 sq ft", budget: "₹3.8 Cr", year: "2026", category: "Villa", materials: ["Laterite", "Teak", "Terrazzo", "Cane"], cover: img.villa2, images: pick("villa2","living2","bath1","detail1"), story: "Built around a seventy-year-old mango tree, the villa's plan bends rather than the canopy. Monsoon verandahs double the living area for half the year." },
  { slug: "sona-penthouse", name: "Sona Penthouse", location: "Worli, Mumbai", area: "5,400 sq ft", budget: "₹4.2 Cr", year: "2025", category: "Apartment", materials: ["Travertine", "Smoked oak", "Bronze", "Bouclé"], cover: img.apt1, images: pick("apt1","living3","kitchen2","detail2"), story: "Thirty-one floors above the sea link, the brief was a gallery that happens to be lived in. Walls were engineered to museum hanging loads; lighting runs on a curatorial track system." },
  { slug: "house-of-courtyards", name: "House of Courtyards", location: "Jubilee Hills, Hyderabad", area: "8,900 sq ft", budget: "₹6.5 Cr", year: "2025", category: "Architecture", materials: ["Exposed concrete", "Sadarahalli granite", "Corten", "Glass"], cover: img.villa3, images: pick("villa3","detail3","living4","detail4"), story: "Three courtyards stagger through the section, pulling light and cross-breeze into every room. The house cools itself for nine months of the year." },
  { slug: "verata-residence", name: "Verata Residence", location: "Koramangala, Bengaluru", area: "3,600 sq ft", budget: "₹1.6 Cr", year: "2025", category: "Residential", materials: ["Ash veneer", "Micro-topping", "Linen", "Matte black steel"], cover: img.living1, images: pick("living1","bedroom2","kitchen1","detail5"), story: "A young family's duplex reorganised around a double-height reading wall. Every child's room converts to a study without a single new purchase." },
  { slug: "atrium-loft", name: "Atrium Loft", location: "Bandra West, Mumbai", area: "2,800 sq ft", budget: "₹1.9 Cr", year: "2024", category: "Apartment", materials: ["Reclaimed teak", "Handmade tile", "Jute", "Antique mirror"], cover: img.apt2, images: pick("apt2","detail6","living5","bath1"), story: "Two mill-era apartments merged into one loft. We kept the original steel trusses exposed and let everything new sit half a tone quieter." },
  { slug: "monsoon-house", name: "Monsoon House", location: "Kodagu, Karnataka", area: "5,100 sq ft", budget: "₹2.9 Cr", year: "2024", category: "Villa", materials: ["Local stone", "Clay tile", "Rosewood", "Copper"], cover: img.villa3, images: pick("villa3","living2","detail1","bedroom1"), story: "A coffee-estate home designed to be heard as much as seen — rain on clay tile, water moving through a stone channel that bisects the plan." },
  { slug: "stillwater-apartment", name: "Stillwater Apartment", location: "Alipore, Kolkata", area: "3,100 sq ft", budget: "₹1.4 Cr", year: "2024", category: "Apartment", materials: ["Burma teak (restored)", "Italian marble", "Silk", "Brass inlay"], cover: img.apt3, images: pick("apt3","detail2","living3","kitchen2"), story: "A heritage apartment restored with its 1940s teak flooring intact. New interventions are deliberately legible — nothing pretends to be old." },
  { slug: "the-northlight-office", name: "The Northlight Office", location: "HSR Layout, Bengaluru", area: "22,000 sq ft", budget: "₹5.6 Cr", year: "2026", category: "Office", materials: ["Acoustic timber baffle", "Recycled terrazzo", "Cork", "Powder-coated steel"], cover: img.office1, images: pick("office1","office2","detail4","detail7"), story: "A SaaS headquarters where no desk sits more than eight metres from daylight. Meeting rooms are named after typefaces; the clients insisted." },
  { slug: "meridian-workspace", name: "Meridian Workspace", location: "Gurugram", area: "34,000 sq ft", budget: "₹8.1 Cr", year: "2025", category: "Office", materials: ["Raw concrete", "Oak flooring", "Felt", "Glazed partitions"], cover: img.office2, images: pick("office2","office1","detail5","detail3"), story: "A trading firm's office built around a silent core — a library rule enforced by architecture rather than signage." },
  { slug: "hotel-elara", name: "Hotel Elara", location: "Udaipur, Rajasthan", area: "48,000 sq ft", budget: "₹22 Cr", year: "2025", category: "Hotel", materials: ["Yellow sandstone", "Lime fresco", "Marble jaali", "Handloom textile"], cover: img.hotel1, images: pick("hotel1","hotel2","bath1","detail6"), story: "A 34-key lake palace hotel where each floor's palette shifts with the light of a different hour of day. The lobby is a re-imagined baoli." },
  { slug: "the-verandah-hotel", name: "The Verandah", location: "Fort Kochi, Kerala", area: "31,000 sq ft", budget: "₹14 Cr", year: "2024", category: "Hotel", materials: ["Athangudi tile", "Anjili wood", "Oyster-shell lime", "Rattan"], cover: img.hotel2, images: pick("hotel2","hotel1","living5","detail1"), story: "A Dutch-era warehouse converted into an 18-room hotel. The original loading bay is now a triple-height reading verandah facing the harbour." },
  { slug: "brasserie-noon", name: "Brasserie Noon", location: "Khan Market, New Delhi", area: "4,200 sq ft", budget: "₹2.1 Cr", year: "2026", category: "Restaurant", materials: ["Zellige tile", "Walnut", "Aged brass", "Cane bentwood"], cover: img.rest1, images: pick("rest1","rest2","detail7","kitchen2"), story: "A 68-cover brasserie designed around service choreography — we mapped waiter paths before drawing a single wall." },
  { slug: "ember-and-oak", name: "Ember & Oak", location: "Indiranagar, Bengaluru", area: "3,500 sq ft", budget: "₹1.7 Cr", year: "2025", category: "Restaurant", materials: ["Charred timber", "Blackened steel", "Leather", "Volcanic stone"], cover: img.rest2, images: pick("rest2","rest1","detail4","detail2"), story: "A live-fire restaurant where the hearth is the only light source guests notice. Everything else is shadow discipline." },
  { slug: "maison-argent", name: "Maison Argent", location: "DLF Emporio, New Delhi", area: "2,600 sq ft", budget: "₹3.2 Cr", year: "2025", category: "Retail", materials: ["Silver travertine", "Fluted glass", "Nickel", "Wool carpet"], cover: img.detail6, images: pick("detail6","detail2","detail7","living3"), story: "A jewellery flagship lit entirely below 3000K. Vitrines float on cantilevered stone plinths; nothing touches the walls." },
  { slug: "terra-showroom", name: "Terra Showroom", location: "Kochi, Kerala", area: "6,800 sq ft", budget: "₹2.4 Cr", year: "2024", category: "Retail", materials: ["Rammed earth", "Ply fin walls", "Galvanised steel", "Clay"], cover: img.detail3, images: pick("detail3","detail1","office1","detail5"), story: "A tile-manufacturer's experience centre where the product is the architecture — every surface is a live sample you can walk on." },
  { slug: "the-garden-line", name: "The Garden Line", location: "Whitefield, Bengaluru", area: "1.2 acres", budget: "₹95 L", year: "2026", category: "Landscape", materials: ["Basalt", "Native grasses", "Corten edging", "Gravel"], cover: img.villa3, images: pick("villa3","detail1","villa2","detail3"), story: "A drought-tolerant garden for a tech campus, planted with 74 native species. Irrigation demand fell 60% against the original scheme." },
  { slug: "stone-court-garden", name: "Stone Court Garden", location: "Alibaug, Maharashtra", area: "0.8 acres", budget: "₹70 L", year: "2024", category: "Landscape", materials: ["Local basalt", "Champa trees", "Lily pool", "Laterite"], cover: img.villa2, images: pick("villa2","villa1","detail1","detail6"), story: "A weekend home's garden arranged as a series of outdoor rooms, each holding a single champa tree and a place to sit." },
  { slug: "heritage-bungalow-revival", name: "Heritage Bungalow Revival", location: "Basavanagudi, Bengaluru", area: "4,100 sq ft", budget: "₹1.8 Cr", year: "2025", category: "Renovation", materials: ["Restored teak", "Athangudi tile", "Lime wash", "Cast iron"], cover: img.living2, images: pick("living2","detail1","bedroom1","living5"), story: "A 1938 bungalow restored for its fourth generation. We removed six decades of additions and found the original red-oxide floor intact.", before: img.detail3, after: img.living2 },
  { slug: "mill-house-conversion", name: "Mill House Conversion", location: "Parel, Mumbai", area: "5,600 sq ft", budget: "₹3.4 Cr", year: "2024", category: "Renovation", materials: ["Exposed brick", "Steel truss (restored)", "Concrete", "Oak"], cover: img.apt2, images: pick("apt2","detail4","office2","living3"), story: "A textile mill outbuilding converted into a family home. The 9-metre truss span let us keep the ground floor entirely column-free.", before: img.detail4, after: img.apt2 },
  { slug: "canvas-house", name: "Canvas House", location: "Anjuna, Goa", area: "3,900 sq ft", budget: "₹2.2 Cr", year: "2026", category: "Villa", materials: ["White lime", "Kadappa stone", "Bleached teak", "Linen"], cover: img.living4, images: pick("living4","villa2","bath1","bedroom2"), story: "An artist's home-studio with a north-lit painting room at its heart. Walls are hung on a French-cleat grid hidden in the plasterwork." },
  { slug: "the-listening-room", name: "The Listening Room", location: "Sadashivanagar, Bengaluru", area: "2,400 sq ft", budget: "₹1.3 Cr", year: "2025", category: "Residential", materials: ["Acoustic panelling", "Walnut", "Wool", "Brass mesh"], cover: img.living3, images: pick("living3","detail5","bedroom1","detail7"), story: "A vinyl collector's apartment engineered around a single listening position. Room acoustics were modelled before the furniture layout." },
  { slug: "arbour-apartments", name: "Arbour Apartments", location: "Baner, Pune", area: "12 units · 1,850 sq ft avg", budget: "₹9.6 Cr", year: "2025", category: "Apartment", materials: ["Ash", "Micro-cement", "Handmade tile", "Cane"], cover: img.apt1, images: pick("apt1","apt3","kitchen1","detail6"), story: "Twelve show-ready units for a boutique developer — one design system, twelve distinct expressions. No two kitchens repeat." },
  { slug: "clinic-of-calm", name: "Clinic of Calm", location: "Jayanagar, Bengaluru", area: "3,200 sq ft", budget: "₹1.1 Cr", year: "2024", category: "Commercial", materials: ["Birch ply", "Rubber flooring", "Frosted glass", "Cotton"], cover: img.office1, images: pick("office1","detail3","office2","detail1"), story: "A paediatric dental clinic with no clinical white anywhere. Anxiety scores measured at reception dropped measurably within a quarter." },
  { slug: "the-long-gallery", name: "The Long Gallery", location: "Fort, Mumbai", area: "5,000 sq ft", budget: "₹2.8 Cr", year: "2026", category: "Commercial", materials: ["Grey basalt", "White oak", "Museum glass", "Plaster"], cover: img.detail2, images: pick("detail2","detail6","living3","detail7"), story: "A contemporary art gallery in a colonial banking hall. Climate, lighting and hanging systems disappear into a restored coffered ceiling." },
  { slug: "sagar-beach-house", name: "Sagar Beach House", location: "Kaup, Udupi, Karnataka", area: "4,400 sq ft", budget: "₹2.0 Cr", year: "2026", category: "Villa", materials: ["Laterite", "Coconut timber", "Terracotta", "Shell lime"], cover: img.villa1, images: pick("villa1","villa3","living4","detail1"), story: "A coastal-Karnataka home built from within twenty kilometres — laterite walls, coconut-timber rafters, shell-lime finishes. It breathes like the old houses of the coast." },
  { slug: "tokusho-omakase", name: "Tokushō Omakase", location: "UB City, Bengaluru", area: "1,400 sq ft", budget: "₹1.5 Cr", year: "2025", category: "Restaurant", materials: ["Hinoki counter", "Shou sugi ban", "Washi", "River stone"], cover: img.rest2, images: pick("rest2","detail4","detail2","rest1"), story: "A ten-seat omakase counter. Guests face a single hinoki slab; everything else recedes into charred-timber darkness." },
  { slug: "north-face-house", name: "North Face House", location: "Dehradun, Uttarakhand", area: "6,700 sq ft", budget: "₹4.6 Cr", year: "2024", category: "Architecture", materials: ["Local slate", "Deodar", "Insulated concrete", "Steel"], cover: img.villa3, images: pick("villa3","detail3","living2","bedroom1"), story: "A Himalayan foothill home whose long elevation opens entirely north to the range. Winter sun is harvested through a trombe wall on the south." },
  { slug: "founders-floor", name: "Founder's Floor", location: "Koramangala, Bengaluru", area: "8,500 sq ft", budget: "₹2.7 Cr", year: "2026", category: "Office", materials: ["Bamboo ply", "Terrazzo", "Linen acoustic panels", "Steel"], cover: img.office2, images: pick("office2","office1","detail5","detail4"), story: "A venture fund's floor arranged as a sequence of rooms rather than an open plan — because their work is conversation, not collaboration theatre." },
  { slug: "casa-limon", name: "Casa Limón", location: "Sindhudurg, Maharashtra", area: "3,300 sq ft", budget: "₹1.6 Cr", year: "2024", category: "Renovation", materials: ["Lime plaster", "Mangalore tile", "Old teak", "Terracotta"], cover: img.living5, images: pick("living5","villa2","detail1","bath1"), story: "A crumbling Konkan farmhouse rebuilt with its own salvaged materials. Ninety percent of the original teak found a second life in the new joinery.", before: img.detail1, after: img.living5 },
];

export const services = [
  { slug: "interior-design", title: "Interior Design", brief: "Full-scope interiors for homes and hospitality — from concept to the last cushion.", index: "01" },
  { slug: "architecture", title: "Architecture", brief: "Ground-up residential and boutique commercial buildings, designed climate-first.", index: "02" },
  { slug: "space-planning", title: "Space Planning", brief: "Plans tested against how you actually live and move, not furniture catalogues.", index: "03" },
  { slug: "furniture-design", title: "Furniture Design", brief: "One-off pieces built by our workshop partners in teak, ash, stone and brass.", index: "04" },
  { slug: "lighting-design", title: "Lighting Design", brief: "Layered lighting schemes, circuited and dimmed for every hour of the day.", index: "05" },
  { slug: "landscape", title: "Landscape Design", brief: "Native-first planting, water-wise gardens, outdoor rooms that age well.", index: "06" },
  { slug: "visualization", title: "3D Visualization", brief: "Photoreal stills and walkthroughs so decisions are made before money is spent.", index: "07" },
  { slug: "renovation", title: "Renovation & Restoration", brief: "Heritage-sensitive renewal of bungalows, mills and mid-century apartments.", index: "08" },
  { slug: "consultation", title: "Design Consultation", brief: "Focused sessions to unlock a stuck plan, palette or purchase decision.", index: "09" },
  { slug: "turnkey", title: "Turnkey Delivery", brief: "One contract, one team, one handover date. We carry the risk, you carry the key.", index: "10" },
];

export const testimonials = [
  { quote: "They asked how we drink our morning coffee before they asked about square footage. The house is quiet in a way I didn't know a house could be.", name: "Dr. Meera Krishnan", role: "The Quiet House, Bengaluru" },
  { quote: "Budget, schedule, and the drawings all told the same story from day one. In this industry that alone is a luxury.", name: "Arjun Bhandari", role: "Meridian Workspace, Gurugram" },
  { quote: "Guests photograph the corridor more than the rooms. KOSHA understood that a hotel is remembered in its in-between spaces.", name: "Ishita Rao", role: "Hotel Elara, Udaipur" },
  { quote: "They removed more than they added — and charged us for the discipline. Worth every rupee.", name: "Farhan & Lena D'Souza", role: "Heritage Bungalow Revival" },
  { quote: "Our omakase counter cost more per square foot than any project we've done. It also books out ninety days ahead.", name: "Kenji Nakamura", role: "Tokushō, Bengaluru" },
];

export const awards = [
  { year: "2026", title: "IIID Anchor Award — Residential Interiors", project: "The Quiet House" },
  { year: "2025", title: "Architizer A+ Finalist — Hospitality", project: "Hotel Elara" },
  { year: "2025", title: "Dezeen Awards Longlist — Restaurant Interior", project: "Brasserie Noon" },
  { year: "2024", title: "AD100 India — Studios to Watch", project: "Studio Recognition" },
  { year: "2024", title: "FOAID Design Excellence — Adaptive Reuse", project: "Mill House Conversion" },
];

export const processSteps = [
  { phase: "Phase 01", title: "Listen", weeks: "Weeks 1–2", body: "We spend time in your current space and your daily rhythm. The brief we write together becomes the contract every later decision answers to." },
  { phase: "Phase 02", title: "Concept", weeks: "Weeks 3–6", body: "Plans, palettes, and a physical material tray — never just renders. You approve a direction, not a decoration." },
  { phase: "Phase 03", title: "Develop", weeks: "Weeks 7–14", body: "Every junction detailed, every fitting specified, every rupee scheduled. The drawing set runs to hundreds of sheets so the site runs to zero surprises." },
  { phase: "Phase 04", title: "Build", weeks: "Weeks 15–40", body: "Our site team and workshop partners execute under weekly review. You receive a photographed progress log every Friday." },
  { phase: "Phase 05", title: "Handover", weeks: "Final week", body: "Styled, snagged, documented. You get a maintenance manual, supplier ledger, and a one-year care visit — then we hand you the key." },
];

export const timeline = [
  { year: "2014", event: "Founded in a single room above a timber yard in Shivajinagar, Bengaluru." },
  { year: "2016", event: "First full villa, The Kenkere House, published nationally." },
  { year: "2018", event: "Architecture practice added; first ground-up build breaks soil." },
  { year: "2020", event: "In-house furniture workshop opens with six master carpenters." },
  { year: "2022", event: "First hospitality commission — The Verandah, Fort Kochi." },
  { year: "2024", event: "Named to AD100 India. Team crosses forty people." },
  { year: "2026", event: "120+ projects delivered across nine Indian states." },
];

export const stats = [
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "", label: "Years of practice" },
  { value: 9, suffix: "", label: "States built in" },
  { value: 14, suffix: "", label: "Design awards" },
];

export const pricing = [
  { name: "Consultation", price: "₹25,000", unit: "per session", body: "A two-hour working session at your site or our studio, followed by a written direction note.", includes: ["Site or plan review", "Palette & layout direction", "Budget reality check", "Written summary in 48 hrs"], featured: false },
  { name: "Design Only", price: "₹250", unit: "per sq ft", body: "Complete drawing and specification set for your own contractor to execute.", includes: ["Concept to detailed drawings", "Material & fitting schedules", "3D visualisation", "Four site audits during build"], featured: true },
  { name: "Turnkey", price: "₹3,500", unit: "per sq ft onwards", body: "Design and build under one roof, one contract, one handover date.", includes: ["Everything in Design Only", "Execution by our site team", "Workshop-built furniture", "One-year care visit"], featured: false },
];

export const faqs = [
  { q: "What is your minimum project size?", a: "For full-scope interiors we take on projects from 2,000 sq ft or ₹80 lakh upward. Consultation sessions have no minimum — many clients start there." },
  { q: "Do you work outside Bengaluru?", a: "Yes. Roughly half our current work is outside Karnataka — Goa, Mumbai, Delhi NCR, Kerala and Rajasthan. Travel is scheduled into the fee, never invoiced as a surprise." },
  { q: "How long does a full home take?", a: "A 3,000–5,000 sq ft residence typically runs 8–11 months from first meeting to handover: about three months of design and five to eight of build." },
  { q: "Can I use my own contractor?", a: "Absolutely — that is exactly what our Design Only scope is for. We supply the full drawing set and audit the site at four milestones." },
  { q: "Do you take on renovations of older homes?", a: "Heritage and mid-century renovation is one of our favourite scopes. We begin with a conservation assessment before proposing any intervention." },
  { q: "How are fees structured?", a: "Design fees are per square foot, invoiced against phase completions. Turnkey projects carry a fixed contract price with a published rate card — no percentage-of-purchases model, ever." },
  { q: "Will you work with furniture we already own?", a: "We prefer it. Pieces with history anchor a home. Our first site visit includes an inventory of everything worth keeping." },
  { q: "Do you offer only-styling or soft-furnishing scopes?", a: "Occasionally, for past clients. For new clients the smallest scope we offer is the consultation session." },
];

export const blogPosts = [
  { slug: "why-we-start-with-light", title: "Why We Start With Light, Not Layout", date: "2026-05-14", read: "6 min", cover: img.living4, excerpt: "Most briefs begin with rooms. Ours begin with the sun's path across the plot — because a plan that fights the light loses every single day.", body: "Every site we visit, we return to three times: early morning, mid-afternoon, and just after sunset. The plot tells a different truth at each hour.\n\nA west-facing living room in Bengaluru is a furnace from March to May. A north-lit study needs no artificial light for ten hours a day. These are not aesthetic observations — they are the difference between a home you retreat from and one you retreat to.\n\nSo before a single wall is drawn, we map the light. Deep overhangs go where the sun is cruel. Glass goes where it is kind. Courtyards go where the plan needs to borrow sky. Only then do rooms get names.\n\nThe result is a home that costs less to run and feels calmer to inhabit — not because of any material we chose, but because of an argument we refused to lose to the sun." },
  { slug: "the-case-against-open-plans", title: "The Case Against Open Plans (Sometimes)", date: "2026-03-02", read: "5 min", cover: img.living3, excerpt: "The open plan promised togetherness and delivered noise. Here is how we decide when to break the rule everyone forgot was optional.", body: "For two decades the open plan has been sold as the shape of modern family life. And for some families, it is. But we have measured enough homes to know the pattern: the more people work and study from home, the more the open plan fails them.\n\nOur test is simple. We ask every member of the household to describe their worst hour at home. If three of those answers involve sound — a call bleeding into a lesson, a mixer grinder ending a meeting — the plan needs rooms, not zones.\n\nRooms are not the enemy of light. A well-placed internal window, a glazed partition, a borrowed-light transom: these keep the connection while returning the silence.\n\nThe open plan is a tool, not a doctrine. We keep it in the toolbox and reach for it only when the family in front of us actually matches the family it was designed for." },
  { slug: "materials-that-age-forward", title: "Materials That Age Forward", date: "2026-01-20", read: "7 min", cover: img.detail1, excerpt: "Some surfaces are best on day one and decline forever. We specify the opposite kind — materials whose tenth year beats their first.", body: "There are two families of material. The first — laminates, PU finishes, printed veneers — reach their peak the day they are installed. Every scratch afterward is a loss.\n\nThe second family ages forward. Unlacquered brass darkens where hands touch it. Lime plaster develops a soft mineral sheen. Solid teak scratches, then burnishes. Kota stone wears into a map of where the household actually walks.\n\nWe specify the second family wherever the budget allows, because a home should reward time, not resist it. A material that improves with use forgives a real life lived on top of it.\n\nThe honest trade-off: these materials cost more up front and demand patience during the first year of settling. Clients who accept that trade never call us about a scratch again — they call to say the house looks better than the handover photos." },
  { slug: "the-friday-photo-log", title: "The Friday Photo Log: How We Keep Sites Honest", date: "2025-11-08", read: "4 min", cover: img.detail4, excerpt: "Every project we run sends the client a photographed progress log each Friday. It changed our sites more than any contract clause.", body: "Construction disputes rarely begin with bad intent. They begin with fog — a fortnight where nobody quite knows what happened on site, followed by a bill.\n\nSince 2019, every KOSHA site publishes a Friday log: forty to sixty photographs, annotated against the programme, sent before the weekend. What was done, what slipped, what decision is needed by Tuesday.\n\nThe discipline costs our site engineers two hours a week. It has eliminated an entire category of conflict. Clients stopped asking what is happening, because the answer arrives before the question.\n\nThe unexpected benefit: the logs became our best archive. Every detail we have ever built is photographed at the moment it was made — including everything inside the walls that no handover photo can show." },
  { slug: "designing-for-the-indian-coast", title: "Designing for the Indian Coast", date: "2025-09-15", read: "8 min", cover: img.villa1, excerpt: "Salt, monsoon, and 90% humidity destroy catalogue architecture. Coastal homes demand a different rulebook — mostly an older one.", body: "The Konkan and Karavali coasts are littered with five-year-old houses that look twenty-five. Powder-coated aluminium pitting, gypsum ceilings blooming with damp, imported laminates delaminating in a single monsoon.\n\nThe old coastal houses next door, meanwhile, are eighty years old and fine. Their rulebook is simple: laterite breathes, lime absorbs and releases moisture, deep roofs keep rain off walls, and timber is local because local timber has already survived here for centuries.\n\nOur coastal projects — Kaup, Anjuna, Sindhudurg — follow that older logic with modern engineering underneath. Shell-lime plasters over laterite. Coconut and matti timber over imported oak. Copper and brass over anything that rusts.\n\nIt is not nostalgia. It is the only specification that survives the client's own children." },
  { slug: "what-a-lighting-plan-actually-buys", title: "What a Lighting Plan Actually Buys You", date: "2025-07-01", read: "5 min", cover: img.rest2, excerpt: "The most expensive mistake in Indian interiors costs nothing to avoid: a ceiling gridded with identical downlights on a single switch.", body: "Walk into most new apartments and look up: a grid of identical 9W downlights, all on one circuit, all at 6500K. The room has exactly two states — operating theatre, or darkness.\n\nA lighting plan replaces those two states with a day's worth of them. Task light where work happens. Wall grazing where texture deserves it. A low warm circuit for the last hour of the evening. Dimming everywhere that people sit.\n\nThe hardware is not the expense — a well-planned scheme often uses fewer fittings than the grid it replaces. The value is in the circuiting and the restraint.\n\nOur rule of thumb: if every light in a room comes on with one switch, the room was never really designed. It was just wired." },
];

export const careers = [
  { role: "Senior Interior Designer", type: "Full-time · Bengaluru", exp: "6–10 yrs", body: "Lead residential projects from brief to handover. Strong detailing hand and site fluency in Kannada or Hindi expected." },
  { role: "Architect — Project Lead", type: "Full-time · Bengaluru", exp: "5–8 yrs", body: "Run ground-up residential builds. Comfort with climate-first design and coordination-heavy documentation." },
  { role: "3D Visualizer", type: "Full-time · Bengaluru / Remote", exp: "3–6 yrs", body: "Photoreal stills and walkthroughs in Corona/V-Ray or Unreal. A portfolio of restraint over spectacle." },
  { role: "Site Engineer", type: "Full-time · Multiple sites", exp: "4–8 yrs", body: "Own the Friday photo log. Interiors fit-out experience with finish-obsessed quality standards." },
];

export const galleryItems = [
  { src: img.living1, alt: "Sunlit living room in oak and lime plaster", cat: "Residential", tall: true },
  { src: img.kitchen1, alt: "Kitchen in warm timber with stone island", cat: "Residential", tall: false },
  { src: img.hotel1, alt: "Hotel suite with layered natural textiles", cat: "Hospitality", tall: true },
  { src: img.detail1, alt: "Stairwell detail in plaster and brass", cat: "Details", tall: false },
  { src: img.rest1, alt: "Restaurant dining hall in walnut and cane", cat: "Hospitality", tall: false },
  { src: img.villa2, alt: "Goan villa facade behind mango canopy", cat: "Architecture", tall: true },
  { src: img.bedroom1, alt: "Bedroom in bleached teak and linen", cat: "Residential", tall: false },
  { src: img.office1, alt: "Daylit office with timber baffles", cat: "Workspace", tall: false },
  { src: img.detail6, alt: "Retail vitrine on cantilevered stone", cat: "Details", tall: true },
  { src: img.bath1, alt: "Bath in travertine with brass fittings", cat: "Residential", tall: false },
  { src: img.villa3, alt: "Courtyard house in exposed concrete", cat: "Architecture", tall: false },
  { src: img.rest2, alt: "Live-fire restaurant in charred timber", cat: "Hospitality", tall: false },
  { src: img.detail4, alt: "Joinery detail in smoked oak", cat: "Details", tall: false },
  { src: img.apt1, alt: "Penthouse living space above the sea link", cat: "Residential", tall: true },
  { src: img.detail3, alt: "Rammed earth wall texture", cat: "Details", tall: false },
  { src: img.hotel2, alt: "Heritage hotel verandah in Fort Kochi", cat: "Hospitality", tall: false },
];

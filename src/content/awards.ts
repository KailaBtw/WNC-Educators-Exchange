import { withBase } from "../lib/paths";

export type AwardGalleryImage = {
  src: string;
  alt: string;
};

export type Awardee = {
  id: string;
  name: string;
  institution: string;
  recognition: string;
  year: string;
  stance: string;
  category: string;
  summary: string;
  focus: string[];
  image: string;
  imageAlt: string;
  /** Full proposal / nomination packet under /public */
  proposalPdf?: string;
  /** Summit award slide PDF under /public */
  slidesPdf?: string;
  /** Award certificate download (PDF preferred) under /public/files/certs */
  certificateUrl?: string;
  /** Raster preview for on-page display (PDF embeds are unreliable) */
  certificateImage?: string;
  gallery?: AwardGalleryImage[];
  /** True when portrait/PDF assets are still pending from Bill. */
  pendingMedia?: boolean;
};

export const awardsIntro = {
  eyebrow: "Awards",
  title: "Faculty we recognize",
  description:
    "Celebrate this year’s BrAIn Hub Educator Award winners—and watch for the next faculty & student community contest.",
};

/**
 * Teaser for the next contest cycle. Full guidelines stay in a downloadable
 * packet (`guideUrl`) rather than on this page.
 */
export const upcomingAwards = {
  eyebrow: "Coming up",
  title: "Faculty & student community contest",
  summary:
    "A contest for faculty and students working together—using AI on projects that help Western North Carolina communities. Official name and full packet are forthcoming; here’s what we know so far.",
  when: "Introduced at the November 13 Educators Exchange · Mars Hill University",
  lead: "Steven Young · Blue Ridge Community College",
  highlights: [
    {
      label: "Who",
      text: "Faculty and students from WNC campuses, entering as teams on community-facing AI projects.",
    },
    {
      label: "What",
      text: "Projects that put AI to work for local communities—not only classroom demos, but real regional impact.",
    },
    {
      label: "When",
      text: "Steven Young will walk through the contest during the Nov 13 afternoon program; timelines and entry steps follow in the guidelines packet.",
    },
  ],
  note: "We’ll keep this page light. Full criteria, deadlines, and how to enter will live in a downloadable guide once sponsors confirm the details.",
  /** Packet / guidelines PDF or Drive link — empty shows “coming soon” note. */
  guideUrl: "",
  guideLabel: "Download guidelines",
};

export const pastAwardsIntro = {
  eyebrow: "2026 faculty excellence awards",
  title: "This year’s winners",
  description:
    "The six 2026 AI Innovator in Education Award winners from the BrAIn Hub Educator Award—WNC educators using AI to strengthen student achievement, workforce readiness, and institutional practice.",
};

/**
 * Canonical six awardees (Bill): Dellinger, Oxenreider, Kelley, Rhynes,
 * Renuka Gusain, Brandy Hadley. Certificates in public/files/certs/.
 */
const awardeesRaw: Awardee[] = [
  {
    id: "elizabeth-dellinger",
    name: "Elizabeth Dellinger",
    institution: "Mayland Community College · Business Administration",
    recognition: "2026 AI Innovator in Education Award",
    year: "2026",
    stance: "Think first, AI second",
    category: "Student Achievement",
    summary:
      "A cross-disciplinary business simulation model that uses AI-powered scenarios to strengthen leadership, communication, and decision-making—while teaching students to evaluate, verify, and challenge AI-generated information.",
    focus: [
      "AI-powered leadership and decision simulations",
      "AI literacy woven through the curriculum",
      "Critical evaluation of AI-generated information",
    ],
    image: "/images/awards/elizabeth-dellinger.jpg",
    imageAlt: "Portrait of Elizabeth Dellinger, Mayland Community College",
    slidesPdf: "/files/awards/slides/elizabeth-dellinger.pdf",
    certificateUrl: "/files/certs/elizabeth-dellinger.pdf",
    certificateImage: "/images/awards/certs/elizabeth-dellinger.png",
  },
  {
    id: "anne-oxenreider",
    name: "Anne Oxenreider",
    institution: "Western Carolina University · OIPE",
    recognition: "2026 AI Innovator in Education Award",
    year: "2026",
    stance: "Governance before data",
    category: "Institutional Improvement",
    summary:
      "Integrated Enrollment Intelligence: an AI-powered weekly admissions analysis workflow—WCU’s first recurring enrollment intelligence function, with six deliverables per cycle and formal IT Security and Legal review before any data was processed.",
    focus: [
      "Weekly segment-level admissions analysis",
      "Six deliverables per cycle including dashboard and briefing",
      "IT Security and Legal review before processing",
    ],
    image: "/images/awards/anne-oxenreider.jpg",
    imageAlt: "Portrait of Anne Oxenreider, Western Carolina University",
    slidesPdf: "/files/awards/slides/anne-oxenreider.pdf",
    certificateUrl: "/files/certs/anne-oxenreider.pdf",
    certificateImage: "/images/awards/certs/anne-oxenreider.png",
  },
  {
    id: "jason-kelley",
    name: "Jason Kelley",
    institution: "Appalachian State University · Next Carolina Ventures",
    recognition: "2026 AI Innovator in Education Award",
    year: "2026",
    stance: "Prototype with purpose",
    category: "Student Achievement",
    summary:
      "AI-Enabled Venture Creation: a scaffolded approach that turns management students into AI prototype builders at zero cost—teaching why and how to use AI strategically, with built-in ethical friction so students reason about AI, not only with it.",
    focus: [
      "Zero-cost AI prototyping for management students",
      "Six-stage arc for strategic AI use",
      "Ethical friction built into the workflow",
    ],
    image: "/images/awards/jason-kelley.jpg",
    imageAlt: "Portrait of Jason Kelley, Appalachian State University",
    slidesPdf: "/files/awards/slides/jason-kelley.pdf",
    certificateUrl: "/files/certs/jason-kelley.pdf",
    certificateImage: "/images/awards/certs/jason-kelley.png",
  },
  {
    id: "crystal-rhynes",
    name: "Crystal Rhynes",
    institution: "Southwestern Community College",
    recognition: "2026 AI Innovator in Education Award",
    year: "2026",
    stance: "Practice before the room",
    category: "Workforce Readiness",
    summary:
      "Ethical Simulation-Based Workforce Training Model—using AI for virtual human simulations that prepare students for real-world client interactions, with guided reflection and instructor feedback across Western North Carolina and the Qualla Boundary.",
    focus: [
      "Virtual human simulations for client work",
      "Guided reflection and instructor feedback",
      "Workforce-ready training including Qualla Boundary",
    ],
    image: "/images/awards/crystal-rhynes.jpg",
    imageAlt: "Crystal Rhynes facilitating a workshop at Southwestern Community College",
    slidesPdf: "/files/awards/slides/crystal-rhynes.pdf",
    certificateUrl: "/files/certs/crystal-rhynes.pdf",
    certificateImage: "/images/awards/certs/crystal-rhynes.png",
  },
  {
    id: "renuka-gusain",
    name: "Dr. Renuka Gusain",
    institution: "UNC Asheville · Assistant Professor",
    recognition: "2026 AI Innovator in Education Award",
    year: "2026",
    stance: "Teach with and against AI",
    category: "Faculty excellence",
    summary:
      "Teaching with and against AI: Ethical, Reflective, and Workforce-Aligned AI Pedagogy—helping students use AI tools critically while keeping ethical reflection and workforce readiness at the center of classroom practice.",
    focus: [
      "Ethical and reflective AI pedagogy",
      "Workforce-aligned classroom practice",
      "Teaching with and against generative AI",
    ],
    image: "/images/awards/renuka-gusain.png",
    imageAlt: "Portrait of Dr. Renuka Gusain, UNC Asheville",
    certificateUrl: "/files/certs/renuka-gusain.pdf",
    certificateImage: "/images/awards/certs/renuka-gusain.png",
  },
  {
    id: "brandy-hadley",
    name: "Brandy Hadley",
    institution: "Western North Carolina",
    recognition: "2026 AI Innovator in Education Award",
    year: "2026",
    stance: "Profile forthcoming",
    category: "Faculty excellence",
    summary:
      "2026 BrAIn Hub Educator Award winner. Project summary and a dedicated headshot will be added when materials arrive; award certificate is available below.",
    focus: ["Award certificate available", "Full profile materials pending"],
    image: "/images/awards/regional-faculty.svg",
    imageAlt: "Portrait placeholder for Brandy Hadley",
    certificateUrl: "/files/certs/brandy-hadley.png",
    certificateImage: "/images/awards/certs/brandy-hadley.png",
    pendingMedia: true,
  },
];

export const awardees: Awardee[] = awardeesRaw.map((person) => ({
  ...person,
  image: withBase(person.image),
  proposalPdf: person.proposalPdf ? withBase(person.proposalPdf) : undefined,
  slidesPdf: person.slidesPdf ? withBase(person.slidesPdf) : undefined,
  certificateUrl: person.certificateUrl ? withBase(person.certificateUrl) : undefined,
  certificateImage: person.certificateImage ? withBase(person.certificateImage) : undefined,
  gallery: person.gallery?.map((img) => ({ ...img, src: withBase(img.src) })),
}));

export function getAwardee(slug: string) {
  return awardees.find((person) => person.id === slug);
}

export function awardProfilePath(id: string) {
  return `/awards/${id}`;
}

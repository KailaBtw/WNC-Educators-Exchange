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
  gallery?: AwardGalleryImage[];
  /** True when portrait/PDF assets are still pending from Bill. */
  pendingMedia?: boolean;
};

export const awardsIntro = {
  eyebrow: "2026 faculty excellence awards",
  title: "Faculty we recognize",
  description:
    "The six 2026 AI Innovator in Education Award winners from the BrAIn Hub Educator Award—WNC educators using AI to strengthen student achievement, workforce readiness, and institutional practice.",
};

/**
 * Canonical six awardees (Bill, Sep 2025): Dellinger, Oxenreider, Kelley,
 * Rhynes, Gusain, Hadley. Portraits/slides for Gusain & Hadley pending.
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
  },
  {
    id: "gusain",
    name: "Gusain",
    institution: "Western North Carolina",
    recognition: "2026 AI Innovator in Education Award",
    year: "2026",
    stance: "Profile forthcoming",
    category: "Faculty excellence",
    summary:
      "2026 BrAIn Hub Educator Award winner. Full profile, institution details, and portrait will be added when award materials arrive.",
    focus: ["Award materials pending"],
    image: "/images/awards/regional-faculty.svg",
    imageAlt: "Portrait placeholder for award winner Gusain",
    pendingMedia: true,
  },
  {
    id: "hadley",
    name: "Hadley",
    institution: "Western North Carolina",
    recognition: "2026 AI Innovator in Education Award",
    year: "2026",
    stance: "Profile forthcoming",
    category: "Faculty excellence",
    summary:
      "2026 BrAIn Hub Educator Award winner. Portrait appears on the award image; full profile and named headshot will be added when materials arrive.",
    focus: ["Award materials pending"],
    image: "/images/awards/regional-faculty.svg",
    imageAlt: "Portrait placeholder for award winner Hadley",
    pendingMedia: true,
  },
];

export const awardees: Awardee[] = awardeesRaw.map((person) => ({
  ...person,
  image: withBase(person.image),
  proposalPdf: person.proposalPdf ? withBase(person.proposalPdf) : undefined,
  slidesPdf: person.slidesPdf ? withBase(person.slidesPdf) : undefined,
  gallery: person.gallery?.map((img) => ({ ...img, src: withBase(img.src) })),
}));

export function getAwardee(slug: string) {
  return awardees.find((person) => person.id === slug);
}

export function awardProfilePath(id: string) {
  return `/awards/${id}`;
}

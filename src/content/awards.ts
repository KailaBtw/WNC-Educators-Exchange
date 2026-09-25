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
};

export const awardsIntro = {
  eyebrow: "2026 faculty excellence awards",
  title: "Faculty we recognize",
  description:
    "2026 AI Innovator in Education Award winners from the BrAIn Hub Educator Award—WNC educators using AI to strengthen student achievement, workforce readiness, and institutional practice.",
};

/**
 * Profiles from nomination packets (/content) and summit award slides
 * (public/files/award_slides). Note: adam-petit.pdf was sourced from a packet
 * file named for Greg Thomas—confirm with Bill before beta announce.
 */
const awardeesRaw: Awardee[] = [
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
    id: "julie-johnson-busbin",
    name: "Dr. Julie Johnson-Busbin",
    institution: "Western Carolina University",
    recognition: "2026 AI Innovator in Education Award",
    year: "2026",
    stance: "AI as coaching partner",
    category: "Student Achievement",
    summary:
      "Reimagining skills-based learning with Custom GPTs for MKT 310 Consultative Selling—constrained coaching systems that slow students down, enforce process sequencing, and prepare online learners for live role-play.",
    focus: [
      "Six Custom GPTs aligned to the sales process",
      "Structured decision trees—not answer generators",
      "Stronger live role-play readiness and engagement",
    ],
    image: "/images/awards/julie-johnson-busbin.svg",
    imageAlt: "Portrait placeholder for Dr. Julie Johnson-Busbin",
    proposalPdf: "/files/awards/julie-johnson-busbin.pdf",
  },
  {
    id: "john-andrews",
    name: "John Andrews",
    institution: "Lenoir-Rhyne University · College of Business & Economics",
    recognition: "2026 AI Innovator in Education Award",
    year: "2026",
    stance: "Make thinking visible",
    category: "Student Achievement",
    summary:
      "Three Rounds: a structured writing exercise that runs the same assignment through solo draft, AI as thinking partner, and AI draft / student critique—so the reflection, not the polished artifact, becomes the assessment.",
    focus: [
      "Round 1 solo · Round 2 thinking partner · Round 3 critique",
      "Visibility, metacognition, and critical evaluation",
      "Open-source prompt adaptable across disciplines",
    ],
    image: "/images/awards/john-andrews.svg",
    imageAlt: "Portrait placeholder for John Andrews",
    proposalPdf: "/files/awards/john-andrews.pdf",
  },
  {
    id: "meredith-carpenter",
    name: "Meredith Carpenter",
    institution: "Haywood Community College",
    recognition: "2026 AI Innovator in Education Award",
    year: "2026",
    stance: "Ethics before shortcuts",
    category: "Institutional Improvement",
    summary:
      "Business Administration instructor nominated by Dr. Tim Scapin for AI literacy instruction, an interactive ethics video with embedded questions, and a flipped business-plan assignment that turns AI-generated work into a semester-long critique tool.",
    focus: [
      "Responsible AI literacy from day one",
      "Flipped AI-generated business plan analysis",
      "Campus model for ethical classroom AI use",
    ],
    image: "/images/awards/meredith-carpenter.svg",
    imageAlt: "Portrait placeholder for Meredith Carpenter",
    proposalPdf: "/files/awards/meredith-carpenter.pdf",
  },
  {
    id: "amber-thompson",
    name: "Amber C. Thompson",
    institution: "Western Carolina University · School of Engineering and Technology",
    recognition: "2026 AI Innovator in Education Award",
    year: "2026",
    stance: "Embrace, then evaluate",
    category: "Institutional Improvement",
    summary:
      "Associate Professor of Practice embedding AI into distance learning assignments so students explore benefits and shortfalls—building critical awareness, faster information triage, and more informed decisions over a semester.",
    focus: [
      "AI in distance-learning assignments",
      "Teach use and shortfalls together",
      "Track how student opinions shift",
    ],
    image: "/images/awards/amber-thompson.svg",
    imageAlt: "Portrait placeholder for Amber C. Thompson",
    proposalPdf: "/files/awards/amber-thompson.pdf",
  },
  {
    id: "adam-petit",
    name: "Adam Petit",
    institution: "Isothermal Community College",
    recognition: "2026 AI Innovator in Education Award",
    year: "2026",
    stance: "Extend instruction, don’t replace it",
    category: "Student Achievement",
    summary:
      "Study Fetch AI tutoring in gateway mathematics—instructor-aligned agents that give underprepared students on-demand scaffolding before, during, and after class, expanding access beyond traditional tutoring.",
    focus: [
      "AI tutors tied to course learning outcomes",
      "College readiness in gateway math",
      "Ethical, transparent, equitable support",
    ],
    image: "/images/awards/adam-petit.svg",
    imageAlt: "Portrait placeholder for Adam Petit",
    proposalPdf: "/files/awards/adam-petit.pdf",
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

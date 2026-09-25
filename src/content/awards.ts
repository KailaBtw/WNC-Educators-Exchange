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
  /** Root path under /public, e.g. /files/awards/name.pdf */
  proposalPdf?: string;
  gallery?: AwardGalleryImage[];
};

export const awardsIntro = {
  eyebrow: "Recognition",
  title: "Award-winning faculty",
  description:
    "2026 AI Innovator in Education Award winners from the BrAIn Hub Educator Award—WNC educators using AI to strengthen student achievement, workforce readiness, and institutional practice.",
};

/**
 * Profiles drawn from nomination / submission packets in /content.
 * Note: adam-petit.pdf was sourced from a packet file named for Greg Thomas—
 * confirm with Bill that this is Adam Petit’s proposal before beta announce.
 */
const awardeesRaw: Awardee[] = [
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
  gallery: person.gallery?.map((img) => ({ ...img, src: withBase(img.src) })),
}));

export function getAwardee(slug: string) {
  return awardees.find((person) => person.id === slug);
}

export function awardProfilePath(id: string) {
  return `/awards/${id}`;
}

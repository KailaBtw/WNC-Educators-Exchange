export type SchoolPractice = {
  id: string;
  institution: string;
  title: string;
  summary: string;
  tags: string[];
  link?: { href: string; label: string };
};

export const schoolsIntro = {
  eyebrow: "The Essentials",
  title: "What campuses are doing",
  description:
    "Across Western North Carolina, educators are rewriting policy, redesigning assessment, and building shared language for responsible AI use. Here are practices surfacing from regional summits and campus updates.",
};

export const schoolPractices: SchoolPractice[] = [
  {
    id: "abtech-ryg",
    institution: "ABTech",
    title: "Red / Yellow / Green AI policy on assignments",
    summary:
      "A shared vocabulary for AI use: red means no use allowed, yellow means disclosed or supervised use, and green means open use. Simple enough to revise as tools change.",
    tags: ["Policy", "Transparency"],
  },
  {
    id: "acaweb-pd",
    institution: "ACAWEB",
    title: "Faculty course on AI in education",
    summary:
      "An online professional development course (~1 hour per week) organized around the Five E model: engage, explore, explain, elaborate, evaluate. Opens again in early March.",
    tags: ["Faculty development", "Five E"],
    link: { href: "https://acaweb.org/AI-PD", label: "Visit ACAWEB AI-PD" },
  },
  {
    id: "unca-cs",
    institution: "UNC Asheville CS",
    title: "Three pillars: assessment, usefulness, workplace",
    summary:
      "More in-person and process-based assessment; encourage AI to explain concepts and interpret errors while students own submitted work; introduce workplace AI tools in higher-level courses after foundations are solid.",
    tags: ["Assessment", "Curriculum"],
  },
  {
    id: "ethics-module",
    institution: "Regional campuses",
    title: "AI ethics as a first assignment",
    summary:
      "Several programs open with an ethics module so students confront responsible use before high-stakes work begins—building judgment early rather than policing late.",
    tags: ["Ethics", "Syllabus"],
  },
  {
    id: "business-plan-rewrite",
    institution: "Regional classrooms",
    title: "Semester-long rewrite of an AI-assisted plan",
    summary:
      "Students draft a business plan with AI, then spend the term analyzing and rewriting it. The arc shows benefits and shortfalls, teaching tool use without hiding limitations.",
    tags: ["Pedagogy", "Process"],
  },
  {
    id: "student-service",
    institution: "Branch Hub / Workforce Board",
    title: "Student community service project (upcoming)",
    summary:
      "Extra-curricular service and networking: teams address a community issue with AI allowed for development. June 4–5, 2026; winners present at the big event with employers present.",
    tags: ["Students", "Workforce"],
  },
  {
    id: "crm-rag",
    institution: "Regional enrollment / support",
    title: "AI CRM and RAG-backed student support",
    summary:
      "Prospective-student chat that retrieves from real course documents, routes medical questions to health services, and can hand off to humans during office hours—reducing friction without losing escalation paths.",
    tags: ["Infrastructure", "Privacy"],
  },
  {
    id: "wces-place",
    institution: "WCES / Blue Ridge CC (Tanya)",
    title: "Physical place still shapes learning",
    summary:
      "Colleges provide community and co-location. Fast marketplace knowledge and slow educational wisdom both matter; educators help students discern when each is useful.",
    tags: ["Place", "Philosophy"],
  },
];

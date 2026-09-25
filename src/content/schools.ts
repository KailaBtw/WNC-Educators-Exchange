export type SchoolPractice = {
  id: string;
  institution: string;
  title: string;
  summary: string;
  detail: string[];
  tags: string[];
  link?: { href: string; label: string };
};

export const schoolsIntro = {
  eyebrow: "Campus practice",
  title: "What schools are doing with AI",
  description:
    "Change is here. These are approaches WNC educators reported at summits: clearer policy language, redesigned assessment, faculty training, and tools that keep a human in the loop.",
};

export const schoolPractices: SchoolPractice[] = [
  {
    id: "abtech-ryg",
    institution: "ABTech",
    title: "Red / Yellow / Green AI policy on assignments",
    summary:
      "Red: no use allowed. Yellow: with supervision. Green: all uses allowed.",
    detail: [
      "ABTech’s AI use policy uses a red, yellow, green system on assignments so faculty and students share one vocabulary for what is permitted.",
      "Transparency sits alongside it: syllabus statements and student self-identification of AI use. Detection tools alone produce false positives and do not teach judgment.",
    ],
    tags: ["Policy", "Transparency"],
  },
  {
    id: "acaweb-pd",
    institution: "ACAWEB",
    title: "Faculty course on AI in education",
    summary:
      "Online course (~1 hour per week) organized around the Five E model: engage, explore, explain, elaborate, evaluate.",
    detail: [
      "Each module repeats the Five E cycle: engage (prior knowledge), explore (hands-on), explain (instruction to fill gaps), elaborate (real-world application), evaluate (quick check).",
      "Opening again in early March—message if you want a seat: acaweb.org/AI-PD.",
    ],
    tags: ["Faculty development", "Five E"],
    link: { href: "https://acaweb.org/AI-PD", label: "Visit ACAWEB AI-PD" },
  },
  {
    id: "unca-cs",
    institution: "UNC Asheville CS",
    title: "Three pillars: assessment, usefulness, workplace",
    summary:
      "Process-based assessment, responsible classroom AI use, and workplace tools after foundations are solid.",
    detail: [
      "Assessment: more in-person components and process documentation—how understanding develops, not only the final output.",
      "Usefulness: professors encourage AI to explain concepts and interpret error messages; students remain responsible for what they submit. “Your code should be your own.”",
      "Workplace: higher-level courses can introduce tools like Cursor once students know the basics—preparing for professional use without skipping the scaffolding.",
    ],
    tags: ["Assessment", "Curriculum"],
  },
  {
    id: "ethics-module",
    institution: "Regional campuses",
    title: "AI ethics as a first assignment",
    summary:
      "Several programs open with an ethics module so students confront responsible use before high-stakes work begins.",
    detail: [
      "Students are already using tools at home, regardless of policy. Starting with ethics and disclosure sets the frame before the first major paper or project.",
      "Students need guidance on proper and ethical use—when AI helps learning, when it hollows it out, and how to say what you used.",
    ],
    tags: ["Ethics", "Syllabus"],
  },
  {
    id: "business-plan-rewrite",
    institution: "Regional classrooms",
    title: "Semester-long rewrite of an AI-assisted plan",
    summary:
      "First assignment: make a business plan while using AI. Spend the semester analyzing and rewriting it.",
    detail: [
      "By the end it shows students the benefits and shortfalls of using AI—and how to use it as a tool. Responsible use is essential like any tool.",
    ],
    tags: ["Pedagogy", "Process"],
  },
  {
    id: "student-service",
    institution: "Branch Hub / Workforce Board",
    title: "Student community service project (upcoming)",
    summary:
      "Teams address a community issue with AI allowed for development; winners present with employers in the room.",
    detail: [
      "Meant as extracurricular learning/service and for networking. Find it under Branch Hub 2026 AI → workforce development board.",
      "June 4–5, 2026. Winners present at the larger convening. Employers and recruiters expected on site.",
    ],
    tags: ["Students", "Workforce"],
  },
  {
    id: "crm-rag",
    institution: "Regional enrollment / support",
    title: "AI CRM and RAG-backed student support",
    summary:
      "Chat that retrieves from real course documents, routes sensitive questions to people, and can hand off during office hours.",
    detail: [
      "Prospective students want fast answers. Every click-off is a potential lost enrollment. RAG against syllabus and campus docs improves accuracy on niche questions.",
      "Medical questions link to the health center. If more support is needed, chat can swap to CRM people during office hours—or sit in queue overnight.",
      "Only 25% of WNC institutions currently provide a private or secure AI tool for faculty and staff. Data privacy remains a live concern.",
    ],
    tags: ["Infrastructure", "Privacy"],
  },
  {
    id: "wces-place",
    institution: "WCES / Blue Ridge CC",
    title: "Physical place still shapes learning",
    summary:
      "Colleges provide community and co-location. Fast marketplace knowledge and slow educational wisdom both matter.",
    detail: [
      "Physical colleges have a place in education—they provide community, a sense of place. Co-location improves learning outcomes.",
      "The world wants fast results. Education is about introspective, slower gains—wisdom, not only lookup knowledge. AI is strong at fast knowledge; humans remain stronger at deep understanding.",
    ],
    tags: ["Place", "Philosophy"],
  },
];

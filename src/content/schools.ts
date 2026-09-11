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
  title: "What schools are doing",
  description:
    "Change is already here. These are approaches WNC educators reported at summits: clearer policy language, redesigned assessment, faculty training, and tools that keep a human in the loop.",
};

export const schoolPractices: SchoolPractice[] = [
  {
    id: "abtech-ryg",
    institution: "ABTech",
    title: "Red / Yellow / Green AI policy on assignments",
    summary:
      "A shared vocabulary for AI use: red means no use allowed, yellow means disclosed or supervised use, and green means open use.",
    detail: [
      "The categories matter less than the shared language. Faculty and students can talk about permitted use without inventing a new policy every semester.",
      "Transparency in syllabus statements and student self-identification of AI use sits alongside the framework. Detection tools alone produce false positives and do not teach judgment.",
      "Because the scheme is simple, it can be revised when tools change—policy built for a moving target rather than a five-year freeze.",
    ],
    tags: ["Policy", "Transparency"],
  },
  {
    id: "acaweb-pd",
    institution: "ACAWEB",
    title: "Faculty course on AI in education",
    summary:
      "An online professional development course (~1 hour per week) organized around the Five E model: engage, explore, explain, elaborate, evaluate.",
    detail: [
      "Each module repeats the Five E cycle so faculty practice the same pedagogical loop they might use with students.",
      "The course is practical: prior knowledge checks, hands-on exploration, instruction to fill gaps, real-world application, and a short evaluation.",
      "It opens again in early March. Message through ACAWEB if you want a seat: acaweb.org/AI-PD.",
    ],
    tags: ["Faculty development", "Five E"],
    link: { href: "https://acaweb.org/AI-PD", label: "Visit ACAWEB AI-PD" },
  },
  {
    id: "unca-cs",
    institution: "UNC Asheville CS",
    title: "Three pillars: assessment, usefulness, workplace",
    summary:
      "Process-based assessment, responsible classroom AI use, and workplace tools introduced after foundations are solid.",
    detail: [
      "Assessment is shifting toward in-person components and process documentation—how understanding develops, not only the final artifact a model can polish in a minute.",
      "Usefulness: professors encourage AI to explain concepts and interpret error messages, while students remain responsible for what they submit. “Your code should be your own.”",
      "Workplace: higher-level courses can introduce tools like Cursor once students know the basics—preparing for professional use without skipping the scaffolding that makes judgment possible.",
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
      "Students are already using tools at home. Starting with ethics and disclosure sets the frame before the first major paper or project.",
      "The goal is judgment, not scare tactics: when AI helps learning, when it hollows it out, and how to say what you used.",
    ],
    tags: ["Ethics", "Syllabus"],
  },
  {
    id: "business-plan-rewrite",
    institution: "Regional classrooms",
    title: "Semester-long rewrite of an AI-assisted plan",
    summary:
      "Students draft a business plan with AI, then spend the term analyzing and rewriting it.",
    detail: [
      "The first assignment deliberately uses AI. The rest of the semester teaches students to see what the draft got right, what it invented, and what still requires human judgment.",
      "By the end, students have practiced using the tool as a tool—benefits and shortfalls included—rather than treating the first output as the finished product.",
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
      "Framed as extracurricular learning and networking, not a replacement for coursework.",
      "Find it under Branch Hub 2026 AI → workforce development board. Event dates: June 4–5; winners present at the larger convening.",
      "Employers and recruiters are expected on site—another reason workplace AI fluency and foundational skill both matter.",
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
      "Medical or high-stakes needs should route to the health center or a human—not linger in a bot that cannot help.",
      "Only 25% of WNC institutions currently provide a private or secure AI tool for faculty and staff. Data privacy remains a live concern in survey responses.",
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
      "The world wants fast results. Education is about introspective, slower gains—wisdom, not only lookup knowledge.",
      "AI is strong at fast knowledge. Humans remain stronger at deep understanding. The teaching task is helping students discern when each is useful.",
      "That framing came through clearly in regional conversations, including from WCES / Blue Ridge CC colleagues.",
    ],
    tags: ["Place", "Philosophy"],
  },
];

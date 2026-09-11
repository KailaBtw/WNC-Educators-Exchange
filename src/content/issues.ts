export type IssueCategory = "classroom" | "institution" | "workplace";

export type Issue = {
  number: number;
  slug: string;
  title: string;
  category: IssueCategory;
  shortBlurb: string;
  body: string[];
};

export const issueFilters: { id: "all" | IssueCategory; label: string }[] = [
  { id: "all", label: "All issues" },
  { id: "classroom", label: "Classroom" },
  { id: "institution", label: "Institution" },
  { id: "workplace", label: "Workplace" },
];

export const issueCategoryLabel: Record<IssueCategory, string> = {
  classroom: "Classroom",
  institution: "Institution",
  workplace: "Workplace",
};

export const issues: Issue[] = [
  {
    number: 1,
    slug: "critical-thinking",
    title: "Protecting Critical Thinking",
    category: "classroom",
    shortBlurb:
      "Real understanding can't be fast-tracked, so AI must sharpen thinking, not replace it.",
    body: [
      "True understanding cannot be fast-tracked; it is a deliberate, deeply human process. While AI provides an illusion of instant learning, education must cultivate the deep critical thinking skills required to evaluate AI output, while still teaching the foundational skills.",
      "AI handles fast knowledge well: quick answers, error correction, lookup tasks. Education is built around slow knowledge—the kind that requires wrestling with something, getting it wrong, and arriving at an insight that sticks because you earned it. Brain first, then AI.",
    ],
  },
  {
    number: 2,
    slug: "guidance-over-prohibition",
    title: "Create an Open Dialog",
    category: "classroom",
    shortBlurb:
      "Many students already use AI, so teach good judgment skills and proper use instead of bans.",
    body: [
      "Students use AI at home no matter what the syllabus says. Banning it ends the chance to teach good judgment around using it. The educators with the best results bring AI into the open and frame it clearly as a tool for learning and not a replacement.",
      "A useful framing treats these tools like a strong teaching assistant: something that helps check thinking, clarify a concept already partly understood, or point toward resources—not something that generates the whole assignment.",
    ],
  },
  {
    number: 3,
    slug: "policy-fast-moving-target",
    title: "Policy Built for a Fast-Moving Target",
    category: "institution",
    shortBlurb:
      "AI changes faster than policy can, so treat your guidelines as a living document.",
    body: [
      "65% of WNC educators say their policy is behind or absent. The cause is structural: technology changes way faster than policy can keep up. The best schools treat policy as a living document and get input from front-line educators on which way to move.",
      "Shared frameworks like ABTech’s red/yellow/green system give everyone a common vocabulary that is simple enough to revise when conditions change.",
    ],
  },
  {
    number: 4,
    slug: "judge-ai-output",
    title: "Judging AI Output",
    category: "classroom",
    shortBlurb:
      "AI never warns you when it's wrong, so evaluating its output is a skill for every discipline.",
    body: [
      "AI never tells you when it is wrong. Hallucinations are a common issue. A fabricated citation looks exactly like a real one. Critical evaluation of AI output is a literacy problem, and it is a skill that belongs in every discipline.",
      "75% of WNC educators believe AI literacy should be a core competency. That consensus needs to become cross-disciplinary policy: every student learns to ask how they know an AI answer is right.",
    ],
  },
  {
    number: 5,
    slug: "assessment-process",
    title: "Assessment Must Shift to Process",
    category: "classroom",
    shortBlurb:
      "When AI can write the final paper in a minute, grade the process, not just the answer.",
    body: [
      "A model can produce a competent final paper in under a minute. Educators who grade only the final product end up measuring the tool, not the student. 60% of WNC educators have already redesigned assignments toward evaluating the process.",
      "Process-based assessment—drafts, checkpoints, in-person components, iterative projects—gives better signal about where a student is and what they need. It is also stronger pedagogy with or without AI.",
    ],
  },
  {
    number: 6,
    slug: "workplace-preparation",
    title: "Workplace Preparation Creates Tension",
    category: "workplace",
    shortBlurb:
      "Employers want AI fluency, but students need to build foundational skills first, then AI tools can be introduced.",
    body: [
      "Employers are beginning to expect AI proficiency. But learning requires students to solve the issues themselves. A phased approach to AI introduction ensures students learn foundational skills without becoming dependent on AI in the process.",
      "Establish core competency first. Once a student can reason through a problem without the tool, bring AI in deliberately as a professional instrument—to accelerate work, pressure-test reasoning, and explore options quickly.",
    ],
  },
  {
    number: 7,
    slug: "faculty-training",
    title: "Training Faculty for Appropriate Use",
    category: "institution",
    shortBlurb:
      "Faculty want training and administrative direction, not just logins.",
    body: [
      "Faculty want training and direction, not just access to models. Only 25% of WNC institutions have invested in a dedicated AI tool for their faculty.",
      "Faculty at schools with genuine institutional support show higher enthusiasm and lower anxiety than those left to figure this out on their own. Hands-on time with the tools, peer collaboration, and clear signals from leadership are what faculty are asking for.",
    ],
  },
  {
    number: 8,
    slug: "institutional-infrastructure",
    title: "AI as Institutional Infrastructure",
    category: "institution",
    shortBlurb:
      "AI now handles chatbots and enrollment systems, so build it with human in-the-loop and data privacy in mind.",
    body: [
      "Schools across WNC run AI for chatbots, enrollment systems, and administrative work. Done poorly, it routes a student in real need to a bot that cannot help. Good support requires mixed help-desk routing depending on the issue at hand.",
      "60% of educators flagged data privacy directly as a concern. Any student-facing system needs a clear escalation path to a person, and clear governance for what is stored, where it goes, and who can access it.",
    ],
  },
  {
    number: 9,
    slug: "collaboration-beats-silos",
    title: "Collaboration Beats Silos",
    category: "institution",
    shortBlurb:
      "Campuses that share strategies move faster than those going it alone, same with colleagues.",
    body: [
      "Campuses making real progress share strategies and build common frameworks. The Land of Sky regional summits are the kind of infrastructure that makes it possible.",
      "Shared strategies, faculty exchanges, and cross-institutional frameworks produce faster, more durable progress than parallel but disconnected efforts. One summit is a conversation; a series with follow-through is infrastructure.",
    ],
  },
  {
    number: 10,
    slug: "human-connection",
    title: "AI Can’t Replace Human Connection",
    category: "classroom",
    shortBlurb:
      "In-person learning builds the engagement and relationships no chatbot can.",
    body: [
      "In-person settings produce stronger engagement, better retention, and relationships that change a student’s path. Learning ultimately works best in an engaging and cooperative environment, with active participation from students and educators.",
      "Spontaneous mentorship, classroom disagreement that sharpens thinking, and the sense of belonging that keeps a struggling student enrolled rarely happen in a chat window. Place still matters.",
    ],
  },
];

export function getIssue(slug: string) {
  return issues.find((i) => i.slug === slug);
}

export function getFeaturedIssues(count = 3) {
  return issues.slice(0, count);
}

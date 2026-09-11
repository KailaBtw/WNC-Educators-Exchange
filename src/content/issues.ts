export type Issue = {
  number: number;
  slug: string;
  title: string;
  shortBlurb: string;
  body: string[];
};

export const issues: Issue[] = [
  {
    number: 1,
    slug: "critical-thinking",
    title: "Protecting Critical Thinking",
    shortBlurb:
      "True understanding cannot be fast-tracked. AI must sharpen thinking, not replace the deliberate work that builds it.",
    body: [
      "AI handles fast knowledge well: quick answers, error correction, lookup tasks. Education is built around slow knowledge—the kind of understanding that requires wrestling with something, getting it wrong, and arriving at an insight that sticks because you earned it.",
      "Research increasingly documents the cost of early outsourcing. Students who lean on generative tools before building their own thinking risk cognitive debt: weaker recall, thinner idea ownership, and less durable judgment.",
      "The practical principle for WNC classrooms is simple: brain first, then AI. Students should engage their own thinking before a tool enters the process—and educators should make that sequence visible in course design.",
    ],
  },
  {
    number: 2,
    slug: "guidance-over-prohibition",
    title: "Guidance Over Prohibition",
    shortBlurb:
      "Students use AI at home regardless of syllabus bans. Bring AI into the open and teach judgment instead of driving use underground.",
    body: [
      "Prohibition without education does not stop AI use. It drives it underground and removes the conversation entirely. When use goes undisclosed, it goes unexamined.",
      "Educators across WNC who see the best results bring AI into the conversation early. A useful framing treats these tools like a strong teaching assistant: something that helps check thinking, clarify a concept already partly understood, or point toward resources—not something that generates the whole assignment.",
      "Transparency also changes academic honesty culture. When students understand why certain uses are encouraged and others are not—and what the cognitive stakes are—they are more likely to engage honestly.",
    ],
  },
  {
    number: 3,
    slug: "policy-fast-moving-target",
    title: "Policy Built for a Fast-Moving Target",
    shortBlurb:
      "65% of WNC educators say policy is behind or absent. Treat guidelines as living documents and update them through regional collaboration.",
    body: [
      "Standard policy cycles were designed for issues that stay roughly stable year over year. AI is not that. The lag between capability and policy is now a documented pattern across higher education.",
      "Schools making progress treat AI policy as an evolving document. Shared frameworks—like ABTech’s red/yellow/green system—give everyone a common vocabulary that is simple enough to revise when conditions change.",
      "Adaptive policy works better with shared infrastructure. A regional network that flags what has changed and surfaces what is working has a better chance of staying current than any campus working alone.",
    ],
  },
  {
    number: 4,
    slug: "judge-ai-output",
    title: "Teaching Students to Judge AI Output",
    shortBlurb:
      "AI never warns you when it is wrong. Critical evaluation of model output is a literacy skill that belongs in every discipline.",
    body: [
      "A hallucinated citation looks exactly like a real one. Fluent, confident prose can assert something false with the same polish as something true. The tool does not flag uncertainty.",
      "This is not primarily a technology problem—it is a literacy problem. The same critical reading practices that help students evaluate sources apply directly to AI output, but many students are not applying them yet.",
      "75% of WNC educators believe AI literacy should be a core competency. That consensus needs to become cross-disciplinary policy: every student learns to ask how they know an AI answer is right.",
    ],
  },
  {
    number: 5,
    slug: "assessment-process",
    title: "Assessment Must Shift to Process",
    shortBlurb:
      "A model can produce a competent paper in under a minute. Grade the process of learning, not only the final product.",
    body: [
      "Take-home work graded solely on polished final output increasingly measures tool capability more than student understanding.",
      "Process-based assessment—drafts, checkpoints, in-person components, iterative projects—gives better signal about where a student is and what they need. It is also stronger pedagogy with or without AI.",
      "60% of WNC educators have already redesigned assignments along these lines, often without formal institutional support. Coordinated backing could accelerate what faculty are already proving works.",
    ],
  },
  {
    number: 6,
    slug: "workplace-preparation",
    title: "Workplace Preparation Creates Tension",
    shortBlurb:
      "Employers want AI fluency, but foundational skills still require deliberate practice. Sequence the learning: foundations first, then professional tools.",
    body: [
      "A working professional using AI to accelerate tasks they already know how to do is in a different position than a student skipping the practice that builds those skills.",
      "Approaches gaining traction treat these as sequential: establish core competency, then introduce AI deliberately as a professional instrument—to accelerate work, pressure-test reasoning, and explore options quickly.",
      "Equity matters here too. Gaps between free and premium tools can compound into preparation disparities unless institutions address access intentionally.",
    ],
  },
  {
    number: 7,
    slug: "faculty-training",
    title: "Training Faculty for Appropriate Use",
    shortBlurb:
      "Faculty want training and direction, not just logins. Institutional support raises enthusiasm and lowers anxiety.",
    body: [
      "The most consistent theme across two years of WNC educator conversations is that faculty want more: practical training, peer collaboration, and clear strategic direction.",
      "Only 25% of WNC institutions provide faculty and staff with access to a private or secure AI tool. Expecting educators to figure this out alone with free-tier tools produces burnout, not progress.",
      "Resources like the ACAWEB professional development course and regional summit exchanges are leverage points. Faculty who learn from neighboring campuses move faster than those building alone.",
    ],
  },
  {
    number: 8,
    slug: "institutional-infrastructure",
    title: "AI as Institutional Infrastructure",
    shortBlurb:
      "Chatbots, enrollment systems, and admin automation need human-in-the-loop design and clear data privacy practices.",
    body: [
      "AI in education is no longer only a classroom question. Schools are deploying it for student support, CRM engagement, and administrative automation.",
      "Done well, these tools extend capacity—especially after hours—while escalating real problems to people. Done poorly, students in need get stuck with a bot that cannot help and does not know when to hand off.",
      "60% of WNC educators flagged data privacy directly. Institutions need clear governance for what is stored, where it goes, and who can access it.",
    ],
  },
  {
    number: 9,
    slug: "collaboration-beats-silos",
    title: "Collaboration Beats Silos",
    shortBlurb:
      "Campuses that share strategies move faster than those going it alone. Regional summits are the infrastructure that makes that possible.",
    body: [
      "Institutions working in isolation fall behind. Shared strategies, faculty exchanges, and cross-institutional frameworks produce faster, more durable progress.",
      "Education is structurally siloed—departments protect autonomy, campuses compete for enrollment, and workloads leave little room for extra convening. Someone has to resource the backbone work of bringing people together.",
      "Land of Sky’s regional AI summits are that backbone. One summit is a conversation; a series with follow-through is infrastructure.",
    ],
  },
  {
    number: 10,
    slug: "human-connection",
    title: "AI Can’t Replace Human Connection",
    shortBlurb:
      "In-person learning builds engagement, retention, and relationships no chatbot can replicate. Place still matters.",
    body: [
      "Online and asynchronous learning extend access in ways that matter—especially for students with work, family, or rural distance constraints. That does not erase what co-location uniquely provides.",
      "Spontaneous mentorship, classroom disagreement that sharpens thinking, and the sense of belonging that keeps a struggling student enrolled rarely happen in a chat window.",
      "For many students, particularly first-generation students, the physical campus is the support network. Preserving that human layer is part of getting AI right.",
    ],
  },
];

export function getIssue(slug: string) {
  return issues.find((i) => i.slug === slug);
}

export function getFeaturedIssues(count = 3) {
  return issues.slice(0, count);
}

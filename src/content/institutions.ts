export type InstitutionKind = "community-college" | "university" | "k12" | "other";

export type Institution = {
  id: string;
  name: string;
  shortName: string;
  kind: InstitutionKind;
  stance: string;
  lead: string;
  focus: string[];
  tools: string[];
  more: string;
};

export const institutionsIntro = {
  eyebrow: "WNC AI Integration Survey",
  title: "What schools are doing",
  description:
    "Campus snapshots from the 2026 WNC Education survey—how each institution is experimenting, where support lags, and what faculty are trying in practice.",
  credit: "Survey summaries by Leigha Travis",
};

export const institutionFilters: { id: "all" | InstitutionKind; label: string }[] = [
  { id: "all", label: "All campuses" },
  { id: "community-college", label: "Community colleges" },
  { id: "university", label: "Universities" },
  { id: "k12", label: "K–12" },
  { id: "other", label: "Other" },
];

/** Short campus cards drawn from Leigha Travis’s 2026 survey writeups. */
export const institutions: Institution[] = [
  {
    id: "abtech",
    name: "Asheville-Buncombe Technical Community College",
    shortName: "ABTech",
    kind: "community-college",
    stance: "Experimenting widely",
    lead: "Actively trying AI across disciplines while still sorting policy, ethics, funding, and faculty readiness.",
    focus: [
      "Faculty reading groups & Canvas AI PD",
      "Process over rote memorization",
      "AI as a “thinking partner,” not a replacement",
    ],
    tools: ["ChatGPT", "Gemini", "Claude", "Copilot", "Perplexity", "Grammarly"],
    more: "Much learning is peer-driven rather than centralized. Concerns include integrity, overreliance, FERPA, IP, and paid-tool funding. Classroom uses range from ESL scaffolds and simulations to workforce scenarios and research instruction.",
  },
  {
    id: "blue-ridge",
    name: "Blue Ridge Community College",
    shortName: "Blue Ridge CC",
    kind: "community-college",
    stance: "Cautiously progressive",
    lead: "Exploring AI while holding hard lines on integrity, overreliance, and keeping process central—especially in the sciences.",
    focus: [
      "Syllabus-level AI rules; guidelines in development",
      "Prompt-engineering courses & workshops",
      "Faculty often self-funding tools",
    ],
    tools: ["ChatGPT", "Gemini", "Claude", "Grammarly", "Copilot"],
    more: "Cheating and “over collaboration” dominate concerns. Training helps but is still insufficient. Faculty want Claude and discipline-specific science tools without losing rigorous methodological reasoning.",
  },
  {
    id: "brevard",
    name: "Brevard College",
    shortName: "Brevard",
    kind: "university",
    stance: "Access-forward",
    lead: "Gemini and NotebookLM for every student, syllabus AI expectations required, and faculty autonomy on course policy.",
    focus: [
      "Campus-wide Gemini & NotebookLM",
      "Optional PD—small engaged cohort",
      "AI as a “force multiplier”",
    ],
    tools: ["Gemini", "NotebookLM", "Claude", "Codex"],
    more: "Weak prompting and uneven literacy frustrate faculty and students. Departments still fund much of the experimentation. Applications include HTML learning games, attendance tools, and syllabus systems.",
  },
  {
    id: "buncombe-county-schools",
    name: "Buncombe County Public Schools",
    shortName: "Buncombe County Schools",
    kind: "k12",
    stance: "Ethics-first",
    lead: "K–12 focus on digital citizenship and safety: AI is technology, not a substitute for human relationships.",
    focus: [
      "Media & tech lessons on responsible use",
      "Credit AI work; Code of Conduct link is loose",
      "Teachers need literacy pedagogy, not just tool demos",
    ],
    tools: ["Gemini", "Grammarly", "Canva"],
    more: "Policies and instructional support are underdeveloped. Respondents see AI accelerating a shift from correct answers toward process, reasoning, and critical thinking behind the work.",
  },
  {
    id: "haywood",
    name: "Haywood Community College",
    shortName: "Haywood CC",
    kind: "community-college",
    stance: "Coordinated planning",
    lead: "Steering committee, student guidelines, and required AI awareness training—plus pressure to redesign assessment.",
    focus: [
      "AI steering committee & procurement",
      "KnowBe4 security / awareness training",
      "“AI-resilient” assignments; proctoring demand up",
    ],
    tools: ["ChatGPT", "Copilot", "Claude", "Grammarly Edu", "Canva Pro", "BoodleBox"],
    more: "Custom GPTs support assessment reporting; Harmonize and ElevenLabs are in the mix. Support is growing, but time, training, and departmental funding still constrain rollout.",
  },
  {
    id: "mars-hill",
    name: "Mars Hill University",
    shortName: "Mars Hill",
    kind: "university",
    stance: "Collaborative & optimistic",
    lead: "Book studies, CETL workshops, and multi-campus PD keep the AI conversation active across campus.",
    focus: [
      "CETL workshops & integrity book studies",
      "Syllabus statements define classroom use",
      "Study-buddy bots & campus-resource chat",
    ],
    tools: ["ChatGPT", "Gemini", "Claude", "Grammarly", "Canva", "Copilot"],
    more: "Staying current and finding trusted institutional tools remain hard. Funding is still mostly departmental. Tone is forward-looking if training and reflection keep pace with the tools.",
  },
  {
    id: "montreat",
    name: "Montreat College",
    shortName: "Montreat",
    kind: "university",
    stance: "Ethics & cybersecurity",
    lead: "AI concentration in cybersecurity, a tech-and-ethics gen-ed course, and a board-ratified theological statement on AI.",
    focus: [
      "“AI Free / Enhanced / Collaborative” labels",
      "Cybersecurity CAE pathway work",
      "Enhance judgment—don’t replace it",
    ],
    tools: ["ChatGPT", "Gemini", "Claude", "Copilot", "Perplexity"],
    more: "Simulations, CEO scenarios, and industry partnerships feed cybersecurity training. Faculty want more PD and interest in local models as cost-conscious options. Support still lags demand.",
  },
  {
    id: "ncsu",
    name: "North Carolina State University",
    shortName: "NC State",
    kind: "other",
    stance: "Infrastructure & policy",
    lead: "Policy templates, campus use-case hunting, and faculty freedom on assignment-level AI rules—governance still catching up.",
    focus: [
      "Course AI policy templates",
      "Workshops & industry partnerships",
      "Cost and sprawl as planning risks",
    ],
    tools: ["Campus workshops", "Google partnerships"],
    more: "Training and support are not yet enough for demand. AI is framed as infrastructure to manage through policy, faculty support, and critical-thinking-centered instruction—not as a replacement for education.",
  },
  {
    id: "southwestern",
    name: "Southwestern Community College",
    shortName: "Southwestern CC",
    kind: "community-college",
    stance: "Building programs",
    lead: "Drop-in discussions, Gemini modules, and a new AI certificate inside the IT degree—while integrity fights continue.",
    focus: [
      "Weekly drop-ins & Gemini training",
      "AI certificate in IT",
      "Instructor-led classroom rules for now",
    ],
    tools: ["Gemini", "Claude", "Napkin"],
    more: "Faculty training has been well received; funding is still mostly departmental. Frustration with denied cheating sits beside optimism about access and more engaging student projects.",
  },
  {
    id: "unca",
    name: "University of North Carolina Asheville",
    shortName: "UNC Asheville",
    kind: "university",
    stance: "In productive tension",
    lead: "CTL circles and IT Governance policy work coexist with deep faculty skepticism about AI and cognition.",
    focus: [
      "Faculty-driven classroom expectations",
      "Call for critical AI literacy",
      "Voluntary PD—not yet campus-wide",
    ],
    tools: ["ChatGPT", "Gemini", "Claude", "Grammarly", "Canva", "Wolfram"],
    more: "Some see research and tutoring upside; others want independent thinking protected first. The campus is mid-debate: experiment and plan without surrendering human-centered purposes of higher education.",
  },
  {
    id: "warren-wilson",
    name: "Warren Wilson College",
    shortName: "Warren Wilson",
    kind: "university",
    stance: "Human connection first",
    lead: "Cautious engagement: prepare students for an AI workforce without letting tools hollow out relationship-centered education.",
    focus: [
      "AI Ready Programs I & II",
      "Syllabus & classroom discussion",
      "Individualized learning—with guardrails",
    ],
    tools: ["Gemini", "NotebookLM", "Claude"],
    more: "Resistance among students, faculty, and staff is real. Training exists but feels thin. Guiding quote from respondents: thoughtfully integrate AI while keeping human interaction, critical thinking, and ethical responsibility at the center.",
  },
  {
    id: "wcu",
    name: "Western Carolina University",
    shortName: "WCU",
    kind: "university",
    stance: "Governance + innovation",
    lead: "Legal/security tool review, human-in-the-loop rules, Amplify AI Hub pilot, and UNC System literacy course work.",
    focus: [
      "First UNC System Amplify AI Hub pilot",
      "Enrollment & retention analytics",
      "Process / metacognition in assessment",
    ],
    tools: ["Copilot", "ChatGPT", "Gemini", "Grammarly", "Canva", "NotebookLM"],
    more: "PD is broad but uneven; departments still carry much cost—UNC System premium access is planned next year. Priorities: privacy, accessibility, trust, and keeping AI a support tool rather than a substitute for judgment.",
  },
];

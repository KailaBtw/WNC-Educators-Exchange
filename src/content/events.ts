export type ProgramSession = {
  id: string;
  time: string;
  title: string;
  leads?: string;
  detail?: string;
  topics?: string[];
};

export type EventItem = {
  slug: string;
  title: string;
  category: string;
  dateLabel: string;
  status: "upcoming" | "past";
  summary: string;
  location?: string;
  registerUrl?: string;
  images: { src: string; alt: string; caption?: string; subtitle?: string }[];
  /** Simple bullet program (past events / fallback). */
  program?: string[];
  /** Structured schedule for interactive timeline. */
  sessions?: ProgramSession[];
};

const novemberTableTopics = [
  "Differentiating Instruction for Different Student Ethical Stances",
  "No Tech, Low Tech “solutions”",
  "AI Equity and Free vs. Paid Tools",
  "Governance, Guidance, Autonomy, Clarity",
  "AI and Employment",
  "Human Concerns in a world of AI",
  "How does AI change thinking and learning?",
];

export const events: EventItem[] = [
  {
    slug: "november-2026",
    title: "WNC AI Educator’s Exchange",
    category: "Summit",
    dateLabel: "Friday, November 13, 2026",
    status: "upcoming",
    summary:
      "Educators from across Western North Carolina gather at Mars Hill University to share practice, discuss regional AI issues, and plan next steps together.",
    location: "Mars Hill University (capacity ~120)",
    registerUrl: "https://example.com/register-november-2026",
    images: [
      {
        src: "/images/events/nov-1.svg",
        alt: "Placeholder: educators at a regional summit",
        caption: "November Exchange",
        subtitle: "Replace with event photos when available",
      },
      {
        src: "/images/events/nov-2.svg",
        alt: "Placeholder: workshop discussion on AI policy",
        caption: "Policy sessions",
        subtitle: "Living documents and shared frameworks",
      },
      {
        src: "/images/events/nov-3.svg",
        alt: "Placeholder: faculty panel discussion",
        caption: "Faculty panels",
        subtitle: "What is working on neighboring campuses",
      },
    ],
    sessions: [
      {
        id: "registration",
        time: "9:00 am",
        title: "Registration and Networking",
      },
      {
        id: "welcome",
        time: "9:30 – 10:00 am",
        title: "Welcome",
        leads: "Chris Cain and Mars Hill Leadership · Bill Sederberg",
      },
      {
        id: "issues-context",
        time: "10:00 – 10:20 am",
        title: "Issues in AI and Education in Context in Western NC",
        leads: "Jonathan Wade",
        detail:
          "Pre-survey summary of issues; challenges; demonstration of avatars; discussion of agentic course completion. Introduction of table topics and resources from hosts, sponsors, and speakers.",
      },
      {
        id: "campus-intros",
        time: "10:20 – 10:40 am",
        title: "Campus Introductions",
        leads: "Chris Cain",
        detail:
          "Facilitated campus share-outs. Invited institutions and lead representatives introduce current AI work (streamlined when campus leads complete the infrastructure survey).",
      },
      {
        id: "sherlock",
        time: "10:40 – 11:30 am",
        title: "More than a Human in the Loop: Equipping Learners for Cognitive Sovereignty in a World of AI",
        leads: "Dr. John Sherlock, Western Carolina University",
        detail:
          "Pedagogy, human development, and international AI-and-learning work (including EDUCAUSE / Dell faculty cohorts).",
      },
      {
        id: "lunch-open",
        time: "11:30 am – 12:00 pm",
        title: "Initial Lunch Period with Table Topics",
        leads: "Ian Selig",
        topics: novemberTableTopics,
      },
      {
        id: "lunch-share",
        time: "12:30 – 1:00 pm",
        title: "Table Topic Facilitation and Share Out",
        leads: "Ian Selig",
        detail: "Working lunch—table facilitators share out key threads.",
      },
      {
        id: "scapin",
        time: "1:00 – 1:50 pm",
        title: "Adjusting Assessment for the World of AI",
        leads: "Tim Scapin",
      },
      {
        id: "bring-together",
        time: "1:50 – 2:20 pm",
        title: "Bringing together the Day",
        leads: "Jonathan Wade",
      },
      {
        id: "contest",
        time: "2:20 – 2:40 pm",
        title: "Faculty & Student Innovation Contest",
        leads: "Steven Young",
        detail: "Working title—official contest name forthcoming.",
      },
      {
        id: "wrap",
        time: "2:40 – 3:00 pm",
        title: "Wrap Up and Next Steps",
        leads: "Bill Sederberg",
      },
    ],
  },
  {
    slug: "brain-hub",
    title: "Brain Hub",
    category: "Past Event",
    dateLabel: "2025–2026",
    status: "past",
    summary:
      "Sessions linking AI literacy, workforce pathways, and educator collaboration across the region.",
    images: [
      {
        src: "/images/events/brainhub-1.svg",
        alt: "Placeholder: Brain Hub event photo",
        caption: "Brain Hub",
        subtitle: "Photo placeholder — replace with archive",
      },
      {
        src: "/images/events/brainhub-2.svg",
        alt: "Placeholder: Brain Hub workshop",
        caption: "Workshops",
        subtitle: "Photo placeholder — replace with archive",
      },
      {
        src: "/images/events/brainhub-3.svg",
        alt: "Placeholder: Brain Hub networking",
        caption: "Cross-campus contacts",
        subtitle: "Photo placeholder — replace with archive",
      },
    ],
    program: [
      "Opening context: AI in WNC classrooms",
      "Breakout: guidance over prohibition",
      "Workforce board pathway discussion",
      "Closing notes and next convening (details TBA)",
    ],
  },
  {
    slug: "january-event",
    title: "January Event",
    category: "Past Event",
    dateLabel: "January 2026",
    status: "past",
    summary:
      "Survey-informed summit conversations that fed directly into the Top 10 Issues report and regional priorities.",
    images: [
      {
        src: "/images/events/jan-1.svg",
        alt: "Placeholder: January event photo",
        caption: "January summit",
        subtitle: "Photo placeholder — replace with archive",
      },
      {
        src: "/images/events/jan-2.svg",
        alt: "Placeholder: January roundtable",
        caption: "Roundtables",
        subtitle: "Policy, pedagogy, and place",
      },
      {
        src: "/images/events/jan-3.svg",
        alt: "Placeholder: January closing session",
        caption: "Takeaways",
        subtitle: "From conversation toward a regional workplan",
      },
    ],
    program: [
      "Survey snapshot: what 54 educators reported",
      "Fast vs. slow knowledge dialogue",
      "Campus updates and open problems",
      "Preview of the next convening (details TBA)",
    ],
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents() {
  return events.filter((e) => e.status === "upcoming");
}

/** Flat program lines for simple lists / previews. */
export function getProgramLines(event: EventItem): string[] {
  if (event.sessions?.length) {
    return event.sessions.map((s) => `${s.time} — ${s.title}`);
  }
  return event.program ?? [];
}

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
        src: "/images/events/archive/brain-01.jpg",
        alt: "Registration desk at a regional educator gathering",
        caption: "Registration",
        subtitle: "From recent WNC educator gatherings",
      },
      {
        src: "/images/events/archive/brain-03.jpg",
        alt: "Educators networking at round tables in a large hall",
        caption: "In the room",
        subtitle: "Cross-campus conversation",
      },
      {
        src: "/images/events/archive/jan-07.jpg",
        alt: "Educator speaking at a microphone during a summit panel",
        caption: "Campus voices",
        subtitle: "What neighboring campuses are trying",
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
    dateLabel: "June 2026",
    status: "past",
    summary:
      "A large regional gathering linking AI literacy, workforce pathways, and educator collaboration across Western North Carolina.",
    location: "Asheville",
    images: [
      {
        src: "/images/events/archive/brain-01.jpg",
        alt: "Attendees checking in at the Brain Hub registration desk",
        caption: "Welcome desk",
        subtitle: "NC Works partners helping educators check in",
      },
      {
        src: "/images/events/archive/brain-02.jpg",
        alt: "Educators gathered for Brain Hub sessions",
        caption: "Opening energy",
        subtitle: "Faculty and partners filling the room",
      },
      {
        src: "/images/events/archive/brain-03.jpg",
        alt: "Two educators talking beside round tables at Brain Hub",
        caption: "Networking",
        subtitle: "Cross-campus contacts between sessions",
      },
      {
        src: "/images/events/archive/brain-04.jpg",
        alt: "Brain Hub program in progress",
        caption: "Program in motion",
        subtitle: "AI literacy and workforce pathways",
      },
      {
        src: "/images/events/archive/brain-07.jpg",
        alt: "Educator smiling during conversation at Brain Hub",
        caption: "In conversation",
        subtitle: "Asheville Athletics venue",
      },
      {
        src: "/images/events/archive/brain-08.jpg",
        alt: "Brain Hub attendees engaged in discussion",
        caption: "Table talk",
        subtitle: "Practice sharing across institutions",
      },
    ],
    program: [
      "Opening context: AI in WNC classrooms",
      "Breakout: guidance over prohibition",
      "Workforce board pathway discussion",
      "Closing notes and next convening",
    ],
  },
  {
    slug: "january-event",
    title: "January AI Summit",
    category: "Past Event",
    dateLabel: "January 2026",
    status: "past",
    summary:
      "Survey-informed summit conversations that fed directly into the Top 10 Issues report and regional priorities.",
    images: [
      {
        src: "/images/events/archive/jan-01.jpg",
        alt: "Panelists speaking at the January AI Summit",
        caption: "Summit panel",
        subtitle: "Regional educators on the record",
      },
      {
        src: "/images/events/archive/jan-03.jpg",
        alt: "Panelist in a purple blazer speaking at the January AI Summit",
        caption: "On the mic",
        subtitle: "Ideas that shaped the Top 10 Issues",
      },
      {
        src: "/images/events/archive/jan-07.jpg",
        alt: "Warren Wilson educator speaking with campus partners on screen behind",
        caption: "Campus voices",
        subtitle: "Montreat, Haywood CC, and neighbors in the mix",
      },
      {
        src: "/images/events/archive/jan-11.jpg",
        alt: "Educator speaking into a microphone at the January summit",
        caption: "Open forum",
        subtitle: "Policy, pedagogy, and place",
      },
      {
        src: "/images/events/archive/jan-05.jpg",
        alt: "January AI Summit attendees in discussion",
        caption: "Room energy",
        subtitle: "From conversation toward a regional workplan",
      },
      {
        src: "/images/events/archive/jan-12.jpg",
        alt: "January AI Summit gathering",
        caption: "Takeaways",
        subtitle: "What 54 educators reported, live in the room",
      },
    ],
    program: [
      "Survey snapshot: what 54 educators reported",
      "Fast vs. slow knowledge dialogue",
      "Campus updates and open problems",
      "Preview of the next convening",
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

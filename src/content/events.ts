import { withBase } from "../lib/paths";
import { site } from "./site";
import {
  januarySponsorOrgs,
  novemberParticipatingOrgs,
  type PartnerOrg,
} from "./partners";

export type ProgramSession = {
  id: string;
  time: string;
  title: string;
  /** One-line teaser shown on the timeline card. */
  blurb: string;
  leads?: string;
  detail?: string;
  topics?: string[];
  link?: { href: string; label: string };
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
  /** Prep notes shown on the upcoming event page. */
  beforeEvent?: string[];
  /** Participating / sponsor organizations for logo strip. */
  participatingOrgs?: PartnerOrg[];
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

/** Store root paths here; base prefix applied once on export. */
const eventsRaw: EventItem[] = [
  {
    slug: "november-2026",
    title: "Western North Carolina AI Educators’ Exchange",
    category: "Summit",
    dateLabel: "Friday, November 13, 2026",
    status: "upcoming",
    summary:
      "Educators from across Western North Carolina will meet at Mars Hill to compare what they’re doing with AI and decide what comes next.",
    location: "Mars Hill University · Enrollment limited",
    registerUrl: site.registerUrl,
    participatingOrgs: novemberParticipatingOrgs,
    beforeEvent: [
      "Survey to all participants (based on last year’s instrument).",
      "New survey to campus leads about infrastructure, institutional policies, and resources—so campus introductions can stay focused.",
    ],
    images: [
      {
        src: "/images/events/archive/brain-04.jpg",
        alt: "Educators seated at round tables across a convention center floor",
        caption: "In the room",
        subtitle: "From recent WNC educator gatherings",
      },
      {
        src: "/images/events/archive/brain-03.jpg",
        alt: "Educators networking at round tables in a large hall",
        caption: "Networking",
        subtitle: "Cross-campus conversation",
      },
      {
        src: "/images/events/archive/jan-07.jpg",
        alt: "Educator speaking at a microphone during a Brainhub panel",
        caption: "Campus voices",
        subtitle: "June Brainhub panel",
      },
    ],
    sessions: [
      {
        id: "registration",
        time: "9:00 am",
        title: "Registration and Networking",
        blurb: "Check in and meet colleagues",
      },
      {
        id: "welcome",
        time: "9:30 – 10:00 am",
        title: "Welcome",
        blurb: "Host welcome and opening remarks",
        leads: "Chris Cain and Mars Hill Leadership · Bill Sederburg",
      },
      {
        id: "issues-context",
        time: "10:00 – 10:20 am",
        title: "Issues in AI and Education in Context in Western NC",
        blurb: "Survey snapshot and regional context",
        leads: "Jonathan Wade",
        detail:
          "Pre-survey summary of issues; discussion of challenges; demonstration of avatars; discussion of agentic course completion. Introduction of table topics and resources from hosts, sponsors, and speakers.",
      },
      {
        id: "campus-intros",
        time: "10:20 – 10:40 am",
        title: "Campus Introductions",
        blurb: "Campus share-outs",
        leads: "Chris Cain",
        detail:
          "Facilitated campus share-outs. Invited institutions and lead representatives introduce current AI work—streamlined when campus leads complete the infrastructure / policy / resources survey.",
      },
      {
        id: "sherlock",
        time: "10:40 – 11:30 am",
        title:
          "More than a Human in the Loop: Equipping Learners for Cognitive Sovereignty in a world of AI",
        blurb: "Keynote on learning with AI",
        leads: "Dr. John Sherlock, Professor, Western Carolina University",
        detail:
          "International work on AI, learning, pedagogy, and human development—including an EDUCAUSE / Dell faculty cohort on teaching and learning with AI.",
        link: {
          href: "https://members.educause.edu/john-sherlock",
          label: "John Sherlock · EDUCAUSE profile",
        },
      },
      {
        id: "lunch-conversations",
        time: "11:30 am – 12:00 pm",
        title: "Lunch Conversations",
        blurb: "Table topics during lunch",
        leads: "Ian Selig",
        detail: "Table conversations during lunch; proposed topics will be printed for each table.",
        topics: novemberTableTopics,
      },
      {
        id: "scapin",
        time: "1:00 – 1:50 pm",
        title: "Adjusting Assessment for the World of AI",
        blurb: "Rethinking assessment with AI",
        leads: "Tim Scapin, Haywood Community College",
      },
      {
        id: "bring-together",
        time: "1:50 – 2:20 pm",
        title: "Bringing together the Day",
        blurb: "Synthesis of what we heard",
        leads: "Jonathan Wade",
      },
      {
        id: "contest",
        time: "2:20 – 2:40 pm",
        title: "Faculty / Student Contest",
        blurb: "Spotlight on contest entries",
        leads: "Steven Young",
        detail: "Working title—official contest name forthcoming.",
      },
      {
        id: "wrap",
        time: "2:40 – 3:00 pm",
        title: "Wrap Up and Next Steps",
        blurb: "Closing and what comes next",
        leads: "Bill Sederburg",
      },
    ],
  },
  {
    slug: "brain-hub",
    title: "Brainhub",
    category: "Past Event",
    dateLabel: "June 2026",
    status: "past",
    summary:
      "A large June gathering in Asheville: AI in the classroom, workforce pathways, and educators working across campuses.",
    location: "Asheville",
    images: [
      {
        src: "/images/events/archive/brain-04.jpg",
        alt: "Convention center floor filled with educators at round tables",
        caption: "On the floor",
        subtitle: "Brainhub · June 2026",
      },
      {
        src: "/images/events/archive/brain-02.jpg",
        alt: "Educators gathered for Brainhub sessions",
        caption: "Opening energy",
        subtitle: "Faculty and partners filling the room",
      },
      {
        src: "/images/events/archive/brain-03.jpg",
        alt: "Two educators talking beside round tables at Brainhub",
        caption: "Networking",
        subtitle: "Cross-campus contacts between sessions",
      },
      {
        src: "/images/events/archive/jan-01-crop.jpg",
        alt: "Panelists speaking at the June Brainhub gathering",
        caption: "Summit panel",
        subtitle: "June Brainhub panel",
      },
      {
        src: "/images/events/archive/jan-03.jpg",
        alt: "Panelist speaking at the June Brainhub gathering",
        caption: "On the mic",
        subtitle: "Ideas that shaped the Top 10 Issues",
      },
      {
        src: "/images/events/archive/jan-07.jpg",
        alt: "Educator speaking with campus partners on screen behind",
        caption: "Campus voices",
        subtitle: "Montreat, Haywood CC, and neighbors in the mix",
      },
      {
        src: "/images/events/archive/jan-11.jpg",
        alt: "Educator speaking into a microphone at Brainhub",
        caption: "Open forum",
        subtitle: "Policy, pedagogy, and place",
      },
      {
        src: "/images/events/archive/brain-07.jpg",
        alt: "Educator smiling during conversation at Brainhub",
        caption: "In conversation",
        subtitle: "Asheville Athletics venue",
      },
      {
        src: "/images/events/archive/brain-08.jpg",
        alt: "Brainhub attendees engaged in discussion",
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
    dateLabel: "January 23, 2026",
    status: "past",
    summary:
      "The January summit. What people said there, along with the survey, became the Top 10 Issues.",
    participatingOrgs: januarySponsorOrgs,
    images: [
      {
        src: "/images/events/archive/brain-02.jpg",
        alt: "Educators gathered at a regional AI summit",
        caption: "Room energy",
        subtitle: "From conversation toward a regional workplan",
      },
      {
        src: "/images/events/archive/brain-08.jpg",
        alt: "Attendees in discussion at round tables",
        caption: "Table talk",
        subtitle: "Campus partners comparing practice",
      },
    ],
    program: [
      "Survey snapshot: what educators reported",
      "Fast vs. slow knowledge dialogue",
      "Campus updates and open problems",
      "Preview of the next convening",
    ],
  },
];

export const events: EventItem[] = eventsRaw.map((event) => ({
  ...event,
  images: event.images.map((img) => ({ ...img, src: withBase(img.src) })),
  participatingOrgs: event.participatingOrgs?.map((org) => ({
    ...org,
    logo: org.logo ? withBase(org.logo) : undefined,
  })),
}));

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

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
  program: string[];
};

export const events: EventItem[] = [
  {
    slug: "november-2026",
    title: "Upcoming November Event",
    category: "Summit",
    dateLabel: "November 17, 2026",
    status: "upcoming",
    summary:
      "Join educators from across Western North Carolina to share practice, refine policy, and prepare classrooms for responsible AI use.",
    location: "Western North Carolina (venue TBA)",
    registerUrl: "https://example.com/register-november-2026",
    images: [
      {
        src: "/images/events/nov-1.svg",
        alt: "Placeholder: educators collaborating at a regional summit",
        caption: "Regional gathering",
        subtitle: "Educators from across WNC campuses",
      },
      {
        src: "/images/events/nov-2.svg",
        alt: "Placeholder: workshop discussion on AI policy",
        caption: "Policy in practice",
        subtitle: "Living documents and shared frameworks",
      },
      {
        src: "/images/events/nov-3.svg",
        alt: "Placeholder: faculty panel discussion",
        caption: "Faculty voices",
        subtitle: "Classroom strategies that travel across campuses",
      },
    ],
    program: [
      "Welcome & regional framing — Land of Sky Workforce Development Board",
      "Top 10 Issues flash briefing and discussion",
      "Campus practice roundtables: policy, assessment, and faculty training",
      "Student community service project preview (June 2026 winners pathway)",
      "Networking & next steps for cross-institutional collaboration",
      "Lorem ipsum dolor sit amet — closing remarks and registration follow-up",
    ],
  },
  {
    slug: "brain-hub",
    title: "Brain Hub",
    category: "Past Event",
    dateLabel: "2025–2026",
    status: "past",
    summary:
      "Hands-on sessions connecting AI literacy, workforce pathways, and educator collaboration across the region.",
    images: [
      {
        src: "/images/events/brainhub-1.svg",
        alt: "Placeholder: Brain Hub event photo",
        caption: "Brain Hub",
        subtitle: "Photo placeholder — replace with event archive",
      },
      {
        src: "/images/events/brainhub-2.svg",
        alt: "Placeholder: Brain Hub workshop",
        caption: "Workshop energy",
        subtitle: "Collaborative problem-solving with peers",
      },
      {
        src: "/images/events/brainhub-3.svg",
        alt: "Placeholder: Brain Hub networking",
        caption: "Connections that stick",
        subtitle: "Cross-campus relationships in the room",
      },
    ],
    program: [
      "Opening context: AI in WNC classrooms",
      "Breakout: guidance over prohibition",
      "Workforce board pathway discussion",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    slug: "january-event",
    title: "January Event",
    category: "Past Event",
    dateLabel: "January 2026",
    status: "past",
    summary:
      "Survey-informed summit conversations that shaped the Top 10 Issues report and regional priorities.",
    images: [
      {
        src: "/images/events/jan-1.svg",
        alt: "Placeholder: January event photo",
        caption: "January summit",
        subtitle: "Photo placeholder — replace with Jan archive",
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
        caption: "Shared takeaways",
        subtitle: "From conversation to regional workplan",
      },
    ],
    program: [
      "Survey snapshot: what 54 educators reported",
      "Fast vs. slow knowledge dialogue",
      "Campus updates and open problems",
      "Lorem ipsum dolor sit amet — next convening preview",
    ],
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents() {
  return events.filter((e) => e.status === "upcoming");
}

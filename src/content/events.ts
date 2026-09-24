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
    program: [
      "Welcome and regional framing — Land of Sky Workforce Development Board",
      "Top 10 Issues briefing and discussion",
      "Campus roundtables: policy, assessment, and faculty training",
      "Student community service project preview (June 4–5, 2026 pathway)",
      "Next steps for cross-institutional collaboration",
      "Closing remarks and registration follow-up (agenda details TBA)",
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

import { site, surveyAttribution } from "./site";
import { routes } from "../config/site";

export type ResourceItem = {
  label: string;
  blurb: string;
  href?: string;
  external?: boolean;
  comingSoon?: boolean;
};

export type ResourceGroup = {
  id: string;
  title: string;
  eyebrow: string;
  lede: string;
  accent: "purple" | "blue" | "green";
  items: ResourceItem[];
};

export const resourcesIntro = {
  eyebrow: "Library",
  title: "Resources",
  description:
    "One place for faculty, students, and campus leads. Live Exchange pages and courses first; PDFs and shared folders appear here when partners clear them for public share.",
};

/** Featured band under the hero — primary next step for most visitors. */
export const resourcesFeatured = {
  eyebrow: "Next gathering",
  title: "November 13 Educators Exchange",
  when: "Friday, November 13, 2026 · Mars Hill University",
  blurb:
    "Full day schedule, contest slot, and campus share-outs. Register through Novera, then skim the program.",
  primary: { href: site.registerUrl, label: "Register for Nov 13", external: true },
  secondary: { href: routes.november, label: "View the program →" },
};

function gated(
  href: string | undefined,
  live: Omit<ResourceItem, "href" | "comingSoon"> & { external?: boolean },
  soonBlurb: string,
): ResourceItem {
  if (href) {
    return { ...live, href, external: live.external ?? true };
  }
  return {
    label: live.label,
    blurb: soonBlurb,
    comingSoon: true,
  };
}

export const resourceGroups: ResourceGroup[] = [
  {
    id: "faculty",
    title: "Faculty",
    eyebrow: "Teaching & recognition",
    lede: "Survey findings, campus practice, award profiles, and AI professional development.",
    accent: "purple",
    items: [
      {
        label: "Top 10 Issues in AI Facing Educators",
        href: routes.issues,
        blurb: `Findings from the ${surveyAttribution.name} and regional summits.`,
      },
      {
        label: "What schools are doing with AI",
        href: routes.schools,
        blurb: "Campus practice cards from the 2026 survey writeups.",
      },
      {
        label: "Faculty we recognize",
        href: routes.awards,
        blurb: "2026 BrAIn Hub Educator Award winners and profiles.",
      },
      {
        label: "ACAWEB AI professional development",
        href: site.acawebCourseUrl,
        blurb: "AI-PD courses and resources for educators.",
        external: true,
      },
      gated(
        site.fullReportUrl || undefined,
        {
          label: "Top 10 full written analysis (PDF)",
          blurb: "Downloadable long-form analysis of the ten issues.",
        },
        "Cleared for public share when authors release it.",
      ),
      gated(
        site.awardsDriveUrl || undefined,
        {
          label: "Awards materials folder",
          blurb: "Shared folder for award packets and related files.",
        },
        "Drive link when Bill publishes a public folder.",
      ),
    ],
  },
  {
    id: "students",
    title: "Students",
    eyebrow: "Projects & program",
    lede: "Community AI projects with faculty mentors, plus the November contest slot and critical-thinking framing from the Top 10.",
    accent: "blue",
    items: [
      {
        label: "Faculty & student community contest",
        href: `${routes.awards}#upcoming`,
        blurb: "Working title—teachers and students teaming on community AI projects.",
      },
      {
        label: "November 13 Exchange program",
        href: routes.november,
        blurb: "Mars Hill University · full day schedule, including the contest slot.",
      },
      {
        label: "Critical thinking before tools",
        href: `${routes.issues}/critical-thinking`,
        blurb: "How the Top 10 frames AI as a teaching assistant—not a substitute for student thinking.",
      },
      gated(
        site.contestGuideUrl || undefined,
        {
          label: "Contest guidelines (PDF)",
          blurb: "How to enter, timelines, and criteria.",
        },
        "Official packet after Steven Young and sponsors confirm details.",
      ),
    ],
  },
  {
    id: "leads",
    title: "Educators & leads",
    eyebrow: "Bring a campus",
    lede: "Registration, events archive, Brain Hub framing, and how to reach the team.",
    accent: "green",
    items: [
      {
        label: "Register for Nov 13",
        href: site.registerUrl,
        blurb: "Novera registration for the Educators Exchange.",
        external: true,
      },
      {
        label: "All events",
        href: routes.events,
        blurb: "Upcoming Exchange and past Brain Hub / January gatherings.",
      },
      {
        label: "About the Exchange",
        href: routes.about,
        blurb: "Brain Hub, Land of Sky, survey source, and summit committee.",
      },
      {
        label: "Contact",
        href: routes.contact,
        blurb: `Reach the team at ${site.contactEmail}.`,
      },
    ],
  },
];

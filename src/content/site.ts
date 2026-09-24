export const site = {
  name: "WNC Educators Exchange",
  shortName: "WNC Exchange",
  domain: "wncexchange.com",
  url: "https://wncexchange.com",
  tagline: "Brain first, then AI.",
  description:
    "Findings from the 2026 WNC Educator Survey and regional summits: ten issues facing educators, campus practices in motion, and the November 13 Educators Exchange at Mars Hill University.",
  contactEmail: "contact@wncexchange.com",
  registerUrl: "https://example.com/register-november-2026",
  fullReportUrl: "https://example.com/full-report-top-10-issues",
  campusesDoingUrl: "https://example.com/what-campuses-are-doing",
  educatorProjectsUrl: "https://example.com/educator-projects-in-ai",
  awardsDriveUrl: "https://drive.google.com/drive/folders/PLACEHOLDER-AWARDS",
  voteUrl: "https://example.com/vote-top-issues",
  acawebCourseUrl: "https://acaweb.org/AI-PD",
  org: "Land of Sky Workforce Development Board",
  authors: [
    {
      name: "Leigha Travis",
      role: "Report co-author",
      image: "/images/team/leigha-travis.svg",
    },
    {
      name: "Ellie LaGrave",
      role: "Report co-author",
      image: "/images/team/ellie-lagrave.svg",
    },
  ],
} as const;

export type SiteConfig = typeof site;

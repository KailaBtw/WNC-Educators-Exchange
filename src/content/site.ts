import { assets } from "../config/site";
import { asset } from "../lib/paths";

export const site = {
  name: "WNC Educators Exchange",
  shortName: "WNC Exchange",
  domain: "wncexchange.com",
  url: "https://wncexchange.com",
  tagline: "Brain first, then AI.",
  description:
    "Findings from the 2026 WNC Educator Survey and regional summits: ten issues facing educators, campus practices in motion, and the November 13 Educators Exchange at Mars Hill University.",
  contactEmail: "contact@wncexchange.com",
  registerUrl: "https://novera.events/events/wnc-educators-exchange26",
  fullReportUrl: "https://example.com/full-report-top-10-issues",
  campusesDoingUrl: "https://example.com/what-campuses-are-doing",
  educatorProjectsUrl: "https://example.com/educator-projects-in-ai",
  awardsDriveUrl: "https://drive.google.com/drive/folders/PLACEHOLDER-AWARDS",
  voteUrl: "https://example.com/vote-top-issues",
  acawebCourseUrl: "https://acaweb.org/AI-PD",
  org: "Land of Sky Workforce Development Board",
  brainHubName: "Brain Hub",
  brainHubBlurb:
    "The Educators Exchange is part of the 2026 Brain Hub initiatives—regional convenings that connect AI literacy, workforce pathways, and educator collaboration across Western North Carolina.",
  authors: [
    {
      name: "Leigha Travis",
      role: "Report co-author",
      image: asset(assets.teamLeigha),
    },
    {
      name: "Ellie LaGrave",
      role: "Report co-author",
      image: asset(assets.teamEllie),
    },
  ],
  /** Contact page facilitators — expand roles/last names when Leigha confirms. */
  facilitators: [
    { name: "Bill", role: "Exchange lead" },
    { name: "Nana", role: "Registration & operations" },
    { name: "Megan", role: "Facilitator" },
    { name: "Ellie LaGrave", role: "Report co-author" },
    { name: "Leigha Travis", role: "Report co-author · campus survey" },
  ],
};

export type SiteConfig = typeof site;

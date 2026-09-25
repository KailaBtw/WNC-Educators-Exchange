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
  contactEmail: "wsederburg@gmail.com",
  registerUrl: "https://novera.events/events/wnc-educators-exchange26",
  /** Set when the public PDF is cleared; empty = hide “full report” CTAs. */
  fullReportUrl: "",
  campusesDoingUrl: "",
  educatorProjectsUrl: "",
  awardsDriveUrl: "",
  voteUrl: "",
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
  /** Contact / About facilitators from the Nov 13 summit committee. */
  facilitators: [
    { name: "William Sederburg", role: "Chair · Exchange lead" },
    { name: "Chris Cain", role: "Host · Mars Hill University" },
    { name: "Nana Harrison", role: "UNC Asheville · registration" },
    { name: "Leigha Travis", role: "UNCA Marketing · report co-author" },
    { name: "Ellie Miller", role: "UNCA Computer Science intern" },
    { name: "Megan Coyle", role: "BRCC Computer Science intern" },
  ],
};

/** Short attribution for the 2026 WNC Educator Survey (shown with the “54” callouts). */
export const surveyAttribution = {
  name: "2026 WNC Educator Survey",
  when: "January 2026",
  respondents: "54 educators across Western North Carolina",
  blurb:
    "The Top 10 Issues report draws on the 2026 WNC Educator Survey—54 educators across the region—together with findings from regional educator summits organized with the Land of Sky Workforce Development Board. Respondents described how AI is already showing up in classrooms, where policy and support lag, and what faculty need next.",
};

export type SiteConfig = typeof site;

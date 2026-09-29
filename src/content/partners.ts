/** School / partner logos and org lists for events + schools pages. */

export type PartnerOrg = {
  id: string;
  name: string;
  /** Path under /public — omit when no clean logo asset yet. */
  logo?: string;
};

/**
 * Canonical logo paths by partner id.
 * Missing entries intentionally omit `logo` so UI can fall back to name text.
 */
export const schoolLogoById: Record<string, string> = {
  "ab-tech": "/images/partners/schools/ab-tech.png",
  "app-state": "/images/partners/schools/app-state.png",
  brevard: "/images/partners/schools/brevard.png",
  "blue-ridge": "/images/partners/schools/blue-ridge.png",
  "buncombe-county-schools": "/images/partners/schools/buncombe-county-schools.png",
  haywood: "/images/partners/schools/haywood.png",
  "land-of-sky": "/images/partners/schools/land-of-sky.png",
  "mars-hill": "/images/partners/schools/mars-hill.png",
  montreat: "/images/partners/schools/montreat.png",
  southwestern: "/images/partners/schools/southwestern.png",
  transylvania: "/images/partners/schools/transylvania.png",
  unca: "/images/partners/schools/unca.png",
  wcu: "/images/partners/schools/wcu.svg",
  "warren-wilson": "/images/partners/schools/warren-wilson.png",
};

/** Map institutions.ts ids → partner logo ids when they differ. */
export const institutionLogoId: Record<string, string> = {
  abtech: "ab-tech",
  "blue-ridge": "blue-ridge",
  brevard: "brevard",
  "buncombe-county-schools": "buncombe-county-schools",
  haywood: "haywood",
  "mars-hill": "mars-hill",
  montreat: "montreat",
  "app-state": "app-state",
  southwestern: "southwestern",
  unca: "unca",
  "warren-wilson": "warren-wilson",
  wcu: "wcu",
};

export function logoForPartnerId(id: string): string | undefined {
  return schoolLogoById[id];
}

export function logoForInstitutionId(institutionId: string): string | undefined {
  const partnerId = institutionLogoId[institutionId] ?? institutionId;
  return schoolLogoById[partnerId];
}

function withLogo(org: Omit<PartnerOrg, "logo">): PartnerOrg {
  return { ...org, logo: logoForPartnerId(org.id) };
}

/** Logos still needed (no file under public/images/partners/schools/). */
export const missingSchoolLogos = [] as const;

/** Deduped campuses from the January mailing list (campus column). */
export const januarySponsorOrgs: PartnerOrg[] = [
  withLogo({ id: "ab-tech", name: "A.B. Tech" }),
  withLogo({ id: "brevard", name: "Brevard College" }),
  withLogo({ id: "buncombe-county-schools", name: "Buncombe County Schools" }),
  withLogo({ id: "blue-ridge", name: "Blue Ridge Community College" }),
  withLogo({ id: "haywood", name: "Haywood Community College" }),
  withLogo({ id: "land-of-sky", name: "Land of Sky Workforce Development Board" }),
  withLogo({ id: "mars-hill", name: "Mars Hill University" }),
  withLogo({ id: "transylvania", name: "Transylvania County Schools" }),
  withLogo({ id: "unca", name: "UNC Asheville" }),
  withLogo({ id: "wcu", name: "Western Carolina University" }),
  withLogo({ id: "warren-wilson", name: "Warren Wilson College" }),
];

/** Host + sponsoring campuses for the Nov 13 summit (committee roster). */
export const novemberParticipatingOrgs: PartnerOrg[] = [
  withLogo({ id: "mars-hill", name: "Mars Hill University" }),
  withLogo({ id: "wcu", name: "Western Carolina University" }),
  withLogo({ id: "haywood", name: "Haywood Community College" }),
  withLogo({ id: "warren-wilson", name: "Warren Wilson College" }),
  withLogo({ id: "blue-ridge", name: "Blue Ridge Community College" }),
  withLogo({ id: "brevard", name: "Brevard College" }),
  withLogo({ id: "ab-tech", name: "A.B. Tech" }),
  withLogo({ id: "unca", name: "UNC Asheville" }),
  withLogo({ id: "montreat", name: "Montreat College" }),
  withLogo({ id: "buncombe-county-schools", name: "Buncombe County Schools" }),
  withLogo({ id: "land-of-sky", name: "Land of Sky Workforce Development Board" }),
];

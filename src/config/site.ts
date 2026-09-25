/**
 * Deploy / hosting settings — change HERE, not across the site.
 *
 * GitHub project Pages needs `githubPagesBase` (repo name).
 * When wncexchange.com is primary, set env CUSTOM_DOMAIN=1 so Astro
 * builds with base "/" (see astro.config.mjs).
 */
export const deploy = {
  /** Public marketing domain */
  customDomain: "wncexchange.com",
  customDomainUrl: "https://wncexchange.com",
  /** GitHub Pages user/org site host */
  githubSite: "https://kailabtw.github.io",
  /** Repo name → project Pages path */
  githubPagesBase: "/WNC-Educators-Exchange",
  githubUser: "kailabtw",
  githubRepo: "WNC-Educators-Exchange",
};

/** In-app routes (root paths; `withBase` applied at link boundaries). */
export const routes = {
  home: "/",
  events: "/events",
  november: "/events/november-2026",
  brainHub: "/events/brain-hub",
  january: "/events/january-event",
  issues: "/issues",
  schools: "/schools",
  awards: "/awards",
  about: "/about",
  contact: "/contact",
  resources: "/resources",
} as const;

/**
 * Named static assets under /public (root paths).
 * Use `asset()` / `cssUrl()` from `src/lib/paths` when rendering.
 */
export const assets = {
  favicon: "/favicon.svg",
  heroUnca: "/images/hero/unca.jpg",
  issuesBanner: "/images/events/archive/brain-10.jpg",
  schoolsBanner: "/images/events/archive/brain-03.jpg",
  aboutTeaser: "/images/events/archive/brain-03.jpg",
  aboutStory1: "/images/about/story-1.svg",
  aboutStory2: "/images/about/story-2.svg",
  teamLeigha: "/images/team/leigha-travis.svg",
  teamEllie: "/images/team/ellie-lagrave.svg",
  teamChrisCain: "/images/team/chris-cain.jpg",
  logoBrainHub: "/images/partners/brain-hub.svg",
  logoLandOfSky: "/images/partners/land-of-sky.svg",
} as const;

export type AssetKey = keyof typeof assets;
export type RouteKey = keyof typeof routes;

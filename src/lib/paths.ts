import { assets, type AssetKey } from "../config/site";

/**
 * Prefix a root path with Astro `base` (GitHub Pages project path).
 * Content/config should store `/images/...` or `/events` — call this only when rendering.
 */
export function withBase(path = "/"): string {
  const rawBase = import.meta.env.BASE_URL || "/";
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

  if (!path || path === "/") return base;
  if (/^https?:\/\//i.test(path)) return path;

  // Idempotent: already prefixed (avoids /base/base/... file 404s on downloads).
  if (base !== "/" && (path === base.slice(0, -1) || path.startsWith(base))) {
    return path;
  }

  return `${base}${path.replace(/^\//, "")}`;
}

/** Resolve a named asset or a root `/images/...` path for `src` / `href`. */
export function asset(pathOrKey: string | AssetKey): string {
  const path = pathOrKey in assets ? assets[pathOrKey as AssetKey] : pathOrKey;
  return withBase(path);
}

/** CSS `url("...")` with base applied — for inline styles / CSS variables. */
export function cssUrl(pathOrKey: string | AssetKey): string {
  return `url("${asset(pathOrKey)}")`;
}

/** camelCase asset key → CSS custom property name (`aboutStory1` → `--asset-about-story-1`). */
export function assetVarName(key: string): string {
  const kebab = key
    .replace(/([a-z\d])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/([a-zA-Z])(\d)/g, "$1-$2")
    .toLowerCase();
  return `--asset-${kebab}`;
}

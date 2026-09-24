# WNC Educators Exchange

Static site for [wncexchange.com](https://wncexchange.com) — regional AI-for-educators summits, Top 10 Issues, campus practices, and the November event.

## Stack

- **Astro 5** + TypeScript
- **React islands** (event carousel only)
- Plain CSS design tokens
- Deploy: **GitHub Pages** via GitHub Actions (no backend)

## Local development

```bash
npm install
npm run dev
```

Build check:

```bash
npm run build
npm run preview
```

## Content you will swap later

All placeholder URLs and copy live in `src/content/`:

| File | What to update |
|------|----------------|
| `site.ts` | Contact email, register URL, Drive links, report links |
| `events.ts` | Event copy, program, image paths |
| `issues.ts` | Issue blurbs / web-shortened bodies |
| `schools.ts` | Campus practice cards (home modals) |
| `institutions.ts` | Campus survey cards (`/schools`) |
| `awards.ts` | Faculty award winners |
| `stats.ts` | Survey callouts |

Replace SVGs in `public/images/` with real photos (keep filenames or update paths in content files).

## Deploy (GitHub Pages)

This repo already has:

- Workflow: `.github/workflows/deploy.yml` (builds on push to `main`)
- Custom domain file: `public/CNAME` → `wncexchange.com`
- Site URL in `astro.config.mjs` → `https://wncexchange.com`

### TODO for deployment

Still open — finish these before the domain goes live:

1. **Add a GitHub remote** — this workspace has no `origin` yet (and no `gh` CLI here to create one). Create the repo on GitHub, then:
   ```bash
   git remote add origin https://github.com/{GITHUB_USER_OR_ORG}/{REPO}.git
   git push -u origin main
   ```
2. **Enable Pages → GitHub Actions** — repo Settings → Pages → Source: **GitHub Actions**. Confirm the Actions run succeeds.
3. **Custom domain in GitHub** — Pages settings → Custom domain `wncexchange.com` → enable **Enforce HTTPS** after DNS propagates.
4. **Fill `{GITHUB_USER_OR_ORG}`** in the Bill DNS message below (and in the `www` CNAME), then send him the A/CNAME records so he can update Wix.

### One-time setup (checklist)

1. Create a GitHub repo and add it as `origin`.
2. Push `main`.
3. Repo **Settings → Pages → Source: GitHub Actions**.
4. Confirm the Actions run succeeds (Deploy to GitHub Pages).
5. In Pages settings, set **Custom domain** to `wncexchange.com` and enable **Enforce HTTPS** after DNS propagates.

### Wix DNS (domain stays registered at Wix)

Wix-purchased domains keep Wix nameservers. Do **not** change nameservers. At Wix Domains → DNS records for `wncexchange.com`, add:

**Apex (`@` / `wncexchange.com`) — A records** (add all four):

| Type | Host | Value |
|------|------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**`www` — CNAME:**

| Type | Host | Value |
|------|------|--------|
| CNAME | `www` | `{GITHUB_USER_OR_ORG}.github.io` |

Replace `{GITHUB_USER_OR_ORG}` with the GitHub user or org that owns the repo (example: `landofsky.github.io`). Do **not** include the repo name in the CNAME target.

Remove any old Wix-site A/CNAME records that still point the domain at Wix hosting so they do not conflict.

### Message to send Bill (copy/paste)

> I own WNCExchange.com, which is registered through Wix. Keep the domain registered in your Wix account. In Wix DNS, add these records so the site we are building on GitHub Pages can serve the domain:
>
> **A records** for `@` (wncexchange.com):  
> `185.199.108.153`  
> `185.199.109.153`  
> `185.199.110.153`  
> `185.199.111.153`
>
> **CNAME** for `www`: `{GITHUB_USER_OR_ORG}.github.io`  
> (we will fill in the exact GitHub user/org after the repo is on GitHub)
>
> Do not change nameservers. After DNS propagates, https://wncexchange.com should load the Exchange site.

After the first successful Actions deploy + DNS, confirm https://wncexchange.com and https://www.wncexchange.com.

## Contact form

The contact CTA uses `mailto:` (opens the visitor’s email client). Update `contactEmail` in `src/content/site.ts`. Later you can point the same UI at Formspree/Getform without redesigning the layout.

## License / credit

Report framing draws on the 2026 WNC Educator Survey and regional educator summits (Land of Sky Workforce Development Board). Site authors credited: Leigha Travis, Ellie LaGrave.

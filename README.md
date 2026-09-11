# WNC Educators Exchange

Static site for [wncexchange.com](https://wncexchange.com) — regional AI-for-educators summits, Top 10 Issues, campus practices, and the November event.

## Stack

- **Astro 5** + TypeScript
- **React islands** (event carousel only)
- Plain CSS design tokens
- Deploy: **GitHub Pages** (no backend)

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
| `events.ts` | Event copy, program bullets, image paths |
| `issues.ts` | Issue blurbs / web-shortened bodies |
| `schools.ts` | Campus practice cards |
| `stats.ts` | Survey callouts |

Replace SVGs in `public/images/` with real Brain Hub / January / November photos (keep filenames or update paths in content files).

## Custom domain (GitHub Pages)

1. Push this repo to GitHub and enable **Pages** → Source: **GitHub Actions**.
2. `public/CNAME` already contains `wncexchange.com`.
3. At your DNS provider, point the apex (and optionally `www`) per [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
4. After the first successful Actions deploy, confirm the site loads at `https://wncexchange.com`.

## Contact form

The purple CTA uses `mailto:` (opens the visitor’s email client). Update `contactEmail` in `src/content/site.ts`. Later you can point the same UI at Formspree/Getform without redesigning the layout.

## License / credit

Report framing draws on the 2026 WNC Educator Survey and regional educator summits (Land of Sky Workforce Development Board). Site authors credited: Leigha Travis, Ellie LaGrave.

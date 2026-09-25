// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { deploy } from './src/config/site.ts';

// When wncexchange.com is primary, set CUSTOM_DOMAIN=1 in GitHub Actions.
const customDomain = process.env.CUSTOM_DOMAIN === '1';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: customDomain ? deploy.customDomainUrl : deploy.githubSite,
  base: customDomain ? '/' : deploy.githubPagesBase,
  output: 'static',
  integrations: [react()],
});

// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { deploy } from './src/config/site.ts';

// Official domain is primary (base "/"). Opt into project-Pages path with CUSTOM_DOMAIN=0.
const customDomain = process.env.CUSTOM_DOMAIN !== '0';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: customDomain ? deploy.customDomainUrl : deploy.githubSite,
  base: customDomain ? '/' : deploy.githubPagesBase,
  output: 'static',
  integrations: [react()],
});

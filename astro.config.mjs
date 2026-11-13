// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.qatechlabs.com',
  integrations: [sitemap()],
  adapter: vercel(),
  vite: { plugins: [tailwindcss()] },
});

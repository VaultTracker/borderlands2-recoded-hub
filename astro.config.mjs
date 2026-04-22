// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vaulttracker.github.io',
  base: '/borderlands2-recoded-hub',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

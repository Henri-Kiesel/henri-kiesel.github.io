import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://henri-kiesel.github.io',
  base: '/',
  trailingSlash: 'ignore',
  compressHTML: true,
});

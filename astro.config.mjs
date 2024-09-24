import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    outDir: 'dist'
  },
  site: "https://thekiso10.github.io",
  base: "website-jordi"
});
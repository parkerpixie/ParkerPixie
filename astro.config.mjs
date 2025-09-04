import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',          // we’re shipping a static site to Netlify
  trailingSlash: 'ignore',   // keep URLs simple
  vite: {
    build: {
      sourcemap: false
    }
  }
});

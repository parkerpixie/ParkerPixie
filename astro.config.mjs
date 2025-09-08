// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Keep it minimal. Don't pass a custom `vite` block unless we truly need it.
  // Astro will provide a working Vite config on Netlify.
  output: 'static'
});

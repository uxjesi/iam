// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://iam.jessicaloredo.com',
  build: {
    // Emits /clinical/index.html rather than /clinical.html, so the IONOS
    // Apache host serves the clean URLs the nav already points at.
    format: 'directory',
  },
});

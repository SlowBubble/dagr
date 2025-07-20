import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Set the base URL for assets to relative
  build: {
    outDir: 'docs', // Change the output directory from 'dist' to 'docs'
  },
});
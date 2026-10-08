import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: 'src',
  base: '/goit-js-hw-09/',
  // SimpleLightbox 2.14.3 also references Node's global in its browser build.
  define: { global: 'globalThis' },
  resolve: {
    alias: [
      {
        find: /^simplelightbox$/,
        replacement: 'simplelightbox/dist/simple-lightbox.esm.js',
      },
    ],
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'src/index.html'),
        gallery: resolve(import.meta.dirname, 'src/01-gallery.html'),
        form: resolve(import.meta.dirname, 'src/02-form.html'),
      },
    },
  },
});

import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: './', // Root directory (optional)
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist', // Output directory after building the project
  },
});
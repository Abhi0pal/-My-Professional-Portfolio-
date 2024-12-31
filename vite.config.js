import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disable source maps in production to avoid source map-related warnings
  },
  server: {
    sourcemap: false, // Suppress source map generation during development
  },
  resolve: {
    alias: {
      // Optionally add aliases for paths, if needed for the project
      '@': '/src',
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disable source maps for production
  },
  server: {
    sourcemap: true, // Enable source maps during development
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/', // Adjust based on deployment requirements
});

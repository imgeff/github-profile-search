import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '/dist',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['/.test/setup.js'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
  },
});

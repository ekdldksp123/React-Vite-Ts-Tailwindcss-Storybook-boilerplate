import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      {
        find: '@assets',
        replacement: '/src/assets',
      },
      {
        find: '@components',
        replacement: '/src/components',
      },
    ],
  },
});

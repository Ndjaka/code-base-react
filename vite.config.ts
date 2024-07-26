// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

/// <reference types="vitest" />

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
  },
});

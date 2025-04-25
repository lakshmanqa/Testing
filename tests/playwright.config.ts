import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true, // Optional: true is recommended for CI
  },
  reporter: [['junit', { outputFile: 'test-results/test-results.xml' }]],
});

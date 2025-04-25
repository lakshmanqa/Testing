import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['dot'],
    ['junit', { outputFile: 'test-results/test-results.xml' }]
  ],
});

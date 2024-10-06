import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  video: true,
  defaultCommandTimeout: 4000,
  chromeWebSecurity: false,
});

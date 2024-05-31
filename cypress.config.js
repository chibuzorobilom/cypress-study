const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'SignUp Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'https://staging.trymima.com/',
    viewportHeight: 900,
    viewportWidth: 1680,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    includeShadowDom: true,
    watchForFileChanges: false,
    retries:{
      runMode: 1,
      openMode: 1,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

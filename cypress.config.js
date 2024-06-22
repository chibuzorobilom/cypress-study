const { defineConfig } = require("cypress");
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify')

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  on('file:preprocessor', browserify.default(config))

  return config
}


module.exports = defineConfig({

  projectId: "jfdwjg",
  e2e: {
    specPattern: '**/*.feature',
    baseUrl: 'https://staging.trymima.com/',
    viewportHeight: 900,
    viewportWidth: 1680,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    includeShadowDom: true,
    watchForFileChanges: false,
    experimentalWebKitSupport: true,
    setupNodeEvents,
    }

  })

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    "overwrite": true,
    "html": true,
    "json": false,
    "code": true,
    "timestamp": "mmddyyyy-HHMMss",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalSessionAndOrigin: false,
  },
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: true,
    html: true,
    json: false,
    code: true,
    timestamp: "mmddyyyy-HHMMss"
  }
});
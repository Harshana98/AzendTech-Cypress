const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'spec',
  reporterOptions: {
    mochaFile: 'cypress/reports/results.xml',
  },
});

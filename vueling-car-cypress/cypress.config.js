const { defineConfig } = require("cypress");
const { searchCarRentalRate } = require("./cypress/support/hooks/CarRentalRateValidationHook");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        "carRentalRateValidation": () => searchCarRentalRate(),
      });
    },
    experimentalCspAllowList: true,
    requestTimeout: 10000,
    defaultCommandTimeout: 30000,
    viewportWidth: 430,
    viewportHeight: 932,
    video: false,
    includeShadowDom: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'reports',
      overwrite: false,
      html: true,
      json: true,
    }
  }
});


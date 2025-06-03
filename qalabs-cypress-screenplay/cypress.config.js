const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin, afterRunHandler, beforeRunHandler
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const report = require("multiple-cucumber-html-reporter");
const fs = require('fs');
const path = require('path');
const Cypress = require('cypress');

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config, {
    onAfterStep({ attach, pickle, pickleStep }) {
      const wasLastStep =
        pickle.steps[pickle.steps.length - 1] === pickleStep;

      if (wasLastStep) {
        try {
          const jsFilePath = path.resolve(__dirname, 'report-format.js');
          const jsContent = fs.readFileSync(jsFilePath, 'utf8');
          attach(`<script id='report'>${jsContent}</script>`);
        } catch (error) {
          console.error('Error loading JavaScript file:', error);
        }
      }
    }
  });

  on("before:run", async () => {
    const reportsFolder = path.resolve(__dirname, 'reports');
    await beforeRunHandler(config);
    if (fs.existsSync(reportsFolder)) {
      fs.rmdirSync(reportsFolder, { recursive: true });
    }
  });

  on("after:run", async (results) => {
    await afterRunHandler(config);
    await report.generate({
      jsonDir: "reports",
      reportPath: "reports/cucumber-html",
      metadata: {
        device: "Local test machine",
        platform: {
          name: config.platform,
        },
      }
    });
  });

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/**/*.feature",
    screenshotsFolder: "reports/screenshots",
    defaultCommandTimeout: 30000,
    setupNodeEvents,
  },
});
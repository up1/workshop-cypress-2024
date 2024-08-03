const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));
  return config;
}

module.exports = defineConfig({

  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents
  },
});
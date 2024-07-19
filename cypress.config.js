const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    projectId: "twcy9h",
    "baseurl":"https://opensource-demo.orangehrmlive.com",
    experimentalStudio:true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
   },
    
  },
});
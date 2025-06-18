const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      X_API_KEY: process.env.X_API_KEY,
      GETUSERS: process.env.GETUSERS,
      CREATEUSER: process.env.CREATEUSER,
      DELETEUSER: process.env.DELETEUSER,
    },
  },
});

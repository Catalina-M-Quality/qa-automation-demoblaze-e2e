const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  retries: 1,
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000, // <--- Se agrega aquí (tiempo de espera en milisegundos, ej. 10 seg)
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      allure: true // Esto fuerza a que la variable exista internamente
    }
  },
});

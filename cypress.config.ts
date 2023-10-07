import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    watchForFileChanges : false,
    defaultCommandTimeout : 5000,
    chromeWebSecurity : false,
    
  },
});

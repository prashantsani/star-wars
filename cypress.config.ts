import { defineConfig } from 'cypress'
 
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: 'cypress/component/**/*.{js,jsx,ts,tsx}',
  },
})
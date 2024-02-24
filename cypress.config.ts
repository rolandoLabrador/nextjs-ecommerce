import { defineConfig } from 'cypress'
 
require('dotenv').config()

export default defineConfig({
  env: {
    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  e2e: {
    baseUrl   : "http://localhost:3000",
    setupNodeEvents(on, config) {},
  },
})

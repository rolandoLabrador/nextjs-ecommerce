This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

npx prisma db push is to push the schema to the database.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# make sure to config the extensions

# e-commerce_nextjs

Create database

In this case google mongo Db and create an account and create a database.
Then you need to do the followin gon the comand promp npx prisma init
Then  you go back to connect the database to the project and subtituing the url in the .env file.Then replace the password for the Atlas password

# Errors encountered and how to solve them

# Make sure you have the packages install for example this was the prisma schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Product {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  description String
  imageUrl    String
  name        String
  price       Int
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("products")
}

# I was trying to import Product from the schema

 import{Product} from "@prisma/client";
It was giving me an error and even would suggest to change it to products

I needed to install the @primsa/client package by using
npm install @prisma/client

## if you download the project remember to delete the prisma folder and put in the comand line npx prism init

# NPM RUN BUILD IS TO BUILD THE PROJECT

# ui.shadcn.com

When installing shadcn agter daisiyui make sure to add the following to the tailwind.config.js file because it will delete your plugins.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#f4aa3a",
          secondary: "#f4f4a1",
          accent: "#1be885",
          neutral: "#272136",
          "base-100": "#ffffff",
          info: "#778ad4",
          success: "#23b893",
          warning: "#f79926",
          error: "#ea535a",
          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
};

API IM USING <https://rapidapi.com/dominonet-lTpEE6zONeS/api/vehicle-market-value/>

This is for the cypress login
<https://docs.cypress.io/guides/end-to-end-testing/google-authentication>

# Cypress

check 
check // cypress/integration/e2e.spec.ts

describe('End-to-End Test', () => {
  it('should perform an end-to-end test', () => {
    cy.visit('/'); // Visit the homepage

    // Perform actions like clicking on elements, filling forms, etc.
    cy.get('nav').contains('Buy Now').click();

    // Add assertions to validate the expected behavior
    cy.url().should('include', '/buy'); // Validate the URL after clicking 'Buy Now'

    // Custom command to login using Google API
    cy.loginByGoogleApi();

    // Add more test steps as needed
  });
});
## Cypress 

Page Load Timing: When you visit a page with cy.visit(), Cypress waits for the page to load completely before proceeding with the next command. If the search input field is rendered dynamically or asynchronously after the initial page load, it might not be present in the DOM when Cypress first tries to find it.

Isolation of Test Cases: Each test case in Cypress runs independently, and Cypress starts each test case with a clean slate, including a fresh page load. This means that the state of the page (e.g., DOM elements, JavaScript variables) is reset between test cases. Therefore, if the search input field is initialized after the initial page load, it won't exist when Cypress begins the second test case unless you trigger its rendering again.

Cypress automatically fails a test if it detects an uncaught error originating from the application code being tested. This behavior is to ensure that tests fail explicitly when there are unexpected errors in the application, helping to catch issues and ensure test reliability.

However, there are cases where applications intentionally throw errors or handle them in a way that doesn't indicate a failure. In such cases, Cypress might erroneously interpret these errors as test failures, even though they are not indicative of a problem with the application under test.



check this. 
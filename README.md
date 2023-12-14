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

# NPM RUN BUILD IS TO BUILD THE PROJECT.
#

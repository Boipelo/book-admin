## FE Task
The FE-Task has been broken down into the following routes:

# Administrators
- pages/admin/books
- pages/admin/books/new
- pages/admin/books/[bookId]

# End User
- pages/books
- pages/books/[bookId]

# API
The following pages contain urls to the https://crudcrud.com api:
- components/bookshelf/bookshelf.tsx
- src/app/pages/admin/books/[bookId]
- src/app/pages/books/[bookId]

For testing purposes I have provide an dummy data file - src/app/pages/api/books.json. The data in this file is intended to be added to to the https://crudcrud.com api via the form built to add new books.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

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

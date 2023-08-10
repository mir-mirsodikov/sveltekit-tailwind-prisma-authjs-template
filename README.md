# SvelteKit + TailwindCSS + Prisma + Auth.js Template

This is a template for SvelteKit with TailwindCSS, Prisma, and Auth.js.

This template assumes that you understand the various technologies used in it. This template was created to help
me build out these applications faster. It is very opinionated, and that is on purpose. I like these technologies and this
stack. If you don't have a lot experience with these technologies, I would recommend learning them individually before
trying to use this template.

## Getting Started

This repository is a template repository, so you can click the "Use this template" button to create a new repository with this template.

## Environment Variables

The environment variables are outlined in the `.env.example` file. You can copy this file to `.env` and fill in the values.


# Authentication

The authentication is handled by [Auth.js](https://authjs.dev/). The configuration for it lies in the `hooks.server.ts` file in the `src` directory.

The auth providers used in this template are Google and GitHub. You can create OAuth apps for these providers at the following links:

- [Google](https://console.cloud.google.com/apis/credentials)
- [GitHub](https://github.com/settings/applications/new)

You can also remove these providers and add your own. See the [Auth.js documentation](https://authjs.dev/reference/core) for more information.

# Database

This template uses [Prisma](https://www.prisma.io/) for the database. The configuration for it lies in the `prisma/schema.prisma` file. 
The default database is SQLite, but you can change that to a database of your choice in the `datasource` block of the `schema.prisma` file.




# Build and Run

## Install dependencies

```bash
npm install
```

## Run the development server

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

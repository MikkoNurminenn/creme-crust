# Creme Crust

Bilingual English/Malay brand site for Creme Crust, a small-batch pastry business based in Kota Kinabalu.

## What this project is

This repo contains a polished marketing site built to make a preorder-based food business feel intentional, editorial, and easy to browse on both mobile and desktop.

The project combines:

- a localized content system for English and Malay
- a strong visual presentation for product drops and packaging
- motion-driven UI details for a more premium brand feel
- a server-side Instagram feed with a graceful local fallback

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Vitest

## Highlights

- Content is structured in locale files, which keeps copy changes separate from layout work.
- The site can surface the latest Instagram posts when Meta credentials are available.
- If the Instagram API is not configured, the UI falls back to curated local gallery cards so the homepage still feels complete.
- The repository includes tests for key UI behavior instead of relying only on manual browser checks.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Instagram feed setup

Add these environment variables locally and in Vercel:

```bash
INSTAGRAM_GRAPH_USER_ID=
INSTAGRAM_GRAPH_ACCESS_TOKEN=
INSTAGRAM_GRAPH_API_VERSION=v21.0
INSTAGRAM_FEED_REVALIDATE_SECONDS=300
```

- `INSTAGRAM_GRAPH_USER_ID` should be the Instagram professional account user ID used by the Meta API.
- `INSTAGRAM_GRAPH_ACCESS_TOKEN` should be a valid Meta access token with Instagram media-read access for that account.
- `INSTAGRAM_FEED_REVALIDATE_SECONDS=300` refreshes the feed roughly every five minutes.

## Deployment

```bash
vercel deploy --prod -y
```

The production URL can stay in the repository homepage field on GitHub for portfolio use.

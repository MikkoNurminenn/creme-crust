# Creme Crust Web

Bilingual Next.js brand site for Creme Crust.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Instagram live feed

The homepage supports a server-side Instagram feed that can show the 3 latest posts.

Add these environment variables locally and in Vercel:

```bash
INSTAGRAM_GRAPH_USER_ID=
INSTAGRAM_GRAPH_ACCESS_TOKEN=
INSTAGRAM_GRAPH_API_VERSION=v21.0
INSTAGRAM_FEED_REVALIDATE_SECONDS=300
```

Notes:

- `INSTAGRAM_GRAPH_USER_ID` should be the Instagram professional account user ID used by the Meta API.
- `INSTAGRAM_GRAPH_ACCESS_TOKEN` should be a valid Meta access token with Instagram media-read access for that account.
- `INSTAGRAM_FEED_REVALIDATE_SECONDS=300` means the feed refreshes roughly every 5 minutes.
- If the Meta keys are missing, the site falls back to mirrored local Instagram cards so the section still looks intentional.

## Deploy

```bash
vercel deploy --prod -y
```

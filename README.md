# Soham Maury — Portfolio

Personal portfolio built as a developer `README.md` / terminal-styled site. Next.js App Router, Tailwind, and no CMS — all content lives in one file.

## Stack

- Next.js 16 (Turbopack dev), React 19, TypeScript
- Tailwind CSS v4
- Upstash Redis — real visitor counter (optional, falls back to a static number without it)
- Vercel Analytics + Vercel deployment

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Editing content

Everything you'd normally hunt across pages for — name, bio, socials, skills, experience, projects — lives in **[constants/index.ts](constants/index.ts)**. Change the data there; the components (`About`, `Skill`, `Experience`, `Projects`, `Contact`, the sidebar, the footer) just render it.

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you need — everything is optional, the site runs fine with none of it set:

| Variable | Required for | Fallback if unset |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | canonical URLs, OG tags, sitemap | `https://sohammaury.me` (hardcoded in `constants/index.ts`) |
| `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` | real visitor counter | static `Site.visitorCount` number in the footer |

### Wiring up the visitor counter

1. In the Vercel dashboard: **Storage → Marketplace → connect a Redis integration (Upstash)** to this project. That injects `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` into the project's env vars automatically.
2. Locally, run `vercel env pull .env.local` to pull those same vars down (or copy them by hand from the dashboard).
3. That's it — `app/api/visits/route.ts` increments and reads the count on each page load; the footer fetches it client-side. No schema, no setup beyond the two env vars.

It's a raw hit counter (every page load bumps it), not de-duped per unique visitor — intentionally, in keeping with the "you are the Nth visitor" webring-counter joke in the footer copy.

## Deployment

Deploys on [Vercel](https://vercel.com/new). Connect the Upstash integration there too if you want the real counter in production.

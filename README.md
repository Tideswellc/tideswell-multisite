# Tideswell Multi-Tenant Deals Sites — Starter

This repo is a **multi-tenant** starter for your deals sites (SoccerDealsDaily, TechSaverDaily, etc.).
- **apps/web**: Next.js (App Router) + per-site theming via config files.
- **apps/worker**: Cloudflare Worker with cron stubs for ingestion, scoring, Deal of the Day, and social posting.
- **packages/shared**: Shared TypeScript types and utils.
- **apps/admin** (optional placeholder): Minimal admin page within apps/web `/admin` (auth stub).

## Quickstart (Dev Preview)
1. Ensure Node 18+ and PNPM (or npm) installed.
2. `pnpm install` (or `npm install`) at repo root.
3. `pnpm dev` (or `npm run dev`) — open http://localhost:3000
4. Switch brands by visiting:
   - http://localhost:3000?site=soccerdealsdaily
   - http://localhost:3000?site=techsaverdaily

## Deploy (Minimal Cost, Automation-Ready)
**Frontend (Next.js) → Cloudflare Pages**
1. Push repo to GitHub.
2. In Cloudflare Pages, create project from this repo; set `NODE_VERSION=18` and build command `pnpm i && pnpm build` (or npm), output `.next` handled automatically.
3. Add your custom domain (e.g., soccerdealsdaily.com) and map it.

**Workers Cron (Automation) → Cloudflare Workers**
1. Install Wrangler locally: `npm i -g wrangler`.
2. In `apps/worker/wrangler.toml`, set your account id and add KV/R2/Env vars as needed.
3. `cd apps/worker && pnpm deploy` (or `wrangler deploy`).
4. Cron triggers are defined in `wrangler.toml` (`[triggers] crons = [...]`).

**Database**
- Replace mock data with Neon Postgres + Prisma in a follow-up commit (scaffold ready in `packages/shared/db/`).
- For preview, the site loads mock deals from `apps/web/mock/`.

**Social Posting**
- Stubs in Worker (`postSocial`) — wire up official APIs as you gain access. Use feature flags per site.

## Env Vars (Frontend)
Create `.env` in `apps/web` (for future real APIs):
```
NEXT_PUBLIC_DEFAULT_SITE=soccerdealsdaily
# Add analytics keys etc. as needed
```

## Notes
- This is a **visual and structural POC** so you can *see the sites now*. Replace mock feeds with real adapters and DB.
- Add more sites by copying a config file under `apps/web/site-config/`.

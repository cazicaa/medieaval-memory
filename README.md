# ⚔ Medieval Memory

A medieval-themed memory match card game. Pure static frontend (vanilla JS, no build step) with a
[Supabase](https://supabase.com) scoreboard, deployable on [Vercel](https://vercel.com).

## Gameplay

- **Easy** 4×4, **Medium** 6×6, **Hard** 10×10.
- 52 unique hand-drawn card faces: weapons, armor, siege engines, buildings, magic items and
  tavern life — no recolored duplicates. Preview them all in [`gallery.html`](gallery.html).
- **Score starts at 100,000** and loses 100 per second and 250 per mistake (a mistake is a flipped
  pair that doesn't match), floored at 0. Higher is better.
- The best score per difficulty is shown on the main menu; after winning you can submit your name + score.

## Setup

### 1. Supabase (scoreboard backend)

1. Create a project at [supabase.com](https://supabase.com).
2. Open **SQL Editor** and run the contents of [`supabase/schema.sql`](supabase/schema.sql).
3. Copy the **Project URL** and **anon (publishable) key** from *Project Settings → API*
   into [`js/config.js`](js/config.js).

Without credentials the game still works — scores are kept in the browser's localStorage.

The anon key is intentionally public; writes are constrained by row-level security and column checks.

### 2. Run locally

Any static file server works (ES modules don't run from `file://`), e.g.:

```sh
npx serve .
```

### 3. Deploy to Vercel

Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new) (framework preset:
**Other**, no build command, output dir `.`), or use the CLI:

```sh
npx vercel --prod
```

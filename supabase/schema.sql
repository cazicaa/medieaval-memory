-- Medieval Memory scoreboard schema.
-- Run this in the Supabase SQL Editor (Dashboard -> SQL Editor -> New query).

create table public.scores (
  id bigint generated always as identity primary key,
  name text not null check (char_length(trim(name)) between 1 and 20),
  difficulty text not null check (difficulty in ('easy', 'medium', 'hard')),
  score integer not null check (score > 0),
  time_ms integer not null check (time_ms > 0),
  mistakes integer not null check (mistakes >= 0),
  created_at timestamptz not null default now()
);

alter table public.scores enable row level security;

-- Anyone may read the scoreboard.
create policy "public read" on public.scores
  for select using (true);

-- Anyone may submit a score (column checks above limit abuse).
create policy "public insert" on public.scores
  for insert with check (true);

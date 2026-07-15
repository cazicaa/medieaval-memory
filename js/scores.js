/* Scoreboard storage: Supabase REST API when configured, localStorage fallback otherwise. */

import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';

const LS_KEY = 'medieval-memory-scores';

export const remoteEnabled = () => Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

function headers() {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json'
  };
}

function readLocal() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
  } catch {
    return [];
  }
}

function writeLocal(scores) {
  localStorage.setItem(LS_KEY, JSON.stringify(scores));
}

/* Best (highest) score per difficulty: { easy: {name, score} | null, medium: ..., hard: ... } */
export async function getBestScores() {
  const best = { easy: null, medium: null, hard: null };

  if (remoteEnabled()) {
    const url = `${SUPABASE_URL}/rest/v1/scores?select=name,difficulty,score,time_ms,mistakes&order=score.desc`;
    const res = await fetch(url, { headers: headers() });
    if (!res.ok) throw new Error(`Failed to load scores (${res.status})`);
    const rows = await res.json();
    for (const row of rows) {
      if (!best[row.difficulty]) best[row.difficulty] = row;
    }
    return best;
  }

  for (const row of readLocal().sort((a, b) => b.score - a.score)) {
    if (!best[row.difficulty]) best[row.difficulty] = row;
  }
  return best;
}

export async function submitScore({ name, difficulty, score, timeMs, mistakes }) {
  const entry = {
    name: name.trim().slice(0, 20),
    difficulty,
    score,
    time_ms: timeMs,
    mistakes
  };

  if (remoteEnabled()) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/scores`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(entry)
    });
    if (!res.ok) throw new Error(`Failed to submit score (${res.status})`);
    return;
  }

  const scores = readLocal();
  scores.push(entry);
  writeLocal(scores);
}

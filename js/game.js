import { FACES } from './icons.js';
import { getBestScores, submitScore, remoteEnabled } from './scores.js';

const DIFFICULTIES = {
  easy: { label: 'Easy', cols: 4, rows: 4 },
  medium: { label: 'Medium', cols: 6, rows: 6 },
  hard: { label: 'Hard', cols: 10, rows: 10 }
};

const STARTING_SCORE = 100000;
const TIME_PENALTY_PER_SEC = 100;
const MISTAKE_PENALTY = 250; // score = 100000 - seconds*100 - mistakes*250, higher is better

const $ = (sel) => document.querySelector(sel);

const els = {
  menu: $('#screen-menu'),
  game: $('#screen-game'),
  grid: $('#grid'),
  timer: $('#hud-timer'),
  mistakes: $('#hud-mistakes'),
  hudDifficulty: $('#hud-difficulty'),
  winOverlay: $('#win-overlay'),
  winTime: $('#win-time'),
  winMistakes: $('#win-mistakes'),
  winScore: $('#win-score'),
  winRecord: $('#win-record'),
  submitForm: $('#submit-form'),
  submitName: $('#submit-name'),
  submitBtn: $('#submit-btn'),
  submitStatus: $('#submit-status'),
  scoreboardNote: $('#scoreboard-note')
};

const state = {
  difficulty: null,
  firstCard: null,
  lock: false,
  matchedPairs: 0,
  totalPairs: 0,
  mistakes: 0,
  startTime: null,
  timerId: null,
  elapsedMs: 0,
  submitted: false
};

/* ---------- helpers ---------- */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(ms) {
  const totalSec = Math.floor(ms / 1000);
  const m = String(Math.floor(totalSec / 60)).padStart(2, '0');
  const s = String(totalSec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function computeScore(elapsedMs, mistakes) {
  const seconds = elapsedMs / 1000;
  const raw = STARTING_SCORE - seconds * TIME_PENALTY_PER_SEC - mistakes * MISTAKE_PENALTY;
  return Math.max(0, Math.round(raw));
}

/* ---------- menu / scoreboard ---------- */

async function refreshScoreboard() {
  els.scoreboardNote.textContent = remoteEnabled()
    ? ''
    : 'Scores are stored locally in this browser (Supabase not configured yet).';

  for (const key of Object.keys(DIFFICULTIES)) {
    const cell = $(`#best-${key}`);
    cell.textContent = '…';
    cell.classList.remove('empty');
  }

  let best;
  try {
    best = await getBestScores();
  } catch (err) {
    console.error(err);
    for (const key of Object.keys(DIFFICULTIES)) {
      $(`#best-${key}`).textContent = 'unavailable';
    }
    return;
  }

  for (const key of Object.keys(DIFFICULTIES)) {
    const cell = $(`#best-${key}`);
    const row = best[key];
    if (row) {
      cell.textContent = `${row.score} — ${row.name}`;
    } else {
      cell.textContent = 'no record yet';
      cell.classList.add('empty');
    }
  }
}

function showMenu() {
  stopTimer();
  els.game.classList.add('hidden');
  els.winOverlay.classList.add('hidden');
  els.menu.classList.remove('hidden');
  refreshScoreboard();
}

/* ---------- game ---------- */

function startGame(difficulty) {
  const { cols, rows, label } = DIFFICULTIES[difficulty];
  state.difficulty = difficulty;
  state.firstCard = null;
  state.lock = false;
  state.matchedPairs = 0;
  state.totalPairs = (cols * rows) / 2;
  state.mistakes = 0;
  state.startTime = null;
  state.elapsedMs = 0;
  state.submitted = false;

  const faces = shuffle(FACES).slice(0, state.totalPairs);
  const deck = shuffle([...faces, ...faces]);

  els.grid.style.setProperty('--cols', cols);
  els.grid.style.setProperty('--rows', rows);
  els.grid.innerHTML = '';
  els.grid.className = `grid ${difficulty}`;

  for (const face of deck) {
    const card = document.createElement('button');
    card.className = 'card';
    card.dataset.face = face.id;
    card.setAttribute('aria-label', 'Hidden card');
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-back"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 L78 18 V44 Q78 68 50 82 Q22 68 22 44 V18 Z" fill="none" stroke="currentColor" stroke-width="4"/>
          <path d="M50 26 L50 66 M36 40 L64 40" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
        </svg></div>
        <div class="card-front">${face.svg}</div>
      </div>`;
    card.addEventListener('click', () => onCardClick(card, face));
    els.grid.appendChild(card);
  }

  els.hudDifficulty.textContent = label;
  els.timer.textContent = '00:00';
  els.mistakes.textContent = '0';
  els.menu.classList.add('hidden');
  els.winOverlay.classList.add('hidden');
  els.game.classList.remove('hidden');
}

function startTimer() {
  state.startTime = performance.now();
  state.timerId = setInterval(() => {
    state.elapsedMs = performance.now() - state.startTime;
    els.timer.textContent = formatTime(state.elapsedMs);
  }, 250);
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}

function onCardClick(card, face) {
  if (state.lock) return;
  if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

  if (!state.startTime) startTimer();

  card.classList.add('flipped');
  card.setAttribute('aria-label', face.label);

  if (!state.firstCard) {
    state.firstCard = card;
    return;
  }

  const first = state.firstCard;
  state.firstCard = null;

  if (first.dataset.face === card.dataset.face) {
    first.classList.add('matched');
    card.classList.add('matched');
    state.matchedPairs++;
    if (state.matchedPairs === state.totalPairs) onWin();
  } else {
    state.mistakes++;
    els.mistakes.textContent = state.mistakes;
    state.lock = true;
    setTimeout(() => {
      first.classList.remove('flipped');
      card.classList.remove('flipped');
      first.setAttribute('aria-label', 'Hidden card');
      card.setAttribute('aria-label', 'Hidden card');
      state.lock = false;
    }, 750);
  }
}

/* ---------- win / submit ---------- */

async function onWin() {
  stopTimer();
  state.elapsedMs = performance.now() - state.startTime;
  const score = computeScore(state.elapsedMs, state.mistakes);

  els.winTime.textContent = formatTime(state.elapsedMs);
  els.winMistakes.textContent = state.mistakes;
  els.winScore.textContent = score;
  els.winRecord.textContent = '';
  els.submitStatus.textContent = '';
  els.submitBtn.disabled = false;
  els.submitName.disabled = false;
  els.winOverlay.classList.remove('hidden');
  els.submitName.focus();

  try {
    const best = await getBestScores();
    const record = best[state.difficulty];
    if (!record || score > record.score) {
      els.winRecord.textContent = '🏆 A new record for this difficulty!';
    }
  } catch {
    /* record hint is cosmetic; ignore lookup failures */
  }
}

els.submitForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (state.submitted) return;
  const name = els.submitName.value.trim();
  if (!name) return;

  els.submitBtn.disabled = true;
  els.submitStatus.textContent = 'Submitting…';
  try {
    await submitScore({
      name,
      difficulty: state.difficulty,
      score: computeScore(state.elapsedMs, state.mistakes),
      timeMs: Math.round(state.elapsedMs),
      mistakes: state.mistakes
    });
    state.submitted = true;
    els.submitName.disabled = true;
    els.submitStatus.textContent = 'Score recorded in the annals!';
  } catch (err) {
    console.error(err);
    els.submitBtn.disabled = false;
    els.submitStatus.textContent = 'Submission failed — try again.';
  }
});

/* ---------- wiring ---------- */

for (const [key, def] of Object.entries(DIFFICULTIES)) {
  $(`#play-${key}`).addEventListener('click', () => startGame(key));
}
$('#btn-quit').addEventListener('click', showMenu);
$('#btn-again').addEventListener('click', () => startGame(state.difficulty));
$('#btn-menu').addEventListener('click', showMenu);

showMenu();

/* =========================================================
   ABTalks — mocked data layer.
   No backend. This stands in for the real API responses.
   ========================================================= */

const TOTAL_DAYS = 60;

function buildDays(pattern){
  // pattern: array of {day, status} overrides; default = 'future'
  const days = Array.from({length: TOTAL_DAYS}, (_, i) => ({ day: i + 1, status: 'future' }));
  pattern.forEach(p => { days[p.day - 1].status = p.status; });
  return days;
}

const STATE_ACTIVE = {
  key: 'active',
  label: 'On track · Day 12',
  student: { name: 'Aditi Sharma', initials: 'AS', track: 'Full-Stack Web Dev' },
  streak: 8,
  longestStreak: 11,
  currentDay: 12,
  freezeAvailable: 1,
  freezeUsed: 1,
  rank: 14,
  cohortSize: 342,
  percentile: 96,
  banner: { type: 'info', icon: '🌙', title: 'Late-night reminder', body: "Today's window closes at 5:00 AM IST — plenty of time." },
  days: buildDays([
    { day: 1, status: 'complete' }, { day: 2, status: 'complete' }, { day: 3, status: 'complete' },
    { day: 4, status: 'complete' }, { day: 5, status: 'missed' }, { day: 6, status: 'frozen' },
    { day: 7, status: 'complete' }, { day: 8, status: 'complete' }, { day: 9, status: 'complete' },
    { day: 10, status: 'complete' }, { day: 11, status: 'complete' }, { day: 12, status: 'today' },
  ]),
  achievements: [
    { emoji: '🔥', label: '7-day streak', locked: false },
    { emoji: '🧊', label: 'Freeze saved you', locked: false },
    { emoji: '🚀', label: 'First deploy', locked: false },
    { emoji: '🏅', label: 'Top 10%', locked: true },
  ],
};

const STATE_DAY1 = {
  key: 'day1',
  label: 'First day · No streak yet',
  student: { name: 'Rohan Verma', initials: 'RV', track: 'DSA & Interview Prep' },
  streak: 0,
  longestStreak: 0,
  currentDay: 1,
  freezeAvailable: 0,
  freezeUsed: 0,
  rank: null,
  cohortSize: 218,
  percentile: null,
  banner: { type: 'success', icon: '👋', title: 'Welcome to the challenge', body: "Your streak starts the moment you submit Day 1. No pressure — just show up." },
  days: buildDays([{ day: 1, status: 'today' }]),
  achievements: [
    { emoji: '🔥', label: '7-day streak', locked: true },
    { emoji: '🧊', label: 'Freeze earned', locked: true },
    { emoji: '🚀', label: 'First deploy', locked: true },
    { emoji: '🏅', label: 'Top 10%', locked: true },
  ],
};

const STATE_MISSED = {
  key: 'missed',
  label: 'Missed yesterday · Streak broken',
  student: { name: 'Priya Nair', initials: 'PN', track: 'Machine Learning' },
  streak: 0,
  longestStreak: 9,
  currentDay: 13,
  freezeAvailable: 0,
  freezeUsed: 2,
  rank: 51,
  cohortSize: 190,
  percentile: 73,
  banner: { type: 'warn', icon: '⚠️', title: 'Day 12 wasn\u2019t submitted', body: "Your streak reset to 0 — your longest streak (9) is saved permanently. Submit today to start a new one." },
  days: buildDays([
    { day: 1, status: 'complete' }, { day: 2, status: 'complete' }, { day: 3, status: 'complete' },
    { day: 4, status: 'complete' }, { day: 5, status: 'complete' }, { day: 6, status: 'complete' },
    { day: 7, status: 'complete' }, { day: 8, status: 'complete' }, { day: 9, status: 'complete' },
    { day: 10, status: 'frozen' }, { day: 11, status: 'frozen' }, { day: 12, status: 'missed' },
    { day: 13, status: 'today' },
  ]),
  achievements: [
    { emoji: '🔥', label: '7-day streak', locked: false },
    { emoji: '🧊', label: 'Freeze saved you', locked: false },
    { emoji: '🚀', label: 'First deploy', locked: false },
    { emoji: '🏅', label: 'Top 10%', locked: true },
  ],
};

const STATE_EMPTY = {
  key: 'empty',
  label: 'Empty profile · Not started',
  student: { name: 'New Student', initials: '—', track: null },
  streak: 0,
  longestStreak: 0,
  currentDay: 0,
  freezeAvailable: 0,
  freezeUsed: 0,
  rank: null,
  cohortSize: 0,
  percentile: null,
  banner: { type: 'info', icon: '🧭', title: 'Pick a track to unlock Day 1', body: "You haven't joined a track yet. Choose one below — your 60-day clock starts on your first submission, not today." },
  days: buildDays([]),
  achievements: [
    { emoji: '🔥', label: '7-day streak', locked: true },
    { emoji: '🧊', label: 'Freeze earned', locked: true },
    { emoji: '🚀', label: 'First deploy', locked: true },
    { emoji: '🏅', label: 'Top 10%', locked: true },
  ],
};

const DASHBOARD_STATES = {
  active: STATE_ACTIVE,
  day1: STATE_DAY1,
  missed: STATE_MISSED,
  empty: STATE_EMPTY,
};

const DAY_TASKS = {
  12: {
    day: 12,
    track: 'Full-Stack Web Dev',
    title: 'Build a REST API for a Todo app',
    dateLabel: 'Day 12 · Due tonight, 5:00 AM IST',
    summary: "Stand up a small REST API with create, read, update and delete routes for a todo list, backed by any datastore you like — a JSON file is fine.",
    objectives: [
      'Expose GET /todos and GET /todos/:id',
      'Expose POST /todos to create a todo',
      'Expose PATCH /todos/:id to mark complete',
      'Expose DELETE /todos/:id',
      'Return proper status codes (200/201/404)',
    ],
    resources: [
      { label: 'REST API design cheatsheet', url: '#' },
      { label: "Yesterday's solution thread (Day 11)", url: '#' },
      { label: 'Ask a mentor on the ABTalks Discord', url: '#' },
    ],
  }
};

/* ---------- shared render helpers ---------- */

function renderGrid(container, days){
  container.innerHTML = '';
  days.forEach(d => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.status = d.status;
    cell.title = `Day ${d.day} — ${d.status}`;
    container.appendChild(cell);
  });
}

function bannerClass(type){
  return { info: 'info', warn: 'warn', danger: 'danger', success: 'success' }[type] || 'info';
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}

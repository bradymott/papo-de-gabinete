
/* ================= utilities ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const stripHtml = s => String(s ?? "").replace(/<[^>]+>/g, "");
const DAY = 86400000;
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const pad2 = n => String(n).padStart(2, "0");
const dayKey = (d = new Date()) => d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
function hash(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); }
const norm = s => String(s || "").toLowerCase().replace(/[“”"'.,!?;:¿¡()…—–\-]/g, " ").replace(/\s+/g, " ").trim();
const deaccent = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "");
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function seedOf(s) { return parseInt(hash(s), 36) || 7; }
let toastTimer;
function toast(msg) { const t = $("#toast"); if (!t) return; t.textContent = msg; t.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 2400); }
function relDays(ts) {
  const d = Math.round((ts - Date.now()) / DAY);
  if (ts <= Date.now()) return "agora";
  if (d <= 0) { const m = Math.max(1, Math.round((ts - Date.now()) / 60000)); return m < 60 ? m + " min" : Math.round(m / 60) + " h"; }
  return d === 1 ? "amanhã" : "em " + d + " dias";
}

/* ================= icons ================= */
const I = {
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5C6.5 4 9.5 4 12 5.5v14C9.5 18 6.5 18 4 19.5z"/><path d="M20 5.5C17.5 4 14.5 4 12 5.5v14c2.5-1.5 5.5-1.5 8 0z"/></svg>',
  cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="13" height="13" rx="2.5"/><path d="M8 4h10.5A2.5 2.5 0 0 1 21 6.5V17"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  slow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 1.5M9 2h6"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4M6.6 6.6C3.8 8.4 2 12 2 12s3.5 7 10 7c1.8 0 3.3-.5 4.6-1.2M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1 3.5 5 5.5 5 11a5 5 0 0 1-10 0c0-2.5 1.2-4 2.5-5.2.2 1.7 1 2.7 2 3.2-.6-3 .5-6.5.5-9z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8zM19 15l.9 2.6 2.6.9-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9z"/></svg>',
  bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2 20h20zM12 10v4M12 17h.01"/></svg>',
  card1: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="14" rx="2.5"/><path d="M12 9v6M9 12h6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/></svg>'
};

/* Azulejo motif in the spirit of Athos Bulcão: one tile, randomly rotated per cell. */
const MOTIFS = [
  '<path d="M0,0 H10 A10,10 0 0,1 0,10 Z"/>',
  '<path d="M0,10 A5,5 0 0,1 10,10 Z"/><rect x="0" y="0" width="10" height="2.4"/>',
  '<path d="M0,0 H10 V10 Z"/><circle cx="3" cy="7" r="1.8"/>',
  '<rect x="0" y="0" width="5" height="5"/><circle cx="7.5" cy="7.5" r="2.5"/>',
  '<path d="M0,5 A5,5 0 0,1 5,0 V5 Z"/><path d="M5,10 A5,5 0 0,1 10,5 V10 Z"/>'
];
function tiles(seed, cols, rows, motif, cls = "") {
  const rnd = mulberry32(seed);
  const m = MOTIFS[(motif ?? Math.floor(rnd() * MOTIFS.length)) % MOTIFS.length];
  let g = "";
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
    const r = Math.floor(rnd() * 4) * 90;
    g += `<g transform="translate(${x * 10} ${y * 10}) rotate(${r} 5 5)">${m}</g>`;
  }
  return `<svg class="${cls}" viewBox="0 0 ${cols * 10} ${rows * 10}" preserveAspectRatio="xMidYMid slice" fill="currentColor" aria-hidden="true">${g}</svg>`;
}
function initials(name) { return name.replace(/^(Prefeita|Prefeito|Vereadora|Vereador|Dona|Dr\.|Dra\.)\s+/i, "").split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase(); }
function avatar(p, size = "") {
  return `<div class="avatar ${size}">${tiles(seedOf(p.id || p.name), 2, 2, (seedOf(p.name) % MOTIFS.length))}<span><em>${esc(initials(p.name))}</em></span></div>`;
}

/* ================= profile & storage ================= */
const DEFAULT_PROFILE = {
  v: 1, setupDone: false, address: "", myName: "",
  myRole: "representante da Results for America, que conduz a Certificação What Works Cities",
  explainLang: "en", depth: "thorough", rate: 1.0, hideText: true, autoplay: true,
  voiceMap: {}, voiceProvider: "auto", voiceMaps: {}, xp: 0, days: {}, lessons: {}, sessions: [], starters: {}, catHits: {}, scores: []
};
let P = JSON.parse(JSON.stringify(DEFAULT_PROFILE));

const Store = {
  mode: "local", db: null, uid: null, profileRef: null, cardsCol: null,
  cards: new Map(), status: "local", chain: Promise.resolve(), dirty: false, timer: null,
  loadLocal() {
    try {
      const raw = localStorage.getItem("papo.v1");
      if (raw) { const d = JSON.parse(raw); P = { ...JSON.parse(JSON.stringify(DEFAULT_PROFILE)), ...(d.profile || {}) }; this.cards = new Map((d.cards || []).map(c => [c.id, c])); }
    } catch (e) { /* storage unavailable */ }
  },
  persistLocal() {
    try { localStorage.setItem("papo.v1", JSON.stringify({ profile: P, cards: [...this.cards.values()] })); } catch (e) { /* ignore */ }
  },
  async init(onChange) {
    if (!window.claude || typeof window.claude.use !== "function") { this.status = "local"; return; }
    let db = null, user = null;
    try { [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]); } catch (e) { db = null; }
    if (!db || !user) { this.status = "local"; onChange(); return; }
    let id = null;
    try { id = await user.id(); } catch (e) { id = null; }
    if (!id) { this.status = "local"; onChange(); return; }
    this.db = db; this.uid = id; this.mode = "db"; this.status = "syncing";
    try {
      this.profileRef = db.doc("data/users/" + id + "/profile");
      this.cardsCol = this.profileRef.collection("cards");
    } catch (e) { this.mode = "local"; this.status = "local"; onChange(); return; }
    const timer = setTimeout(() => { if (this.status === "syncing") { this.status = "slow"; onChange(); } }, 10000);
    let gotProfile = false, gotCards = false;
    const settle = () => { if (gotProfile && gotCards) { clearTimeout(timer); this.status = "synced"; } };
    this.profileRef.onSnapshot(snap => {
      if (!snap.metadata.fromCache) gotProfile = true;
      if (snap.exists && !this.dirty) {
        P = { ...JSON.parse(JSON.stringify(DEFAULT_PROFILE)), ...JSON.parse(JSON.stringify(snap.data())) };
      } else if (!snap.exists && !snap.metadata.fromCache && (P.xp > 0 || P.setupDone)) {
        this.save(); // first sync: upload what this device already has
      }
      settle(); onChange("profile");
    }, err => { clearTimeout(timer); this.status = "error"; onChange(); });
    this.cardsCol.onSnapshot(snap => {
      if (!snap.metadata.fromCache) gotCards = true;
      this.cards = new Map(snap.docs.map(d => [d.id, JSON.parse(JSON.stringify(d.data()))]));
      settle(); onChange("cards");
    }, err => { clearTimeout(timer); this.status = "error"; onChange(); });
  },
  enqueue(fn) {
    this.chain = this.chain.then(fn).catch(e => {
      console.warn("db write failed", e);
      if (e && e.code === "quota_exceeded") toast("Armazenamento cheio: apague alguns cartões.");
    });
    return this.chain;
  },
  rev: 0,
  save() {
    this.dirty = true; this.rev++; this.persistLocal();
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const r = this.rev;
      if (this.mode !== "db") { this.dirty = false; return; }
      const body = JSON.parse(JSON.stringify(P));
      this.enqueue(() => this.profileRef.set(body)).then(() => { if (this.rev === r) this.dirty = false; });
    }, 1200);
  },
  putCard(card) {
    this.cards.set(card.id, card);
    if (this.mode === "db") { const body = JSON.parse(JSON.stringify(card)); return this.enqueue(() => this.cardsCol.doc(card.id).set(body)); }
    this.persistLocal(); return Promise.resolve();
  },
  deleteCard(id) {
    this.cards.delete(id);
    if (this.mode === "db") return this.enqueue(() => this.cardsCol.doc(id).delete());
    this.persistLocal(); return Promise.resolve();
  }
};

/* ================= XP, streak, stats ================= */
const GOAL = 60;
function addXP(n) {
  P.xp = (P.xp || 0) + n;
  const k = dayKey();
  P.days = P.days || {};
  P.days[k] = (P.days[k] || 0) + n;
  const keys = Object.keys(P.days).sort();
  while (keys.length > 120) delete P.days[keys.shift()];
  Store.save();
  updateHeader();
}
function streak() {
  const d = new Date(); d.setHours(12, 0, 0, 0);
  if (!((P.days || {})[dayKey(d)] > 0)) d.setTime(d.getTime() - DAY);
  let n = 0;
  while ((P.days || {})[dayKey(d)] > 0) { n++; d.setTime(d.getTime() - DAY); }
  return n;
}
function todayXP() { return (P.days || {})[dayKey()] || 0; }
function catHit(cat, n = 1) {
  if (!CATS[cat] || cat === "other") return;
  P.catHits = P.catHits || {};
  const h = P.catHits[cat] || { n: 0, last: 0 };
  P.catHits[cat] = { n: h.n + n, last: Date.now() };
  Store.save();
}
function weakSpots() {
  const now = Date.now();
  return Object.entries(P.catHits || {})
    .filter(([c, h]) => CATS[c] && CATS[c].lesson && h.n > 0)
    .map(([c, h]) => ({ cat: c, n: h.n, last: h.last, w: h.n * (1 + Math.max(0, 1 - (now - h.last) / (14 * DAY))) }))
    .sort((a, b) => b.w - a.w);
}
function dueCards(deck) {
  const now = Date.now();
  return [...Store.cards.values()].filter(c => (c.due || 0) <= now && (!deck || deck === "all" || c.deck === deck)).sort((a, b) => (a.due || 0) - (b.due || 0));
}

/* ================= spaced repetition ================= */
function schedule(card, r, dry = false) {
  let { interval = 0, ease = 2.5, reps = 0, lapses = 0 } = card;
  let due;
  const now = Date.now();
  if (r === 0) { lapses++; reps = 0; ease = Math.max(1.3, ease - 0.2); interval = 0; due = now + 10 * 60000; }
  else {
    if (reps === 0) interval = r === 1 ? 1 : r === 2 ? 1 : 4;
    else if (reps === 1) interval = r === 1 ? 2 : r === 2 ? 3 : 6;
    else interval = Math.max(interval + 1, Math.round(interval * (r === 1 ? 1.2 : r === 2 ? ease : ease * 1.3)));
    ease = clamp(ease + (r === 1 ? -0.15 : r === 3 ? 0.15 : 0), 1.3, 3.0);
    reps++; due = now + interval * DAY;
  }
  if (dry) return r === 0 ? "10 min" : interval === 1 ? "1 dia" : interval + " dias";
  return { ...card, interval, ease, reps, lapses, due, lastReview: now };
}

/* ================= voices (Web Speech) ================= */
const PERSONA_ORDER = { f: [], m: [] };
SCENARIOS.forEach(s => { const p = s.persona; if (!PERSONA_ORDER[p.gender].includes(p.id)) PERSONA_ORDER[p.gender].push(p.id); });
const Voice = {
  ok: typeof window !== "undefined" && "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined",
  list: [], token: 0, key: null,
  init(onChange) {
    if (!this.ok) return;
    const load = () => {
      let all = [];
      try { all = speechSynthesis.getVoices() || []; } catch (e) { all = []; }
      const br = all.filter(v => /^pt[-_]BR/i.test(v.lang));
      this.list = (br.length ? br : all.filter(v => /^pt/i.test(v.lang))).sort((a, b) => this.quality(b) - this.quality(a));
      this.european = !br.length && this.list.length > 0;
      onChange && onChange();
    };
    load();
    try { speechSynthesis.addEventListener("voiceschanged", load); } catch (e) { speechSynthesis.onvoiceschanged = load; }
  },
  quality(v) {
    const n = v.name.toLowerCase(); let q = 50;
    if (/premium|enhanced|aprimorad|melhorad|natural|neural|online|wavenet|studio|siri/.test(n)) q += 40;
    if (/google/.test(n)) q += 15;
    if (/luciana|felipe|francisca|antonio|antônio|thalita|brenda|donato|elza|fabio|giovanna|humberto|julio|leila|leticia|manuela|nicolau|valerio|yara|daniel|maria|heloisa|fernanda/.test(n)) q += 10;
    if (/eddy|flo\b|grandma|grandpa|reed|rocko|sandy|shelley|vovó|vovô|bad news|bahh|bells|boing|bubbles|cellos|wobble|good news|jester|organ|superstar|trinoids|whisper|zarvox|albert|fred|junior|kathy|ralph/.test(n)) q -= 45;
    if (v.localService === false) q += 5;
    return q;
  },
  gender(v) {
    const n = v.name.toLowerCase();
    if (/luciana|francisca|thalita|brenda|elza|giovanna|leila|let[ií]cia|manuela|yara|maria|heloisa|fernanda|\bflo\b|sandy|shelley|grandma|vovó|joana|catarina|raquel|camila|vit[oó]ria|female|feminin|google portugu/.test(n)) return "f";
    if (/felipe|ant[oô]nio|donato|f[aá]bio|humberto|j[uú]lio|nicolau|val[eé]rio|daniel|ricardo|eddy|reed|rocko|grandpa|vovô|cristiano|duarte|male|masculin/.test(n)) return "m";
    return null;
  },
  label(v) { return v.name.replace(/\s*\((Portuguese|português|Portugues).*?\)/i, "") + (/^pt[-_]PT/i.test(v.lang) ? " · Portugal" : ""); },
  pick(personaId, gender) {
    const map = P.voiceMap || {};
    if (map[personaId]) { const v = this.list.find(x => x.voiceURI === map[personaId]); if (v) return v; }
    if (!this.list.length) return null;
    const same = gender ? this.list.filter(v => this.gender(v) === gender) : this.list;
    const pool = same.length ? same : this.list;
    const best = this.quality(pool[0]);
    const top = pool.filter(v => this.quality(v) >= best - 25);
    const order = gender && PERSONA_ORDER[gender] ? Math.max(0, PERSONA_ORDER[gender].indexOf(personaId)) : 0;
    return top[order % top.length];
  },
  split(text) {
    const parts = String(text).match(/[^.!?…]+[.!?…]*["”']?\s*/g) || [String(text)];
    const out = [];
    for (const p of parts) { if (out.length && (out[out.length - 1].length < 40)) out[out.length - 1] += p; else out.push(p); }
    return out.map(s => s.trim()).filter(Boolean);
  },
  speak(text, opts = {}) {
    if (text && Cloud.provider() !== "device") return this.speakCloud(text, opts);
    return this.speakDevice(text, opts);
  },
  speakCloud(text, opts) {
    const token = ++this.token;
    this.key = opts.key || null;
    try { if (this.ok) speechSynthesis.cancel(); } catch (e) { /* ignore */ }
    Cloud.stop();
    markPlaying(this.key);
    const done = () => { if (token === this.token) { this.key = null; markPlaying(null); opts.onend && opts.onend(); } };
    Cloud.play(stripHtml(text), { persona: opts.persona || null, gender: opts.gender, rate: clamp((P.rate || 1) * (opts.rate || 1), 0.5, 1.6), onend: done }, () => token === this.token)
      .catch(e => {
        if (token !== this.token) return;
        console.warn("cloud voice failed", e);
        toast(cloudErr(e));
        this.key = null; markPlaying(null);
        this.speakDevice(text, opts);
      });
    return true;
  },
  speakDevice(text, opts = {}) {
    if (!this.ok || !text) { opts.onend && opts.onend(); return false; }
    const token = ++this.token;
    this.key = opts.key || null;
    const go = () => {
      if (token !== this.token) return;
      const v = this.pick(opts.personaId || "coach", opts.gender || null);
      const chunks = this.split(stripHtml(text));
      chunks.forEach((ch, i) => {
        const u = new SpeechSynthesisUtterance(ch);
        u.lang = v ? v.lang.replace("_", "-") : "pt-BR";
        if (v) u.voice = v;
        u.rate = clamp((P.rate || 1) * (opts.rate || 1), 0.5, 1.6);
        u.pitch = clamp(opts.pitch || 1, 0.6, 1.4);
        if (i === 0) u.onstart = () => { if (token === this.token) markPlaying(this.key); };
        if (i === chunks.length - 1) u.onend = u.onerror = () => { if (token === this.token) { this.key = null; markPlaying(null); opts.onend && opts.onend(); } };
        speechSynthesis.speak(u);
      });
    };
    let busy = false;
    try { busy = speechSynthesis.speaking || speechSynthesis.pending; } catch (e) { busy = false; }
    if (busy) { try { speechSynthesis.cancel(); } catch (e) {} setTimeout(go, 90); } else go();
    markPlaying(this.key);
    return true;
  },
  stop() { this.token++; this.key = null; try { speechSynthesis.cancel(); } catch (e) {} Cloud.stop(); markPlaying(null); }
};
function markPlaying(key) {
  $$("[data-play-key]").forEach(el => el.classList.toggle("playing", !!key && el.dataset.playKey === key));
}
function sayAs(text, persona, key, rateMul = 1) {
  if (!Voice.ok && Cloud.provider() === "device") { toast("Este navegador não tem voz em português."); return; }
  if (Voice.key === key) { Voice.stop(); return; }
  Voice.speak(text, { persona: persona || null, personaId: persona ? persona.id : "coach", gender: persona ? persona.gender : null, pitch: persona ? persona.pitch : 1, rate: (persona ? persona.rate : 1) * rateMul, key });
}

/* ================= AI (Claude via the sample capability) ================= */
const AI = {
  fn: null, status: "pending", ready: null, kind: null,
  init(onChange) {
    this.ready = (async () => {
      if (IN_CLAUDE) {
        this.kind = "claude";
        try { this.fn = await window.claude.use("sample"); } catch (e) { this.fn = null; }
        this.status = this.fn ? "ready" : "off";
        return;
      }
      this.kind = "api";
      this.refresh();
    })().then(() => onChange && onChange());
    return this.ready;
  },
  refresh() { if (this.kind === "api") this.status = !window.Anthropic ? "off" : Keys.has("anthropic") ? "ready" : "nokey"; },
  get ok() { return this.status === "ready"; },
  async text(prompt, opts = {}) {
    await this.ready;
    if (this.kind === "api") { try { return await ClaudeAPI.call(prompt, opts); } catch (e) { this.note(e); throw e; } }
    if (!this.fn) throw { code: "unavailable" };
    try { return await this.fn(prompt, opts); } catch (e) { this.note(e); throw e; }
  },
  async json(prompt, opts = {}) {
    await this.ready;
    if (this.kind === "api") { try { const r = await ClaudeAPI.call(prompt, opts); return parseLooseJSON(r.text); } catch (e) { this.note(e); throw e; } }
    if (!this.fn) throw { code: "unavailable" };
    try { return await this.fn.json(prompt, opts); } catch (e) { this.note(e); throw e; }
  },
  note(e) {
    const c = e && e.code;
    if (["not_granted", "sampling_disabled", "not_declared", "capability_disabled", "capability_removed"].includes(c)) { this.status = "denied"; updateHeader(); }
    if (c === "bad_key") { this.status = "badkey"; updateHeader(); }
    if (c === "nokey") { this.status = "nokey"; updateHeader(); }
  }
};
function errMsg(e) {
  const c = e && e.code;
  return ({
    unavailable: "The AI tutor works when this page is opened inside Claude (claude.ai or the Claude app).",
    not_granted: "Claude access wasn't allowed for this page. Open the page's Permissions menu to allow it, then reload.",
    sampling_disabled: "Claude isn't available for this account right now.",
    rate_limited: "You've hit a usage limit. Wait a little, then tap Try again.",
    session_expired: "Your Claude session expired. Sign in again, then try again.",
    invalid_json: "The tutor's answer came back garbled. Tap Try again.",
    refused: "The tutor couldn't answer that. Try rephrasing.",
    empty_completion: "The tutor didn't answer. Try rephrasing.",
    prompt_too_large: "This conversation got too long. End it and start a new one.",
    nokey: "Connect Claude first: add your Anthropic API key in Conexões.",
    bad_key: "Anthropic rejected your API key. Check it in Conexões.",
    offline: "You're offline. Connect to the internet and tap Try again.",
    bad_request: "Anthropic API: " + String((e && e.message) || "the request was rejected.").replace(/^\d{3}\s*/, "").slice(0, 200)
  })[c] || "Connection hiccup. Tap Try again.";
}
const isFatal = e => ["not_granted", "sampling_disabled", "not_declared", "capability_disabled", "capability_removed", "unavailable", "nokey", "bad_key"].includes(e && e.code);

/* ================= prompts ================= */
function addressLine() {
  return P.address === "senhor" ? 'Address the visitor formally as "o senhor".'
    : P.address === "senhora" ? 'Address the visitor formally as "a senhora".'
    : P.address === "voce" ? 'Address the visitor as "você".'
    : "Avoid gendered forms when addressing the visitor (no o senhor/a senhora, no bem-vindo/bem-vinda); use neutral phrasing or \"você\".";
}
function speakerGenderLine() {
  return P.address === "senhor" ? "The student is a man (obrigado, cansado, etc.)."
    : P.address === "senhora" ? "The student is a woman (obrigada, cansada, etc.)."
    : "Accept either masculine or feminine self-reference (obrigado/obrigada).";
}
function targetsText(s) { return (s.targets || []).map(t => LESSON[t] ? LESSON[t].title + " (" + LESSON[t].en + ")" : t).join("; "); }
function transcript(c, upto) {
  const p = c.scenario.persona;
  return c.turns.slice(0, upto).filter(t => t.text && (t.who === "me" || t.state === "done"))
    .slice(-18).map(t => (t.who === "me" ? "Visitante" : p.name) + ": " + t.text).join("\n");
}
function personaPrompt(c, upto) {
  const s = c.scenario, p = s.persona;
  return `You are role-playing ${p.name}, ${p.role}, in a realistic conversation held entirely in Brazilian Portuguese.
Character: ${p.tone}.
Situation: ${s.setup}
The visitor is ${P.myName ? P.myName + ", " : ""}${P.myRole}. ${addressLine()}

${WWC_BRIEF}

Rules:
- Speak only natural, spoken Brazilian Portuguese, exactly the way a real ${p.role} talks in a meeting. No English, no translations, no stage directions, no emojis, no speaker label, no quotation marks.
- 1 to 3 sentences, at most about 45 words. End most turns with a question or a challenge the visitor must answer.
- React to what the visitor actually said. If their answer is vague, push back realistically. Stay in character.
- Somewhere in your turns, naturally use these structures so the visitor hears them modeled: ${targetsText(s)}.
- Never correct the visitor's Portuguese. Never mention being an AI or an exercise. If the visitor slips into Spanish or English, react as a Brazilian would and continue in Portuguese.
- If the conversation reaches a natural end, close politely with a concrete next step.

Conversation so far:
${transcript(c, upto)}

Write only ${p.name}'s next line.`;
}
function coachPrompt(c, i) {
  const s = c.scenario, p = s.persona, me = c.turns[i];
  let prev = "";
  for (let j = i - 1; j >= 0; j--) if (c.turns[j].who === "npc" && c.turns[j].text) { prev = c.turns[j].text; break; }
  const lang = P.explainLang === "pt" ? "Brazilian Portuguese" : "English";
  return `You are an expert, encouraging coach of Brazilian Portuguese. Your student is fluent but rusty: a native English speaker who also speaks Spanish and often mixes Spanish words, structures and pronunciation into Portuguese ("portunhol"). They are rehearsing a professional conversation with Brazilian government officials about the What Works Cities Certification (Results for America).

Scenario: ${s.en} with ${p.name} (${p.role}). Grammar focus: ${targetsText(s)}.
${speakerGenderLine()} With officials the student should normally use "o senhor / a senhora" unless invited to use "você".
The official just said: "${prev}"
The student answered (captured by iPhone dictation in pt-BR, so ignore punctuation, capitalization and obvious recognizer glitches): "${me.text}"

Judge the answer against educated, spoken Brazilian Portuguese in a professional register. Flag only real errors or clearly unnatural choices; accept normal Brazilian spoken variants ("a gente", "me permita", "tem" for "há", "vou fazer"). Treat any Spanish word, spelling or structure in the transcript as real interference and flag each one. If the transcript shows forms a pt-BR recognizer would produce from Spanish-accented speech (for example "no" where "não" was meant, "con", "muy"), say so in "spanish". If the student used English, give the Portuguese.

Error categories (use exactly one id per error):
${Object.entries(CATS).map(([id, v]) => "- " + id + ": " + v.en).join("\n")}

Reply with only a JSON object:
{"score": integer 0-100 (95+ flawless and natural; 80-94 small slips; 60-79 several errors; under 60 hard to follow),
 "corrected": "the student's answer with the minimum edits needed to be correct, keeping their wording",
 "natural": "how a polished Brazilian professional would say the same thing, under 45 words",
 "praise": "one short, specific compliment in ${lang}",
 "errors": [{"cat": "category id", "wrong": "exact words from the student's answer", "right": "replacement", "why": "1-2 sentences in ${lang}: the rule as it applies here", "es": true or false (caused by Spanish), "card": {"front": "a prompt that tests this point without revealing the answer", "back": "the answer plus a very short note"}}],
 "spanish": "if Spanish showed up, one short sentence in ${lang} naming the pattern; otherwise an empty string"}
Card examples: {"front":"ES presupuesto → PT ?","back":"o orçamento"} · {"front":"Quando nós ___ os dados… (ter)","back":"tivermos — futuro do subjuntivo após quando"} · {"front":"Vamos ___ publicar os dados? (a / nada)","back":"Vamos publicar — sem 'a' depois de ir"}
List at most 5 errors, most important first. If the answer is correct and natural, "errors" is [].`;
}
function gradePrompt(item, ans) {
  const task = item.t === "fix" ? "Rewrite this sentence in correct, natural Brazilian Portuguese" : "Say this in Brazilian Portuguese";
  return `Grade one exercise for a fluent-but-rusty learner of Brazilian Portuguese (English native, frequent Spanish interference). Accept any answer that is correct, natural Brazilian Portuguese and does the task, even if it differs from the model answers. Ignore punctuation, capitalization and missing accent marks.
Task: ${task}: "${stripHtml(item.q)}"
Model answers: ${item.a.join(" | ")}
Learning point: ${stripHtml(item.x)}
Learner's answer: "${ans}"
Reply with only JSON: {"ok": true or false, "feedback": "1-2 sentences in English on what was right or wrong", "fixed": "the learner's answer corrected (same text if ok)"}`;
}
function genPrompt(lesson) {
  return `Create 8 new practice items for a fluent-but-rusty speaker of Brazilian Portuguese (English native, frequent Spanish interference) on this topic: ${lesson.title} (${lesson.en}).
Key rules: ${lesson.core.map(stripHtml).join(" ")}
Set every sentence in conversations with Brazilian municipal officials about the What Works Cities Certification (data management, open data, performance management, evaluations, results-driven contracting, budgeting, resident engagement).
Mix of types:
- 3 items {"t":"fill","q":"sentence with ___ and the base verb or hint in parentheses","a":["accepted answer", "..."],"x":"explanation"}
- 2 items {"t":"mc","q":"question","o":["option","option","option"],"a":index of the correct option,"x":"explanation"}
- 2 items {"t":"fix","q":"a sentence with one or two typical errors (at least one Spanish-interference error)","a":["corrected sentence", "..."],"x":"explanation"}
- 1 item {"t":"say","q":"an English sentence to say in Portuguese","a":["natural Brazilian translation", "..."],"x":"explanation"}
Explanations are 1-2 sentences in English. Every answer must be correct, natural Brazilian Portuguese. Reply with only a JSON array of the 8 items.`;
}
function hintPrompt(c) {
  const s = c.scenario, p = s.persona;
  let last = "";
  for (let j = c.turns.length - 1; j >= 0; j--) if (c.turns[j].who === "npc" && c.turns[j].text) { last = c.turns[j].text; break; }
  return `A learner is in a Brazilian Portuguese role-play about the What Works Cities Certification and must reply to ${p.name} (${p.role}), who just said: "${last}".
${addressLine().replace("the visitor", "the official").replace("Address", "The learner should address")}
Give two sample replies in natural, professional Brazilian Portuguese (under 40 words each): one simple and one more advanced that uses ${targetsText(s)}. Then three short useful phrases.
Reply with only JSON: {"answers":[{"pt":"...","en":"..."},{"pt":"...","en":"..."}],"phrases":[{"pt":"...","en":"..."}]}`;
}
function freePrompt(who, what, gender) {
  return `Design a role-play for practicing professional Brazilian Portuguese. The learner represents Results for America and the What Works Cities Certification in Brazil.
They will talk to: ${who || "a Brazilian municipal official"}
Situation: ${what || "a first meeting about the certification"}
The character is ${gender === "m" ? "a man" : "a woman"}.
${WWC_BRIEF}
Reply with only JSON: {"name":"realistic Brazilian name with title if fitting (fictional person)","role":"role in Portuguese","tone":"personality and concerns in English, 1 sentence","setup":"situation in English, 1-2 sentences","opening":"the character's first line in natural Brazilian Portuguese, ending with a question, under 40 words, without gendered address to the learner","targets":["2 or 3 ids from: ${LESSONS.map(l => l.id).join(", ")}"],"vocab":[["Portuguese term","English"], 4 more pairs]}`;
}

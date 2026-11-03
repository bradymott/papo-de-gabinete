/* ================= state ================= */
const S = { tab: "conversar", stack: [], rec: null, keyStatus: {}, convo: null, drill: null, review: null, deck: "all", q: "", openCard: null, confirmDel: null, confirmReset: false, barSel: null, gen: {}, free: { who: "", what: "", gender: "f", busy: false }, custom: null };
const TABS = [["conversar", "Conversar", I.chat], ["aulas", "Aulas", I.book], ["cartoes", "Cartões", I.cards], ["progresso", "Progresso", I.chart]];
I.stop = '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2.5"/></svg>';
I.share = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3M8 7l4-4 4 4M5 11v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"/></svg>';
I.key = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/></svg>';
const KIND = { mc: "Escolha", fill: "Complete", fix: "Corrija", say: "Diga em português", shadow: "Ouça e repita" };
const cap1 = s => s.charAt(0).toUpperCase() + s.slice(1);
const safeRich = s => esc(s).replace(/&lt;(\/?)(b|i|s|em|strong)&gt;/g, "<$1$2>");
const firstLine = s => String(s || "").split("\n")[0];
function speakable(back) { return String(back || "").split(/\s+—\s+|\s+-\s+|\n/)[0].replace(/\(.*?\)/g, "").trim(); }
function playBtn(text, key, label = "Ouvir", persona) {
  return `<button class="tool" data-act="say" data-say="${esc(text)}" data-play-key="${key}"${persona ? ` data-persona="${esc(persona)}"` : ""}>${I.play}${label ? " " + label : ""}</button>`;
}
function scenarioById(id) { return SCEN[id] || (S.custom && S.custom.id === id ? S.custom : null); }

/* ================= shell ================= */
function shell() {
  document.getElementById("app").innerHTML = `<div class="statusbar"></div>
<main id="view"></main>
<nav class="tabs" aria-label="Seções"><div class="row" id="tabrow"></div></nav>
<div id="screen-root"></div>
<div id="toast" role="status" aria-live="polite"></div>`;
}
function chipsHTML() {
  return `<span class="chip-stat streak" title="Dias seguidos">${I.flame}${streak()}</span><span class="chip-stat" title="Cartões para revisar">${I.cards}${dueCards().length}</span>`;
}
function bandHTML(title, sub, inner = "") {
  return `<header class="band">${tiles(seedOf(title), 6, 6, 0, "tiles-deco")}<div class="wrap">
    <div class="band-row"><h1 class="large-title">${esc(title)}</h1><div class="band-chips">${chipsHTML()}</div></div>
    ${sub ? `<p class="band-sub">${sub}</p>` : ""}${inner}</div></header>`;
}
function updateHeader() {
  $$(".band-chips").forEach(el => { el.innerHTML = chipsHTML(); });
  const due = dueCards().length, row = $("#tabrow");
  if (row) row.innerHTML = TABS.map(([id, label, icon]) => `<button class="tab" data-act="tab" data-id="${id}" ${S.tab === id ? 'aria-current="page"' : ""}>${icon}<span>${label}</span>${id === "cartoes" && due ? `<span class="badge">${due > 99 ? "99+" : due}</span>` : ""}</button>`).join("");
}
function render() { updateHeader(); renderTab(); }
function renderTab() {
  const v = $("#view"); if (!v) return;
  v.innerHTML = S.tab === "aulas" ? viewLessons() : S.tab === "cartoes" ? viewCards() : S.tab === "progresso" ? viewProgress() : viewHome();
}
function softRender() {
  updateHeader();
  const a = document.activeElement;
  if (S.stack.length) return;
  if (a && $("#view") && $("#view").contains(a) && /INPUT|TEXTAREA|SELECT/.test(a.tagName)) return;
  renderTab();
}

/* ================= home ================= */
function ring(pct, size = 46) {
  const r = 18, c = 2 * Math.PI * r;
  return `<svg viewBox="0 0 46 46" width="${size}" height="${size}" aria-hidden="true"><circle cx="23" cy="23" r="${r}" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-width="6"/><circle cx="23" cy="23" r="${r}" fill="none" stroke="var(--ipe)" stroke-width="6" stroke-linecap="round" stroke-dasharray="${(c * pct).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 23 23)"/></svg>`;
}
function suggestScenario() {
  const ws = weakSpots();
  const done = new Set((P.sessions || []).map(s => s.id));
  if (ws.length) { const m = SCENARIOS.find(s => s.targets.includes(ws[0].cat) && !(P.sessions[0] && P.sessions[0].id === s.id)); if (m) return m; }
  return SCENARIOS.find(s => !done.has(s.id)) || SCENARIOS[(new Date().getDate()) % SCENARIOS.length];
}
function aiBanner() {
  let out = "";
  if (STANDALONE_APP && !IS_INSTALLED && IS_IOS) out += `<div class="banner info">${I.share}<div><b>Install the app.</b> In Safari, tap Share, then <b>Add to Home Screen</b>. It opens full-screen, with its own icon.</div></div>`;
  if (AI.kind === "api" && (AI.status === "nokey" || AI.status === "badkey")) out += `<div class="banner info">${I.spark}<div>${AI.status === "badkey" ? "Anthropic rejected your API key." : "Connect Claude to turn on conversations and corrections. Lessons, drills and flashcards already work."}<div style="margin-top:8px"><button class="btn btn-sm btn-primary" data-act="connect">${AI.status === "badkey" ? "Fix the key" : "Connect Claude"}</button></div></div></div>`;
  if (AI.status === "off" && !IN_CLAUDE && !STANDALONE_APP) out += `<div class="banner">${I.warn}<div>The AI tutor runs when this page is opened inside Claude or installed as the app. Lessons, built-in drills and flashcards work anywhere.</div></div>`;
  if (AI.status === "denied") out += `<div class="banner">${I.warn}<div>Claude access is turned off for this page, so conversations can't be corrected. <button class="btn btn-sm btn-ghost" style="margin-top:8px" data-act="perm">Abrir permissões</button></div></div>`;
  return out ? `<section class="section" style="gap:10px">${out}</section>` : "";
}
function setupCard() {
  if (P.setupDone) return "";
  const a = P.address;
  const addr = `<li><div><b>How should officials address you?</b>
      <div class="seg" role="group">${[["senhor", "o senhor"], ["senhora", "a senhora"], ["voce", "você"]].map(([k, l]) => `<button data-act="set-address" data-id="${k}" aria-pressed="${a === k}">${l}</button>`).join("")}</div>
      <p class="note">The coach also uses this to check obrigado / obrigada.</p></div></li>`;
  const steps = IN_CLAUDE ? addr + `
    <li><div><b>Answer by voice with iPhone dictation</b>
      <p class="note">You'll speak into the microphone on the Portuguese keyboard. The page then corrects what you said.</p>
      <details class="howto"><summary>How to set it up</summary><ol>
        <li>Settings → General → Keyboard → Keyboards → Add New Keyboard → <b>Português (Brasil)</b>.</li>
        <li>On the Keyboard screen, turn on <b>Enable Dictation</b>.</li>
        <li>In a conversation, tap the answer box, switch to the Portuguese keyboard with the globe key, then tap the microphone and speak.</li>
      </ol></details></div></li>
    <li><div><b>Get the most natural Brazilian voices</b>
      <p class="note">Settings → Accessibility → Spoken Content → Voices → Portuguese (Brazil). Download the <b>Enhanced</b> or <b>Premium</b> versions (for example Luciana and Felipe), then reopen this page.</p>
      <button class="btn btn-sm btn-soft" data-act="test-voice" data-id="helena" data-play-key="test-helena">${I.play} Ouvir uma voz</button></div></li>`
    : addr + `
    <li><div><b>Connect Claude</b><span class="note">Required for conversations. The tutor runs on your own Anthropic API key, about 3–5 US cents per answer.</span>
      ${Keys.has("anthropic") ? `<span class="status-line ok">${I.check} Claude connected</span>` : `<button class="btn btn-sm btn-primary" data-act="connect">${I.key} Connect Claude</button>`}</div></li>
    <li><div><b>Microphone and realistic voices</b><span class="note">Optional. An OpenAI key turns on the in-app microphone and natural Brazilian voices. An ElevenLabs key gives the most realistic voices.</span>
      ${Keys.has("openai") || Keys.has("elevenlabs") ? `<span class="status-line ok">${I.check} ${[Keys.has("openai") && "OpenAI", Keys.has("elevenlabs") && "ElevenLabs"].filter(Boolean).join(" + ")} connected</span>` : `<button class="btn btn-sm btn-soft" data-act="connect">Add voice keys</button>`}</div></li>`;
  return `<section class="section"><div class="card setup">
  <div><p class="mono muted">Antes de começar</p><h2 style="font-size:21px">Quick setup</h2></div>
  <ol>${steps}</ol>
  <button class="btn btn-primary" data-act="setup-done">Pronto, vamos lá</button>
</div></section>`;
}
function scnRow(s) {
  const n = (P.sessions || []).filter(x => x.id === s.id).length;
  return `<button class="scn" data-act="brief" data-id="${s.id}">
    ${avatar(s.persona)}
    <div class="scn-body"><span class="scn-title">${esc(s.title)}</span>
      <span class="scn-sub">${esc(s.persona.name)} · ${esc(s.persona.role)}</span>
      <div class="chips">${s.targets.map(t => `<span class="pill">${esc(LESSON[t].title)}</span>`).join("")}${n ? `<span class="pill pill-good">${I.check.replace("<svg ", '<svg width="12" height="12" ')} ${n}×</span>` : ""}</div></div>
    <div class="lvl" aria-label="nível ${s.level} de 3">${[1, 2, 3].map(k => `<i class="${k <= s.level ? "on" : ""}"></i>`).join("")}</div>
  </button>`;
}
function viewHome() {
  const h = new Date().getHours();
  const greet = h < 12 ? "Bom dia" : h < 18 ? "Boa tarde" : "Boa noite";
  const date = cap1(new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" }));
  const xp = todayXP(), sug = suggestScenario();
  const inner = `<div class="home-hero"><p class="band-sub">${esc(date)}. Vamos conversar?</p>
    <div class="hero-row"><div class="goal">${ring(Math.min(1, xp / GOAL))}<div><b>${xp}/${GOAL} XP</b><span>meta de hoje</span></div></div>
    <button class="btn btn-sm btn-light" data-act="brief" data-id="${sug.id}">${esc(sug.title)} ${I.arrow}</button></div></div>`;
  return bandHTML(greet + (P.myName ? ", " + P.myName : ""), "", inner) + `<div class="sheet"><div class="wrap">
  ${aiBanner()}
  ${setupCard()}
  <section class="section"><div class="section-head"><h2>Reuniões</h2><span class="note">${SCENARIOS.length} cenários · nível 1–3</span></div>
    <div class="list">${SCENARIOS.map(scnRow).join("")}
      <button class="scn" data-act="free"><div class="avatar" style="background:var(--ipe-soft);color:var(--ipe)">${tiles(5, 2, 2, 4)}<span><em>+</em></span></div>
        <div class="scn-body"><span class="scn-title">Tema livre</span><span class="scn-sub">Describe any meeting and practice it.</span></div><div></div></button>
    </div></section>
</div></div>`;
}

/* ================= lessons tab ================= */
function lessonRow(l) {
  const st = (P.lessons || {})[l.id], hits = ((P.catHits || {})[l.id] || {}).n || 0;
  const acc = st && st.n ? Math.round(100 * st.ok / st.n) : null;
  return `<button class="lesson-row" data-act="lesson" data-id="${l.id}">
    <div style="min-width:0"><b>${esc(l.title)}</b><small>${esc(l.en)} · ${l.mins} min · ${l.drills.length} exercícios</small></div>
    <div class="lesson-meta">${hits ? `<span class="pill pill-bad">${hits} ${hits === 1 ? "erro" : "erros"}</span>` : ""}${acc !== null ? `<span class="pill ${acc >= 80 ? "pill-good" : "pill-warn"}">${acc}%</span>` : ""}</div>
  </button>`;
}
function viewLessons() {
  const ws = weakSpots().slice(0, 4);
  const plan = ws.length ? `<div class="card" style="display:grid;gap:14px">
      ${ws.map((w, i) => { const l = LESSON[CATS[w.cat].lesson]; return `<div class="plan-item"><div class="plan-rank">${i + 1}</div>
        <div style="min-width:0"><b style="font-family:var(--f-display)">${esc(l.title)}</b><div class="note">${w.n} ${w.n === 1 ? "tropeço" : "tropeços"} · último ${relAgo(w.last)}</div></div>
        <button class="btn btn-sm btn-primary" data-act="lesson" data-id="${l.id}">Estudar</button></div>`; }).join("")}
    </div>`
    : `<div class="card empty">${tiles(9, 4, 2, 2, "tiles").replace('class="tiles"', 'class="tiles" style="color:var(--azul)"')}
        <p><b style="color:var(--ink)">Your plan builds itself from your mistakes.</b><br>Have a conversation or do a drill. Whatever you get wrong moves to the top here.</p>
        <div class="chips" style="justify-content:center">${["subj-future", "portunhol", "vocabulary"].map(id => `<button class="pill pill-azul" data-act="lesson" data-id="${id}">${esc(LESSON[id].title)}</button>`).join("")}</div></div>`;
  return bandHTML("Aulas", "Grammar, Spanish traps and WWC vocabulary. Your plan builds itself from your mistakes.") + `<div class="sheet"><div class="wrap">
    <section class="section"><div class="section-head"><h2>Seu plano de estudo</h2><span class="note">from your errors</span></div>${plan}</section>
    ${GROUPS.map(g => `<section class="section"><div class="section-head"><h2>${esc(g.title)}</h2><span class="note">${esc(g.en)}</span></div>
      <div class="list">${LESSONS.filter(l => l.group === g.id).map(lessonRow).join("")}</div></section>`).join("")}
  </div></div>`;
}
function relAgo(ts) {
  if (!ts) return "";
  const d = Math.floor((Date.now() - ts) / DAY);
  return d <= 0 ? "hoje" : d === 1 ? "ontem" : "há " + d + " dias";
}

/* ================= cards tab ================= */
function cardList() {
  const q = deaccent(S.q.toLowerCase());
  const all = [...Store.cards.values()]
    .filter(c => S.deck === "all" || c.deck === S.deck)
    .filter(c => !q || deaccent((c.front + " " + c.back + " " + (c.note || "")).toLowerCase()).includes(q))
    .sort((a, b) => (a.due || 0) - (b.due || 0)).slice(0, 250);
  if (!Store.cards.size) return `<div class="card empty">${tiles(4, 4, 2, 3, "tiles").replace('class="tiles"', 'class="tiles" style="color:var(--azul)"')}<p><b style="color:var(--ink)">No cards yet.</b><br>Every mistake in a conversation or drill becomes a card here automatically. You can also add a starter collection below.</p></div>`;
  if (!all.length) return `<p class="note" style="text-align:center;padding:12px">Nenhum cartão encontrado.</p>`;
  return all.map(c => {
    const open = S.openCard === c.id;
    return `<div class="cardrow"><button data-act="card-open" data-id="${esc(c.id)}" aria-expanded="${open}">
      <div style="min-width:0"><div class="front">${esc(firstLine(c.front))}</div>
      <div class="meta"><span class="pill pill-azul">${DECKS[c.deck] ? DECKS[c.deck].label : "Cartão"}</span>${c.es ? '<span class="pill pill-warn">ES</span>' : ""}${(c.misses || 0) > 1 ? `<span class="pill pill-bad">${c.misses}× errado</span>` : ""}<span class="note">${(c.due || 0) <= Date.now() ? "revisar agora" : relDays(c.due)}</span></div></div>
    </button>
    ${open ? `<div class="open">
      ${c.front.includes("\n") ? `<div style="white-space:pre-line">${esc(c.front)}</div>` : ""}
      <div class="back">${esc(c.back)}</div>
      ${c.note ? `<div class="muted">${esc(c.note)}</div>` : ""}
      ${c.source ? `<div class="note">Você disse: “${esc(c.source)}”</div>` : ""}
      <div class="err-actions">${playBtn(speakable(c.back), "card-" + c.id)}
        ${c.lesson && LESSON[c.lesson] ? `<button class="btn btn-sm btn-soft" data-act="lesson" data-id="${c.lesson}">Aula</button>` : ""}
        ${S.confirmDel === c.id ? `<button class="btn btn-sm" style="background:var(--bad);color:#fff" data-act="card-del-yes" data-id="${esc(c.id)}">Apagar mesmo</button><button class="btn btn-sm btn-ghost" data-act="card-del-no">Cancelar</button>`
          : `<button class="btn btn-sm btn-ghost" data-act="card-del" data-id="${esc(c.id)}">${I.trash.replace("<svg ", '<svg width="16" height="16" ')} Apagar</button>`}
      </div></div>` : ""}
    </div>`;
  }).join("");
}
function viewCards() {
  const all = [...Store.cards.values()], due = dueCards();
  const per = k => ({ total: all.filter(c => c.deck === k).length, due: due.filter(c => c.deck === k).length });
  return bandHTML("Cartões", due.length ? `${due.length} para revisar agora` : "Tudo em dia. Every mistake you make becomes a card here.") + `<div class="sheet"><div class="wrap">
  <section class="section"><div class="card due-card">
    <div><p class="mono muted">Para revisar agora</p><div class="num">${due.length}</div><p class="note">${all.length} cartões no total</p></div>
    <button class="btn btn-primary" data-act="review" ${due.length ? "" : "disabled"}>Revisar ${S.deck !== "all" && DECKS[S.deck] ? DECKS[S.deck].label.toLowerCase() : ""}</button>
  </div>
  <div class="deck-row">${Object.entries(DECKS).map(([k, d]) => { const c = per(k); return `<button class="deck-btn" data-act="deck" data-id="${k}" aria-pressed="${S.deck === k}"><b>${c.due}<span style="font-size:13px;color:var(--muted);font-family:var(--f-body)"> / ${c.total}</span></b><span>${d.label}</span></button>`; }).join("")}</div>
  </section>
  <section class="section"><div class="section-head"><h2>Seus cartões</h2>${S.deck !== "all" ? `<button class="pill" data-act="deck" data-id="${S.deck}">${DECKS[S.deck].label} ✕</button>` : ""}</div>
    <input class="search" id="card-search" type="search" placeholder="Buscar cartões…" value="${esc(S.q)}" autocomplete="off">
    <div class="list" id="card-list">${cardList()}</div>
  </section>
  <section class="section"><div class="section-head"><h2>Coleções iniciais</h2><span class="note">10 new cards a day</span></div>
    <div class="list">${STARTERS.map(st => `<div class="card starter"><div style="min-width:0"><b>${esc(st.title)}</b><small>${esc(st.en)} · ${st.cards.length} cartões</small></div>
      ${P.starters && P.starters[st.id] ? `<span class="pill pill-good">${I.check.replace("<svg ", '<svg width="12" height="12" ')} Adicionada</span>` : `<button class="btn btn-sm btn-soft" data-act="starter-add" data-id="${st.id}">${I.plus.replace("<svg ", '<svg width="16" height="16" ')} Adicionar</button>`}</div>`).join("")}</div>
  </section>
</div></div>`;
}

/* ================= progress tab ================= */
function viewProgress() {
  const st = streak(), xp = todayXP(), due = dueCards().length;
  const sc = (P.scores || []).slice(-20);
  const avg = sc.length ? Math.round(sc.reduce((a, b) => a + b, 0) / sc.length) : null;
  const days = [];
  const base = new Date(); base.setHours(12, 0, 0, 0);
  for (let i = 13; i >= 0; i--) { const d = new Date(base.getTime() - i * DAY); days.push({ d, v: (P.days || {})[dayKey(d)] || 0 }); }
  const max = Math.max(GOAL, ...days.map(x => x.v));
  const maxIdx = days.reduce((m, x, i) => x.v > days[m].v ? i : m, 0);
  const initials = ["D", "S", "T", "Q", "Q", "S", "S"];
  const ws = weakSpots().slice(0, 8);
  const wmax = Math.max(1, ...ws.map(w => w.n));
  const syncTxt = { synced: "Saved to your Claude account and synced across devices.", syncing: "Connecting to your saved data…", slow: "Can't reach your saved data yet. New progress is kept and will sync.", error: "Sync stopped. Reload the page to reconnect.", local: STANDALONE_APP ? "Saved on this iPhone. API keys stay on this device." : "Saved on this device only (open inside Claude to sync)." }[Store.status] || "";
  const pv = Voice.list;
  const personas = [{ id: "coach", name: "Narrador (aulas e cartões)", gender: null }, ...SCENARIOS.map(s => s.persona)];
  return bandHTML("Progresso", st ? `${st} ${st === 1 ? "dia seguido" : "dias seguidos"} · ${P.xp || 0} XP no total` : "Practice today to start a streak.") + `<div class="sheet"><div class="wrap">
  <section class="section"><div class="tiles4">
    <div class="stat"><span class="mono">Sequência</span><b>${st}</b><small>${st === 1 ? "dia" : "dias"} seguidos</small></div>
    <div class="stat"><span class="mono">Hoje</span><b>${xp}</b><small>de ${GOAL} XP</small></div>
    <div class="stat"><span class="mono">Revisar</span><b>${due}</b><small>cartões</small></div>
    <div class="stat"><span class="mono">Nota média</span><b>${avg ?? "—"}</b><small>últimas ${sc.length || 0} respostas</small></div>
  </div></section>
  <section class="section"><div class="section-head"><h2>Últimos 14 dias</h2><span class="note">XP por dia · ${P.xp || 0} no total</span></div>
    <div class="card"><div class="bars" role="img" aria-label="XP por dia nos últimos 14 dias">
      ${days.map((x, i) => { const hgt = Math.round((x.v / max) * 100); const show = i === 13 || (i === maxIdx && x.v > 0) || S.barSel === i;
        return `<button class="bar ${x.v ? "" : "zero"} ${i === 13 ? "today" : ""}" data-act="bar" data-i="${i}" aria-label="${x.d.toLocaleDateString("pt-BR")}: ${x.v} XP" title="${x.d.toLocaleDateString("pt-BR")}: ${x.v} XP">
          ${show ? `<span class="val" style="bottom:calc(${Math.max(hgt, 2)}% + 3px)">${x.v}</span>` : ""}<i style="height:${Math.max(hgt, 2)}%"></i></button>`; }).join("")}
    </div><div class="bars-base"></div>
    <div class="bars-axis">${days.map(x => `<span>${initials[x.d.getDay()]}</span>`).join("")}</div></div>
  </section>
  <section class="section"><div class="section-head"><h2>Pontos fracos</h2><span class="note">mistakes by topic</span></div>
    <div class="card">${ws.length ? ws.map(w => `<button class="weak" data-act="lesson" data-id="${CATS[w.cat].lesson}"><span class="name">${esc(CATS[w.cat].label)}</span><span class="track"><i style="width:${Math.round(100 * w.n / wmax)}%"></i></span><span class="n">${w.n}</span></button>`).join("")
      : `<p class="note">Nothing yet. Topics you get wrong will be ranked here.</p>`}</div>
  </section>
  <section class="section"><div class="section-head"><h2>Conversas recentes</h2></div>
    <div class="card">${(P.sessions || []).length ? P.sessions.slice(0, 8).map(s => `<div class="session-row"><div><b>${esc(s.title)}</b><div class="note">${new Date(s.at).toLocaleDateString("pt-BR", { day: "numeric", month: "short" })} · ${s.turns} respostas</div></div><span class="score ${s.avg >= 90 ? "good" : s.avg >= 75 ? "mid" : "low"}">${s.avg ?? "—"}</span></div>`).join("")
      : `<p class="note">Your finished conversations appear here.</p>`}</div>
  </section>
  <section class="section"><div class="section-head"><h2>Ajustes</h2></div>
    <div class="card" style="padding-block:4px">
      ${connectionsSetting()}
      <div class="setting"><span class="s-label">Officials address you as</span>
        <div class="seg">${[["senhor", "o senhor"], ["senhora", "a senhora"], ["voce", "você"]].map(([k, l]) => `<button data-act="set-address" data-id="${k}" aria-pressed="${P.address === k}">${l}</button>`).join("")}</div></div>
      <div class="setting"><label for="set-name">Your name (optional)</label><input id="set-name" type="text" data-set="myName" value="${esc(P.myName)}" placeholder="Officials will use it in conversation" autocomplete="off"></div>
      <div class="setting"><label for="set-role">Your role in the role-plays</label><input id="set-role" type="text" data-set="myRole" value="${esc(P.myRole)}" autocomplete="off"><span class="s-help">The officials react to whoever you say you are.</span></div>
      <div class="setting"><span class="s-label">Explanations in</span>
        <div class="seg">${[["en", "English"], ["pt", "Português"]].map(([k, l]) => `<button data-act="set-lang" data-id="${k}" aria-pressed="${P.explainLang === k}">${l}</button>`).join("")}</div></div>
      <div class="setting"><span class="s-label">Feedback</span>
        <div class="seg">${[["thorough", "Completo"], ["fast", "Rápido"]].map(([k, l]) => `<button data-act="set-depth" data-id="${k}" aria-pressed="${P.depth === k}">${l}</button>`).join("")}</div>
        <span class="s-help">Completo is more precise and takes a few more seconds per answer.</span></div>
      <div class="setting"><label for="set-rate">Speech speed · <span id="rate-val">${Math.round((P.rate || 1) * 100)}%</span></label>
        <input id="set-rate" type="range" min="0.7" max="1.25" step="0.05" value="${P.rate || 1}" data-set="rate"></div>
      <div class="setting"><div class="toggle-row"><span><b>Listening mode</b><br><span class="s-help">Hide what officials say until you tap it.</span></span><button class="switch" role="switch" aria-checked="${!!P.hideText}" data-act="toggle" data-id="hideText" aria-label="Listening mode"></button></div></div>
      <div class="setting"><div class="toggle-row"><span><b>Play replies automatically</b></span><button class="switch" role="switch" aria-checked="${!!P.autoplay}" data-act="toggle" data-id="autoplay" aria-label="Play replies automatically"></button></div></div>
      ${voiceSettings()}
      ${dictationSetting()}
      <div class="setting"><span class="s-label">Data</span><span class="s-help">${esc(syncTxt)}</span>
        ${S.confirmReset ? `<div class="err-actions"><button class="btn btn-sm" style="background:var(--bad);color:#fff" data-act="reset-yes">Erase progress and cards</button><button class="btn btn-sm btn-ghost" data-act="reset-no">Cancel</button></div>`
          : `<div><button class="btn btn-sm btn-ghost" data-act="reset">Reset progress</button></div>`}</div>
    </div>
  </section>
</div></div>`;
}

/* ================= screens: native-style layers ================= */
const MODAL = new Set(["convo", "drill", "review", "summary", "free", "connect"]);
function topScreen() { return S.stack[S.stack.length - 1]; }
function screenHTML(sc) {
  return sc.type === "brief" ? screenBrief(sc) : sc.type === "convo" ? screenConvo() : sc.type === "summary" ? screenSummary() :
    sc.type === "lesson" ? screenLesson(sc.id) : sc.type === "drill" ? screenDrill() : sc.type === "review" ? screenReview() :
    sc.type === "free" ? screenFree() : sc.type === "connect" ? screenConnect() : "";
}
function liveLayers() { const root = $("#screen-root"); return root ? Array.from(root.children).filter(l => !l.classList.contains("leaving")) : []; }
function fillLayer(el, sc) {
  el.innerHTML = screenHTML(sc);
  if (sc.type === "convo") {
    renderMsgs(false);
    const ta = $("#answer");
    if (ta && S.convo && S.convo.draft) { ta.value = S.convo.draft; autoGrow(ta); const c = $("#composer"); if (c) c.classList.add("has-text"); }
    scrollConvo();
  }
}
function syncLayers(anim = true) {
  const root = $("#screen-root"); if (!root) return;
  const layers = liveLayers();
  for (let i = 0; i < layers.length; i++) {
    const want = S.stack[i];
    if (!want || layers[i].dataset.k !== want.k) { for (let j = i; j < layers.length; j++) layers[j].remove(); break; }
  }
  for (let i = liveLayers().length; i < S.stack.length; i++) {
    const sc = S.stack[i]; if (!sc.k) sc.k = uid();
    const el = document.createElement("div");
    el.className = "layer"; el.dataset.k = sc.k; el.style.zIndex = String(40 + i);
    if (anim && i === S.stack.length - 1 && !sc.noAnim) el.classList.add(MODAL.has(sc.type) ? "enter-modal" : "enter-push");
    root.appendChild(el);
    fillLayer(el, sc);
  }
}
function openScreen(sc) { Voice.stop(); sc.k = uid(); S.stack.push(sc); syncLayers(true); }
function renderScreen() {
  const sc = topScreen(); if (!sc) return;
  syncLayers(false);
  const el = $(`#screen-root .layer[data-k="${sc.k}"]`); if (!el) return;
  const body = el.querySelector(".screen-body"), st = body ? body.scrollTop : 0;
  fillLayer(el, sc);
  const nb = el.querySelector(".screen-body");
  if (nb && sc.type !== "convo" && sc.type !== "drill" && sc.type !== "review") nb.scrollTop = st;
}
function stopRecording() {
  if (S.rec) { clearInterval(recTimer); S.rec = null; }
  if (S.drill) S.drill.rec = null;
  if (Mic.state !== "idle") Mic.cancel();
}
function closeScreen() {
  Voice.stop(); stopRecording();
  const top = S.stack.pop(); if (!top) return;
  if (top.type === "drill") S.drill = null;
  if (top.type === "review") S.review = null;
  const el = $(`#screen-root .layer[data-k="${top.k}"]`);
  if (el) { el.classList.remove("enter-push", "enter-modal"); el.classList.add("leaving", MODAL.has(top.type) ? "leave-modal" : "leave-push"); setTimeout(() => el.remove(), 280); }
  const nt = topScreen();
  if (!nt) { render(); return; }
  if (nt.type !== "convo") renderScreen();
}
function closeAll() {
  Voice.stop(); stopRecording();
  S.stack = []; S.drill = null; S.review = null;
  liveLayers().forEach((el, i, arr) => {
    if (i === arr.length - 1) { el.classList.remove("enter-push", "enter-modal"); el.classList.add("leaving", "leave-modal"); setTimeout(() => el.remove(), 280); }
    else el.remove();
  });
  render();
}
function head(title, sub, extra = "", closeAct = "close", icon = I.back) {
  return `<div class="screen-head"><div class="wrap"><button class="icon-btn" data-act="${closeAct}" aria-label="Voltar">${icon}</button><div class="ttl"><b>${esc(title)}</b>${sub ? `<small>${esc(sub)}</small>` : ""}</div>${extra}</div></div>`;
}

/* ---------- briefing ---------- */
function screenBrief(sc) {
  const s = scenarioById(sc.id); if (!s) return "";
  const p = s.persona;
  return `<div class="screen">${head("Briefing", s.en)}
  <div class="screen-body"><div class="wrap">
    <div class="card" style="display:grid;gap:14px">
      <div style="display:flex;gap:14px;align-items:center">${avatar(p, "lg")}<div style="min-width:0"><h2 style="font-size:22px">${esc(s.title)}</h2><p class="muted">${esc(p.name)} · ${esc(p.role)}</p></div></div>
      <p>${esc(s.setup)}</p>
      <div><div class="lbl">Your goal</div><p>${esc(s.goal)}</p></div>
      <div><div class="lbl">Grammar focus</div><div class="chips">${(s.targets || []).filter(t => LESSON[t]).map(t => `<button class="pill pill-azul" data-act="lesson" data-id="${t}">${esc(LESSON[t].title)}</button>`).join("")}</div></div>
    </div>
    <div><div class="lbl" style="margin-bottom:8px">Vocabulário útil</div><div class="ex-list">${(s.vocab || []).map((v, i) => `<div class="ex"><div><p>${esc(v[0])}</p><small>${esc(v[1])}</small></div>${playBtn(v[0], "voc-" + i, "")}</div>`).join("")}</div></div>
    <div class="card" style="padding-block:4px">
      <div class="setting"><div class="toggle-row"><span><b>Listening mode</b><br><span class="s-help">Hear first, read only if you need to.</span></span><button class="switch" role="switch" aria-checked="${!!P.hideText}" data-act="toggle" data-id="hideText" aria-label="Listening mode"></button></div></div>
      <div class="setting"><div class="toggle-row"><span><b>Play replies automatically</b></span><button class="switch" role="switch" aria-checked="${!!P.autoplay}" data-act="toggle" data-id="autoplay" aria-label="Autoplay"></button></div></div>
    </div>
  </div></div>
  <div class="screen-foot"><div class="wrap"><button class="btn btn-primary btn-block" data-act="start" data-id="${esc(s.id)}">${I.chat.replace("<svg ", '<svg width="20" height="20" ')} Começar conversa</button></div></div>
</div>`;
}

/* ---------- free topic ---------- */
function screenFree() {
  const f = S.free;
  return `<div class="screen">${head("Tema livre", "Build your own meeting")}
  <div class="screen-body"><div class="wrap">
    <div class="card" style="display:grid;gap:14px">
      <div class="setting" style="border:0;padding:0"><label for="free-who">Who are you talking to?</label><input id="free-who" class="answer-input" type="text" value="${esc(f.who)}" placeholder="e.g. Secretária de Educação de Salvador"></div>
      <div class="setting" style="border:0;padding:0"><label for="free-what">What's the situation?</label><textarea id="free-what" class="answer-input" placeholder="e.g. She wants to use school data to cut dropout rates and asks how WWC could help.">${esc(f.what)}</textarea></div>
      <div class="setting" style="border:0;padding:0"><span class="s-label">Character</span><div class="seg">${[["f", "Mulher"], ["m", "Homem"]].map(([k, l]) => `<button data-act="free-gender" data-id="${k}" aria-pressed="${f.gender === k}">${l}</button>`).join("")}</div></div>
    </div>
    ${AI.ok || AI.status === "pending" ? "" : `<div class="banner">${I.warn}<div>${esc(errMsg({ code: AI.status === "denied" ? "not_granted" : "unavailable" }))}</div></div>`}
  </div></div>
  <div class="screen-foot"><div class="wrap"><button class="btn btn-primary btn-block" data-act="free-create" ${f.busy ? "disabled" : ""}>${f.busy ? "Criando o cenário…" : "Criar cenário"}</button></div></div>
</div>`;
}

/* ---------- conversation ---------- */
function startConvo(id) {
  const s = scenarioById(id); if (!s) return;
  S.convo = { sid: uid(), scenario: s, turns: [{ who: "npc", text: s.opening, state: "done", shown: false }], catCount: {}, nudged: {}, cardsAdded: 0, scores: [], hint: null, draft: "" };
  openScreen({ type: "convo" });
  if (P.autoplay) sayAs(s.opening, s.persona, "npc-0");
}
function screenConvo() {
  const c = S.convo, p = c.scenario.persona;
  return `<div class="screen" id="convo">
  <div class="screen-head"><div class="wrap">
    <button class="icon-btn" data-act="convo-exit" aria-label="Sair">${I.close}</button>
    ${avatar(p, "sm")}
    <div class="ttl"><b>${esc(p.name)}</b><small>${esc(p.role)}</small></div>
    <button class="icon-btn" data-act="toggle-hide" id="btn-hide" aria-label="${P.hideText ? "Mostrar textos" : "Ocultar textos"}">${P.hideText ? I.eyeOff : I.eye}</button>
    <button class="head-btn" data-act="convo-end">Encerrar</button>
  </div></div>
  <div class="screen-body" id="convo-body"><div class="wrap"><div class="msgs" id="msgs"></div></div></div>
  <div class="screen-foot"><div class="wrap composer ${Mic.mode() ? "can-mic" : ""}" id="composer">${composerInner()}</div></div>
</div>`;
}
function composerInner() {
  const m = Mic.mode();
  if (S.rec === "rec") return `<div class="composer-row"><div class="rec-bar" style="flex:1;min-width:0"><span class="rec-dot"></span><span class="rec-time" id="rec-time">0:00</span><div class="rec-wave" id="rec-wave">${"<i></i>".repeat(40)}</div><button class="rec-cancel" data-act="mic-cancel">Cancelar</button><button class="rec-stop" data-act="mic-stop" aria-label="Parar e enviar">${I.send}</button></div></div>
    <div class="dictate-hint">${I.mic}<span>Listening. Tap the arrow when you finish.</span></div>`;
  if (S.rec === "busy") return `<div class="composer-row"><div class="rec-bar" style="flex:1;border-color:var(--line)"><span class="typing"><i></i><i></i><i></i></span><span class="note">Transcrevendo…</span></div></div>
    <div class="dictate-hint">${I.mic}<span>Your exact words go to the coach, Spanish included.</span></div>`;
  const hint = m === "openai" ? "Tap the mic and speak, then tap the arrow. Or type."
    : m === "browser" ? "Tap the mic and speak, or type your answer."
    : IN_CLAUDE ? "Tap the box, then the microphone on the Portuguese keyboard, and speak."
    : "Type, or use the Portuguese keyboard's microphone. An OpenAI key in Conexões turns on the in-app mic.";
  return `<div class="composer-row">
      <button class="icon-btn" data-act="hint" aria-label="Dica: sugestões de resposta">${I.bulb}</button>
      <textarea id="answer" lang="pt-BR" rows="1" placeholder="Responda em português…" enterkeyhint="send" autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false" aria-label="Sua resposta"></textarea>
      <button class="send" data-act="send" aria-label="Enviar">${I.send}</button>
      ${m ? `<button class="mic-btn" data-act="mic" aria-label="Falar">${I.mic}</button>` : ""}
    </div>
    <div class="dictate-hint">${I.mic}<span>${hint}</span></div>`;
}
function renderComposer() {
  const el = $("#composer"); if (!el) return;
  el.innerHTML = composerInner();
  el.classList.toggle("can-mic", !!Mic.mode());
  const ta = $("#answer");
  if (ta && S.convo && S.convo.draft) { ta.value = S.convo.draft; autoGrow(ta); }
  el.classList.toggle("has-text", !!(ta && ta.value.trim()));
}
let recTimer = null;
async function micStart() {
  if (S.rec) return;
  Voice.stop();
  try { await Mic.start(); } catch (e) { console.warn("mic start", e); toast(micErr(e)); return; }
  S.rec = "rec"; renderComposer();
  const wave = [];
  clearInterval(recTimer);
  recTimer = setInterval(() => {
    const secs = Math.floor((Date.now() - Mic.t0) / 1000), t = $("#rec-time"), w = $("#rec-wave");
    if (t) t.textContent = Math.floor(secs / 60) + ":" + String(secs % 60).padStart(2, "0");
    if (w) {
      wave.push(Mic.level()); while (wave.length > 40) wave.shift();
      const bars = w.children;
      for (let i = 0; i < bars.length; i++) { const v = wave[wave.length - bars.length + i]; bars[i].style.height = (v === undefined ? 12 : Math.max(12, Math.round(v * 100))) + "%"; }
    }
    if (secs >= 120) micStop();
  }, 100);
}
async function micStop() {
  if (S.rec !== "rec") return;
  clearInterval(recTimer);
  S.rec = "busy"; renderComposer();
  let text = "", failed = false;
  try { text = await Mic.stop(); } catch (e) { failed = true; console.warn("mic stop", e); toast(micErr(e)); }
  S.rec = null; renderComposer();
  if (!text) { if (!failed) toast("Não ouvi nada. Tente de novo."); return; }
  const ta = $("#answer"); if (ta) ta.value = text;
  if (S.convo) S.convo.draft = text;
  sendAnswer();
}
function micCancel() { clearInterval(recTimer); Mic.cancel(); S.rec = null; renderComposer(); }
function npcMsg(t, i, p) {
  const hidden = P.hideText && !t.shown && t.state === "done" && Voice.ok && Voice.list.length > 0;
  const body = t.state === "loading" && !t.text ? '<span class="typing" aria-label="digitando"><i></i><i></i><i></i></span>'
    : `<span class="txt ${hidden ? "hidden" : ""}" ${hidden ? `data-act="reveal" data-i="${i}" title="Tocar para mostrar"` : ""}>${esc(t.text)}</span>`;
  return `<div class="msg msg-npc" data-turn="${i}">${avatar(p, "sm")}<div style="min-width:0"><div class="bubble">${body}
    ${t.state === "error" ? `<p class="note" style="margin-top:6px">${esc(t.err)}</p>${isFatal({ code: t.code }) ? "" : `<div class="bubble-tools"><button class="tool" data-act="retry-npc" data-i="${i}">${I.refresh} Tentar de novo</button></div>`}` : ""}
    ${t.en ? `<p class="en-line">${esc(t.en)}</p>` : ""}
    ${t.state === "done" ? `<div class="bubble-tools">
      <button class="tool" data-act="play-npc" data-i="${i}" data-play-key="npc-${i}">${I.play} Ouvir</button>
      <button class="tool" data-act="slow-npc" data-i="${i}" data-play-key="npcs-${i}">${I.slow} Devagar</button>
      ${hidden ? `<button class="tool" data-act="reveal" data-i="${i}">${I.eye} Mostrar</button>` : ""}
      ${t.en ? "" : `<button class="tool" data-act="translate" data-i="${i}">${t.enBusy ? "…" : "EN"}</button>`}
    </div>` : ""}
  </div></div></div>`;
}
function coachCard(t, i) {
  if (t.fbState === "off") return "";
  if (t.fbState === "loading") return `<div class="coach" aria-busy="true"><div class="coach-head"><span class="mono">Coach</span><span class="note">checking your answer…</span></div><div class="skeleton"><i style="width:92%"></i><i style="width:68%"></i><i style="width:80%"></i></div></div>`;
  if (t.fbState === "error") return `<div class="coach"><p class="note">${esc(t.fbErr)}</p>${isFatal({ code: t.fbCode }) ? "" : `<div><button class="btn btn-sm btn-soft" data-act="retry-coach" data-i="${i}">${I.refresh} Tentar de novo</button></div>`}</div>`;
  const fb = t.fb; if (!fb) return "";
  const cls = fb.score >= 90 ? "good" : fb.score >= 75 ? "mid" : "low";
  const label = fb.score >= 90 ? "Excelente" : fb.score >= 75 ? "Quase lá" : "Vamos revisar";
  const same = norm(fb.corrected) === norm(t.text);
  const showNat = fb.natural && norm(fb.natural) !== norm(fb.corrected);
  const errs = fb.errors.map((e, k) => {
    const cat = CATS[e.cat] || CATS.other, l = cat.lesson && LESSON[cat.lesson];
    return `<div class="err">
      <div class="err-head"><span class="pill pill-azul">${esc(cat.label)}</span>${e.es ? '<span class="pill pill-warn">Espanhol</span>' : ""}</div>
      <p class="err-swap">${e.wrong ? `<s>${esc(e.wrong)}</s> → ` : ""}<b>${esc(e.right)}</b></p>
      ${e.why ? `<p class="err-why">${esc(e.why)}</p>` : ""}
      ${l ? `<details class="rule" ${k === 0 ? "open" : ""}><summary>${I.book.replace("<svg ", '<svg width="16" height="16" ')} The rule: ${esc(l.en)}</summary><ul>${l.core.map(x => `<li>${x}</li>`).join("")}</ul></details>
      <div class="err-actions"><button class="btn btn-sm btn-soft" data-act="lesson" data-id="${l.id}">Abrir aula</button><button class="btn btn-sm btn-ghost" data-act="drill" data-id="${l.id}">Treinar</button></div>` : ""}
    </div>`;
  }).join("");
  const nud = t.nudge && CATS[t.nudge] && LESSON[CATS[t.nudge].lesson];
  return `<div class="coach">
    <div class="coach-head"><span class="score ${cls}">${fb.score} · ${label}</span>${fb.praise ? `<span class="note" style="flex:1;min-width:150px">${esc(fb.praise)}</span>` : ""}</div>
    ${same ? `<p class="fixline"><ins>${I.check.replace("<svg ", '<svg width="15" height="15" style="vertical-align:-2px" ')} Gramática correta</ins></p>`
      : `<div><div class="lbl">Correção ${playBtn(fb.corrected, "fix-" + i, "")}</div><p class="fixline">${diffHTML(t.text, fb.corrected)}</p></div>`}
    ${showNat ? `<div class="natural"><div class="lbl">Mais natural ${playBtn(fb.natural, "nat-" + i, "")}</div><p>${esc(fb.natural)}</p></div>` : ""}
    ${errs}
    ${fb.spanish ? `<div class="banner" style="background:var(--warn-soft)">${I.warn}<div><b>Espanhol detectado.</b> ${esc(fb.spanish)}</div></div>` : ""}
    ${nud ? `<div class="nudge"><div><b>${esc(nud.title)}</b> tripped you up ${t.nudgeN}× in this conversation. A ${nud.mins}-minute lesson fixes it.</div><div class="err-actions"><button class="btn btn-sm btn-ipe" data-act="lesson" data-id="${nud.id}">Fazer a aula</button><button class="btn btn-sm btn-ghost" data-act="drill" data-id="${nud.id}">Só os exercícios</button></div></div>` : ""}
    ${t.cardsAdded ? `<div class="cards-added">${I.card1} ${t.cardsAdded} ${t.cardsAdded === 1 ? "cartão salvo" : "cartões salvos"} para revisão</div>` : ""}
  </div>`;
}
function hintBlock(c) {
  if (!c.hint) return "";
  if (c.hint.state === "loading") return `<div class="hint-box"><div class="lbl">${I.bulb.replace("<svg ", '<svg width="14" height="14" ')} Dica</div><div class="skeleton"><i style="width:85%"></i><i style="width:60%"></i></div></div>`;
  if (c.hint.state === "error") return `<div class="hint-box"><p class="note">${esc(c.hint.err)}</p></div>`;
  const d = c.hint.data || {};
  return `<div class="hint-box"><div class="lbl">${I.bulb.replace("<svg ", '<svg width="14" height="14" ')} Dica: ways to answer</div>
    ${(d.answers || []).map((a, k) => `<div style="display:grid;grid-template-columns:1fr auto;gap:6px;align-items:start"><div><p class="h-pt">${esc(a.pt)}</p><p class="h-en">${esc(a.en)}</p></div>${playBtn(a.pt, "hint-" + k, "")}</div>`).join("")}
    ${(d.phrases || []).length ? `<div class="chips">${d.phrases.map(ph => `<button class="pill" data-act="say" data-say="${esc(ph.pt)}" title="${esc(ph.en)}">${esc(ph.pt)}</button>`).join("")}</div>` : ""}
    <p class="note">Say it in your own words. Copying won't train you.</p></div>`;
}
function renderMsgs(scroll = true) {
  const c = S.convo, box = $("#msgs"); if (!c || !box) return;
  const p = c.scenario.persona;
  box.innerHTML = c.turns.map((t, i) => t.who === "npc" ? npcMsg(t, i, p) : `<div class="msg msg-me" data-turn="${i}"><div class="bubble">${esc(t.text)}</div>${coachCard(t, i)}</div>`).join("") + hintBlock(c);
  const hb = $("#btn-hide"); if (hb) hb.innerHTML = P.hideText ? I.eyeOff : I.eye;
  markPlaying(Voice.key);
  if (scroll) scrollConvo();
}
function scrollConvo() { const b = $("#convo-body"); if (b) b.scrollTop = b.scrollHeight; }
function nearBottom() { const b = $("#convo-body"); return !b || b.scrollHeight - b.scrollTop - b.clientHeight < 140; }
function autoGrow(ta) { ta.style.height = "auto"; ta.style.height = Math.min(160, ta.scrollHeight + 2) + "px"; }
function cleanLine(s, p) {
  let t = String(s || "").trim();
  const names = [p.name, p.name.split(" ").slice(-2).join(" "), p.name.split(" ").pop()];
  for (const n of names) t = t.replace(new RegExp("^\\**\\s*" + n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*\\**\\s*:\\s*", "i"), "");
  return t.replace(/^["“]+|["”]+$/g, "").trim();
}
/* word-level diff between what was said and the correction */
function diffHTML(a, b) {
  const A = String(a).split(/\s+/).filter(Boolean), B = String(b).split(/\s+/).filter(Boolean);
  const nA = A.map(w => norm(w)), nB = B.map(w => norm(w));
  const n = A.length, m = B.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = nA[i] === nB[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const out = []; let i = 0, j = 0;
  while (i < n && j < m) {
    if (nA[i] === nB[j]) { out.push(["s", B[j]]); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) out.push(["d", A[i++]]);
    else out.push(["i", B[j++]]);
  }
  while (i < n) out.push(["d", A[i++]]);
  while (j < m) out.push(["i", B[j++]]);
  let html = "", cur = null, buf = [];
  const flush = () => { if (!buf.length) return; const t = esc(buf.join(" ")); html += (cur === "d" ? `<del>${t}</del>` : cur === "i" ? `<ins>${t}</ins>` : t) + " "; buf = []; };
  for (const [k, w] of out) { if (k !== cur) { flush(); cur = k; } buf.push(w); }
  flush();
  return html.trim();
}
function sendAnswer() {
  const ta = $("#answer"), c = S.convo; if (!ta || !c) return;
  const text = ta.value.trim();
  if (!text) { toast("Fale ou digite sua resposta primeiro."); ta.focus(); return; }
  if (c.turns.some(t => t.who === "npc" && t.state === "loading")) { toast("Espere a resposta…"); return; }
  ta.value = ""; c.draft = ""; autoGrow(ta); ta.blur();
  const comp = $("#composer"); if (comp) comp.classList.remove("has-text");
  Voice.stop();
  const meIdx = c.turns.push({ who: "me", text, fbState: "loading" }) - 1;
  const npcIdx = c.turns.push({ who: "npc", text: "", state: "loading" }) - 1;
  c.hint = null;
  addXP(10);
  renderMsgs(true);
  runPersona(npcIdx);
  runCoach(meIdx);
}
async function runPersona(i) {
  const c = S.convo, t = c.turns[i], p = c.scenario.persona;
  t.state = "loading"; t.text = "";
  try {
    const res = await AI.text(personaPrompt(c, i), {
      modelTier: "quick", cache: false,
      onText: ({ text }) => { if (S.convo !== c) return; t.text = cleanLine(text, p); const el = $(`[data-turn="${i}"] .bubble`); if (el) { const nb = nearBottom(); el.innerHTML = `<span class="txt">${esc(t.text)}</span>`; if (nb) scrollConvo(); } }
    });
    if (S.convo !== c) return;
    t.text = cleanLine(res.text, p); t.state = "done";
    const nb = nearBottom(); renderMsgs(false); if (nb) scrollConvo();
    if (P.autoplay && topScreen() && topScreen().type === "convo") sayAs(t.text, p, "npc-" + i);
  } catch (e) {
    console.warn("persona failed", e);
    if (S.convo !== c) return;
    t.state = "error"; t.err = errMsg(e); t.code = e && e.code; renderMsgs(false);
  }
}
function sanitizeFb(fb, orig) {
  const o = fb && typeof fb === "object" ? fb : {};
  const errors = Array.isArray(o.errors) ? o.errors : [];
  return {
    score: clamp(Math.round(Number(o.score) || 0), 0, 100),
    corrected: typeof o.corrected === "string" && o.corrected.trim() ? o.corrected.trim() : orig,
    natural: typeof o.natural === "string" ? o.natural.trim() : "",
    praise: typeof o.praise === "string" ? o.praise.trim() : "",
    spanish: typeof o.spanish === "string" ? o.spanish.trim() : "",
    errors: errors.filter(e => e && typeof e === "object" && (e.right || e.wrong)).slice(0, 5).map(e => ({
      cat: CATS[e.cat] ? e.cat : "other", wrong: String(e.wrong || "").slice(0, 200), right: String(e.right || "").slice(0, 200),
      why: String(e.why || "").slice(0, 500), es: !!e.es,
      card: e.card && typeof e.card === "object" ? { front: String(e.card.front || "").slice(0, 300), back: String(e.card.back || "").slice(0, 300) } : null
    }))
  };
}
function cardFromError(e, src) {
  const cat = CATS[e.cat] || CATS.other;
  let front = (e.card && e.card.front || "").trim(), back = (e.card && e.card.back || "").trim();
  if (!front || !back) { front = `“${e.wrong}” → ?`; back = e.right; }
  const id = "c-" + hash(cat.deck + "|" + norm(front));
  const ex = Store.cards.get(id);
  if (ex) return { ...ex, misses: (ex.misses || 1) + 1, due: Date.now(), source: src.slice(0, 240) };
  return { id, deck: cat.deck, front, back, note: e.why.slice(0, 400), cat: e.cat, lesson: cat.lesson || "", source: src.slice(0, 240), es: e.es, origin: "conversa", created: Date.now(), due: Date.now(), interval: 0, ease: 2.5, reps: 0, lapses: 0, misses: 1 };
}
async function runCoach(i) {
  const c = S.convo, t = c.turns[i];
  t.fbState = "loading";
  try {
    const raw = await AI.json(coachPrompt(c, i), P.depth === "fast" ? { modelTier: "quick", cache: false } : { modelTier: "default", effort: "low", cache: false });
    const fb = sanitizeFb(raw, t.text);
    t.fb = fb; t.fbState = "done";
    let added = 0;
    for (const e of fb.errors) {
      if (e.cat !== "other" || e.right) { await Store.putCard(cardFromError(e, t.text)); added++; }
      catHit(e.cat);
      c.catCount[e.cat] = (c.catCount[e.cat] || 0) + 1;
      if (c.catCount[e.cat] >= 2 && !c.nudged[e.cat] && CATS[e.cat].lesson) { c.nudged[e.cat] = true; t.nudge = e.cat; t.nudgeN = c.catCount[e.cat]; }
    }
    t.cardsAdded = added; c.cardsAdded += added;
    c.scores.push(fb.score);
    P.scores = [...(P.scores || []), fb.score].slice(-50);
    if (fb.score >= 90) addXP(5); else Store.save();
    updateHeader();
    if (S.convo !== c) return;
    renderMsgs(false);
    const el = $(`[data-turn="${i}"] .coach`);
    if (el && topScreen() && topScreen().type === "convo") el.scrollIntoView({ block: "start", behavior: "smooth" });
  } catch (e) {
    console.warn("coach failed", e);
    if (S.convo !== c) return;
    t.fbState = "error"; t.fbErr = errMsg(e); t.fbCode = e && e.code; renderMsgs(false);
  }
}
async function askHint() {
  const c = S.convo; if (!c) return;
  if (c.hint && c.hint.state === "loading") return;
  c.hint = { state: "loading" }; renderMsgs(true);
  try { const d = await AI.json(hintPrompt(c), { modelTier: "quick" }); c.hint = { state: "done", data: d }; }
  catch (e) { c.hint = { state: "error", err: errMsg(e) }; }
  if (S.convo === c) renderMsgs(true);
}
async function translateTurn(i) {
  const c = S.convo, t = c.turns[i]; if (!t || t.enBusy) return;
  t.enBusy = true; t.shown = true; renderMsgs(false);
  try { const r = await AI.text("Translate this Brazilian Portuguese line into natural English. Reply with only the translation.\n\n" + t.text, { modelTier: "quick" }); t.en = r.text.trim(); }
  catch (e) { toast(errMsg(e)); }
  t.enBusy = false; if (S.convo === c) renderMsgs(false);
}
function endConvo() {
  const c = S.convo; if (!c) { closeAll(); return; }
  const answered = c.turns.filter(t => t.who === "me");
  if (!answered.length) { S.convo = null; closeAll(); return; }
  const avg = c.scores.length ? Math.round(c.scores.reduce((a, b) => a + b, 0) / c.scores.length) : null;
  if (!c.saved) {
    c.saved = true;
    P.sessions = [{ sid: c.sid, id: c.scenario.id, title: c.scenario.title, at: Date.now(), turns: answered.length, avg, cats: c.catCount }, ...(P.sessions || [])].slice(0, 30);
    Store.save();
  }
  Voice.stop();
  stopRecording();
  S.stack = [{ type: "summary", k: uid() }];
  syncLayers(true);
}
function screenSummary() {
  const c = S.convo; if (!c) return "";
  const answered = c.turns.filter(t => t.who === "me").length;
  const avg = c.scores.length ? Math.round(c.scores.reduce((a, b) => a + b, 0) / c.scores.length) : null;
  const cats = Object.entries(c.catCount).filter(([k]) => CATS[k]).sort((a, b) => b[1] - a[1]);
  const topL = cats.length && CATS[cats[0][0]].lesson ? LESSON[CATS[cats[0][0]].lesson] : null;
  return `<div class="screen">${head("Resumo", c.scenario.title, "", "summary-close", I.close)}
  <div class="screen-body"><div class="wrap">
    <div class="result-big">${avatar(c.scenario.persona, "lg")}<span class="mono muted">Nota média</span><span class="num">${avg ?? "—"}</span><span class="muted">${answered} ${answered === 1 ? "resposta" : "respostas"} · ${c.cardsAdded} ${c.cardsAdded === 1 ? "cartão novo" : "cartões novos"}</span></div>
    ${topL ? `<div class="nudge"><div><b>Next step: ${esc(topL.title)}</b> (${esc(topL.en)}) was your most frequent slip. Do the ${topL.mins}-minute lesson while it's fresh.</div><div class="err-actions"><button class="btn btn-sm btn-ipe" data-act="lesson" data-id="${topL.id}">Fazer a aula</button><button class="btn btn-sm btn-ghost" data-act="drill" data-id="${topL.id}">Exercícios</button></div></div>` : ""}
    <div class="card"><div class="lbl">Erros por tema</div>${cats.length ? `<div class="list" style="gap:4px;margin-top:6px">${cats.map(([k, n]) => `<button class="weak" ${CATS[k].lesson ? `data-act="lesson" data-id="${CATS[k].lesson}"` : ""}><span class="name">${esc(CATS[k].label)}</span><span class="track"><i style="width:${Math.round(100 * n / cats[0][1])}%"></i></span><span class="n">${n}</span></button>`).join("")}</div>` : `<p class="note" style="margin-top:6px">${c.scores.length ? "No mistakes. Excellent." : "Feedback wasn't available for this conversation."}</p>`}</div>
  </div></div>
  <div class="screen-foot"><div class="wrap" style="grid-template-columns:1fr 1fr">
    <button class="btn btn-ghost" data-act="again" data-id="${esc(c.scenario.id)}">Repetir</button>
    <button class="btn btn-primary" data-act="${dueCards().length ? "review-from-summary" : "summary-close"}">${dueCards().length ? "Revisar cartões" : "Concluir"}</button>
  </div></div>
</div>`;
}

/* ---------- lesson ---------- */
function renderTable(t) {
  const cols = t.head.length;
  const keep = []; for (let k = 0; k < cols; k++) if (t.head[k] || t.rows.some(r => r[k])) keep.push(k);
  return `<div class="tbl-wrap"><table><thead><tr>${keep.map(k => `<th>${t.head[k]}</th>`).join("")}</tr></thead><tbody>${t.rows.map(r => `<tr>${keep.map(k => `<td class="${String(r[k] || "").length > 24 ? "wrapcell" : ""}">${r[k] || ""}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
function renderBlock(b, li) {
  let h = "";
  if (b.h) h += `<h3>${b.h}</h3>`;
  if (b.p) h += `<p>${b.p}</p>`;
  if (b.list) h += `<ul>${b.list.map(x => `<li>${x}</li>`).join("")}</ul>`;
  if (b.table) h += renderTable(b.table);
  if (b.trap) h += `<div class="trap"><div class="lbl">${I.warn.replace("<svg ", '<svg width="14" height="14" ')} Spanish-speaker trap</div><div>${b.trap}</div></div>`;
  if (b.ex) h += `<div class="ex-list">${b.ex.map((x, k) => `<div class="ex"><div><p>${esc(x[0])}</p><small>${esc(x[1])}</small></div>${playBtn(x[0], "ex-" + li + "-" + k, "")}</div>`).join("")}</div>`;
  return `<div>${h}</div>`;
}
function screenLesson(id) {
  const l = LESSON[id]; if (!l) return "";
  const st = (P.lessons || {})[id];
  return `<div class="screen">${head(l.title, l.en)}
  <div class="screen-body"><div class="wrap">
    <div class="core">${tiles(seedOf(id), 4, 4, 0, "tiles-bg").replace('class="tiles-bg"', 'class="tiles-bg" style="position:absolute;right:-16px;top:-16px;width:120px;height:120px;opacity:.18;color:var(--on-azul)"')}
      <span class="mono">Regras essenciais · ${l.mins} min</span><ul>${l.core.map(x => `<li>${x}</li>`).join("")}</ul></div>
    <div class="lesson-body">${l.body.map((b, i) => renderBlock(b, i)).join("")}</div>
    ${st && st.n ? `<p class="note">You've done ${st.n} exercises here, ${Math.round(100 * st.ok / st.n)}% correct.</p>` : ""}
  </div></div>
  <div class="screen-foot"><div class="wrap" style="grid-template-columns:${AI.ok ? "1fr auto" : "1fr"}">
    <button class="btn btn-primary" data-act="drill" data-id="${id}">Praticar · ${l.drills.length} exercícios</button>
    ${AI.ok ? `<button class="btn btn-soft" data-act="gen" data-id="${id}" ${S.gen[id] ? "disabled" : ""} aria-label="More exercises written by Claude">${S.gen[id] ? "Gerando…" : I.spark.replace("<svg ", '<svg width="18" height="18" ') + " Mais"}</button>` : ""}
  </div></div>
</div>`;
}

/* ---------- drills ---------- */
function startDrill(lessonId, items) {
  const l = LESSON[lessonId]; if (!l) return;
  const list = items || shuffle(l.drills).slice(0, 10);
  S.drill = { lessonId, items: list, i: 0, results: [], phase: "ask", verdict: null, input: "", xp: 0, cards: 0, generated: !!items };
  const t = topScreen();
  if (t && t.type === "drill") S.stack[S.stack.length - 1] = { type: "drill", k: uid(), noAnim: true }; else S.stack.push({ type: "drill", k: uid() });
  Voice.stop(); syncLayers(true); autoplayShadow();
}
function autoplayShadow() {
  const d = S.drill; if (!d) return; const it = d.items[d.i];
  if (it && it.t === "shadow") sayAs(stripHtml(it.q), null, "shadow-" + d.i);
}
function validItems(arr) {
  if (!Array.isArray(arr)) return [];
  const out = [];
  for (const it of arr) {
    if (!it || typeof it !== "object" || !KIND[it.t] || typeof it.q !== "string") continue;
    const x = typeof it.x === "string" ? safeRich(it.x) : "";
    if (it.t === "mc") {
      if (!Array.isArray(it.o) || it.o.length < 2) continue;
      const a = Number(it.a); if (!Number.isInteger(a) || a < 0 || a >= it.o.length) continue;
      out.push({ t: "mc", q: safeRich(it.q), o: it.o.map(o => safeRich(String(o))), a, x });
    } else if (it.t === "shadow") out.push({ t: "shadow", q: esc(it.q), x });
    else {
      const a = (Array.isArray(it.a) ? it.a : [it.a]).filter(s => typeof s === "string" && s.trim()).map(s => s.trim());
      if (!a.length) continue;
      out.push({ t: it.t, q: safeRich(it.q), a, x });
    }
  }
  return out;
}
async function genDrills(id) {
  if (S.gen[id]) return;
  S.gen[id] = true; if (topScreen() && topScreen().type === "lesson") renderScreen();
  try {
    const arr = await AI.json(genPrompt(LESSON[id]), { modelTier: "default", effort: "low", cache: false });
    const items = validItems(arr);
    if (!items.length) throw { code: "invalid_json" };
    S.gen[id] = false;
    startDrill(id, items);
  } catch (e) {
    S.gen[id] = false; toast(errMsg(e));
    if (topScreen() && topScreen().type === "lesson") renderScreen();
  }
}
function matchAny(ans, accepted) {
  const a = norm(ans);
  for (const x of accepted) if (norm(x) === a) return { ok: true };
  for (const x of accepted) if (deaccent(norm(x)) === deaccent(a)) return { ok: true, accent: x };
  return { ok: false };
}
function shadowScore(ans, target) {
  const T = target.split(/\s+/).filter(Boolean), A = ans.split(/\s+/).filter(Boolean);
  const nT = T.map(w => deaccent(norm(w))), nA = A.map(w => deaccent(norm(w)));
  const n = T.length, m = A.length, dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = nT[i] && nT[i] === nA[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const hit = new Array(n).fill(false); let i = 0, j = 0;
  while (i < n && j < m) { if (nT[i] && nT[i] === nA[j]) { hit[i] = true; i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++; }
  const words = T.filter((w, k) => nT[k]).length || 1;
  const ratio = hit.filter((h, k) => h && nT[k]).length / words;
  return { ratio, html: T.map((w, k) => `<span class="${hit[k] || !nT[k] ? "hit" : "miss"}">${esc(w)}</span>`).join(" "), missed: T.filter((w, k) => !hit[k] && nT[k]) };
}
function drillCard(it, l) {
  const q = stripHtml(it.q);
  let front, back;
  if (it.t === "mc") { front = q + "\n" + it.o.map(stripHtml).join(" / "); back = stripHtml(it.o[it.a]); }
  else if (it.t === "fill") { front = q; back = it.a[0]; }
  else if (it.t === "fix") { front = "Corrija: " + q; back = it.a[0]; }
  else if (it.t === "say") { front = "Diga em português: " + q; back = it.a[0]; }
  else return null;
  const id = "d-" + hash(l.deck + "|" + norm(front));
  const ex = Store.cards.get(id);
  if (ex) return { ...ex, misses: (ex.misses || 1) + 1, due: Date.now() };
  return { id, deck: l.deck, front, back, note: stripHtml(it.x).slice(0, 400), cat: l.id, lesson: l.id, source: "", es: /spanish|espanhol|ES\b/i.test(stripHtml(it.x)) || /\b(el|la|los|pero|muy|hay|con)\b/i.test(q), origin: "exercício", created: Date.now(), due: Date.now(), interval: 0, ease: 2.5, reps: 0, lapses: 0, misses: 1 };
}
function finishItem(ok, extra = {}) {
  const d = S.drill, it = d.items[d.i], l = LESSON[d.lessonId];
  d.results.push(ok); d.phase = "answered"; d.verdict = { ok, ...extra };
  const xp = ok ? 5 : 1; d.xp += xp; addXP(xp);
  P.lessons = P.lessons || {};
  const st = P.lessons[l.id] || { n: 0, ok: 0, last: 0 };
  P.lessons[l.id] = { n: st.n + 1, ok: st.ok + (ok ? 1 : 0), last: Date.now() };
  if (!ok) {
    catHit(l.id);
    const card = drillCard(it, l);
    if (card) { Store.putCard(card); d.cards++; d.verdict.card = true; }
  }
  Store.save(); updateHeader(); renderScreen();
}
async function checkDrill(choice) {
  const d = S.drill; if (!d || d.phase !== "ask") return;
  const it = d.items[d.i];
  if (it.t === "mc") { d.verdict = null; finishItem(choice === it.a, { chosen: choice }); return; }
  const el = $("#drill-input"); const ans = (el ? el.value : "").trim();
  if (!ans) { toast("Responda primeiro: fale ou digite."); el && el.focus(); return; }
  d.input = ans;
  if (it.t === "fill") { const r = matchAny(ans, it.a); finishItem(r.ok, { accent: r.accent }); return; }
  if (it.t === "shadow") { const r = shadowScore(ans, stripHtml(it.q)); finishItem(r.ratio >= 0.8, { shadow: r }); return; }
  const r = matchAny(ans, it.a);
  if (r.ok) { finishItem(true, { accent: r.accent }); return; }
  if (AI.ok) {
    d.phase = "checking"; renderScreen();
    try {
      const g = await AI.json(gradePrompt(it, ans), { modelTier: "quick", cache: false });
      if (S.drill !== d) return;
      d.phase = "ask"; finishItem(!!(g && g.ok), { ai: { feedback: String(g && g.feedback || ""), fixed: String(g && g.fixed || "") } });
    } catch (e) { if (S.drill !== d) return; d.phase = "self"; d.aiErr = errMsg(e); renderScreen(); }
    return;
  }
  d.phase = "self"; renderScreen();
}
function verdictHTML(d, it) {
  const v = d.verdict;
  if (d.phase === "self") return `<div class="verdict close"><h3>Compare with the model answer</h3><p class="answer">${it.a.map(esc).join("<br>")}</p><p class="expl">${it.x}</p>${d.aiErr ? `<p class="note">${esc(d.aiErr)}</p>` : ""}</div>`;
  if (!v) return "";
  if (it.t === "shadow") {
    const r = v.shadow;
    return `<div class="verdict ${v.ok ? "ok" : "no"}"><h3>${v.ok ? "Muito bem!" : "Quase"} · ${Math.round(r.ratio * 100)}% reconhecido</h3>
      <p class="diffwords">${r.html}</p>
      ${r.missed.length ? `<p class="expl">The recognizer didn't catch: <b>${r.missed.map(esc).join(", ")}</b>. Listen again and exaggerate those sounds.</p>` : ""}
      <p class="note">Heard: “${esc(d.input)}”</p><p class="expl">${it.x}</p>
      <div>${playBtn(stripHtml(it.q), "shadow-again-" + d.i, "Ouvir de novo")}</div></div>`;
  }
  const answer = it.t === "mc" ? it.o[it.a] : it.a.map(esc).join(" · ");
  return `<div class="verdict ${v.ok ? (v.accent ? "close" : "ok") : "no"}">
    <h3>${v.ok ? (v.accent ? "Certo, mas cuidado com o acento" : "Correto!") : "Não foi dessa vez"}</h3>
    ${!v.ok || v.accent ? `<p class="answer">${v.accent ? esc(v.accent) : answer}</p>` : ""}
    ${v.ai && v.ai.feedback ? `<p class="expl">${esc(v.ai.feedback)}</p>` : ""}
    ${v.ai && !v.ok && v.ai.fixed && norm(v.ai.fixed) !== norm(d.input) ? `<p class="expl"><b>Your sentence, fixed:</b> ${esc(v.ai.fixed)}</p>` : ""}
    <p class="expl">${it.x}</p>
    ${v.card ? `<div class="cards-added">${I.card1} Saved as a flashcard</div>` : ""}
    ${it.t !== "mc" ? `<div>${playBtn(it.t === "fill" ? stripHtml(it.q).replace(/_{2,}/, it.a[0]).replace(/\s*\([^)]*\)/g, "") : it.a[0], "ans-" + d.i)}</div>` : ""}
  </div>`;
}
function screenDrill() {
  const d = S.drill; if (!d) return "";
  const l = LESSON[d.lessonId];
  if (d.i >= d.items.length) return drillResults();
  const it = d.items[d.i];
  const pct = Math.round(100 * d.i / d.items.length);
  const q = it.t === "fill" ? it.q.replace(/_{2,}/, '<span class="blank"></span>') : it.q;
  let input = "";
  if (it.t === "mc") input = `<div class="opts">${it.o.map((o, k) => { const cls = d.phase === "answered" ? (k === it.a ? "right" : (d.verdict && d.verdict.chosen === k ? "wrong" : "")) : ""; return `<button class="opt ${cls}" data-act="opt" data-i="${k}" ${d.phase === "answered" ? "disabled" : ""}>${o}</button>`; }).join("")}</div>`;
  else if (it.t === "fill") input = `<input id="drill-input" class="answer-input" type="text" lang="pt-BR" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" enterkeyhint="done" placeholder="Sua resposta" value="${esc(d.phase === "answered" ? d.input : "")}" ${d.phase !== "ask" ? "disabled" : ""}>`;
  else input = `<textarea id="drill-input" class="answer-input" lang="pt-BR" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="${it.t === "shadow" ? "Repita a frase em voz alta (ditado)…" : "Fale (ditado) ou digite…"}" ${d.phase !== "ask" ? "disabled" : ""}>${esc(d.phase !== "ask" ? d.input : "")}</textarea>
    <div class="dictate-hint">${I.mic}<span>Use the microphone on the Portuguese keyboard.</span></div>`;
  if (it.t !== "mc") {
    const micOn = !!Mic.mode() && (d.phase === "ask" || d.rec);
    input = input.replace(/\s*<div class="dictate-hint">[\s\S]*<\/div>\s*$/, "");
    input = micOn
      ? `<div class="answer-row">${input}<button class="mic-btn ${d.rec ? "rec" : ""}" id="drill-mic" data-act="drill-mic" aria-label="${d.rec ? "Parar" : "Falar"}" ${d.rec === "busy" ? "disabled" : ""}>${d.rec === "busy" ? '<span class="typing"><i></i><i></i><i></i></span>' : d.rec ? I.stop : I.mic}</button></div>
        <div class="dictate-hint">${I.mic}<span>${d.rec === "rec" ? "Listening. Tap the square when you finish." : d.rec === "busy" ? "Transcrevendo…" : "Tap the mic and say your answer, or type it."}</span></div>`
      : input + (it.t === "fill" || d.phase !== "ask" ? "" : `<div class="dictate-hint">${I.mic}<span>${IN_CLAUDE ? "Use the microphone on the Portuguese keyboard." : "Type, or use the Portuguese keyboard's microphone."}</span></div>`);
  }
  let foot;
  if (d.phase === "answered") foot = `<button class="btn btn-primary btn-block" data-act="next">Continuar</button>`;
  else if (d.phase === "checking") foot = `<button class="btn btn-primary btn-block" disabled>Verificando…</button>`;
  else if (d.phase === "self") foot = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><button class="btn btn-ghost" data-act="self" data-id="0">Errei</button><button class="btn btn-primary" data-act="self" data-id="1">Acertei</button></div>`;
  else foot = it.t === "mc" ? `<p class="note" style="text-align:center">Toque numa opção</p>` : `<button class="btn btn-primary btn-block" data-act="check">Verificar</button>`;
  return `<div class="screen">
  <div class="screen-head"><div class="wrap"><button class="icon-btn" data-act="close" aria-label="Fechar">${I.close}</button>
    <div class="progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div>
    <span class="mono" style="min-width:44px;text-align:right">${d.i + 1}/${d.items.length}</span></div></div>
  <div class="screen-body"><div class="wrap">
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span class="mono drill-kind">${KIND[it.t]}</span><span class="pill">${esc(l.title)}</span>${d.generated ? `<span class="pill pill-ipe">${I.spark.replace("<svg ", '<svg width="12" height="12" ')} IA</span>` : ""}</div>
    <p class="drill-q">${q}</p>
    ${it.t === "shadow" ? `<div class="err-actions">${playBtn(stripHtml(it.q), "shadow-" + d.i, "Ouvir")}<button class="tool" data-act="say-slow" data-say="${esc(stripHtml(it.q))}" data-play-key="shadows-${d.i}">${I.slow} Devagar</button></div>` : ""}
    ${input}
    ${verdictHTML(d, it)}
  </div></div>
  <div class="screen-foot"><div class="wrap">${foot}</div></div>
</div>`;
}
function drillResults() {
  const d = S.drill, l = LESSON[d.lessonId];
  const ok = d.results.filter(Boolean).length, n = d.results.length || 1;
  const pct = Math.round(100 * ok / n);
  return `<div class="screen">${head(l.title, "Resultado", "", "close", I.close)}
  <div class="screen-body"><div class="wrap">
    <div class="result-big"><span class="mono muted">Acertos</span><span class="num">${pct}%</span><span class="muted">${ok} de ${d.results.length} · +${d.xp} XP${d.cards ? ` · ${d.cards} ${d.cards === 1 ? "cartão novo" : "cartões novos"}` : ""}</span></div>
    ${pct < 80 ? `<div class="nudge">Below 80%: reread the rules, then run it again. Your misses are already in your flashcards.</div>` : `<div class="nudge" style="background:var(--good-soft)">Solid. Try it live in a conversation to make it automatic.</div>`}
  </div></div>
  <div class="screen-foot"><div class="wrap" style="grid-template-columns:1fr 1fr">
    <button class="btn btn-ghost" data-act="drill-again">De novo</button>
    ${AI.ok ? `<button class="btn btn-primary" data-act="gen" data-id="${l.id}" ${S.gen[l.id] ? "disabled" : ""}>${S.gen[l.id] ? "Gerando…" : "Novos exercícios (IA)"}</button>` : `<button class="btn btn-primary" data-act="close">Concluir</button>`}
  </div></div>
</div>`;
}

/* ---------- review ---------- */
function startReview(deck) {
  const due = dueCards(deck).slice(0, 40);
  if (!due.length) { toast("Nada para revisar agora."); return; }
  S.review = { queue: due.map(c => c.id), i: 0, flipped: false, xp: 0, again: new Set(), counts: [0, 0, 0, 0] };
  openScreen({ type: "review" });
}
function screenReview() {
  const r = S.review; if (!r) return "";
  while (r.i < r.queue.length && !Store.cards.get(r.queue[r.i])) r.i++;
  if (r.i >= r.queue.length) {
    const tot = r.counts.reduce((a, b) => a + b, 0);
    return `<div class="screen">${head("Revisão concluída", "", "", "close", I.close)}<div class="screen-body"><div class="wrap">
      <div class="result-big"><span class="mono muted">Revisados</span><span class="num">${tot}</span><span class="muted">+${r.xp} XP · ${r.counts[0]} de novo · ${r.counts[2] + r.counts[3]} bem</span></div>
      ${dueCards().length ? `<div class="nudge">${dueCards().length} more ${dueCards().length === 1 ? "card is" : "cards are"} due.</div>` : `<div class="nudge" style="background:var(--good-soft)">All caught up. New cards appear as you practice.</div>`}
    </div></div><div class="screen-foot"><div class="wrap"><button class="btn btn-primary btn-block" data-act="close">Concluir</button></div></div></div>`;
  }
  const c = Store.cards.get(r.queue[r.i]);
  const pct = Math.round(100 * r.i / r.queue.length);
  const l = c.lesson && LESSON[c.lesson];
  return `<div class="screen">
  <div class="screen-head"><div class="wrap"><button class="icon-btn" data-act="close" aria-label="Fechar">${I.close}</button>
    <div class="progress"><i style="width:${pct}%"></i></div><span class="mono" style="min-width:44px;text-align:right">${r.i + 1}/${r.queue.length}</span></div></div>
  <div class="screen-body"><div class="wrap">
    <div class="flash"><div class="flash-inner" ${r.flipped ? "" : 'data-act="flip" role="button" tabindex="0" aria-label="Mostrar resposta"'}>
      ${tiles(seedOf(c.id), 3, 3, 1, "tiles-bg")}
      <div class="chips"><span class="pill pill-azul">${DECKS[c.deck] ? DECKS[c.deck].label : "Cartão"}</span>${c.es ? '<span class="pill pill-warn">ES</span>' : ""}${l ? `<span class="pill">${esc(l.title)}</span>` : ""}</div>
      <div class="flash-front">${esc(c.front)}</div>
      ${r.flipped ? `<div class="flash-back"><div class="ans">${esc(c.back)}</div>
        ${c.note ? `<div class="muted" style="font-size:14.5px">${esc(c.note)}</div>` : ""}
        ${c.source ? `<div class="src">Você disse: “${esc(c.source)}”</div>` : ""}
        <div class="err-actions">${playBtn(speakable(c.back), "rev-" + c.id)}${l ? `<button class="btn btn-sm btn-ghost" data-act="lesson" data-id="${l.id}">Aula</button>` : ""}</div></div>`
        : `<p class="note">Answer out loud, then tap to check.</p>`}
    </div></div>
  </div></div>
  <div class="screen-foot"><div class="wrap">${r.flipped
    ? `<div class="rate">${["De novo", "Difícil", "Bom", "Fácil"].map((lab, k) => `<button class="r${k}" data-act="rate" data-id="${k}">${lab}<small>${schedule(c, k, true)}</small></button>`).join("")}</div>`
    : `<button class="btn btn-primary btn-block" data-act="flip">Mostrar resposta</button>`}</div></div>
</div>`;
}

/* ---------- connections: API keys for the installed app ---------- */
function screenConnect() {
  const ks = S.keyStatus || {};
  const row = (id, name, what, placeholder, link, linkLabel) => {
    const st = ks[id];
    return `<div class="card" style="display:grid;gap:10px">
      <div><h2 style="font-size:19px">${name}</h2><p class="note">${what}</p></div>
      ${Keys.has(id) ? `<div class="status-line ok">${I.check} Saved: <span style="font-family:var(--f-mono);font-weight:500">${esc(Keys.masked(id))}</span></div>` : ""}
      <div class="key-row"><input id="key-${id}" type="password" class="answer-input" style="padding:11px 12px" placeholder="${Keys.has(id) ? "Paste a new key to replace it" : placeholder}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="${name} API key"><button class="btn btn-sm btn-primary" data-act="key-save" data-id="${id}">Salvar</button></div>
      ${st ? `<div class="status-line ${st.state}">${st.state === "ok" ? I.check : st.state === "bad" ? I.warn : ""}<span>${esc(st.msg)}</span></div>` : ""}
      <div style="display:flex;gap:6px 14px;flex-wrap:wrap;align-items:center"><a class="link-row" href="${link}" target="_blank" rel="noopener">${linkLabel} ${I.arrow.replace("<svg ", '<svg width="16" height="16" ')}</a>
        ${Keys.has(id) ? `<button class="tool" data-act="key-test" data-id="${id}">Testar</button><button class="tool" style="color:var(--bad)" data-act="key-del" data-id="${id}">Remover</button>` : ""}</div>
    </div>`;
  };
  return `<div class="screen">${head("Conexões", "Claude, voices and microphone", "", "close", I.close)}
  <div class="screen-body"><div class="wrap">
    <div class="banner info">${I.key}<div>Keys are stored only on this iPhone and are sent only to the company they belong to. Each one bills your own account.</div></div>
    ${row("anthropic", "Claude (Anthropic)", "Required for conversations. Plays the officials and writes the corrections, hints and new exercises. Roughly 3–5 US cents per answer.", "sk-ant-…", "https://console.anthropic.com/settings/keys", "Get an Anthropic API key")}
    ${row("openai", "OpenAI", "Recommended. Turns on the in-app microphone (your Spanish words are kept as you said them) and gives the officials natural Brazilian voices.", "sk-…", "https://platform.openai.com/api-keys", "Get an OpenAI API key")}
    ${row("elevenlabs", "ElevenLabs", "Optional. The most realistic voices. Brazilian voices you add from the ElevenLabs Voice Library appear under Progresso → Ajustes → Voices.", "ElevenLabs API key", "https://elevenlabs.io/app/settings/api-keys", "Get an ElevenLabs API key")}
    <details class="howto card"><summary>How to get an Anthropic key on your iPhone</summary><ol>
      <li>Open console.anthropic.com in Safari and sign in. It's separate from your Claude subscription.</li>
      <li>Under Billing, add a few dollars of credit.</li>
      <li>Under Settings → API Keys, tap Create Key and copy it.</li>
      <li>Come back here, paste it in the Claude box and tap Salvar.</li>
    </ol></details>
  </div></div>
</div>`;
}
function rerenderConnect() { const t = topScreen(); if (t && t.type === "connect") renderScreen(); }
async function testKey(id) {
  S.keyStatus[id] = { state: "wait", msg: "Testing…" }; rerenderConnect();
  try {
    if (id === "anthropic") {
      AI.refresh();
      const r = await AI.text("Responda apenas com a palavra: ok", { modelTier: "quick", cache: false });
      S.keyStatus[id] = { state: "ok", msg: "Connected. Claude answered “" + r.text.slice(0, 30) + "”." };
    } else if (id === "openai") {
      Cloud.initAudio();
      const url = await Cloud.fetchAudio("Olá! Esta é uma das vozes da OpenAI.", { provider: "openai", persona: null });
      Cloud.audio.src = url; Cloud.audio.play().catch(() => {});
      S.keyStatus[id] = { state: "ok", msg: "Connected. The microphone and OpenAI voices are on." };
    } else {
      const vs = await Cloud.loadElVoices(true);
      const br = vs.filter(v => Cloud.isBrazilian(v)).length;
      S.keyStatus[id] = { state: "ok", msg: `Connected. ${vs.length} voices in your account, ${br} Brazilian.` };
    }
  } catch (e) {
    console.warn("key test failed", e);
    S.keyStatus[id] = { state: "bad", msg: id === "anthropic" ? errMsg(e) : (e && e.status === 401 ? "The key was rejected. Check that you copied all of it." : cloudErr(e)) };
  }
  AI.refresh(); rerenderConnect(); updateHeader();
}

/* ---------- settings pieces ---------- */
function connectionsSetting() {
  if (IN_CLAUDE) return "";
  const st = k => Keys.has(k) ? "on" : "off";
  return `<div class="setting"><div class="toggle-row"><span><b>Conexões</b><br><span class="s-help">Claude ${st("anthropic")} · OpenAI ${st("openai")} · ElevenLabs ${st("elevenlabs")}</span></span><button class="btn btn-sm btn-soft" data-act="connect">Abrir</button></div></div>`;
}
function shortName(p) { return p.id === "coach" ? "Narrador" : p.name.replace(/^(Prefeita|Prefeito|Vereadora|Vereador|Dona)\s+/, "").split(" ").slice(0, 2).join(" "); }
function voiceAvatar(p) { return p.id === "coach" ? `<div class="avatar sm" style="background:var(--surface-2)">${tiles(2, 2, 2, 1)}</div>` : avatar(p, "sm"); }
function voiceSettings() {
  const prov = Cloud.provider();
  const personas = [{ id: "coach", name: "Narrador (aulas e cartões)", gender: null }, ...SCENARIOS.map(s => s.persona)];
  let html = `<div class="setting"><span class="s-label">Voices</span>`;
  if (!IN_CLAUDE) {
    const want = P.voiceProvider || "auto";
    html += `<div class="seg">${[["auto", "Automático", true], ["device", "iPhone", true], ["openai", "OpenAI", Keys.has("openai")], ["elevenlabs", "ElevenLabs", Keys.has("elevenlabs")]].map(([k, l, en]) => `<button data-act="set-vprov" data-id="${k}" aria-pressed="${want === k}" ${en ? "" : "disabled"}>${l}</button>`).join("")}</div>
      <span class="s-help">Playing now: <b>${{ device: "iPhone voices", openai: "OpenAI voices", elevenlabs: "ElevenLabs voices" }[prov]}</b>.${!Keys.has("openai") && !Keys.has("elevenlabs") ? ` Add an OpenAI or ElevenLabs key in <button class="tool" style="height:auto;padding:0" data-act="connect">Conexões</button> for natural Brazilian voices.` : ""}</span>`;
  }
  if (prov === "device") {
    const pv = Voice.list;
    html += !Voice.ok ? `<span class="s-help">This browser can't speak. Text is shown instead.</span>`
      : !pv.length ? `<span class="s-help">No Portuguese voice found on this device yet. On iPhone: Settings → Accessibility → Spoken Content → Voices → Portuguese (Brazil), download a voice, then reopen the app.</span>`
      : `<span class="s-help">${pv.length} Portuguese ${pv.length === 1 ? "voice" : "voices"} on this device${Voice.european ? " (European Portuguese only; download a Brazilian voice in iPhone Settings)" : ""}. Voices marked Enhanced or Premium sound most natural.</span>
        <div class="list" style="gap:8px">${personas.map(p => `<div class="voice-row">${voiceAvatar(p)}
          <select data-set="voice" data-prov="device" data-id="${p.id}" aria-label="Voz de ${esc(p.name)}"><option value="">${esc(shortName(p))} · automática</option>${pv.map(v => `<option value="${esc(v.voiceURI)}" ${P.voiceMap && P.voiceMap[p.id] === v.voiceURI ? "selected" : ""}>${esc(shortName(p))}: ${esc(Voice.label(v))}</option>`).join("")}</select>
          <button class="icon-btn" data-act="test-voice" data-id="${p.id}" data-play-key="test-${p.id}" aria-label="Testar voz">${I.play}</button></div>`).join("")}</div>`;
  } else {
    if (prov === "elevenlabs" && !Cloud.elVoices) {
      Cloud.loadElVoices().then(() => softRender()).catch(e => toast(cloudErr(e)));
      html += `<span class="s-help">Loading your ElevenLabs voices…</span>`;
    }
    const opts = Cloud.voiceOptions(prov), map = (P.voiceMaps && P.voiceMaps[prov]) || {};
    const labelOf = id => { const o = opts.find(x => x.id === id); return o ? o.label : id; };
    html += (prov === "elevenlabs"
      ? `<span class="s-help">Voices marked BR are Brazilian. Add more from the <a href="https://elevenlabs.io/app/voice-library" target="_blank" rel="noopener">ElevenLabs Voice Library</a>, then reopen this screen.</span>`
      : `<span class="s-help">Each official speaks with a different Brazilian voice. Change any of them here.</span>`) +
      `<div class="list" style="gap:8px">${personas.map(p => { const auto = Cloud.voiceId(prov, p.id, p.gender); return `<div class="voice-row">${voiceAvatar(p)}
        <select data-set="voice" data-prov="${prov}" data-id="${p.id}" aria-label="Voz de ${esc(p.name)}"><option value="">${esc(shortName(p))} · automática${auto ? " (" + esc(labelOf(auto)) + ")" : ""}</option>${opts.map(o => `<option value="${esc(o.id)}" ${map[p.id] === o.id ? "selected" : ""}>${esc(shortName(p))}: ${esc(o.label)}</option>`).join("")}</select>
        <button class="icon-btn" data-act="test-voice" data-id="${p.id}" data-play-key="test-${p.id}" aria-label="Testar voz">${I.play}</button></div>`; }).join("")}</div>`;
  }
  return html + `</div>`;
}
function dictationSetting() {
  const m = Mic.mode();
  if (m) return `<div class="setting"><span class="s-label">Microphone</span><span class="s-help">${m === "openai" ? "In-app microphone is on. Your answers are transcribed by OpenAI, which keeps Spanish words exactly as you said them so the coach can catch them." : "In-app microphone uses the iPhone's speech recognition. For more faithful transcripts (Spanish words included), add an OpenAI key in Conexões."}</span></div>`;
  return `<div class="setting"><span class="s-label">Dictation</span>
    <details class="howto"><summary>Set up Portuguese dictation on iPhone</summary><ol>
      <li>Settings → General → Keyboard → Keyboards → Add New Keyboard → <b>Português (Brasil)</b>.</li>
      <li>Turn on <b>Enable Dictation</b> on the same screen.</li>
      <li>Tap the answer box, switch keyboards with the globe key, tap the microphone, and speak. Tap it again to stop.</li>
      <li>Don't fix the transcript before sending. The coach reads Spanish words and Spanish-sounding pronunciation in it.</li>
    </ol></details>${IN_CLAUDE ? "" : `<span class="s-help">Add an OpenAI key in Conexões to talk with an in-app microphone instead.</span>`}</div>`;
}

/* ---------- drills: microphone ---------- */
async function drillMic() {
  const d = S.drill; if (!d) return;
  if (!d.rec) {
    if (d.phase !== "ask") return;
    Voice.stop();
    try { await Mic.start(); } catch (e) { console.warn("mic start", e); toast(micErr(e)); return; }
    if (S.drill !== d) { Mic.cancel(); return; }
    d.rec = "rec"; renderScreen();
  } else if (d.rec === "rec") {
    d.rec = "busy"; renderScreen();
    let text = "", failed = false;
    try { text = await Mic.stop(); } catch (e) { failed = true; console.warn("mic stop", e); toast(micErr(e)); }
    if (S.drill !== d) return;
    d.rec = null; renderScreen();
    if (!text) { if (!failed) toast("Não ouvi nada. Tente de novo."); return; }
    const el = $("#drill-input"); if (el) el.value = text;
    checkDrill();
  }
}

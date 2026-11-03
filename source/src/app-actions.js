/* ================= actions ================= */
function personaById(id) {
  if (!id || id === "coach") return null;
  for (const s of SCENARIOS) if (s.persona.id === id) return s.persona;
  if (S.custom && S.custom.persona.id === id) return S.custom.persona;
  if (S.convo && S.convo.scenario.persona.id === id) return S.convo.scenario.persona;
  return null;
}
function sampleLine(p) { return `Bom dia! Aqui é ${p.name}, ${p.role.charAt(0).toLowerCase() + p.role.slice(1)}. Vamos conversar sobre a certificação?`; }
function refreshCardList() { const el = $("#card-list"); if (el) el.innerHTML = cardList(); else renderTab(); }
function rerenderHere() {
  const t = topScreen();
  if (!t) renderTab(); else if (t.type === "convo") renderMsgs(false); else renderScreen();
}
function saveFreeInputs() { const w = $("#free-who"), x = $("#free-what"); if (w) S.free.who = w.value; if (x) S.free.what = x.value; }
async function createFree() {
  saveFreeInputs();
  const f = S.free; if (f.busy) return;
  if (!f.who.trim() && !f.what.trim()) { toast("Describe who you're meeting first."); return; }
  f.busy = true; renderScreen();
  try {
    const d = await AI.json(freePrompt(f.who, f.what, f.gender), { modelTier: "quick", cache: false }) || {};
    const targets = (Array.isArray(d.targets) ? d.targets : []).filter(t => LESSON[t]).slice(0, 3);
    S.custom = {
      id: "livre-" + uid(), level: 2,
      title: "Tema livre: " + String(d.role || f.who || "reunião").slice(0, 60),
      en: (f.what || "Custom meeting").slice(0, 120),
      persona: { id: "livre-" + f.gender, name: String(d.name || (f.gender === "f" ? "Mariana Souza" : "Carlos Andrade")).slice(0, 60), role: String(d.role || f.who || "Gestor público").slice(0, 80), gender: f.gender, pitch: 1, rate: 1, tone: String(d.tone || "professional and courteous").slice(0, 300) },
      setup: String(d.setup || f.what || "").slice(0, 400), goal: "Hold the conversation on your own topic.",
      targets: targets.length ? targets : ["register", "subj-present"],
      vocab: (Array.isArray(d.vocab) ? d.vocab : []).filter(v => Array.isArray(v) && v.length >= 2).slice(0, 6).map(v => [String(v[0]), String(v[1])]),
      opening: String(d.opening || "Bom dia! Em que posso ajudar?").slice(0, 300)
    };
    f.busy = false;
    S.stack[S.stack.length - 1] = { type: "brief", id: S.custom.id };
    renderScreen();
  } catch (e) { f.busy = false; toast(errMsg(e)); renderScreen(); }
}
function addStarter(id) {
  const st = STARTERS.find(s => s.id === id); if (!st || (P.starters || {})[id]) return;
  P.starters = { ...(P.starters || {}), [id]: true }; Store.save();
  const now = Date.now();
  st.cards.forEach(([f, b], k) => {
    const cid = "s-" + id + "-" + k; if (Store.cards.has(cid)) return;
    Store.putCard({ id: cid, deck: st.deck, front: f, back: b, note: "", cat: st.lesson, lesson: st.lesson, source: "", es: /^ES /.test(f), origin: "coleção", created: now, due: now + Math.floor(k / 10) * DAY, interval: 0, ease: 2.5, reps: 0, lapses: 0, misses: 0 });
  });
  toast(`${st.cards.length} cartões adicionados (10 por dia).`);
  renderTab(); updateHeader();
}
function rateCard(k) {
  const r = S.review; if (!r) return;
  const c = Store.cards.get(r.queue[r.i]); if (!c) { r.i++; renderScreen(); return; }
  Store.putCard(schedule(c, k));
  r.counts[k]++; r.xp += 2; addXP(2);
  if (k === 0 && !r.again.has(c.id)) { r.again.add(c.id); r.queue.push(c.id); }
  r.i++; r.flipped = false; Voice.stop(); renderScreen();
}
function doReset() {
  for (const id of [...Store.cards.keys()]) Store.deleteCard(id);
  const keep = {}; ["address", "myName", "myRole", "explainLang", "depth", "rate", "hideText", "autoplay", "voiceMap", "setupDone"].forEach(k => keep[k] = P[k]);
  P = { ...JSON.parse(JSON.stringify(DEFAULT_PROFILE)), ...keep };
  Store.save(); S.confirmReset = false; toast("Progresso apagado."); render();
}
async function openPerms() {
  try {
    const p = await window.claude.use("permissions"); if (!p) throw 0;
    await p.manage();
    const st = await p.state("sample");
    if (st === "granted") toast("Allowed. Reload the page to turn the tutor back on.");
  } catch (e) { toast("Use this page's Permissions menu to allow Claude."); }
}
function act(a, el) {
  const id = el.dataset.id, i = el.dataset.i !== undefined ? Number(el.dataset.i) : null;
  const c = S.convo;
  switch (a) {
    case "tab": if (location.hash.slice(1) !== id) location.hash = id; else { S.tab = id; render(); } { const vw = $("#view"); if (vw) vw.scrollTop = 0; } break;
    case "brief": openScreen({ type: "brief", id }); break;
    case "free": openScreen({ type: "free" }); break;
    case "free-gender": saveFreeInputs(); S.free.gender = id; renderScreen(); break;
    case "free-create": createFree(); break;
    case "start":
      if (AI.kind === "api" && !AI.ok) { toast("Connect Claude first to start a conversation."); openScreen({ type: "connect" }); break; }
      startConvo(id); break;
    case "connect": openScreen({ type: "connect" }); break;
    case "key-save": {
      const inp = $("#key-" + id), val = inp ? inp.value.trim() : "";
      if (!val) { toast("Paste the key first."); break; }
      Keys.set(id, val); if (id === "elevenlabs") Cloud.elVoices = null;
      AI.refresh(); updateHeader(); testKey(id); break;
    }
    case "key-test": testKey(id); break;
    case "key-del": Keys.set(id, ""); S.keyStatus[id] = null; if (id === "elevenlabs") Cloud.elVoices = null; AI.refresh(); renderScreen(); updateHeader(); toast("Key removed."); break;
    case "set-vprov": P.voiceProvider = id; Store.save(); Voice.stop(); rerenderHere(); break;
    case "mic": micStart(); break;
    case "mic-stop": micStop(); break;
    case "mic-cancel": micCancel(); break;
    case "drill-mic": drillMic(); break;
    case "again": S.convo = null; S.stack = []; startConvo(id); break;
    case "close": closeScreen(); break;
    case "summary-close": S.convo = null; closeAll(); break;
    case "review-from-summary": S.convo = null; S.stack = []; syncLayers(false); render(); startReview("all"); break;
    case "convo-exit": case "convo-end": endConvo(); break;
    case "send": sendAnswer(); break;
    case "hint": askHint(); break;
    case "play-npc": if (c) sayAs(c.turns[i].text, c.scenario.persona, "npc-" + i); break;
    case "slow-npc": if (c) sayAs(c.turns[i].text, c.scenario.persona, "npcs-" + i, 0.75); break;
    case "reveal": if (c && c.turns[i]) { c.turns[i].shown = true; renderMsgs(false); } break;
    case "translate": if (c) translateTurn(i); break;
    case "retry-npc": if (c) { runPersona(i); renderMsgs(false); } break;
    case "retry-coach": if (c) { runCoach(i); renderMsgs(false); } break;
    case "toggle-hide": P.hideText = !P.hideText; Store.save(); renderMsgs(false); toast(P.hideText ? "Modo escuta: textos ocultos" : "Textos visíveis"); break;
    case "say": sayAs(el.dataset.say, personaById(el.dataset.persona), el.dataset.playKey || "say-" + hash(el.dataset.say || "")); break;
    case "say-slow": sayAs(el.dataset.say, null, el.dataset.playKey, 0.75); break;
    case "lesson": if (LESSON[id]) openScreen({ type: "lesson", id }); break;
    case "drill": startDrill(id); break;
    case "gen": genDrills(id); break;
    case "opt": checkDrill(i); break;
    case "check": checkDrill(); break;
    case "next": { const d = S.drill; if (!d) break; if (d.rec) { Mic.cancel(); d.rec = null; } d.i++; d.phase = "ask"; d.verdict = null; d.input = ""; d.aiErr = null; Voice.stop(); renderScreen(); autoplayShadow(); const b = $("#screen-root .screen-body"); if (b) b.scrollTop = 0; break; }
    case "self": { const d = S.drill; if (!d) break; d.phase = "ask"; finishItem(id === "1"); break; }
    case "drill-again": { const d = S.drill; if (d) startDrill(d.lessonId, d.generated ? shuffle(d.items) : undefined); break; }
    case "review": startReview(S.deck); break;
    case "flip": { const r = S.review; if (!r || r.flipped) break; r.flipped = true; renderScreen(); const cd = Store.cards.get(r.queue[r.i]); if (cd && P.autoplay) sayAs(speakable(cd.back), null, "rev-" + cd.id); break; }
    case "rate": rateCard(Number(id)); break;
    case "deck": S.deck = S.deck === id ? "all" : id; S.openCard = null; renderTab(); break;
    case "card-open": S.openCard = S.openCard === id ? null : id; S.confirmDel = null; refreshCardList(); break;
    case "card-del": S.confirmDel = id; refreshCardList(); break;
    case "card-del-no": S.confirmDel = null; refreshCardList(); break;
    case "card-del-yes": Store.deleteCard(id); S.confirmDel = null; S.openCard = null; toast("Cartão apagado."); renderTab(); updateHeader(); break;
    case "starter-add": addStarter(id); break;
    case "setup-done": P.setupDone = true; Store.save(); renderTab(); toast("Tudo pronto. Boa prática!"); break;
    case "set-address": P.address = id; Store.save(); rerenderHere(); break;
    case "set-lang": P.explainLang = id; Store.save(); rerenderHere(); break;
    case "set-depth": P.depth = id; Store.save(); rerenderHere(); break;
    case "toggle": P[id] = !P[id]; Store.save(); rerenderHere(); break;
    case "test-voice": { const p = personaById(id); sayAs(p ? sampleLine(p) : "Olá! Esta é a voz que lê as aulas e os cartões.", p, "test-" + id); break; }
    case "reset": S.confirmReset = true; renderTab(); break;
    case "reset-no": S.confirmReset = false; renderTab(); break;
    case "reset-yes": doReset(); break;
    case "perm": openPerms(); break;
    case "bar": S.barSel = S.barSel === i ? null : i; renderTab(); break;
  }
}

/* ================= events ================= */
document.addEventListener("click", e => {
  const el = e.target.closest("[data-act]");
  if (!el || el.disabled) return;
  act(el.dataset.act, el);
});
document.addEventListener("keydown", e => {
  const t = e.target;
  if (t.id === "answer" && e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); sendAnswer(); return; }
  if (t.id === "drill-input" && e.key === "Enter" && !e.shiftKey && !e.isComposing && S.drill && S.drill.phase === "ask") { e.preventDefault(); checkDrill(); return; }
  if ((e.key === "Enter" || e.key === " ") && t.matches && t.matches('[role="button"][data-act]')) { e.preventDefault(); act(t.dataset.act, t); }
});
document.addEventListener("input", e => {
  const t = e.target;
  if (t.id === "answer") { autoGrow(t); if (S.convo) S.convo.draft = t.value; const c = $("#composer"); if (c) c.classList.toggle("has-text", !!t.value.trim()); }
  else if (t.id === "card-search") { S.q = t.value; refreshCardList(); }
  else if (t.id === "set-rate") { const v = $("#rate-val"); if (v) v.textContent = Math.round(Number(t.value) * 100) + "%"; }
});
document.addEventListener("change", e => {
  const t = e.target, k = t.dataset && t.dataset.set; if (!k) return;
  if (k === "myName" || k === "myRole") { P[k] = t.value.trim().slice(0, 140) || (k === "myRole" ? DEFAULT_PROFILE.myRole : ""); Store.save(); }
  else if (k === "rate") { P.rate = clamp(Number(t.value) || 1, 0.7, 1.25); Store.save(); sayAs("Esta é a nova velocidade da fala.", null, "rate-test"); }
  else if (k === "voice") {
    const prov = t.dataset.prov || "device";
    if (prov === "device") { P.voiceMap = { ...(P.voiceMap || {}) }; if (t.value) P.voiceMap[t.dataset.id] = t.value; else delete P.voiceMap[t.dataset.id]; }
    else { P.voiceMaps = { ...(P.voiceMaps || {}) }; const m = { ...(P.voiceMaps[prov] || {}) }; if (t.value) m[t.dataset.id] = t.value; else delete m[t.dataset.id]; P.voiceMaps[prov] = m; }
    Store.save();
    const p = personaById(t.dataset.id);
    sayAs(p ? sampleLine(p) : "Olá! Esta é a voz do narrador.", p, "test-" + t.dataset.id);
  }
});
window.addEventListener("hashchange", () => {
  const h = location.hash.slice(1);
  if (TABS.some(x => x[0] === h)) { S.tab = h; if (S.stack.length && !S.stack.some(s => s.type === "convo")) closeAll(); else render(); { const vw = $("#view"); if (vw) vw.scrollTop = 0; } }
});

/* ================= boot ================= */
function boot(data) {
  shell();
  Store.loadLocal();
  const h = location.hash.slice(1);
  if (TABS.some(x => x[0] === h)) S.tab = h;
  render();
  Voice.init(() => { const t = topScreen(); if (t && t.type === "convo") renderMsgs(false); else if (!t) softRender(); });
  AI.init(() => { softRender(); const t = topScreen(); if (t && (t.type === "lesson" || t.type === "free")) renderScreen(); });
  Store.init(() => softRender());
  if (!IN_CLAUDE) Cloud.initAudio();
  if (Cloud.provider() === "elevenlabs") Cloud.loadElVoices().catch(() => {});
  document.addEventListener("visibilitychange", () => { if (document.hidden) { Voice.stop(); if (S.rec === "rec") micCancel(); } });
  if (data && data.convo && data.convo.scenario && Array.isArray(data.convo.turns)) {
    const cv = data.convo;
    cv.turns.forEach(t => {
      if (t.who === "npc" && t.state === "loading") { t.state = "error"; t.err = "Interrupted by an update. Tap Try again."; }
      if (t.who === "me" && t.fbState === "loading") { t.fbState = "error"; t.fbErr = "Interrupted by an update. Tap Try again."; }
    });
    S.convo = cv;
    if (String(cv.scenario.id).startsWith("livre-")) S.custom = cv.scenario;
    S.stack = [{ type: "convo", k: uid() }];
    syncLayers(false);
  }
}
try {
  const hot = window.claude && window.claude.hot;
  if (hot && typeof hot.snapshot === "function") hot.snapshot(() => ({ convo: S.convo && S.stack.some(s => s.type === "convo") ? JSON.parse(JSON.stringify(S.convo)) : null }));
} catch (e) { /* no hot reload */ }
(function start() {
  const hot = window.claude && window.claude.hot;
  if (hot && typeof hot.ready === "function") hot.ready(d => boot(d || {}));
  else boot((hot && hot.data) || {});
})();

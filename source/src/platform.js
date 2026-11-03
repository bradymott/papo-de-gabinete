/* ================= platform: installed app vs. inside Claude ================= */
const IN_CLAUDE = !!(window.claude && typeof window.claude.use === "function");
const STANDALONE_APP = !IN_CLAUDE && !!window.PAPO_STANDALONE;
const IS_INSTALLED = !!((window.matchMedia && matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true);
const IS_IOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

/* API keys live only in this device's storage and go only to the provider they belong to. */
const Keys = {
  v: {},
  load() { try { this.v = JSON.parse(localStorage.getItem("papo.keys") || "{}") || {}; } catch (e) { this.v = {}; } return this; },
  get(k) { return String(this.v[k] || "").trim(); },
  has(k) { return !!this.get(k); },
  set(k, val) { const s = String(val || "").trim(); if (s) this.v[k] = s; else delete this.v[k]; try { localStorage.setItem("papo.keys", JSON.stringify(this.v)); } catch (e) { /* storage blocked */ } },
  masked(k) { const s = this.get(k); return s ? s.slice(0, 7) + "…" + s.slice(-4) : ""; }
}.load();

/* ---------- Claude via the official Anthropic SDK (bundled as window.Anthropic) ---------- */
const ClaudeAPI = {
  client: null, clientKey: "",
  model: "claude-opus-5-5",
  ensure() {
    const key = Keys.get("anthropic");
    if (!key || !window.Anthropic) { this.client = null; return null; }
    if (!this.client || this.clientKey !== key) {
      this.client = new window.Anthropic({ apiKey: key, dangerouslyAllowBrowser: true, maxRetries: 2 });
      this.clientKey = key;
    }
    return this.client;
  },
  async call(prompt, opts = {}) {
    const client = this.ensure();
    if (!client) throw { code: "nokey" };
    const effort = opts.modelTier === "quick" ? "low" : "medium";
    let msg;
    try {
      const stream = client.beta.messages.stream({
        model: this.model,
        max_tokens: opts.maxTokens || 16000,
        betas: ["server-side-fallback-2026-07-01"],
        fallbacks: "default",
        output_config: { effort },
        messages: [{ role: "user", content: prompt }]
      }, opts.signal ? { signal: opts.signal } : undefined);
      if (opts.onText) stream.on("text", (delta, snapshot) => { try { opts.onText({ text: snapshot, delta }); } catch (e) { /* UI callback */ } });
      msg = await stream.finalMessage();
    } catch (e) { throw this.mapErr(e); }
    if (msg.stop_reason === "refusal") throw { code: "refused" };
    const text = msg.content.filter(b => b.type === "text").map(b => b.text).join("").trim();
    if (!text) throw { code: "empty_completion" };
    return { text, truncated: msg.stop_reason === "max_tokens" };
  },
  mapErr(e) {
    const A = window.Anthropic;
    if (!A || !e) return { code: "upstream_error" };
    if (e.code && !(e instanceof Error)) return e;
    if (e instanceof A.APIUserAbortError) return { code: "cancelled" };
    if (e instanceof A.AuthenticationError || e instanceof A.PermissionDeniedError) return { code: "bad_key" };
    if (e instanceof A.RateLimitError) return { code: "rate_limited" };
    if (e instanceof A.BadRequestError) return { code: "bad_request", message: e.message };
    if (e instanceof A.APIConnectionError) return { code: navigator.onLine === false ? "offline" : "upstream_error", message: e.message };
    if (e instanceof A.APIError) return { code: "upstream_error", message: e.message };
    return { code: "upstream_error", message: String(e.message || e) };
  }
};
function parseLooseJSON(t) {
  const s = String(t || "").trim();
  try { return JSON.parse(s); } catch (e) { /* try harder */ }
  const fence = s.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) { try { return JSON.parse(fence[1]); } catch (e) { /* continue */ } }
  const starts = ["{", "["].map(c => s.indexOf(c)).filter(i => i >= 0);
  const i = starts.length ? Math.min(...starts) : -1, j = Math.max(s.lastIndexOf("}"), s.lastIndexOf("]"));
  if (i >= 0 && j > i) { try { return JSON.parse(s.slice(i, j + 1)); } catch (e) { /* fall through */ } }
  throw { code: "invalid_json" };
}

/* ---------- realistic voices: OpenAI or ElevenLabs text-to-speech ---------- */
const OA_VOICES = [
  ["coral", "f"], ["nova", "f"], ["shimmer", "f"], ["sage", "f"], ["alloy", "f"],
  ["onyx", "m"], ["ash", "m"], ["echo", "m"], ["verse", "m"], ["ballad", "m"]
];
function silentWavURL() {
  const n = 800, buf = new ArrayBuffer(44 + n * 2), v = new DataView(buf);
  const w = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
  w(0, "RIFF"); v.setUint32(4, 36 + n * 2, true); w(8, "WAVE"); w(12, "fmt "); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, 16000, true); v.setUint32(28, 32000, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, "data"); v.setUint32(40, n * 2, true);
  return URL.createObjectURL(new Blob([buf], { type: "audio/wav" }));
}
function oaInstructions(p) {
  const base = "Speak natural Brazilian Portuguese with a native Brazilian accent (São Paulo). Never use a European Portuguese, Spanish or American accent. Conversational pace, like a real work meeting.";
  return p ? `${base} You are ${p.name}, ${p.role}. Personality: ${p.tone}.` : `${base} You are a clear, friendly Portuguese teacher reading an example sentence.`;
}
const Cloud = {
  audio: null, silent: "", unlocked: false, cache: new Map(), elVoices: null, elLoading: null,
  provider() {
    if (IN_CLAUDE) return "device";
    const want = P.voiceProvider || "auto";
    if (want === "device") return "device";
    if (want === "openai") return Keys.has("openai") ? "openai" : "device";
    if (want === "elevenlabs") return Keys.has("elevenlabs") ? "elevenlabs" : "device";
    return Keys.has("elevenlabs") ? "elevenlabs" : Keys.has("openai") ? "openai" : "device";
  },
  initAudio() {
    if (this.audio || IN_CLAUDE) return;
    this.audio = new Audio();
    this.audio.setAttribute("playsinline", "");
    this.audio.preload = "auto";
    try { if (navigator.audioSession) navigator.audioSession.type = "playback"; } catch (e) { /* older iOS */ }
    this.silent = silentWavURL();
    const unlock = () => {
      if (this.unlocked) return;
      this.unlocked = true;
      try {
        this.audio.src = this.silent;
        const p = this.audio.play();
        if (p && p.then) p.then(() => { if (this.audio.src === this.silent) this.audio.pause(); }).catch(() => { this.unlocked = false; });
      } catch (e) { this.unlocked = false; }
    };
    document.addEventListener("touchend", unlock, { capture: true });
    document.addEventListener("click", unlock, { capture: true });
  },
  async loadElVoices(force) {
    if (!Keys.has("elevenlabs")) return [];
    if (this.elVoices && !force) return this.elVoices;
    if (this.elLoading && !force) return this.elLoading;
    this.elLoading = (async () => {
      const res = await fetch("https://api.elevenlabs.io/v1/voices", { headers: { "xi-api-key": Keys.get("elevenlabs") } });
      if (!res.ok) throw { code: "tts_http", provider: "elevenlabs", status: res.status };
      const j = await res.json();
      this.elVoices = (j.voices || []).map(v => ({ id: v.voice_id, name: v.name, labels: v.labels || {}, description: v.description || "" }));
      return this.elVoices;
    })();
    try { return await this.elLoading; } finally { this.elLoading = null; }
  },
  isBrazilian(v) {
    const t = [v.labels.accent, v.labels.language, v.labels.description, v.name, v.description].join(" ").toLowerCase();
    return /brazil|brasil|portugu|pt-br/.test(t);
  },
  voiceOptions(provider) {
    if (provider === "openai") return OA_VOICES.map(([id, g]) => ({ id, label: id + (g === "f" ? " · feminina" : " · masculina") }));
    if (provider === "elevenlabs") return (this.elVoices || []).map(v => ({ id: v.id, label: v.name + (this.isBrazilian(v) ? " · BR" : "") + (v.labels.gender ? " · " + v.labels.gender : "") }));
    return [];
  },
  voiceId(provider, personaId, gender) {
    const map = (P.voiceMaps && P.voiceMaps[provider]) || {};
    if (map[personaId]) return map[personaId];
    const order = gender && PERSONA_ORDER[gender] ? Math.max(0, PERSONA_ORDER[gender].indexOf(personaId)) : 0;
    if (provider === "openai") {
      if (personaId === "coach") return "sage";
      const list = OA_VOICES.filter(v => v[1] === (gender || "f")).map(v => v[0]);
      return list[order % list.length];
    }
    if (provider === "elevenlabs") {
      const all = this.elVoices || []; if (!all.length) return null;
      const br = all.filter(v => this.isBrazilian(v));
      const base = br.length ? br : all;
      const g = gender === "m" ? "male" : "female";
      const same = base.filter(v => String(v.labels.gender || "").toLowerCase() === g);
      const pool = same.length ? same : base;
      return pool[(personaId === "coach" ? 0 : order) % pool.length].id;
    }
    return null;
  },
  async fetchAudio(text, opts) {
    const provider = opts.provider || this.provider();
    const p = opts.persona || null;
    const pid = p ? p.id : "coach", gender = p ? p.gender : (opts.gender || "f");
    if (provider === "elevenlabs" && !this.elVoices) await this.loadElVoices();
    const vid = this.voiceId(provider, pid, gender);
    if (!vid) throw { code: "no_voice", provider };
    const ck = provider + "|" + vid + "|" + text;
    if (this.cache.has(ck)) return this.cache.get(ck);
    let res;
    if (provider === "openai") {
      res = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: { "Authorization": "Bearer " + Keys.get("openai"), "Content-Type": "application/json" },
        body: JSON.stringify({ model: "gpt-4o-mini-tts", voice: vid, input: text, response_format: "mp3", instructions: oaInstructions(p) })
      });
    } else {
      res = await fetch("https://api.elevenlabs.io/v1/text-to-speech/" + encodeURIComponent(vid) + "?output_format=mp3_44100_128", {
        method: "POST",
        headers: { "xi-api-key": Keys.get("elevenlabs"), "Content-Type": "application/json", "Accept": "audio/mpeg" },
        body: JSON.stringify({ text, model_id: "eleven_multilingual_v2", voice_settings: { stability: 0.45, similarity_boost: 0.8 } })
      });
    }
    if (!res.ok) throw { code: "tts_http", provider, status: res.status, message: (await res.text().catch(() => "")).slice(0, 240) };
    const url = URL.createObjectURL(await res.blob());
    this.cache.set(ck, url);
    if (this.cache.size > 80) { const [k0, u0] = this.cache.entries().next().value; URL.revokeObjectURL(u0); this.cache.delete(k0); }
    return url;
  },
  async play(text, opts, isCurrent) {
    this.initAudio();
    const url = await this.fetchAudio(text, opts);
    if (!isCurrent()) return;
    const a = this.audio;
    a.onended = a.onerror = null;
    a.src = url;
    a.defaultPlaybackRate = a.playbackRate = opts.rate || 1;
    try { a.preservesPitch = true; } catch (e) { /* not supported */ }
    a.onended = () => { if (isCurrent()) opts.onend && opts.onend(); };
    a.onerror = () => { if (isCurrent()) opts.onend && opts.onend(); };
    await a.play();
  },
  stop() { if (this.audio) { try { this.audio.pause(); } catch (e) { /* ignore */ } } }
};
function cloudErr(e) {
  const who = e && e.provider === "elevenlabs" ? "ElevenLabs" : "OpenAI";
  if (e && e.code === "tts_http" && (e.status === 401 || e.status === 403)) return who + " rejected the key. Check it in Conexões.";
  if (e && e.code === "tts_http" && e.status === 429) return who + ": usage limit reached. Using the iPhone voice for now.";
  if (e && e.code === "no_voice") return "No ElevenLabs voice found. Add one in your ElevenLabs account.";
  if (e && e.name === "NotAllowedError") return "Tap a play button to hear the voice.";
  return "The realistic voice didn't load. Using the iPhone voice instead.";
}

/* ---------- microphone: record, then transcribe (OpenAI) or recognize on device ---------- */
const Mic = {
  state: "idle", active: null, t0: 0,
  mode() {
    if (IN_CLAUDE) return null;
    const canRec = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    if (canRec && Keys.has("openai")) return "openai";
    if (window.SpeechRecognition || window.webkitSpeechRecognition) return "browser";
    return null;
  },
  async start() {
    const m = this.mode();
    if (!m) throw { code: "no_mic" };
    if (this.state !== "idle") return;
    this.active = m; this.t0 = Date.now(); this.levels = [];
    if (m === "browser") {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      const sr = new SR();
      sr.lang = "pt-BR"; sr.continuous = true; sr.interimResults = true;
      this.final = ""; this.interim = ""; this.srErr = null;
      sr.onresult = e => { let f = "", n = ""; for (let i = 0; i < e.results.length; i++) { const r = e.results[i]; if (r.isFinal) f += r[0].transcript + " "; else n += r[0].transcript; } this.final = f; this.interim = n; };
      sr.onerror = e => { this.srErr = e.error; };
      this.srDone = new Promise(res => { sr.onend = () => res(); });
      sr.start(); this.sr = sr; this.state = "rec";
      return;
    }
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
    const type = ["audio/mp4", "audio/webm;codecs=opus", "audio/webm", "audio/ogg;codecs=opus"].find(t => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t)) || "";
    this.chunks = [];
    this.rec = new MediaRecorder(this.stream, type ? { mimeType: type } : undefined);
    this.rec.ondataavailable = e => { if (e.data && e.data.size) this.chunks.push(e.data); };
    this.rec.start(250);
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ac = new AC();
      const src = this.ac.createMediaStreamSource(this.stream);
      this.an = this.ac.createAnalyser(); this.an.fftSize = 512; src.connect(this.an);
    } catch (e) { this.an = null; }
    this.state = "rec";
  },
  level() {
    if (!this.an) return 0.15 + Math.random() * 0.25;
    const d = new Uint8Array(this.an.fftSize); this.an.getByteTimeDomainData(d);
    let s = 0; for (let i = 0; i < d.length; i++) { const x = (d[i] - 128) / 128; s += x * x; }
    return Math.min(1, Math.sqrt(s / d.length) * 5);
  },
  async stop() {
    if (this.state !== "rec") return "";
    this.state = "busy";
    try {
      if (this.active === "browser") {
        try { this.sr.stop(); } catch (e) { /* already stopped */ }
        await Promise.race([this.srDone, new Promise(r => setTimeout(r, 2500))]);
        if (this.srErr === "not-allowed" || this.srErr === "service-not-allowed") throw { code: "mic_denied" };
        return (this.final + " " + this.interim).replace(/\s+/g, " ").trim();
      }
      const rec = this.rec;
      const blob = await new Promise(res => {
        rec.onstop = () => res(new Blob(this.chunks, { type: rec.mimeType || "audio/mp4" }));
        try { rec.stop(); } catch (e) { res(new Blob(this.chunks, { type: rec.mimeType || "audio/mp4" })); }
      });
      this.release();
      if (blob.size < 1200) return "";
      return await this.transcribe(blob);
    } finally { this.release(); this.state = "idle"; }
  },
  cancel() {
    try { if (this.rec && this.rec.state !== "inactive") this.rec.stop(); } catch (e) { /* ignore */ }
    try { if (this.sr) this.sr.abort(); } catch (e) { /* ignore */ }
    this.release(); this.state = "idle";
  },
  release() {
    try { if (this.stream) this.stream.getTracks().forEach(t => t.stop()); } catch (e) { /* ignore */ }
    try { if (this.ac) this.ac.close(); } catch (e) { /* ignore */ }
    this.stream = null; this.ac = null; this.an = null; this.sr = null;
  },
  async transcribe(blob) {
    const ext = /mp4|m4a|aac/.test(blob.type) ? "m4a" : /ogg/.test(blob.type) ? "ogg" : "webm";
    const fd = new FormData();
    fd.append("file", blob, "resposta." + ext);
    fd.append("model", "gpt-4o-transcribe");
    fd.append("response_format", "json");
    fd.append("prompt", "Reunião de trabalho em português do Brasil sobre a Certificação What Works Cities, dados, metas e prefeituras. Transcreva exatamente o que a pessoa disse, sem corrigir a gramática. Se ela usar palavras do espanhol (pero, muy, entonces, ciudad, también), escreva-as em espanhol, como foram ditas.");
    const res = await fetch("https://api.openai.com/v1/audio/transcriptions", { method: "POST", headers: { "Authorization": "Bearer " + Keys.get("openai") }, body: fd });
    if (!res.ok) throw { code: "stt_http", status: res.status, message: (await res.text().catch(() => "")).slice(0, 240) };
    const j = await res.json();
    return String(j.text || "").trim();
  }
};
function micErr(e) {
  if (e && (e.name === "NotAllowedError" || e.code === "mic_denied")) return "Microphone access is off. Allow it in iPhone Settings, then try again.";
  if (e && e.code === "stt_http" && (e.status === 401 || e.status === 403)) return "OpenAI rejected the key. Check it in Conexões.";
  if (e && e.code === "stt_http" && e.status === 429) return "OpenAI usage limit reached. Type your answer for now.";
  if (e && e.code === "no_mic") return "Voice input isn't available here. Use keyboard dictation.";
  return "Couldn't transcribe that. Try again or type your answer.";
}

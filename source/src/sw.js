const VERSION = "papo-{{VERSION}}";
const SHELL = ["./", "./index.html", "./app.js?v={{VERSION}}", "./vendor/anthropic-sdk.js", "./manifest.webmanifest", "./icons/apple-touch-icon.png", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/favicon-32.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== "papo-fonts").map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    if (req.mode === "navigate") {
      e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put("./", copy)); return res; }).catch(() => caches.match("./")));
      return;
    }
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { if (res.ok && /\/(splash|icons)\//.test(url.pathname)) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; })));
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open("papo-fonts").then(async c => { const hit = await c.match(req); if (hit) return hit; const res = await fetch(req); if (res.ok || res.type === "opaque") c.put(req, res.clone()); return res; }));
  }
});

/* Muslin Studio service worker: keeps the app working offline.
   Raise the version number when you upload changed files so phones pick them up. */
const CACHE = 'muslin-studio-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './vendor/three.min.js',
  './vendor/jspdf.umd.min.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const put = (req, res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); return res; };

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // The page itself: try the network first so updates show up, fall back to the saved copy offline.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((res) => put('./index.html', res)).catch(() => caches.match('./index.html')));
    return;
  }
  // App files and Google Fonts: use the saved copy, fetch and save anything new.
  if (url.origin === location.origin || /(^|\.)(gstatic|googleapis)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => put(req, res))));
  }
});

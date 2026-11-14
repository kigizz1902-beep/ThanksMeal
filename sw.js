const CACHE_NAME = 'thanksmeal-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/thanksmeal/family-portraits.png',
  './assets/thanksmeal/table-empty.png',
  './assets/thanksmeal/title-family-table.png',
  './assets/thanksmeal/event-dad-cooking.png',
  './assets/thanksmeal/event-family-outing.png',
  './assets/thanksmeal/event-interruptions.png',
  './assets/thanksmeal/ui-icons.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

const cacheName = 'Boomerang-cache';
const cacheFiles = [
  '/',
  './index.html',
  './manifest.json',
  '../src/pages/Offline.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(cacheFiles))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request)
          .catch(() => caches.match('/offline.html'));
      })
  );
});

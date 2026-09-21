const CACHE_NAME = 'detektif-data-pwa-v5';
const ASSETS_TO_CACHE = [
  './',
  './game_detektif_data.html',
  './index.html',
  './manifest.json',
  './logo.png',
  './icon.svg',
  './icon-192.png',
  './icon-512.png'
];

// Install: Cache all essential core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate: Clean up old cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Cache first, fallback to network, then offline cache fallback
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback to game_detektif_data.html if navigating offline
        if (event.request.mode === 'navigate') {
          return caches.match('./game_detektif_data.html') || caches.match('./index.html');
        }
      });
    })
  );
});

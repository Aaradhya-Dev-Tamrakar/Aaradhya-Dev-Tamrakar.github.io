/* ==========================================================================
   Service Worker — Aaradhya Dev Tamrakar Portfolio (v30)
   Provides offline capability & asset caching for fast return visits.
   ========================================================================== */

const CACHE_NAME = 'aaradhya-portfolio-v30';

const STATIC_ASSETS = [
  './',
  './index.html',
  './about.html',
  './projects.html',
  './experience.html',
  './achievements.html',
  './journey.html',
  './contact.html',
  './privacy.html',
  './terms.html',
  './404.html',
  './site.webmanifest',
  './assets/css/style.css',
  './assets/js/script.js',
  './assets/images/photo.webp',
  './assets/images/og-image.jpg'
];

// Install: precache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Network-first for HTML, Cache-first for static assets
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip cross-origin requests like Google Analytics or external APIs
  if (url.origin !== self.location.origin) return;

  // HTML pages: Network-first, fallback to cache
  if (event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clonedResponse = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clonedResponse));
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./404.html')))
    );
    return;
  }

  // Static assets (CSS, JS, Images, Fonts): Cache-first, fallback to network
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clonedResponse = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clonedResponse));
        }
        return networkResponse;
      });
    })
  );
});

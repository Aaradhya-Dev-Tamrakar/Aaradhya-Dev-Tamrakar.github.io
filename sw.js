/* ==========================================================================
   Service Worker — Aaradhya Dev Tamrakar Portfolio (v46)
   Provides offline capability & asset caching for fast return visits.
   ========================================================================== */

const CACHE_NAME = 'aaradhya-portfolio-v46';

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
  './assets/js/modules/core.js',
  './assets/js/modules/tour.js',
  './assets/js/modules/cmdk.js',
  './assets/js/modules/ui.js',
  './assets/js/modules/access.js',
  './assets/js/modules/audio.js',
  './assets/js/modules/terminal.js',
  './assets/js/modules/haptics.js',
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

// Activate: purge old caches
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

// Fetch: Network-first for HTML, Cache-first for static assets
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Skip non-GET requests and cross-origin requests
  if (req.method !== 'GET' || url.origin !== location.origin) {
    return;
  }

  // HTML navigation requests: Network-first, fallback to cache
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((response) => {
          if (response.status === 200) {
            const resClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          }
          return response;
        })
        .catch(() => {
          return caches.match(req).then((cached) => cached || caches.match('./404.html'));
        })
    );
    return;
  }

  // Static assets (CSS, JS, images): Cache-first, fallback to network
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) {
        // Background revalidate
        fetch(req).then((response) => {
          if (response.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(req, response));
          }
        }).catch(() => {/* ignore offline network failures */ });
        return cached;
      }
      return fetch(req).then((response) => {
        if (response.status === 200) {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        }
        return response;
      });
    })
  );
});

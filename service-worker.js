// service-worker.js

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('app-cache').then(function(cache) {
            return cache.addAll([
                '/',
                './index.html',
                './menu.html',
                './about.html',
                './news.html',
                './contact.html',
                './news-detail.html',
                './css/bootstrap.min.css',
                './css/bootstrap-icons.css',
                './css/tooplate-crispy-kitchen.css',
                './js/custom.js',
                './js/bootstrap.bundle.min.js',
                './js/jquery.min.js',
                './js/geolocation.js',
                './js/online.js',
                './manifest.json',
                './images'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

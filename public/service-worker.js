self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('portfolio-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/public/apple-touch-icon.png',
                '/public/favicon.ico',
                '/public/logo192.png',
                '/public/logo512.png',
                '/src/App.css',
                '/src/images/tyler-boe-logo.svg',
                '/src/images/HeadShot1.jpg',
                '/src/index.css'
            ]);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.req).then((res) => {
            return res || fetch(e.req);
        })
    );
});
const staticAssets = [
  './',
  './assets/appLogo-192-192.png',
  './assets/appLogo-512-512.png',
  './assets/appLogo.jpg',
  './assets/workout-logo.jpg',
  './src/style/_buttons.css',
  './src/style/_divs.css',
  './src/style/_header.css',
  './src/style/_select.css',
  './src/style/_tables.css',
  './src/_generateWorkout.js',
  './src/_variables.js',
  './index.html',
  './index.css',
  './index.js',
  './manifest.json',
  './sw.js',  
];

self.addEventListener('install', async event => {
  const cache = await caches.open('news-static');
  cache.addAll(staticAssets);
});

self.addEventListener('install', async event => {
  console.log("Install");
  const cache = await caches.open('news-static');
});

self.addEventListener('fetch', event => {
  console.log('fetch');
  const req = event.request;
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req){
  const cachedResponse = await caches.match(req);
  return cachedResponse || fetch(req);
}
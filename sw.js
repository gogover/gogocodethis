/*self.addEventListener('fetch', function(event) {
	 
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
*/
addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;     // if valid response is found in cache return it
        } else {
          return fetch(event.request)     //fetch from internet            
            .catch(function(err) {       // fallback mechanism
              alert('Yo');
            });
        }
      })
  );
});



self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('the-magic-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/dragon.html',
        '/faq.html',
        '/manifest.json',
        '/background.jpeg',
        '/construction.gif',
        '/dragon.png',
        '/logo.png',
        '/site.js',
        '/dragon.js',
        '/styles.css',
      ]);
    })
  );
});
// caching required data
self.addEventListener('active', function(event){  
        console.log("Datataad")
    }
)
self.addEventListener('install', function(event){   
    event.waitUntil(
        caches.open('static')
        .then((cache) =>  {
            alert("Olla")
            cache.addAll([
                '/',
                '/index.html',
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js', 
                '/page1',   
                '/page2',
            ])
        })
    );
})

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            if(response){
                return response
            }
        })
    )
})
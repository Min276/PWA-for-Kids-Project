const tpiKids = "tpi-kids-level3"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/aos.css",
  "/js/aos.js",
  "/js/index.js",
  "/js/main.js",
  "/js/aosjs.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(tpiKids).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  
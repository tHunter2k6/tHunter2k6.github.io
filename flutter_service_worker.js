'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9d07fa941e0b85de1af2896dc169e99e",
"assets/AssetManifest.bin.json": "b80ba3992e4925dbf1bd3592da2fcadf",
"assets/AssetManifest.json": "927ffc305c4fc49b7fd47f84e52f9468",
"assets/FontManifest.json": "91c71da21fb65a971f861e525857cb02",
"assets/fonts/MaterialIcons-Regular.otf": "1f553634dcc5158efdebc2f7bc33b748",
"assets/fonts/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/lib/assets/2.png": "1bed421fe5219364e615530dee33bf17",
"assets/lib/assets/3.png": "e1e5c34d2133f5246cf65c433264cded",
"assets/lib/assets/4.png": "5e36a1daffcf654cae103f4ec22519f9",
"assets/lib/assets/5.png": "de7730af7d3b740c716ef14c55ef3d4b",
"assets/lib/assets/6.png": "8ed863d9762c75d6922a49c8604492c0",
"assets/lib/assets/7.png": "9a324a49fced112a0e5ced55524398e9",
"assets/lib/assets/circle.PNG": "6854fb2903aac52e8a983c37f748c5e2",
"assets/lib/assets/cv.png": "802f14480d03caad7fb279d73c8644eb",
"assets/lib/assets/forex.png": "06f6f0e597ed4f0fc72cbaa29b2d2886",
"assets/lib/assets/forexCover.png": "8d18964336640e8726c032cb12bea98a",
"assets/lib/assets/home.png": "569974edaceb99bea954ba10e5edc075",
"assets/lib/assets/huh.png": "bbd39d3577871a545e4ca0544ca467bf",
"assets/lib/assets/ig1.png": "874d733b0d58a7ed6a62a8673cf2c0f8",
"assets/lib/assets/ig2.png": "58fcfd525ed4c2f2ee72224f1769e28a",
"assets/lib/assets/igniteCover.jpeg": "92afc824e449cb5970756a28fec31b38",
"assets/lib/assets/ignite_logo1.png": "5de553a2cc40f081973b2f31ce682398",
"assets/lib/assets/instagram.png": "850db33d2e953501678b3bba2d25359e",
"assets/lib/assets/my_logo1.png": "294728227126263016d1ab9d82ab8e52",
"assets/lib/assets/pic1.jpeg": "35207dc07c461bd285a7aa1be538d954",
"assets/lib/assets/pic1_no_bg.png": "8e155b586f1deb5e281ad2e37fcdb143",
"assets/lib/assets/pic2.png": "050865e807e0c6356e82ea242f782020",
"assets/lib/assets/pic3.PNG": "f063612c3fc2f601ff46dbda82b06664",
"assets/lib/assets/picture.jpg": "55d59f68957a36b34c34fa96b6e6d80f",
"assets/lib/assets/sciverse_logo.png": "fbd8083f8b2a184a81e35a8ff1fea9aa",
"assets/lib/assets/ss1.png": "166e3a31743d96e4681426a12c87e0eb",
"assets/lib/assets/ss2.png": "a60912155fa4b25e27048846c8c36546",
"assets/lib/assets/ss3.png": "09c32ae4bd5c6b802e504f2adc0269c1",
"assets/lib/assets/wardrobeCover.png": "9866d6b30bab95dd1665a4cd6f04fb39",
"assets/lib/assets/wardrobe_1.png": "51be4b17ca58636fbf5b0c5c81100690",
"assets/lib/assets/y1.png": "e8f66d42e5b75d97fbfa0e93c23db8c0",
"assets/lib/assets/y2.png": "4826b89e9951d0fe44cb2f153aef43ac",
"assets/lib/assets/y3.png": "af1bc53ffdbf7c95034ad3409811df19",
"assets/NOTICES": "32d4159267f243769c33e211fb436080",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "93f9fd48fea23da1fabbaac8cfa8d5e5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ce9439167927018d815c04fe7bf55515",
"/": "ce9439167927018d815c04fe7bf55515",
"main.dart.js": "8051d4821b37cadeee34be406fbb4bbf",
"manifest.json": "6178d8468cac404510dd8c157a72cf81",
"version.json": "707a01ddcc10ab0f634057b5d16300dd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

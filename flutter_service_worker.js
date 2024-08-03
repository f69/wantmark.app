'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "613883ce63002d7a95edcd84a450c812",
"version.json": "83c59245d407100b6ffbd0e59e5d71e7",
"splash/img/light-2x.png": "4295e092d798902853b3984021d8fa93",
"splash/img/dark-4x.png": "a8efab1021bd44a3b45e94597d69d651",
"splash/img/light-3x.png": "9c8825860677c683ce1a6fcdf813fcd3",
"splash/img/dark-3x.png": "9c8825860677c683ce1a6fcdf813fcd3",
"splash/img/light-4x.png": "a8efab1021bd44a3b45e94597d69d651",
"splash/img/dark-2x.png": "4295e092d798902853b3984021d8fa93",
"splash/img/dark-1x.png": "ba6c9817ac3bef4ef1ebec060380c7c2",
"splash/img/light-1x.png": "ba6c9817ac3bef4ef1ebec060380c7c2",
"index.html": "657aaf0137d7df86a0e1907f6c1cc4e5",
"/": "657aaf0137d7df86a0e1907f6c1cc4e5",
"main.dart.js": "a4bca23f069a069ebed7c369c31839c0",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "b8c7481051465e0ee3cfa58ed3764783",
"icons/Icon-192.png": "382a76ff5cfc7d396d3d2d2f82100da8",
"icons/Icon-maskable-192.png": "382a76ff5cfc7d396d3d2d2f82100da8",
"icons/Icon-maskable-512.png": "4295e092d798902853b3984021d8fa93",
"icons/Icon-512.png": "4295e092d798902853b3984021d8fa93",
"manifest.json": "51085ecf56c2d070af8f74de19c67b98",
"assets/AssetManifest.json": "fff98031ee24500b49c4922a51665b28",
"assets/NOTICES": "c29155dad3f99b773f1e997c52904663",
"assets/FontManifest.json": "262778516c8260a25e01aee6605712b7",
"assets/AssetManifest.bin.json": "11e7cca93fb71f9834c76020adbf2053",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "48e9849a064c7963b32bac32c47f48ba",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bc611697fceb88d5cd5e7b78cad37589",
"assets/fonts/MaterialIcons-Regular.otf": "fd90b644829d394bb33f74c0f430d8e6",
"assets/assets/text/help_calc_en.html": "a3b7f4a8bc4037373d2f3b9d9312ee9d",
"assets/assets/text/help_calc_be.html": "dc937262ac78a25930e31779765d17cd",
"assets/assets/text/help_subject_uk.html": "1f5bdd58fa86687d3dab7d8570e6b8b6",
"assets/assets/text/help_subject_ru.html": "6ab3464d55b18c9c7db7ccd7782fc572",
"assets/assets/text/help_calc_uk.html": "c268b7cc088fc1be08cab194f66a3be9",
"assets/assets/text/style.css": "2670fd0d41a00b00310dc527835e0043",
"assets/assets/text/help_calc_ru.html": "4c4e5cb01c6b4f98eaa923f58e5c285b",
"assets/assets/text/help_subject_be.html": "83febbeba5c7a5e75f997a5fe85d3314",
"assets/assets/text/help_subject_en.html": "ddb28215f2e629bb549fe429ccf86f8f",
"assets/assets/text/help_archive_be.html": "89a07899a5ccb20763d48c62b2528b04",
"assets/assets/text/help_subjects_ru.html": "4087934261284d67e54934676b591a72",
"assets/assets/text/help_subjects_uk.html": "1b8823b041a251ab39001937facab775",
"assets/assets/text/help_archive_en.html": "eaee0ead755077327846bc42b46c5c27",
"assets/assets/text/help_archive_uk.html": "d95ffbd8b8dc456adf38cb0db6a7f05c",
"assets/assets/text/help_archive_ru.html": "68e460f1fec77df59386810b4b270009",
"assets/assets/text/help_subjects_be.html": "7682ac7e770941a0c4357e7b4894b987",
"assets/assets/text/help_subjects_en.html": "f3b12e2ff3292d36e1f3f8854112913c",
"assets/assets/fonts/SamsungSans-Regular.ttf": "c5de1e4ff3008e2173147dcaaa45bc9b",
"assets/assets/fonts/OpenSans-Regular.ttf": "5a798cdadc7cd321e3f72425b70bface",
"assets/assets/fonts/ProductSans-Regular.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"assets/assets/data/subjects_en.json": "686c89595f27bac161a440c5f0cefd31",
"assets/assets/data/subjects_be.json": "56b9c82219eac1d26c7bb283caba8402",
"assets/assets/data/subjects_uk.json": "3830b996c921df50010c6f1b64152026",
"assets/assets/data/subjects_ru.json": "9bc5bf7275be92537136c33dbbe275d1",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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

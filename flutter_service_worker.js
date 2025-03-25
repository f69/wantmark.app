'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "91a7e70b0f3d09ee97ee0f9cec8cb7df",
"assets/AssetManifest.bin.json": "b4c86726409b4995cebbe67f157ccf9f",
"assets/AssetManifest.json": "6451b7cf398f3fca24152b20f7dca2c6",
"assets/assets/data/subjects_be.json": "41dc802955e30335594ddfb614b63392",
"assets/assets/data/subjects_bg.json": "db4e0953212670b41cc2a9398c17a7ae",
"assets/assets/data/subjects_en.json": "2f8086d279920b11b8cfa82b8b6ad04d",
"assets/assets/data/subjects_pl.json": "2b54e8178ecac077a67c2a7f5a1ce007",
"assets/assets/data/subjects_ru.json": "3aabebb67097d19f95c3b6b2252fa1a6",
"assets/assets/data/subjects_uk.json": "0910626c705721b7c0d4fc7152771164",
"assets/assets/fonts/OpenSans-Regular.ttf": "5a798cdadc7cd321e3f72425b70bface",
"assets/assets/fonts/ProductSans-Regular.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"assets/assets/fonts/SamsungSans-Regular.ttf": "c5de1e4ff3008e2173147dcaaa45bc9b",
"assets/assets/help/be/archive.html": "ad4f668d04256d06a8269829ca2bae86",
"assets/assets/help/be/calc.html": "f6a187cf853c3fd94fdeb18fc7110f31",
"assets/assets/help/be/subject.html": "e5ca9d0e5f678f27e98682e0c46092e5",
"assets/assets/help/be/subjects.html": "6240fad0a5ac6d0e59806b94fc554f8e",
"assets/assets/help/bg/archive.html": "54266bece8dbf662ff5002b432a1a8e5",
"assets/assets/help/bg/calc.html": "9ef30d4240aec4b50a8e10dbcb1f3fed",
"assets/assets/help/bg/subject.html": "a8e50eeb0f06aeed0787c490b7e0e700",
"assets/assets/help/bg/subjects.html": "82d9495e6fb8ab42670c73df13d30c53",
"assets/assets/help/en/archive.html": "5ed4f04565489b1f67dcaa0c2adffdb1",
"assets/assets/help/en/calc.html": "0bb95edbe102f6da977c6254234beb7a",
"assets/assets/help/en/subject.html": "d0edf442391fffbc79a7b4ee4db47033",
"assets/assets/help/en/subjects.html": "fae0cd65084d77beed34f0745660b779",
"assets/assets/help/pl/archive.html": "97497f2e3698f50381c12114414192d4",
"assets/assets/help/pl/calc.html": "469b7438e87743f9c297362aa42d2708",
"assets/assets/help/pl/subject.html": "ea9c342fee2012c178c71064cffaf812",
"assets/assets/help/pl/subjects.html": "8089f96f94764a347440859b806f9ba9",
"assets/assets/help/ru/archive.html": "3e45ed224ba7d5b59eb23035e6b23686",
"assets/assets/help/ru/calc.html": "81d098fd88f1f930b841415663308b8a",
"assets/assets/help/ru/subject.html": "6c0aad729ce661f38ea8c94bb8c422a3",
"assets/assets/help/ru/subjects.html": "04a0982124e2fff424bb0e864bb5bfb0",
"assets/assets/help/style.css": "3184bcadf93480374db217244066994b",
"assets/assets/help/uk/archive.html": "c7aab5314e84ba10f89b36cbdb0b5aab",
"assets/assets/help/uk/calc.html": "46287b0891a9f84aca94565338e82b81",
"assets/assets/help/uk/subject.html": "6eac8c1eeee98bcaf09f01f0e4c8aa84",
"assets/assets/help/uk/subjects.html": "b010ec024cab7f7da52d2c3fcfb6d81a",
"assets/FontManifest.json": "262778516c8260a25e01aee6605712b7",
"assets/fonts/MaterialIcons-Regular.otf": "a6e13fde48ed2eabe381cd7e5803b67c",
"assets/NOTICES": "f917e0bacbe3364cbc4a4df09e3faf10",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e03540d87e40ce5ee21c537740d21391",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "43e56731287d211cf0e3b857b2c9f0a8",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "154b43f6aa4ed1905f6dc9c10773d45b",
"icons/Icon-192.png": "de8cc44c3e7675ae9f4ec56f1bed24ef",
"icons/Icon-512.png": "4ed4dc8acf35074400ea0fd22eaf5075",
"icons/Icon-maskable-192.png": "de8cc44c3e7675ae9f4ec56f1bed24ef",
"icons/Icon-maskable-512.png": "4ed4dc8acf35074400ea0fd22eaf5075",
"index.html": "203c506991b70a0eeecde6a87c4fa1d4",
"/": "203c506991b70a0eeecde6a87c4fa1d4",
"main.dart.js": "bcd1f1c15f18f043fcf228b77e68d4cd",
"manifest.json": "5f0e155d94380d79cc540db83a006cca",
"splash/img/dark-1x.png": "ba6c9817ac3bef4ef1ebec060380c7c2",
"splash/img/dark-2x.png": "4295e092d798902853b3984021d8fa93",
"splash/img/dark-3x.png": "9c8825860677c683ce1a6fcdf813fcd3",
"splash/img/dark-4x.png": "a8efab1021bd44a3b45e94597d69d651",
"splash/img/light-1x.png": "ba6c9817ac3bef4ef1ebec060380c7c2",
"splash/img/light-2x.png": "4295e092d798902853b3984021d8fa93",
"splash/img/light-3x.png": "9c8825860677c683ce1a6fcdf813fcd3",
"splash/img/light-4x.png": "a8efab1021bd44a3b45e94597d69d651",
"version.json": "91739475d327d3fb6b4099fdf73dca39"};
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

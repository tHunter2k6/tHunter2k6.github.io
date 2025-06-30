'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b7bce4f9bcbf7f1fbd5aaca414fdeea3",
".git/config": "a2e43c85ab76f375d657053ea6594dce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "95b6c61eefbb986a9c245ed917483e98",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33c7b8edd781251e5f7004ce8fcee6d4",
".git/logs/refs/heads/main": "e9668605d8a2bbb8f6f9183dac85a300",
".git/logs/refs/remotes/origin/main": "0b621242e9f5a59bbc45a74fc397aaa2",
".git/objects/06/829b9e209e05e6594e5aa3b2583dcf63c826ea": "23076c5f98f60dc7e48dffa7b91fd66c",
".git/objects/07/f743dec0a10088cd75e09fc64b251e44a71191": "0a96cb0786878b0944b7ed002d20aac6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/10/09eca013c2755e001170ec060aacc924f90559": "7a5f2c5560427654b930ff8a31d370d1",
".git/objects/13/25107eed4258abd33875b31c72c3037fdd4db8": "4c09d37fe736346d8296e943cde8d5c4",
".git/objects/14/a7e4e28e870c3d52311e36e172d12b0339c8e8": "cf96a7498c4c368dc82f480acd9c82f3",
".git/objects/1e/ae661c6ed4855952053dd273296d743ff57ba6": "11f170c98b50ffd88649c74ae64a734e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/2c/650946b3ba9ad7aa658cb4be914ace1b8550b4": "f29ec88bab5a5c290a1a5933bb4f42e4",
".git/objects/2c/702414f20347d84bb1a77356eb7a865996418e": "d85c1835133980894cf0630c58d1162f",
".git/objects/30/206b734e60b2d86f1850160ffc84d509baab42": "1eadf63b87a8b8e26801825bd15054f8",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/c259d731abb76281c173594802c8616d56adaf": "2d7f4361e2df5a1b86564a2daef600a9",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/41769b3bfa506bc133054f4622cde7477d08f6": "98313ae3db3dcc2adeeb75b8eb70d8ad",
".git/objects/40/ad554c1c00bf922e2358c455d6234eceba78ed": "24877aeb23978bcf414100ea98f6aa9c",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/cd5dc2f365581ce3794c5bd3f40593d2650e1a": "98e3a2a8c2f629d1105e197434f2df88",
".git/objects/48/ba65ed33dff18e74c62b0f08d8165db64a3085": "9aa3a7fdcbc6e5a4b96701d6dc3f541c",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/fe29f7fb4695623e532b5228998f2cc246e114": "a54b8537ce9a685a21fd1e7414dd0ee3",
".git/objects/50/2f96009ba88ac45d84e6417c2f29940e339d2d": "fda8c48305c24f8d5bc2920addf86175",
".git/objects/55/b5474c4b570f56f3d0edf8848c05df9f8fecb4": "4658d51c5be66dafdbb7b61481ef42bd",
".git/objects/57/53ade7a578d1a0dfd8692217ce43d98e2164c2": "7ad1875eb9bc0bbb8638f6618d61be7a",
".git/objects/59/eaf19ecdffebf4df403b383eeaf9fb972eb8c0": "c3d346a1038974f98f82c03a023c4b67",
".git/objects/6a/e4ef2c564fa116a53b7439954717f498aceabf": "9d5bc148befc9a501a75459cdaaf89bc",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/76/4450fe61087925536592b71ce7ab31feb1e746": "5adc266da64f6e328ee796f14356960a",
".git/objects/76/880d2b9fc9cf7dda1c821f3f57ea144bc42579": "d1d9c27670c4ff956db52074c22a65b0",
".git/objects/77/c70030d258e937847fce16b3eff436d0244989": "57b00025385a49ee63f6fb4522a6b977",
".git/objects/79/287fd190034584771dde47675b63ba38172343": "819bb748eefe5a7dd2363eb750508d33",
".git/objects/80/b41254faaf41ebc6c8e2486f8ff38ee6c9f7ee": "b26551277f46ff4a3ac9dc4e10417905",
".git/objects/81/df5d9f2c7b1023485ba31263b37a404ddc77cf": "468b2c90c7951eb8eecfa5c1003a0d59",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/c60ebfd516b03793af7a25ed9830b344f8ae9e": "fe6031946b609f37703f834b03d5a758",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/c309cc694a356e25e13803a9d5c2f2928a1384": "f806d7060619112cb6c66f2b46b7152b",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/4afd7bca0358e7b2aa4e479c7f008165af358f": "cd425d5341a5cbc12e9a2430a19d618a",
".git/objects/9a/823b9c7312d892aeb4db645461d126aec32865": "d6e2c48c1b959742d16ddcd1abc84c50",
".git/objects/9b/97a33efa621673ed8e17d270389ba202819120": "918d9bdbb115e0ba1cbd354cd5333612",
".git/objects/a5/86a7504177b82caa7fed03f90ba5c4be5470a6": "3936ba13dbbe908d4ead773476f446e7",
".git/objects/aa/9fc475a80e92ef60da2b5d3e9cc494bd454a97": "694db520f19dc3db8eb52f74224e9568",
".git/objects/ab/6765e55d208f7025a3dceb7fdb0df0529498fa": "90426fd1760944bd83413c474e9685bc",
".git/objects/ab/889e89e236d623ccc99f73e6902bc58609e807": "a8cd94003c06c662c32a715a2160e388",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/84c8ad3f74293988daea4ae1bd95480225314b": "9aeaaa4db902f598d99806ef3fcc76dd",
".git/objects/b7/049cb23fe3661fe9b8c4c98aa15e02a81b5cd6": "bd28df55289a4a67ecaef8d120a4ef68",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/02b733e99b24368a3f01569e19d0d2a9e21eb9": "3557f3a7118b73be783ec125af6122d8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/d9ad1f095b98d7fc9bc24d3792b4f21057803b": "8d6f6ebac9859ec0501cea54bc3a53bb",
".git/objects/c2/94dbfc78308bc449228c1996acdef5d3c528a9": "e63749d26dcfbaaf1da4bf843fb3369a",
".git/objects/c5/8e9f5328d5356aa0113c2f60988b326c978fea": "7d195dad66a9f780fa4bbf16aae50b15",
".git/objects/c6/3e0e301a3ac2a36de2fb7c3346ec1bcdf6b155": "ea05654eaa7782e384f8cb76f62aee24",
".git/objects/c9/045e5b189a77d87517fc48d61569ea4e8b5995": "529170a04f59c50feeb6bdd634d8747b",
".git/objects/ce/1180846a99ca97239735ab60e19faff6eaf679": "53fbe70192fbb6066d3998a485478e71",
".git/objects/cf/7b90b76f6179ed25f15c42c97a752e12eed61a": "19d6880c6b30cf0ebf711360d8b2e704",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e1/b36ba68f31bbac569f8ac05f81398c744e4d21": "5284b205e6bff761f75c6beddca69ebd",
".git/objects/e9/e35443659a19d2532ac1f48ff76eea6893c3e7": "29591389edcdf5d4529492e2e2b2b0af",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/e4a00c50d14d8d5849a2817c3fd7f8789ed091": "ae35307473b171f716e949b57b07c71b",
".git/objects/f0/45f3b0c87744d931bc040262ef4d65dc926967": "c8396ccaec07ab59b4158180df566c8d",
".git/objects/f1/5f145f7a1f170ceb63853b960b2f699512bdff": "6b40f6290b42ade33611dcad68b76abb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/873644be964f1f89ad8504e1493bc8461b7951": "bfca4a917c5e2d28aa60cce910cb6061",
".git/objects/f7/ee218e1c782bf3f089e6f96bcacc21ace53219": "0c698c598463d4cbf22f3fa8a68f569e",
".git/objects/f8/21cab4ffc17a0832ab30adfaac19f05caea45d": "e5280ffac5bbc007be8d10aec5338a5e",
".git/objects/f8/d6ec910452c99f8e3bff3e66390b654f97e76c": "0acb05270a7cfdb6a90b633a90284199",
".git/objects/f9/27052552f24d613010a2cdd4f31fa7d2c7ec0b": "7189a8ad163be77e96a66ebf28061f87",
".git/objects/f9/9d1aeb7bb04f171cea20f1c2b6b5aa53f70920": "0e71b548d7cdfda918f2a1916a9a30fe",
".git/objects/fa/4ce6c8eb51663b04dd51a11eeaf1addae93fec": "65605b25856f14db367918b438dd1236",
".git/objects/fc/547fa03f7ccc463d18e2e3cc8ef957e025d8e7": "d501da9f105162ee27724e10d5ed77ef",
".git/refs/heads/main": "cb15528b7438a38c358da4eea87bcc32",
".git/refs/remotes/origin/main": "cb15528b7438a38c358da4eea87bcc32",
"assets/AssetManifest.bin": "e0d691a7753a7bc521380043b39fd303",
"assets/AssetManifest.bin.json": "4c09f2f95d971732d9fdc89da124705b",
"assets/AssetManifest.json": "cd6d8f67d800b38904d46202e708e995",
"assets/FontManifest.json": "91c71da21fb65a971f861e525857cb02",
"assets/fonts/MaterialIcons-Regular.otf": "cf065aa5343a30f9b1f939e3c063bac8",
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
"assets/NOTICES": "c38917f6417fee17fec2952b10f2a104",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
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
"flutter_bootstrap.js": "35c2f5d6459f6a7bbd315f1e389d2baa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ce9439167927018d815c04fe7bf55515",
"/": "ce9439167927018d815c04fe7bf55515",
"main.dart.js": "89980f4f080b743b1e868dd8d93c5a66",
"manifest.json": "6178d8468cac404510dd8c157a72cf81",
"README.md": "89fa370f32216a78a5a0da91e0126131",
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

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const b={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return b;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/404.html",revision:"ce282794dc6d058fd138c0a902e5b0c9"},{url:"/404/index.html",revision:"ce282794dc6d058fd138c0a902e5b0c9"},{url:"/assets/css/0.styles.27a07ffd.css",revision:"d05faa69ee30b26f4ddbebbaf74d468b"},{url:"/assets/data/404/index.json",revision:"ee3cc3ef7c97caeb671e5e7554927893"},{url:"/assets/data/client-projects/index.json",revision:"f886eeb194ef9745b4ac779e9109ac1c"},{url:"/assets/data/index.json",revision:"f886eeb194ef9745b4ac779e9109ac1c"},{url:"/assets/data/personal-projects/index.json",revision:"f886eeb194ef9745b4ac779e9109ac1c"},{url:"/assets/data/skills/index.json",revision:"f886eeb194ef9745b4ac779e9109ac1c"},{url:"/assets/data/testimonials/index.json",revision:"f886eeb194ef9745b4ac779e9109ac1c"},{url:"/assets/js/app.37aeb952.js",revision:"ce18fdcc14178946b2eb5f230f231e18"},{url:"/assets/js/page--node-modules-gridsome-app-pages-404-vue.398645fd.js",revision:"e1c7b6f7952b650fdc98246f9ce53106"},{url:"/assets/js/page--src-pages-client-projects-vue.cf864a83.js",revision:"361c9b2ac2a1fc639b4e293fff8f6bc3"},{url:"/assets/js/page--src-pages-client-projects-vue~page--src-pages-personal-projects-vue.3ee36516.js",revision:"c4b76443c9f5e3ad4b3ec31872ede325"},{url:"/assets/js/page--src-pages-index-vue.83f57190.js",revision:"7034d7342afabbb03ee2b9bea0933488"},{url:"/assets/js/page--src-pages-personal-projects-vue.3a9c5d78.js",revision:"2b2c424f2730afe8ab1b3b272075b44e"},{url:"/assets/js/page--src-pages-skills-vue.425a23fd.js",revision:"cd3dbd84ad3ca2ea3619468942860691"},{url:"/assets/js/page--src-pages-testimonials-vue.105c378d.js",revision:"eaac673ea9bce1ed6b160d789973c7d2"},{url:"/assets/js/vendors~page--src-pages-index-vue.47726a19.js",revision:"ce5d28fdfefdb1d821c98921a9398b82"},{url:"/assets/static/logo-120x120.svg",revision:"2dbe683bd9745aeac3bf23abea237666"},{url:"/assets/static/logo-128x128.svg",revision:"d156cdc3ba94a154f2f6a549d560c9f8"},{url:"/assets/static/logo-144x144.svg",revision:"bb7f64a1ce62b891bc7b46fd13764586"},{url:"/assets/static/logo-152x152.svg",revision:"a517843aab452915017f2b6e9dd795dc"},{url:"/assets/static/logo-16x16.svg",revision:"f7bbd73d2fd09c88ba01c6af3cbecb7d"},{url:"/assets/static/logo-180x180.svg",revision:"7a6998f735bc7e0a1d72255be0804db3"},{url:"/assets/static/logo-192x192.svg",revision:"2a23d212e01d0f176a30eb8018de5287"},{url:"/assets/static/logo-384x384.svg",revision:"a6b86ee6d9e4adadc30a8bd42f1d10c6"},{url:"/assets/static/logo-48x48.svg",revision:"705a2e2dc620435c536ecbd2fddf9c34"},{url:"/assets/static/logo-512x512.svg",revision:"f4073f545241d33b9ffe0d767603629b"},{url:"/assets/static/logo-72x72.svg",revision:"57f007c313bb863c15c4248af285e5fb"},{url:"/assets/static/logo-96x96.svg",revision:"5768ed4fe560bac8984b79b9248c0f93"},{url:"/assets/static/logo.1539b60.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/assets/static/logo.62d22cb.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/assets/static/logo.7b22250.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/assets/static/logo.ac8d93a.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/assets/static/logo.b9532cc.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/assets/static/logo.ce0531f.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/assets/static/logo.dc0cdc5.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/assets/static/logo.f22e9f3.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/client-projects/index.html",revision:"f9aab08eb94cd40c397597f72111528d"},{url:"/index.html",revision:"4d98c0d2d6d5d8e6aaffae24e7fe1960"},{url:"/manifest.json",revision:"3072cc7b7539399fc69ec647efb94b82"},{url:"/personal-projects/index.html",revision:"ea3c41d73d677eb8729a8caa2627a257"},{url:"/skills/index.html",revision:"870416083a3ff7b27958354bac1e4268"},{url:"/testimonials/index.html",revision:"11b7e389ed060340605efd6a349ceb22"},{url:"/404",revision:"58562ccce683f1fa20f0b08d84a700bb"},{url:"/testimonials",revision:"6158305d7be02f55d417d6f1c5209d69"},{url:"/skills",revision:"83ff760fb4c9ad0267641359c4053967"},{url:"/personal-projects",revision:"f88045b1bd5b48ed476e3a289057bab5"},{url:"/client-projects",revision:"0f888c50d2f924c78f43557ef9263b87"}],{})}));
//# sourceMappingURL=service-worker.js.map

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'SKIP_WAITING') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

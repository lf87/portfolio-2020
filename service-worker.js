if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return c[s]||(e=new Promise(async e=>{if("document"in self){const c=document.createElement("script");c.src=s,document.head.appendChild(c),c.onload=e}else importScripts(s),e()})),e.then(()=>{if(!c[s])throw new Error(`Module ${s} didn’t register its module`);return c[s]})},e=(e,c)=>{Promise.all(e.map(s)).then(s=>c(1===s.length?s[0]:s))},c={require:Promise.resolve(e)};self.define=(e,a,d)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let c={};const i={uri:location.origin+e.slice(1)};return Promise.all(a.map(e=>{switch(e){case"exports":return c;case"module":return i;default:return s(e)}})).then(s=>{const e=d(...s);return c.default||(c.default=e),c})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(s){"use strict";self.addEventListener("message",s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()}),s.precacheAndRoute([{url:"/404.html",revision:"0f5ccdee2746d0f6c678cd90ed216cc1"},{url:"/404/index.html",revision:"0f5ccdee2746d0f6c678cd90ed216cc1"},{url:"/assets/css/0.styles.8cc6e528.css",revision:"3349c63c972dbd3199049099ae9a5827"},{url:"/assets/data/404/index.json",revision:"bdc9e282d055267333cd65142f96f1ad"},{url:"/assets/data/client-projects/index.json",revision:"6319b16531b5a66ccd9465d930677339"},{url:"/assets/data/index.json",revision:"6319b16531b5a66ccd9465d930677339"},{url:"/assets/data/personal-projects/index.json",revision:"6319b16531b5a66ccd9465d930677339"},{url:"/assets/data/skills/index.json",revision:"6319b16531b5a66ccd9465d930677339"},{url:"/assets/data/testimonials/index.json",revision:"6319b16531b5a66ccd9465d930677339"},{url:"/assets/js/app.7e15f1bf.js",revision:"614b93170ea5c121592395e32f54bd13"},{url:"/assets/js/page--node-modules-gridsome-app-pages-404-vue.398645fd.js",revision:"e1c7b6f7952b650fdc98246f9ce53106"},{url:"/assets/js/page--src-pages-client-projects-vue.cf864a83.js",revision:"361c9b2ac2a1fc639b4e293fff8f6bc3"},{url:"/assets/js/page--src-pages-client-projects-vue~page--src-pages-personal-projects-vue.3ee36516.js",revision:"c4b76443c9f5e3ad4b3ec31872ede325"},{url:"/assets/js/page--src-pages-index-vue.83f57190.js",revision:"7034d7342afabbb03ee2b9bea0933488"},{url:"/assets/js/page--src-pages-personal-projects-vue.3a9c5d78.js",revision:"2b2c424f2730afe8ab1b3b272075b44e"},{url:"/assets/js/page--src-pages-skills-vue.f012256a.js",revision:"3ca81cd953970c7e0a7b92d346db2e7a"},{url:"/assets/js/page--src-pages-testimonials-vue.105c378d.js",revision:"eaac673ea9bce1ed6b160d789973c7d2"},{url:"/assets/js/vendors~page--src-pages-index-vue.47726a19.js",revision:"ce5d28fdfefdb1d821c98921a9398b82"},{url:"/assets/static/logo-120x120.svg",revision:"2dbe683bd9745aeac3bf23abea237666"},{url:"/assets/static/logo-128x128.svg",revision:"d156cdc3ba94a154f2f6a549d560c9f8"},{url:"/assets/static/logo-144x144.svg",revision:"bb7f64a1ce62b891bc7b46fd13764586"},{url:"/assets/static/logo-152x152.svg",revision:"a517843aab452915017f2b6e9dd795dc"},{url:"/assets/static/logo-16x16.svg",revision:"f7bbd73d2fd09c88ba01c6af3cbecb7d"},{url:"/assets/static/logo-180x180.svg",revision:"7a6998f735bc7e0a1d72255be0804db3"},{url:"/assets/static/logo-192x192.svg",revision:"2a23d212e01d0f176a30eb8018de5287"},{url:"/assets/static/logo-384x384.svg",revision:"a6b86ee6d9e4adadc30a8bd42f1d10c6"},{url:"/assets/static/logo-48x48.svg",revision:"705a2e2dc620435c536ecbd2fddf9c34"},{url:"/assets/static/logo-512x512.svg",revision:"f4073f545241d33b9ffe0d767603629b"},{url:"/assets/static/logo-72x72.svg",revision:"57f007c313bb863c15c4248af285e5fb"},{url:"/assets/static/logo-96x96.svg",revision:"5768ed4fe560bac8984b79b9248c0f93"},{url:"/assets/static/logo.1539b60.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/assets/static/logo.62d22cb.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/assets/static/logo.7b22250.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/assets/static/logo.ac8d93a.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/assets/static/logo.b9532cc.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/assets/static/logo.ce0531f.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/assets/static/logo.dc0cdc5.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/assets/static/logo.f22e9f3.4675488e0d1c9d9b973e00f8abc49bdb.svg",revision:"4675488e0d1c9d9b973e00f8abc49bdb"},{url:"/client-projects/index.html",revision:"b2c98d40d6d7c5af1b9d8a4f835ef344"},{url:"/index.html",revision:"b546c8be804dcc4a88ac683285cf4fd1"},{url:"/manifest.json",revision:"3072cc7b7539399fc69ec647efb94b82"},{url:"/personal-projects/index.html",revision:"612e0c33fe200d8ab0bc6fd2520b3c37"},{url:"/skills/index.html",revision:"2dbf57fb2e60fd9254e3f3b7fdb76254"},{url:"/testimonials/index.html",revision:"ee579977b7d7cff01134a4ddedb33ac2"},{url:"/404",revision:"58562ccce683f1fa20f0b08d84a700bb"},{url:"/testimonials",revision:"6158305d7be02f55d417d6f1c5209d69"},{url:"/skills",revision:"83ff760fb4c9ad0267641359c4053967"},{url:"/personal-projects",revision:"f88045b1bd5b48ed476e3a289057bab5"},{url:"/client-projects",revision:"0f888c50d2f924c78f43557ef9263b87"}],{})}));
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

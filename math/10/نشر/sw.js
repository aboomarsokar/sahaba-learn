const V='math10-d308de6d0f',FILES=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('math10-')&&x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
// من الذاكرة أولاً (يعمل بلا إنترنت)، وتُحدَّث النسخة في الخلفية كلّما وُجد اتصال
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>{const net=fetch(e.request).then(r=>{if(r&&r.ok)caches.open(V).then(c=>c.put(e.request,r.clone()));return r}).catch(()=>hit);
return hit||net||caches.match('./index.html')}))});

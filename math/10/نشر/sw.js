const V='math10-b9005afaa6',FILES=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./cover.webp','./kinex.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('math10-')&&x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
// من الذاكرة أولاً (يعمل بلا إنترنت)، وتُحدَّث النسخة في الخلفية كلّما وُجد اتصال
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>{const net=fetch(e.request).then(r=>{if(r&&r.ok)caches.open(V).then(c=>c.put(e.request,r.clone()));return r}).catch(()=>hit);
return hit||net||caches.match('./index.html')}))});

/* إشعار التحديث وهو مغلق (أندرويد/كروم لتطبيقٍ مثبَّت على الشاشة الرئيسية): فحصٌ دوريّ لنسخة الصفحة */
const UPD='upd-math10';
self.addEventListener('periodicsync',e=>{if(e.tag==='check-update')e.waitUntil(checkUpdate())});
async function checkUpdate(){try{const r=await fetch('./index.html',{cache:'no-store'});const sig=[r.headers.get('etag'),r.headers.get('last-modified'),r.headers.get('content-length')].join('|');
const c=await caches.open(UPD),old=await c.match('sig'),was=old?await old.text():null;await c.put('sig',new Response(sig));
if(was&&was!==sig)await self.registration.showNotification('تحديث جديد · الرياضيات',{body:'صدرت نسخة جديدة من التطبيق. افتحه لتحصل على آخر التعديلات.',icon:'./icon-192.png',tag:'app-update',dir:'rtl',lang:'ar'})}catch(e){}}
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if('focus' in c)return c.focus()}return self.clients.openWindow('./')}))});

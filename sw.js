const V='mindstrike-v40',F=["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "img/boss_bg.webp", "img/oneshot.webp", "img/pvp_bg.webp", "img/hotzone.webp", "img/taunt.webp", "img/menu_bg.webp", "img/bullseye.webp", "img/game_bg.webp", "img/title.webp", "img/rage.webp", "img/kiraxo.webp", "img/double.webp", "img/shield.webp", "audio/buzz.wav", "audio/ding.wav", "audio/click.wav", "audio/fanfare.wav", "audio/powerup.wav","audio/glitch.wav","audio/whoosh.wav", "audio/boss.mp3", "audio/pvp.mp3", "audio/theme.mp3","img/cyber_menu.webp", "img/cyber_boss.webp", "img/samurai_menu.webp", "img/samurai_boss.webp", "img/ice_menu.webp", "img/ice_boss.webp", "audio/theme_cyber.mp3", "audio/theme_samurai.mp3", "audio/theme_viking.mp3", "img/buganda_menu.webp", "img/buganda_boss.webp", "img/gold_menu.webp", "img/gold_boss.webp", "audio/theme_buganda.mp3", "audio/theme_gold.mp3"];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(V).then(c=>Promise.all(F.map(u=>c.add(u).catch(()=>{})))))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V&&x!=='ms-meta').map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
// Safari/Android request audio with Range headers; cache.put can't store those, so we precache full files and slice them ourselves.
const ranged=async(r,m)=>{const b=await m.arrayBuffer(),x=/^bytes=(\d*)-(\d*)/.exec(r.headers.get('range')),s=+x[1]||0,e=Math.min(x[2]?+x[2]:b.byteLength-1,b.byteLength-1);
 return new Response(b.slice(s,e+1),{status:206,headers:{'Content-Type':m.headers.get('Content-Type')||'audio/mpeg','Content-Range':`bytes ${s}-${e}/${b.byteLength}`,'Content-Length':e-s+1}})};
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;const nav=r.mode==='navigate'||/index\.html$/.test(r.url);
 e.respondWith((async()=>{const c=await caches.open(V),m=await c.match(r.url,{ignoreSearch:true});
  if(r.headers.has('range')&&m)return ranged(r,m);
  if(!nav&&m)return m;
  try{const n=await fetch(r);if(n.status===200)c.put(r,n.clone());return n}catch(err){return m||c.match('index.html')}})())});

// v29: daily reminder. Fires from Periodic Background Sync (installed Chrome/Edge on Android) and nudges once per day if the Daily Strike isn't done.
const dk=d=>`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
self.addEventListener('periodicsync',e=>{if(e.tag!=='daily-numbers')return;e.waitUntil((async()=>{
 const c=await caches.open('ms-meta'),t=dk(new Date()),get=async k=>{const r=await c.match(k);return r?await r.text():''};
 if(await get('dl')===t||await get('sent')===t||new Date().getHours()<6)return;
 await c.put('sent',new Response(t));
 await self.registration.showNotification('☀️ New Daily Strike numbers!',{body:'Fresh numbers for everyone today. Keep your streak alive, legionary! ⚔️',icon:'icons/icon-192.png',badge:'icons/icon-192.png',tag:'ms-daily',renotify:false})})())});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const w of l){if('focus'in w)return w.focus()}return clients.openWindow('./')}))});

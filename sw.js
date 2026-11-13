/* MindStrike service worker. Bump V after every change so players get the update. */
const V='v133',CORE=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png'];
const ASSETS=[
 'img/atlantis_boss.webp','img/boss_bg.webp','img/oneshot.webp','img/buganda_boss.webp','img/pvp_bg.webp','img/gold_menu.webp','img/cyber_boss.webp','img/hotzone.webp','img/ks_gold.webp','img/taunt.webp','img/astral_boss.webp','img/ice_boss.webp','img/menu_bg.webp','img/bullseye.webp','img/ks_astral.webp','img/samurai_menu.webp','img/samurai_boss.webp','img/ks_samurai.webp','img/buganda_menu.webp','img/game_bg.webp','img/title.webp','img/logo.webp','img/ks_cyber.webp','img/rage.webp','img/ks_ice.webp','img/cyber_menu.webp','img/ice_menu.webp','img/ks_buganda.webp','img/kiraxo.webp','img/gold_boss.webp','img/double.webp','img/ks_atlantis.webp','img/atlantis_menu.webp','img/astral_menu.webp','img/shield.webp',
 'audio/theme_astral.mp3','audio/buzz.wav','audio/theme_gold.mp3','audio/theme_cyber.mp3','audio/ding.wav','audio/glitch.wav','audio/theme_viking.mp3','audio/boss.mp3','audio/theme_buganda.mp3','audio/theme_samurai.mp3','audio/theme_atlantis.mp3','audio/pvp.mp3','audio/whoosh.wav','audio/theme.mp3','audio/click.wav','audio/fanfare.wav','audio/powerup.wav'];
self.addEventListener('install',e=>{e.waitUntil((async()=>{const c=await caches.open(V);await c.addAll(CORE);await Promise.all(ASSETS.map(a=>c.add(a).catch(()=>{})));self.skipWaiting()})())});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==V&&k!=='ms-meta')await caches.delete(k);await self.clients.claim()})())});
async function ranged(req,res){const r=req.headers.get('range');if(!r||res.status!==200)return res;const m=/bytes=(\d*)-(\d*)/.exec(r);if(!m)return res;const b=await res.arrayBuffer(),n=b.byteLength,s=m[1]?+m[1]:0,t=m[2]?Math.min(+m[2],n-1):n-1;if(s>t||s>=n)return new Response(null,{status:416,headers:{'Content-Range':'bytes */'+n}});
 return new Response(b.slice(s,t+1),{status:206,statusText:'Partial Content',headers:{'Content-Type':res.headers.get('Content-Type')||'application/octet-stream','Content-Range':`bytes ${s}-${t}/${n}`,'Content-Length':String(t-s+1),'Accept-Ranges':'bytes'}})}
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET')return;const u=new URL(q.url);if(u.origin!==location.origin)return;
 e.respondWith((async()=>{const c=await caches.open(V);let hit=await c.match(q,{ignoreSearch:true});
  if(!hit&&q.mode==='navigate')hit=await c.match('index.html');
  if(hit)return ranged(q,hit);
  try{const res=await fetch(q);if(res&&res.status===200)c.put(q,res.clone());return ranged(q,res)}catch(err){return new Response('Offline',{status:503})}})())});
async function remind(){try{const m=await caches.open('ms-meta'),r=await m.match('dl'),last=r?await r.text():'',d=new Date(),t=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
 if(last===t)return;await self.registration.showNotification('MindStrike ⚔️',{body:'New Daily Strike numbers are ready!',icon:'icons/icon-192.png',badge:'icons/icon-192.png',tag:'ms-daily'})}catch(e){}}
self.addEventListener('periodicsync',e=>{if(e.tag==='daily-numbers')e.waitUntil(remind())});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil((async()=>{const l=await clients.matchAll({type:'window',includeUncontrolled:true});for(const c of l){if('focus'in c)return c.focus()}return clients.openWindow('./')})())});

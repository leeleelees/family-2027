
(()=>{
 const panel=document.querySelector('#floating-map-panel');
 const map=document.querySelector('.atlas-map').cloneNode(true);
 map.querySelectorAll('[id]').forEach(el=>{el.id+='-floating'});
 map.querySelectorAll('[clip-path]').forEach(el=>el.setAttribute('clip-path',el.getAttribute('clip-path').replace('#map-bounds','#map-bounds-floating')));
 panel.querySelector('.floating-map-content').append(map);
 panel.querySelector('nav').innerHTML=DESTINATIONS.map((d,i)=>'<button type="button" data-region="'+i+'">'+d.name+'</button>').join('');
 function select(e){const pin=e.target.closest('[data-map],[data-region]:not(body)');if(!pin)return;const index=pin.dataset.map??pin.dataset.region;document.querySelector('.comparison-layout [data-map="'+index+'"]').dispatchEvent(new MouseEvent('click',{bubbles:true}));}
 panel.addEventListener('click',select);
 panel.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.closest('[data-map]')){e.preventDefault();select(e);}});
 const observer=new IntersectionObserver(entries=>{const current=entries.find(e=>e.isIntersecting);if(!current)return;active=DESTINATIONS.findIndex(d=>'place-'+d.id===current.target.id);syncMap();panel.querySelectorAll('[data-region]:not(body)').forEach(el=>{if(Number(el.dataset.region)===active)el.setAttribute('aria-current','location');else el.removeAttribute('aria-current');});},{rootMargin:'-15% 0px -70% 0px',threshold:0});
 document.querySelectorAll('.region-chapter').forEach(el=>observer.observe(el));
 new MutationObserver(()=>{observer.disconnect();document.querySelectorAll('.region-chapter').forEach(el=>observer.observe(el));}).observe(document.querySelector('#region'),{childList:true});
})();

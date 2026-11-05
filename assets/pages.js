(()=>{
 const id=document.body.dataset.region;
 const controls=document.querySelector('.controls');controls.classList.add('trip-settings');
 if(id)document.querySelector('#region').before(controls);
 else document.querySelector('.finder-intro').after(controls);
 for(const key of ['airport','nights']){
  try{const saved=localStorage.getItem('family2027-'+key),select=document.getElementById(key);if([...select.options].some(o=>o.value===saved))select.value=saved}catch{}
 }
 function updateTripSummaries(){
  const {airport,nights}=state();
  document.querySelectorAll('.finder-result').forEach(card=>{const d=DESTINATIONS.find(d=>d.id===card.dataset.result);let summary=card.querySelector('.finder-trip-summary');if(!summary){summary=document.createElement('p');summary.className='finder-trip-summary';card.querySelector('.finder-reason').after(summary)}summary.textContent=`${airport?'인천':'김해'} 출발 · ${nights===1?'3박 4일':'4박 5일'} · 6명 계획 예산 ${d.budget[airport][nights]}만원`;});
 }
 controls.addEventListener('change',()=>{for(const key of ['airport','nights']){try{localStorage.setItem('family2027-'+key,document.getElementById(key).value)}catch{}}updateTripSummaries()});
 const href=id=>`${id}.html`;
 document.addEventListener('click',e=>{
  const hit=e.target.closest('[data-map],[data-region]:not(body),[data-place],a[href^="#place-"]');if(!hit)return;
  const n=hit.dataset.map??hit.dataset.region??hit.dataset.place;
  const target=n!==undefined?DESTINATIONS[Number(n)]?.id:hit.hash.slice(7);
  if(target){e.preventDefault();e.stopImmediatePropagation();location.href=href(target)}
 },true);
 document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-map]')){e.preventDefault();e.target.dispatchEvent(new MouseEvent('click',{bubbles:true}))}},true);
 const nav=document.createElement('nav');nav.className='page-navigation';nav.setAttribute('aria-label','여행지 페이지');
 nav.innerHTML=`<a href="index.html#trip-finder">← 전체 여행지</a><label>다른 지역 <select aria-label="다른 지역으로 이동"><option value="">지역 선택</option>${DESTINATIONS.map((d,i)=>`<option value="${d.id}" ${d.id===id?'selected':''}>${d.name} · ${JAPANESE[i].name}</option>`).join('')}</select></label>`;
 if(id){
  const guide=document.querySelector('#guide');
  guide.querySelector(':scope > .wrap').prepend(nav);
  const frame=document.createElement('div');frame.className='detail-layout';guide.before(frame);
  frame.append(guide,document.querySelector('#floating-map-panel'));
  const contents=document.createElement('nav');contents.className='detail-contents';contents.setAttribute('aria-label','이 지역에서 살펴볼 내용');
  contents.innerHTML='<a href="#local-explore">주변 관광</a><a href="#local-stay">숙소·식사</a><a href="#local-transport">이동·시간표</a>';
  nav.after(contents);
 }else{
  const main=document.querySelector('main');
  const frame=document.createElement('div');frame.className='detail-layout home-layout';main.before(frame);
  frame.append(main,document.querySelector('#floating-map-panel'));
 }
 const footer=document.querySelector('footer');footer.classList.add('detail-footer');
 footer.querySelector('.footer-photo')?.remove();footer.querySelector('.brand').href='index.html';
 footer.querySelector('p').innerHTML=`<a href="index.html#trip-finder">${id?'다른 여행지 비교하기':'여행지 다시 비교하기'} ↗</a>`;
 const floatingMap=document.querySelector('#floating-map-panel');
 const overlayScreen=matchMedia('(min-width:1200px)');let mapFrame=0;
 function placeFloatingMap(){
  mapFrame=0;
  // Keep its normal viewport position until the footer reaches it, then push up.
  const offset=overlayScreen.matches?Math.min(0,footer.getBoundingClientRect().top-20-(innerHeight-84)):0;
  floatingMap.style.setProperty('--map-offset',offset+'px');
 }
 function queueMapPosition(){if(!mapFrame)mapFrame=requestAnimationFrame(placeFloatingMap)}
 window.addEventListener('scroll',queueMapPosition,{passive:true});window.addEventListener('resize',queueMapPosition);
 new ResizeObserver(queueMapPosition).observe(document.querySelector('.detail-layout'));
 placeFloatingMap();
 nav.querySelector('select').addEventListener('change',e=>{if(e.target.value)location.href=href(e.target.value)});
 document.querySelectorAll('a[href="#destinations"],a[href="#guide"]').forEach(a=>a.href=id?'index.html#trip-finder':'#trip-finder');
 document.querySelectorAll('header a[href^="#"]').forEach(a=>{if(id)a.href='index.html'+a.getAttribute('href')});
 const bottom=document.querySelector('.mobile-bottom-nav');bottom.innerHTML=`<a href="index.html#trip-finder">전체 지역</a><button type="button" data-open-mobile-map>지도</button><a href="${id?'#local-explore':'index.html#trip-finder'}">${id?'주변 관광':'지역 비교'}</a><a href="index.html#before-trip">여행 준비</a>`;
 document.querySelector('.mobile-map-dialog>p').textContent='지역 이름을 누르면 해당 지역 페이지로 이동해요.';
 function layout(){
  document.querySelectorAll('.finder-jump[href^="#place-"]').forEach(a=>{a.href=href(a.hash.slice(7));a.textContent='이 지역 자세히 보기 ↗'});
  if(!id)return;
  const chapter=document.querySelector('#place-'+id);if(!chapter)return;
  chapter.querySelector('.two-col')?.setAttribute('id','local-stay');
  chapter.querySelector('.region-topic')?.setAttribute('id','local-transport');
  const outer=chapter.querySelector('.mobile-region-body');if(outer){outer.open=true;outer.querySelector('summary').hidden=true;}
  const stories=chapter.querySelectorAll('.two-col>.story');const explore=stories[1];
  if(explore&&!explore.querySelector('.explore-photo')){
   explore.id='local-explore';
   const i=DESTINATIONS.findIndex(d=>d.id===id);
   const names=['오이시공원 · 大石公園','프린스 쇼핑플라자 · 軽井沢・プリンスショッピングプラザ','긴린코 · 金鱗湖','우미지고쿠 · 海地獄','아리마 온천마을 · 有馬温泉','아시노코 · 芦ノ湖'];
   const src=id==='kawa'?'assets/oishi.jpg':id==='karui'?PHOTO_GALLERY_ASSETS['karui-2']:PHOTO_ASSETS[id];
   const source=id==='kawa'?'https://www.yamanashi-kankou.jp/english/explore-by-area/fujisan-fujigoko/flower-street-in-oishi-park.html':id==='karui'?'https://www.princehotels.co.jp/karuizawa-west/':DESTINATIONS[i].sources.at(-1);
   const figure=document.createElement('figure');figure.className='explore-photo';figure.innerHTML=`<img src="${src}" alt="${names[i]}" loading="lazy"><figcaption>${names[i]}<small>${id==='kawa'?'꽃이 핀 계절의 사진입니다. 겨울에는 꽃밭 대신 호수와 후지산 풍경을 즐겨요.':'촬영 계절에 따라 실제 풍경은 달라집니다.'}</small><a href="${source}" target="_blank" rel="noopener noreferrer">사진 출처 ↗</a></figcaption>`;
   explore.querySelector('.story-label').after(figure);
   // Sightseeing first, then lodging. Keep the complete existing copy.
   const pair=chapter.querySelector('.two-col');pair.before(explore);explore.classList.add('explore-story');
   chapter.querySelector('.budget-strip').after(explore);
   const gallery=chapter.querySelector('.region-gallery');if(gallery)gallery.before(pair);
  }
 }
 const prev=renderRegion;renderRegion=function(){prev();layout()};renderRegion();updateTripSummaries();
 new MutationObserver(updateTripSummaries).observe(document.querySelector('#finder-results'),{childList:true});
 new MutationObserver(()=>{document.querySelectorAll('.finder-jump[href^="#place-"]').forEach(a=>{a.href=href(a.hash.slice(7));a.textContent='이 지역 자세히 보기 ↗'})}).observe(document.querySelector('#finder-results'),{childList:true});
 matchMedia('(max-width:700px)').addEventListener('change',layout);
})();

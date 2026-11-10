(() => {
  const entries = JSON.parse(document.querySelector('#compare-data').textContent);
  const index = new Map(entries.map(item => [item.name,item]));
  const key = 'family-ryokan-saved-v1';
  const dialog = document.querySelector('#saved-dialog');
  const list = document.querySelector('#saved-list');
  const trigger = document.querySelector('.open-saved');
  const region = document.querySelector('[data-region]');
  const destination = region.href;
  let state = {time:0,names:[]};

  function accept(raw) {
    try {
      const next = JSON.parse(raw);
      if (Number.isFinite(next?.time) && next.time > state.time && Array.isArray(next.names)) {
        state = {time:next.time,names:[...new Set(next.names.filter(n=>index.has(n)))]};
      }
    } catch {}
  }
  function sync() {
    accept(new URL(location.href).searchParams.get('favorites'));
    try { accept(localStorage.getItem(key)); } catch {}
    if (window.name.startsWith(key)) accept(window.name.slice(key.length));
    persist();
    paint();
  }
  function persist() {
    if (!state.time) return;
    const value = JSON.stringify(state);
    try { localStorage.setItem(key,value); } catch {}
    window.name = key + value;
  }
  function toggle(name) {
    const names = state.names.includes(name) ? state.names.filter(n=>n!==name) : [...state.names,name];
    state = {names,time:Math.max(Date.now(),state.time+1)};
    persist();
    paint();
  }
  function element(tag,text) {
    const node = document.createElement(tag);
    node.textContent = text;
    return node;
  }
  function comparison(name) {
    const item=index.get(name), article=document.createElement('article');
    article.append(element('small',item.city),element('h3',name),element('small',item.jp));
    const pair=document.createElement('div');
    pair.className='compare-dates';
    item.dates.forEach((date,i)=>{
      const cell=document.createElement('div');
      cell.append(element('b',i?'2.21–24 여행':'2.20–23 여행'),element('p',date.status),
        element('small','6인 여행 총액'),element('strong',date.total?date.total.toLocaleString('ko-KR')+'원':'견적 미확인'));
      if(date.lodging)cell.append(element('small','료칸 2박 '+date.lodging));
      pair.append(cell);
    });
    const remove=element('button','비교함에서 빼기');
    remove.onclick=()=>{toggle(name);(list.querySelector('button')||document.querySelector('#close-saved')).focus()};
    article.append(pair,remove);
    return article;
  }
  function paint(){
    trigger.textContent='내 비교함 ('+state.names.length+')';
    document.querySelectorAll('[data-save]').forEach(b=>{
      const active=state.names.includes(b.dataset.save);
      b.textContent=active?'비교함에 담음':'비교함에 담기';
      b.setAttribute('aria-pressed',active);
      b.setAttribute('aria-label',b.dataset.save+' '+b.textContent);
    });
    const url=new URL(destination);
    if(state.time)url.searchParams.set('favorites',JSON.stringify(state));
    region.href=url.href;
    list.replaceChildren(...state.names.map(comparison));
    if(!state.names.length)list.append(element('p','료칸 목록에서 ‘비교함에 담기’를 누르면 여기에 두 일정의 견적이 표시됩니다.'));
  }
  document.querySelectorAll('[data-save]').forEach(b=>b.onclick=()=>toggle(b.dataset.save));
  trigger.onclick=()=>dialog.showModal();
  document.querySelector('#close-saved').onclick=()=>dialog.close();
  addEventListener('pageshow',sync);
  addEventListener('storage',event=>{if(event.key===key){accept(event.newValue);paint()}});
  sync();
})();
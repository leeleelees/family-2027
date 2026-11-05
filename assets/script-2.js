
(()=>{const button=document.querySelector('.back-to-top');const update=()=>{button.hidden=window.scrollY<400};window.addEventListener('scroll',update,{passive:true});update();button.addEventListener('click',()=>{window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});})();

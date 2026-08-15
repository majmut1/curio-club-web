(()=>{
  function mascot(cls='explorerSticker'){
    return `<span class="${cls}" aria-hidden="true"><svg viewBox="0 0 120 170" xmlns="http://www.w3.org/2000/svg"><ellipse cx="61" cy="163" rx="35" ry="5" fill="rgba(0,0,0,.14)"/><path d="M34 60q26-22 52 0l-4 29q-6 23-22 23T38 89z" fill="#f0ad7a" stroke="#193c68" stroke-width="4"/><path d="M34 62q0-30 27-30 26 0 27 30-13-8-27-8-15 0-27 8z" fill="#633b29" stroke="#193c68" stroke-width="4"/><path d="M26 42q11-29 35-29 25 0 37 29L86 51q-23-9-51 0z" fill="#ff8a24" stroke="#193c68" stroke-width="4"/><path d="M29 43h65" stroke="#2c7fd5" stroke-width="7" stroke-linecap="round"/><rect x="37" y="59" width="22" height="22" rx="8" fill="none" stroke="#2c7fd5" stroke-width="5"/><rect x="63" y="59" width="22" height="22" rx="8" fill="none" stroke="#2c7fd5" stroke-width="5"/><path d="M59 69h5" stroke="#193c68" stroke-width="4"/><circle cx="48" cy="70" r="3" fill="#193c68"/><circle cx="74" cy="70" r="3" fill="#193c68"/><path d="M52 88q9 8 18 0" fill="none" stroke="#a94b40" stroke-width="4" stroke-linecap="round"/><path d="M40 111q20 8 41 0l9 39H31z" fill="#2c7fd5" stroke="#193c68" stroke-width="4"/><path d="M49 111l12 12 12-12" fill="#ff9a28" stroke="#193c68" stroke-width="3"/><path d="M35 116q-13 9-15 25" fill="none" stroke="#f0ad7a" stroke-width="11" stroke-linecap="round"/><path d="M86 116q14 7 17 22" fill="none" stroke="#f0ad7a" stroke-width="11" stroke-linecap="round"/><path d="M45 149l-2 14M76 149l2 14" stroke="#193c68" stroke-width="10" stroke-linecap="round"/><path d="M36 164h16M70 164h17" stroke="#ff8a24" stroke-width="9" stroke-linecap="round"/></svg></span>`;
  }
  window.curioMascot=mascot;

  function add(el,cls='explorerSticker'){
    if(!el||el.querySelector('.'+cls)) return;
    el.insertAdjacentHTML('beforeend',mascot(cls));
  }
  function decorate(root=document){
    root.querySelectorAll('.kidCard,.card,.simpleTopic,.topic,.showCard,.lessonCard,.familyCard').forEach(el=>add(el));
    root.querySelectorAll('.gameTop').forEach(el=>add(el,'explorerGame'));
    root.querySelectorAll('.play').forEach(el=>add(el,'explorerGame'));
    root.querySelectorAll('.modal').forEach(el=>add(el,'explorerModal'));
    root.querySelectorAll('.logoMark').forEach(el=>{if(!el.querySelector('.explorerNav')){el.textContent='';el.insertAdjacentHTML('beforeend',mascot('explorerNav'));}});
    const hero=root.querySelector('.kidHero');if(hero&&!hero.querySelector(':scope > .explorerGame'))hero.insertAdjacentHTML('beforeend',mascot('explorerGame'));
  }
  let raf=0;const observer=new MutationObserver(()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>decorate(document));});
  observer.observe(document.body,{childList:true,subtree:true});
  setTimeout(()=>decorate(document),50);
})();

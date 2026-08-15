(()=>{
  function kidCard(g){
    return `<button class="kidCard" data-game="${g.id}"><span class="kidHat">🧢👓</span><span class="kidIcon">${g.icon}</span><strong>${g.title}</strong></button>`;
  }
  function compactTopics(){
    app.innerHTML=`<div class="app compactHome">${topbar()}<main class="simplePage"><div class="simpleHead"><button class="back" id="back">→</button><h1>العوالم</h1></div><div class="simpleTopics">${Object.entries(cats).map(([id,[name,ic]])=>`<button class="simpleTopic" data-cat="${id}"><span>${ic}</span><strong>${name}</strong></button>`).join('')}</div></main>${bottom('play')}</div>`;
    wireShell();wireCards();$('#back').onclick=renderHome;
  }
  renderHome=function(){
    const seed=new Date().getDate()%G.length;
    const picks=G.slice(seed).concat(G).slice(0,4);
    const topics=Object.entries(cats).slice(0,6);
    app.innerHTML=`<div class="app compactHome">${topbar()}
      <section class="kidHero">
        <div class="heroCopy"><span class="heroStars">⭐ ${state.stars}</span><h1>جاهز نلعب؟</h1><p>اختر لعبة وابدأ.</p><div class="heroBtns"><button class="playNow" id="surprise">▶️ ابدأ لعبة</button><button class="giftOnly" id="dailyGift" aria-label="هدية اليوم">🎁</button></div></div>
        <div class="heroMascot"><span class="cap">🧢</span><span class="glasses">👓</span></div>
      </section>
      <section class="simpleSection"><div class="simpleTitle"><h2>✨ ألعاب اليوم</h2></div><div class="kidGrid">${picks.map(kidCard).join('')}</div></section>
      <section class="simpleSection"><div class="simpleTitle"><h2>🌈 اختر عالمًا</h2><button class="moreBtn" id="allTopics">المزيد</button></div><div class="simpleTopics homeTopics">${topics.map(([id,[name,ic]])=>`<button class="simpleTopic" data-cat="${id}"><span>${ic}</span><strong>${name}</strong></button>`).join('')}</div></section>
      ${bottom('play')}
    </div>`;
    wireShell();wireCards();
    $('#surprise').onclick=()=>startGame(G[Math.floor(Math.random()*G.length)].id);
    $('#dailyGift').onclick=dailyGift;
    $('#allTopics').onclick=compactTopics;
  };
  setTimeout(renderHome,0);
})();

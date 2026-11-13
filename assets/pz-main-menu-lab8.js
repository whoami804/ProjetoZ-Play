"use strict";var PZMainMenuLab8=(()=>{var g="projetoz.developerMode.v1";function y(n){return n==="1"}var x=!1;function w(){try{return y(window.localStorage.getItem(g))}catch{return x}}function z(n){x=n;try{window.localStorage.setItem(g,n?"1":"0")}catch{}document.body.classList.toggle("pz-developer-mode",n)}function h(){let n=w();return document.body.classList.toggle("pz-developer-mode",n),n}function v(n){if(document.getElementById("pz-main-menu"))throw new Error("Menu already mounted");let e=document.createElement("section");e.id="pz-main-menu",e.style.setProperty("--pz-menu-background",'url("./menu-lab8/menu-poster.jpg")'),e.setAttribute("aria-label","Menu inicial do ProjetoZ"),e.innerHTML=`
    <div class="pz-menu-backdrop" aria-hidden="true"></div>
    <video class="pz-menu-video" aria-hidden="true" tabindex="-1"
      autoplay muted loop playsinline webkit-playsinline
      preload="auto" poster="./assets/menu-lab8/menu-poster.jpg">
      <source src="./assets/menu-lab8/menu-loop.mp4" type="video/mp4" />
    </video>
    <div class="pz-menu-moonlight" aria-hidden="true"></div>
    <div class="pz-menu-rain" aria-hidden="true"></div>
    <div class="pz-menu-pane">
      <div class="pz-menu-brand" aria-label="Projeto Z">
        <span class="pz-menu-wordmark">PROJETO</span><span class="pz-menu-z">Z</span>
      </div>
      <p class="pz-menu-tagline">SOBREVIVA \xB7 EXPLORE \xB7 CONSTRUA</p>
      <nav class="pz-menu-screens" aria-label="Op\xE7\xF5es do menu">
        <div class="pz-menu-screen" data-menu-screen="inicio">
          <button type="button" class="pz-menu-action pz-menu-play" data-menu-action="jogar">
            <span class="pz-menu-arrow" aria-hidden="true">\u25B6</span><span>JOGAR</span>
          </button>
          <button type="button" class="pz-menu-action" data-menu-action="configuracoes">
            <span class="pz-menu-arrow" aria-hidden="true">\u25B6</span><span>CONFIGURA\xC7\xD5ES</span>
          </button>
          <button type="button" class="pz-menu-action" data-menu-action="sobre">
            <span class="pz-menu-arrow" aria-hidden="true">\u25B6</span><span>SOBRE</span>
          </button>
          <p class="pz-menu-status" role="status" aria-live="polite"></p>
        </div>
        <div class="pz-menu-screen pz-menu-scroll" data-menu-screen="configuracoes" hidden>
          <h2>CONFIGURA\xC7\xD5ES</h2>
          <label class="pz-menu-option">
            <input id="pz-menu-enable-rain" type="checkbox" />
            <span>Chuva adicional sobre o v\xEDdeo</span>
          </label>
          <label class="pz-menu-option">
            <input id="pz-menu-high-contrast" type="checkbox" />
            <span>Texto com maior contraste</span>
          </label>
          <label class="pz-menu-option">
            <input id="pz-menu-developer-mode" type="checkbox" />
            <span>Modo desenvolvedor</span>
          </label>
          <p class="pz-menu-hint">Exibe a grade, bot\xF5es DEBUG e TESTE \xB7 QA, contadores e alvos de teste durante a partida.</p>
          <p class="pz-menu-hint">No jogo: use o controle esquerdo para andar e os bot\xF5es A\xC7\xC3O e ATAQUE para interagir.</p>
          <button type="button" class="pz-menu-action pz-menu-back" data-menu-action="voltar">\u2039 VOLTAR</button>
        </div>
        <div class="pz-menu-screen pz-menu-scroll" data-menu-screen="sobre" hidden>
          <h2>SOBRE O PROJETO Z</h2>
          <p>Jogo de sobreviv\xEAncia arcade isom\xE9trico em desenvolvimento para navegador.</p>
          <h3>NOVIDADES DO LABORAT\xD3RIO</h3>
          <ul>
            <li>Menu inicial animado com a tempestade e o acampamento.</li>
            <li>Modo desenvolvedor opcional, com tela limpa para jogar.</li>
            <li>Pedras pequenas P e M colet\xE1veis; G com colis\xE3o.</li>
            <li>Mais pedras miner\xE1veis e vegeta\xE7\xE3o com tamanhos variados.</li>
          </ul>
          <p class="pz-menu-hint">Esta \xE9 uma vers\xE3o de testes. O progresso ainda n\xE3o \xE9 salvo.</p>
          <button type="button" class="pz-menu-action pz-menu-back" data-menu-action="voltar">\u2039 VOLTAR</button>
        </div>
      </nav>
      <footer class="pz-menu-footer">
        <span class="pz-menu-version"></span>
        <span>LABORAT\xD3RIO S21</span>
      </footer>
    </div>
    <p class="pz-menu-attribution" aria-hidden="true">UM MUNDO PARA SOBREVIVER</p>
  `,document.body.appendChild(e),document.body.classList.add("pz-menu-open");let i=[...e.querySelectorAll("[data-menu-screen]")],a=e.querySelector('[data-menu-action="jogar"]'),r=e.querySelector(".pz-menu-status"),t=e.querySelector(".pz-menu-video");t.defaultMuted=!0,t.muted=!0,t.loop=!0,t.playsInline=!0,t.addEventListener("playing",()=>{window.setTimeout(()=>t.classList.add("pz-menu-video-ready"),180)},{once:!0}),t.play().catch(()=>{});let d=e.querySelector("#pz-menu-enable-rain");e.classList.add("pz-menu-rain-disabled");let p=e.querySelector("#pz-menu-high-contrast"),c=e.querySelector("#pz-menu-developer-mode");c.checked=h();let f=document.querySelector("#build-label")?.textContent||"";e.querySelector(".pz-menu-version").textContent=f.match(/v0\.0\.\d+(?:-lab\.\d+)?/)?.[0]??"LAB";let m="inicio",s=!1;function l(o){if(!s){m=o;for(let b of i)b.hidden=b.dataset.menuScreen!==o;r.textContent="",e.querySelector('[data-menu-screen="'+o+'"] button')?.focus({preventScroll:!0})}}e.querySelector('[data-menu-action="configuracoes"]').addEventListener("click",()=>l("configuracoes")),e.querySelector('[data-menu-action="sobre"]').addEventListener("click",()=>l("sobre"));for(let o of e.querySelectorAll('[data-menu-action="voltar"]'))o.addEventListener("click",()=>l("inicio"));d.addEventListener("change",()=>e.classList.toggle("pz-menu-rain-disabled",!d.checked)),p.addEventListener("change",()=>e.classList.toggle("pz-menu-high-contrast",p.checked)),c.addEventListener("change",()=>z(c.checked));function u(o){o.key==="Escape"&&m!=="inicio"&&!s&&(o.preventDefault(),l("inicio"))}return window.addEventListener("keydown",u),a.addEventListener("click",async()=>{if(!s){s=!0,a.disabled=!0,a.querySelector("span:last-child").textContent="CARREGANDO...",r.textContent="Preparando a floresta...";try{await n(),t.pause(),document.body.classList.remove("pz-menu-open"),window.removeEventListener("keydown",u),e.remove()}catch(o){s=!1,a.disabled=!1,a.querySelector("span:last-child").textContent="JOGAR",r.textContent="N\xE3o foi poss\xEDvel iniciar o jogo. Tente novamente.",console.error("[ProjetoZ menu] Erro ao iniciar partida",o)}}}),{element:e,show:l,destroy(){t.pause(),window.removeEventListener("keydown",u),document.body.classList.remove("pz-menu-open"),e.remove()}}}var k="./assets/index-DXkIl66M-forest-items-occlusion-devlab7.js";function E(){return document.querySelector("#game-canvas canvas")?Promise.reject(new Error("Game already initialized")):new Promise((n,e)=>{let i=document.createElement("script");i.type="module",i.src=k,i.dataset.menuGameBundle="1";let a=!1,r=p=>{a||(a=!0,clearTimeout(t),clearInterval(d),p?e(p):n())},t=window.setTimeout(()=>r(new Error("Game loading timed out")),45e3),d=window.setInterval(()=>{document.querySelector("#ui-layer .debug-toggle")&&r()},80);i.addEventListener("error",()=>r(new Error("Game bundle failed to load"))),document.body.appendChild(i)})}v(E);})();

"use strict";var PZMainMenuLab9=(()=>{var f="projetoz.developerMode.v1";function S(o){return o==="1"}var y=!1;function T(){try{return S(window.localStorage.getItem(f))}catch{return y}}function w(o){y=o;try{window.localStorage.setItem(f,o?"1":"0")}catch{}document.body.classList.toggle("pz-developer-mode",o)}function E(){let o=T();return document.body.classList.toggle("pz-developer-mode",o),o}function k(o){if(document.getElementById("pz-main-menu"))throw new Error("Menu already mounted");let e=document.createElement("section");e.id="pz-main-menu",e.style.setProperty("--pz-menu-background",'url("./menu-lab8/menu-poster.jpg")'),e.setAttribute("aria-label","Menu inicial do ProjetoZ"),e.innerHTML=`
    <div class="pz-menu-backdrop" aria-hidden="true"></div>
    <video class="pz-menu-video" aria-hidden="true" tabindex="-1"
      autoplay muted loop playsinline webkit-playsinline
      preload="auto" poster="./assets/menu-lab8/menu-poster.jpg">
      <source src="./assets/menu-lab9/menu-loop-som.mp4" type="video/mp4" />
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
            <li>Menu inicial animado, com som de chuva e trov\xF5es sincronizados.</li>
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
        <button type="button" class="pz-menu-sound-toggle" data-menu-action="som" aria-pressed="false" aria-label="Ativar som do menu">ATIVAR SOM</button>
        <span>LABORAT\xD3RIO S21</span>
      </footer>
    </div>
    <p class="pz-menu-attribution" aria-hidden="true">UM MUNDO PARA SOBREVIVER</p>
  `,document.body.appendChild(e),document.body.classList.add("pz-menu-open");let r=[...e.querySelectorAll("[data-menu-screen]")],a=e.querySelector('[data-menu-action="jogar"]'),i=e.querySelector(".pz-menu-status"),t=e.querySelector(".pz-menu-video"),p=e.querySelector('[data-menu-action="som"]');t.defaultMuted=!0,t.muted=!0,t.loop=!0,t.playsInline=!0,t.addEventListener("playing",()=>{window.setTimeout(()=>t.classList.add("pz-menu-video-ready"),180)},{once:!0}),t.play().catch(()=>{});let s=!1;function c(){let n=!t.muted;p.textContent=n?"SOM LIGADO":"ATIVAR SOM",p.setAttribute("aria-pressed",String(n)),p.setAttribute("aria-label",n?"Desligar som do menu":"Ativar som do menu")}function b(n){t.muted=!n,c(),n&&t.play().catch(()=>{t.muted=!0,c()})}function g(n){s||n.target instanceof Element&&n.target.closest('[data-menu-action="som"]')||n instanceof KeyboardEvent&&n.key!=="Enter"&&n.key!==" "||(s=!0,b(!0))}e.addEventListener("pointerdown",g,{capture:!0}),e.addEventListener("keydown",g,{capture:!0}),p.addEventListener("click",()=>{s=!0,b(t.muted)}),c();let x=e.querySelector("#pz-menu-enable-rain");e.classList.add("pz-menu-rain-disabled");let z=e.querySelector("#pz-menu-high-contrast"),u=e.querySelector("#pz-menu-developer-mode");u.checked=E();let M=document.querySelector("#build-label")?.textContent||"";e.querySelector(".pz-menu-version").textContent=M.match(/v0\.0\.\d+(?:-lab\.\d+)?/)?.[0]??"LAB";let v="inicio",l=!1;function d(n){if(!l){v=n;for(let h of r)h.hidden=h.dataset.menuScreen!==n;i.textContent="",e.querySelector('[data-menu-screen="'+n+'"] button')?.focus({preventScroll:!0})}}e.querySelector('[data-menu-action="configuracoes"]').addEventListener("click",()=>d("configuracoes")),e.querySelector('[data-menu-action="sobre"]').addEventListener("click",()=>d("sobre"));for(let n of e.querySelectorAll('[data-menu-action="voltar"]'))n.addEventListener("click",()=>d("inicio"));x.addEventListener("change",()=>e.classList.toggle("pz-menu-rain-disabled",!x.checked)),z.addEventListener("change",()=>e.classList.toggle("pz-menu-high-contrast",z.checked)),u.addEventListener("change",()=>w(u.checked));function m(n){n.key==="Escape"&&v!=="inicio"&&!l&&(n.preventDefault(),d("inicio"))}return window.addEventListener("keydown",m),a.addEventListener("click",async()=>{if(!l){l=!0,a.disabled=!0,a.querySelector("span:last-child").textContent="CARREGANDO...",i.textContent="Preparando a floresta...";try{await o(),t.pause(),document.body.classList.remove("pz-menu-open"),window.removeEventListener("keydown",m),e.remove()}catch(n){l=!1,a.disabled=!1,a.querySelector("span:last-child").textContent="JOGAR",i.textContent="N\xE3o foi poss\xEDvel iniciar o jogo. Tente novamente.",console.error("[ProjetoZ menu] Erro ao iniciar partida",n)}}}),{element:e,show:d,destroy(){t.pause(),window.removeEventListener("keydown",m),document.body.classList.remove("pz-menu-open"),e.remove()}}}var L="./assets/index-DXkIl66M-forest-items-occlusion-devlab7.js";function A(){return document.querySelector("#game-canvas canvas")?Promise.reject(new Error("Game already initialized")):new Promise((o,e)=>{let r=document.createElement("script");r.type="module",r.src=L,r.dataset.menuGameBundle="1";let a=!1,i=s=>{a||(a=!0,clearTimeout(t),clearInterval(p),s?e(s):o())},t=window.setTimeout(()=>i(new Error("Game loading timed out")),45e3),p=window.setInterval(()=>{document.querySelector("#ui-layer .debug-toggle")&&i()},80);r.addEventListener("error",()=>i(new Error("Game bundle failed to load"))),document.body.appendChild(r)})}k(A);})();

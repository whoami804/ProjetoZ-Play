"use strict";var PZMainMenuLab7=(()=>{var g="projetoz.developerMode.v1";function v(n){return n==="1"}var b=!1;function y(){try{return v(window.localStorage.getItem(g))}catch{return b}}function x(n){b=n;try{window.localStorage.setItem(g,n?"1":"0")}catch{}document.body.classList.toggle("pz-developer-mode",n)}function h(){let n=y();return document.body.classList.toggle("pz-developer-mode",n),n}function z(n){if(document.getElementById("pz-main-menu"))throw new Error("Menu already mounted");let e=document.createElement("section");e.id="pz-main-menu",e.style.setProperty("--pz-menu-background",'url("./menu-lab6/forest-real.png")'),e.setAttribute("aria-label","Menu inicial do ProjetoZ"),e.innerHTML=`
    <div class="pz-menu-backdrop" aria-hidden="true"></div>
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
            <input id="pz-menu-enable-rain" type="checkbox" checked />
            <span>Efeitos de chuva no menu</span>
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
            <li>Menu inicial em portugu\xEAs, com a floresta do jogo ao fundo.</li>
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
  `,document.body.appendChild(e),document.body.classList.add("pz-menu-open");let a=[...e.querySelectorAll("[data-menu-screen]")],o=e.querySelector('[data-menu-action="jogar"]'),r=e.querySelector(".pz-menu-status"),l=e.querySelector("#pz-menu-enable-rain"),c=e.querySelector("#pz-menu-high-contrast"),i=e.querySelector("#pz-menu-developer-mode");i.checked=h();let f=document.querySelector("#build-label")?.textContent||"";e.querySelector(".pz-menu-version").textContent=f.match(/v0\.0\.\d+(?:-lab\.\d+)?/)?.[0]??"LAB";let u="inicio",p=!1;function s(t){if(!p){u=t;for(let m of a)m.hidden=m.dataset.menuScreen!==t;r.textContent="",e.querySelector('[data-menu-screen="'+t+'"] button')?.focus({preventScroll:!0})}}e.querySelector('[data-menu-action="configuracoes"]').addEventListener("click",()=>s("configuracoes")),e.querySelector('[data-menu-action="sobre"]').addEventListener("click",()=>s("sobre"));for(let t of e.querySelectorAll('[data-menu-action="voltar"]'))t.addEventListener("click",()=>s("inicio"));l.addEventListener("change",()=>e.classList.toggle("pz-menu-rain-disabled",!l.checked)),c.addEventListener("change",()=>e.classList.toggle("pz-menu-high-contrast",c.checked)),i.addEventListener("change",()=>x(i.checked));function d(t){t.key==="Escape"&&u!=="inicio"&&!p&&(t.preventDefault(),s("inicio"))}return window.addEventListener("keydown",d),o.addEventListener("click",async()=>{if(!p){p=!0,o.disabled=!0,o.querySelector("span:last-child").textContent="CARREGANDO...",r.textContent="Preparando a floresta...";try{await n(),document.body.classList.remove("pz-menu-open"),window.removeEventListener("keydown",d),e.remove()}catch(t){p=!1,o.disabled=!1,o.querySelector("span:last-child").textContent="JOGAR",r.textContent="N\xE3o foi poss\xEDvel iniciar o jogo. Tente novamente.",console.error("[ProjetoZ menu] Erro ao iniciar partida",t)}}}),{element:e,show:s,destroy(){window.removeEventListener("keydown",d),document.body.classList.remove("pz-menu-open"),e.remove()}}}var w="./assets/index-DXkIl66M-forest-items-occlusion-devlab7.js";function E(){return document.querySelector("#game-canvas canvas")?Promise.reject(new Error("Game already initialized")):new Promise((n,e)=>{let a=document.createElement("script");a.type="module",a.src=w,a.dataset.menuGameBundle="1";let o=!1,r=i=>{o||(o=!0,clearTimeout(l),clearInterval(c),i?e(i):n())},l=window.setTimeout(()=>r(new Error("Game loading timed out")),45e3),c=window.setInterval(()=>{document.querySelector("#ui-layer .debug-toggle")&&r()},80);a.addEventListener("error",()=>r(new Error("Game bundle failed to load"))),document.body.appendChild(a)})}z(E);})();

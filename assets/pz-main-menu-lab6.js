"use strict";var PZMainMenuLab6=(()=>{function g(c){if(document.getElementById("pz-main-menu"))throw new Error("Menu already mounted");let e=document.createElement("section");e.id="pz-main-menu",e.style.setProperty("--pz-menu-background",'url("./menu-lab6/forest-real.png")'),e.setAttribute("aria-label","Menu inicial do ProjetoZ"),e.innerHTML=`
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
          <p class="pz-menu-hint">No jogo: use o controle esquerdo para andar e os bot\xF5es A\xC7\xC3O e ATAQUE para interagir.</p>
          <button type="button" class="pz-menu-action pz-menu-back" data-menu-action="voltar">\u2039 VOLTAR</button>
        </div>
        <div class="pz-menu-screen pz-menu-scroll" data-menu-screen="sobre" hidden>
          <h2>SOBRE O PROJETO Z</h2>
          <p>Jogo de sobreviv\xEAncia arcade isom\xE9trico em desenvolvimento para navegador.</p>
          <h3>NOVIDADES DO LABORAT\xD3RIO</h3>
          <ul>
            <li>Menu inicial em portugu\xEAs, com a floresta do jogo ao fundo.</li>
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
  `,document.body.appendChild(e),document.body.classList.add("pz-menu-open");let a=[...e.querySelectorAll("[data-menu-screen]")],t=e.querySelector('[data-menu-action="jogar"]'),o=e.querySelector(".pz-menu-status"),p=e.querySelector("#pz-menu-enable-rain"),s=e.querySelector("#pz-menu-high-contrast"),l=document.querySelector("#build-label")?.textContent||"";e.querySelector(".pz-menu-version").textContent=l.match(/v0\.0\.\d+(?:-lab\.\d+)?/)?.[0]??"LAB";let m="inicio",i=!1;function r(n){if(!i){m=n;for(let d of a)d.hidden=d.dataset.menuScreen!==n;o.textContent="",e.querySelector('[data-menu-screen="'+n+'"] button')?.focus({preventScroll:!0})}}e.querySelector('[data-menu-action="configuracoes"]').addEventListener("click",()=>r("configuracoes")),e.querySelector('[data-menu-action="sobre"]').addEventListener("click",()=>r("sobre"));for(let n of e.querySelectorAll('[data-menu-action="voltar"]'))n.addEventListener("click",()=>r("inicio"));p.addEventListener("change",()=>e.classList.toggle("pz-menu-rain-disabled",!p.checked)),s.addEventListener("change",()=>e.classList.toggle("pz-menu-high-contrast",s.checked));function u(n){n.key==="Escape"&&m!=="inicio"&&!i&&(n.preventDefault(),r("inicio"))}return window.addEventListener("keydown",u),t.addEventListener("click",async()=>{if(!i){i=!0,t.disabled=!0,t.querySelector("span:last-child").textContent="CARREGANDO...",o.textContent="Preparando a floresta...";try{await c(),document.body.classList.remove("pz-menu-open"),window.removeEventListener("keydown",u),e.remove()}catch(n){i=!1,t.disabled=!1,t.querySelector("span:last-child").textContent="JOGAR",o.textContent="N\xE3o foi poss\xEDvel iniciar o jogo. Tente novamente.",console.error("[ProjetoZ menu] Erro ao iniciar partida",n)}}}),{element:e,show:r,destroy(){window.removeEventListener("keydown",u),document.body.classList.remove("pz-menu-open"),e.remove()}}}var x="./assets/index-DXkIl66M-forest-items-occlusion-rocklab5.js";function z(){return document.querySelector("#game-canvas canvas")?Promise.reject(new Error("Game already initialized")):new Promise((c,e)=>{let a=document.createElement("script");a.type="module",a.src=x,a.dataset.menuGameBundle="1";let t=!1,o=l=>{t||(t=!0,clearTimeout(p),clearInterval(s),l?e(l):c())},p=window.setTimeout(()=>o(new Error("Game loading timed out")),45e3),s=window.setInterval(()=>{document.querySelector("#ui-layer .debug-toggle")&&o()},80);a.addEventListener("error",()=>o(new Error("Game bundle failed to load"))),document.body.appendChild(a)})}g(z);})();

"use strict";var PZMainMenuLab10=(()=>{function O(o,e){return(o%e+e)%e}function B(o,e,c){return O(o-e+c/2,c)-c/2}function D(o,e){let u=fetch("./assets/menu-lab10/audio-loop.m4a").then(async n=>{if(!n.ok)throw new Error("Falha ao baixar som do menu");return n.arrayBuffer()}).catch(()=>null),t,s,p,l=!1,d=!1,f=0,E=-1/0;function x(n){d||e(n)}function b(n=0){if(!p||!t)return;let i=p;p=void 0;let r=t.currentTime;try{i.gain.gain.cancelScheduledValues(r),i.gain.gain.setValueAtTime(i.gain.gain.value,r),n>0?i.gain.gain.linearRampToValueAtTime(0,r+n):i.gain.gain.setValueAtTime(0,r),i.node.stop(r+n+.015)}catch{try{i.node.stop()}catch{}}i.node.onended=()=>{i.node.disconnect(),i.gain.disconnect()}}function T(n,i){let r=Math.round(8.8*n.sampleRate);if(n.length<r-512)throw new Error("\xC1udio decodificado incompleto");let y=i.createBuffer(n.numberOfChannels,r,n.sampleRate);for(let g=0;g<n.numberOfChannels;g++){let w=y.getChannelData(g),m=n.getChannelData(g);w.set(m.subarray(0,Math.min(r,m.length)));let v=w[0]-w[r-1],L=Math.max(2,Math.round(n.sampleRate*.018));for(let A=0;A<L;A++)w[r-L+A]+=v*(A/(L-1))}return y}function S(n){if(!l||d||!t||!s||t.state!=="running")return;let i=t,r=i.currentTime,y=.035,g=r+y,w=O(o.currentTime+y,8.8);n?b(.11):b();let m=i.createBufferSource();m.buffer=s,m.loop=!0,m.loopStart=0,m.loopEnd=8.8;let v=i.createGain();v.gain.setValueAtTime(0,r),v.gain.setValueAtTime(0,g),v.gain.linearRampToValueAtTime(.88,g+(n?.11:.14)),m.connect(v),v.connect(i.destination),m.start(g,w),p={node:m,gain:v,at:g,offset:w},E=r,x("ligado")}function h(){if(!l||!p||!t||o.paused||t.state!=="running")return;let n=t.currentTime;if(n-E<2.3)return;let i=O(p.offset+(n-p.at),8.8),r=O(o.currentTime,8.8);Math.abs(B(i,r,8.8))>.16&&S(!0)}o.addEventListener("timeupdate",h);async function z(n,i){try{let[r]=await Promise.all([u,i]);if(!r||!t)throw new Error("Som indispon\xEDvel");if(!s){let y=await t.decodeAudioData(r.slice(0));s=T(y,t)}if(d||!l||n!==f)return;S(!1)}catch(r){if(d||n!==f)return;l=!1,b(),x("indisponivel"),console.warn("[ProjetoZ menu] Falha ao habilitar som",r)}}function k(){if(!(d||l)){l=!0,x("carregando");try{t||(t=new AudioContext);let n=t.resume();z(++f,n)}catch(n){l=!1,x("indisponivel"),console.warn("[ProjetoZ menu] Web Audio indispon\xEDvel",n)}}}function a(){d||(l=!1,++f,b(.06),x("desligado"))}function M(){d||(l=!1,++f,b(),o.removeEventListener("timeupdate",h),t&&t.close().catch(()=>{}),d=!0)}return e("desligado"),{enable:k,disable:a,destroy:M,get enabled(){return l}}}var C="projetoz.developerMode.v1";function N(o){return o==="1"}var P=!1;function V(){try{return N(window.localStorage.getItem(C))}catch{return P}}function I(o){P=o;try{window.localStorage.setItem(C,o?"1":"0")}catch{}document.body.classList.toggle("pz-developer-mode",o)}function G(){let o=V();return document.body.classList.toggle("pz-developer-mode",o),o}function R(o){if(document.getElementById("pz-main-menu"))throw new Error("Menu already mounted");let e=document.createElement("section");e.id="pz-main-menu",e.style.setProperty("--pz-menu-background",'url("./menu-lab8/menu-poster.jpg")'),e.setAttribute("aria-label","Menu inicial do ProjetoZ"),e.innerHTML=`
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
            <li>Menu animado com som cont\xEDnuo de chuva e trov\xF5es.</li>
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
  `,document.body.appendChild(e),document.body.classList.add("pz-menu-open");let c=[...e.querySelectorAll("[data-menu-screen]")],u=e.querySelector('[data-menu-action="jogar"]'),t=e.querySelector(".pz-menu-status"),s=e.querySelector(".pz-menu-video"),p=e.querySelector('[data-menu-action="som"]');s.defaultMuted=!0,s.muted=!0,s.loop=!0,s.playsInline=!0,s.addEventListener("playing",()=>{window.setTimeout(()=>s.classList.add("pz-menu-video-ready"),180)},{once:!0}),s.play().catch(()=>{});let l=!1,d=D(s,a=>{switch(a){case"ligado":p.textContent="SOM LIGADO";break;case"carregando":p.textContent="CARREGANDO SOM...";break;case"indisponivel":p.textContent="TENTAR SOM";break;default:p.textContent="ATIVAR SOM"}p.setAttribute("aria-pressed",String(a==="ligado")),p.setAttribute("aria-label",a==="ligado"?"Desligar som do menu":"Ativar som do menu")});function f(a){l||a.target instanceof Element&&a.target.closest('[data-menu-action="som"]')||a instanceof KeyboardEvent&&a.key!=="Enter"&&a.key!==" "||(l=!0,d.enable())}e.addEventListener("pointerdown",f,{capture:!0}),e.addEventListener("keydown",f,{capture:!0}),p.addEventListener("click",()=>{l=!0,d.enabled?d.disable():d.enable()});let E=e.querySelector("#pz-menu-enable-rain");e.classList.add("pz-menu-rain-disabled");let x=e.querySelector("#pz-menu-high-contrast"),b=e.querySelector("#pz-menu-developer-mode");b.checked=G();let T=document.querySelector("#build-label")?.textContent||"";e.querySelector(".pz-menu-version").textContent=T.match(/v0\.0\.\d+(?:-lab\.\d+)?/)?.[0]??"LAB";let S="inicio",h=!1;function z(a){if(!h){S=a;for(let M of c)M.hidden=M.dataset.menuScreen!==a;t.textContent="",e.querySelector('[data-menu-screen="'+a+'"] button')?.focus({preventScroll:!0})}}e.querySelector('[data-menu-action="configuracoes"]').addEventListener("click",()=>z("configuracoes")),e.querySelector('[data-menu-action="sobre"]').addEventListener("click",()=>z("sobre"));for(let a of e.querySelectorAll('[data-menu-action="voltar"]'))a.addEventListener("click",()=>z("inicio"));E.addEventListener("change",()=>e.classList.toggle("pz-menu-rain-disabled",!E.checked)),x.addEventListener("change",()=>e.classList.toggle("pz-menu-high-contrast",x.checked)),b.addEventListener("change",()=>I(b.checked));function k(a){a.key==="Escape"&&S!=="inicio"&&!h&&(a.preventDefault(),z("inicio"))}return window.addEventListener("keydown",k),u.addEventListener("click",async()=>{if(!h){h=!0,u.disabled=!0,u.querySelector("span:last-child").textContent="CARREGANDO...",t.textContent="Preparando a floresta...";try{await o(),d.destroy(),s.pause(),document.body.classList.remove("pz-menu-open"),window.removeEventListener("keydown",k),e.remove()}catch(a){h=!1,u.disabled=!1,u.querySelector("span:last-child").textContent="JOGAR",t.textContent="N\xE3o foi poss\xEDvel iniciar o jogo. Tente novamente.",console.error("[ProjetoZ menu] Erro ao iniciar partida",a)}}}),{element:e,show:z,destroy(){d.destroy(),s.pause(),window.removeEventListener("keydown",k),document.body.classList.remove("pz-menu-open"),e.remove()}}}var j="./assets/index-DXkIl66M-forest-items-occlusion-devlab7.js";function _(){return document.querySelector("#game-canvas canvas")?Promise.reject(new Error("Game already initialized")):new Promise((o,e)=>{let c=document.createElement("script");c.type="module",c.src=j,c.dataset.menuGameBundle="1";let u=!1,t=l=>{u||(u=!0,clearTimeout(s),clearInterval(p),l?e(l):o())},s=window.setTimeout(()=>t(new Error("Game loading timed out")),45e3),p=window.setInterval(()=>{document.querySelector("#ui-layer .debug-toggle")&&t()},80);c.addEventListener("error",()=>t(new Error("Game bundle failed to load"))),document.body.appendChild(c)})}R(_);})();

# ProjetoZ — Roteiro beta LAB37 (19/11/2026)

**Versão:** `v0.0.22-lab.37` — BETA PÚBLICA NÃO PROMOVIDA.

**Jogo:** https://whoami804.github.io/ProjetoZ-Play/

Testar preferencialmente **Safari no iPhone e Chrome no Android,
com o aparelho na horizontal**. Internet é necessária para carregar
o Phaser pela CDN. Algumas interfaces de tela cheia variam conforme
o navegador; não presumir fullscreen no iOS.

## Testes prioritários

1. **Abrir e jogar.** Confirmar que aparece `v0.0.22-lab.37`,
   entrar por JOGAR, girar para paisagem, caminhar com o joystick e
   verificar estabilidade e ausência de tela preta.
2. **Mundo e construções.** Explorar árvores e pedras, usar AÇÃO
   para coleta, observar fogueira, bancada, armário e curtume.
   Essas construções devem ficar **100% opacas** mesmo à distância.
3. **Inventário e status.** Abrir a mochila (8 espaços), conferir
   ícones de sede/fome/vida, madeira, tábuas, machados, galho e pedra;
   trocar entre Inventário, Fabricação, Habilidades e Status.
4. **Combate e caça.** Observar zumbis/animais, experimentar o arco
   e flecha, verificar cadáveres/loot, tamanho dos sprites e
   interação sem travar. Não considerar dano/IA aprovados apenas
   por aparência.
5. **Fogueira e bancada.** Coletar carne, assar, recolher e usar,
   observar HP quando aplicável, além da fila normal de fabricação.
6. **Curtume LAB37 (teste guiado).** No menu de configurações,
   ativar o **Modo desenvolvedor**. No jogo, abrir **TESTE · QA**,
   escolher **LAB37 · 2 PELES + IR AO CURTUME**, aproximar-se
   da estação e usar **AÇÃO**. A estação reúne secador, tina e mesa
   como **um único objeto interativo**. Escolher a receita de pele
   de veado ou lobo e tocar **CURTIR**. Após aproximadamente
   **30 segundos** por pele, tocar **RECOLHER PRONTOS** e verificar
   o item **Couro Curtido** na mochila, com ícone de rolo de couro.
7. **Estados e mochila cheia.** Na estação, verificar arte vazia,
   processando e pronta. Se a mochila estiver cheia, o couro deve
   continuar disponível na saída até ser recolhido.
8. **Navegador e sessão.** Verificar orientação, áudio, legibilidade,
   cliques/toques, possível queda de FPS e comportamento ao recarregar.

## O que ainda não está pronto
- Produtos derivados de couro na bancada existente.
- Comprovação de multiplayer e persistência após sair/recarregar.
- Validação de desempenho prolongado e métricas de FPS em dispositivos.
- Teste físico final de Safari/Android nesta LAB37.

## Como informar um problema

Enviar **aparelho e sistema**, **navegador e versão**,
**versão do jogo**, **ações executadas**, **resultado esperado**,
**resultado observado** e **captura ou vídeo**, se possível.
Exemplo: `iPhone / Safari / LAB37 / abrir curtume / tocar CURTIR /
esperado: inicia 30 s / observado: botão não responde`.

Os testes automatizados no S21 foram aprovados, mas não substituem
os testes físicos dos beta testers. Esta versão não é uma promoção.

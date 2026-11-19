# ProjetoZ — teste beta LAB13 (12/11/2026)

**Canal experimental. Não é versão promovida e não há persistência/multiplayer comprovados.**
Jogável em https://whoami804.github.io/ProjetoZ-Play/ .

## O que mudou desde a beta de 10/11

- Inventário do sobrevivente com abas à esquerda, personagem/equipamentos à direita; área geral mais compacta (~37% nas dimensões medidas).
- Craft original preservado com **FABRICAR** ao lado de cada receita.
- Menu inicial com vídeo/áudio e opção para habilitar o modo desenvolvedor, evitando a tela de debug na experiência comum.
- Pedras e vegetação ajustadas, mantendo corte/colisão e oclusão.
- **Android fullscreen:** em paisagem há tentativa automática ao girar; em Chrome normalmente é exigido um toque. Ao tocar **JOGAR** em paisagem solicita fullscreen; se não funcionar, pressione **⛶ TELA CHEIA**. O botão serve para sair também.
- iPhone Safari: fullscreen por API depende do suporte do navegador; se não disponível, usar a tela inicial como Web App (quando aplicável). Não afirmar que PWA já está configurado nesta beta.

## Teste sugerido

1. Abra o link em Chrome Android e Safari iPhone. Gire para paisagem e verifique se o menu cabe e se há barras do navegador.
2. Toque **JOGAR**. No Android, confira se entrou em fullscreen; se não, pressione o botão **TELA CHEIA**. Confira retorno ao modo normal.
3. Movimente-se com o joystick e use **AÇÃO** e **ATAQUE**. Observe colisões com árvores, pedras, corte e transparência ao atravessar o primeiro plano.
4. Abra o inventário, troque entre abas, confira 8 slots, personagem, informações e craft. Se tiver materiais, fabrique/cancele uma receita e confira a quantidade de recursos.
5. Verifique chuva/áudio do menu, modo desenvolvedor e legibilidade na orientação horizontal.
6. Informe dispositivo, navegador e versão, passos para reproduzir, screenshot (se possível), travamento, FPS percebido e falhas de interação.

**Importante:** o status HTTP 200 e testes automatizados não substituem validação física de Safari/Android. Não tratar como promoção.

**Rastreabilidade do pacote atual:** [manifesto LAB13](S21_BETA_LAB13_SHA256_MANIFEST.json).
Manifesto da beta de 10/11 é histórico e foi preservado separadamente.

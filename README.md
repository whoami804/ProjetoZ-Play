# ProjetoZ — v0.0.22 · Versão principal

**VERSÃO PRINCIPAL / PROMOVIDA** em 19/11/2026 por autorização do proprietário.
A `v0.0.22` consolida a LAB37 como referência oficial para o próximo desenvolvimento,
substituindo a `v0.0.21`. A atualização é uma promoção de código e de distribuição,
não comprovação automática de QA físico, persistência ou multiplayer.

## [Jogar ProjetoZ v0.0.22](https://whoami804.github.io/ProjetoZ-Play/)

**Inclui:** floresta e interação com árvores/pedras, zumbis, veados e lobos,
ciclo de dia/noite e chuva, inventário unificado de 8 slots, equipamentos,
arco/flecha, armazenamento, fogueira, bancada, ícones de status e de itens
e curtume de peles. Construções não ficam transparentes ao se afastar.

O curtume é **uma única estrutura interativa** formada por secador, tina
e mesa. Cada pele crua de veado/lobo pode virar 1 couro curtido em 30 segundos.
Itens finais confeccionados em couro ainda serão desenvolvidos.

### Publicação, testes e rastreabilidade

- [Notas da versão e orientação dos jogadores](./RELEASE_NOTES_V0_0_22.md).
- [Manifesto SHA-256 dos 85 arquivos publicados](./MAIN_V0_0_22_SHA256_MANIFEST.json).
- [Histórico LAB37 (beta)](./S21_BETA_LAB37_SHA256_MANIFEST.json).
- [Histórico LAB13 (beta)](./S21_BETA_LAB13_SHA256_MANIFEST.json).
- [Histórico da beta de 10/11](./S21_BETA_SHA256_MANIFEST.json).
- [Notas históricas LAB37](./qa/historical/BETA_NOTES_LAB37_2026-11-19.md).
- [Prévia histórica do terreno](./preview/v0.0.21.1-pr22/).

A fonte oficial agora está em `whoami804/ProjetoZ` na branch `main`.
O pacote da aplicação é uma cópia byte a byte da build de promoção validada no S21,
sem reconstrução na publicação do Play.

**Limites:** Phaser necessita de internet/CDN, QA físico da versão promovida
em Safari/Chrome segue pendente, multiplayer/persistência ainda não validados.
Rollback: `archive/pre-v0.0.22-main-20261119`.

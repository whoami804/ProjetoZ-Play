# ProjetoZ — Beta pública S21 · v0.0.22-lab.37

**BETA PARA TESTADORES — NÃO PROMOVIDA.** A versão estável do
ProjetoZ permanece **v0.0.21**. Este site distribui o jogo em
desenvolvimento; não é uma versão final.

## [Jogar a beta pelo GitHub Pages](https://whoami804.github.io/ProjetoZ-Play/)

**Novidades deste pacote (LAB37):** floresta e dia/noite com chuva,
combate e caça, itens e equipamentos com sprites, inventário unificado
com 8 slots, coleta de loot, armário, fogueira/cozimento, bancada,
ícones de status, arco/flecha e **curtume de couro**. O curtume reúne
secador, tina e mesa num único ponto de interação: uma pele de veado
ou de lobo produz um couro curtido após 30 segundos. O item tem
arte própria na mochila. Construções permanecem totalmente opacas.

**[Roteiro dos beta testers e como relatar problemas](./BETA_NOTES.md)**

### Rastreabilidade
- [Manifesto SHA-256 dos 85 arquivos exatos desta beta](./S21_BETA_LAB37_SHA256_MANIFEST.json).
- [Manifesto histórico LAB13](./S21_BETA_LAB13_SHA256_MANIFEST.json) e
  [notas da LAB13](./qa/historical/BETA_NOTES_LAB13_2026-11-12.md).
- [Manifesto histórico de 10/11](./S21_BETA_SHA256_MANIFEST.json).
- [Prévia histórica de terreno](./preview/v0.0.21.1-pr22/).
- Rollback público preservado na branch
  `archive/pre-lab37-beta-20261119`.

O pacote do jogo é uma **cópia byte a byte da build local do S21**,
sem recompilação durante a publicação. Código e documentação de
engenharia permanecem no repositório **privado**
`whoami804/ProjetoZ`, branch `beta/s21-lab37-20261119`.

**Limitações conhecidas:** validação física de Safari/Chrome para
LAB37 ainda pendente, multiplayer e persistência não comprovados,
produtos finais de couro ainda não implementados. O Phaser exige
internet para carregamento pela CDN. Não houve promoção da versão estável.

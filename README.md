# ProjetoZ-Play

Public browser test build of ProjetoZ.

**Currently published for owner device QA: v0.0.21 — World Sprite Integration Test / RC1 (STAGING, NOT PROMOTED).**

- Owner explicitly authorized this **public test deployment**, not a merge or promotion.
- Canonical game source: private `whoami804/ProjetoZ@44ec7904ae0bdcce1ed4cf11383ade8bad2656a2`.
- Official manual Release Candidate: https://github.com/whoami804/ProjetoZ/actions/runs/40438668235 — SUCCESS.
- RC1 gates: Focused PASS (99/99), Game Build PASS, WebKit PASS (11/11), SHA-256 manifest PASS (12/12 build files).
- RC1 build artifact: `projetoz-browser-build` #12705571011, ZIP SHA-256 `04021d5ffbe40a85ed78411d9dc6a25f01160f1821e769b727e5455329b910ec`.
- The 12 deployed browser files are the **exact byte-for-byte RC1 artifacts**, not a rebuild. Previous compiled JS was removed.
- Original six experimental pixel-art sprites are included; ground samples are *not* an approved tiling system.
- Private PR #15 remains open; v0.0.21 OWNER DEVICE PASS is **PENDING**.

**Last gameplay baseline promoted and accepted: v0.0.20 — Living Forest Expansion — PROMOTED / PASS (RC1).**

For QA on iPhone Safari in landscape: inspect sprite readability and scale, front/behind layering, tree chop/reset, boulder mine/reset, ground seam alignment, joystick and action controls, and performance.

The private repository `whoami804/ProjetoZ` remains the system of record. No gameplay source merge or version promotion is implied by this staging publication.

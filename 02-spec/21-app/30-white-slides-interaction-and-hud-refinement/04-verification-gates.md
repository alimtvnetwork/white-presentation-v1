# 04-Verification Gates: Quality Assurance Matrix & Release Checklist

> **Module:** `02-spec/21-app/30-white-slides-interaction-and-hud-refinement`  
> **Status:** ACTIVE SPECIFICATION  
> **Target Release:** `v1.3.2`

---

## 1. 7-Dimensional Verification Quality Gate

Before cutting release `v1.3.2`, all 7 verification gates must pass without exception:

| Gate | Criterion | Verification Method | Pass Threshold |
|---|---|---|---|
| **Gate 1: Contrast Integrity** | ZERO light yellow/amber text on light canvases. | Mechanical source audit for `text-amber-*` on light backgrounds. | 0 violations. |
| **Gate 2: Northern Typography** | Kickers $\ge 14\text{px}$, titles $\ge 42\text{px}$, body $\ge 16\text{px}$. | Visual and CSS inspection of updated slides. | 100% compliance. |
| **Gate 3: Hover & Step Popups** | Left graphic hovers/clicks reveal right detail card. | Manual and state transition check. | Smooth CSS3 transitions. |
| **Gate 4: Low-Opacity HUD** | Navigation controls sit at 8%–10% idle opacity. | CSS inspection (`opacity-10 hover:opacity-100`). | 8%–10% idle opacity. |
| **Gate 5: Tooltips & Shortcuts** | Navigation chips and dots show titles and `<kbd>` shortcuts. | DOM inspection of tooltips. | Present on all chips. |
| **Gate 6: Hard Rule #6** | Every `.tsx` component file remains strictly $\le 100$ lines. | PowerShell line-count inspection script. | 0 files $> 100$ lines. |
| **Gate 7: Build & TypeScript** | Clean production build and zero compile errors. | `pnpm exec tsc --noEmit` & `pnpm run build`. | Exit code 0. |

---

## 2. Release & Version Bump Protocol

1. Update `package.json` to version `1.3.2`.
2. Update `changelog.md` with detailed release notes under `## [1.3.2]`.
3. Check version synchronization across repository files via `python 03-ai-scripts/14-version-sync-checker.py`.
4. Stage changes explicitly: `git add <files>`.
5. Execute GitMap atomic hyphen commit:
   `gitmap cpf "presentation - implement hover step interactions northern font scaling and 8 percent idle hud"`
6. Create git release tag `v1.3.2` and push to remote.

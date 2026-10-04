# Subtask 01: Global PPT Color Themes & Animation Engine Expansion

> **Task ID:** `Task-01`  
> **Parent:** `47-global-ppt-suite2029-slide-expansion`  
> **Status:** `PENDING`  
> **Owner:** Worker 01  

---

## Scope & Target Files
1. `src/themes/gradientTokens.ts`
   - Register 2 new canonical themes: `global-sapphire-executive` and `cyber-emerald-aurora`.
   - Implement complete 10-step mathematical stops (`makeStop 0..9`), relative luminance values, and unadorned `hslRaw` triplets for alpha compositing.
   - Update `CANONICAL_THEME_IDS`, `CANONICAL_THEMES`, and `THEME_FAMILIES`.
2. `src/themes/themeRuntime.ts`
   - Register `global-sapphire-executive` and `cyber-emerald-aurora` in `KNOWN_LIGHT_ACCENTS` with verified WCAG AA contrast ($C_R \ge 4.5:1$).
3. `src/styles/animations.less`
   - Implement 5 GPU-accelerated keyframe animations and utility classes:
     - `quantumEntanglementWave` (`.animate-quantum-wave`)
     - `neuromorphicSpikeTrace` (`.animate-neuromorphic-spike`)
     - `hyperDimensionalIsometricSnap` (`.animate-isometric-snap`)
     - `agentDialecticConsensusLock` (`.animate-consensus-lock`)
     - `zkProofAttestationIris` (`.animate-zk-iris`)

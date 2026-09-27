# 04-Verification Gates: Steps Slide Acceptance Invariants

## 1. Quality & Lint Invariants

1. **Gate 1: Hard Rule #6 Sizing Cap:**
   - Every modified and newly authored React component file in `src/components/` MUST NOT exceed 100 lines.
2. **Gate 2: TypeScript & Vite Build:**
   - `npm run build` must compile 0 errors and 0 type warnings.
3. **Gate 3: CI Quality Runner:**
   - `python 03-ai-scripts/06-cicd-local-runner.py --all` must pass all 36 quality gates (100% Green).
4. **Gate 4: Verbatim Feature Completeness:**
   - The `steps` archetype is ported from `flat-slide-show`.
   - Both "How We Ship" and "Architecture, in Three Reveals" slides are accessible in the deck.
   - Interactive stepping triggers audio clicks and updates active visual states.
   - High-contrast text shadows adhere to canonical standards.

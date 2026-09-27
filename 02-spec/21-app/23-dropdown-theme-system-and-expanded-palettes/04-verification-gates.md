# 04-Verification Gates: Dropdown Theme System

## 1. Quality & Lint Invariants

1. **Gate 1: Hard Rule #6 Component Sizing:**
   - `src/components/theme/ThemeSelector.tsx` must be strictly $\le 100$ lines.
2. **Gate 2: Source File Sizing:**
   - `src/themes/gradientTokens.ts` must remain strictly $\le 300$ lines (or adhere to baseline).
3. **Gate 3: Build & Lint:**
   - `npm run build` compiles with 0 errors.
   - `python 03-ai-scripts/06-cicd-local-runner.py --all` passes 36/36 quality gates.
4. **Gate 4: Verbatim Feature Verification:**
   - Dropdown opens and closes on click/click-outside.
   - 10 distinct themes available with preview swatches and active checkmarks.
   - Global shortcuts `T` and `1`–`0` function correctly.

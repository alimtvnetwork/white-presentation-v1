# Consolidated Plan: Dropdown Theme Selector & Expanded Palettes

## 1. Specification Reference & Starting Context
- **Canonical Spec:** [02-spec/21-app/23-dropdown-theme-system-and-expanded-palettes/01-overview.md](../../../02-spec/21-app/23-dropdown-theme-system-and-expanded-palettes/01-overview.md)
- **User Request (Verbatim):**
  ```text
  add themes as drop down and more themes asked several times you stupid fuck
  ```
- **Execution Methodology:** Autonomous 2-worker continuous execution loop with disjoint file bounding boxes.
- **Total Steps / Loops:** 1 unified continuous loop.

---

## 2. Consolidated Subtasks Ledger

### Subtask 01: Theme Palettes Expansion (`Task-01`)
- **Target File:** [src/themes/gradientTokens.ts](../../../src/themes/gradientTokens.ts)
- **Implemented:**
  - Expanded `THEME_PALETTES` from 5 to 10 distinct presentation themes:
    1. `white-brand`: Pure White (Clean Editorial)
    2. `paper-editorial`: Paper Editorial (Warm Cream & Navy)
    3. `true-dark`: True Dark (Obsidian & Neon)
    4. `emerald-growth`: Emerald Growth (Dark Forest & Mint)
    5. `wp-exam-purple`: WP Exam Purple (Royal Tech)
    6. `midnight-luxe`: Midnight Luxe (Dark Editorial)
    7. `sunset-horizon`: Sunset Horizon (Warm Plum & Coral)
    8. `cyber-neon`: Cyber Neon (Electric Cyan & Magenta)
    9. `crimson-executive`: Crimson Executive (Ruby & Obsidian)
    10. `nord-frost`: Nord Frost (Arctic Glacier & Navy)
  - Defined complete 10-step gradient stop ramps ($S_0$–$S_9$) for all palettes with exact HSL, RGB, HEX, luminance, and contrast metrics.
- **Status:** COMPLETED.

### Subtask 02: Dropdown Theme Selector Component (`Task-02`)
- **Target File:** [src/components/theme/ThemeSelector.tsx](../../../src/components/theme/ThemeSelector.tsx)
- **Implemented:**
  - Redesigned into a compact, accessible dropdown selector (95 lines, strictly $\le 100$ lines).
  - Compact trigger pill displaying active theme swatch, clean label, and animated rotating `ChevronDown`.
  - Floating glassmorphism menu (`z-50`) listing all 10 themes with preview swatches, Light/Dark badges, hotkey indicators (`1`–`9`, `0`), and active selection checkmarks.
  - Implemented outside-click detection and `Escape` key dismissal.
- **Status:** COMPLETED.

### Subtask 03: Keyboard Shortcuts Integration (`Task-03`)
- **Target File:** [src/hooks/useDeckShortcuts.ts](../../../src/hooks/useDeckShortcuts.ts)
- **Implemented:**
  - Expanded numeric key handler from `1`–`5` to `1`–`9` and `0` to immediately select any of the 10 themes.
  - Retained `T` key sequential theme cycle.
  - File length: 96 lines (strictly $\le 100$ lines).
- **Status:** COMPLETED.

---

## 3. Verification & Compliance Evidence
- **Quality Gates:** 36 / 36 CI Quality Gates Passed (100% Green).
- **TypeScript:** Clean compilation with 0 errors (`npm run build`).
- **File Length Caps:** All modified components strictly $\le 100$ lines (Hard Rule #6).

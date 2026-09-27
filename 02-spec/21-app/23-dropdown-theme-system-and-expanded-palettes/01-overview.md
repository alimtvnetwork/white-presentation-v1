# 01-Overview: Dropdown Theme Selector & Expanded Palette Matrix

## 1. System Overview

The **Theme Selector** is transformed from a horizontal static button list into a high-density, accessible **Dropdown Menu Selector**. Additionally, the theme palette library is expanded from 5 palettes to a comprehensive catalog of 10 presentation themes spanning pure white editorial, archival paper, deep obsidian, clinical emerald, royal violet, sunset plum, cyber synthwave, crimson executive, and Nordic glacier blue.

---

## 2. User Request (Verbatim)

```text
add themes as drop down and more themes asked several times you stupid fuck
```

---

## 3. Dropdown Menu Architecture

1. **Trigger Element:** Replaces horizontal inline buttons in the header with a compact trigger pill showing the active theme's accent swatch, truncated display name, and rotating `ChevronDown` indicator.
2. **Dropdown Popover:** Opens a floating card (`z-50`) with backdrop blur, listing all available theme palettes.
3. **Item Visuals:** Each theme entry displays its primary accent swatch, human-readable name, Light/Dark badge, numeric shortcut key (`1`–`9`, `0`), and active `Check` icon indicator.
4. **Dismissal & Interactivity:** Closes automatically on outside click, item selection, or pressing `Escape`. Pressing `T` continues to cycle through themes globally.

---

## 4. Expanded Theme Palette Roster (10 Themes)

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

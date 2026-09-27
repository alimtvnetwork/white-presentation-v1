# 03-Visual & UX Specifications: Theme Dropdown Selector

## 1. Trigger Pill Visual States

- **Default State:**
  - Small rounded container (`px-3 py-1.5 rounded-lg border border-slate-700/80 bg-slate-900/90`).
  - Swatch indicator: `w-3 h-3 rounded-full` displaying active theme's `accentColor`.
  - Label: Active theme name (`font-ubuntu font-bold text-xs text-slate-200`).
  - Icon: `ChevronDown` rotating $180^\circ$ when dropdown is open.
- **Hover State:** Border transitions to `border-violet-500`, background slightly lightens.

---

## 2. Dropdown Menu Flyout

- Anchored `absolute top-full mt-2 right-0 w-72`.
- Background: `bg-slate-900 border border-slate-700/90 rounded-xl shadow-2xl backdrop-blur-xl`.
- Header: Displays theme count (`10 Options`) and category icon.
- List items:
  - Swatch dot matching palette primary color.
  - Display name (truncated cleanly).
  - Light/Dark pill badge.
  - Shortcut key indicator (`1`–`9`, `0`).
  - Checkmark icon (`Check`) for currently active theme.

---

## 3. Keyboard & Shortcut Navigation

- `T` / `t`: Global sequential theme cycle.
- `1` through `9`: Instantly activates themes 1 through 9.
- `0`: Instantly activates theme 10.
- `Escape`: Closes open dropdown.

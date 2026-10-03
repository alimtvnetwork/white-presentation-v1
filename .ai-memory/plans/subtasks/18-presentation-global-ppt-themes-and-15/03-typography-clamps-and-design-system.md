# Subtask Plan 03: Typography Clamps & Design System Modernization

> **Subtask Identifier:** `.ai-memory/plans/subtasks/18-presentation-global-ppt-themes-and-15/03-typography-clamps-and-design-system.md`  
> **Parent Task:** [18-presentation-global-ppt-themes-and-15](../../pending/18-presentation-global-ppt-themes-and-15.md)  
> **Assigned Owner:** Worker Subagent / Styling Specialist  
> **Owned Files:** `src/styles/variables.less`, `src/styles/presentation.less`  
> **Target Release:** `v1.8.0`  
> **Status:** `PLAN-READY`  
> **Author:** Spec Subagent 02  
> **Specification Reference:** [02-component-spec.md](../../../02-spec/21-app/18-presentation-global-ppt-themes-and-15/02-component-spec.md)  

---

## 1. Objective & Strategic Scope

This subtask governs the typography clamp upgrade and design system modernization in the presentation stylesheets (`variables.less` and `presentation.less`). It enforces the **Northern UI/UX Typography Standard (v1.3.3)** by raising the minimum font-size clamp floor to **$16\text{px}$** for all kickers, category tags, capsule badges, and slide eyebrows. Additionally, it verifies space-separated HSL triplet tokens, light-theme contrast inversions (zero yellow-on-light), subpixel ink-stamp micro-shadows, and 4-plane depth hierarchy tokens.

---

## 2. Technical Requirements

### 2.1 Northern UI/UX Typography Standard (v1.3.3) Clamp Enforcement
1. **`@type-kicker`:** Elevate clamp floor from `14px` to `16px`.
   - Current: `clamp(14px, 1.1vw, 16px);`
   - Required: `clamp(16px, 1.1vw, 18px);`
2. **`@type-category`:** Elevate clamp floor from `14px` to `16px`.
   - Current: `clamp(14px, 1vw, 16px);`
   - Required: `clamp(16px, 1.0vw, 18px);`
3. **`.kicker-pill-badge`:** Ensure `font-size` uses `@type-kicker` or explicit `clamp(16px, 1.1vw, 18px);`.
4. **`.category-tag`, `.category-tag-badge`:** Ensure `font-size` uses `@type-category` or explicit `clamp(16px, 1.0vw, 18px);`.
5. **`.capsule-base`:** Update font size from `clamp(14px, 1vw, 16px)` to `clamp(16px, 1vw, 18px)`.
6. **`.slide-eyebrow`:** Update font size from `clamp(14px, 1vw, 16px)` to `clamp(16px, 1vw, 18px)`.

### 2.2 Global PPT Design Tokens & Space-Separated HSL Triplets
- Ensure `variables.less` and `presentation.less` support raw space-separated HSL triplet tokens (`H S% L%`) without outer `hsl(...)` wrappers, enabling CSS slash-alpha opacity compositing:
  ```less
  hsl(var(--pres-accent) / 0.12)
  hsl(var(--pres-card-bg) / 0.85)
  ```
- Ensure 4-plane depth tokens (`@plane-0-z` through `@plane-3-floating-z`) and elevation shadow tokens remain cohesive.
- Ensure subpixel ink-stamp micro-shadow tokens (`@text-shadow-on-dark: rgb(0 0 0) 1px 0.7px 0px;`, `@text-shadow-on-light: rgb(255 255 255) 1px 0.7px 0px;`) are applied to display headings.

### 2.3 Light-Theme Contrast Inversion & Zero Yellow-on-Light
- Light theme selector (`[data-appearance='light']`, `[data-is-dark='false']`, `.theme-light`) must enforce:
  - `.capsule-gold`: Inverts to burnished amber `#78350F` with background `rgba(120, 53, 15, 0.10)` ($C_R \ge 8.6:1$, WCAG AAA compliant).
  - `.capsule-ember`: Inverts to deep crimson `#BE123C` ($C_R \ge 5.8:1$, WCAG AA compliant).
  - `.capsule-cream`: Inverts to warm archival dark slate `#1E293B` ($C_R \ge 18.5:1$).
- Permanent dark HUD chrome tokens (`--chrome-*`) remain protected against slide theme overrides.

---

## 3. Step-by-Step Implementation Blueprint

### Step 3.1: Modify `src/styles/variables.less`
- **Target File:** `src/styles/variables.less`
- **Lines 38–39:**
  ```less
  // BEFORE:
  @type-kicker:          clamp(14px, 1.1vw, 16px);
  @type-category:        clamp(14px, 1vw, 16px);

  // AFTER:
  @type-kicker:          clamp(16px, 1.1vw, 18px);
  @type-category:        clamp(16px, 1.0vw, 18px);
  ```
- Verify fluid typography scale tokens surrounding these lines remain intact (`@type-display-hero`, `@type-display-title`, `@type-display-section`, `@type-body-lead`, `@type-body-regular`, `@type-body-caption`).

### Step 3.2: Modify `src/styles/presentation.less`
- **Target File:** `src/styles/presentation.less`
- **Line 24 (`.kicker-pill-badge`):**
  ```less
  // BEFORE:
  font-size: clamp(14px, 1.1vw, 16px);

  // AFTER:
  font-size: @type-kicker; // Evaluates to clamp(16px, 1.1vw, 18px)
  ```
- **Line 46 (`.category-tag, .category-tag-badge`):**
  ```less
  // BEFORE:
  font-size: clamp(14px, 1vw, 16px);

  // AFTER:
  font-size: @type-category; // Evaluates to clamp(16px, 1.0vw, 18px)
  ```
- **Line 276 (`.capsule-base`):**
  ```less
  // BEFORE:
  font-size: clamp(14px, 1vw, 16px);

  // AFTER:
  font-size: clamp(16px, 1vw, 18px);
  ```
- **Line 340 (`.slide-eyebrow`):**
  ```less
  // BEFORE:
  font-size: clamp(14px, 1vw, 16px);

  // AFTER:
  font-size: clamp(16px, 1vw, 18px);
  ```

### Step 3.3: Verify Contrast Inversions in `src/styles/presentation.less`
- Verify lines 347–375 for light theme capsule styling.
- Confirm `.capsule-gold` color is `#78350F`.
- Confirm `.capsule-ember` color is `#BE123C`.
- Confirm `.capsule-cream` color is `#FAF7F0` or `#1E293B`.

---

## 4. Static Verification Procedures (Rule R1 Compliant)

In strict accordance with Rule R1 (Zero Builds / Zero Heavy Tests in routine turns), verification must be executed exclusively via fast file-scoped scripts:

1. **Verify No Sub-16px Clamps in Less Files:**
   ```bash
   python -c "
   import pathlib, re, sys
   pattern = re.compile(r'clamp\(\s*(?:1[0-4]|15|[0-9])px')
   files = [pathlib.Path('src/styles/variables.less'), pathlib.Path('src/styles/presentation.less')]
   violations = []
   for f in files:
       for idx, line in enumerate(f.read_text(encoding='utf-8').splitlines(), 1):
           if pattern.search(line) and ('kicker' in line or 'category' in line or 'capsule' in line or 'eyebrow' in line):
               violations.append(f'{f.name}:{idx} -> {line.strip()}')
   if violations:
       print('FAIL: Found sub-16px clamp violations:')
       for v in violations: print(' ', v)
       sys.exit(1)
   print('PASS: All kicker and category clamps strictly >= 16px.')
   "
   ```

2. **Verify Less Syntax & Type Contracts:**
   ```bash
   npx tsc --noEmit
   ```

3. **Verify Zero Absolute Paths in Styles:**
   ```bash
   python linter-scripts/check-relative-paths.py
   ```

---

## 5. Risk Analysis & Rollback Plan

- **Risk:** Elevating clamp floor from $14\text{px}$ to $16\text{px}$ may cause slight text wrapping on extremely long badge titles.
- **Mitigation:** Capsule badges use `white-space: nowrap` or flexible flex wraps with `gap: 6px`. Bounding boxes are dimensioned to accommodate 16px typography without overflow.
- **Rollback:** Single-line reverts in `variables.less` and `presentation.less` restore previous token definitions if unexpected clipping occurs.

---

## 6. Acceptance Criteria Checklist

- [ ] `@type-kicker` in `variables.less` set to `clamp(16px, 1.1vw, 18px);`.
- [ ] `@type-category` in `variables.less` set to `clamp(16px, 1.0vw, 18px);`.
- [ ] `.kicker-pill-badge` font size clamp floor is $\ge 16\text{px}$.
- [ ] `.category-tag` & `.category-tag-badge` font size clamp floor is $\ge 16\text{px}$.
- [ ] `.capsule-base` font size clamp floor is $\ge 16\text{px}$.
- [ ] `.slide-eyebrow` font size clamp floor is $\ge 16\text{px}$.
- [ ] Light-theme capsule contrast inversions verified (`#78350F` for gold, `#BE123C` for ember).
- [ ] Subpixel ink-stamp micro-shadows verified (`1px 0.7px 0px`).
- [ ] `npx tsc --noEmit` exits `0`.
- [ ] Zero full builds or heavy test runs triggered (Rule R1 compliant).

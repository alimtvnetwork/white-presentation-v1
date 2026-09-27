# 03-Visual & UX Specifications: Steps Slide Component

## 1. 2-Column Split Grid Topology

The slide renders on the 1920x1080 canvas with standard 100px padding:
```css
grid-template-columns: 580px minmax(0, 1fr);
gap: 64px;
```

---

## 2. Left Column: Step Navigation Rail

1. **Kicker:** Small uppercase tracked mono title (e.g. `slide.kicker || 'PROCESS & EXECUTION'`).
2. **Main Heading:** `Ubuntu` font bold display title (`slide.heading`), adapting color dynamically to `theme.textColor`.
3. **Step Row List:**
   - Two-digit number format: `01`, `02`, `03` via `String(i + 1).padStart(2, '0')`.
   - Active step has theme accent highlight background pill, font weight bold, and full opacity (`1`).
   - Completed steps have `0.55` opacity.
   - Future steps have `0.40` opacity.
   - Every row is clickable (`cursor-pointer`) and triggers `jumpToStep(i)` with synchronized audio clicks (`soundEngine.playStepClick()`).

---

## 3. Right Column: Focused Step Detail Pane

1. **Step Tag / Kicker:** Small badge or kicker showing `step.label` with `theme.accentColor`.
2. **Step Title:** High-prominence display typography (`Ubuntu text-[56px] font-extrabold tracking-tight`).
3. **Detail Description:** `Poppins text-[20px] leading-relaxed` with `theme.subtextColor`.
4. **Interactive Step Progress Indicator:** Bottom right chrome showing `Step {focus + 1} of {slide.steps.length}` with Prev/Next step action controls.

---

## 4. Dynamic Dark / Light Theme Contrast

1. **Dark Themes:**
   - Canvas: Dark background (`theme.canvasBg`).
   - Typography: Light white/slate (`theme.textColor`).
   - Header Micro-Shadow: `text-shadow: rgb(0 0 0) 1px 0.7px 0px`.
   - Logo: White variant (`5 - Riseup Asia Logo Transparent Only WT.png`).
2. **Light Themes:**
   - Canvas: Crisp white (`#FFFFFF`).
   - Typography: Dark navy (`#0F172A`).
   - Header Micro-Shadow: `text-shadow: rgb(255 255 255) 1px 0.7px 0px`.
   - Logo: Black variant (`6 - Riseup Asia Logo Transparent Only BK.png`).

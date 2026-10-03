# 03-HUD Controller & Tooltips: Low-Opacity Ambient Design & Compact Interaction

> **Module:** `02-spec/21-app/30-white-slides-interaction-and-hud-refinement`  
> **Status:** ACTIVE SPECIFICATION  
> **Component Focus:** `NavigationControls.tsx`, `SlideIndicator.tsx`

---

## 1. Low Idle Opacity Architecture (~8%–10%)

### 1.1 The Ambient Presentation Invariant
During a presentation, the slide content is the sovereign focal plane. Navigation controls and pagination sliders should not continuously compete with slide typography.

- **Idle State:**
  - Opacity: `0.08` to `0.10` (~8%–10% visibility, barely noticeable, unobtrusive).
  - Transition: `transition: opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1);`
- **Active / Hover State:**
  - Opacity: `1.0` (100% full clarity) when the cursor hovers anywhere within the control pill or during key navigation.
  - Backdrop Blur: `backdrop-blur-md` with refined border illumination (`border-slate-700/60`).

---

## 2. Compact Footprint & Relocation

1. **Size Reduction:**
   - Button size reduced from bulky dimensions to compact 32px (`h-8 w-8`) or 36px circular chips.
   - Text padding streamlined: `px-3 py-1.5` instead of heavy boxes.
2. **Relocation & Non-Collision Layout:**
   - Bottom slider relocated to bottom-center or integrated neatly with the controller bar so it does not crowd the bottom-left corner of the slide canvas.
   - Integrated dot pagination with maximum width constraints and horizontal overflow safety.

---

## 3. Rich Accessible Tooltips

Every interactive control and pagination dot must provide an accessible tooltip inspired by `global-ppt-v1`:

### 3.1 Button Tooltips
- **Previous Slide:** `Previous Slide` + `<kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-mono">←</kbd>`
- **Next Slide:** `Next Slide` + `<kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-mono">→</kbd>`
- **Theme Selector:** `Select Theme` + `<kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-mono">T</kbd>`
- **Fullscreen:** `Fullscreen` + `<kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-mono">F</kbd>`
- **Overview Grid:** `Slide Overview` + `<kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-mono">G</kbd>`

### 3.2 Slide Number & Dot Tooltips
- On dot hover: Displays slide index and slide title (e.g., `12. Talent Capability Pyramid`).
- On slide number click: Enables quick jump or cycle position.

---

## 4. File Size Constraints (Hard Rule #6)

- `NavigationControls.tsx` must remain **strictly $\le 100$ lines**.
- `SlideIndicator.tsx` must remain **strictly $\le 100$ lines**.

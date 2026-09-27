# Visual & Interaction Specifications — Advanced Canvas Engine

## 1. Interactive Item Selection & Canvas Manipulation
When `isEditMode === true`:
- Hovering over cards, text blocks, and imagery highlights an interactive violet bounding outline (`border-dashed border-violet-500/60`).
- Clicking selects the element, rendering drag handles and quick-action toolbars (Z-Index up/down, delete element, move x/y).
- Selected items can be dragged on the canvas using mouse delta translation or adjusted with the Layer Editor XY controls.

## 2. Floating Movable Builder Action Button (FAB)
- Rather than a fixed button in the top right, a sleek pill/circle launcher floats on screen with a grip handle.
- Users can drag the launcher anywhere across the viewport; releasing snaps it gently to the nearest screen edge.
- Clicking the FAB expands into the full `BuilderPanel.tsx` modal without resetting its position.

## 3. Step Sequencing with Audio Trigger
- On the Steps slide (`StepsChainSlide.tsx`), each step enters sequentially with a slide-in-up animation (`opacity: 0 -> 1`, `transform: translateY(20px) -> translateY(0)`).
- When each step activates, `soundEngine.playStepClick()` fires a subtle high-frequency synthesized audio pop.
- A playback controller allows presenters to step forward (`Next Step`), step backward, or auto-play.

## 4. Extended Slide Layouts
1. **Competitive Edge (`competitive-edge`):**
   - **Boundary Alignment:** Table outer card spans `w-full` (1720px across the viewport), perfectly flush with the slide kicker/title on the left (x = 100px) and the Riseup Asia logo on the right (x = 1820px).
   - **Interactive Row Hover:** Every table row features an interactive, high-visibility hover state with a smooth 150ms transition (`hover:bg-violet-500/15` on dark themes, `hover:bg-violet-50/90` on light themes, `cursor-pointer`).
   - **Dynamic Dark/Light Contrast Switching:**
     - On dark backgrounds/themes: Typography switches to luminous light hues (`text-slate-100` for features, `text-slate-300` for competitor data, `text-slate-200` for column headers), dividers switch to subtle dark borders (`border-slate-700/60`, `divide-slate-800/80`), the Riseup Asia logo switches dynamically to the white variant (`5 - Riseup Asia Logo Transparent Only WT.png`), and header micro-shadow `rgb(0 0 0) 1px 0.7px 0px` is applied.
     - On light/white backgrounds/themes: Typography switches to high-contrast dark tones (`text-slate-900` for features, `text-slate-600` for competitor data, `text-slate-700` for column headers), dividers switch to crisp light borders (`border-slate-200/90`, `divide-slate-200/70`), the Riseup Asia logo switches dynamically to the black variant (`6 - Riseup Asia Logo Transparent Only BK.png`), and bevel shadow `rgb(255 255 255) 1px 0.7px 0px` is applied.
   - **Proprietary Pillar Highlighting:** The sovereign platform column is rendered with the active theme's accent color (`theme.accentColor`), bold font weight, and emerald confirmation icons.
2. **Tech Stack Matrix (`tech-stack`):**
   - 4-column card grid categorizing Enterprise Architecture, AI/Autonomous Agents, Cloud Infrastructure, and Frontend Frameworks.
   - Embedded Lucide icons and seniority level tags.

## 5. High-Definition Header Text-Shadow Contrast Specification

To guarantee maximum typographic crispness and legibility across all display devices, 4K monitors, and presentation projectors, all title headers (`h1`, featured `h3`) and prominent white typographic elements MUST adhere to the canonical high-definition micro-shadow standard:

### Exact Shadow Formulas:
1. **Light or White Typography (on Dark / Medium Canvases):**
   ```css
   text-shadow: rgb(0 0 0) 1px 0.7px 0px;
   ```
   - Applied when the text color is white (`#FFFFFF`) or luminous light tints (`#F8FAFC`, `#F5F3FF`, `#ECFDF5`).
   - Creates a deterministic, razor-sharp 1px horizontal / 0.7px vertical edge definition without fuzzy blur, anchoring text against photographic gradients, dark backgrounds, and visual noise.

2. **Dark Typography (on Light / Pure White Canvases):**
   ```css
   text-shadow: rgb(255 255 255) 1px 0.7px 0px;
   ```
   - Applied when the text color is dark slate (`#0F172A`, `#1E293B`).
   - Produces a subtle luminous bevel / sub-pixel edge lift that prevents text bleed on ultra-bright displays.

3. **General White Text Elements:**
   - Any white text elements, such as callout badges, primary action buttons with white labels, or kickers over image plates, should also leverage `text-shadow: rgb(0 0 0) 1px 0.7px 0px;` for enhanced definition.

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
   - 3-column side-by-side comparison matrix with high-contrast badge highlighting for the proprietary Sovereign model.
   - Clean editorial headers with check/cross markers.
2. **Tech Stack Matrix (`tech-stack`):**
   - 4-column card grid categorizing Enterprise Architecture, AI/Autonomous Agents, Cloud Infrastructure, and Frontend Frameworks.
   - Embedded Lucide icons and seniority level tags.

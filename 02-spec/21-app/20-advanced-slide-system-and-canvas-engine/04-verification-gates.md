# Verification Gates & Acceptance Criteria — Advanced Slide System

## Acceptance Criteria Ledger

- **AC-01 (Canvas Item Manipulation):** Selecting an item in Builder Mode reveals coordinates and z-index controls; drag translation smoothly updates position without breaking layout flow.
- **AC-02 (Draggable Builder Button):** The builder launcher button can be moved freely across the viewport and retains position after drag release.
- **AC-03 (Step Audio Synchronization):** Stepping through steps on `StepsChainSlide` triggers synthesized audio when sound is enabled; mute state is strictly honored.
- **AC-04 (Competitive Edge & Tech Stack Slides):** Both new slide archetypes render cleanly in `SlideRenderer.tsx` and are selectable in `SlideCreatorModal.tsx`.
- **AC-05 (Camera Zoom Interactivity):** Camera presets (`overview`, `focus-left`, `focus-right`, `zoom-in`) apply smooth 60fps CSS transform scaling and panning.
- **AC-06 (Icon & Asset Layer Suite):** Presenters can select custom icons and replace hero/avatar image URLs from the inspector.
- **AC-07 (AI Prompt Spec Export):** Export modal generates copyable markdown prompts tailored to recreate the active slide in AI image/text models.
- **AC-08 (PPTX Manifest Export):** Export modal generates downloadable PowerPoint-compatible structure.

## Verification Commands
- `python 03-ai-scripts/06-cicd-local-runner.py --all` -> 36/36 passed (`exit 0`)
- `npx tsc --noEmit` -> 0 errors
- `npm run build` -> 0 errors

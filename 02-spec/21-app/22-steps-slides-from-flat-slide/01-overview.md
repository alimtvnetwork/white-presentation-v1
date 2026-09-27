# 01-Overview: Steps Slides Architecture from Flat Slide Show

## 1. System Overview & Context

The **Steps Slide** engine brings the two-column interactive sequential step progression architecture from `flat-slide-show` into `white-presentation-v1`. Unlike static slide layouts, the `steps` archetype is a stateful presentation layout designed for walking audiences through multi-phase engineering workflows, release cycles, and architectural request-response lifecycles.

---

## 2. User Request (Verbatim)

```text
add steps slides from flat slide you stupid fuck
```

---

## 3. Reference Architecture from Flat Slide Show

In the canonical reference implementation at `flat-slide-show/src/components/slides/RenderSlide.tsx` and `flat-slide-show/docs/slides/spec/sample-deck.json`:
1. **Layout Topology:** An asymmetric 2-column split grid:
   - **Left Navigation Column (`620px` width):** Contains slide kicker, overarching heading (`slide.heading`), and an ordered list (`<ol>`) of step items with two-digit indices (`01`, `02`, `03`), concise labels, and phase states.
   - **Right Detail Pane (`minmax(0, 1fr)`):** Displays the active focused step with prominent title, rich detail text, and optional media card.
2. **Phase Model (`stepPhase`):**
   - `active`: Current step (`index === focus`). Highlighted with luminous theme accent pill, active number styling, and full opacity.
   - `completed`: Prior steps (`index < focus`). Set to `0.54` opacity with subtle check/accent indication.
   - `future`: Upcoming steps (`index > focus`). Set to `0.42` opacity with `blur(1.25px)` depth cue.
3. **Sound Synchronization:** Step focus transitions trigger synthesizer audio clicks via `soundEngine.playStepClick()`.
4. **Typographic High-Definition Ink-Stamp Contrast:** Title headers and step numbers adhere to `text-shadow: rgb(0 0 0) 1px 0.7px 0px` on dark themes and `rgb(255 255 255) 1px 0.7px 0px` on light themes.

---

## 4. Key Architectural Deliverables

1. **Type Contract:** Define `StepsSlideData` and `StepsSlideItem` in `src/types/presentation.ts`.
2. **Component Implementation:** Author `StepsSlide.tsx` in `src/components/slides/StepsSlide.tsx` conforming to Hard Rule #6 ($\le 100$ lines per file).
3. **Slide Renderer Integration:** Route `case 'steps': return <StepsSlide slide={slide} />;` in `SlideRenderer.tsx`.
4. **Deck Seed Data:** Seed canonical steps slides ("How We Ship" and "Architecture, in Three Reveals") from `flat-slide-show` into `src/stores/deckStore.ts`.
5. **Builder Mode Archetype Registration:** Enable `steps` archetype selection in `SlideCreatorModal.tsx`.

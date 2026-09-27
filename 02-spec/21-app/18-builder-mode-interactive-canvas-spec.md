# 18-Builder Mode Interactive Canvas & Inspector Specification

## 1. Overview & Architectural Role
The **Builder Mode Interactive Canvas** (`BuilderPanel.tsx` / `SelectionOverlay.tsx` / `EditLayer.tsx` / `store.ts` in `flat-slide-show`) empowers presenters, authors, and AI agents to visually configure slides, drag elements, select color ramp stops, adjust typography tokens, and edit text inline.

---

## 2. Decoupled Store Architecture (`useDeckStore` vs `useEditStore`)
As codified in [01-flat-slide-system-spec.md](01-flat-slide-system-spec.md), canvas editing MUST NOT interfere with presentation playback timers or live ink annotations.

```
┌─────────────────────────────────┐     ┌─────────────────────────────────┐
│     useDeckStore (Persisted)    │     │    useEditStore (Ephemeral)     │
│ ─────────────────────────────── │     │ ─────────────────────────────── │
│ • deck: DeckData                │     │ • isEditMode: boolean           │
│ • activeSlideIndex: number      │     │ • selectedElementId: string     │
│ • upsertSlide(slide)            │     │ • activePanel: PanelType        │
│ • updateSlideTheme(themeId)     │     │ • undoStack: HistoryAction[]    │
│ • reorderSlides(from, to)       │     │ • redoStack: HistoryAction[]    │
└─────────────────────────────────┘     └─────────────────────────────────┘
                 ▲                                       ▲
                 └───────────────────┬───────────────────┘
                                     │
                             applyEdit() Funnel
                                     │
                        ┌────────────────────────┐
                        │ Single Mutator Gateway │
                        └────────────────────────┘
```

---

## 3. Visual Layer Stack (7 Discrete Layers)
1. **Layer 0 (Base Background):** Slide theme backdrop (`#FFFFFF` or gradient stops $S_0$–$S_2$).
2. **Layer 1 (Brand Watermarks & Waves):** Fixed SVG ribbons and watermark rings.
3. **Layer 2 (Media Plates):** Photographic images with feathered gradient masks.
4. **Layer 3 (DOM Typography & Cards):** Live HTML text headings, bullet clusters, pricing cards.
5. **Layer 4 (Ink Annotation Layer):** Freehand canvas drawing lines and highlighter marks.
6. **Layer 5 (Builder Selection Overlays):** Interactive blue focus outlines, resize handles, and position coordinates.
7. **Layer 6 (Floating Inspector & Toolbars):** Slide navigation bar, theme gradient selector, builder sidebar panel.

---

## 4. Key Actions & Hotkeys
- `Tab` / `Shift+Tab`: Cycle through editable elements on canvas.
- `B`: Toggle Builder Mode ON / OFF.
- `Cmd/Ctrl + Z`: Undo canvas edit.
- `Cmd/Ctrl + Shift + Z`: Redo canvas edit.
- `Escape`: Deselect active element.
- `1`–`4`: Quick-switch theme palette (White, Midnight, Emerald, WP Exam Blue).

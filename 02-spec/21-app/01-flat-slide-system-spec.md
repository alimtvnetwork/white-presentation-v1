# 01-Flat Slide System & Builder Mode Specification

## 1. System Overview
The **Flat Slide System** provides a declarative, JSON-first presentation architecture. It decouples presentation content from rendering logic, enabling automated AI authoring, Git version control, and interactive runtime manipulation through a dedicated **Builder Mode**.

---

## 2. Declarative JSON Data Contract

### 2.1 File Container Shapes
The engine recognizes two file structures:
1. **Deck Container (`*.deck.json`):** Encapsulates the entire presentation including global settings, music tracks, theme configuration, and the ordered slide array.
2. **Slide Container (`*.slide.json`):** A standalone document containing exactly one slide definition matching `SlideSchema`, importable into any existing deck.

```json
{
  "id": "enterprise-deck-2026",
  "title": "Enterprise Transformation Roadmap",
  "themeId": "white-pure",
  "version": 2,
  "settings": {
    "backgroundMode": "color",
    "backgroundColor": "#FFFFFF",
    "darken": 0,
    "blur": 0,
    "transition": "fade",
    "soundEnabled": true,
    "clickSoundEnabled": true,
    "volume": 0.6
  },
  "slides": [
    {
      "id": "slide-01",
      "type": "center",
      "title": "Welcome",
      "heading": ["Next Generation ", { "text": "Slide Engine", "pill": true }]
    }
  ]
}
```

### 2.2 Core `BaseSlide` Schema Attributes
Every slide definition inherits standard base metadata:

| Field | Type | Validation / Constraints | Description |
|:---|:---|:---|:---|
| `id` | `string` | `^[a-zA-Z0-9_-]+$`, 1–64 chars | Unique URL-safe identifier within deck. |
| `type` | `SlideType` | Discriminated union of 17 types | Slide layout model. |
| `title` | `string` | 1–200 characters | Presentation navigator and tab label. |
| `notes` | `string` | Optional, $\le 4000$ characters | Presenter speaker notes. |
| `background`| `string` | CSS Color, URL, or data URI | Overrides deck global background. |
| `gradient` | `SlideGradient` | `{ type, angle?, stops: [] }` | Multi-stop linear or radial background gradient. |
| `themeId` | `string` | Valid theme identifier | Overrides deck global theme for this slide. |
| `align` | `TextPosition` | 9-cell coordinate enum | `top-left`, `center`, `bottom-right`, etc. |
| `padding` | `number` | Integer 0–400 px (default 120) | Inset padding within $1920 \times 1080$ canvas. |
| `enabled` | `boolean` | Default `true` | If `false`, slide is omitted from presentation flow. |
| `budget` | `number` | Seconds ($\ge 5$) | Target presenter rehearsal dwell time. |
| `sound` | `SlideSound` | `{ url?, volume?, music? }` | Entrance audio cue or slide background track. |
| `focus` | `FocusRegion[]`| Bounding boxes per sub-step | Dynamic camera focus zooming per step. |
| `boxes` | `Record<string, EditBox>` | Bounding box overrides | Builder Mode custom drag/resize coordinates. |
| `variants` | `Record<SlideType, Slide>` | Type migration archives | Preserves settings across slide type switches. |

### 2.3 Rich Text Representation
All text fields (headlines, body paragraphs, bullet points, quotes) use a structured token array combining raw strings and formatted highlights:
```typescript
export type TextStyle = {
  fontSize?: number;
  color?: string;
  fontWeight?: number | string;
};

export type Highlight = {
  text: string;
  pill?: boolean;        // Renders as high-contrast solid pill badge
  plain?: boolean;       // Renders custom styled text without pill background
  style?: TextStyle;     // Inline typography styling overrides
  pillColor?: string;    // Custom highlight hue (e.g., 'purple', 'emerald', 'amber')
};

export type RichText = (string | Highlight)[];
```

---

## 3. Builder Mode Architecture

### 3.1 Dual-Store Separation Model
To eliminate render cycles and prevent authoring artifacts from polluting the exported deck, the state is split into two distinct Zustand stores:

```
┌─────────────────────────────────────────────────────────────┐
│                       useDeck (Store)                       │
│  - deck: Deck (Schema v2)                                   │
│  - themeId: string                                          │
│  - slideOrder: string[]                                     │
│  - LocalStorage Persisted: "slides-deck-v1"                 │
│  - Cross-Window Storage Event Synchronization               │
└──────────────────────────────┬──────────────────────────────┘
                               │ upsertSlide(slide)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                     useEditMode (Store)                     │
│  - isEditing: boolean (Persisted: "riseup.editmode.v1")     │
│  - selectedId: string | null (Ephemeral)                    │
│  - selectedBox: EditBox | null (Ephemeral)                  │
│  - hoveredId: string | null (Ephemeral)                     │
│  - history: History<string> (Undo/Redo Snapshot Stack)      │
│  - activeInspectorPanel: InspectorTab (Ephemeral)           │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 The Single Mutation Funnel (`applyEdit`)
All mutations generated within the visual canvas (dragging an element, resizing a box, replacing an image, modifying text) must pass through `applyEdit`:
```typescript
export type Edit =
  | { kind: "box"; ref: SelectableRef; box: EditBox }
  | { kind: "text"; field: string; value: RichText }
  | { kind: "imagePatch"; id: string; patch: Partial<EditableImage> }
  | { kind: "imageRemove"; id: string }
  | { kind: "imageInsert"; image: EditableImage }
  | { kind: "iconInsert"; icon: FloatingIcon }
  | { kind: "iconRemove"; id: string }
  | { kind: "iconPatch"; id: string; patch: Partial<FloatingIcon> };

export function applyEdit(slide: Slide, edit: Edit): Slide {
  switch (edit.kind) {
    case "box": {
      const nextBoxes = { ...slide.boxes, [edit.ref.key]: edit.box };
      return { ...slide, boxes: nextBoxes };
    }
    case "text": {
      return { ...slide, [edit.field]: edit.value };
    }
    case "imagePatch": {
      const nextImages = (slide.images ?? []).map((img) =>
        img.id === edit.id ? { ...img, ...edit.patch } : img
      );
      return { ...slide, images: nextImages };
    }
    // Additional atomic branches...
  }
}
```
**Strict Guideline:** Edits commit changes via `useDeck.getState().upsertSlide(updatedSlide)`. Never invoke `setDeck()` during micro-edits, as `setDeck()` resets playback timers, wipes active canvas annotations, and triggers redundant re-render cascades.

### 3.3 Visual Layering Stack
Within `RenderSlide.tsx`, slide elements are mounted inside `ThemeWrap` in strict z-index stacking order:
1. **Layer 1: Base Background (`data-slide-bg-layer`)** — Color, image, or video texture.
2. **Layer 2: Gradient Fill (`data-slide-gradient-layer`)** — Mathematical CSS multi-stop gradient.
3. **Layer 3: Contrast Darken Layer (`data-slide-darken-layer`)** — Configurable alpha overlay (`rgba(0,0,0, darken)`).
4. **Layer 4: Floating Ambient Icons (`FloatingIconLayer`)** — Decorative background icons with physics drift.
5. **Layer 5: Core Content Canvas (`contentBoxStyle`)** — Primary typography, metric cards, layouts, tables.
6. **Layer 6: Author Image Overlays (`ImageLayer`)** — Foreground photos, silhouettes, evidence screenshots.
7. **Layer 7: Interactive Edit Layer (`EditLayer`)** — Only mounted when `isEditing === true`. Renders SVG selection bounding box, 8 resize handles, drag sensors, and inline textarea overlays.

### 3.4 Bounding Box Coordinate Transformation
When a box is relocated or resized in Builder Mode:
$$\text{scaleX} = \frac{\text{box.w}}{\text{default.w}}, \quad \text{scaleY} = \frac{\text{box.h}}{\text{default.h}}$$
$$\text{translateX} = \text{box.x} - (\text{default.x} \cdot \text{scaleX})$$
$$\text{translateY} = \text{box.y} - (\text{default.y} \cdot \text{scaleY})$$
Rendered via CSS transform:
```css
transform: translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY});
transform-origin: 0 0;
```

---

## 4. Audio Cue System
- **Whoosh Cue (`/sounds/fade_swoosh_v4.mp3`):** Triggered on slide transition. Master volume multiplied by $0.9$. Debounced at 120ms to prevent rapid-scroll distortion. Silenced if `prefers-reduced-motion` is detected.
- **Click / Step Cue (`/sounds/click.mp3`):** Triggered on sub-step progression or navigation jumps.
- **Step Volume Attenuation Math:**
  $$\text{stepVol}(m) = \begin{cases} m & \text{if } m < 0.3 \\ \max(0.3, m - 0.3) & \text{if } m \ge 0.3 \end{cases}$$
- **Background Music Player:** Continuous HTML5 audio loop with 300ms crossfade between slide-level overrides and deck-level ambient music tracks.

---

## 5. Export Quality & Scaling Architecture
- **Reference Canvas:** Strictly $1920 \times 1080$.
- **4K UHD Rendering (3840×2160):** Uniform scale factor automatically resolves to $2.0$. Pure vector SVG elements and font primitives render with subpixel precision without raster artifacting.
- **Headless Capture:** Optimized for Playwright/Chromium with `--window-size=1920,1080` or `--window-size=3840,2160` and `deviceScaleFactor: 2`.
- **Print / PDF CSS Rules:**
  ```css
  @page {
    size: 1920px 1080px landscape;
    margin: 0;
  }
  .print-page {
    break-after: page;
    page-break-after: always;
  }
  ```
  Step-driven slides automatically evaluate to `step = slideStepCount(slide) - 1` during export to ensure all list items and charts print in their final, complete state.

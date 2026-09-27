# 02 — Data Contracts: Presenter Webcam & Builder Mode

## 1. Phase State Machine Contract

The webcam operates across 6 distinct phases:

```typescript
export type WebcamPhase =
  | 'off'          // Stream inactive, hardware stopped, LED off
  | 'requesting'   // getUserMedia in-flight, showing spinner
  | 'on'           // Active video feed, draggable floating window
  | 'minimized'    // Collapsed 96x96 avatar puck, stream kept alive
  | 'fullscreen'   // Full viewport stage takeover (inset: 0)
  | 'denied';      // User blocked camera or no device found
```

---

## 2. Sizing & Geometry Contract

Standardized 16:9 preset aspect ratios matching `global-ppt-v1`:

```typescript
export type WebcamSizeStep = 'S' | 'M' | 'L' | 'XL';

export interface WebcamDimensions {
  w: number;
  h: number;
}

export const WEBCAM_SIZES: Record<WebcamSizeStep, WebcamDimensions> = {
  S: { w: 240, h: 135 },
  M: { w: 320, h: 180 },
  L: { w: 480, h: 270 },
  XL: { w: 720, h: 405 },
};

export const STEP_ORDER: readonly WebcamSizeStep[] = ['S', 'M', 'L', 'XL'];
export const MINIMIZED_PUCK_SIZE = 96;
```

---

## 3. Persistent Configuration Contract

Stored under `riseup.white.webcam.*` localStorage keys:

```typescript
export interface WebcamSettings {
  phase: WebcamPhase;
  sizeStep: WebcamSizeStep;
  isCircleShape: boolean;
  isMirrored: boolean;
  hasHalo: boolean;
  posX: number;
  posY: number;
}
```

---

## 4. Keyboard Interaction Contract

| Key | Action | Scope | Notes |
|:---|:---|:---|:---|
| `I` / `i` | Acquire ↔ Suppress | Global | Turns camera hardware on/off |
| `O` / `o` | Shape Toggle | Active/Minimized | Switches Circle avatar ↔ Rounded rectangle |
| `E` / `e` | Expand Toggle | Active/Fullscreen | Expands to full screen / exits back to box |
| `M` / `m` | Minimize Toggle | Active | Collapses to 96px circular puck ↔ restores |
| `+` / `=` | Step Size Up | Floating | S → M → L → XL |
| `-` / `_` | Step Size Down | Floating | XL → L → M → S |
| `Escape` | Exit Fullscreen | Fullscreen | Restores prior floating coordinates |

**Input Guard:** Keyboard handlers MUST strictly ignore keystrokes when the active focused element is `input`, `textarea`, or `isContentEditable`.
**Modifier Guard:** Keystrokes with `ctrlKey`, `metaKey`, or `altKey` MUST NOT trigger camera actions to preserve OS shortcuts.

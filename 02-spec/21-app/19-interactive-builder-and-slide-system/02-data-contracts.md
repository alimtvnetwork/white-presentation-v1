# 02-Data Contracts: Interactive Builder & Slide System

## 1. Domain Types & Enums

### 1.1 UI Docking & Positioning Enums
```typescript
export type DockPosition =
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'top-right'
  | 'left'
  | 'right';

export type IndicatorPosition =
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'top-right';

export type CameraPreset =
  | 'overview'
  | 'focus-left'
  | 'focus-right'
  | 'zoom-in'
  | 'step-focus';
```

### 1.2 Full-Canvas Theme Matrix
```typescript
export type ThemeMatrixId =
  | 'white-brand'
  | 'midnight-luxe'
  | 'true-dark'
  | 'emerald-growth'
  | 'wp-exam-purple';

export interface ThemeConfig {
  id: ThemeMatrixId;
  name: string;
  canvasBg: string;
  textColor: string;
  subtextColor: string;
  cardBg: string;
  cardBorder: string;
  accentGlow: string;
  dotMatrix: boolean;
  stops: { step: number; hex: string; label: string }[];
}
```

### 1.3 Canvas Element Placement & Layer Contracts
```typescript
export interface ElementPlacement {
  id: string;
  x: number;          // Relative offset X (px)
  y: number;          // Relative offset Y (px)
  zIndex: number;     // Layer stacking order (1..10)
  isLocked?: boolean;
}

export interface InPlaceEditPayload {
  slideId: string;
  field: string;
  value: string;
  subItemId?: string;
}
```

### 1.4 AI Export & PowerPoint Interchange Contracts
```typescript
export interface SlideAiPromptSpec {
  slideIndex: number;
  slideType: string;
  theme: string;
  headline: string;
  subtitle?: string;
  elements: Array<{
    type: 'text' | 'image' | 'badge' | 'metric' | 'step';
    content: string;
    placement: { zone: 'left' | 'right' | 'center' | 'custom' };
  }>;
  visualPrompt: string;
}
```

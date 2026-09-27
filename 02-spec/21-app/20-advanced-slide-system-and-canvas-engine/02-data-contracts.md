# Data Contracts & Schemas — Advanced Slide System & Canvas Engine

## 1. Canvas Selection & Drag Positioning Contracts

```typescript
export interface CanvasElementPosition {
  id: string;
  x: number; // Percentage or absolute pixels on 1920x1080 canvas
  y: number;
  width?: number;
  height?: number;
  zIndex: number;
  isDragging?: boolean;
}

export interface FloatingButtonState {
  x: number;
  y: number;
  isSnapped: boolean;
  dockCorner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
```

## 2. Extended Slide Archetypes

```typescript
export interface CompetitiveEdgeSlideData extends BaseSlide {
  type: 'competitive-edge';
  headers: string[]; // ['Criteria', 'Traditional Agencies', 'Riseup Sovereign Model']
  rows: Array<{
    feature: string;
    competitor: string;
    us: string;
    highlightUs?: boolean;
  }>;
}

export interface TechStackSlideData extends BaseSlide {
  type: 'tech-stack';
  categories: Array<{
    name: string;
    icon: string;
    technologies: Array<{
      name: string;
      level: 'Core' | 'Advanced' | 'Enterprise';
      badgeColor?: string;
    }>;
  }>;
}

export type ExtendedSlideData =
  | SlideData
  | CompetitiveEdgeSlideData
  | TechStackSlideData;
```

## 3. Step Sound & Animation Sequencing

```typescript
export interface StepAnimationConfig {
  activeStep: number;
  totalSteps: number;
  isSoundEnabled: boolean;
  autoPlay: boolean;
  intervalMs: number;
}
```

## 4. Single-Slide AI Prompt Spec Contract

```typescript
export interface SlideAiPromptSpec {
  slideId: string;
  archetype: string;
  title: string;
  dimensions: { width: 1920; height: 1080; aspectRatio: '16:9' };
  theme: {
    id: string;
    background: string;
    typography: { headingFont: 'Ubuntu'; bodyFont: 'Poppins' };
    palette: { primary: string; accent: string; neutral: string };
  };
  visualComposition: {
    leftPanel: { widthRatio: number; elements: string[] };
    rightPanel: { widthRatio: number; elements: string[] };
  };
  promptDirective: string;
}
```

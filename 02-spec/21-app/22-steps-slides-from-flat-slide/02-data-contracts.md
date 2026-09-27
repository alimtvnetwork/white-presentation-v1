# 02-Data Contracts: Steps Slide Schemas & Types

## 1. Slide Type Discrimination

The global `SlideType` discriminated union in `src/types/presentation.ts` is extended with `'steps'`:

```typescript
export type SlideType =
  | 'white-master'
  | 'title'
  | 'persona'
  | 'key-player'
  | 'before-after'
  | 'talent-funnel'
  | 'pricing'
  | 'steps-chain'
  | 'testimonials'
  | 'competitive-edge'
  | 'tech-stack'
  | 'steps';
```

---

## 2. Steps Item Schema (`StepsSlideItem`)

```typescript
export interface StepsSlideItem {
  label: string;
  title?: string;
  detail: string;
  media?: {
    src: string;
    alt?: string;
    caption?: string;
  };
}
```

---

## 3. Steps Slide Schema (`StepsSlideData`)

```typescript
export interface StepsSlideData extends BaseSlide {
  type: 'steps';
  heading: string;
  steps: StepsSlideItem[];
}
```

---

## 4. Phase Enumeration

```typescript
export type StepPhase = 'completed' | 'active' | 'future';

export function getStepPhase(index: number, focus: number): StepPhase {
  if (index < focus) return 'completed';
  if (index === focus) return 'active';
  return 'future';
}
```

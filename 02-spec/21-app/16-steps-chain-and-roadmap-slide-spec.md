# 16-Steps Chain & Process Roadmap Slide Specification

## 1. Overview & Architectural Role
The **Steps Chain & Process Roadmap Slide** (`StepsChain3DSlide.tsx` / `GrowthRoadmapSlide.tsx` / `StaffAugProcessTimelineSlide.tsx`) maps temporal progression, deployment sequences, or strategic roadmaps. It uses connected horizontal nodes, numbered step badges, and milestone delivery estimates.

---

## 2. Visual Layout & Geometry ($1920 \times 1080$)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Execution Roadmap Pill]                            [Transparent Brand Logo]│
│                                                                             │
│   STRUCTURED 4-PHASE DELIVERY ROADMAP (52px)                                │
│   From discovery to continuous hyper-scale deployment                       │
│                                                                             │
│   (1) Discovery  ─────► (2) Architecture ─────► (3) Sprint Dev ─────► (4) QA│
│   ┌──────────────┐     ┌──────────────┐     ┌──────────────┐ ┌─────────────┐│
│   │ 2 Weeks      │     │ 3 Weeks      │     │ 8 Weeks      │ │ Continuous  ││
│   │ • Auditing   │     │ • Schema DDL │     │ • Front/Back │ │ • Automated ││
│   │ • User Flows │     │ • Tech Stack │     │ • CI/CD Pipe │ │ • Security  ││
│   │ • Scope Map  │     │ • API Design │     │ • Bi-Weekly  │ │ • Launch    ││
│   └──────────────┘     └──────────────┘     └──────────────┘ └─────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Coordinate & Dimension Hierarchy
- **Header:** Left $140\text{px}$, Top $120\text{px}$, Width $1640\text{px}$.
- **Horizontal Chain Grid:** Top $340\text{px}$, Left $140\text{px}$, Width $1640\text{px}$, Height $560\text{px}$.
  - 4 Cards: Width $370\text{px}$ each, horizontal spacing $53\text{px}$.
  - Step Number Badge: $48\text{px} \times 48\text{px}$ circle positioned atop each card, background `#7C3AED`, text white bold.
  - Connecting Horizon Line: Top $364\text{px}$, Left $140\text{px}$, Width $1640\text{px}$, Height $3\text{px}$, background `#E2E8F0` with gradient progress fill.
  - Card Body: Top $410\text{px}$, Height $440\text{px}$, padding $28\text{px}$, background `#FFFFFF`, border $1.5\text{px}$ solid `#E2E8F0`, rounded $20\text{px}$.
  - Duration Pill: Background `#F1F5F9`, text `#475569`, font size $14\text{px}$ bold.

---

## 3. Pure DOM Mandate
Zero baked typography. Timeline arrows are pure SVG; text and milestones are HTML elements.

---

## 4. Slide Contract & Data Interface
```typescript
export interface StepsChainSlideData {
  id: string;
  type: 'steps-chain';
  kicker?: string;
  title: string;
  subtitle: string;
  steps: Array<{
    stepNumber: number;
    title: string;
    duration: string;
    deliverables: string[];
    isCompleted?: boolean;
  }>;
  themeId?: string;
}
```

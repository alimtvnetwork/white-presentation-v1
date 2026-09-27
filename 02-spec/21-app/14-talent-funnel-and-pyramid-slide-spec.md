# 14-Talent Funnel & Pyramid Slide Specification

## 1. Overview & Architectural Role
The **Talent Funnel & Pyramid Slide** (`TalentFunnelSlide.tsx` / `TalentPyramidSlide.tsx` / `TalentPoolSlide.tsx`) establishes organizational caliber, candidate selectivity, and global talent engineering standards. It visualizes tiered filtration processes, candidate retention metrics, and team hierarchy.

---

## 2. Visual Layout & Geometry ($1920 \times 1080$)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Talent Standard Pill]                              [Transparent Brand Logo]│
│                                                                             │
│   RIGOROUS MULTI-STAGE TALENT SELECTION FUNNEL (52px)                       │
│   Top 1% Global Engineering Caliber Guaranteed                              │
│                                                                             │
│   ┌──────────────────────────────────────────────────┐ 10,000+ Applicants  │
│    \ Stage 1: Algorithmic & Architectural Screen    /  (Top 15%)            │
│     ┌──────────────────────────────────────────────┐                        │
│      \ Stage 2: Deep System Design & Live Pair    /    (Top 5%)             │
│       ┌──────────────────────────────────────────┐                          │
│        \ Stage 3: Culture & Client Communication/      (Top 2%)             │
│         ┌──────────────────────────────────────┐                            │
│          \ Stage 4: Deployed Production Staff /        (Top 0.8% Selected)  │
│           └──────────────────────────────────┘                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Coordinate & Dimension Hierarchy
- **Header Section:** Left $140\text{px}$, Top $120\text{px}$, Width $1640\text{px}$.
  - Title: $52\text{px}$ `Ubuntu` bold `#0F172A`.
  - Subtitle: $22\text{px}$ `Poppins` `#64748B`.
- **Funnel / Pyramid Container:** Left $260\text{px}$, Top $300\text{px}$, Width $1400\text{px}$, Height $640\text{px}$.
  - 4 Tiered trapezoidal stages with shrinking widths:
    - Tier 1: Width $1000\text{px}$, Height $110\text{px}$, color `#EDE9FE`, border `#DDD6FE`, count badge: `10,000+`.
    - Tier 2: Width $820\text{px}$, Height $110\text{px}$, color `#DDD6FE`, border `#C4B5FD`, count badge: `1,500`.
    - Tier 3: Width $640\text{px}$, Height $110\text{px}$, color `#C4B5FD`, border `#A78BFA`, count badge: `200`.
    - Tier 4: Width $480\text{px}$, Height $120\text{px}$, color `#7C3AED`, text `#FFFFFF`, count badge: `Top 1% Hired`.
  - Right metric column: Left $1320\text{px}$, Top $320\text{px}$, displaying pass rates and vetting hours.

---

## 3. Pure DOM Mandate
Every stage label, percentage chip, stage description, and applicant metric is rendered as native HTML text elements.

---

## 4. Slide Contract & Data Interface
```typescript
export interface TalentFunnelSlideData {
  id: string;
  type: 'talent-funnel';
  kicker?: string;
  title: string;
  subtitle: string;
  stages: Array<{
    stageNumber: number;
    title: string;
    description: string;
    metric: string;
    conversionRate: string;
  }>;
  themeId?: string;
}
```

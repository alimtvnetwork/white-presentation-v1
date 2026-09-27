# 13-Before / After Showcase & Comparison Slide Specification

## 1. Overview & Architectural Role
The **Before / After Showcase Slide** (`BeforeAfterShowcaseSlide.tsx` / `CostComparisonSlide.tsx` / `LoseVsInvestSlide.tsx`) articulates transformative business value, technical modernization, and ROI. It uses an asymmetric split comparison (Negative State vs Positive State) with high-contrast color coding (Muted/Rose for "Before", Crisp Violet/Emerald for "After").

---

## 2. Visual Layout & Geometry ($1920 \times 1080$)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Transformation Impact Pill]                        [Transparent Brand Logo]│
│                                                                             │
│   TRANSFORMING LEGACY COMPLEXITY INTO STREAMLINED AGILITY (54px)            │
│   Direct comparative breakdown of architecture and velocity                 │
│                                                                             │
│ ┌───────────────────────────────────┐ ┌───────────────────────────────────┐ │
│ │ BEFORE: FRAGMENTED & MANUAL       │ │ AFTER: UNIFIED & AUTONOMOUS       │ │
│ │ (Rose/Slate Muted Theme)          │ │ (Emerald/Violet High-Vibrancy)    │ │
│ │                                   │ │                                   │ │
│ │ ❌ 14-day manual release cycle    │ │ ✅ 12-minute automated CI/CD push │ │
│ │ ❌ High latency database queries  │ │ ✅ Sub-millisecond cached memory  │ │
│ │ ❌ 32% user dropoff at signup     │ │ ✅ 89% conversion rate across web │ │
│ │ ❌ Siloed departmental data       │ │ ✅ Unified lakehouse data mesh    │ │
│ └───────────────────────────────────┘ └───────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Coordinate & Dimension Hierarchy
- **Header Block:** Left $140\text{px}$, Top $120\text{px}$, Width $1640\text{px}$.
  - Title: $54\text{px}$ `Ubuntu` bold `#0F172A`.
  - Subtitle: $22\text{px}$ `Poppins` `#64748B`.
- **Dual Comparison Panels:** Top $280\text{px}$, Height $680\text{px}$.
  - **Left Card ("Before"):** Left $140\text{px}$, Width $790\text{px}$.
    - Background: `#FFF5F5` or `#F8FAFC`.
    - Border: $2\text{px}$ solid `#FECDD3` (Rose-200).
    - Top Tag: "OLD WAY / BEFORE", color `#E11D48`, background `#FFE4E6`.
    - 4 Pain Point Rows with cross / warning badges.
  - **Right Card ("After"):** Left $990\text{px}$, Width $790\text{px}$.
    - Background: `#FFFFFF`.
    - Border: $2.5\text{px}$ solid `#7C3AED` or `#10B981`.
    - Box Shadow: `0 20px 40px -10px rgba(124, 58, 237, 0.12)`.
    - Top Tag: "THE RISEUP STANDARD", color `#FFFFFF`, background `#7C3AED`.
    - 4 Proof Benefit Rows with checkmark badges and bold outcome metrics.

---

## 3. Pure DOM Mandate
Zero text in images. Every metric comparison, bullet point, badge, and callout is pure HTML/React elements.

---

## 4. Slide Contract & Data Interface
```typescript
export interface BeforeAfterSlideData {
  id: string;
  type: 'before-after';
  kicker?: string;
  title: string;
  subtitle: string;
  before: {
    title: string;
    points: string[];
    tag?: string;
  };
  after: {
    title: string;
    points: string[];
    tag?: string;
  };
  themeId?: string;
}
```

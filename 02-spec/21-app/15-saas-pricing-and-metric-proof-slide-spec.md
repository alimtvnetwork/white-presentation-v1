# 15-SaaS Pricing & Metric Proof Slide Specification

## 1. Overview & Architectural Role
The **SaaS Pricing & Metric Proof Slide** (`KiHealthPricingSlide.tsx` / `KiUsp24HoursSlide.tsx` / `PricingSlide.tsx`) converts audience engagement into decisive commercial alignment. It displays transparent tiered pricing models, feature comparison matrices, and 3-card USP credibility clusters.

---

## 2. Visual Layout & Geometry ($1920 \times 1080$)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Commercial Model Pill]                             [Transparent Brand Logo]│
│                                                                             │
│   FLEXIBLE, PREDICTABLE ENGAGEMENT TIERS (52px)                             │
│   Select the model that aligns with your execution velocity                 │
│                                                                             │
│ ┌──────────────────────┐ ┌──────────────────────┐ ┌──────────────────────┐  │
│ │ DEDICATED SQUAD      │ │ SCALE PARTNER (HOT)  │ │ ENTERPRISE PLATFORM  │  │
│ │ $4,500 / month       │ │ $8,900 / month       │ │ Custom Contract      │  │
│ │                      │ │                      │ │                      │  │
│ │ • 1 Principal Lead   │ │ • 1 Tech Director    │ │ • Full Cross-Func    │  │
│ │ • 2 Senior Devs      │ │ • 4 Fullstack Engs   │ │ • Dedicated PM & QA  │  │
│ │ • Async standups     │ │ • Daily sync & Slack │ │ • 99.99% SLA Uptime  │  │
│ │ • Weekly deliveries  │ │ • Dedicated DevOps   │ │ • Custom Security    │  │
│ │                      │ │                      │ │                      │  │
│ │ [Get Started]        │ │ [Select Scale Tier]  │ │ [Contact Leadership] │  │
│ └──────────────────────┘ └──────────────────────┘ └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Coordinate & Dimension Hierarchy
- **Header:** Left $140\text{px}$, Top $110\text{px}$, Width $1640\text{px}$.
- **3-Tier Card Grid:** Top $270\text{px}$, Height $700\text{px}$.
  - Grid: 3 columns, Width $500\text{px}$ each, horizontal gap $40\text{px}$, Left $160\text{px}$.
  - **Tier 1 (Standard):** Border $1.5\text{px}$ solid `#E2E8F0`, background `#FFFFFF`.
  - **Tier 2 (Featured / "Hot"):** Border $2.5\text{px}$ solid `#7C3AED`, background `#FFFFFF`, box-shadow `0 24px 48px -12px rgba(124, 58, 237, 0.18)`, transform scale `1.03`, "MOST POPULAR" top ribbon.
  - **Tier 3 (Enterprise):** Border $1.5\text{px}$ solid `#E2E8F0`, background `#F8FAFC`.
  - Price figures: $48\text{px}$ `Ubuntu` bold `#0F172A`.
  - CTA Button: Height $52\text{px}$, rounded $12\text{px}$, full card width.

---

## 3. Pure DOM Mandate
All pricing amounts, billing cadences, bullet inclusions, disclaimers, and button CTAs are live DOM text.

---

## 4. Slide Contract & Data Interface
```typescript
export interface PricingSlideData {
  id: string;
  type: 'pricing';
  kicker?: string;
  title: string;
  subtitle: string;
  tiers: Array<{
    name: string;
    price: string;
    cadence: string;
    isFeatured?: boolean;
    badge?: string;
    features: string[];
    ctaLabel: string;
  }>;
  themeId?: string;
}
```

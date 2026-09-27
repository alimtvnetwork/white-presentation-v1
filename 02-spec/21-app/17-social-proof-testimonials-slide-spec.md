# 17-Social Proof & Testimonials Slide Specification

## 1. Overview & Architectural Role
The **Social Proof & Testimonials Slide** (`TestimonialsSlide.tsx` / `TestimonialsSlideGorgeous.tsx` / `WhyRiseupSlide.tsx`) consolidates client trust, enterprise endorsements, and partner satisfaction. It pairs authoritative client logos with verified quotes and impact metrics.

---

## 2. Visual Layout & Geometry ($1920 \times 1080$)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Partner Validation Pill]                           [Transparent Brand Logo]│
│                                                                             │
│   VALIDATED BY GLOBAL ENTERPRISE LEADERS (52px)                             │
│   What engineering executives say about our velocity and craftsmanship      │
│                                                                             │
│ ┌───────────────────────────────────┐ ┌───────────────────────────────────┐ │
│ │ "Riseup delivered 3x faster than  │ │ "The architectural rigor and zero-│ │
│ │ our internal agency estimates.    │ │ compromise quality standard made  │ │
│ │ Flawless execution across web."   │ │ our series-B launch a massive hit"│ │
│ │                                   │ │                                   │ │
│ │ [Avatar] Sarah Jenkins            │ │ [Avatar] David Chen               │ │
│ │ VP Engineering, CloudPulse        │ │ Founder & CTO, HyperScale AI      │ │
│ └───────────────────────────────────┘ └───────────────────────────────────┘ │
│                                                                             │
│   [Partner Logo 1]   [Partner Logo 2]   [Partner Logo 3]   [Partner Logo 4] │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Coordinate & Dimension Hierarchy
- **Header:** Left $140\text{px}$, Top $120\text{px}$, Width $1640\text{px}$.
- **Dual Testimonial Cards:** Top $280\text{px}$, Height $460\text{px}$.
  - Width: $790\text{px}$ each, gap $40\text{px}$, Left $140\text{px}$.
  - Background: `#FFFFFF`, border $1.5\text{px}$ solid `#E2E8F0`, rounded $24\text{px}$, box-shadow `0 10px 30px -5px rgba(0,0,0,0.06)`.
  - Quote Typography: $26\text{px}$ `Poppins`, font-style italic, color `#1E293B`.
  - Author Row: Avatar $60\text{px} \times 60\text{px}$ circle, Name $20\text{px}$ bold, Title $15\text{px}$ `#64748B`.
- **Bottom Logo Bar:** Top $820\text{px}$, Left $140\text{px}$, Width $1640\text{px}$, Height $100\text{px}$.
  - Flex row, justify space-around, align center, grayscale opacity `0.6` hover `1.0`.

---

## 3. Pure DOM Mandate
Zero text baked into quotes or cards. All testimonials and author credentials are live DOM elements.

---

## 4. Slide Contract & Data Interface
```typescript
export interface TestimonialsSlideData {
  id: string;
  type: 'testimonials';
  kicker?: string;
  title: string;
  subtitle: string;
  testimonials: Array<{
    quote: string;
    author: string;
    title: string;
    company: string;
    avatarUrl?: string;
    logoUrl?: string;
  }>;
  partnerLogos?: string[];
  themeId?: string;
}
```

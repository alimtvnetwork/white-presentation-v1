# 12-Key Player & Technical Leadership Bio Slide Specification

## 1. Overview & Architectural Role
The **Key Player Bio Slide** (`ErfanHeroSlide.tsx` / `MarekSlide.tsx` / `SyedurRahmanSlide.tsx`) highlights specialized individual contributors, lead architects, or domain directors. It uses a structured 3-card competency cluster alongside an authentic portrait image, demonstrating practical expertise and execution capability.

---

## 2. Visual Layout & Geometry ($1920 \times 1080$)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Domain Competency Pill]                            [Transparent Brand Logo]│
│                                                                             │
│ ┌──────────────────────────┐  PROFESSIONAL HERO HEADLINE (52px)             │
│ │                          │  Senior Fullstack / Cloud Architect            │
│ │   Square / Rounded       │                                                │
│ │   Portrait Card          │  ┌───────────────────────────────────────────┐ │
│ │   (420px x 520px)        │  │ Specialization Pillar 1: High Scale Cloud │ │
│ │   Border + Inner Shadow  │  ├───────────────────────────────────────────┤ │
│ │                          │  │ Specialization Pillar 2: Micro-Frontends  │ │
│ └──────────────────────────┘  ├───────────────────────────────────────────┤ │
│ [Tags: AWS, Go, React, AI]    │ Specialization Pillar 3: Latency & Opt    │ │
│                               └───────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Coordinate & Dimension Hierarchy
- **Left Portrait Frame:** Left $140\text{px}$, Top $220\text{px}$, Width $440\text{px}$, Height $560\text{px}$.
  - Rounded corners: $24\text{px}$.
  - Border: $2\text{px}$ solid `#E2E8F0`.
  - Tech Stack Badges: Left $140\text{px}$, Top $810\text{px}$, Width $440\text{px}$, display flex flex-wrap gap $10\text{px}$.
- **Right Pillar Column:** Left $640\text{px}$, Top $220\text{px}$, Width $1140\text{px}$.
  - Headline: $52\text{px}$ `Ubuntu` bold `#0B192C`.
  - Subtitle: $24\text{px}$ `Poppins` `#64748B`.
  - 3 Competency Cards: Width $1140\text{px}$, Height $130\text{px}$ each, Top margins $20\text{px}$, padding $28\text{px}$, background `#FFFFFF`, border $1.5\text{px}$ solid `#F1F5F9`, box-shadow `0 4px 20px -2px rgba(0,0,0,0.05)`.
  - Left icon badge in each card: $48\text{px} \times 48\text{px}$ circular violet tint.

---

## 3. Pure DOM Mandate
All biography details, bullet points, skills, certifications, and project achievements are pure DOM elements (`<h3>`, `<p>`, `<span>`), ensuring sharp rendering at any zoom level or screen resolution.

---

## 4. Slide Contract & Data Interface
```typescript
export interface KeyPlayerSlideData {
  id: string;
  type: 'key-player';
  kicker?: string;
  name: string;
  role: string;
  avatarUrl: string;
  skills: string[];
  pillars: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  themeId?: string;
}
```

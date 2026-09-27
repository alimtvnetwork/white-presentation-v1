# 11-Executive Persona & CEO Slide Specification

## 1. Overview & Architectural Role
The **Executive Persona Slide** (`CEOSlide.tsx` / `CTOSlide.tsx` / `LeadershipDuoSlide.tsx`) conveys human leadership, domain credibility, and founder philosophy. Originating in the high-touch BSRM and Global PPT architectures, this slide pairs a full-height asymmetric photographic portrait plate with clean, structured biographical pillars, character-level shaded text names, and quantitative achievement metric pills.

---

## 2. Visual Layout & Geometry ($1920 \times 1080$)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Leadership Category Pill]                          [Transparent Brand Logo]│
│                                                                             │
│   ALIM UL KARIM (Character-Level Shaded 64px)       ┌─────────────────────┐ │
│   Chief Executive Officer & Product Architect       │                     │ │
│                                                     │                     │ │
│   "Philosophy / Quote Callout..." (26px Italic)     │   Executive Hero    │ │
│                                                     │   Portrait Plate    │ │
│ ┌──────────────────────┐ ┌──────────────────────┐   │   (Right 40% Width) │ │
│ │ 15+ Years Track      │ │ 40M+ Users Scaled    │   │   Feathered Edge    │ │
│ │ Enterprise Architect │ │ Multi-National Eng   │   │                     │ │
│ └──────────────────────┘ └──────────────────────┘   └─────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Coordinate & Dimension Hierarchy
- **Left Column (Text & Credentials):** Left $140\text{px}$, Width $980\text{px}$.
  - Kicker: Top $120\text{px}$, Font size $16\text{px}$ uppercase violet.
  - Name Title: Top $180\text{px}$, Font `Ubuntu`, $64\text{px}$, font-weight `800`. Uses character-level 10-step gradient shading.
  - Sub-Role: Top $265\text{px}$, Font `Poppins`, $24\text{px}$, color `#64748B`, font-weight `500`.
  - Quote / Vision Statement: Top $330\text{px}$, Font `Poppins`, $26\text{px}$, font-style italic, border-left $4\text{px}$ solid `#7C3AED`, padding-left $24\text{px}$, color `#1E293B`.
  - Metric Pills: Top $470\text{px}$, Grid 2 columns, width $460\text{px}$ each, height $120\text{px}$, background `#F8FAFC`, border $1\text{px}$ solid `#E2E8F0`, rounded $16\text{px}$.
  - Key Focus Areas / Bio Bullets: Top $630\text{px}$, 3 items with circular check badges.
- **Right Column (Hero Photographic Plate):**
  - Left $1160\text{px}$, Width $760\text{px}$, Height $1080\text{px}$.
  - Photographic portrait with feathered left mask:
    `mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.85) 18%, black 100%)`.
  - Dual drop shadow and ambient edge lighting.

---

## 3. Character-Level Shading Implementation
The executive name is rendered with discrete character shading across the 10-step gradient ramp ($S_0$ through $S_9$) defined in [06-color-theme-10-step-gradient-system.md](06-color-theme-10-step-gradient-system.md):
```tsx
const name = "Alim Ul Karim";
return (
  <h1 className="font-ubuntu text-[64px] font-extrabold tracking-tight">
    {name.split("").map((char, index) => {
      const stepIndex = Math.min(9, Math.floor((index / name.length) * 10));
      const colorHex = themeRamp[stepIndex].hex;
      return (
        <span key={index} style={{ color: colorHex }}>
          {char}
        </span>
      );
    })}
  </h1>
);
```

---

## 4. Slide Contract & Data Interface
```typescript
export interface ExecutivePersonaSlideData {
  id: string;
  type: 'persona';
  kicker?: string;
  name: string;
  role: string;
  quote?: string;
  avatarUrl: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;
  bioBullets: string[];
  themeId?: string;
}
```

# 04-KI Health Modern SaaS & Metric Card Specification

## 1. System Overview
The **KI Health Presentation System** defines the modern healthtech, clinical SaaS, and patient-centric presentation paradigms derived from `ki-health-ppt`. It establishes guidelines for crisp visual hierarchy, typographic impact lines with intentional editorial strikethroughs, and high-conversion 3-point proof card clusters.

---

## 2. Modern Healthtech Visual Cadence
Healthtech presentations require balancing emotional reassurance with uncompromising clinical professionalism:
- **Clean Whitespace & Contrast:** Avoids noisy textures in favor of crisp white backgrounds (`#FFFFFF` / `#F8FAFC`) with subtle teal/emerald or violet accent glows.
- **Micro-Badges & Rounded Geometry:** Uses generous corner radiuses (`16px–24px` for cards, `999px` for pill badges) evoking approachable, modern healthcare software.

---

## 3. The Flagship USP Slide Pattern (`KiUsp24HoursSlide.tsx`)

### 3.1 Typographic Strike Hook
To deliver a memorable differentiator, the hero statement pairs an affirmative brand promise against an explicit visual rejection of industry malpractice:

```tsx
<motion.h1
  style={{
    fontFamily: "'Ubuntu', sans-serif",
    fontSize: 124,
    fontWeight: 700,
    lineHeight: 1.02,
    letterSpacing: "-0.03em",
    color: "hsl(var(--pres-text))",
  }}
>
  Care that comes
  <br />
  <span style={{ color: "hsl(var(--pres-accent))" }}>through the door</span>,
  <br />
  not{" "}
  <span
    style={{
      color: "hsl(var(--pres-text-muted))",
      textDecoration: "line-through",
      textDecorationColor: "hsl(var(--pres-accent) / 0.7)",
      textDecorationThickness: 6,
    }}
  >
    the inbox
  </span>
  .
</motion.h1>
```

### 3.2 The 3-Point Proof Cluster
Anchored at the base of the USP slide is a horizontal cluster of 3 verifiable commitments:

```
┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
│ [Clock Icon]              │ [User Icon]               │ [MapPin Icon]             │
│ A TIME                    │ A NAME                    │ A PLACE                   │
│ A visit within 24 hours.  │ The same face every time. │ Anywhere in WA. Perth to  │
│                           │                           │ the Pilbara.              │
└───────────────────────────┴───────────────────────────┴───────────────────────────┘
```

#### Card Specifications:
- **Container Styling:** Subtle border (`1px solid hsl(var(--pres-accent) / 0.15)`), background `hsl(var(--pres-bg-card) / 0.5)`.
- **Icon Treatment:** Enclosed in a 44px circular or rounded-square badge with a soft brand tint.
- **Label:** `fontFamily: 'Poppins'`, `fontSize: 13px`, `fontWeight: 700`, `letterSpacing: 0.18em`, uppercase.
- **Text Body:** `fontFamily: 'Poppins'`, `fontSize: 18px`, `fontWeight: 500`, high-contrast slate ink.

---

## 4. The Narrative Story Spine (`KiStorySpineSlide.tsx`)
Presents patient case journeys using structured narrative steps:
1. **Once upon a time...** — Baseline reality and patient status quo.
2. **Every day...** — Daily friction, repetitive clinical hurdles, or treatment delays.
3. **Until one day...** — The clinical breakthrough or platform introduction.
4. **Because of that...** — Quantified intermediate improvements (e.g. 50% reduction in wait time).
5. **Until finally...** — Full recovery, discharge, and systemic cost savings.

---

## 5. Healthtech SaaS Pricing & Tiering Grid (`KiHealthPricingSlide.tsx`)
Presents multi-tier subscription and enterprise licensing packages:
- **3-Column Grid:** Standard ($500\text{px}$ width per card, $30\text{px}$ gap).
- **Featured Tier Elevation:** Center enterprise tier scaled by $1.04\times$ with active neon border glow and "MOST POPULAR" or "RECOMMENDED" top banner.
- **Checkmark Matrix:** Custom SVG verification icons in theme green (`#10b981`) or violet (`#7c3aed`) with muted crosses for omitted features.

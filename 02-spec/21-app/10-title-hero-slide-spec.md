# 10-Title & Hero Slide Specification

## 1. Overview & Architectural Role
The **Title & Hero Slide** (`TitleSlide.tsx` / `ProposalTitleSlide.tsx`) establishes immediate authority, topic gravity, and corporate identity at the onset of a presentation. It operates as the anchor frame on the $1920 \times 1080$ virtual canvas, combining massive editorial headline typography, dynamic subtitle chips, author credentials, and atmospheric brand backdrops.

---

## 2. Visual Layout & Geometry ($1920 \times 1080$)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Top Badge / Category Pill]                         [Transparent Brand Logo]│
│                                                                             │
│                                                                             │
│   MASSIVE EDITORIAL TITLE (72px - 84px)                                     │
│   Secondary Line with Gradient Accent                                       │
│                                                                             │
│   Explanatory Subtitle / Mission Statement (24px - 28px)                    │
│                                                                             │
│ ┌───────────────────────┐                                                   │
│ │ Presenter Avatar/Bio  │                                                   │
│ │ Date & Confidentiality│                                                   │
│ └───────────────────────┘                        [Geometric Accent / Ribbon]│
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Coordinate & Dimension Hierarchy
- **Canvas Size:** Virtual $1920\text{px} \times 1080\text{px}$ letterboxed to viewport.
- **Top Badge / Kicker:** Top $120\text{px}$, Left $140\text{px}$, Font size $16\text{px}$ uppercase tracking `0.15em`, background rgba violet `rgba(124, 58, 237, 0.08)`.
- **Top-Right Logo:** Top $80\text{px}$, Right $120\text{px}$, height $48\text{px}$ (uses `assets/logos/6 - Riseup Asia Logo Transparent Only BK.png`).
- **Main Headline:** Top $260\text{px}$, Left $140\text{px}$, Width $1200\text{px}$, Font: `Ubuntu`, $78\text{px}$, line-height $1.1$, font-weight `700`. Primary color `#0F172A`.
- **Subtitle:** Top $460\text{px}$, Left $140\text{px}$, Width $960\text{px}$, Font: `Poppins`, $26\text{px}$, color `#475569`, line-height $1.4$.
- **Presenter Bio Card:** Top $640\text{px}$, Left $140\text{px}$, Height $96\text{px}$, Display: Flex row, Avatar $64\text{px} \times 64\text{px}$ circle, Name $20\text{px}$ bold `#0F172A`, Title $15\text{px}$ `#64748B`.
- **Bottom Ribbon Accent:** Bottom $0\text{px}$, Left $0\text{px}$, Width $1920\text{px}$, Height $180\text{px}$ dual-gradient SVG wave with violet-to-indigo gradient.

---

## 3. Pure DOM Mandate & Typography Rules
- **No Raster Typography:** All title copy, kickers, subtitles, presenter badges, and copyright notices MUST be rendered as live DOM elements (`<h1>`, `<p>`, `<span>`).
- **Font Stack:**
  - Primary Display: `Ubuntu, sans-serif` (Headings)
  - Secondary Reading: `Poppins, sans-serif` (Subtitles, body copy)
  - Monospace Data / Dates: `JetBrains Mono, monospace` (Version stamps, session codes)

---

## 4. Animation Sequence (Quintic Easing)
1. **0.00s – 0.40s:** Background gradient wash and subtle SVG watermark opacity fade from `0.0` to `1.0`.
2. **0.20s – 0.70s:** Top kicker pill slides down $20\text{px}$ (`translateY(-20px) -> translateY(0)`) with spring damping.
3. **0.35s – 0.90s:** Main title character/word reveal with staggered opacity and $30\text{px}$ rise.
4. **0.55s – 1.05s:** Subtitle fade-in and horizontal expansion of the separator bar.
5. **0.75s – 1.25s:** Presenter credential badge and bottom organic wave ribbon entrance.

---

## 5. Slide Contract & Data Interface
```typescript
export interface TitleSlideData {
  id: string;
  type: 'title';
  kicker?: string;
  title: string;
  subtitle: string;
  presenter: {
    name: string;
    role: string;
    avatarUrl?: string;
    company?: string;
  };
  date?: string;
  themeId?: string;
}
```

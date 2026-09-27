# 05-White Presentation Master System Specification

## 1. System Overview & Sample Ground Truth
The **White Presentation Master System** is the flagship design paradigm for clean, modern, ultra-high-contrast slide decks. Grounded in the canonical sample ([white-presentation-sample-01.png](../../assets/screenshots/white-presentation-sample-01.png)), it combines a crisp white background with expressive violet/indigo brand curves, structured 3-point bullet cards, an illuminated visual focal point, and an authoritative top-right transparent logo.

![Sample White Presentation](../../assets/screenshots/white-presentation-sample-01.png)

---

## 2. Core Architectural Principles

### 2.1 The Non-Image Text Mandate (Pure DOM Typography)
> [!CRITICAL]
> **TOTAL BAN ON BAKED-IN TEXT:**
> Headlines, subtitles, bullet points, numbered metrics, and captions MUST be rendered as live, selectable DOM HTML elements (`<h1>`, `<h2>`, `<p>`, `<span>`) styled with CSS typography tokens. Under no circumstances should text be baked into a flattened raster image. The raster image is strictly reserved for the right-hand photographic hero visual.

### 2.2 Visual Anatomy Breakdown
The slide is architected into 6 discrete, non-overlapping visual zones on a standard $1920 \times 1080$ canvas:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Concentric Arc Watermark]                          [Riseup Asia Logo (BK)] │
│                                                                             │
│ [Pill Bar]                                    ┌───────────────────────────┐ │
│ Stories Are Emotional Bridges                 │   Neon Glowing Heart      │ │
│ They Share Your Emotions                      │      (Dual Ring)          │ │
│                                               │                           │ │
│  ┌────┐ │ A good story allows others          │    Couple Silhouette      │ │
│  │ ♡  │ │ to feel what you felt.              │    on Mountain Bridge     │ │
│  └────┘ │                                     │   (Feathered Left Edge)   │ │
│  ┌────┐ │ It creates empathy,                 │                           │ │
│  │ 👥 │ │ trust and attention.                │                           │ │
│  └────┘ │                                     │                           │ │
│  ┌────┐ │ Stories turn information            │                           │ │
│  │ 💬 │ │ into human connection.              │                           │ │
│  └────┘ │                                     └───────────────────────────┘ │
│                                                                             │
│ ═══════════════════════════[Bottom Organic Wave]════════════════════════════│
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Component Specifications

### 3.1 Background & Ambient Textures
- **Base Canvas:** Pure white `#FFFFFF` (or soft paper `#FDFDFE`).
- **Concentric Arc Watermark (Top Left):**
  - Ambient decorative SVG concentric arcs positioned at `top: -40px, left: -40px`.
  - Dimensions: `width: 480px, height: 480px`.
  - Stroke: `1.5px` with an ultra-soft violet tint (`rgba(124, 58, 237, 0.06)`).
  - Creates depth without distracting from the typography.

### 3.2 Accent Pill Marker
- **Geometry:** Horizontal rounded pill bar positioned directly above the main headline.
- **Coordinates:** `left: 120px, top: 180px`.
- **Dimensions:** `width: 52px, height: 5px, border-radius: 999px`.
- **Color Fill:** Solid brand violet (`#7C3AED` / `hsl(262.1 83.3% 57.8%)`).

### 3.3 Main Headline & Subtitle Block
- **Headline Coordinates:** `left: 120px, top: 215px`, `max-width: 680px`.
- **Headline Styling:**
  - Content: `Stories Are Emotional Bridges`
  - Font Family: `'Ubuntu', -apple-system, sans-serif`
  - Font Size: `58px`
  - Font Weight: `700` (Bold)
  - Line Height: `1.15`
  - Color: Deep Midnight Slate `#0B192C` (`hsl(215 60% 11%)`).
- **Subtitle Coordinates:** `left: 120px, top: 370px`.
- **Subtitle Styling:**
  - Content: `They Share Your <span class="accent-text">Emotions</span>`
  - Font Family: `'Poppins', -apple-system, sans-serif`
  - Font Size: `28px`
  - Font Weight: `500` (Medium)
  - Color: Primary text `#1E293B` with the keyword "Emotions" styled in rich violet `#7C3AED`.

### 3.4 The 3 Icon-Bullet Cards with Vertical Dividing Lines
Positioned in a vertical column starting at `left: 120px, top: 440px`:

```
┌────────────────────────────────────────────────────────────────────────┐
│  [Badge: 54px Ø]  │  [Vertical Divider]  │  [2-Line Descriptive Text]  │
│  Purple Circle    │  1.5px Solid Purple  │  Poppins 18px Medium        │
│  White Icon       │  Height: 44px        │  Slate-800 (#1E293B)        │
└────────────────────────────────────────────────────────────────────────┘
```

#### Detailed Item Attributes:
1. **Item 1: Emotional Resonance**
   - *Icon:* White outline `Heart` icon (`lucide-react` or SVG, stroke width: 2).
   - *Text:* `A good story allows others to feel what you felt.`
2. **Item 2: Engagement & Trust**
   - *Icon:* White outline `Users` / `People` icon (stroke width: 2).
   - *Text:* `It creates empathy, trust and attention.`
3. **Item 3: Information Conversion**
   - *Icon:* White outline `MessageCircle` / `ChatBubble` icon (stroke width: 2).
   - *Text:* `Stories turn information into human connection.`

#### Geometric Dimensions:
- **Circular Badge:** `width: 52px, height: 52px, border-radius: 50%`.
  - Background: Linear gradient `linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)`.
  - Box Shadow: `0 8px 16px rgba(124, 58, 237, 0.25)`.
- **Vertical Divider Line:**
  - Dimensions: `width: 1.5px, height: 40px`.
  - Color: Muted violet tint `#C084FC` (`rgba(192, 132, 252, 0.6)`).
  - Margin: `margin-left: 20px, margin-right: 20px`.
- **Text Block:**
  - Font Family: `'Poppins', sans-serif`.
  - Font Size: `18px`, Font Weight: `500`.
  - Line Height: `1.45`, Color: `#1E293B`.
- **Vertical Item Spacing:** `gap: 28px` between bullet rows.

### 3.5 Photographic Hero Visual with Neon Heart Glow
Positioned on the right side of the canvas (`left: 920px, top: 140px, right: 0, bottom: 60px`):

1. **Photographic Plate:**
   - Visual Asset: High-resolution photograph of a couple sitting on an arched bridge at golden sunset over scenic mountain peaks.
   - Left Feathered Mask: To blend seamlessly with the pure white canvas without harsh borders, the image applies a CSS alpha gradient mask:
     ```css
     mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.85) 18%, black 100%);
     -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.85) 18%, black 100%);
     ```
2. **Dual-Ring Neon Glowing Heart:**
   - Overlaid directly above the bridge focal point.
   - Geometry: SVG heart path duplicated into inner and outer rings.
   - Stroke: Inner stroke `2.5px`, Outer stroke `1.5px`.
   - Glowing Effect:
     ```css
     stroke: #D8B4FE;
     filter: drop-shadow(0 0 12px rgba(168, 85, 247, 0.75))
             drop-shadow(0 0 24px rgba(147, 51, 234, 0.45));
     ```

### 3.6 Top-Right Transparent Logo Placement
- **Location:** Anchored in the top-right header zone at `top: 40px, right: 60px`.
- **Brand Identity:** Transparent Riseup Asia Logo (`assets/logos/6 - Riseup Asia Logo Transparent Only BK.png` or SVG equivalent).
- **Scale:** `height: 42px`, `width: auto`, preserving natural aspect ratio.
- **Rendering Rule:** For white presentations, strictly use the **Black (BK)** transparent variant for maximum legibility and contrast against the white canvas.

### 3.7 Bottom Organic Gradient Wave Shape
Anchored to the absolute bottom of the canvas (`bottom: 0, left: 0, right: 0, height: 110px`):
- **Layer 1 (Underlying Wave):** Deep Midnight Blue (`#0F172A` / `#1E1B4B`) curving from bottom-left across the base.
- **Layer 2 (Top Wave):** Rich Violet Gradient:
  ```css
  background: linear-gradient(90deg, #6B21A8 0%, #7C3AED 40%, #4338CA 100%);
  ```
- **SVG Path Geometry:**
  ```svg
  <svg viewBox="0 0 1920 120" fill="none" class="absolute bottom-0 left-0 w-full">
    <path d="M0,80 C320,120 720,40 1200,90 C1560,120 1800,70 1920,85 L1920,120 L0,120 Z" fill="#0F172A" />
    <path d="M0,90 C280,130 680,50 1140,95 C1520,125 1780,75 1920,90 L1920,120 L0,120 Z" fill="url(#wave-gradient)" />
    <defs>
      <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#7C3AED" />
        <stop offset="60%" stop-color="#6B21A8" />
        <stop offset="100%" stop-color="#312E81" />
      </linearGradient>
    </defs>
  </svg>
  ```

---

## 4. Full Production Implementation Blueprint

```tsx
import React from "react";
import { Heart, Users, MessageCircle } from "lucide-react";

export default function WhitePresentationSlide() {
  const bulletItems = [
    {
      icon: Heart,
      text: "A good story allows others to feel what you felt.",
    },
    {
      icon: Users,
      text: "It creates empathy, trust and attention.",
    },
    {
      icon: MessageCircle,
      text: "Stories turn information into human connection.",
    },
  ];

  return (
    <div className="relative w-[1920px] h-[1080px] bg-white overflow-hidden select-none font-['Poppins',sans-serif]">
      {/* 1. Top-Left Ambient Watermark */}
      <svg
        className="absolute -top-10 -left-10 w-[480px] h-[480px] pointer-events-none opacity-40"
        viewBox="0 0 400 400"
      >
        <circle cx="0" cy="0" r="160" fill="none" stroke="#7C3AED" strokeWidth="1" opacity="0.15" />
        <circle cx="0" cy="0" r="240" fill="none" stroke="#7C3AED" strokeWidth="1" opacity="0.12" />
        <circle cx="0" cy="0" r="320" fill="none" stroke="#7C3AED" strokeWidth="1" opacity="0.08" />
      </svg>

      {/* 2. Top-Right Transparent Riseup Asia Logo */}
      <div className="absolute top-10 right-14 z-30">
        <img
          src="/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png"
          alt="Riseup Asia"
          className="h-11 w-auto object-contain"
        />
      </div>

      {/* 3. Left Content Column */}
      <div className="absolute left-[120px] top-[170px] z-20 max-w-[720px]">
        {/* Accent Pill Bar */}
        <div className="w-14 h-[5px] bg-[#7C3AED] rounded-full mb-8" />

        {/* Pure DOM Headline */}
        <h1 className="font-['Ubuntu',sans-serif] text-[58px] font-bold text-[#0B192C] leading-[1.12] tracking-tight">
          Stories Are
          <br />
          Emotional Bridges
        </h1>

        {/* Subtitle */}
        <h2 className="text-[28px] font-medium text-[#1E293B] mt-5 mb-12">
          They Share Your <span className="text-[#7C3AED] font-semibold">Emotions</span>
        </h2>

        {/* 3-Point Bullet Stack */}
        <div className="flex flex-col gap-7">
          {bulletItems.map((item, idx) => (
            <div key={idx} className="flex items-center">
              {/* Circular Badge */}
              <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#7C3AED] to-[#6B21A8] flex items-center justify-center shadow-lg shadow-purple-500/20 shrink-0">
                <item.icon className="w-6 h-6 text-white stroke-[2]" />
              </div>

              {/* Vertical Divider */}
              <div className="w-[1.5px] h-[40px] bg-purple-300 mx-5 shrink-0" />

              {/* Live DOM Text */}
              <p className="text-[19px] font-medium text-[#1E293B] leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Right Hero Photographic Plate with Seamless Left Feather */}
      <div
        className="absolute right-0 top-[120px] bottom-[60px] w-[980px] z-10 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.9) 22%, black 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.9) 22%, black 100%)",
        }}
      >
        <img
          src="/assets/screenshots/white-presentation-sample-01.png"
          alt="Emotional Bridge"
          className="w-full h-full object-cover object-center"
        />

        {/* Neon Glow Heart Overlay */}
        <div className="absolute top-[28%] left-[42%] -translate-x-1/2 -translate-y-1/2">
          <svg className="w-[320px] h-[300px] overflow-visible" viewBox="0 0 100 90">
            <path
              d="M50,85 C20,55 0,35 0,20 C0,8 10,0 22,0 C32,0 42,7 50,18 C58,7 68,0 78,0 C90,0 100,8 100,20 C100,35 80,55 50,85 Z"
              fill="none"
              stroke="#D8B4FE"
              strokeWidth="2.5"
              style={{
                filter: "drop-shadow(0 0 12px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 24px rgba(147, 51, 234, 0.5))",
              }}
            />
          </svg>
        </div>
      </div>

      {/* 5. Bottom Organic Gradient Waves */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[120px] z-20 pointer-events-none"
        viewBox="0 0 1920 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C360,130 760,45 1240,95 C1580,125 1820,70 1920,88 L1920,120 L0,120 Z"
          fill="#0F172A"
        />
        <path
          d="M0,92 C320,135 720,55 1180,100 C1540,130 1800,75 1920,92 L1920,120 L0,120 Z"
          fill="url(#white-deck-bottom-wave)"
        />
        <defs>
          <linearGradient id="white-deck-bottom-wave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#6B21A8" />
            <stop offset="100%" stopColor="#312E81" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
```

# 01-Overview: Grounded Global PPT & Flat Slide Synthesis

> **Specification Identifier:** `25-grounded-global-ppt-and-flat-slide-synthesis/01-overview`  
> **Status:** `APPROVED SPECIFICATION`  
> **Target Release:** `v1.2.0`  
> **Author:** Spec Author 01  
> **Updated:** 2026-10-02  
> **Domain:** Presentation Engine, Global PPT & Flat Slide Synthesis  

---

## 1. Executive Summary & System Vision

The **White Presentation Engine** evolves into a unified, high-authority presentation architecture that synthesizes the visual gravitas, executive pacing, and bilateral layouts of **Global PPT** corporate presentations (`D:\work\presentations-repos\global-ppt-v1`) with the fluid, interactive step-by-step choreography and tactile animations of **Flat Slide Show** (`D:\work\presentations-repos\flat-slide-show`).

Traditional enterprise slide systems suffer from rigid, static decks or rasterized graphics where typography is permanently flattened into imagery, breaking accessibility, localization, responsiveness, and real-time editing. The Grounded Global PPT & Flat Slide Synthesis establishes a deterministic, web-native presentation engine running inside standard browsers with:

1. **Pure Live DOM Typography Mandate:** Every title, subtitle, metric, label, bullet point, code snippet, and footnote is rendered directly as accessible HTML elements. Rasterized typography is strictly prohibited.
2. **1920x1080 Responsive Viewport Coordinate Geometry:** A deterministic 16:9 virtual canvas locked to 1920px × 1080px with uniform coordinate geometry and GPU-accelerated viewport scaling, eliminating fractional layout drift across displays.
3. **Step-by-Step Active Progression Engine:** Full support for granular interactive sub-steps (`activeStep`, `maxSteps`, `stepAdvance()`, `stepRewind()`, step jumping) within individual slides, featuring calibrated spring-physics transitions (`stiffness: 420, damping: 17, mass: 0.8`), fluid progress rails (`railLeft: 240, railRight: 1680`), active springing halos (`[320, 30]`), and animated SVG connector paths.
4. **Grounded Corporate & Storytelling Palettes:** Dynamic runtime injection of CSS custom properties (`--pres-*`) synchronized with 10 calibrated corporate color palettes (obsidian dark canvas `#0B0B0E`, archival light canvas `#FEFEFE`, vibrant amber `#FFAD01`, royal purple `#7030A0`), dark/light dynamic contrast, and ink-stamp typographic drop shadows.
5. **15 High-Authority Slide Archetypes Catalog:** A comprehensive library of 15 specialized slide archetypes derived from real production implementations across Global PPT and Flat Slide Show, spanning executive strategy, architectural diagrams, financial comparisons, metric dashboards, and developer workflows.

---

## 2. User Request (Verbatim)

```text
is it really?

is it done properly tested and released?


# High Priority Instruction

Okay. So in the work presentation, you have a lot of things, a lot of customization, a lot of factors are missing from, let's say, global PPT, how the color themes, animation goes. You didn't, let's say, adapt much. Also, you can look into the coding guideline properly. There is a new design systems, those are added. I request you to understand those, try to update your spec regarding the new design concepts and see how you can improve and add more slides. I've been asking. So you should look into the flat slide, global PPT, step-by-step slide. You should do all these things, and probably you should try to improve at least, let's say, 15 slides, new 15 types of slides, try to improve in your system. Okay? That's the first thing you should work on. Go deep, point deep, and then

# Actionable Items Must Follow Non-Negotiable

1. Review and adapt the global PPT color themes and animations.
2. Examine and adhere to the new coding guidelines and design systems.
3. Update your specifications with the new design concepts.
4. Improve and add at least 15 new types of slides.
5. Analyze flat slides and step-by-step slides for improvements.

Must follow and spawn agent using 

@[.agents/skills/execute-parent-task-with-n-steps-v6]

## Additional Instructions

learn /learn if you have to learn something and /plan stuff before working please.
```

---

## 3. The Five Core Architectural Pillars

```
+---------------------------------------------------------------------------------------------------+
|                            THE 5 CORE ARCHITECTURAL PILLARS                                       |
+---------------------------------------------------------------------------------------------------+
|  [Pillar 1] Pure Live DOM Text Mandate      -->  Zero baked-in text in images, 100% accessible   |
|  [Pillar 2] 1920x1080 Native Canvas Bounds  -->  Strict 16:9 aspect ratio, zero fractional drift |
|  [Pillar 3] Stepwise Interactive Engine     -->  Granular sub-steps, spring choreography, halo   |
|  [Pillar 4] Runtime CSS Variable Theme Engine->  10 Global PPT palettes, dynamic --pres-* tokens  |
|  [Pillar 5] 15 Enterprise Slide Archetypes  -->  Full pitch-to-product presentation taxonomy      |
+---------------------------------------------------------------------------------------------------+
```

### Pillar 1: Pure Live DOM Typography Mandate (Zero Baked-in Text)

1. **Accessibility and Semantic Structure:** All textual content—including massive KPI digits, category tags, subtitles, quote blocks, bullet lists, terminal code, and footnotes—MUST be rendered as live HTML DOM elements.
2. **Strict Graphic Isolation:** Image assets (`heroImage`, `avatarUrl`, partner badges) are strictly reserved for photographic portraits, product screenshots, or vector brand emblems. Under no circumstance may typography be flattened or rasterized into background images.
3. **In-Place Live Editing:** Every textual node across all 15 archetypes supports live inline mutation via `contentEditable={isEditMode}`, `suppressContentEditableWarning`, and blur persistence via `applyEdit((s) => ...)`.

### Pillar 2: 1920x1080 Responsive Viewport Coordinate Geometry

1. **Canonical Canvas Dimensions:** The virtual canvas is locked to exactly `1920px` width by `1080px` height (16:9 standard high-definition presentation canvas).
2. **Zero Fractional Drift:** Layout containers use absolute pixel coordinate standards (`w-[1920px] h-[1080px]`) with standardized outer padding (`p-[80px]` or `p-[100px]`), preventing horizontal scroll or rounding errors across arbitrary browser viewport resolutions.
3. **Responsive Viewport Fitting:** Outer presenter shells utilize GPU-accelerated CSS scaling (`transform: scale(...)`) anchored to `transform-origin: top center` or `center center`, ensuring crisp vector rendering on mobile displays, tablets, 4K monitors, and presentation projectors.

### Pillar 3: Step-by-Step Active Progression Engine

1. **Intra-Slide Stage Progression:** Beyond advancing between slides, individual slides maintain an internal `activeStep` counter (ranging from `0` to `maxSteps - 1`), allowing presenters to incrementally reveal cards, trigger milestone highlights, and walk through complex concepts.
2. **Phase Resolution:** For any sequential step $i$, its phase is deterministically resolved to `"past" | "active" | "future"`:
   - $i < \text{activeStep} \implies \text{"past"}$ (completed, dimmed or muted outline).
   - $i = \text{activeStep} \implies \text{"active"}$ (currently focused, vibrant accent, halo glow, scaled).
   - $i > \text{activeStep} \implies \text{"future"}$ (upcoming, low-opacity placeholder).
3. **Spring Choreography:** Sub-step transitions utilize physics-based spring animations with calibrated configurations (`stiffness: 420, damping: 17, mass: 0.8`), delivering snappy, organic deceleration without linear robotic motion.
4. **Fluid Progress Rail & Animated Halo:** Interactive steps feature horizontal or vertical connection rails (`railLeft: 240, railRight: 1680, railY: 780`) with a springing halo (`stiffness: 320, damping: 30`) following the active step node.
5. **SVG Animated Connectors:** Multi-stage flows (such as process cycles and step chains) use animated SVG quadratic Bézier paths (`M sx sy Q cx cy ex sy`) with traveling glow pulses jumping between stages.
6. **Directional Sound Feedback:** Advancing and rewinding sub-steps optionally trigger low-latency audio click feedback with synchronized volume ducking.

### Pillar 4: Grounded Corporate & Storytelling Palettes

1. **Global CSS Custom Properties (`--pres-*`):** Rather than hardcoding colors into React component props or inline styles, all slide components read from reactive CSS custom properties injected at the presentation root:
   - `--pres-canvas-bg`: Primary background color of the presentation canvas.
   - `--pres-text-primary`: Highest contrast foreground color for primary headlines and values.
   - `--pres-text-secondary`: Midtone contrast color for descriptions, subheadings, and captions.
   - `--pres-card-bg`: Translucent or solid surface fill for cards, bento cells, and containers.
   - `--pres-card-border`: Border rule color for structural framing.
   - `--pres-accent`: Highlight color for badges, active states, halos, and progress rails.
   - `--pres-header-shadow`: Calibrated typographic drop-shadow providing crisp separation.
   - `--pres-gradient-stop-0` through `--pres-gradient-stop-9`: 10-step luminance ramp for character shading and visual hierarchies.
2. **Dynamic Character Shading:** Headlines employ `shadeTextByCharacter(text, activeThemeId, 5, 9)` to dynamically paint letterforms across theme gradient stops with guaranteed contrast.
3. **Ink-Stamp Header Shadows:** Themes supply explicit `headerShadow` properties (e.g. `rgb(255 255 255) 1px 0.7px 0px` for light mode, `rgb(0 0 0) 1px 0.7px 0px` for dark mode) to ensure crisp typographic separation over dot-matrix grids and glassmorphism cards.

### Pillar 5: 15 High-Authority Slide Archetypes Catalog

The system introduces 15 specialized slide archetypes synthesizing the structural rigor of Global PPT with the step-by-step dynamism of Flat Slide Show:

| Index | Archetype Name | Type Identifier | Narrative Purpose & Motion Engine |
|:---:|:---|:---|:---|
| 01 | Steps Slide | `steps` | Split interactive sidebar with active step & StepDetailPane spring transition [420, 17, 0.8] |
| 02 | Timeline Roadmap Slide | `timeline` | Continuous progress rail (railLeft 240, railRight 1680), spring progress fill, active halo [320, 30] |
| 03 | Process Cycle Slide | `process` | Connected circles roadmap with SVG connector arrows jumping between stages and traveling glow pulses |
| 04 | Depth Stack Slide | `depth-stack` | 3D depth-stacked perspective cards with peel-away reveal & z-index peeling |
| 05 | Reveal Grid Slide | `reveal-grid` | Bento feature matrix with staggered spring entrance and independent cell reveals |
| 06 | Growth Engine Slide | `growth-engine` | 4 growth channels (SEO, Ads, Social/Content, AI Video) adapted from Global PPT with metric deltas |
| 07 | Talent Pyramid Slide | `talent-pyramid` | Multi-tier organizational and engineering capability pyramid with selective filtering ratios |
| 08 | Cost Comparison Slide | `cost-comparison` | 3-column financial comparison with ROI metrics, negative consequence callout, and savings |
| 09 | Tech Stack Slide | `tech-stack` | Layered technology ecosystem with category badges and mastery indicators |
| 10 | Problem Solution Slide | `problem-solution` | Bilateral challenge vs sovereign solution breakdown with checkmarks/crosses and asymmetric highlight |
| 11 | Metric Grid Slide | `metric-grid` | KPI performance dashboard with delta pills, trend directions, and timeframe tags |
| 12 | Before After Showcase | `before-after` | Transformation split comparing legacy vs modernized states with high-contrast pills |
| 13 | Testimonials Slide | `testimonials` | High-authority executive quote cards with verification credentials and partner badges |
| 14 | Code Terminal Slide | `code-terminal` | macOS terminal window chrome with syntax-colored execution steps and live log output |
| 15 | Call To Action Slide | `call-to-action` | Closing executive decision frame with dual CTAs, direct contact details, and QR verification |

---

## 4. Executive Persona Standardization

A non-negotiable architectural requirement across all seed templates, slide models, data files, and documentation:

> **Executive Identity Rule:**  
> The executive persona for **Alim Ul Karim** MUST be explicitly and consistently titled as **"Chief Software Engineer"**.  
> The title **"Founder"** or **"CEO"** is strictly forbidden across all files, templates, and UI components.  
> Any legacy references in templates, default slides, or test fixtures must be updated to **"Chief Software Engineer"**.

Standardized persona schema contract:

```json
{
  "name": "Alim Ul Karim",
  "role": "Chief Software Engineer",
  "quote": "Building sovereign, deterministic engineering systems through rigorous architecture and modular precision.",
  "bioBullets": [
    "Chief Software Engineer architecting high-scale enterprise platforms and distributed systems",
    "Pioneer of declarative presentation engines and AI-orchestrated workflows",
    "Specialist in low-latency infrastructure and zero-defect delivery pipelines"
  ],
  "avatarUrl": "/assets/alim-profile.png",
  "isVerified": true
}
```

---

## 5. The 10 Global PPT Theme Palettes & Dynamic CSS Variables

The presentation engine supports 10 calibrated enterprise themes adapted from Global PPT. Each theme registers a full 10-step luminance ramp and injects custom properties into the DOM:

| Theme ID | Display Name | Canvas Mode | Primary Accent | Visual Identity & Typographic Vibe |
|:---|:---|:---:|:---:|:---|
| `white-brand` | Pure White (Clean Editorial) | Light (`#FFFFFF`) | `#7C3AED` | Clean editorial white with violet accent and deep slate typography |
| `paper-editorial` | Paper Editorial (Warm Cream) | Light (`#F5F0E6`) | `#1D4ED8` | Archival cream parchment with refined deep royal navy ink |
| `true-dark` | True Dark (Obsidian & Neon) | Dark (`#020617`) | `#6366F1` | Pitch obsidian black with glowing electric indigo highlights |
| `emerald-growth` | Emerald Growth (Dark Forest) | Dark (`#022C22`) | `#10B981` | Deep pine forest green with vibrant mint badges and accents |
| `wp-exam-purple` | WP Exam Purple (Royal Tech) | Dark (`#1E1B4B`) | `#A855F7` | Royal tech violet with glowing lavender headlines and cards |
| `midnight-luxe` | Midnight Luxe (Dark Editorial) | Dark (`#0B192C`) | `#3B82F6` | Deep navy-indigo luxury keynote aesthetic with ice blue pills |
| `sunset-horizon` | Sunset Horizon (Warm Plum) | Dark (`#2D1B2D`) | `#F43F5E` | Warm plum velvet with radiant rose-coral and sunset gold accents |
| `cyber-neon` | Cyber Neon (Electric Cyan) | Dark (`#050B14`) | `#06B6D4` | Cyberpunk cyan and magenta matrix with luminous glowing borders |
| `crimson-executive`| Crimson Executive (Ruby Black) | Dark (`#1C0A0A`) | `#EF4444` | High-stakes ruby red on carbon executive black with stark contrast |
| `nord-frost` | Nord Frost (Arctic Glacier) | Dark (`#0F172A`) | `#38BDF8` | Glacial blue and slate for calm technical clarity and engineering rigor |

### Dynamic CSS Custom Property Mapping

When a theme is active, the presentation engine applies the following CSS custom properties to the presentation container (`#presentation-root`):

```css
#presentation-root {
  --pres-canvas-bg: #FFFFFF;
  --pres-text-primary: #0F172A;
  --pres-text-secondary: #475569;
  --pres-card-bg: rgba(255, 255, 255, 0.90);
  --pres-card-border: #E2E8F0;
  --pres-accent: #7C3AED;
  --pres-header-shadow: rgb(255 255 255) 1px 0.7px 0px;
  
  /* 10-step gradient stop ramp (stops[0..9]) */
  --pres-gradient-stop-0: #F5F3FF;
  --pres-gradient-stop-1: #EDE9FE;
  --pres-gradient-stop-2: #DDD6FE;
  --pres-gradient-stop-3: #C4B5FD;
  --pres-gradient-stop-4: #A78BFA;
  --pres-gradient-stop-5: #8B5CF6;
  --pres-gradient-stop-6: #7C3AED;
  --pres-gradient-stop-7: #6D28D9;
  --pres-gradient-stop-8: #4C1D95;
  --pres-gradient-stop-9: #0F172A;
}
```

Components use these variables directly via Tailwind arbitrary values (e.g. `bg-[var(--pres-card-bg)]`, `text-[var(--pres-text-primary)]`, `border-[var(--pres-card-border)]`) or CSS classes in `src/styles/animations.less`.

---

## 6. Architectural Boundaries & File Sizing Strategy

To ensure code maintainability, prevent regressions, and strictly enforce the repository's coding guidelines:

1. **Leaf Types Extraction (`src/types/archetypes.ts`):**  
   All 15 slide data schemas and supporting sub-types are declared in `src/types/archetypes.ts`. `src/types/presentation.ts` re-exports them and extends the `SlideData` and `SlideType` discriminated unions cleanly, ensuring `src/types/presentation.ts` remains well below the 300-line budget.
2. **Template Factory Extraction (`src/utils/slideArchetypeFactories.ts`):**  
   Default slide generation payloads and catalog definitions are isolated in `src/utils/slideArchetypeFactories.ts`. This keeps `src/components/builder/SlideCreatorModal.tsx` under 85 lines and prevents bloated stores.
3. **Strict Component Line Cap ($\le 100$ lines):**  
   Every one of the 15 slide archetype components (`src/components/slides/*.tsx`) is strictly capped at $\le 100$ lines of code. Any complex child elements (such as `StepDetailPane` or `FlywheelStage`) are cleanly extracted into focused subcomponents.
4. **Positive Boolean Naming Conventions:**  
   Every boolean flag across all contracts, state stores, and component props conforms to positive polarity (`is*`, `has*`):
   - Allowed: `isEditMode`, `isDark`, `isCompleted`, `isActive`, `isHighlighted`, `isPositiveDelta`, `isFeatured`, `hasBadge`, `hasBorder`, `hasGlow`, `hasSound`.
   - Forbidden: `isNotActive`, `disableGlow`, `hidden`, `uncompleted`, `isNegative`.
   - Forbidden equality comparisons: `== true`, `== false`. Use direct truthiness evaluation (`if (slide.isHighlighted)` or `if (!slide.isActive)`).

---

## 7. Cross-References

| Reference | Target Path | Description |
|:---|:---|:---|
| Slide Archetypes & Data Contracts | [02-slide-archetypes-data-contracts.md](02-slide-archetypes-data-contracts.md) | Detailed TypeScript interfaces, schemas, and ASCII wireframes for all 15 archetypes |
| Color & Motion Design System | [03-color-and-motion-design-system.md](03-color-and-motion-design-system.md) | Grounded color palettes, radial spotlights, spring motion tokens, and acoustic feedback |
| Verification Gates & Quality Checklist | [04-verification-gates.md](04-verification-gates.md) | Strict TypeScript compiler, linter, headless rendering, and release verification gates |
| Spec & Themes Subtask Plan | [.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/01-spec-and-themes.md](../../../.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/01-spec-and-themes.md) | Implementation plan for Subtask-01: Spec Foundations & Themes |
| Motion & Theming Subtask Plan | [.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/02-motion-and-theming.md](../../../.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/02-motion-and-theming.md) | Implementation plan for Subtask-02: Palettes, Less animations, and sound |
| Batch 2 Slides Subtask Plan | [.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/04-batch-2-slides.md](../../../.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/04-batch-2-slides.md) | Implementation plan for Subtask-04: Slides 9 to 15 |
| Master Pending Plan | [.ai-memory/plans/pending/25-grounded-global-ppt-and-flat-slide-synthesis.md](../../../.ai-memory/plans/pending/25-grounded-global-ppt-and-flat-slide-synthesis.md) | Master orchestrator roadmap for task 25 |

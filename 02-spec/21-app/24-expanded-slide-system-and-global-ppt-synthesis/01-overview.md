# 01-Overview: Expanded Slide System & Global PPT Synthesis

> **Specification Identifier:** `24-expanded-slide-system-and-global-ppt-synthesis/01-overview`  
> **Status:** `APPROVED SPECIFICATION`  
> **Target Release:** `v1.1.0`  
> **Author:** Spec Author 01  
> **Updated:** 2026-10-02  
> **Domain:** Presentation Engine & Declarative Slide Synthesis  

---

## 1. System Vision & Architecture

The **White Presentation Engine** evolves from a foundational presentation viewer into an enterprise-grade presentation creation, layout synthesis, and live-editing platform. By synthesizing layout paradigms from `global-ppt-v1` and `flat-slide-show`, this architecture delivers high-authority visual storytelling, mathematically calibrated color dynamics, and an expanded library of **15 specialized slide archetypes**.

The platform is designed around strict separation of concerns:
- **Presentation State Machine (`src/stores/deckStore.ts` & `src/stores/editStore.ts`):** Manages active slide index, active theme palette, slide mutations, and edit modes.
- **Leaf Type Separation (`src/types/archetypes.ts`):** Isolates the 15 slide data schemas into a standalone leaf type definition module, maintaining `src/types/presentation.ts` well below the 300-line limit.
- **Template Factory Extraction (`src/utils/slideArchetypeFactories.ts`):** Encapsulates default slide templates to ensure `SlideCreatorModal.tsx` and builder controls remain modular and below 100 lines.
- **Modular Slide Archetype Components (`src/components/slides/`):** Pure React presentation components, strictly under 100 lines each, supporting responsive theming and inline editing.

---

## 2. User Request (Verbatim)

```text
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
|  [Pillar 3] 10-Step Precision Gradient Ramps-->  Deterministic luma, contrastOnWhite WCAG AA/AAA|
|  [Pillar 4] Global PPT Corporate Authority  -->  Executive pacing, bilateral cards, micro-motion |
|  [Pillar 5] 15 Enterprise Slide Archetypes  -->  Full pitch-to-product presentation taxonomy      |
+---------------------------------------------------------------------------------------------------+
```

### Pillar 1: Pure Live DOM Text Mandate (Zero Baked-in Text in Images)
1. **Accessibility and Semantic Structure:** All textual content—including massive KPI digits, category tags, subtitles, quote blocks, bullet lists, terminal code, and footnotes—MUST be rendered as live HTML DOM elements.
2. **Strict Graphic Isolation:** Image assets (`heroImage`, `avatarUrl`, partner badges) are strictly reserved for photographic portraits, product screenshots, or vector brand emblems. Under no circumstance may typography be flattened or rasterized into background images.
3. **In-Place Live Editing:** Every textual node across all 15 archetypes supports live inline mutation via `contentEditable={isEditMode}`, `suppressContentEditableWarning`, and blur persistence via `applyEdit((s) => ...)`.

### Pillar 2: 1920x1080 Native Canvas Bounds & Scaling Subsystem
1. **Canonical Canvas Dimensions:** The virtual canvas is locked to exactly `1920px` width by `1080px` height (16:9 standard high-definition presentation canvas).
2. **Zero Fractional Drift:** Layout containers use absolute pixel coordinate standards (`w-[1920px] h-[1080px]`) with standardized outer padding (`p-[80px]` or `p-[100px]`), preventing horizontal scroll or rounding errors across arbitrary browser viewport resolutions.
3. **Responsive Viewport Fitting:** Outer presenter shells utilize GPU-accelerated CSS scaling (`transform: scale(...)`) anchored to `transform-origin: top center` or `center center`, ensuring crisp vector rendering on mobile displays, tablets, 4K monitors, and presentation projectors.

### Pillar 3: 10-Step Precision Gradient Ramps & Dynamic Theme Responsiveness
1. **Calibrated Color Scale (`stops[0..9]`):** Every theme in `THEME_PALETTES` provides an explicit 10-step luminance ramp:
   - `step 0`: Canvas background wash / sub-surface glow (`luma >= 0.95` on light themes, `<= 0.05` on dark themes).
   - `step 1-3`: Card borders, divider rules, subtle chip fills.
   - `step 4-6`: Secondary accents, midtone icons, interactive badges.
   - `step 7-8`: Brand primary highlights, lead headers, button backgrounds.
   - `step 9`: Deepest ink / maximum contrast foreground typography.
2. **Dynamic Character Shading:** Headlines employ `shadeTextByCharacter(text, activeThemeId, 5, 9)` to dynamically paint letterforms across theme gradient stops with guaranteed contrast.
3. **Header Shadow Tokens:** Themes supply explicit `headerShadow` properties (e.g. `rgb(255 255 255) 1px 0.7px 0px` for light mode, `rgb(0 0 0) 1px 0.7px 0px` for dark mode) to ensure crisp typographic separation over dot-matrix grids and glassmorphism cards.

### Pillar 4: Global PPT Corporate Authority & Pacing Engine
1. **Executive Asymmetry:** Rather than centered, generic cards, layouts utilize high-authority bilateral compositions:
   - **Left Strategic Anchor:** 30–45% canvas width containing category kicker, monumental headline, narrative context, and executive thesis.
   - **Right Evidence Grid:** 55–70% canvas width presenting data evidence, quadrant matrices, multi-tier architectures, or comparison columns.
2. **Staggered Animation Tokens:** Elements enter via coordinated CSS keyframes and `animate__animated` classes (`animate__fadeIn`, `slide-up-anim`), preventing visual overload during executive slide transitions.
3. **Step Progression & Directional Feedback:** Sequential archetypes (e.g. `timeline-roadmap`, `process-cycle`, `steps`) feature active step tracking and optional audio cue synchronization.

### Pillar 5: 15 Canonical Slide Archetypes Catalog
The system introduces 15 new purpose-built slide archetypes to span the complete executive deck narrative arc:

| Index | Type Identifier | Archetype Name | Narrative Purpose |
|:---:|:---|:---|:---|
| 01 | `metric-grid` | KPI Performance Matrix | 4-6 monumental numeric performance cards with delta badges and timeframes |
| 02 | `problem-solution` | Bilateral Conflict & Resolution | Side-by-side market friction versus sovereign platform breakthrough |
| 03 | `quadrant-matrix` | 2x2 Strategic Positioning Matrix | Strategic industry mapping along two custom axes with highlighted nodes |
| 04 | `market-opportunity` | TAM / SAM / SOM Concentric Sizing | Total addressable, serviceable addressable, and obtainable market tiers |
| 05 | `timeline-roadmap` | Quarterly Milestone Horizon | 4-quarter sequential execution roadmap with status delivery pills |
| 06 | `feature-grid` | Bento Feature Matrix | 6-card Bento layout showcasing core system capabilities with Lucide icons |
| 07 | `architecture-diagram`| 4-Tier Cloud Infrastructure | Client -> Edge Gateway -> Microservices -> Persistence cloud platform layers |
| 08 | `quote-callout` | Editorial Authority Pull-Quote | High-impact pull-quote with executive attribution and credential badge |
| 09 | `stats-callout` | Monumental Headline Stat | Singular monumental metric (e.g. 10x, 99.99%) with comparative chips |
| 10 | `team-grid` | Leadership & Engineering Roster | Executive leadership cards with roles, technical pedigree, and credentials |
| 11 | `case-study` | Enterprise Customer Story | Client profile, business friction, implemented solution, and ROI metrics |
| 12 | `comparison-columns` | 3-Tier Model Comparison | Feature comparison table contrasting Traditional, Competitor, and Sovereign |
| 13 | `process-cycle` | 4-Stage Continuous Flywheel | Circular clockwise loop illustrating compounding system lifecycle stages |
| 14 | `code-terminal` | Developer Console & Logs | macOS dark window chrome with command execution logs and syntax output |
| 15 | `call-to-action` | Executive Closing & Conversion | High-conversion concluding frame with primary/secondary CTAs and contacts |

---

## 4. Executive Persona Title Standardization

A non-negotiable architectural requirement across all seed templates, slide models, data files, and documentation:

> **Executive Identity Rule:**  
> The executive persona for **Alim Ul Karim** MUST be explicitly and consistently titled as **"Chief Software Engineer"**.  
> The title **"Founder"** is strictly forbidden.  
> Any legacy references in templates, default slides, or test fixtures must be updated to **"Chief Software Engineer"**.

Example standardized persona structure:
```json
{
  "name": "Alim Ul Karim",
  "role": "Chief Software Engineer",
  "quote": "Building sovereign, deterministic engineering systems through rigorous architecture and modular precision.",
  "bioBullets": [
    "Architect of high-scale enterprise platforms and distributed systems",
    "Pioneer of declarative presentation engines and AI-orchestrated workflows",
    "Specialist in low-latency infrastructure and zero-defect delivery pipelines"
  ]
}
```

---

## 5. Architectural Boundaries & File Sizing Strategy

To prevent code bloat and preserve code maintainability:

1. **Leaf Types Extraction (`src/types/archetypes.ts`):**  
   All 15 new slide interface contracts are defined in `src/types/archetypes.ts`. `src/types/presentation.ts` re-exports them and extends `SlideData` and `SlideType` discriminated unions cleanly, ensuring `src/types/presentation.ts` remains under its 300-line budget.
2. **Template Factory Extraction (`src/utils/slideArchetypeFactories.ts`):**  
   Default slide generation payloads are isolated in `src/utils/slideArchetypeFactories.ts`. This keeps `src/components/builder/SlideCreatorModal.tsx` under 85 lines and protects `src/stores/deckStore.ts`.
3. **Strict Component Line Cap ($\le 100$ lines):**  
   Every one of the 15 slide archetype components (`src/components/slides/*.tsx`) is strictly capped at $\le 100$ lines of code. Shared subcomponents or layout helpers are cleanly factored.
4. **Positive Boolean Naming Conventions:**  
   Every boolean flag across all contracts, state stores, and component props conforms to positive polarity (`is*`, `has*`):
   - `isEditMode`, `isDark`, `isCompleted`, `isActive`, `isHighlighted`, `isPositiveDelta`
   - `hasBadge`, `hasBorder`, `hasGlow`, `hasSound`
   - Strictly forbidden: `isNotActive`, `disableGlow`, `hidden`, `uncompleted`.

---

## 6. Global PPT Theme Palette Roster

The system supports 10 enterprise themes, each reacting dynamically across the 15 slide archetypes:

| Theme ID | Display Name | Background Mode | Primary Accent | Visual Identity |
|:---|:---|:---:|:---:|:---|
| `white-brand` | Pure White (Clean Editorial) | Light (`#FFFFFF`) | `#7C3AED` | Clean editorial white with violet accent |
| `paper-editorial` | Paper Editorial (Warm Cream) | Light (`#F5F0E6`) | `#1D4ED8` | Archival parchment with deep royal navy ink |
| `true-dark` | True Dark (Obsidian & Neon) | Dark (`#020617`) | `#6366F1` | Pitch obsidian with glowing electric indigo |
| `emerald-growth` | Emerald Growth (Dark Forest) | Dark (`#022C22`) | `#10B981` | Deep pine forest with vivid mint highlights |
| `wp-exam-purple` | WP Exam Purple (Royal Tech) | Dark (`#1E1B4B`) | `#A855F7` | Royal tech violet with lavender typography |
| `midnight-luxe` | Midnight Luxe (Dark Editorial) | Dark (`#0B192C`) | `#3B82F6` | Deep navy-indigo luxury keynote aesthetic |
| `sunset-horizon` | Sunset Horizon (Warm Plum) | Dark (`#2D1B2D`) | `#F43F5E` | Warm plum velvet with radiant rose-coral accents |
| `cyber-neon` | Cyber Neon (Electric Cyan) | Dark (`#050B14`) | `#06B6D4` | Cyberpunk cyan & magenta matrix with neon borders |
| `crimson-executive`| Crimson Executive (Ruby Black) | Dark (`#1C0A0A`) | `#EF4444` | High-stakes ruby red on carbon executive black |
| `nord-frost` | Nord Frost (Arctic Glacier) | Dark (`#0F172A`) | `#38BDF8` | Glacial blue and slate for technical clarity |

---

## 7. Cross-References

| Reference | Target Path | Description |
|:---|:---|:---|
| Slide Archetypes & Data Contracts | [02-slide-archetypes-data-contracts.md](02-slide-archetypes-data-contracts.md) | Full TypeScript interfaces and ASCII geometries |
| Global PPT Themes Subtask | [.ai-memory/plans/subtasks/24-expanded-slide-system-and-global/01-global-ppt-themes.md](../../../.ai-memory/plans/subtasks/24-expanded-slide-system-and-global/01-global-ppt-themes.md) | Implementation plan for themes and animations |
| Batch 1 Archetypes Subtask | [.ai-memory/plans/subtasks/24-expanded-slide-system-and-global/03-new-slide-archetypes-batch-1.md](../../../.ai-memory/plans/subtasks/24-expanded-slide-system-and-global/03-new-slide-archetypes-batch-1.md) | Implementation plan for archetypes 1–8 |
| Pending Master Plan | [.ai-memory/plans/pending/24-expanded-slide-system-and-global.md](../../../.ai-memory/plans/pending/24-expanded-slide-system-and-global.md) | Master orchestrator roadmap |

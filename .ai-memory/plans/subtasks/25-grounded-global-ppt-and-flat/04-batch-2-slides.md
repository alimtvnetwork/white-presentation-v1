# Subtask 04: Batch 2 Slide Archetypes (Slides 9–15) High-Fidelity Implementation Plan

> **Module:** `.ai-memory/plans/subtasks/25-grounded-global-ppt-and-flat/`  
> **Parent Plan:** [Plan 25: Grounded Global PPT & Flat Slide Show Synthesis](../../pending/25-grounded-global-ppt-and-flat-slide-synthesis.md)  
> **Specification Reference:** [02-Slide Archetypes Data Contracts](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/02-slide-archetypes-data-contracts.md) & [04-Verification Gates](../../../02-spec/21-app/25-grounded-global-ppt-and-flat-slide-synthesis/04-verification-gates.md)  
> **Status:** Pending Implementation  
> **Target Release:** `v1.2.0`  

---

## 1. Executive Summary & Subtask Objectives

Subtask 04 delivers the second batch of seven (7) high-authority presentation slide archetypes (Slides 9 through 15) for the White Presentation System, synthesizing enterprise visual patterns from `global-ppt-v1` and editorial storytelling from `flat-slide-show`.

### Target Slide Archetypes:
1. **Slide 09 (`TechStackSlide`):** Multi-tier technology ecosystem with category badges (Frontend, Backend, AI/Data, Cloud/DevOps) and interactive active category filtering.
2. **Slide 10 (`ProblemSolutionSlide`):** Bilateral transformation split comparing legacy enterprise friction against sovereign modern architectures with positive checkmarks and status indicators.
3. **Slide 11 (`MetricGridSlide`):** Executive KPI dashboard with high-impact numbers, directional trend delta pills, timeframe badges, and staggered reveals.
4. **Slide 12 (`BeforeAfterShowcaseSlide`):** High-contrast transformation split comparing legacy vs modernized systems with interactive mode toggle and key capability metrics.
5. **Slide 13 (`TestimonialsSlide`):** High-authority executive quote cards featuring client credentials, verified badges, company logos, and star ratings.
6. **Slide 14 (`CodeTerminalSlide`):** macOS-inspired dark terminal window chrome with syntax-colored execution steps, typing prompt, and verified status output.
7. **Slide 15 (`CallToActionSlide`):** High-conversion closing frame featuring primary/secondary executive CTAs, QR booking link, and verified contact channels.

---

## 2. Hard Governance Constraints

Every component implemented in this subtask must strictly satisfy:
1. **Hard Rule #6 (100-Line React Ceiling):** Every `.tsx` slide component must remain strictly $\le 100$ lines.
2. **Pure Live DOM Typography:** Zero rasterized text; all typography rendered as inspectable DOM nodes.
3. **Leaf Types Architecture:** All slide data models typed in `src/types/archetypes.ts` ($\le 300$ lines).
4. **Template Factory Isolation:** Mock payloads and default generators housed in `src/utils/slideArchetypeFactories.ts` ($\le 300$ lines).
5. **Positive Booleans Only:** Exclusively positive property flags (`isDark`, `hasBadge`, `isVisible`, `isInteractive`, `hasActiveCategory`).
6. **Executive Persona Standardization:** Alim Ul Karim is consistently designated as `"Chief Software Engineer"`.
7. **Dynamic Text Shadows:** Use `getHeaderShadow(isDark)` for ink-stamp legibility across light and dark themes.

---

## 3. Archetype Sizing & Decomposition Architecture

| # | Archetype Component | Target File | Line Cap | Subcomponent / Factory Delegation Strategy |
|:---:|:---|:---|:---:|:---|
| 09 | `TechStackSlide` | `src/components/slides/TechStackSlide.tsx` | $\le 100$ | Category cards rendered via inline map; default items in factory. |
| 10 | `ProblemSolutionSlide` | `src/components/slides/ProblemSolutionSlide.tsx` | $\le 100$ | Split bilateral grid; item rows mapped from `items` array. |
| 11 | `MetricGridSlide` | `src/components/slides/MetricGridSlide.tsx` | $\le 100$ | Metric cards mapped with stagger animation classes (`.stagger-1`..`4`). |
| 12 | `BeforeAfterShowcaseSlide`| `src/components/slides/BeforeAfterShowcaseSlide.tsx`| $\le 100$ | Split comparison panes with interactive toggle state; points mapped. |
| 13 | `TestimonialsSlide` | `src/components/slides/TestimonialsSlide.tsx` | $\le 100$ | Executive quote cards with avatar/badge mapping from schema. |
| 14 | `CodeTerminalSlide` | `src/components/slides/CodeTerminalSlide.tsx` | $\le 100$ | Terminal chrome header, syntax line mapping, and cursor pulse. |
| 15 | `CallToActionSlide` | `src/components/slides/CallToActionSlide.tsx` | $\le 100$ | Dual CTA buttons, calendar/QR booking box, and contact channel list. |

---

## 4. Detailed Implementation Blueprint for Slides 9–15

### 4.1 Slide 09: `TechStackSlide`
- **Data Interface (`src/types/archetypes.ts`):**
  ```typescript
  export interface TechCategory {
    name: string;
    description: string;
    technologies: Array<{ name: string; icon?: string; version?: string }>;
  }
  export interface TechStackSlideData {
    title: string;
    subtitle: string;
    categories: TechCategory[];
  }
  ```
- **Visual Design:**
  - 4 vertical category cards or 2x2 grid (Frontend, Backend, AI/ML, Cloud/Infra).
  - Subtle card borders with active category highlight using theme `accentColor`.
  - Technology pills with live DOM text badges and hover glow.
  - Header text uses `getHeaderShadow(isDark)`.

### 4.2 Slide 10: `ProblemSolutionSlide`
- **Data Interface (`src/types/archetypes.ts`):**
  ```typescript
  export interface ProblemSolutionItem {
    friction: string;
    solution: string;
    impactMetric: string;
  }
  export interface ProblemSolutionSlideData {
    title: string;
    subtitle: string;
    problemHeader: string;
    solutionHeader: string;
    items: ProblemSolutionItem[];
  }
  ```
- **Visual Design:**
  - Bilateral 2-column layout: Left column (red/amber friction tags with `X` icons), Right column (emerald/cyan sovereign solution tags with Checkmark icons).
  - Central connector arrows indicating direct transformation path.
  - Impact metric badge highlighted at right of each solution row.

### 4.3 Slide 11: `MetricGridSlide`
- **Data Interface (`src/types/archetypes.ts`):**
  ```typescript
  export interface MetricCardItem {
    label: string;
    value: string;
    delta: string;
    isPositiveDelta: boolean;
    timeframe: string;
    description: string;
  }
  export interface MetricGridSlideData {
    title: string;
    subtitle: string;
    metrics: MetricCardItem[];
  }
  ```
- **Visual Design:**
  - 4-column or 2x2 bento grid layout with high-impact metric typography (`text-5xl font-black`).
  - Delta pill badge (`isPositiveDelta: true` -> emerald green with `+` prefix and upward arrow).
  - Faint cross-hatch background grid and radial spotlight centering.
  - Staggered entry animation (`.stagger-1` through `.stagger-4`).

### 4.4 Slide 12: `BeforeAfterShowcaseSlide`
- **Data Interface (`src/types/archetypes.ts`):**
  ```typescript
  export interface BeforeAfterFeature {
    aspect: string;
    beforeState: string;
    afterState: string;
  }
  export interface BeforeAfterShowcaseSlideData {
    title: string;
    subtitle: string;
    beforeHeader: string;
    afterHeader: string;
    multiplierBadge: string;
    features: BeforeAfterFeature[];
  }
  ```
- **Visual Design:**
  - Dual-card split layout: "Legacy System" card on left with muted borders and warning accents; "Modernized Architecture" card on right with glowing brand border.
  - Central "10x Acceleration" or "90% Cost Reduction" circular multiplier badge connecting the two panels.
  - Clean comparison table rows with positive booleans and live DOM typography.

### 4.5 Slide 13: `TestimonialsSlide`
- **Data Interface (`src/types/archetypes.ts`):**
  ```typescript
  export interface TestimonialCard {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatarUrl?: string;
    hasVerifiedBadge: boolean;
    ratingStars: number;
  }
  export interface TestimonialsSlideData {
    title: string;
    subtitle: string;
    testimonials: TestimonialCard[];
  }
  ```
- **Visual Design:**
  - 3-column executive quote cards with elevated backdrop (`--background-elevated` / `--canvas-paper`).
  - Golden star rating indicators (5 stars) and verified badge icons.
  - Founder / Executive persona adherence when Alim Ul Karim is featured (`"Chief Software Engineer"`).

### 4.6 Slide 14: `CodeTerminalSlide`
- **Data Interface (`src/types/archetypes.ts`):**
  ```typescript
  export interface TerminalExecutionStep {
    command: string;
    output: string;
    hasPassed: boolean;
  }
  export interface CodeTerminalSlideData {
    title: string;
    subtitle: string;
    terminalTitle: string;
    steps: TerminalExecutionStep[];
  }
  ```
- **Visual Design:**
  - macOS terminal chrome with close (red), minimize (yellow), maximize (green) window controls.
  - Monospace typography (`font-mono text-sm`) with syntax highlighting (command prompt green, outputs cyan/gray).
  - Animated pulsing cursor and execution status pill (`STATUS: OK`).

### 4.7 Slide 15: `CallToActionSlide`
- **Data Interface (`src/types/archetypes.ts`):**
  ```typescript
  export interface ContactChannel {
    label: string;
    value: string;
    icon: string;
  }
  export interface CallToActionSlideData {
    title: string;
    subtitle: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    bookingUrl: string;
    contactChannels: ContactChannel[];
  }
  ```
- **Visual Design:**
  - Sovereign closing keynote frame with central hero value proposition.
  - Dual call-to-action buttons: Primary brand amber/purple glow button + Secondary frosted glass button.
  - Right-hand calendar booking QR card or contact channel checklist.

---

## 5. Step-by-Step Implementation Sequence

1. **Step 1: Leaf Types Verification (`src/types/archetypes.ts`)**
   - Confirm interfaces for Slides 9–15 exist and conform strictly to positive boolean conventions.
   - Verify `src/types/archetypes.ts` remains $\le 300$ lines.

2. **Step 2: Template Factories Integration (`src/utils/slideArchetypeFactories.ts`)**
   - Implement default generators for Slides 9–15 (`createTechStackSlide`, `createProblemSolutionSlide`, `createMetricGridSlide`, `createBeforeAfterShowcaseSlide`, `createTestimonialsSlide`, `createCodeTerminalSlide`, `createCallToActionSlide`).
   - Register templates in `SLIDE_ARCHETYPE_TEMPLATES` array.
   - Verify `src/utils/slideArchetypeFactories.ts` remains $\le 300$ lines.

3. **Step 3: Component Implementations / Refactorings (`src/components/slides/*.tsx`)**
   - Refactor `TechStackSlide.tsx` ($\le 100$ lines).
   - Refactor `ProblemSolutionSlide.tsx` ($\le 100$ lines).
   - Refactor `MetricGridSlide.tsx` ($\le 100$ lines).
   - Author / Refactor `BeforeAfterShowcaseSlide.tsx` ($\le 100$ lines).
   - Refactor `TestimonialsSlide.tsx` ($\le 100$ lines).
   - Refactor `CodeTerminalSlide.tsx` ($\le 100$ lines).
   - Refactor `CallToActionSlide.tsx` ($\le 100$ lines).

4. **Step 4: Dispatcher & Modal Integration**
   - Update `src/components/slides/SlideRenderer.tsx` ($\le 100$ lines) to dispatch `BeforeAfterShowcaseSlide` and ensure all 7 archetypes render smoothly.
   - Verify `SlideCreatorModal.tsx` supports inserting all 7 archetypes.

5. **Step 5: Automated Verification Checks**
   - Run line count audit on all 7 components.
   - Run boolean guideline check.
   - Verify 0 git commands and 0 routine build/test calls.

---

## 6. Verification & Quality Gates Checklist

- [ ] All 7 slide components under `src/components/slides/` strictly $\le 100$ lines.
- [ ] `src/types/archetypes.ts` strictly $\le 300$ lines.
- [ ] `src/utils/slideArchetypeFactories.ts` strictly $\le 300$ lines.
- [ ] Positive booleans only (`is*`, `has*`, `can*`, `should*`).
- [ ] Zero rasterized text; 100% pure live DOM typography.
- [ ] Dynamic `getHeaderShadow(isDark)` applied to all slide headers.
- [ ] Executive Persona standardized: Alim Ul Karim is `"Chief Software Engineer"`.
- [ ] Zero git CLI commands invoked during subtask authoring or execution.
- [ ] Zero full build or test commands invoked during routine subtask turns.

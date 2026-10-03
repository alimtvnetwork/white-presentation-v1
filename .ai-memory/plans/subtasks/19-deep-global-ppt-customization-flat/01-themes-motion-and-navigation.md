# Subtask Plan 01: Global PPT Themes, Animation Engine & Step-by-Step Navigation Optimization

> **Subtask Identifier:** `.ai-memory/plans/subtasks/19-deep-global-ppt-customization-flat/01-themes-motion-and-navigation.md`  
> **Parent Task:** [19-deep-global-ppt-customization-flat](../../pending/19-deep-global-ppt-customization-flat.md)  
> **Task Codes Covered:** Task-02 (Global PPT Color Themes & Animation Engine Integration) & Task-05 (Flat Slides & Step-by-Step Interactive Progression Enhancement)  
> **Assigned Owners:** Worker 01 (Themes & Animations) & Worker 02 (Navigation & Step Progression)  
> **Owned Files:**  
> - `src/themes/gradientTokens.ts`  
> - `src/themes/themeRuntime.ts`  
> - `src/stores/deckStore.ts`  
> - `src/components/canvas/PresentationCanvas.tsx`  
> - `src/components/canvas/SlideTransition.tsx`  
> - `src/components/canvas/ThemePopover.tsx`  
> - `src/components/canvas/NavigationControls.tsx`  
> - `src/utils/stepProgression.ts`  
> - `src/styles/animations.less`  
> **Target Release:** `v1.9.0`  
> **Status:** `PLAN-READY`  
> **Author:** Spec Subagent 01  

---

## 1. Objective & Strategic Scope

This subtask resolves foundational architectural issues in theming customization, inter-slide motion physics, and step progression navigation across the White Presentation presentation engine:

1. **Global PPT 13 Corporate Master Themes & Legacy Disambiguation (Task-02):**  
   Isolate and export `CANONICAL_THEME_IDS` (13 distinct palettes) and `CANONICAL_THEMES` in `src/themes/gradientTokens.ts`. Prevent UI pickers (`ThemePopover.tsx`) from displaying duplicate legacy alias buttons (`navy-blue`, `vscode-dark`, `dracula`, `github-light`, `paper-ink`, `macos-sonoma`, `windows-11`) while preserving backward-compatible resolution for existing decks.
2. **Slide-Level Theme Overrides (`slide.themeId`) (Task-02):**  
   Implement dynamic localized theming in `src/components/canvas/PresentationCanvas.tsx` where each slide can declare its own `themeId` (e.g. an architectural workflow rendered in light paper mode within an otherwise dark keynote), with deterministic fallback: `activeSlide?.themeId || activeThemeId || 'white-brand'`.
3. **Inter-Slide Transition Engine (Task-02):**  
   Add a presenter-selectable transition selector (`slide`, `fade`, `zoom`, `rise`) in `src/stores/deckStore.ts`, driven by hardware-accelerated GPU variants in `src/components/canvas/SlideTransition.tsx` and configurable via `ThemePopover.tsx`.
4. **Navigation Controls Multi-Step Boundary Repair (Task-05):**  
   Resolve the critical UI button lockouts in `src/components/canvas/NavigationControls.tsx`:
   - Fix `ChevronLeft.disabled` locking when on step 1+ of the first slide (`activeSlideIndex === 0`).
   - Fix `ChevronRight.disabled` locking when on step 0..N-2 of the last slide (`activeSlideIndex === deck.slides.length - 1`).
   - Derive clean, affirmative boolean states: `isRewindDisabled` and `isAdvanceDisabled`.
5. **Unified Multi-Step Progression Engine (Task-05):**  
   Unify `getSlideMaxSteps(slide)` in `src/utils/stepProgression.ts` and `src/stores/deckStore.ts` to natively support the 15 new enterprise slide archetypes (Archetypes 46 to 60):
   - Group A (Archetypes 46–53): 4-step progressive reveal workflows (`Math.max(stages.length, 1)`).
   - Group B (Archetypes 54–60): 1-step flat high-density telemetry overviews.

---

## 2. File Implementation Directives

### 2.1 Clean Separation of Canonical Themes in `src/themes/gradientTokens.ts`

Explicitly define the 13 canonical theme IDs and export `CANONICAL_THEME_IDS` and `CANONICAL_THEMES`:

```typescript
export const CANONICAL_THEME_IDS = [
  'white-brand',
  'paper-editorial',
  'true-dark',
  'emerald-growth',
  'wp-exam-purple',
  'midnight-luxe',
  'sunset-horizon',
  'cyber-neon',
  'crimson-executive',
  'nord-frost',
  'bright-gold',
  'noir-gold',
  'monokai',
] as const;

export type CanonicalThemeId = typeof CANONICAL_THEME_IDS[number];

/**
 * Filtered map containing only the 13 authentic corporate master themes.
 * Excludes legacy alias clones to prevent duplicate picker items.
 */
export const CANONICAL_THEMES: Record<string, ThemePalette> = Object.fromEntries(
  CANONICAL_THEME_IDS.map((id) => [id, THEME_PALETTES[id]]).filter(([_, theme]) => Boolean(theme))
);
```

Ensure `resolveTheme(themeId)` continues to seamlessly translate legacy aliases (`navy-blue`, etc.) to canonical targets without polluting picker lists.

---

### 2.2 Theme Runtime Dual-Mode Inversion in `src/themes/themeRuntime.ts`

Guarantee that `applyTheme` injects the high-contrast `--pres-accent-text` token according to the Zero Yellow-on-Light contrast rule:

```typescript
export function applyTheme(themeId: string, skipBroadcast = false): void {
  const palette = resolveTheme(themeId);
  const root = document.documentElement;

  // Space-separated HSL triplet injection
  root.style.setProperty('--pres-accent', palette.accentHsl || '262 83% 58%');
  root.style.setProperty('--pres-bg', palette.canvasBgHsl || '0 0% 100%');
  root.style.setProperty('--pres-text', palette.textHsl || '222 47% 11%');
  root.style.setProperty('--pres-subtext', palette.subtextHsl || '215 16% 47%');
  root.style.setProperty('--pres-card-bg', palette.cardBgHsl || '210 40% 98%');
  root.style.setProperty('--pres-card-border', palette.cardBorderHsl || '262 83% 58%');

  // Zero Yellow-on-Light dual-mode inversion
  const isLight = !palette.isDark;
  const isLightAccent = palette.accentHsl?.includes('45 ') || palette.accentHsl?.includes('80 ');
  const accentTextColor = isLight && isLightAccent
    ? '#78350F' // High-contrast umber for light surfaces (CR >= 8.6:1)
    : palette.accentColor || '#7C3AED';

  root.style.setProperty('--pres-accent-text', accentTextColor);
  root.style.setProperty('--pres-header-shadow', getHeaderShadow(!palette.isDark));

  if (!skipBroadcast && hasBroadcast && broadcastChannel) {
    broadcastChannel.postMessage({ type: 'THEME_SYNC', themeId: palette.id });
  }
}
```

---

### 2.3 Store Transition Type & Archetype 46–60 Step Counts in `src/stores/deckStore.ts`

Extend `DeckState` with `transitionType` and update `computeSlideMaxSteps`:

```typescript
export type SlideTransitionType = 'slide' | 'fade' | 'zoom' | 'rise';

interface DeckState {
  // Existing state...
  transitionType: SlideTransitionType;
  setTransitionType: (type: SlideTransitionType) => void;
  // ...
}

// In create<DeckState>:
transitionType: 'slide',
setTransitionType: (type: SlideTransitionType) => {
  set({ transitionType: type });
},
```

Add step count calculator for Customization slide archetypes 46 to 60:

```typescript
export const getCustomizationSlideSteps = (slide: any): number => {
  if (!slide || typeof slide !== 'object') return 0;

  switch (slide.type) {
    // Group A: Multi-Step Kinetic Workflows (4 steps each)
    case 'neural-vector-search-topology':
    case 'model-quantization-speculative-decoding':
    case 'llm-firewall-red-team-matrix':
    case 'global-anycast-traffic-director':
    case 'cqrs-event-sourcing-fabric':
    case 'sbom-slsa-provenance-attestation':
    case 'post-merger-integration-roadmap':
    case 'scope3-carbon-supply-chain-audit':
      return slide.stages?.length || 4;

    // Group B: High-Density Flat Sovereign Telemetry Overviews (1 step flat)
    case 'cspm-ciem-cloud-entitlement-graph':
    case 'confidential-computing-enclave':
    case 'predictive-autoscaling-pod-matrix':
    case 'capex-opex-capital-allocation':
    case 'transfer-pricing-tax-topology':
    case 'sales-quota-compensation-matrix':
    case 'executive-succession-leadership-bench':
      return 1;

    default:
      return 0;
  }
};
```

Update `computeSlideMaxSteps(slide)` to incorporate `getCustomizationSlideSteps(slide)`.

---

### 2.4 Slide-Level Theme & Dynamic Transitions in `src/components/canvas/PresentationCanvas.tsx`

Update `PresentationCanvas.tsx` to read `transitionType` from store and honor `activeSlide?.themeId`:

```tsx
const { activeSlide, activeThemeId, transitionType, slideDirection } = useDeckStore();

// Slide-level theme override resolution
const effectiveThemeId = activeSlide?.themeId || activeThemeId;

useEffect(() => {
  if (effectiveThemeId) {
    applyTheme(effectiveThemeId);
  }
}, [effectiveThemeId]);

// In render:
<SlideTransition
  transitionKey={activeSlide.id}
  direction={slideDirection}
  transitionType={transitionType}
>
  <SlideRenderer slide={activeSlide} />
</SlideTransition>
```

---

### 2.5 Dynamic Variant Support in `src/components/canvas/SlideTransition.tsx`

Ensure all 4 transition types are cleanly mapped to motion variants:

```typescript
export interface SlideTransitionProps {
  transitionKey: string;
  direction: 1 | -1;
  transitionType?: 'slide' | 'fade' | 'zoom' | 'rise';
  children: React.ReactNode;
}

const createVariants = (direction: 1 | -1, transitionType: string) => {
  const isForward = direction > 0;
  if (transitionType === 'fade') {
    return { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } };
  }
  if (transitionType === 'zoom') {
    return {
      enter: { scale: 0.94, opacity: 0 },
      center: { scale: 1, opacity: 1 },
      exit: { scale: 1.04, opacity: 0 },
    };
  }
  if (transitionType === 'rise') {
    return {
      enter: { y: isForward ? 60 : -60, opacity: 0 },
      center: { y: 0, opacity: 1 },
      exit: { y: isForward ? -60 : 60, opacity: 0 },
    };
  }
  return {
    enter: { x: isForward ? 80 : -80, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: isForward ? -80 : 80, opacity: 0 },
  };
};
```

---

### 2.6 Canonical 13-Theme & Transition Selector in `src/components/canvas/ThemePopover.tsx`

Replace truncated `.slice(0, 10)` mapping with `CANONICAL_THEMES`, and add a sleek segmented transition selector:

```tsx
import { CANONICAL_THEMES } from '../../themes/gradientTokens';
import { useDeckStore, SlideTransitionType } from '../../stores/deckStore';

// In component:
const { activeThemeId, setTheme, transitionType, setTransitionType } = useDeckStore();

// In JSX:
{/* Transition Selector Segmented Control */}
<div className="mb-2 pb-2 border-b border-slate-800">
  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mb-1">
    Transition Effect
  </span>
  <div className="grid grid-cols-4 gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800">
    {(['slide', 'fade', 'zoom', 'rise'] as SlideTransitionType[]).map((mode) => (
      <button
        key={mode}
        onClick={() => setTransitionType(mode)}
        className={`text-[10px] py-1 rounded capitalize font-medium transition-colors ${
          transitionType === mode ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        {mode}
      </button>
    ))}
  </div>
</div>

{/* 13 Canonical Themes Grid */}
<div className="grid grid-cols-2 gap-1.5 max-h-56 overflow-y-auto pr-1">
  {Object.entries(CANONICAL_THEMES).map(([id, theme]) => {
    const isSelected = activeThemeId === id;
    return (
      <button
        key={id}
        onClick={() => {
          setTheme(id);
          onClose();
        }}
        className={`flex items-center gap-2 p-2 rounded-xl text-left text-xs transition-all cursor-pointer ${
          isSelected
            ? 'bg-violet-600/30 border border-violet-500/80 text-white font-medium'
            : 'hover:bg-slate-800/80 border border-transparent text-slate-300'
        }`}
      >
        <div
          className="w-3.5 h-3.5 rounded-full shrink-0 border border-white/20 shadow-sm"
          style={{ backgroundColor: theme.accentColor }}
        />
        <span className="truncate flex-1 text-[11px]">{theme.name.split(' (')[0]}</span>
        {isSelected && <Check size={12} className="text-violet-400 shrink-0" />}
      </button>
    );
  })}
</div>
```

---

### 2.7 Navigation Controls Boundary Fix in `src/components/canvas/NavigationControls.tsx`

Update disabled logic and tooltips to correctly handle intra-slide steps:

```tsx
export const NavigationControls: React.FC = () => {
  const {
    activeSlideIndex,
    activeStep,
    deck,
    stepAdvance,
    stepRewind,
    isSoundEnabled,
    toggleSound,
  } = useDeckStore();

  const currentSlide = deck.slides[activeSlideIndex];
  const maxSteps = computeSlideMaxSteps(currentSlide);

  const canRewindStep = activeStep > 0;
  const canAdvanceStep = activeStep < maxSteps - 1;

  const isRewindDisabled = activeSlideIndex === 0 && !canRewindStep;
  const isAdvanceDisabled = activeSlideIndex === deck.slides.length - 1 && !canAdvanceStep;

  return (
    <div className="...">
      {/* Existing popup buttons... */}

      <button
        onClick={stepRewind}
        disabled={isRewindDisabled}
        className="p-1 rounded-full hover:bg-slate-800 disabled:opacity-30 cursor-pointer transition-colors"
        title={canRewindStep ? "Previous Step [←]" : "Previous Slide [←]"}
      >
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={stepAdvance}
        disabled={isAdvanceDisabled}
        className="p-1 rounded-full hover:bg-slate-800 disabled:opacity-30 cursor-pointer transition-colors"
        title={canAdvanceStep ? "Next Step [→ / Space]" : "Next Slide [→ / Space]"}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};
```

---

### 2.8 Unify Step Calculation in `src/utils/stepProgression.ts`

Add archetype identification and step calculation for the 15 new slide types:

```typescript
export function isCustomizationSlideType(type?: string): boolean {
  const customizationTypes = [
    'neural-vector-search-topology',
    'model-quantization-speculative-decoding',
    'llm-firewall-red-team-matrix',
    'global-anycast-traffic-director',
    'cqrs-event-sourcing-fabric',
    'sbom-slsa-provenance-attestation',
    'post-merger-integration-roadmap',
    'scope3-carbon-supply-chain-audit',
    'cspm-ciem-cloud-entitlement-graph',
    'confidential-computing-enclave',
    'predictive-autoscaling-pod-matrix',
    'capex-opex-capital-allocation',
    'transfer-pricing-tax-topology',
    'sales-quota-compensation-matrix',
    'executive-succession-leadership-bench',
  ];
  return Boolean(type && customizationTypes.includes(type));
}

export function calculateCustomizationSlideStepCount(slide: any): number {
  if (!slide || typeof slide !== 'object') return 1;

  switch (slide.type) {
    case 'neural-vector-search-topology':
    case 'model-quantization-speculative-decoding':
    case 'llm-firewall-red-team-matrix':
    case 'global-anycast-traffic-director':
    case 'cqrs-event-sourcing-fabric':
    case 'sbom-slsa-provenance-attestation':
    case 'post-merger-integration-roadmap':
    case 'scope3-carbon-supply-chain-audit':
      return Math.max(slide.stages?.length || 4, 1);

    case 'cspm-ciem-cloud-entitlement-graph':
    case 'confidential-computing-enclave':
    case 'predictive-autoscaling-pod-matrix':
    case 'capex-opex-capital-allocation':
    case 'transfer-pricing-tax-topology':
    case 'sales-quota-compensation-matrix':
    case 'executive-succession-leadership-bench':
    default:
      return 1;
  }
}

// In getSlideMaxSteps(slide):
export function getSlideMaxSteps(slide: any): number {
  const hasSlide = Boolean(slide && typeof slide === 'object');
  if (hasSlide) {
    if (isCustomizationSlideType(slide.type)) {
      return calculateCustomizationSlideStepCount(slide);
    }
    if (isGlobalPptSlideType(slide.type)) {
      return calculateGlobalPptSlideStepCount(slide);
    }
    if (isModernSlide(slide)) {
      return calculateModernSlideStepCount(slide);
    }
  }
  return 1;
}
```

---

### 2.9 Transition Timing Variables & Kinetic Classes in `src/styles/animations.less`

Add the dynamic transition duration token and kinetic step utility classes:

```less
:root {
  --pres-transition-duration: 0.42s;
  --pres-transition-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

.kinetic-step-container {
  transition: transform var(--pres-transition-duration) var(--pres-transition-ease),
              opacity var(--pres-transition-duration) var(--pres-transition-ease),
              box-shadow var(--pres-transition-duration) var(--pres-transition-ease);
}

.kinetic-halo-active {
  box-shadow: 0 0 0 1px hsl(var(--pres-accent) / 0.40),
              0 0 24px -2px hsl(var(--pres-accent) / 0.50);
  border-color: hsl(var(--pres-accent));
}

.kinetic-step-completed {
  opacity: 0.75;
  transform: translateZ(8px) scale(1.0);
}

.kinetic-step-active {
  opacity: 1.0;
  transform: translateZ(24px) scale(1.02);
  z-index: 20;
}

.kinetic-step-future {
  opacity: 0.40;
  transform: translateZ(8px) scale(0.98);
  filter: blur(1.25px);
  pointer-events: none;
}
```

---

## 3. Step Progression Engine Unification & Boundary Logic

### 3.1 Step Calculation Matrix Across All 15 Archetypes

| Archetype Code & Identifier | Slide Category | Progression Phase Engine | Total Max Steps | Interactive Elements Revealed per Step |
|:---|:---|:---|:---:|:---|
| **46:** `neural-vector-search-topology` | AI Infrastructure | 4-Stage Pipeline | 4 | Step 0: Ingestion & Chunks; Step 1: HNSW Graph Indexing; Step 2: K-NN Vector Search; Step 3: Cross-Encoder Re-rank. |
| **47:** `model-quantization-speculative-decoding` | AI Optimization | 4-Stage Optimization | 4 | Step 0: FP16 Weights; Step 1: INT4/FP8 Quantization; Step 2: Draft Speculative Tokens; Step 3: Target Validation. |
| **48:** `llm-firewall-red-team-matrix` | AI Security | 4-Gate Defense | 4 | Step 0: Prompt Triage; Step 1: Semantic Injection Guard; Step 2: PII Scrubbing; Step 3: Safety SLA Gate. |
| **49:** `global-anycast-traffic-director` | Planetary Network | 4-Phase Steering | 4 | Step 0: PoP Ingress; Step 1: DDoS Scrubbing; Step 2: BGP Latency Routing; Step 3: Origin Cutover. |
| **50:** `cqrs-event-sourcing-fabric` | Distributed Systems | 4-Stage Event Flow | 4 | Step 0: Command Ingestion; Step 1: Append-Only Log; Step 2: Asynchronous Projection; Step 3: Materialized Read Store. |
| **51:** `sbom-slsa-provenance-attestation` | Supply Chain | 4-Level SLSA Gate | 4 | Step 0: Git Commit Tagging; Step 1: Hermetic Builder; Step 2: Cosign Cryptographic Signature; Step 3: Binary Verification. |
| **52:** `post-merger-integration-roadmap` | Corporate Strategy | 4-Quarter Milestones | 4 | Step 0: Day-1 Operational Continuity; Step 1: Single Sign-On Mesh; Step 2: ERP/CRM Harmonization; Step 3: Financial Synergies. |
| **53:** `scope3-carbon-supply-chain-audit` | ESG & Compliance | 4-Tier Provenance | 4 | Step 0: Scope 1 & 2 Emissions; Step 1: Tier-1/2 Supplier Logs; Step 2: CBAM Border Tax Filing; Step 3: Carbon Offset Ledger. |
| **54:** `cspm-ciem-cloud-entitlement-graph` | Cloud Security | High-Density Flat | 1 | Flat sovereign telemetry overview tracking least-privilege IAM drift and cloud risk score. |
| **55:** `confidential-computing-enclave` | Hardware Security | High-Density Flat | 1 | Flat silicon enclave architecture mapping AMD SEV-SNP / Intel SGX cryptographic memory isolation. |
| **56:** `predictive-autoscaling-pod-matrix` | Cloud Infrastructure | High-Density Flat | 1 | Flat Kubernetes telemetry overview tracking predictive ML traffic forecasts against pod rebalancing. |
| **57:** `capex-opex-capital-allocation` | Corporate Finance | High-Density Flat | 1 | Flat financial matrix evaluating multi-year infrastructure CapEx amortization vs Cloud OpEx agility. |
| **58:** `transfer-pricing-tax-topology` | Tax & Governance | High-Density Flat | 1 | Flat multinational legal entity topology auditing OECD Pillar Two minimum tax and IP cross-charges. |
| **59:** `sales-quota-compensation-matrix` | Revenue Operations | High-Density Flat | 1 | Flat sales performance matrix displaying team quota attainment, pipeline coverage, and OTE payout tiers. |
| **60:** `executive-succession-leadership-bench` | Board Governance | High-Density Flat | 1 | Flat boardroom leadership framework visualizing 9-box executive bench strength and succession readiness. |

---

## 4. Non-Negotiable Coding Guidelines & Quality Protocols

1. **Strict Rule R1 Zero Build / Zero Test Routine Turns:**  
   Subagents executing this subtask must NEVER invoke `npm run build`, `pnpm build`, `npm test`, `go test`, or `pytest`. All validations are performed via fast Python AST scanners (`python 03-ai-scripts/05-guideline-autofixer.py`).
2. **CODE-RED-006R Line Cap Compliance ($\le 100$ lines):**  
   All modified and newly authored component files must strictly adhere to the 100-line physical ceiling.
3. **100% Affirmative Boolean Semantics:**  
   All variables and props must be positive booleans (`isEnabled`, `isVisible`, `isAccessible`, `canRewindStep`, `canAdvanceStep`). Explicit truth comparisons (`=== true`, `=== false`) and negative flags (`disabled`, `isNotActive`) are prohibited.
4. **Zero Yellow-on-Light Contrast Rule:**  
   Every theme token must maintain WCAG AAA compliance. Yellow or light-amber typography must never be rendered on white or cream paper canvases.
5. **Universal Persona Governance:**  
   Alim Ul Karim is strictly and exclusively designated as **"Chief Software Engineer"**.

---

## 5. Automated Verification Criteria & Gate Checks

| Verification Check | Target Standard | Automated Command | Expected Result |
|:---|:---|:---|:---|
| **Python Boolean Linter** | 100% Affirmative booleans | `python 03-ai-scripts/05-guideline-autofixer.py src/themes src/components/canvas --check-only` | 0 violations found. |
| **Relative Path Checker** | Valid relative imports | `python linter-scripts/check-relative-paths.py` | 0 invalid paths found. |
| **Forbidden Secrets & Strings** | Zero forbidden patterns | `python linter-scripts/check-forbidden-strings.py` | Clean tree with zero violations. |
| **Physical Line Cap ($\le 100$)** | Sizing compliance | `python 03-ai-scripts/05-guideline-autofixer.py src/components/canvas --check-only` | All `.tsx` components $\le 100$ physical lines. |
| **Canonical Theme Count** | 13 Themes | AST inspection of `gradientTokens.ts` | Exactly 13 unique canonical keys in `CANONICAL_THEME_IDS`. |
| **Navigation Boundary Logic** | Boundary fix verification | Static inspection of `NavigationControls.tsx` | `isRewindDisabled` and `isAdvanceDisabled` accurately incorporate `canRewindStep` / `canAdvanceStep`. |

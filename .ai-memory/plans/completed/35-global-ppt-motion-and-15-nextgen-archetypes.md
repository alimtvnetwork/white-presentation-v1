# Execution Plan: 35-Global PPT Motion, Design System Adherence & 15 Next-Gen Slide Archetypes

> **Plan Identifier:** `.ai-memory/plans/completed/35-global-ppt-motion-and-15-nextgen-archetypes.md`  
> **Status:** `COMPLETED - VERIFIED & RATIFIED`  
> **Lifecycle Mode:** Continuous Self-Loop (execute-parent-task-with-n-steps-v6)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Execution Waves:** 3 Waves across Task-01 through Task-05  

---

## 1. Verbatim User Request

```text
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

learn /learn if you have to learn something and /plan stuff before working please./plan/plan/plan/plan
```

---

## 2. Technical Context & Multi-Agent Execution Synthesis

1. **Global PPT Themes & Tailwind Dark Mode Synchronization:**
   - Synchronized `tailwind.config.ts` with `darkMode: 'class'`.
   - Updated `src/themes/themeRuntime.ts` in `applyThemeToRoot` to toggle `'dark'` on `document.documentElement` alongside `'theme-dark'` and `'theme-light'`.
   - Verified space-separated HSL triplet standards (`accentHsl`, `canvasBgHsl`), 10-step gradient precision ramps ($S_0$–$S_9$), and subpixel micro-shadows.

2. **Coding Guidelines & Northern UI/UX Design System Enforcement:**
   - Upgraded all 15 header subcomponents in `src/components/slides/nextgen/{corporate,commercial,techgov}/*Header.tsx` from micro-text `text-xs` (12px) to `kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2`.
   - Fixed prop type interface in 5 techgov headers (`GovHeader.tsx`, `DxHeader.tsx`, `CloseHeader.tsx`, `MarketHeader.tsx`, `EsgHeader.tsx`) to optional `subtitle?: string`.
   - Verified zero yellow on light backgrounds and strict affirmative booleans (`is*`, `has*`).
   - Verified Code RED 006-R: all 60 component files strictly adhere to $\le 100$ lines.

3. **Specification Synchronization:**
   - Updated `02-spec/21-app/35-global-ppt-motion-and-15-nextgen-archetypes/01-overview.md` Section 7: replaced inadvertent Sovereign Operations table with the canonical 15 Next-Gen Archetypes (Archetypes 16–30: `executive-storytelling-hook` through `executive-close-contact`).
   - Standardized target release header to `v1.7.0`.

4. **15 Next-Gen Archetypes Registry & Component Fixes:**
   - Registered all 15 archetypes in `src/utils/nextgen/registry.ts` (`NEXTGEN_FACTORIES`, `createAllNextGenSlides()`, `NEXTGEN_ARCHETYPE_OPTIONS`).
   - Fixed `useDeckStore((s) => Boolean(s.theme?.isDark))` bug across 10 corporate and commercial slide components by querying `s.activeThemeId` and resolving `Boolean(THEME_PALETTES[activeThemeId]?.isDark)`.

5. **Flat Slides & Step Progression Engine:**
   - Wired `src/stores/deckStore.ts` (`getNextGenSlideSteps`, `computeSlideMaxSteps`) directly to `calculateNextGenSlideStepCount` from `src/types/nextGenArchetypes.ts`.
   - Restored dynamic intra-slide keyboard stepping (Space/ArrowRight) across multi-step operational workflows (slides 107–114) while preserving flat single-step presentation for slides 115–121.

---

## 3. Subtasks Execution Evidence

| Task ID | Task Title & Scope | Owned File Paths | Status | Evidence |
|:---|:---|:---|:---:|:---|
| **Task-01** | **Global PPT Themes & Tailwind Dark Mode Sync** | `tailwind.config.ts`<br>`src/themes/themeRuntime.ts`<br>`src/styles/animations.less` | **DONE** | PASS exit 0, darkMode: 'class' added, .dark synchronized in themeRuntime.ts |
| **Task-02** | **Northern UI/UX Typography Standard** | `src/components/slides/nextgen/*/*Header.tsx` (15 files) | **DONE** | PASS exit 0, 15 headers upgraded to text-sm (14px) and subtitle?: string |
| **Task-03** | **Specifications Synchronization** | `02-spec/21-app/35-global-ppt-motion-and-15-nextgen-archetypes/01-overview.md` | **DONE** | PASS exit 0, Section 7 synchronized with 15 Next-Gen Archetypes (16-30) |
| **Task-04** | **15 Next-Gen Registry & isDark Selector Fix** | `src/utils/nextgen/registry.ts`<br>10 slide components in `corporate/` and `commercial/` | **DONE** | PASS exit 0, registry completed and 10 slide components isDark fixed |
| **Task-05** | **Step Progression Engine & Deck Store Dynamic Steps** | `src/stores/deckStore.ts`<br>`src/stores/initialDeck.ts` | **DONE** | PASS exit 0, deckStore wired to calculateNextGenSlideStepCount |

---

## 4. Verification Gates Summary

- **Guideline Autofixer**: 175 files verified clean, 0 boolean violations (exit 0)
- **Forbidden Strings Check**: 0 hits, all rules passed (exit 0)
- **Sequence Integrity**: All sequential file numbering unbroken across `02-spec` (exit 0)
- **TypeScript Static Check**: `npx tsc --noEmit` exited 0 with 0 errors
- **Secrets Gate**: 0 secrets found across 576 files in 44ms (exit 0)

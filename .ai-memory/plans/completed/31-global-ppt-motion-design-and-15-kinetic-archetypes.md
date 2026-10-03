# Completed Plan: 31-Global PPT Motion Design & 15 Kinetic Archetypes

## User Request (Verbatim)
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
learn /learn if you have to learn something and /plan stuff before working please./plan
```

## Architecture & Scope Summary
- **Module:** `02-spec/21-app/31-global-ppt-motion-design-and-15-kinetic-archetypes/`
- **Global PPT Adaptation:** 10 authentic master themes with unadorned space-separated HSL triplet tokens (`H S% L%`), 10-step gradient stop ramps, `.capsule-*` badge hierarchy with light-theme contrast auto-inversion, and kinetic transition keyframes.
- **Design System Standards:** 60/30/10 visual balance rule, 4-plane depth hierarchy, fluid clamp typography, live DOM typography only, positive booleans (`is*`, `has*`, `can*`, `should*`), $\le 100$ lines per `.tsx` component file (Hard Rule CODE-RED-006R), persona normalization (Alim Ul Karim = "Chief Software Engineer").
- **15 New Slide Archetypes:**
  1. `code-diff-comparison` (Kinetic / Multi-step)
  2. `global-cloud-edge-mesh` (Flat)
  3. `api-endpoint-inspector` (Kinetic / Multi-step)
  4. `database-schema-erd` (Kinetic / Multi-step)
  5. `security-threat-model` (Flat)
  6. `ai-agent-swarm-dag` (Kinetic / Multi-step)
  7. `financial-burn-runway` (Flat)
  8. `bento-kpi-mosaic` (Flat)
  9. `canary-release-gauge` (Kinetic / Multi-step)
  10. `incident-rca-postmortem` (Kinetic / Multi-step)
  11. `slas-and-uptime-status` (Flat)
  12. `audio-waveform-studio` (Kinetic / Multi-step)
  13. `hardware-silicon-spec` (Flat)
  14. `cohort-retention-heatmap` (Flat)
  15. `verifiable-audit-ledger` (Kinetic / Multi-step)

## Subtask Breakdown & Verified Outcomes
- [x] Task-01: Spec Authoring Wave (`01-overview.md`, `02-data-contracts.md`, `03-visual-and-motion.md`, `04-verification-gates.md`, `readme.md`)
- [x] Task-02: Themes & Animations Wave (`gradientTokens.ts`, `animations.less`, `variables.less`)
- [x] Task-03: Types & State Ingestion Wave (`kineticSuiteArchetypes.ts`, `presentation.ts`, `deckStore.ts`)
- [x] Task-04: Factories & Builder Registration Wave (`kineticSuiteSlideFactories.ts`, `slideArchetypeFactories.ts`)
- [x] Task-05: Component Implementation Wave A (Slides 01-07 + leaf components in sub-folders)
- [x] Task-06: Component Implementation Wave B (Slides 08-15 + leaf components in sub-folders)
- [x] Task-07: Renderer Chain & Initial Deck Ingestion (`KineticSuiteSlideRenderer.tsx`, `EnterpriseSlideRenderer.tsx`, `initialDeck.ts`)
- [x] Task-08: Verification & Evidence Ledger Consolidation

## Verification Evidence
- TypeScript compilation: `npx tsc --noEmit` -> PASS (exit 0)
- Component line count audit (CODE-RED-006R): All `.tsx` components in `src/components/slides` strictly $\le 100$ lines.
- Boolean guidelines: `python linter-scripts/check-boolean-guidelines.py` -> PASS (0 violations across 187 files)
- Forbidden strings: `python linter-scripts/check-forbidden-strings.py` -> PASS
- Secrets check: `gitmap aum search -r "(BEGIN [A-Z ]*PRIVATE KEY|AKIA[0-9A-Z]{16}|gh[pousr]_[A-Za-z0-9]{36}|sk-[A-Za-z0-9]{20,}|xox[baprs]-[A-Za-z0-9-]{10,})" src` -> 0 hits across 231 files

# Completed Plan: 30-global-ppt-motion-flat-kinetic-slides

> **Slug:** `30-global-ppt-motion-flat-kinetic-slides`  
> **Status:** `COMPLETED`  
> **Target Release:** `v1.4.0`  
> **Canonical Spec:** [02-spec/21-app/30-global-ppt-motion-flat-kinetic-slides/readme.md](../../../02-spec/21-app/30-global-ppt-motion-flat-kinetic-slides/readme.md)  
> **Task Database:** `.ai-memory/temp-agents/10-30-global-ppt-motion-flat-kinetic/agent-task.db`  

---

## 1. User Request (Verbatim)

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

learn /learn if you have to learn something and /plan stuff before working please./plan
```

---

## 2. Executive Storytelling & Architectural Outcomes

1. **Global PPT Institutional Authority (`global-ppt-v1`)**:
   - 10 authentic master themes with space-separated HSL triplet tokens (`H S% L%`) for dynamic slash-alpha compositing (`hsl(var(--pres-accent) / <alpha>)`).
   - `.capsule-*` pill badge hierarchy with light-theme contrast inversions (`paper-ink`, `github-light`, `white-brand`).
   - Luminance-calibrated optical micro-shadows (`--text-shadow-weight-*`) for sub-pixel text sharpness.
   - Pinned dark Presenter HUD chrome (`--chrome-*`) providing invariant contrast.
   - Atmospheric bubble physics simulation engine with 4 tuned presets (`servicesDefault`, `calm`, `dense`, `lively`).

2. **Flat Slide Show Kinetic Step Progression (`flat-slide-show`)**:
   - 3-phase kinetic lifecycle (`past`/`completed` at 0.75 opacity with checkmark badges, `active` at 1.00 with halo glow and spring physics, `future` at 0.40 with $1.25\text{px}$ optical blur).
   - Damped harmonic spring physics ($k = 420\text{ N/m}$, $c = 17\text{ N}\cdot\text{s/m}$, $m = 0.8\text{ kg}$).
   - Authentic step calculation formulas wired into `deckStore.ts` via `getKineticSlideSteps`.

3. **15 Grounded Slide Archetypes & Modular Subcomponents**:
   1. `PersonalVpnSlide.tsx` + `vpn/VpnNodeCard.tsx`
   2. `MeetingTranscriptSlide.tsx` + `transcript/SpeakerBubble.tsx`
   3. `LlmBenchmarkSlide.tsx` + `benchmark/ModelScorecard.tsx`
   4. `ServicesGravitySlide.tsx` + `gravity/ServiceBubble.tsx`
   5. `SeoDominanceSlide.tsx` + `seo/EraLadderCard.tsx`
   6. `StaffAugPipelineSlide.tsx` + `pipeline/VettingStagePill.tsx`
   7. `CraftsmanshipBenchmarkSlide.tsx` + `craftsmanship/BenchmarkMetricCard.tsx`
   8. `WeeklyCadenceSlide.tsx` + `cadence/DayScheduleColumn.tsx`
   9. `CompetitiveMoatSlide.tsx` + `moat/MoatPillarCard.tsx`
   10. `RapidFeedbackSlide.tsx` + `feedback/FeedbackCycleNode.tsx`
   11. `InteractivePollSlide.tsx` + `poll/PollOptionBar.tsx`
   12. `LiveQaSlide.tsx` + `qa/QaQuestionCard.tsx`
   13. `EmbedStageSlide.tsx` + `embed/EmbedFrameContainer.tsx`
   14. `CountdownLaunchSlide.tsx` + `countdown/LaunchGatePill.tsx`
   15. `ExecutiveTakeawaysSlide.tsx` + `executive/TakeawayActionRow.tsx`
   - `ExtendedSlideRenderer.tsx` and routing from `SlideRenderer.tsx`.
   - `initialDeck.ts` updated with showcase slides for the new archetypes.

4. **Coding Guidelines & UI Design System Compliance**:
   - Pure live DOM typography: zero rasterized text graphics, 100% accessible.
   - Strictly positive booleans via `src/utils/booleanGuards.ts`.
   - Strict $\le 100$ lines per `.tsx` slide file via modular subcomponent decomposition (0 oversized files).
   - Persona standardization: "Alim Ul Karim, Chief Software Engineer".

---

## 3. Subtasks Execution Ledger

| Task-ID | Subtask Title | Owner | Status | Evidence |
|:---:|:---|:---:|:---:|:---|
| **Task-01** | Author Canonical Specifications under 02-spec/21-app/30-global-ppt-motion-flat-kinetic-slides | Lead Orchestrator | `COMPLETED` | `02-spec/21-app/30-global-ppt-motion-flat-kinetic-slides/` specifications authored and indexed. |
| **Task-02** | Review & Adapt Global PPT Color Themes, Tokens, Light-Theme Contract, and Atmospheric Physics | Worker 01 | `COMPLETED` | 10 HSL themes in `gradientTokens.ts`, runtime contrast engine in `themeRuntime.ts`, bubble physics in `motionPhysics.ts`. |
| **Task-03** | Wire 15 New Slide Types & Step Progression in deckStore & Types | Worker 01 | `COMPLETED` | `extendedArchetypes.ts`, `presentation.ts`, `deckStore.ts`, and `extendedSlideFactories.ts` wired. |
| **Task-04** | Implement First Wave of New Slides (7 Archetypes: Personal VPN, Meeting Transcript, LLM Benchmark, Gravity Orbit, SEO Dominance, Staff Aug Pipeline, Craftsmanship Benchmark) | Worker 01 | `COMPLETED` | 14 components created, 100% $\le 100$ lines each, affirmative booleans, step lifecycle. |
| **Task-05** | Implement Second Wave of New Slides (8 Archetypes: Weekly Cadence, Competitive Moat, Rapid Feedback, Interactive Poll, Live QA, Embed Stage, Countdown Launch, Executive Takeaways) + ExtendedSlideRenderer | Worker 02 | `COMPLETED` | 16 components + `ExtendedSlideRenderer` + `initialDeck` updated, 100% $\le 100$ lines each. |
| **Task-06** | Verify Coding Guidelines, Boolean Guards, Component Sizing (<=100 lines), and 12 Quality Gates | Lead Orchestrator | `COMPLETED` | 0 oversized `.tsx` files; 182 files in `src` verified with `05-guideline-autofixer.py`; 0 secrets found. |

---

## 4. Verification Evidence & Quality Gates

1. **Component Sizing Guard**: 0 files exceeding 100 lines across `src/components/slides/**/*.tsx`.
2. **Affirmative Boolean & Newline Linter**: `python 03-ai-scripts/05-guideline-autofixer.py src --check-only` exited with code 0 across 182 files.
3. **Forbidden Strings Check**: `python linter-scripts/check-forbidden-strings.py` exited with code 0 across all rules.
4. **Secrets Gate**: `gitmap aum search -r` returned 0 hits across 182 files in 22ms.
5. **Zero Build/Test Suites Policy**: Strictly adhered to Rule R1.

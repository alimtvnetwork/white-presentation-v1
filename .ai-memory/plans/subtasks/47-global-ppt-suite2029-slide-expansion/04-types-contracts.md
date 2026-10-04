# Subtask 04: TypeScript Contracts & Type Guards (Suite 2029)

> **Task ID:** `Task-04`  
> **Parent:** `47-global-ppt-suite2029-slide-expansion`  
> **Status:** `PENDING`  
> **Owner:** Worker 02  

---

## Scope & Target Files
1. `src/types/suite2029Archetypes.ts`
   - Complete data contracts for 15 slide archetypes (9 kinetic multi-step + 6 flat sovereign).
   - 100% affirmative positive booleans (`is*`, `has*`, `can*`, `should*`).
   - Step count calculator `calculateSuite2029StepCount`.
   - Discriminated union type guards: `isSuite2029Slide`, `isSuite2029StepSlide`, `isSuite2029FlatSlide`.
2. `src/types/presentation.ts`
   - Merge `Suite2029SlideData` and `Suite2029SlideType` into `SlideData` and `SlideType`.

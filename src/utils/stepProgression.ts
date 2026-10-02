import type { CSSProperties } from 'react';

export type StepPhase = 'past' | 'active' | 'future';

export const STEP_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
export const STEP_TRANSITION = 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)';

export function getStepPhase(index: number, activeStep: number): StepPhase {
  if (index < activeStep) {
    return 'past';
  }
  if (index === activeStep) {
    return 'active';
  }
  return 'future';
}

export function getStepHaloStyle(isCurrent: boolean, accentColor: string): CSSProperties {
  if (isCurrent) {
    return {
      boxShadow: `0 0 0 1px ${accentColor}40, 0 0 24px -2px ${accentColor}50`,
      borderColor: accentColor,
    };
  }
  return {};
}

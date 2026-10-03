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

export function getStepPhaseStyle(phase: StepPhase, accentColor: string = '#3b82f6'): CSSProperties {
  const isPast = phase === 'past';
  if (isPast) {
    return {
      opacity: 0.75,
      transform: 'scale(1)',
      filter: 'none',
      zIndex: 1,
      boxShadow: 'none',
      transition: STEP_TRANSITION,
    };
  }
  const isActive = phase === 'active';
  if (isActive) {
    return {
      opacity: 1,
      transform: 'scale(1.02)',
      filter: 'none',
      zIndex: 20,
      boxShadow: `0 0 24px -2px ${accentColor}50`,
      transition: STEP_TRANSITION,
    };
  }
  return {
    opacity: 0.4,
    transform: 'scale(0.98)',
    filter: 'blur(1.25px)',
    zIndex: 0,
    boxShadow: 'none',
    pointerEvents: 'none',
    transition: STEP_TRANSITION,
  };
}

export type MotionVariant = 'lift' | 'slide' | 'parallax';

/**
 * Returns the CSS utility class corresponding to a kinetic motion variant.
 */
export function getMotionVariantClass(variant?: 'lift' | 'slide' | 'parallax'): string {
  if (variant === 'lift') {
    return 'motion-variant-lift';
  }
  if (variant === 'slide') {
    return 'motion-variant-slide';
  }
  if (variant === 'parallax') {
    return 'motion-variant-parallax';
  }
  return '';
}

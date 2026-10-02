/**
 * Kinetic Motion Physics & Dynamic Text Shadow Constants
 * Synthesized from global-ppt-v1 and flat-slide-show.
 */

export const STEP_DETAIL_PANE_SPRING = {
  type: 'spring',
  stiffness: 420,
  damping: 17,
  mass: 0.8,
} as const;

export const PROGRESS_RAIL_SPRING = {
  type: 'spring',
  stiffness: 220,
  damping: 32,
  mass: 1.0,
} as const;

export const HALO_SPRING = {
  type: 'spring',
  stiffness: 320,
  damping: 30,
  mass: 0.9,
} as const;

export const PRESENTATION_EASE = [0.22, 1, 0.36, 1] as const;
export const ARC_EASE = [0.4, 0, 0.2, 1] as const;

export function getHeaderShadow(isDark: boolean): string {
  return isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px';
}

export function getStaggerDelay(index: number): number {
  return (index + 1) * 0.08;
}

export function calculateProgressPercent(current: number, total: number): number {
  if (total <= 1) return 100;
  return Math.min(100, Math.max(0, (current / (total - 1)) * 100));
}

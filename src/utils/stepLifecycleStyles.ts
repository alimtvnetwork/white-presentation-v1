import type { CSSProperties } from 'react';
import type { ThemePalette } from '../types/presentation';

export const KINETIC_HALO_SHADOW = '0 0 24px -4px hsl(var(--pres-accent-hsl) / 0.35)';

export function getKineticStepItemStyle(
  isActive: boolean,
  isPast: boolean,
  accentColor: string,
  cardBorder: string
): CSSProperties {
  if (isActive) {
    return {
      opacity: 1.0,
      transform: 'scale(1.02) translateX(8px)',
      boxShadow: KINETIC_HALO_SHADOW,
      filter: 'none',
      borderColor: accentColor,
      backgroundColor: `${accentColor}18`,
    };
  }

  if (isPast) {
    return {
      opacity: 0.75,
      transform: 'scale(1.00)',
      boxShadow: 'none',
      filter: 'none',
      borderColor: cardBorder,
      backgroundColor: 'transparent',
    };
  }

  return {
    opacity: 0.38,
    transform: 'scale(1.00)',
    boxShadow: 'none',
    filter: 'blur(1.25px)',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  };
}

export function getFocusedCardLifecycleStyle(
  isFocusedActive: boolean,
  isFocusedPast: boolean,
  accentColor: string,
  cardBorder: string
): CSSProperties {
  if (isFocusedActive) {
    return {
      opacity: 1.0,
      filter: 'none',
      boxShadow: KINETIC_HALO_SHADOW,
      borderColor: accentColor,
    };
  }

  if (isFocusedPast) {
    return {
      opacity: 0.75,
      filter: 'none',
      boxShadow: 'none',
      borderColor: cardBorder,
    };
  }

  return {
    opacity: 0.38,
    filter: 'blur(1.25px)',
    boxShadow: 'none',
    borderColor: cardBorder,
  };
}

export function getStepChainCardStyle(
  isActive: boolean,
  isCompleted: boolean,
  theme: ThemePalette
): CSSProperties {
  if (isActive) {
    return {
      backgroundColor: theme.cardBg,
      borderColor: theme.accentColor,
      opacity: 1.0,
      transform: 'scale(1.02)',
      boxShadow: KINETIC_HALO_SHADOW,
      filter: 'none',
    };
  }

  if (isCompleted) {
    return {
      backgroundColor: theme.cardBg,
      borderColor: theme.cardBorder,
      opacity: 0.75,
      transform: 'scale(1.0)',
      filter: 'none',
      boxShadow: 'none',
    };
  }

  return {
    backgroundColor: theme.cardBg,
    borderColor: theme.cardBorder,
    opacity: 0.38,
    transform: 'scale(1.0)',
    filter: 'blur(1.25px)',
    boxShadow: 'none',
  };
}

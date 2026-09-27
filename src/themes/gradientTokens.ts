import { GradientStop, ThemePalette } from '../types/presentation';

export const THEME_PALETTES: Record<string, ThemePalette> = {
  'white-brand': {
    id: 'white-brand',
    name: 'Pure White (Clean Editorial)',
    description: 'Crisp white canvas with deep navy typography and violet accents.',
    isDark: false,
    canvasBg: '#FFFFFF',
    textColor: '#0F172A',
    subtextColor: '#475569',
    cardBg: 'rgba(255, 255, 255, 0.90)',
    cardBorder: '#E2E8F0',
    accentColor: '#7C3AED',
    dotMatrix: false,
    headerShadow: 'rgb(255 255 255) 1px 0.7px 0px',
    stops: [
      { step: 0, label: 'Base Light', hsl: 'hsl(250, 100%, 98%)', rgb: 'rgb(245, 243, 255)', hex: '#F5F3FF', luma: 0.96, contrastOnWhite: 1.08 },
      { step: 1, label: 'Wash Sub-Surface', hsl: 'hsl(252, 95%, 94%)', rgb: 'rgb(237, 233, 254)', hex: '#EDE9FE', luma: 0.92, contrastOnWhite: 1.18 },
      { step: 2, label: 'Border Neutral', hsl: 'hsl(251, 91%, 87%)', rgb: 'rgb(221, 214, 254)', hex: '#DDD6FE', luma: 0.86, contrastOnWhite: 1.35 },
      { step: 3, label: 'Badge Tint', hsl: 'hsl(252, 95%, 78%)', rgb: 'rgb(196, 181, 253)', hex: '#C4B5FD', luma: 0.77, contrastOnWhite: 1.69 },
      { step: 4, label: 'Secondary Accent', hsl: 'hsl(255, 92%, 69%)', rgb: 'rgb(167, 139, 250)', hex: '#A78BFA', luma: 0.68, contrastOnWhite: 2.16 },
      { step: 5, label: 'Midtone Primary', hsl: 'hsl(258, 90%, 62%)', rgb: 'rgb(139, 92, 246)', hex: '#8B5CF6', luma: 0.58, contrastOnWhite: 2.96 },
      { step: 6, label: 'Brand Lead', hsl: 'hsl(262, 83%, 58%)', rgb: 'rgb(124, 58, 237)', hex: '#7C3AED', luma: 0.51, contrastOnWhite: 3.84 },
      { step: 7, label: 'Deep Shading', hsl: 'hsl(263, 70%, 50%)', rgb: 'rgb(109, 40, 217)', hex: '#6D28D9', luma: 0.42, contrastOnWhite: 5.66 },
      { step: 8, label: 'High Contrast', hsl: 'hsl(264, 67%, 35%)', rgb: 'rgb(76, 29, 149)', hex: '#4C1D95', luma: 0.28, contrastOnWhite: 11.2 },
      { step: 9, label: 'Deep Navy Ink', hsl: 'hsl(222, 47%, 11%)', rgb: 'rgb(15, 23, 42)', hex: '#0F172A', luma: 0.11, contrastOnWhite: 16.8 },
    ],
  },
  'true-dark': {
    id: 'true-dark',
    name: 'True Dark (Obsidian & Neon)',
    description: 'Pitch-dark canvas with luminous white text and vibrant indigo glowing borders.',
    isDark: true,
    canvasBg: '#020617',
    textColor: '#F8FAFC',
    subtextColor: '#94A3B8',
    cardBg: 'rgba(15, 23, 42, 0.85)',
    cardBorder: 'rgba(99, 102, 241, 0.35)',
    accentColor: '#6366F1',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      { step: 0, label: 'Luminous Glow', hsl: 'hsl(210, 40%, 98%)', rgb: 'rgb(248, 250, 252)', hex: '#F8FAFC', luma: 0.98, contrastOnWhite: 1.04 },
      { step: 1, label: 'Muted Slate', hsl: 'hsl(214, 32%, 91%)', rgb: 'rgb(226, 232, 240)', hex: '#E2E8F0', luma: 0.91, contrastOnWhite: 1.21 },
      { step: 2, label: 'Subtle Steel', hsl: 'hsl(215, 20%, 65%)', rgb: 'rgb(148, 163, 184)', hex: '#94A3B8', luma: 0.65, contrastOnWhite: 2.37 },
      { step: 3, label: 'Midtone Indigo', hsl: 'hsl(226, 57%, 64%)', rgb: 'rgb(99, 102, 241)', hex: '#6366F1', luma: 0.64, contrastOnWhite: 2.45 },
      { step: 4, label: 'Electric Blue', hsl: 'hsl(217, 91%, 60%)', rgb: 'rgb(59, 130, 246)', hex: '#3B82F6', luma: 0.60, contrastOnWhite: 2.78 },
      { step: 5, label: 'Royal Blue', hsl: 'hsl(221, 83%, 53%)', rgb: 'rgb(29, 78, 216)', hex: '#1D4ED8', luma: 0.53, contrastOnWhite: 3.55 },
      { step: 6, label: 'Deep Twilight', hsl: 'hsl(224, 76%, 36%)', rgb: 'rgb(30, 58, 138)', hex: '#1E3A8A', luma: 0.36, contrastOnWhite: 7.8 },
      { step: 7, label: 'Midnight Slate', hsl: 'hsl(222, 47%, 18%)', rgb: 'rgb(24, 34, 53)', hex: '#182235', luma: 0.18, contrastOnWhite: 13.5 },
      { step: 8, label: 'Dark Charcoal', hsl: 'hsl(215, 28%, 12%)', rgb: 'rgb(11, 25, 44)', hex: '#0B192C', luma: 0.12, contrastOnWhite: 16.5 },
      { step: 9, label: 'Absolute Abyss', hsl: 'hsl(222, 84%, 5%)', rgb: 'rgb(2, 6, 23)', hex: '#020617', luma: 0.05, contrastOnWhite: 19.5 },
    ],
  },
  'emerald-growth': {
    id: 'emerald-growth',
    name: 'Emerald Growth (Dark Forest & Mint)',
    description: 'Deep forest canvas with mint highlights, dot-matrix overlay, and growth cards.',
    isDark: true,
    canvasBg: '#022C22',
    textColor: '#ECFDF5',
    subtextColor: '#6EE7B7',
    cardBg: 'rgba(6, 78, 59, 0.85)',
    cardBorder: 'rgba(52, 211, 153, 0.35)',
    accentColor: '#10B981',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      { step: 0, label: 'Mint Tint', hsl: 'hsl(152, 81%, 96%)', rgb: 'rgb(236, 253, 245)', hex: '#ECFDF5', luma: 0.96, contrastOnWhite: 1.08 },
      { step: 1, label: 'Light Sage', hsl: 'hsl(149, 80%, 90%)', rgb: 'rgb(209, 250, 229)', hex: '#D1FAE5', luma: 0.90, contrastOnWhite: 1.23 },
      { step: 2, label: 'Soft Seafoam', hsl: 'hsl(152, 76%, 80%)', rgb: 'rgb(167, 243, 208)', hex: '#A7F3D0', luma: 0.80, contrastOnWhite: 1.56 },
      { step: 3, label: 'Vibrant Mint', hsl: 'hsl(156, 73%, 67%)', rgb: 'rgb(110, 231, 183)', hex: '#6EE7B7', luma: 0.67, contrastOnWhite: 2.22 },
      { step: 4, label: 'Spring Emerald', hsl: 'hsl(158, 64%, 52%)', rgb: 'rgb(52, 211, 153)', hex: '#34D399', luma: 0.52, contrastOnWhite: 3.75 },
      { step: 5, label: 'Core Emerald', hsl: 'hsl(160, 84%, 39%)', rgb: 'rgb(16, 185, 129)', hex: '#10B981', luma: 0.39, contrastOnWhite: 6.2 },
      { step: 6, label: 'Deep Forest', hsl: 'hsl(161, 94%, 30%)', rgb: 'rgb(5, 150, 105)', hex: '#059669', luma: 0.30, contrastOnWhite: 9.8 },
      { step: 7, label: 'Pine Shadow', hsl: 'hsl(163, 88%, 20%)', rgb: 'rgb(4, 120, 87)', hex: '#047857', luma: 0.20, contrastOnWhite: 13.2 },
      { step: 8, label: 'Dark Spruce', hsl: 'hsl(164, 86%, 16%)', rgb: 'rgb(6, 78, 59)', hex: '#064E3B', luma: 0.16, contrastOnWhite: 15.5 },
      { step: 9, label: 'Abyssal Green', hsl: 'hsl(166, 91%, 9%)', rgb: 'rgb(2, 44, 34)', hex: '#022C22', luma: 0.09, contrastOnWhite: 18.2 },
    ],
  },
  'wp-exam-purple': {
    id: 'wp-exam-purple',
    name: 'WP Exam Purple (Royal Tech)',
    description: 'Signature WP Exam & Riseup Asia royal violet theme with luminous typography.',
    isDark: true,
    canvasBg: '#1E1B4B',
    textColor: '#F5F3FF',
    subtextColor: '#C4B5FD',
    cardBg: 'rgba(49, 16, 75, 0.85)',
    cardBorder: 'rgba(168, 85, 247, 0.35)',
    accentColor: '#A855F7',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      { step: 0, label: 'Lavender Whisper', hsl: 'hsl(250, 100%, 98%)', rgb: 'rgb(245, 243, 255)', hex: '#F5F3FF', luma: 0.96, contrastOnWhite: 1.08 },
      { step: 1, label: 'Light Violet', hsl: 'hsl(252, 95%, 94%)', rgb: 'rgb(237, 233, 254)', hex: '#EDE9FE', luma: 0.92, contrastOnWhite: 1.18 },
      { step: 2, label: 'Soft Mauve', hsl: 'hsl(251, 91%, 87%)', rgb: 'rgb(221, 214, 254)', hex: '#DDD6FE', luma: 0.86, contrastOnWhite: 1.35 },
      { step: 3, label: 'Vibrant Lilac', hsl: 'hsl(252, 95%, 78%)', rgb: 'rgb(196, 181, 253)', hex: '#C4B5FD', luma: 0.77, contrastOnWhite: 1.69 },
      { step: 4, label: 'Rich Purple', hsl: 'hsl(255, 92%, 69%)', rgb: 'rgb(167, 139, 250)', hex: '#A78BFA', luma: 0.68, contrastOnWhite: 2.16 },
      { step: 5, label: 'Core Violet', hsl: 'hsl(258, 90%, 62%)', rgb: 'rgb(139, 92, 246)', hex: '#8B5CF6', luma: 0.58, contrastOnWhite: 2.96 },
      { step: 6, label: 'Lead Purple', hsl: 'hsl(262, 83%, 58%)', rgb: 'rgb(124, 58, 237)', hex: '#7C3AED', luma: 0.51, contrastOnWhite: 3.84 },
      { step: 7, label: 'Deep Magenta', hsl: 'hsl(263, 70%, 50%)', rgb: 'rgb(109, 40, 217)', hex: '#6D28D9', luma: 0.42, contrastOnWhite: 5.66 },
      { step: 8, label: 'Royal Plum', hsl: 'hsl(264, 67%, 35%)', rgb: 'rgb(76, 29, 149)', hex: '#4C1D95', luma: 0.28, contrastOnWhite: 11.2 },
      { step: 9, label: 'Obsidian Violet', hsl: 'hsl(244, 47%, 20%)', rgb: 'rgb(30, 27, 75)', hex: '#1E1B4B', luma: 0.12, contrastOnWhite: 16.2 },
    ],
  },
  'midnight-luxe': {
    id: 'midnight-luxe',
    name: 'Midnight Luxe (Dark Editorial)',
    description: 'Deep navy-indigo luxury theme for investor keynote presentations.',
    isDark: true,
    canvasBg: '#0B192C',
    textColor: '#F8FAFC',
    subtextColor: '#94A3B8',
    cardBg: 'rgba(24, 34, 53, 0.85)',
    cardBorder: 'rgba(59, 130, 246, 0.35)',
    accentColor: '#3B82F6',
    dotMatrix: false,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      { step: 0, label: 'Luminous Highlight', hsl: 'hsl(210, 40%, 98%)', rgb: 'rgb(248, 250, 252)', hex: '#F8FAFC', luma: 0.98, contrastOnWhite: 1.04 },
      { step: 1, label: 'Muted Slate', hsl: 'hsl(214, 32%, 91%)', rgb: 'rgb(226, 232, 240)', hex: '#E2E8F0', luma: 0.91, contrastOnWhite: 1.21 },
      { step: 2, label: 'Subtle Steel', hsl: 'hsl(215, 20%, 65%)', rgb: 'rgb(148, 163, 184)', hex: '#94A3B8', luma: 0.65, contrastOnWhite: 2.37 },
      { step: 3, label: 'Midtone Indigo', hsl: 'hsl(226, 57%, 64%)', rgb: 'rgb(99, 102, 241)', hex: '#6366F1', luma: 0.64, contrastOnWhite: 2.45 },
      { step: 4, label: 'Vibrant Blue', hsl: 'hsl(217, 91%, 60%)', rgb: 'rgb(59, 130, 246)', hex: '#3B82F6', luma: 0.60, contrastOnWhite: 2.78 },
      { step: 5, label: 'Royal Blue', hsl: 'hsl(221, 83%, 53%)', rgb: 'rgb(29, 78, 216)', hex: '#1D4ED8', luma: 0.53, contrastOnWhite: 3.55 },
      { step: 6, label: 'Deep Twilight', hsl: 'hsl(224, 76%, 36%)', rgb: 'rgb(30, 58, 138)', hex: '#1E3A8A', luma: 0.36, contrastOnWhite: 7.8 },
      { step: 7, label: 'Midnight Slate', hsl: 'hsl(222, 47%, 18%)', rgb: 'rgb(24, 34, 53)', hex: '#182235', luma: 0.18, contrastOnWhite: 13.5 },
      { step: 8, label: 'Dark Charcoal', hsl: 'hsl(215, 28%, 12%)', rgb: 'rgb(11, 25, 44)', hex: '#0B192C', luma: 0.12, contrastOnWhite: 16.5 },
      { step: 9, label: 'Absolute Abyss', hsl: 'hsl(222, 84%, 5%)', rgb: 'rgb(2, 6, 23)', hex: '#020617', luma: 0.05, contrastOnWhite: 19.5 },
    ],
  },
};

/**
 * Maps a string of text to discrete character-level colors across the 10-step gradient ramp.
 */
export function shadeTextByCharacter(
  text: string,
  themeId = 'white-brand',
  startStep = 6,
  endStep = 9
): Array<{ char: string; hex: string; hsl: string }> {
  const palette = THEME_PALETTES[themeId] || THEME_PALETTES['white-brand'];
  const totalChars = text.length;

  return text.split('').map((char, index) => {
    if (char === ' ') {
      return { char: ' ', hex: 'transparent', hsl: 'transparent' };
    }

    const ratio = totalChars > 1 ? index / (totalChars - 1) : 0;
    const targetStep = Math.min(
      9,
      Math.max(0, Math.round(startStep + ratio * (endStep - startStep)))
    );
    const stop = palette.stops[targetStep];

    return {
      char,
      hex: stop.hex,
      hsl: stop.hsl,
    };
  });
}

/**
 * Canonical high-definition text-shadow contrast standard:
 * Light/white text: rgb(0 0 0) 1px 0.7px 0px
 * Dark text: rgb(255 255 255) 1px 0.7px 0px
 */
export function getHeaderShadow(isLightOrWhiteText: boolean): string {
  return isLightOrWhiteText ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px';
}

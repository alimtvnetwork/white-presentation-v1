// lint-allow: file-size reason="authentic 10-theme corporate palette dictionary" max=430
import { GradientStop, ThemePalette } from '../types/presentation';

declare module '../types/presentation' {
  interface ThemePalette {
    accentHsl?: string;
    bgHsl?: string;
    textHsl?: string;
    cardBgHsl?: string;
    subtextHsl?: string;
    cardBorderHsl?: string;
  }
}

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
    accentHsl: '262 83% 58%',
    bgHsl: '0 0% 100%',
    textHsl: '222 47% 11%',
    cardBgHsl: '0 0% 100%',
    subtextHsl: '215 19% 35%',
    cardBorderHsl: '214 32% 91%',
    stops: [
      { step: 0, label: 'Base Light', hsl: 'hsl(250, 100%, 98%)', rgb: 'rgb(245, 243, 255)', hex: '#F5F3FF', luma: 0.96, contrastOnWhite: 1.08 },
      { step: 1, label: 'Sub-Surface', hsl: 'hsl(252, 95%, 94%)', rgb: 'rgb(237, 233, 254)', hex: '#EDE9FE', luma: 0.92, contrastOnWhite: 1.18 },
      { step: 2, label: 'Neutral Border', hsl: 'hsl(251, 91%, 87%)', rgb: 'rgb(221, 214, 254)', hex: '#DDD6FE', luma: 0.86, contrastOnWhite: 1.35 },
      { step: 3, label: 'Badge Tint', hsl: 'hsl(252, 95%, 78%)', rgb: 'rgb(196, 181, 253)', hex: '#C4B5FD', luma: 0.77, contrastOnWhite: 1.69 },
      { step: 4, label: 'Secondary Accent', hsl: 'hsl(255, 92%, 69%)', rgb: 'rgb(167, 139, 250)', hex: '#A78BFA', luma: 0.68, contrastOnWhite: 2.16 },
      { step: 5, label: 'Midtone Primary', hsl: 'hsl(258, 90%, 62%)', rgb: 'rgb(139, 92, 246)', hex: '#8B5CF6', luma: 0.58, contrastOnWhite: 2.96 },
      { step: 6, label: 'Brand Lead', hsl: 'hsl(262, 83%, 58%)', rgb: 'rgb(124, 58, 237)', hex: '#7C3AED', luma: 0.51, contrastOnWhite: 3.84 },
      { step: 7, label: 'Deep Shading', hsl: 'hsl(263, 70%, 50%)', rgb: 'rgb(109, 40, 217)', hex: '#6D28D9', luma: 0.42, contrastOnWhite: 5.66 },
      { step: 8, label: 'High Contrast', hsl: 'hsl(264, 67%, 35%)', rgb: 'rgb(76, 29, 149)', hex: '#4C1D95', luma: 0.28, contrastOnWhite: 11.20 },
      { step: 9, label: 'Deep Navy Ink', hsl: 'hsl(222, 47%, 11%)', rgb: 'rgb(15, 23, 42)', hex: '#0F172A', luma: 0.11, contrastOnWhite: 16.80 },
    ],
  },
  'paper-editorial': {
    id: 'paper-editorial',
    name: 'Paper Editorial (Warm Cream & Classical Navy)',
    description: 'Archival warm cream canvas with classical navy ink typography and refined blue accents.',
    isDark: false,
    canvasBg: '#F5F0E6',
    textColor: '#1A1A1A',
    subtextColor: '#2C2825',
    cardBg: 'rgba(250, 247, 240, 0.92)',
    cardBorder: '#EAE0D0',
    accentColor: '#1D4ED8',
    dotMatrix: false,
    headerShadow: 'rgb(255 255 255) 1px 0.7px 0px',
    accentHsl: '224 76% 48%',
    bgHsl: '39 43% 93%',
    textHsl: '0 0% 10%',
    cardBgHsl: '42 50% 96%',
    subtextHsl: '30 9% 16%',
    cardBorderHsl: '38 40% 86%',
    stops: [
      { step: 0, label: 'Archival Cream', hsl: 'hsl(42, 50%, 96%)', rgb: 'rgb(250, 247, 240)', hex: '#FAF7F0', luma: 0.96, contrastOnWhite: 1.05 },
      { step: 1, label: 'Warm Parchment', hsl: 'hsl(39, 43%, 93%)', rgb: 'rgb(245, 240, 230)', hex: '#F5F0E6', luma: 0.93, contrastOnWhite: 1.00 },
      { step: 2, label: 'Cardboard Tint', hsl: 'hsl(38, 40%, 86%)', rgb: 'rgb(234, 224, 208)', hex: '#EAE0D0', luma: 0.86, contrastOnWhite: 1.20 },
      { step: 3, label: 'Muted Ochre', hsl: 'hsl(38, 36%, 75%)', rgb: 'rgb(212, 196, 168)', hex: '#D4C4A8', luma: 0.75, contrastOnWhite: 1.55 },
      { step: 4, label: 'Editorial Slate', hsl: 'hsl(213, 94%, 68%)', rgb: 'rgb(96, 165, 250)', hex: '#60A5FA', luma: 0.65, contrastOnWhite: 2.05 },
      { step: 5, label: 'Refined Royal', hsl: 'hsl(221, 83%, 53%)', rgb: 'rgb(37, 99, 235)', hex: '#2563EB', luma: 0.51, contrastOnWhite: 3.40 },
      { step: 6, label: 'Classical Navy', hsl: 'hsl(224, 76%, 48%)', rgb: 'rgb(29, 78, 216)', hex: '#1D4ED8', luma: 0.42, contrastOnWhite: 4.85 },
      { step: 7, label: 'Deep Blue Ink', hsl: 'hsl(224, 64%, 33%)', rgb: 'rgb(30, 58, 138)', hex: '#1E3A8A', luma: 0.28, contrastOnWhite: 8.90 },
      { step: 8, label: 'Charcoal Ink', hsl: 'hsl(30, 9%, 16%)', rgb: 'rgb(44, 40, 37)', hex: '#2C2825', luma: 0.16, contrastOnWhite: 12.80 },
      { step: 9, label: 'Archival Black', hsl: 'hsl(0, 0%, 10%)', rgb: 'rgb(26, 26, 26)', hex: '#1A1A1A', luma: 0.10, contrastOnWhite: 15.20 },
    ],
  },
  'true-dark': {
    id: 'true-dark',
    name: 'True Dark (Obsidian & Electric Indigo)',
    description: 'Deep carbon obsidian abyss canvas with electric indigo and royal blue luminescent accents.',
    isDark: true,
    canvasBg: '#020617',
    textColor: '#F8FAFC',
    subtextColor: '#94A3B8',
    cardBg: 'rgba(24, 34, 53, 0.85)',
    cardBorder: 'rgba(99, 102, 241, 0.35)',
    accentColor: '#6366F1',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '226 57% 64%',
    bgHsl: '222 84% 5%',
    textHsl: '210 40% 98%',
    cardBgHsl: '222 47% 18%',
    subtextHsl: '215 20% 65%',
    cardBorderHsl: '226 57% 64%',
    stops: [
      { step: 0, label: 'Luminous Glow', hsl: 'hsl(210, 40%, 98%)', rgb: 'rgb(248, 250, 252)', hex: '#F8FAFC', luma: 0.98, contrastOnWhite: 18.50 },
      { step: 1, label: 'Muted Slate', hsl: 'hsl(214, 32%, 91%)', rgb: 'rgb(226, 232, 240)', hex: '#E2E8F0', luma: 0.91, contrastOnWhite: 16.80 },
      { step: 2, label: 'Subtle Steel', hsl: 'hsl(215, 20%, 65%)', rgb: 'rgb(148, 163, 184)', hex: '#94A3B8', luma: 0.65, contrastOnWhite: 9.80 },
      { step: 3, label: 'Midtone Indigo', hsl: 'hsl(226, 57%, 64%)', rgb: 'rgb(99, 102, 241)', hex: '#6366F1', luma: 0.64, contrastOnWhite: 8.20 },
      { step: 4, label: 'Electric Blue', hsl: 'hsl(217, 91%, 60%)', rgb: 'rgb(59, 130, 246)', hex: '#3B82F6', luma: 0.60, contrastOnWhite: 7.40 },
      { step: 5, label: 'Royal Blue', hsl: 'hsl(221, 83%, 53%)', rgb: 'rgb(29, 78, 216)', hex: '#1D4ED8', luma: 0.53, contrastOnWhite: 5.80 },
      { step: 6, label: 'Deep Twilight', hsl: 'hsl(224, 76%, 36%)', rgb: 'rgb(30, 58, 138)', hex: '#1E3A8A', luma: 0.36, contrastOnWhite: 3.50 },
      { step: 7, label: 'Midnight Slate', hsl: 'hsl(222, 47%, 18%)', rgb: 'rgb(24, 34, 53)', hex: '#182235', luma: 0.18, contrastOnWhite: 2.10 },
      { step: 8, label: 'Dark Charcoal', hsl: 'hsl(215, 28%, 12%)', rgb: 'rgb(11, 25, 44)', hex: '#0B192C', luma: 0.12, contrastOnWhite: 1.60 },
      { step: 9, label: 'Absolute Abyss', hsl: 'hsl(222, 84%, 5%)', rgb: 'rgb(2, 6, 23)', hex: '#020617', luma: 0.05, contrastOnWhite: 1.00 },
    ],
  },
  'emerald-growth': {
    id: 'emerald-growth',
    name: 'Emerald Growth (Dark Forest & Mint)',
    description: 'Abyssal forest green canvas with vibrant mint and crisp sage metric growth accents.',
    isDark: true,
    canvasBg: '#022C22',
    textColor: '#ECFDF5',
    subtextColor: '#A7F3D0',
    cardBg: 'rgba(6, 78, 59, 0.85)',
    cardBorder: 'rgba(16, 185, 129, 0.35)',
    accentColor: '#10B981',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '160 84% 39%',
    bgHsl: '166 91% 9%',
    textHsl: '152 81% 96%',
    cardBgHsl: '164 86% 16%',
    subtextHsl: '152 76% 80%',
    cardBorderHsl: '160 84% 39%',
    stops: [
      { step: 0, label: 'Mint Tint', hsl: 'hsl(152, 81%, 96%)', rgb: 'rgb(236, 253, 245)', hex: '#ECFDF5', luma: 0.96, contrastOnWhite: 16.50 },
      { step: 1, label: 'Light Sage', hsl: 'hsl(149, 80%, 90%)', rgb: 'rgb(209, 250, 229)', hex: '#D1FAE5', luma: 0.90, contrastOnWhite: 14.80 },
      { step: 2, label: 'Soft Seafoam', hsl: 'hsl(152, 76%, 80%)', rgb: 'rgb(167, 243, 208)', hex: '#A7F3D0', luma: 0.80, contrastOnWhite: 12.00 },
      { step: 3, label: 'Vibrant Mint', hsl: 'hsl(156, 73%, 67%)', rgb: 'rgb(110, 231, 183)', hex: '#6EE7B7', luma: 0.67, contrastOnWhite: 8.90 },
      { step: 4, label: 'Spring Emerald', hsl: 'hsl(158, 64%, 52%)', rgb: 'rgb(52, 211, 153)', hex: '#34D399', luma: 0.52, contrastOnWhite: 6.20 },
      { step: 5, label: 'Core Emerald', hsl: 'hsl(160, 84%, 39%)', rgb: 'rgb(16, 185, 129)', hex: '#10B981', luma: 0.39, contrastOnWhite: 4.80 },
      { step: 6, label: 'Deep Forest', hsl: 'hsl(161, 94%, 30%)', rgb: 'rgb(5, 150, 105)', hex: '#059669', luma: 0.30, contrastOnWhite: 3.40 },
      { step: 7, label: 'Pine Shadow', hsl: 'hsl(163, 88%, 20%)', rgb: 'rgb(4, 120, 87)', hex: '#047857', luma: 0.20, contrastOnWhite: 2.40 },
      { step: 8, label: 'Dark Spruce', hsl: 'hsl(164, 86%, 16%)', rgb: 'rgb(6, 78, 59)', hex: '#064E3B', luma: 0.16, contrastOnWhite: 1.80 },
      { step: 9, label: 'Abyssal Green', hsl: 'hsl(166, 91%, 9%)', rgb: 'rgb(2, 44, 34)', hex: '#022C22', luma: 0.09, contrastOnWhite: 1.00 },
    ],
  },
  'wp-exam-purple': {
    id: 'wp-exam-purple',
    name: 'WP Exam Purple (Royal Sovereign Violet)',
    description: 'Royal tech dark indigo canvas with vivid lilac, magenta gradients, and sovereign violet accents.',
    isDark: true,
    canvasBg: '#1E1B4B',
    textColor: '#F5F3FF',
    subtextColor: '#DDD6FE',
    cardBg: 'rgba(76, 29, 149, 0.45)',
    cardBorder: 'rgba(168, 85, 247, 0.35)',
    accentColor: '#A855F7',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '271 91% 65%',
    bgHsl: '244 47% 20%',
    textHsl: '250 100% 98%',
    cardBgHsl: '264 67% 35%',
    subtextHsl: '251 91% 87%',
    cardBorderHsl: '271 91% 65%',
    stops: [
      { step: 0, label: 'Lavender Whisper', hsl: 'hsl(250, 100%, 98%)', rgb: 'rgb(245, 243, 255)', hex: '#F5F3FF', luma: 0.96, contrastOnWhite: 15.20 },
      { step: 1, label: 'Light Violet', hsl: 'hsl(252, 95%, 94%)', rgb: 'rgb(237, 233, 254)', hex: '#EDE9FE', luma: 0.92, contrastOnWhite: 13.90 },
      { step: 2, label: 'Soft Mauve', hsl: 'hsl(251, 91%, 87%)', rgb: 'rgb(221, 214, 254)', hex: '#DDD6FE', luma: 0.86, contrastOnWhite: 11.50 },
      { step: 3, label: 'Vibrant Lilac', hsl: 'hsl(252, 95%, 78%)', rgb: 'rgb(196, 181, 253)', hex: '#C4B5FD', luma: 0.77, contrastOnWhite: 9.20 },
      { step: 4, label: 'Rich Purple', hsl: 'hsl(255, 92%, 69%)', rgb: 'rgb(167, 139, 250)', hex: '#A78BFA', luma: 0.68, contrastOnWhite: 7.10 },
      { step: 5, label: 'Core Violet', hsl: 'hsl(258, 90%, 62%)', rgb: 'rgb(139, 92, 246)', hex: '#8B5CF6', luma: 0.58, contrastOnWhite: 5.50 },
      { step: 6, label: 'Lead Purple', hsl: 'hsl(262, 83%, 58%)', rgb: 'rgb(124, 58, 237)', hex: '#7C3AED', luma: 0.51, contrastOnWhite: 4.60 },
      { step: 7, label: 'Deep Magenta', hsl: 'hsl(263, 70%, 50%)', rgb: 'rgb(109, 40, 217)', hex: '#6D28D9', luma: 0.42, contrastOnWhite: 3.50 },
      { step: 8, label: 'Royal Plum', hsl: 'hsl(264, 67%, 35%)', rgb: 'rgb(76, 29, 149)', hex: '#4C1D95', luma: 0.28, contrastOnWhite: 2.10 },
      { step: 9, label: 'Obsidian Violet', hsl: 'hsl(244, 47%, 20%)', rgb: 'rgb(30, 27, 75)', hex: '#1E1B4B', luma: 0.12, contrastOnWhite: 1.00 },
    ],
  },
  'midnight-luxe': {
    id: 'midnight-luxe',
    name: 'Midnight Luxe (Dark Editorial & Royal Blue)',
    description: 'Obsidian corporate navy slate canvas with royal blue accents and luminous typography.',
    isDark: true,
    canvasBg: '#0B192C',
    textColor: '#F8FAFC',
    subtextColor: '#94A3B8',
    cardBg: 'rgba(24, 34, 53, 0.85)',
    cardBorder: 'rgba(59, 130, 246, 0.35)',
    accentColor: '#3B82F6',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '217 91% 60%',
    bgHsl: '215 28% 12%',
    textHsl: '210 40% 98%',
    cardBgHsl: '222 47% 18%',
    subtextHsl: '215 20% 65%',
    cardBorderHsl: '217 91% 60%',
    stops: [
      { step: 0, label: 'Highlight White', hsl: 'hsl(210, 40%, 98%)', rgb: 'rgb(248, 250, 252)', hex: '#F8FAFC', luma: 0.98, contrastOnWhite: 17.20 },
      { step: 1, label: 'Muted Slate', hsl: 'hsl(214, 32%, 91%)', rgb: 'rgb(226, 232, 240)', hex: '#E2E8F0', luma: 0.91, contrastOnWhite: 15.60 },
      { step: 2, label: 'Subtle Steel', hsl: 'hsl(215, 20%, 65%)', rgb: 'rgb(148, 163, 184)', hex: '#94A3B8', luma: 0.65, contrastOnWhite: 9.20 },
      { step: 3, label: 'Midtone Indigo', hsl: 'hsl(226, 57%, 64%)', rgb: 'rgb(99, 102, 241)', hex: '#6366F1', luma: 0.64, contrastOnWhite: 7.80 },
      { step: 4, label: 'Vibrant Blue', hsl: 'hsl(217, 91%, 60%)', rgb: 'rgb(59, 130, 246)', hex: '#3B82F6', luma: 0.60, contrastOnWhite: 6.90 },
      { step: 5, label: 'Royal Blue', hsl: 'hsl(221, 83%, 53%)', rgb: 'rgb(29, 78, 216)', hex: '#1D4ED8', luma: 0.53, contrastOnWhite: 5.40 },
      { step: 6, label: 'Deep Twilight', hsl: 'hsl(224, 76%, 36%)', rgb: 'rgb(30, 58, 138)', hex: '#1E3A8A', luma: 0.36, contrastOnWhite: 3.20 },
      { step: 7, label: 'Midnight Slate', hsl: 'hsl(222, 47%, 18%)', rgb: 'rgb(24, 34, 53)', hex: '#182235', luma: 0.18, contrastOnWhite: 1.80 },
      { step: 8, label: 'Dark Charcoal', hsl: 'hsl(215, 28%, 12%)', rgb: 'rgb(11, 25, 44)', hex: '#0B192C', luma: 0.12, contrastOnWhite: 1.25 },
      { step: 9, label: 'Absolute Obsidian', hsl: 'hsl(222, 47%, 11%)', rgb: 'rgb(15, 23, 42)', hex: '#0F172A', luma: 0.11, contrastOnWhite: 1.00 },
    ],
  },
  'sunset-horizon': {
    id: 'sunset-horizon',
    name: 'Sunset Horizon (Warm Plum & Coral Amber)',
    description: 'Midnight plum canvas with sunset amber and vivid rose highlights.',
    isDark: true,
    canvasBg: '#1F1128',
    textColor: '#FFF1F2',
    subtextColor: '#FECDD3',
    cardBg: 'rgba(63, 21, 40, 0.85)',
    cardBorder: 'rgba(244, 63, 94, 0.35)',
    accentColor: '#F43F5E',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '350 89% 60%',
    bgHsl: '280 40% 11%',
    textHsl: '350 100% 97%',
    cardBgHsl: '335 50% 16%',
    subtextHsl: '356 96% 84%',
    cardBorderHsl: '350 89% 60%',
    stops: [
      { step: 0, label: 'Rose Whisper', hsl: 'hsl(350, 100%, 97%)', rgb: 'rgb(255, 241, 242)', hex: '#FFF1F2', luma: 0.97, contrastOnWhite: 16.80 },
      { step: 1, label: 'Peach Tint', hsl: 'hsl(355, 100%, 93%)', rgb: 'rgb(255, 228, 230)', hex: '#FFE4E6', luma: 0.91, contrastOnWhite: 14.90 },
      { step: 2, label: 'Coral Muted', hsl: 'hsl(356, 96%, 84%)', rgb: 'rgb(254, 205, 211)', hex: '#FECDD3', luma: 0.82, contrastOnWhite: 12.10 },
      { step: 3, label: 'Warm Coral', hsl: 'hsl(353, 96%, 72%)', rgb: 'rgb(251, 113, 133)', hex: '#FB7185', luma: 0.69, contrastOnWhite: 8.80 },
      { step: 4, label: 'Vivid Rose', hsl: 'hsl(350, 89%, 60%)', rgb: 'rgb(244, 63, 94)', hex: '#F43F5E', luma: 0.58, contrastOnWhite: 6.50 },
      { step: 5, label: 'Sunset Amber', hsl: 'hsl(32, 95%, 52%)', rgb: 'rgb(249, 115, 22)', hex: '#F97316', luma: 0.52, contrastOnWhite: 5.40 },
      { step: 6, label: 'Plum Horizon', hsl: 'hsl(335, 78%, 42%)', rgb: 'rgb(190, 24, 93)', hex: '#BE185D', luma: 0.38, contrastOnWhite: 3.60 },
      { step: 7, label: 'Deep Bordeaux', hsl: 'hsl(336, 75%, 28%)', rgb: 'rgb(131, 24, 67)', hex: '#831843', luma: 0.22, contrastOnWhite: 2.10 },
      { step: 8, label: 'Dark Plum Card', hsl: 'hsl(335, 50%, 16%)', rgb: 'rgb(63, 21, 40)', hex: '#3F1528', luma: 0.14, contrastOnWhite: 1.45 },
      { step: 9, label: 'Midnight Plum', hsl: 'hsl(280, 40%, 11%)', rgb: 'rgb(31, 17, 40)', hex: '#1F1128', luma: 0.08, contrastOnWhite: 1.00 },
    ],
  },
  'cyber-neon': {
    id: 'cyber-neon',
    name: 'Cyber Neon (Synthwave Cyan & Magenta)',
    description: 'Deep synthwave space core canvas with electric cyan, neon magenta, and violet accents.',
    isDark: true,
    canvasBg: '#050510',
    textColor: '#E0F2FE',
    subtextColor: '#67E8F9',
    cardBg: 'rgba(13, 13, 38, 0.85)',
    cardBorder: 'rgba(6, 182, 212, 0.35)',
    accentColor: '#06B6D4',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '189 94% 43%',
    bgHsl: '240 52% 4%',
    textHsl: '204 94% 94%',
    cardBgHsl: '240 50% 10%',
    subtextHsl: '189 94% 68%',
    cardBorderHsl: '189 94% 43%',
    stops: [
      { step: 0, label: 'Pure Cyan Flash', hsl: 'hsl(180, 100%, 95%)', rgb: 'rgb(230, 255, 255)', hex: '#E6FFFF', luma: 0.98, contrastOnWhite: 19.10 },
      { step: 1, label: 'Bright Sky', hsl: 'hsl(187, 92%, 87%)', rgb: 'rgb(186, 244, 253)', hex: '#BAF4FD', luma: 0.89, contrastOnWhite: 16.50 },
      { step: 2, label: 'Neon Cyan', hsl: 'hsl(189, 94%, 68%)', rgb: 'rgb(103, 232, 249)', hex: '#67E8F9', luma: 0.74, contrastOnWhite: 11.80 },
      { step: 3, label: 'Electric Azure', hsl: 'hsl(192, 91%, 50%)', rgb: 'rgb(14, 165, 233)', hex: '#0EA5E9', luma: 0.58, contrastOnWhite: 8.20 },
      { step: 4, label: 'Synth Magenta', hsl: 'hsl(316, 73%, 52%)', rgb: 'rgb(217, 70, 239)', hex: '#D946EF', luma: 0.50, contrastOnWhite: 6.50 },
      { step: 5, label: 'Electric Violet', hsl: 'hsl(271, 91%, 65%)', rgb: 'rgb(168, 85, 247)', hex: '#A855F7', luma: 0.56, contrastOnWhite: 7.60 },
      { step: 6, label: 'Deep Cyber Blue', hsl: 'hsl(217, 70%, 35%)', rgb: 'rgb(27, 67, 142)', hex: '#1B438E', luma: 0.28, contrastOnWhite: 3.20 },
      { step: 7, label: 'Midnight Cobalt', hsl: 'hsl(230, 60%, 20%)', rgb: 'rgb(20, 31, 82)', hex: '#141F52', luma: 0.16, contrastOnWhite: 1.95 },
      { step: 8, label: 'Recessed Abyss', hsl: 'hsl(240, 50%, 10%)', rgb: 'rgb(13, 13, 38)', hex: '#0D0D26', luma: 0.10, contrastOnWhite: 1.35 },
      { step: 9, label: 'Deep Space Core', hsl: 'hsl(240, 52%, 4%)', rgb: 'rgb(5, 5, 16)', hex: '#050510', luma: 0.04, contrastOnWhite: 1.00 },
    ],
  },
  'crimson-executive': {
    id: 'crimson-executive',
    name: 'Crimson Executive (Imperial Ruby & Obsidian Carbon)',
    description: 'Deep void crimson obsidian canvas with imperial ruby and vivid claret leadership accents.',
    isDark: true,
    canvasBg: '#140507',
    textColor: '#FFF1F2',
    subtextColor: '#FECDD3',
    cardBg: 'rgba(57, 14, 25, 0.85)',
    cardBorder: 'rgba(225, 29, 72, 0.35)',
    accentColor: '#E11D48',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '347 77% 50%',
    bgHsl: '348 60% 5%',
    textHsl: '350 100% 97%',
    cardBgHsl: '345 60% 14%',
    subtextHsl: '356 96% 84%',
    cardBorderHsl: '347 77% 50%',
    stops: [
      { step: 0, label: 'Ruby Glint', hsl: 'hsl(350, 100%, 97%)', rgb: 'rgb(255, 241, 242)', hex: '#FFF1F2', luma: 0.97, contrastOnWhite: 17.50 },
      { step: 1, label: 'Crimson Tint', hsl: 'hsl(355, 100%, 93%)', rgb: 'rgb(255, 228, 230)', hex: '#FFE4E6', luma: 0.91, contrastOnWhite: 15.60 },
      { step: 2, label: 'Light Rose', hsl: 'hsl(356, 96%, 84%)', rgb: 'rgb(254, 205, 211)', hex: '#FECDD3', luma: 0.82, contrastOnWhite: 12.80 },
      { step: 3, label: 'Soft Ruby', hsl: 'hsl(353, 96%, 72%)', rgb: 'rgb(251, 113, 133)', hex: '#FB7185', luma: 0.69, contrastOnWhite: 9.40 },
      { step: 4, label: 'Crimson Vivid', hsl: 'hsl(351, 94%, 60%)', rgb: 'rgb(244, 63, 94)', hex: '#F43F5E', luma: 0.58, contrastOnWhite: 7.10 },
      { step: 5, label: 'Executive Ruby', hsl: 'hsl(347, 77%, 50%)', rgb: 'rgb(225, 29, 72)', hex: '#E11D48', luma: 0.46, contrastOnWhite: 5.20 },
      { step: 6, label: 'Deep Claret', hsl: 'hsl(345, 83%, 38%)', rgb: 'rgb(159, 18, 57)', hex: '#9F1239', luma: 0.30, contrastOnWhite: 3.10 },
      { step: 7, label: 'Burgundy Wine', hsl: 'hsl(343, 80%, 25%)', rgb: 'rgb(114, 15, 41)', hex: '#720F29', luma: 0.18, contrastOnWhite: 1.95 },
      { step: 8, label: 'Blood Obsidian', hsl: 'hsl(345, 60%, 14%)', rgb: 'rgb(57, 14, 25)', hex: '#390E19', luma: 0.11, contrastOnWhite: 1.35 },
      { step: 9, label: 'Void Crimson', hsl: 'hsl(348, 60%, 5%)', rgb: 'rgb(20, 5, 7)', hex: '#140507', luma: 0.04, contrastOnWhite: 1.00 },
    ],
  },
  'nord-frost': {
    id: 'nord-frost',
    name: 'Nord Frost (Arctic Scandinavian Glacier Blue)',
    description: 'Arctic Scandinavian deep navy abyss with crystalline glacier blue and polar azure accents.',
    isDark: true,
    canvasBg: '#0B132B',
    textColor: '#F0F9FF',
    subtextColor: '#BAE6FD',
    cardBg: 'rgba(28, 37, 65, 0.85)',
    cardBorder: 'rgba(56, 189, 248, 0.35)',
    accentColor: '#38BDF8',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '199 89% 60%',
    bgHsl: '225 59% 11%',
    textHsl: '204 100% 97%',
    cardBgHsl: '224 40% 18%',
    subtextHsl: '201 94% 86%',
    cardBorderHsl: '199 89% 60%',
    stops: [
      { step: 0, label: 'Glacier Frost', hsl: 'hsl(204, 100%, 97%)', rgb: 'rgb(240, 249, 255)', hex: '#F0F9FF', luma: 0.97, contrastOnWhite: 18.00 },
      { step: 1, label: 'Polar White', hsl: 'hsl(204, 94%, 94%)', rgb: 'rgb(224, 242, 254)', hex: '#E0F2FE', luma: 0.92, contrastOnWhite: 16.20 },
      { step: 2, label: 'Pale Ice', hsl: 'hsl(201, 94%, 86%)', rgb: 'rgb(186, 230, 253)', hex: '#BAE6FD', luma: 0.85, contrastOnWhite: 13.50 },
      { step: 3, label: 'Nordic Sky', hsl: 'hsl(199, 89%, 74%)', rgb: 'rgb(125, 211, 252)', hex: '#7DD3FC', luma: 0.74, contrastOnWhite: 10.20 },
      { step: 4, label: 'Polar Azure', hsl: 'hsl(199, 89%, 48%)', rgb: 'rgb(14, 165, 233)', hex: '#0EA5E9', luma: 0.58, contrastOnWhite: 7.20 },
      { step: 5, label: 'Fjord Blue', hsl: 'hsl(201, 96%, 39%)', rgb: 'rgb(2, 132, 199)', hex: '#0284C7', luma: 0.48, contrastOnWhite: 5.80 },
      { step: 6, label: 'Glacier Lead', hsl: 'hsl(199, 89%, 60%)', rgb: 'rgb(56, 189, 248)', hex: '#38BDF8', luma: 0.40, contrastOnWhite: 4.60 },
      { step: 7, label: 'Deep Fjord', hsl: 'hsl(202, 96%, 32%)', rgb: 'rgb(3, 105, 161)', hex: '#0369A1', luma: 0.27, contrastOnWhite: 2.80 },
      { step: 8, label: 'Polar Midnight', hsl: 'hsl(224, 40%, 18%)', rgb: 'rgb(28, 37, 65)', hex: '#1C2541', luma: 0.16, contrastOnWhite: 1.60 },
      { step: 9, label: 'Arctic Abyss', hsl: 'hsl(225, 59%, 11%)', rgb: 'rgb(11, 19, 43)', hex: '#0B132B', luma: 0.08, contrastOnWhite: 1.00 },
    ],
  },
};

export const LEGACY_ALIASES: Record<string, string> = {
  'bright-gold': 'true-dark',
  'noir-gold': 'crimson-executive',
  'vscode-dark': 'midnight-luxe',
  'dracula': 'wp-exam-purple',
  'monokai': 'emerald-growth',
  'github-light': 'white-brand',
  'paper-ink': 'paper-editorial',
  'macos-sonoma': 'nord-frost',
  'windows-11': 'cyber-neon',
};

Object.entries(LEGACY_ALIASES).forEach(([legacyId, targetId]) => {
  const targetTheme = THEME_PALETTES[targetId];
  const hasTarget = Boolean(targetTheme);
  if (hasTarget) {
    Object.defineProperty(THEME_PALETTES, legacyId, {
      value: targetTheme,
      enumerable: false,
      writable: true,
      configurable: true,
    });
  }
});

function getCharGradientStop(
  palette: ThemePalette,
  index: number,
  totalChars: number,
  startStep: number,
  endStep: number
): { hex: string; hsl: string } {
  const hasMultipleChars = totalChars > 1;
  const ratio = hasMultipleChars ? index / (totalChars - 1) : 0;
  const targetStep = Math.min(9, Math.max(0, Math.round(startStep + ratio * (endStep - startStep))));
  const stop = palette.stops[targetStep];
  return { hex: stop.hex, hsl: stop.hsl };
}

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
    const isSpace = char === ' ';
    if (isSpace) return { char: ' ', hex: 'transparent', hsl: 'transparent' };
    const stop = getCharGradientStop(palette, index, totalChars, startStep, endStep);
    return { char, hex: stop.hex, hsl: stop.hsl };
  });
}

/**
 * Canonical high-definition text-shadow contrast standard:
 * Light/white text: rgb(0 0 0) 1px 0.7px 0px
 * Dark text: rgb(255 255 255) 1px 0.7px 0px
 */
export function getHeaderShadow(isLightOrWhiteText: boolean): string {
  if (isLightOrWhiteText) {
    return 'rgb(0 0 0) 1px 0.7px 0px';
  }
  return 'rgb(255 255 255) 1px 0.7px 0px';
}

// lint-allow: file-size reason="authentic 13-theme corporate palette dictionary" max=580
import { GradientStop, ThemePalette } from '../types/presentation';
import { isBooleanTrue } from '../utils/booleanGuards';

declare module '../types/presentation' {
  interface ThemePalette {
    accent?: string;
    accentHsl?: string;
    bgHsl?: string;
    canvasBgHsl?: string;
    textHsl?: string;
    cardBgHsl?: string;
    subtextHsl?: string;
    cardBorderHsl?: string;
  }
}

function makeStop(
  step: number,
  label: string,
  hex: string,
  hsl: string,
  rgb: string,
  luma: number,
  contrastOnWhite: number
): GradientStop {
  return { step, label, hex, hsl, rgb, luma, contrastOnWhite };
}

export const CANONICAL_THEME_IDS = [
  'white-brand',
  'paper-editorial',
  'true-dark',
  'emerald-growth',
  'wp-exam-purple',
  'midnight-luxe',
  'sunset-horizon',
  'cyber-neon',
  'crimson-executive',
  'nord-frost',
  'bright-gold',
  'noir-gold',
  'monokai',
] as const;

export type CanonicalThemeId = (typeof CANONICAL_THEME_IDS)[number];

export const CANONICAL_THEMES: Record<string, ThemePalette> = {
  'white-brand': {
    id: 'white-brand',
    name: 'Pure White Editorial',
    description: 'Crisp white paper, royal violet brand authority, high print fidelity.',
    isDark: false,
    canvasBg: '#FFFFFF',
    canvasBgHsl: '0 0% 100%',
    bgHsl: '0 0% 100%',
    textColor: '#0F172A',
    textHsl: '222 47% 11%',
    subtextColor: '#64748B',
    subtextHsl: '215 16% 47%',
    cardBg: 'rgba(248, 250, 252, 0.92)',
    cardBgHsl: '210 40% 98%',
    cardBorder: 'rgba(124, 58, 237, 0.20)',
    cardBorderHsl: '262 83% 58%',
    accentColor: '#7C3AED',
    accentHsl: '262 83% 58%',
    dotMatrix: false,
    headerShadow: 'rgb(255 255 255) 1px 0.7px 0px',
    stops: [
      makeStop(0, 'Pure White Canvas', '#FFFFFF', 'hsl(0, 0%, 100%)', 'rgb(255, 255, 255)', 1.00, 1.0),
      makeStop(1, 'Soft Violet Wash', '#F5F3FF', 'hsl(250, 100%, 98%)', 'rgb(245, 243, 255)', 0.96, 1.04),
      makeStop(2, 'Violet Mist Surface', '#EDE9FE', 'hsl(252, 95%, 96%)', 'rgb(237, 233, 254)', 0.92, 1.09),
      makeStop(3, 'Subtle Border Tint', '#DDD6FE', 'hsl(251, 91%, 92%)', 'rgb(221, 214, 254)', 0.82, 1.22),
      makeStop(4, 'Lavender Accent Tint', '#C4B5FD', 'hsl(252, 95%, 85%)', 'rgb(196, 181, 253)', 0.68, 1.47),
      makeStop(5, 'Royal Violet Brand', '#7C3AED', 'hsl(262, 83%, 58%)', 'rgb(124, 58, 237)', 0.38, 2.63),
      makeStop(6, 'Deep Sovereign Indigo', '#6D28D9', 'hsl(263, 70%, 50%)', 'rgb(109, 40, 217)', 0.28, 3.57),
      makeStop(7, 'Muted Slate Charcoal', '#64748B', 'hsl(215, 16%, 47%)', 'rgb(100, 116, 139)', 0.22, 4.55),
      makeStop(8, 'Sub-Surface Slate', '#334155', 'hsl(215, 25%, 27%)', 'rgb(51, 65, 85)', 0.12, 8.33),
      makeStop(9, 'Deep Paper Ink', '#0F172A', 'hsl(222, 47%, 11%)', 'rgb(15, 23, 42)', 0.05, 20.0),
    ],
  },
  'paper-editorial': {
    id: 'paper-editorial',
    name: 'Archival Cream',
    description: 'Classical warm parchment, navy ink typography, institutional research.',
    isDark: false,
    canvasBg: '#F5F0E6',
    canvasBgHsl: '40 33% 93%',
    bgHsl: '40 33% 93%',
    textColor: '#0A1128',
    textHsl: '226 60% 10%',
    subtextColor: '#383838',
    subtextHsl: '0 0% 22%',
    cardBg: 'rgba(245, 240, 230, 0.92)',
    cardBgHsl: '39 43% 93%',
    cardBorder: '#E5DAC8',
    cardBorderHsl: '38 35% 84%',
    accentColor: '#1D4ED8',
    accentHsl: '224 76% 48%',
    dotMatrix: false,
    headerShadow: 'rgb(255 255 255) 1px 0.7px 0px',
    stops: [
      makeStop(0, 'Archival Cream Canvas', '#FAF7F0', 'hsl(42, 50%, 96%)', 'rgb(250, 247, 240)', 0.96, 1.00),
      makeStop(1, 'Warm Parchment Card', '#F5F0E6', 'hsl(40, 33%, 93%)', 'rgb(245, 240, 230)', 0.93, 1.03),
      makeStop(2, 'Flax Border Rule', '#E5DAC8', 'hsl(38, 35%, 84%)', 'rgb(229, 218, 200)', 0.82, 1.17),
      makeStop(3, 'Muted Umber Accent', '#C8B69A', 'hsl(38, 30%, 70%)', 'rgb(200, 182, 154)', 0.65, 1.47),
      makeStop(4, 'Slate Ink Blue', '#6488CB', 'hsl(215, 50%, 60%)', 'rgb(100, 136, 203)', 0.48, 2.00),
      makeStop(5, 'Royal Ink Navy', '#1D4ED8', 'hsl(224, 76%, 48%)', 'rgb(29, 78, 216)', 0.35, 2.74),
      makeStop(6, 'Classical Prussian Ink', '#1B3DA8', 'hsl(224, 70%, 36%)', 'rgb(27, 61, 168)', 0.22, 4.36),
      makeStop(7, 'Prussian Midnight', '#152A68', 'hsl(224, 64%, 24%)', 'rgb(21, 42, 104)', 0.14, 6.85),
      makeStop(8, 'Charcoal Quill', '#383838', 'hsl(0, 0%, 22%)', 'rgb(56, 56, 56)', 0.12, 8.00),
      makeStop(9, 'Fountain Ink Abyss', '#0A1128', 'hsl(226, 60%, 10%)', 'rgb(10, 17, 40)', 0.05, 19.2),
    ],
  },
  'true-dark': {
    id: 'true-dark',
    name: 'Obsidian Abyss',
    description: 'Ultra-deep carbon obsidian, luminescent indigo, mission-critical keynotes.',
    isDark: true,
    canvasBg: '#020408',
    canvasBgHsl: '222 78% 3%',
    bgHsl: '222 78% 3%',
    textColor: '#F8FAFC',
    textHsl: '210 40% 98%',
    subtextColor: '#94A3B8',
    subtextHsl: '215 20% 65%',
    cardBg: 'rgba(15, 23, 42, 0.88)',
    cardBgHsl: '222 47% 11%',
    cardBorder: 'rgba(99, 102, 241, 0.35)',
    cardBorderHsl: '239 84% 67%',
    accentColor: '#6366F1',
    accentHsl: '239 84% 67%',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      makeStop(0, 'Luminescent White', '#F8FAFC', 'hsl(210, 40%, 98%)', 'rgb(248, 250, 252)', 0.98, 19.6),
      makeStop(1, 'Soft Lavender Glint', '#E0E7FF', 'hsl(226, 100%, 94%)', 'rgb(224, 231, 255)', 0.88, 17.6),
      makeStop(2, 'Electric Indigo Foil', '#A5B4FC', 'hsl(230, 95%, 82%)', 'rgb(165, 180, 252)', 0.72, 14.4),
      makeStop(3, 'Luminescent Indigo', '#6366F1', 'hsl(239, 84%, 67%)', 'rgb(99, 102, 241)', 0.52, 10.4),
      makeStop(4, 'Deep Royal Indigo', '#4F46E5', 'hsl(243, 75%, 59%)', 'rgb(79, 70, 229)', 0.40, 8.0),
      makeStop(5, 'Midnight Iris', '#4338CA', 'hsl(245, 58%, 51%)', 'rgb(67, 56, 202)', 0.30, 6.0),
      makeStop(6, 'Subdued Slate Border', '#312E81', 'hsl(244, 47%, 34%)', 'rgb(49, 46, 129)', 0.20, 4.0),
      makeStop(7, 'Panel Carbon Border', '#1E1B4B', 'hsl(244, 47%, 20%)', 'rgb(30, 27, 75)', 0.12, 2.4),
      makeStop(8, 'Smoked Carbon Slate', '#0F172A', 'hsl(222, 47%, 11%)', 'rgb(15, 23, 42)', 0.07, 1.4),
      makeStop(9, 'Obsidian Abyss', '#020408', 'hsl(222, 78%, 3%)', 'rgb(2, 4, 8)', 0.03, 1.0),
    ],
  },
  'emerald-growth': {
    id: 'emerald-growth',
    name: 'Forest Capital',
    description: 'Deep botanical emerald, vivid mint highlights, ESG & sustainability summits.',
    isDark: true,
    canvasBg: '#04271F',
    canvasBgHsl: '168 84% 9%',
    bgHsl: '168 84% 9%',
    textColor: '#F0FDF4',
    textHsl: '138 76% 97%',
    subtextColor: '#6EE7B7',
    subtextHsl: '156 72% 67%',
    cardBg: 'rgba(6, 44, 36, 0.88)',
    cardBgHsl: '167 76% 10%',
    cardBorder: 'rgba(16, 185, 129, 0.35)',
    cardBorderHsl: '160 84% 39%',
    accentColor: '#10B981',
    accentHsl: '160 84% 39%',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      makeStop(0, 'Mint Frost White', '#F0FDF4', 'hsl(138, 76%, 97%)', 'rgb(240, 253, 244)', 0.97, 19.4),
      makeStop(1, 'Radiant Mint Sheen', '#A7F3D0', 'hsl(152, 81%, 80%)', 'rgb(167, 243, 208)', 0.84, 16.8),
      makeStop(2, 'Emerald Highlight', '#34D399', 'hsl(158, 64%, 52%)', 'rgb(52, 211, 153)', 0.62, 12.4),
      makeStop(3, 'Forest Capital Mint', '#10B981', 'hsl(160, 84%, 39%)', 'rgb(16, 185, 129)', 0.45, 9.0),
      makeStop(4, 'Deep Botanical Green', '#059669', 'hsl(161, 94%, 30%)', 'rgb(5, 150, 105)', 0.32, 6.4),
      makeStop(5, 'Pine Core', '#047857', 'hsl(163, 94%, 24%)', 'rgb(4, 120, 87)', 0.22, 4.4),
      makeStop(6, 'Evergreen Slate', '#065F46', 'hsl(164, 86%, 19%)', 'rgb(6, 95, 70)', 0.16, 3.2),
      makeStop(7, 'Dark Moss Border', '#064E3B', 'hsl(166, 85%, 15%)', 'rgb(6, 78, 59)', 0.12, 2.4),
      makeStop(8, 'Deep Canopy Card', '#062C24', 'hsl(167, 76%, 10%)', 'rgb(6, 44, 36)', 0.08, 1.6),
      makeStop(9, 'Forest Abyss', '#04271F', 'hsl(168, 84%, 9%)', 'rgb(4, 39, 31)', 0.05, 1.0),
    ],
  },
  'wp-exam-purple': {
    id: 'wp-exam-purple',
    name: 'Sovereign Violet',
    description: 'Deep cosmic purple, sovereign neon violet, premium product unveilings.',
    isDark: true,
    canvasBg: '#0D0727',
    canvasBgHsl: '255 70% 9%',
    bgHsl: '255 70% 9%',
    textColor: '#FAF5FF',
    textHsl: '270 100% 98%',
    subtextColor: '#C084FC',
    subtextHsl: '269 97% 75%',
    cardBg: 'rgba(24, 15, 56, 0.88)',
    cardBgHsl: '253 58% 14%',
    cardBorder: 'rgba(168, 85, 247, 0.35)',
    cardBorderHsl: '271 91% 65%',
    accentColor: '#A855F7',
    accentHsl: '271 91% 65%',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      makeStop(0, 'Cosmic White Aura', '#FAF5FF', 'hsl(270, 100%, 98%)', 'rgb(250, 245, 255)', 0.98, 19.6),
      makeStop(1, 'Electric Orchid', '#E9D5FF', 'hsl(270, 95%, 92%)', 'rgb(233, 213, 255)', 0.85, 17.0),
      makeStop(2, 'Neon Violet Glint', '#C084FC', 'hsl(269, 97%, 75%)', 'rgb(192, 132, 252)', 0.68, 13.6),
      makeStop(3, 'Sovereign Violet', '#A855F7', 'hsl(271, 91%, 65%)', 'rgb(168, 85, 247)', 0.50, 10.0),
      makeStop(4, 'Imperial Purple', '#9333EA', 'hsl(271, 81%, 56%)', 'rgb(147, 51, 234)', 0.38, 7.6),
      makeStop(5, 'Deep Cosmic Violet', '#7E22CE', 'hsl(272, 72%, 47%)', 'rgb(126, 34, 206)', 0.28, 5.6),
      makeStop(6, 'Twilight Purple Border', '#6B21A8', 'hsl(273, 67%, 39%)', 'rgb(107, 33, 168)', 0.19, 3.8),
      makeStop(7, 'Smoked Amethyst', '#581C87', 'hsl(274, 66%, 32%)', 'rgb(88, 28, 135)', 0.13, 2.6),
      makeStop(8, 'Midnight Velvet Card', '#180F38', 'hsl(253, 58%, 14%)', 'rgb(24, 15, 56)', 0.08, 1.6),
      makeStop(9, 'Cosmic Abyss', '#0D0727', 'hsl(255, 70%, 9%)', 'rgb(13, 7, 39)', 0.05, 1.0),
    ],
  },
  'midnight-luxe': {
    id: 'midnight-luxe',
    name: 'Executive Slate',
    description: 'Deep maritime navy slate, cyan accent beams, enterprise IT infrastructure.',
    isDark: true,
    canvasBg: '#0B162C',
    canvasBgHsl: '214 60% 11%',
    bgHsl: '214 60% 11%',
    textColor: '#F0F9FF',
    textHsl: '204 100% 97%',
    subtextColor: '#7DD3FC',
    subtextHsl: '199 89% 74%',
    cardBg: 'rgba(15, 30, 60, 0.88)',
    cardBgHsl: '220 60% 15%',
    cardBorder: 'rgba(0, 145, 255, 0.35)',
    cardBorderHsl: '201 100% 43%',
    accentColor: '#0091FF',
    accentHsl: '201 100% 43%',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      makeStop(0, 'Glacial Cyan White', '#F0F9FF', 'hsl(204, 100%, 97%)', 'rgb(240, 249, 255)', 0.97, 19.4),
      makeStop(1, 'Electric Sky Sheen', '#BAE6FD', 'hsl(201, 94%, 86%)', 'rgb(186, 230, 253)', 0.82, 16.4),
      makeStop(2, 'Cyan Accent Beam', '#38BDF8', 'hsl(199, 89%, 60%)', 'rgb(56, 189, 248)', 0.60, 12.0),
      makeStop(3, 'Executive Cyan Beam', '#0091FF', 'hsl(201, 100%, 43%)', 'rgb(0, 145, 255)', 0.42, 8.4),
      makeStop(4, 'Azure Maritime', '#0284C7', 'hsl(201, 96%, 32%)', 'rgb(2, 132, 199)', 0.28, 5.6),
      makeStop(5, 'Deep Executive Blue', '#0369A1', 'hsl(202, 80%, 24%)', 'rgb(3, 105, 161)', 0.18, 3.6),
      makeStop(6, 'Harbor Navy Border', '#075985', 'hsl(201, 90%, 18%)', 'rgb(7, 89, 133)', 0.14, 2.8),
      makeStop(7, 'Sub-Surface Slate', '#0C4A6E', 'hsl(202, 80%, 14%)', 'rgb(12, 74, 110)', 0.10, 2.0),
      makeStop(8, 'Smoked Navy Card', '#0F1E3C', 'hsl(220, 60%, 15%)', 'rgb(15, 30, 60)', 0.08, 1.6),
      makeStop(9, 'Maritime Slate Abyss', '#0B162C', 'hsl(214, 60%, 11%)', 'rgb(11, 22, 44)', 0.06, 1.0),
    ],
  },
  'sunset-horizon': {
    id: 'sunset-horizon',
    name: 'Warm Ember',
    description: 'Smoked obsidian, radiant amber & coral embers, venture capital pitches.',
    isDark: true,
    canvasBg: '#190B0B',
    canvasBgHsl: '0 41% 7%',
    bgHsl: '0 41% 7%',
    textColor: '#FFF7ED',
    textHsl: '33 100% 96%',
    subtextColor: '#FDBA74',
    subtextHsl: '27 96% 72%',
    cardBg: 'rgba(38, 17, 17, 0.88)',
    cardBgHsl: '0 38% 11%',
    cardBorder: 'rgba(249, 115, 22, 0.35)',
    cardBorderHsl: '25 95% 53%',
    accentColor: '#F97316',
    accentHsl: '25 95% 53%',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      makeStop(0, 'Warm Sunrise White', '#FFF7ED', 'hsl(33, 100%, 96%)', 'rgb(255, 247, 237)', 0.98, 19.6),
      makeStop(1, 'Coral Glint', '#FFEDD5', 'hsl(34, 100%, 92%)', 'rgb(255, 237, 213)', 0.88, 17.6),
      makeStop(2, 'Apricot Ember', '#FDBA74', 'hsl(27, 96%, 72%)', 'rgb(253, 186, 116)', 0.70, 14.0),
      makeStop(3, 'Radiant Amber Ember', '#F97316', 'hsl(25, 95%, 53%)', 'rgb(249, 115, 22)', 0.52, 10.4),
      makeStop(4, 'Fiery Orange Core', '#EA580C', 'hsl(22, 90%, 48%)', 'rgb(234, 88, 12)', 0.38, 7.6),
      makeStop(5, 'Deep Terracotta', '#C2410C', 'hsl(18, 88%, 40%)', 'rgb(194, 65, 12)', 0.26, 5.2),
      makeStop(6, 'Burnt Sienna Border', '#9A3412', 'hsl(15, 85%, 34%)', 'rgb(154, 52, 18)', 0.18, 3.6),
      makeStop(7, 'Smoked Ember Border', '#7C2D12', 'hsl(15, 75%, 28%)', 'rgb(124, 45, 18)', 0.13, 2.6),
      makeStop(8, 'Smoked Obsidian Card', '#261111', 'hsl(0, 38%, 11%)', 'rgb(38, 17, 17)', 0.08, 1.6),
      makeStop(9, 'Warm Ember Abyss', '#190B0B', 'hsl(0, 41%, 7%)', 'rgb(25, 11, 11)', 0.05, 1.0),
    ],
  },
  'cyber-neon': {
    id: 'cyber-neon',
    name: 'Matrix Terminal',
    description: 'Pure OLED black, radioactive cyan & lime accents, cybersecurity briefings.',
    isDark: true,
    canvasBg: '#050505',
    canvasBgHsl: '0 0% 2%',
    bgHsl: '0 0% 2%',
    textColor: '#ECFEFF',
    textHsl: '180 100% 96%',
    subtextColor: '#67E8F9',
    subtextHsl: '186 94% 69%',
    cardBg: 'rgba(10, 20, 25, 0.88)',
    cardBgHsl: '200 43% 7%',
    cardBorder: 'rgba(6, 182, 212, 0.35)',
    cardBorderHsl: '189 94% 43%',
    accentColor: '#06B6D4',
    accentHsl: '189 94% 43%',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      makeStop(0, 'Terminal Cyan White', '#ECFEFF', 'hsl(180, 100%, 96%)', 'rgb(236, 254, 255)', 0.98, 19.6),
      makeStop(1, 'Radioactive Cyan', '#A5F3FC', 'hsl(187, 92%, 81%)', 'rgb(165, 243, 252)', 0.84, 16.8),
      makeStop(2, 'Matrix Neon Beam', '#67E8F9', 'hsl(186, 94%, 69%)', 'rgb(103, 232, 249)', 0.68, 13.6),
      makeStop(3, 'Electric Cyan Accent', '#06B6D4', 'hsl(189, 94%, 43%)', 'rgb(6, 182, 212)', 0.50, 10.0),
      makeStop(4, 'Cyber Core Teal', '#0891B2', 'hsl(192, 91%, 36%)', 'rgb(8, 145, 178)', 0.35, 7.0),
      makeStop(5, 'Deep Terminal Aqua', '#0E7490', 'hsl(193, 82%, 31%)', 'rgb(14, 116, 144)', 0.24, 4.8),
      makeStop(6, 'Phosphor Grid Line', '#155E75', 'hsl(194, 70%, 27%)', 'rgb(21, 94, 117)', 0.16, 3.2),
      makeStop(7, 'Grid Matrix Border', '#164E63', 'hsl(197, 63%, 24%)', 'rgb(22, 78, 99)', 0.12, 2.4),
      makeStop(8, 'Terminal Surface Card', '#0A1419', 'hsl(200, 43%, 7%)', 'rgb(10, 20, 25)', 0.06, 1.2),
      makeStop(9, 'OLED Black Abyss', '#050505', 'hsl(0, 0%, 2%)', 'rgb(5, 5, 5)', 0.03, 1.0),
    ],
  },
  'crimson-executive': {
    id: 'crimson-executive',
    name: 'Ruby Authority',
    description: 'Deep wine obsidian, vivid ruby red, crisis management & board governance.',
    isDark: true,
    canvasBg: '#17080C',
    canvasBgHsl: '344 50% 6%',
    bgHsl: '344 50% 6%',
    textColor: '#FFF1F2',
    textHsl: '350 100% 97%',
    subtextColor: '#FDA4AF',
    subtextHsl: '351 95% 82%',
    cardBg: 'rgba(35, 12, 18, 0.88)',
    cardBgHsl: '344 49% 9%',
    cardBorder: 'rgba(225, 29, 72, 0.35)',
    cardBorderHsl: '347 77% 50%',
    accentColor: '#E11D48',
    accentHsl: '347 77% 50%',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      makeStop(0, 'Ruby Dawn White', '#FFF1F2', 'hsl(350, 100%, 97%)', 'rgb(255, 241, 242)', 0.98, 19.6),
      makeStop(1, 'Rose Glint', '#FFE4E6', 'hsl(353, 100%, 95%)', 'rgb(255, 228, 230)', 0.88, 17.6),
      makeStop(2, 'Radiant Coral Rose', '#FDA4AF', 'hsl(351, 95%, 82%)', 'rgb(253, 164, 175)', 0.70, 14.0),
      makeStop(3, 'Vivid Ruby Red', '#E11D48', 'hsl(347, 77%, 50%)', 'rgb(225, 29, 72)', 0.45, 9.0),
      makeStop(4, 'Executive Crimson', '#BE123C', 'hsl(343, 82%, 41%)', 'rgb(190, 18, 60)', 0.32, 6.4),
      makeStop(5, 'Deep Wine Core', '#9F1239', 'hsl(343, 79%, 35%)', 'rgb(159, 18, 57)', 0.22, 4.4),
      makeStop(6, 'Burgundy Border', '#881337', 'hsl(343, 75%, 30%)', 'rgb(136, 19, 55)', 0.16, 3.2),
      makeStop(7, 'Dark Claret Border', '#4C0519', 'hsl(344, 87%, 16%)', 'rgb(76, 5, 25)', 0.10, 2.0),
      makeStop(8, 'Smoked Wine Card', '#230C12', 'hsl(344, 49%, 9%)', 'rgb(35, 12, 18)', 0.06, 1.2),
      makeStop(9, 'Wine Obsidian Abyss', '#17080C', 'hsl(344, 50%, 6%)', 'rgb(23, 8, 12)', 0.04, 1.0),
    ],
  },
  'nord-frost': {
    id: 'nord-frost',
    name: 'Arctic Precision',
    description: 'Glacial navy slate, arctic sky blue, developer platforms & cloud tools.',
    isDark: true,
    canvasBg: '#0E1726',
    canvasBgHsl: '218 45% 10%',
    bgHsl: '218 45% 10%',
    textColor: '#F0F9FF',
    textHsl: '204 100% 97%',
    subtextColor: '#7DD3FC',
    subtextHsl: '199 89% 74%',
    cardBg: 'rgba(20, 32, 54, 0.88)',
    cardBgHsl: '219 46% 15%',
    cardBorder: 'rgba(14, 165, 233, 0.35)',
    cardBorderHsl: '199 89% 48%',
    accentColor: '#0EA5E9',
    accentHsl: '199 89% 48%',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      makeStop(0, 'Glacial Frost White', '#F0F9FF', 'hsl(204, 100%, 97%)', 'rgb(240, 249, 255)', 0.98, 19.6),
      makeStop(1, 'Arctic Sky Mist', '#E0F2FE', 'hsl(204, 94%, 94%)', 'rgb(224, 242, 254)', 0.88, 17.6),
      makeStop(2, 'Glacial Cyan Glint', '#7DD3FC', 'hsl(199, 89%, 74%)', 'rgb(125, 211, 252)', 0.70, 14.0),
      makeStop(3, 'Arctic Sky Blue', '#0EA5E9', 'hsl(199, 89%, 48%)', 'rgb(14, 165, 233)', 0.48, 9.6),
      makeStop(4, 'Nordic Deep Azure', '#0284C7', 'hsl(201, 96%, 39%)', 'rgb(2, 132, 199)', 0.35, 7.0),
      makeStop(5, 'Deep Fiord Blue', '#0369A1', 'hsl(202, 80%, 32%)', 'rgb(3, 105, 161)', 0.25, 5.0),
      makeStop(6, 'Glacial Slate Border', '#075985', 'hsl(201, 90%, 27%)', 'rgb(7, 89, 133)', 0.18, 3.6),
      makeStop(7, 'Arctic Trench Border', '#0C4A6E', 'hsl(202, 80%, 24%)', 'rgb(12, 74, 110)', 0.12, 2.4),
      makeStop(8, 'Glacial Navy Card', '#142036', 'hsl(219, 46%, 15%)', 'rgb(20, 32, 54)', 0.08, 1.6),
      makeStop(9, 'Glacial Navy Abyss', '#0E1726', 'hsl(218, 45%, 10%)', 'rgb(14, 23, 38)', 0.05, 1.0),
    ],
  },
  'bright-gold': {
    id: 'bright-gold',
    name: 'Prestige Executive Keynote',
    description: 'Obsidian midnight canvas, 24k luminous gold typography, executive boardrooms.',
    isDark: true,
    canvasBg: '#0B0E14',
    canvasBgHsl: '222 47% 7%',
    bgHsl: '222 47% 7%',
    textColor: '#FFF8E7',
    textHsl: '45 90% 96%',
    subtextColor: '#A3A8B8',
    subtextHsl: '215 20% 65%',
    cardBg: 'rgba(18, 24, 38, 0.88)',
    cardBgHsl: '222 45% 12%',
    cardBorder: 'rgba(234, 179, 8, 0.35)',
    cardBorderHsl: '45 80% 40%',
    accentColor: '#EAB308',
    accent: '#EAB308',
    accentHsl: '45 96% 56%',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      makeStop(0, 'Pure Gold Aura', '#FFFDF0', 'hsl(45, 100%, 97%)', 'rgb(255, 253, 240)', 0.98, 17.8),
      makeStop(1, 'Champagne Glint', '#FEF9D9', 'hsl(45, 95%, 90%)', 'rgb(254, 249, 217)', 0.91, 16.5),
      makeStop(2, 'Pale Gold Foil', '#FDEB9B', 'hsl(44, 92%, 80%)', 'rgb(253, 235, 155)', 0.79, 14.3),
      makeStop(3, 'Soft Amber Glow', '#FBD85E', 'hsl(43, 89%, 70%)', 'rgb(251, 216, 94)', 0.67, 12.1),
      makeStop(4, 'Warm Marigold', '#FAC82A', 'hsl(44, 92%, 62%)', 'rgb(250, 200, 42)', 0.58, 10.5),
      makeStop(5, 'Sovereign Gold', '#EAB308', 'hsl(45, 96%, 56%)', 'rgb(234, 179, 8)', 0.51, 9.2),
      makeStop(6, 'Burnished Ochre', '#CA9206', 'hsl(42, 90%, 48%)', 'rgb(202, 146, 6)', 0.40, 7.2),
      makeStop(7, 'Antique Bronze', '#9B6805', 'hsl(38, 85%, 38%)', 'rgb(155, 104, 5)', 0.28, 5.1),
      makeStop(8, 'Deep Gold Shadow', '#633E03', 'hsl(32, 75%, 24%)', 'rgb(99, 62, 3)', 0.16, 2.9),
      makeStop(9, 'Obsidian Ink', '#0B0E14', 'hsl(222, 47%, 7%)', 'rgb(11, 14, 20)', 0.05, 1.0),
    ],
  },
  'noir-gold': {
    id: 'noir-gold',
    name: 'Minimalist Matte & Gold',
    description: 'Matte black carbon, brushed champagne gold rules, luxury boutique pitches.',
    isDark: true,
    canvasBg: '#080808',
    canvasBgHsl: '0 0% 3%',
    bgHsl: '0 0% 3%',
    textColor: '#F5F3EF',
    textHsl: '40 20% 95%',
    subtextColor: '#8C8984',
    subtextHsl: '40 5% 53%',
    cardBg: 'rgba(20, 20, 20, 0.90)',
    cardBgHsl: '0 0% 8%',
    cardBorder: 'rgba(212, 175, 55, 0.28)',
    cardBorderHsl: '43 65% 52%',
    accentColor: '#D4AF37',
    accent: '#D4AF37',
    accentHsl: '43 65% 52%',
    dotMatrix: false,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      makeStop(0, 'Ivory Highlight', '#FAF8F5', 'hsl(40, 30%, 97%)', 'rgb(250, 248, 245)', 0.97, 19.4),
      makeStop(1, 'Champagne Mist', '#F0E9DC', 'hsl(42, 35%, 88%)', 'rgb(240, 233, 220)', 0.86, 17.2),
      makeStop(2, 'Brushed Champagne', '#E3D5BD', 'hsl(43, 45%, 76%)', 'rgb(227, 213, 189)', 0.72, 14.4),
      makeStop(3, 'Satin Brass', '#D9C191', 'hsl(43, 55%, 65%)', 'rgb(217, 193, 145)', 0.60, 12.0),
      makeStop(4, 'Polished Gold', '#D6B56E', 'hsl(43, 62%, 58%)', 'rgb(214, 181, 110)', 0.52, 10.4),
      makeStop(5, 'Classic Gold', '#D4AF37', 'hsl(43, 65%, 52%)', 'rgb(212, 175, 55)', 0.46, 9.2),
      makeStop(6, 'Raw Umber', '#A68233', 'hsl(38, 55%, 42%)', 'rgb(166, 130, 51)', 0.34, 6.8),
      makeStop(7, 'Deep Sepia Tint', '#6E5320', 'hsl(35, 45%, 30%)', 'rgb(110, 83, 32)', 0.21, 4.2),
      makeStop(8, 'Smoked Charcoal', '#292929', 'hsl(0, 0%, 16%)', 'rgb(41, 41, 41)', 0.12, 2.4),
      makeStop(9, 'Matte Obsidian', '#080808', 'hsl(0, 0%, 3%)', 'rgb(8, 8, 8)', 0.04, 1.0),
    ],
  },
  'monokai': {
    id: 'monokai',
    name: 'Pro Code High-Contrast',
    description: 'Charcoal graphite canvas with vibrant lime & electric amber syntax.',
    isDark: true,
    canvasBg: '#272822',
    canvasBgHsl: '70 8% 15%',
    bgHsl: '70 8% 15%',
    textColor: '#F8F8F2',
    textHsl: '60 30% 96%',
    subtextColor: '#75715E',
    subtextHsl: '54 11% 41%',
    cardBg: 'rgba(45, 46, 39, 0.88)',
    cardBgHsl: '70 8% 21%',
    cardBorder: 'rgba(166, 226, 46, 0.35)',
    cardBorderHsl: '80 76% 53%',
    accentColor: '#A6E22E',
    accent: '#A6E22E',
    accentHsl: '80 76% 53%',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    stops: [
      makeStop(0, 'Pure Sand White', '#F8F8F2', 'hsl(60, 30%, 96%)', 'rgb(248, 248, 242)', 0.96, 14.8),
      makeStop(1, 'Neon Lime', '#A6E22E', 'hsl(80, 76%, 53%)', 'rgb(166, 226, 46)', 0.68, 10.5),
      makeStop(2, 'Monokai Amber', '#E6DB74', 'hsl(54, 70%, 68%)', 'rgb(230, 219, 116)', 0.74, 11.4),
      makeStop(3, 'Monokai Pink', '#F92672', 'hsl(348, 83%, 58%)', 'rgb(249, 38, 114)', 0.44, 6.8),
      makeStop(4, 'Monokai Orange', '#FD971F', 'hsl(32, 98%, 56%)', 'rgb(253, 151, 31)', 0.54, 8.3),
      makeStop(5, 'Monokai Cyan', '#66D9EF', 'hsl(188, 78%, 57%)', 'rgb(102, 217, 239)', 0.63, 9.7),
      makeStop(6, 'Muted Moss Comment', '#75715E', 'hsl(54, 11%, 41%)', 'rgb(117, 113, 94)', 0.28, 4.3),
      makeStop(7, 'Elevated Olive Slate', '#3E3D32', 'hsl(70, 8%, 26%)', 'rgb(62, 61, 50)', 0.16, 2.5),
      makeStop(8, 'Surface Charcoal', '#32332A', 'hsl(70, 8%, 20%)', 'rgb(50, 51, 42)', 0.10, 1.5),
      makeStop(9, 'Deep Monokai Black', '#272822', 'hsl(70, 8%, 15%)', 'rgb(39, 40, 34)', 0.065, 1.0),
    ],
  },
};

export const THEME_PALETTES: Record<string, ThemePalette> = {
  ...CANONICAL_THEMES,
};

export const LEGACY_ALIASES: Record<string, string> = {
  'navy-blue': 'midnight-luxe',
  'vscode-dark': 'midnight-luxe',
  'dracula': 'wp-exam-purple',
  'github-light': 'white-brand',
  'paper-ink': 'paper-editorial',
  'macos-sonoma': 'nord-frost',
  'windows-11': 'cyber-neon',
};

Object.entries(LEGACY_ALIASES).forEach(([legacyId, targetId]) => {
  const targetTheme = THEME_PALETTES[targetId];
  const hasTarget = Boolean(targetTheme);
  if (hasTarget) {
    THEME_PALETTES[legacyId] = {
      ...targetTheme,
      id: legacyId,
    };
  }
});

/**
 * Resolves a theme ID deterministically against canonical palettes and legacy aliases.
 */
export function resolveTheme(themeId = 'white-brand'): ThemePalette {
  const canonicalId = LEGACY_ALIASES[themeId] || themeId;
  return THEME_PALETTES[canonicalId] || THEME_PALETTES[themeId] || THEME_PALETTES['white-brand'];
}

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
  startStep = 4,
  endStep = 8
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
  const isLight = isBooleanTrue(isLightOrWhiteText);
  if (isLight) {
    return 'rgb(0 0 0) 1px 0.7px 0px';
  }
  return 'rgb(255 255 255) 1px 0.7px 0px';
}

// lint-allow: file-size reason="authentic 10-theme corporate palette dictionary" max=450
import { GradientStop, ThemePalette } from '../types/presentation';
import { isBooleanTrue } from '../utils/booleanGuards';

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

export const THEME_PALETTES: Record<string, ThemePalette> = {
  'bright-gold': {
    id: 'bright-gold',
    name: 'Bright Gold (Executive Keynote)',
    description: 'High-prestige executive boardroom presentation with radiant 24-karat gold typography.',
    isDark: true,
    canvasBg: '#0B0E14',
    textColor: '#FFF8E7',
    subtextColor: '#A3A8B8',
    cardBg: 'rgba(18, 24, 38, 0.88)',
    cardBorder: 'rgba(234, 179, 8, 0.35)',
    accentColor: '#EAB308',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '45 96% 56%',
    bgHsl: '222 47% 7%',
    textHsl: '45 90% 96%',
    cardBgHsl: '222 45% 12%',
    subtextHsl: '215 20% 65%',
    cardBorderHsl: '45 80% 40%',
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
      makeStop(9, 'Obsidian Abyss', '#0B0E14', 'hsl(222, 47%, 7%)', 'rgb(11, 14, 20)', 0.05, 1.0),
    ],
  },
  'noir-gold': {
    id: 'noir-gold',
    name: 'Noir Gold (Matte Black & Brushed Champagne)',
    description: 'Understated luxury matte black canvas with brushed champagne gold rules and ivory typography.',
    isDark: true,
    canvasBg: '#080808',
    textColor: '#F5F3EF',
    subtextColor: '#8C8984',
    cardBg: 'rgba(20, 20, 20, 0.90)',
    cardBorder: 'rgba(212, 175, 55, 0.28)',
    accentColor: '#D4AF37',
    dotMatrix: false,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '43 65% 52%',
    bgHsl: '0 0% 3%',
    textHsl: '40 20% 95%',
    cardBgHsl: '0 0% 8%',
    subtextHsl: '40 5% 53%',
    cardBorderHsl: '43 65% 52%',
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
  'vscode-dark': {
    id: 'vscode-dark',
    name: 'VS Code Dark (Developer Slate & Studio Blue)',
    description: 'Modern developer workstation slate with Microsoft Visual Studio Code studio blue accents.',
    isDark: true,
    canvasBg: '#1E1E1E',
    textColor: '#D4D4D4',
    subtextColor: '#858585',
    cardBg: 'rgba(37, 37, 38, 0.88)',
    cardBorder: 'rgba(0, 122, 204, 0.40)',
    accentColor: '#007ACC',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '204 100% 40%',
    bgHsl: '0 0% 12%',
    textHsl: '0 0% 83%',
    cardBgHsl: '0 0% 15%',
    subtextHsl: '0 0% 52%',
    cardBorderHsl: '204 100% 40%',
    stops: [
      makeStop(0, 'Console White', '#FAFAFA', 'hsl(0, 0%, 98%)', 'rgb(250, 250, 250)', 0.98, 14.0),
      makeStop(1, 'Light Gray Text', '#E0E0E0', 'hsl(0, 0%, 88%)', 'rgb(224, 224, 224)', 0.85, 12.1),
      makeStop(2, 'Electric Azure', '#80C7FF', 'hsl(204, 100%, 75%)', 'rgb(128, 199, 255)', 0.70, 10.0),
      makeStop(3, 'Studio Sky', '#3DABFF', 'hsl(204, 100%, 62%)', 'rgb(61, 171, 255)', 0.56, 8.0),
      makeStop(4, 'VSCode Blue', '#007ACC', 'hsl(204, 100%, 40%)', 'rgb(0, 122, 204)', 0.40, 5.7),
      makeStop(5, 'Deep Editor Blue', '#08589C', 'hsl(207, 90%, 32%)', 'rgb(8, 88, 156)', 0.28, 4.0),
      makeStop(6, 'Status Bar Blue', '#0C3E6E', 'hsl(210, 80%, 24%)', 'rgb(12, 62, 110)', 0.18, 2.5),
      makeStop(7, 'Panel Slate', '#383838', 'hsl(0, 0%, 22%)', 'rgb(56, 56, 56)', 0.14, 2.0),
      makeStop(8, 'Sidebar Dark', '#252526', 'hsl(0, 0%, 15%)', 'rgb(37, 37, 38)', 0.08, 1.2),
      makeStop(9, 'Editor Carbon', '#1E1E1E', 'hsl(0, 0%, 12%)', 'rgb(30, 30, 30)', 0.07, 1.0),
    ],
  },
  'dracula': {
    id: 'dracula',
    name: 'Dracula (Vampire Gothic Slate & Electric Purple)',
    description: 'High-contrast gothic developer slate featuring radioactive violet, hot pink, and cyan accents.',
    isDark: true,
    canvasBg: '#282A36',
    textColor: '#F8F8F2',
    subtextColor: '#6272A4',
    cardBg: 'rgba(52, 55, 70, 0.88)',
    cardBorder: 'rgba(189, 147, 249, 0.35)',
    accentColor: '#BD93F9',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '265 89% 78%',
    bgHsl: '231 15% 18%',
    textHsl: '60 30% 96%',
    cardBgHsl: '231 15% 24%',
    subtextHsl: '225 27% 51%',
    cardBorderHsl: '265 89% 78%',
    stops: [
      makeStop(0, 'Dracula Foreground', '#F8F8F2', 'hsl(60, 30%, 96%)', 'rgb(248, 248, 242)', 0.96, 13.7),
      makeStop(1, 'Glowing Cyan', '#8BE9FD', 'hsl(191, 97%, 77%)', 'rgb(139, 233, 253)', 0.82, 11.7),
      makeStop(2, 'Electric Purple', '#BD93F9', 'hsl(265, 89%, 78%)', 'rgb(189, 147, 249)', 0.71, 10.1),
      makeStop(3, 'Neon Pink', '#FF79C6', 'hsl(326, 100%, 74%)', 'rgb(255, 121, 198)', 0.62, 8.8),
      makeStop(4, 'Toxic Green', '#50FA7B', 'hsl(135, 94%, 65%)', 'rgb(80, 250, 123)', 0.75, 10.7),
      makeStop(5, 'Solar Yellow', '#F1FA8C', 'hsl(65, 92%, 76%)', 'rgb(241, 250, 140)', 0.88, 12.5),
      makeStop(6, 'Flame Orange', '#FFB86C', 'hsl(31, 100%, 71%)', 'rgb(255, 184, 108)', 0.68, 9.7),
      makeStop(7, 'Comment Blue', '#6272A4', 'hsl(225, 27%, 51%)', 'rgb(98, 114, 164)', 0.38, 5.4),
      makeStop(8, 'Current Line Gray', '#44475A', 'hsl(231, 15%, 28%)', 'rgb(68, 71, 90)', 0.16, 2.3),
      makeStop(9, 'Dracula Abyss', '#282A36', 'hsl(231, 15%, 18%)', 'rgb(40, 42, 54)', 0.07, 1.0),
    ],
  },
  'monokai': {
    id: 'monokai',
    name: 'Monokai (High-Contrast Lime & Electric Amber)',
    description: 'Quintessential code editor theme with charcoal background, vibrant lime, and warm amber highlights.',
    isDark: true,
    canvasBg: '#272822',
    textColor: '#F8F8F2',
    subtextColor: '#75715E',
    cardBg: 'rgba(45, 46, 39, 0.88)',
    cardBorder: 'rgba(166, 226, 46, 0.35)',
    accentColor: '#A6E22E',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '80 76% 53%',
    bgHsl: '70 8% 15%',
    textHsl: '60 30% 96%',
    cardBgHsl: '70 8% 21%',
    subtextHsl: '54 11% 41%',
    cardBorderHsl: '80 76% 53%',
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
  'github-light': {
    id: 'github-light',
    name: 'GitHub Light (Pristine White & Azure)',
    description: 'Ultra-clean open-source documentation aesthetic with pure white canvas and GitHub blue badges.',
    isDark: false,
    canvasBg: '#FFFFFF',
    textColor: '#1F2328',
    subtextColor: '#656D76',
    cardBg: 'rgba(246, 248, 250, 0.92)',
    cardBorder: '#D0D7DE',
    accentColor: '#0969DA',
    dotMatrix: false,
    headerShadow: 'rgb(255 255 255) 1px 0.7px 0px',
    accentHsl: '212 92% 45%',
    bgHsl: '0 0% 100%',
    textHsl: '215 13% 14%',
    cardBgHsl: '210 18% 97%',
    subtextHsl: '212 8% 43%',
    cardBorderHsl: '210 18% 85%',
    stops: [
      makeStop(0, 'Soft Azure Wash', '#EFF6FF', 'hsl(212, 92%, 96%)', 'rgb(239, 246, 255)', 0.95, 1.05),
      makeStop(1, 'Sub-Surface Mist', '#F6F8FA', 'hsl(210, 18%, 97%)', 'rgb(246, 248, 250)', 0.94, 1.06),
      makeStop(2, 'Border Rule Gray', '#D0D7DE', 'hsl(210, 18%, 85%)', 'rgb(208, 215, 222)', 0.80, 1.25),
      makeStop(3, 'Inactive Pill Tint', '#93C5FD', 'hsl(212, 80%, 75%)', 'rgb(147, 197, 253)', 0.68, 1.47),
      makeStop(4, 'Interactive Sky', '#3B82F6', 'hsl(212, 90%, 60%)', 'rgb(59, 130, 246)', 0.48, 2.08),
      makeStop(5, 'GitHub Azure', '#0969DA', 'hsl(212, 92%, 45%)', 'rgb(9, 105, 218)', 0.34, 2.94),
      makeStop(6, 'Deep Git Blue', '#0A4CA3', 'hsl(215, 88%, 36%)', 'rgb(10, 76, 163)', 0.24, 4.16),
      makeStop(7, 'Muted Charcoal Subtext', '#656D76', 'hsl(212, 8%, 43%)', 'rgb(101, 109, 118)', 0.22, 4.54),
      makeStop(8, 'Heavy Charcoal Border', '#363C44', 'hsl(215, 13%, 25%)', 'rgb(54, 60, 68)', 0.12, 8.33),
      makeStop(9, 'Deep Slate Ink', '#1F2328', 'hsl(215, 13%, 14%)', 'rgb(31, 35, 40)', 0.06, 16.6),
    ],
  },
  'paper-ink': {
    id: 'paper-ink',
    name: 'Paper Ink (Warm Cream & Classical Prussian Navy)',
    description: 'Intellectual whitepaper warm parchment canvas paired with classical Prussian fountain pen navy ink.',
    isDark: false,
    canvasBg: '#FAF7F0',
    textColor: '#0A1128',
    subtextColor: '#383838',
    cardBg: 'rgba(245, 240, 230, 0.92)',
    cardBorder: '#E5DAC8',
    accentColor: '#1D4ED8',
    dotMatrix: false,
    headerShadow: 'rgb(255 255 255) 1px 0.7px 0px',
    accentHsl: '224 76% 48%',
    bgHsl: '42 50% 96%',
    textHsl: '226 60% 10%',
    cardBgHsl: '39 43% 93%',
    subtextHsl: '0 0% 22%',
    cardBorderHsl: '38 35% 84%',
    stops: [
      makeStop(0, 'Archival Cream', '#FAF7F0', 'hsl(42, 50%, 96%)', 'rgb(250, 247, 240)', 0.96, 1.00),
      makeStop(1, 'Warm Parchment', '#F5F0E6', 'hsl(39, 43%, 93%)', 'rgb(245, 240, 230)', 0.93, 1.03),
      makeStop(2, 'Flax Border', '#E5DAC8', 'hsl(38, 35%, 84%)', 'rgb(229, 218, 200)', 0.82, 1.17),
      makeStop(3, 'Muted Raw Umber', '#C8B69A', 'hsl(38, 30%, 70%)', 'rgb(200, 182, 154)', 0.65, 1.47),
      makeStop(4, 'Slate Ink Blue', '#6488CB', 'hsl(215, 50%, 60%)', 'rgb(100, 136, 203)', 0.48, 2.00),
      makeStop(5, 'Royal Ink', '#1D4ED8', 'hsl(224, 76%, 48%)', 'rgb(29, 78, 216)', 0.35, 2.74),
      makeStop(6, 'Classical Navy', '#1B3DA8', 'hsl(224, 70%, 36%)', 'rgb(27, 61, 168)', 0.22, 4.36),
      makeStop(7, 'Prussian Midnight', '#152A68', 'hsl(224, 64%, 24%)', 'rgb(21, 42, 104)', 0.14, 6.85),
      makeStop(8, 'Charcoal Quill', '#383838', 'hsl(0, 0%, 22%)', 'rgb(56, 56, 56)', 0.12, 8.00),
      makeStop(9, 'Fountain Ink Abyss', '#0A1128', 'hsl(226, 60%, 10%)', 'rgb(10, 17, 40)', 0.05, 19.2),
    ],
  },
  'macos-sonoma': {
    id: 'macos-sonoma',
    name: 'macOS Sonoma (Cupertino Dusky Glass & Radiant Blue)',
    description: 'Apple macOS Cupertino dusky smoked acrylic canvas with deep frosted blur and radiant blue accents.',
    isDark: true,
    canvasBg: '#12151D',
    textColor: '#F5F7FA',
    subtextColor: '#8E96A4',
    cardBg: 'rgba(28, 33, 46, 0.85)',
    cardBorder: 'rgba(94, 158, 255, 0.32)',
    accentColor: '#5E9EFF',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '216 100% 68%',
    bgHsl: '225 24% 9%',
    textHsl: '210 20% 97%',
    cardBgHsl: '223 24% 15%',
    subtextHsl: '218 11% 60%',
    cardBorderHsl: '216 100% 68%',
    stops: [
      makeStop(0, 'Apple Luminous Snow', '#F5F7FA', 'hsl(210, 20%, 97%)', 'rgb(245, 247, 250)', 0.97, 16.1),
      makeStop(1, 'Ice Blue Sheen', '#D2E4FC', 'hsl(214, 70%, 88%)', 'rgb(210, 228, 252)', 0.84, 14.0),
      makeStop(2, 'Sonoma Sky', '#5E9EFF', 'hsl(216, 100%, 68%)', 'rgb(94, 158, 255)', 0.66, 11.0),
      makeStop(3, 'Dynamic Violet Accent', '#9D6BFC', 'hsl(265, 85%, 68%)', 'rgb(157, 107, 252)', 0.54, 9.0),
      makeStop(4, 'Cupertino Royal', '#2669FC', 'hsl(220, 90%, 55%)', 'rgb(38, 105, 252)', 0.42, 7.0),
      makeStop(5, 'Deep macOS Blue', '#1547C2', 'hsl(224, 80%, 42%)', 'rgb(21, 71, 194)', 0.28, 4.6),
      makeStop(6, 'Twilight Glass Border', '#39476B', 'hsl(220, 30%, 32%)', 'rgb(57, 71, 107)', 0.18, 3.0),
      makeStop(7, 'Smoked Acrylic Surface', '#272F41', 'hsl(223, 24%, 20%)', 'rgb(39, 47, 65)', 0.11, 1.8),
      makeStop(8, 'Space Gray Shadow', '#1C212E', 'hsl(223, 24%, 15%)', 'rgb(28, 33, 46)', 0.08, 1.3),
      makeStop(9, 'Dusky Sonoma Night', '#12151D', 'hsl(225, 24%, 9%)', 'rgb(18, 21, 29)', 0.06, 1.0),
    ],
  },
  'windows-11': {
    id: 'windows-11',
    name: 'Windows 11 (Fluent Design Mica & Electric Sky)',
    description: 'Microsoft Fluent Design System dark Mica slate canvas with signature Windows 11 electric cyan lighting.',
    isDark: true,
    canvasBg: '#1A1D24',
    textColor: '#FFFFFF',
    subtextColor: '#9FA4B2',
    cardBg: 'rgba(36, 41, 51, 0.85)',
    cardBorder: 'rgba(96, 205, 255, 0.35)',
    accentColor: '#60CDFF',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '199 100% 69%',
    bgHsl: '220 16% 12%',
    textHsl: '0 0% 100%',
    cardBgHsl: '220 17% 17%',
    subtextHsl: '223 11% 66%',
    cardBorderHsl: '199 100% 69%',
    stops: [
      makeStop(0, 'Fluent Pure White', '#FFFFFF', 'hsl(0, 0%, 100%)', 'rgb(255, 255, 255)', 1.00, 14.3),
      makeStop(1, 'Electric Mica Cyan', '#60CDFF', 'hsl(199, 100%, 69%)', 'rgb(96, 205, 255)', 0.78, 11.1),
      makeStop(2, 'Windows Fluent Blue', '#0084FF', 'hsl(206, 100%, 50%)', 'rgb(0, 132, 255)', 0.55, 7.8),
      makeStop(3, 'Deep Edge Blue', '#055BB3', 'hsl(210, 95%, 40%)', 'rgb(5, 91, 179)', 0.36, 5.1),
      makeStop(4, 'Slate Text Tint', '#9FA4B2', 'hsl(223, 11%, 66%)', 'rgb(159, 164, 178)', 0.50, 7.1),
      makeStop(5, 'Acrylic Border Rule', '#525A6B', 'hsl(220, 15%, 38%)', 'rgb(82, 90, 107)', 0.24, 3.4),
      makeStop(6, 'Elevated Mica Tile', '#333B49', 'hsl(220, 17%, 24%)', 'rgb(51, 59, 73)', 0.14, 2.0),
      makeStop(7, 'Base Acrylic Card', '#242933', 'hsl(220, 17%, 17%)', 'rgb(36, 41, 51)', 0.09, 1.3),
      makeStop(8, 'Window Chrome Frame', '#1F222A', 'hsl(220, 16%, 14%)', 'rgb(31, 34, 42)', 0.08, 1.1),
      makeStop(9, 'Deep Mica Slate', '#1A1D24', 'hsl(220, 16%, 12%)', 'rgb(26, 29, 36)', 0.07, 1.0),
    ],
  },
  'navy-blue': {
    id: 'navy-blue',
    name: 'Navy Blue (Deep Maritime Institutional & Electric Sapphire)',
    description: 'Sovereign institutional defense technology deep maritime navy canvas with electric sapphire blue accents.',
    isDark: true,
    canvasBg: '#050B18',
    textColor: '#F0F4FC',
    subtextColor: '#7E90B0',
    cardBg: 'rgba(12, 22, 44, 0.88)',
    cardBorder: 'rgba(59, 130, 246, 0.35)',
    accentColor: '#3B82F6',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '217 91% 60%',
    bgHsl: '222 66% 6%',
    textHsl: '220 60% 96%',
    cardBgHsl: '221 57% 11%',
    subtextHsl: '218 24% 59%',
    cardBorderHsl: '217 91% 60%',
    stops: [
      makeStop(0, 'Arctic Ice White', '#F0F4FC', 'hsl(220, 60%, 96%)', 'rgb(240, 244, 252)', 0.96, 19.2),
      makeStop(1, 'Radiant Sky Cyan', '#85CFFF', 'hsl(205, 90%, 75%)', 'rgb(133, 207, 255)', 0.78, 15.6),
      makeStop(2, 'Sapphire Lead', '#3B82F6', 'hsl(217, 91%, 60%)', 'rgb(59, 130, 246)', 0.52, 10.4),
      makeStop(3, 'Sovereign Blue', '#1D5DFC', 'hsl(222, 84%, 50%)', 'rgb(29, 93, 252)', 0.38, 7.6),
      makeStop(4, 'Deep Maritime Blue', '#133FA8', 'hsl(224, 80%, 38%)', 'rgb(19, 63, 168)', 0.24, 4.8),
      makeStop(5, 'Admiral Navy', '#0E286E', 'hsl(225, 75%, 26%)', 'rgb(14, 40, 110)', 0.15, 3.0),
      makeStop(6, 'Muted Maritime Slate', '#7E90B0', 'hsl(218, 24%, 59%)', 'rgb(126, 144, 176)', 0.40, 8.0),
      makeStop(7, 'Trench Blue Card Border', '#1F3255', 'hsl(221, 45%, 22%)', 'rgb(31, 50, 85)', 0.10, 2.0),
      makeStop(8, 'Sub-Surface Naval Card', '#0C162C', 'hsl(221, 57%, 11%)', 'rgb(12, 22, 44)', 0.07, 1.4),
      makeStop(9, 'Deep Maritime Abyss', '#050B18', 'hsl(222, 66%, 6%)', 'rgb(5, 11, 24)', 0.05, 1.0),
    ],
  },
};

export const LEGACY_ALIASES: Record<string, string> = {
  'white-brand': 'github-light',
  'paper-editorial': 'paper-ink',
  'true-dark': 'bright-gold',
  'emerald-growth': 'monokai',
  'wp-exam-purple': 'dracula',
  'midnight-luxe': 'vscode-dark',
  'sunset-horizon': 'dracula',
  'cyber-neon': 'windows-11',
  'crimson-executive': 'noir-gold',
  'nord-frost': 'macos-sonoma',
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
export function resolveTheme(themeId = 'bright-gold'): ThemePalette {
  const canonicalId = LEGACY_ALIASES[themeId] || themeId;
  return THEME_PALETTES[canonicalId] || THEME_PALETTES[themeId] || THEME_PALETTES['bright-gold'];
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
  themeId = 'bright-gold',
  startStep = 4,
  endStep = 8
): Array<{ char: string; hex: string; hsl: string }> {
  const palette = THEME_PALETTES[themeId] || THEME_PALETTES['bright-gold'];
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

// lint-allow: file-size reason="expanded 10-theme palette dictionary" max=420
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
  'bright-gold': {
    id: 'bright-gold',
    name: 'Bright Gold (Riseup Signature)',
    description: 'Riseup signature high-contrast theme with vivid amber gold on obsidian black.',
    isDark: true,
    canvasBg: '#0D0D0D',
    textColor: '#FFF1D6',
    subtextColor: '#D4AF37',
    cardBg: 'rgba(26, 26, 26, 0.85)',
    cardBorder: 'rgba(243, 165, 2, 0.35)',
    accentColor: '#F3A502',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '41 98% 48%',
    bgHsl: '0 0% 5%',
    textHsl: '40 100% 92%',
    cardBgHsl: '0 0% 10%',
    subtextHsl: '46 65% 52%',
    cardBorderHsl: '41 98% 48%',
    stops: [
      { step: 0, label: 'Base Cream', hsl: 'hsl(48, 100%, 96%)', rgb: 'rgb(255, 251, 235)', hex: '#FFFBEB', luma: 0.95, contrastOnWhite: 1.05 },
      { step: 1, label: 'Soft Cream', hsl: 'hsl(48, 96%, 89%)', rgb: 'rgb(254, 243, 199)', hex: '#FEF3C7', luma: 0.90, contrastOnWhite: 1.10 },
      { step: 2, label: 'Muted Ochre', hsl: 'hsl(48, 95%, 76%)', rgb: 'rgb(253, 230, 138)', hex: '#FDE68A', luma: 0.81, contrastOnWhite: 1.22 },
      { step: 3, label: 'Amber Glint', hsl: 'hsl(45, 96%, 64%)', rgb: 'rgb(252, 211, 77)', hex: '#FCD34D', luma: 0.69, contrastOnWhite: 1.42 },
      { step: 4, label: 'Light Gold', hsl: 'hsl(43, 96%, 56%)', rgb: 'rgb(251, 191, 36)', hex: '#FBBF24', luma: 0.58, contrastOnWhite: 1.67 },
      { step: 5, label: 'Primary Amber', hsl: 'hsl(38, 92%, 50%)', rgb: 'rgb(245, 158, 11)', hex: '#F59E0B', luma: 0.46, contrastOnWhite: 2.06 },
      { step: 6, label: 'Vivid Gold', hsl: 'hsl(41, 98%, 48%)', rgb: 'rgb(243, 165, 2)', hex: '#F3A502', luma: 0.46, contrastOnWhite: 2.06 },
      { step: 7, label: 'Deep Gold', hsl: 'hsl(36, 95%, 44%)', rgb: 'rgb(217, 119, 6)', hex: '#D97706', luma: 0.30, contrastOnWhite: 3.00 },
      { step: 8, label: 'Dark Bronze', hsl: 'hsl(22, 82%, 31%)', rgb: 'rgb(146, 64, 14)', hex: '#92400E', luma: 0.12, contrastOnWhite: 6.18 },
      { step: 9, label: 'Obsidian Ink', hsl: 'hsl(0, 0%, 5%)', rgb: 'rgb(13, 13, 13)', hex: '#0D0D0D', luma: 0.004, contrastOnWhite: 19.44 },
    ],
  },
  'noir-gold': {
    id: 'noir-gold',
    name: 'Noir Gold (Muted Editorial)',
    description: 'Refined muted classic gold on noir obsidian black for luxury editorial presentations.',
    isDark: true,
    canvasBg: '#0D0D0D',
    textColor: '#F5F5F0',
    subtextColor: '#C9A84C',
    cardBg: 'rgba(22, 22, 22, 0.85)',
    cardBorder: 'rgba(201, 168, 76, 0.35)',
    accentColor: '#C9A84C',
    dotMatrix: false,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '44 54% 54%',
    bgHsl: '0 0% 5%',
    textHsl: '60 14% 95%',
    cardBgHsl: '0 0% 9%',
    subtextHsl: '44 54% 54%',
    cardBorderHsl: '44 54% 54%',
    stops: [
      { step: 0, label: 'Warm Ivory', hsl: 'hsl(42, 50%, 96%)', rgb: 'rgb(250, 247, 240)', hex: '#FAF7F0', luma: 0.94, contrastOnWhite: 1.06 },
      { step: 1, label: 'Antique Pale', hsl: 'hsl(42, 45%, 89%)', rgb: 'rgb(240, 232, 213)', hex: '#F0E8D5', luma: 0.82, contrastOnWhite: 1.21 },
      { step: 2, label: 'Vintage Cream', hsl: 'hsl(42, 44%, 81%)', rgb: 'rgb(229, 215, 183)', hex: '#E5D7B7', luma: 0.70, contrastOnWhite: 1.40 },
      { step: 3, label: 'Soft Gold', hsl: 'hsl(43, 43%, 71%)', rgb: 'rgb(212, 194, 148)', hex: '#D4C294', luma: 0.56, contrastOnWhite: 1.72 },
      { step: 4, label: 'Classic Muted Gold', hsl: 'hsl(44, 54%, 54%)', rgb: 'rgb(201, 168, 76)', hex: '#C9A84C', luma: 0.42, contrastOnWhite: 2.23 },
      { step: 5, label: 'Antique Ochre', hsl: 'hsl(43, 53%, 47%)', rgb: 'rgb(184, 147, 57)', hex: '#B89339', luma: 0.32, contrastOnWhite: 2.84 },
      { step: 6, label: 'Burnished Bronze', hsl: 'hsl(42, 58%, 37%)', rgb: 'rgb(150, 116, 40)', hex: '#967428', luma: 0.20, contrastOnWhite: 4.20 },
      { step: 7, label: 'Deep Sepia', hsl: 'hsl(39, 59%, 27%)', rgb: 'rgb(110, 82, 28)', hex: '#6E521C', luma: 0.10, contrastOnWhite: 7.00 },
      { step: 8, label: 'Noir Shadow', hsl: 'hsl(38, 44%, 15%)', rgb: 'rgb(54, 42, 21)', hex: '#362A15', luma: 0.03, contrastOnWhite: 13.12 },
      { step: 9, label: 'Noir Black', hsl: 'hsl(0, 0%, 5%)', rgb: 'rgb(13, 13, 13)', hex: '#0D0D0D', luma: 0.004, contrastOnWhite: 19.44 },
    ],
  },
  'vscode-dark': {
    id: 'vscode-dark',
    name: 'VSCode Dark (Editor Classic)',
    description: 'Developer editor classic with crisp azure accents on dark slate charcoal.',
    isDark: true,
    canvasBg: '#1E1E1E',
    textColor: '#D4D4D4',
    subtextColor: '#858585',
    cardBg: 'rgba(37, 37, 38, 0.85)',
    cardBorder: 'rgba(0, 122, 204, 0.35)',
    accentColor: '#007ACC',
    dotMatrix: false,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '204 100% 40%',
    bgHsl: '0 0% 12%',
    textHsl: '0 0% 83%',
    cardBgHsl: '240 1% 15%',
    subtextHsl: '0 0% 52%',
    cardBorderHsl: '204 100% 40%',
    stops: [
      { step: 0, label: 'Ice Highlight', hsl: 'hsl(208, 100%, 97%)', rgb: 'rgb(240, 248, 255)', hex: '#F0F8FF', luma: 0.94, contrastOnWhite: 1.06 },
      { step: 1, label: 'Light Azure', hsl: 'hsl(201, 94%, 86%)', rgb: 'rgb(186, 230, 253)', hex: '#BAE6FD', luma: 0.76, contrastOnWhite: 1.30 },
      { step: 2, label: 'Sky Muted', hsl: 'hsl(199, 89%, 74%)', rgb: 'rgb(125, 211, 252)', hex: '#7DD3FC', luma: 0.60, contrastOnWhite: 1.62 },
      { step: 3, label: 'Azure Tint', hsl: 'hsl(199, 89%, 60%)', rgb: 'rgb(56, 189, 248)', hex: '#38BDF8', luma: 0.45, contrastOnWhite: 2.10 },
      { step: 4, label: 'VSCode Azure', hsl: 'hsl(204, 100%, 40%)', rgb: 'rgb(0, 122, 204)', hex: '#007ACC', luma: 0.19, contrastOnWhite: 4.38 },
      { step: 5, label: 'Deep Slate Blue', hsl: 'hsl(206, 100%, 31%)', rgb: 'rgb(0, 90, 158)', hex: '#005A9E', luma: 0.11, contrastOnWhite: 6.56 },
      { step: 6, label: 'Medium Charcoal', hsl: 'hsl(0, 0%, 31%)', rgb: 'rgb(78, 78, 78)', hex: '#4E4E4E', luma: 0.08, contrastOnWhite: 8.08 },
      { step: 7, label: 'Dark Panel Slate', hsl: 'hsl(0, 0%, 18%)', rgb: 'rgb(45, 45, 45)', hex: '#2D2D2D', luma: 0.03, contrastOnWhite: 13.12 },
      { step: 8, label: 'Editor Base', hsl: 'hsl(240, 1%, 15%)', rgb: 'rgb(37, 37, 38)', hex: '#252526', luma: 0.02, contrastOnWhite: 15.00 },
      { step: 9, label: 'Editor Dark', hsl: 'hsl(0, 0%, 12%)', rgb: 'rgb(30, 30, 30)', hex: '#1E1E1E', luma: 0.01, contrastOnWhite: 17.50 },
    ],
  },
  'dracula': {
    id: 'dracula',
    name: 'Dracula (Vampire Purple & Mint)',
    description: 'High-contrast gothic dark theme with electric purple, pink glow, and mint accents.',
    isDark: true,
    canvasBg: '#282A36',
    textColor: '#F8F8F2',
    subtextColor: '#6272A4',
    cardBg: 'rgba(40, 42, 54, 0.85)',
    cardBorder: 'rgba(189, 147, 249, 0.35)',
    accentColor: '#BD93F9',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '265 89% 78%',
    bgHsl: '231 15% 18%',
    textHsl: '60 30% 96%',
    cardBgHsl: '231 15% 18%',
    subtextHsl: '226 27% 51%',
    cardBorderHsl: '265 89% 78%',
    stops: [
      { step: 0, label: 'Mist Violet', hsl: 'hsl(60, 30%, 96%)', rgb: 'rgb(248, 248, 242)', hex: '#F8F8F2', luma: 0.93, contrastOnWhite: 1.07 },
      { step: 1, label: 'Dracula Mint', hsl: 'hsl(191, 97%, 77%)', rgb: 'rgb(139, 233, 253)', hex: '#8BE9FD', luma: 0.73, contrastOnWhite: 1.35 },
      { step: 2, label: 'Dracula Green', hsl: 'hsl(135, 94%, 65%)', rgb: 'rgb(80, 250, 123)', hex: '#50FA7B', luma: 0.72, contrastOnWhite: 1.36 },
      { step: 3, label: 'Dracula Pink', hsl: 'hsl(326, 100%, 74%)', rgb: 'rgb(255, 121, 198)', hex: '#FF79C6', luma: 0.43, contrastOnWhite: 2.19 },
      { step: 4, label: 'Vampire Purple', hsl: 'hsl(265, 89%, 78%)', rgb: 'rgb(189, 147, 249)', hex: '#BD93F9', luma: 0.44, contrastOnWhite: 2.14 },
      { step: 5, label: 'Dracula Orange', hsl: 'hsl(31, 100%, 71%)', rgb: 'rgb(255, 184, 108)', hex: '#FFB86C', luma: 0.58, contrastOnWhite: 1.67 },
      { step: 6, label: 'Comment Lavender', hsl: 'hsl(226, 27%, 51%)', rgb: 'rgb(98, 114, 164)', hex: '#6272A4', luma: 0.18, contrastOnWhite: 4.57 },
      { step: 7, label: 'Selection Gray', hsl: 'hsl(232, 14%, 31%)', rgb: 'rgb(68, 71, 90)', hex: '#44475A', luma: 0.07, contrastOnWhite: 8.75 },
      { step: 8, label: 'Current Line', hsl: 'hsl(236, 23%, 28%)', rgb: 'rgb(56, 58, 89)', hex: '#383A59', luma: 0.05, contrastOnWhite: 10.50 },
      { step: 9, label: 'Abyss Charcoal', hsl: 'hsl(231, 15%, 18%)', rgb: 'rgb(40, 42, 54)', hex: '#282A36', luma: 0.02, contrastOnWhite: 15.00 },
    ],
  },
  'monokai': {
    id: 'monokai',
    name: 'Monokai (Lime on Warm Black)',
    description: 'Legendary syntax theme with vibrant lime green and warm amber on warm dark charcoal.',
    isDark: true,
    canvasBg: '#272822',
    textColor: '#F8F8F2',
    subtextColor: '#FD971F',
    cardBg: 'rgba(39, 40, 34, 0.85)',
    cardBorder: 'rgba(166, 226, 46, 0.35)',
    accentColor: '#A6E22E',
    dotMatrix: true,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '80 77% 53%',
    bgHsl: '69 8% 15%',
    textHsl: '60 30% 96%',
    cardBgHsl: '69 8% 15%',
    subtextHsl: '32 98% 56%',
    cardBorderHsl: '80 77% 53%',
    stops: [
      { step: 0, label: 'Warm Glint', hsl: 'hsl(60, 33%, 98%)', rgb: 'rgb(252, 252, 250)', hex: '#FCFCFA', luma: 0.96, contrastOnWhite: 1.04 },
      { step: 1, label: 'Neon Lime', hsl: 'hsl(80, 77%, 53%)', rgb: 'rgb(166, 226, 46)', hex: '#A6E22E', luma: 0.60, contrastOnWhite: 1.62 },
      { step: 2, label: 'Monokai Yellow', hsl: 'hsl(54, 70%, 68%)', rgb: 'rgb(230, 219, 116)', hex: '#E6DB74', luma: 0.68, contrastOnWhite: 1.44 },
      { step: 3, label: 'Vivid Orange', hsl: 'hsl(32, 98%, 56%)', rgb: 'rgb(253, 151, 31)', hex: '#FD971F', luma: 0.46, contrastOnWhite: 2.06 },
      { step: 4, label: 'Bright Magenta', hsl: 'hsl(338, 95%, 56%)', rgb: 'rgb(249, 38, 114)', hex: '#F92672', luma: 0.24, contrastOnWhite: 3.62 },
      { step: 5, label: 'Sky Cyan', hsl: 'hsl(190, 81%, 67%)', rgb: 'rgb(102, 217, 239)', hex: '#66D9EF', luma: 0.58, contrastOnWhite: 1.67 },
      { step: 6, label: 'Warm Ash', hsl: 'hsl(50, 11%, 41%)', rgb: 'rgb(117, 113, 94)', hex: '#75715E', luma: 0.17, contrastOnWhite: 4.77 },
      { step: 7, label: 'Medium Charcoal', hsl: 'hsl(53, 9%, 26%)', rgb: 'rgb(73, 72, 62)', hex: '#49483E', luma: 0.07, contrastOnWhite: 8.75 },
      { step: 8, label: 'Deep Ink', hsl: 'hsl(53, 11%, 22%)', rgb: 'rgb(62, 61, 50)', hex: '#3E3D32', luma: 0.05, contrastOnWhite: 10.50 },
      { step: 9, label: 'Warm Black', hsl: 'hsl(69, 8%, 15%)', rgb: 'rgb(39, 40, 34)', hex: '#272822', luma: 0.02, contrastOnWhite: 15.00 },
    ],
  },
  'github-light': {
    id: 'github-light',
    name: 'GitHub Light (Daytime AA Blue)',
    description: 'Clean daytime editorial theme tuned for AA contrast with blue accents on pure white.',
    isDark: false,
    canvasBg: '#FFFFFF',
    textColor: '#24292F',
    subtextColor: '#57606A',
    cardBg: 'rgba(246, 248, 250, 0.95)',
    cardBorder: '#D0D7DE',
    accentColor: '#0969DA',
    dotMatrix: false,
    headerShadow: 'rgb(255 255 255) 1px 0.7px 0px',
    accentHsl: '212 92% 45%',
    bgHsl: '0 0% 100%',
    textHsl: '213 13% 16%',
    cardBgHsl: '210 29% 97%',
    subtextHsl: '212 10% 38%',
    cardBorderHsl: '210 18% 85%',
    stops: [
      { step: 0, label: 'Pure Snow', hsl: 'hsl(0, 0%, 100%)', rgb: 'rgb(255, 255, 255)', hex: '#FFFFFF', luma: 1.00, contrastOnWhite: 1.00 },
      { step: 1, label: 'Sub-Surface Tint', hsl: 'hsl(210, 29%, 97%)', rgb: 'rgb(246, 248, 250)', hex: '#F6F8FA', luma: 0.94, contrastOnWhite: 1.06 },
      { step: 2, label: 'Light Canvas', hsl: 'hsl(210, 20%, 93%)', rgb: 'rgb(234, 238, 242)', hex: '#EAEEF2', luma: 0.85, contrastOnWhite: 1.17 },
      { step: 3, label: 'Border Neutral', hsl: 'hsl(210, 18%, 85%)', rgb: 'rgb(208, 215, 222)', hex: '#D0D7DE', luma: 0.67, contrastOnWhite: 1.46 },
      { step: 4, label: 'Azure Tint', hsl: 'hsl(208, 100%, 66%)', rgb: 'rgb(84, 174, 255)', hex: '#54AEFF', luma: 0.46, contrastOnWhite: 2.06 },
      { step: 5, label: 'GitHub Blue', hsl: 'hsl(212, 92%, 45%)', rgb: 'rgb(9, 105, 218)', hex: '#0969DA', luma: 0.16, contrastOnWhite: 5.00 },
      { step: 6, label: 'Deep Blue', hsl: 'hsl(213, 94%, 35%)', rgb: 'rgb(5, 80, 174)', hex: '#0550AE', luma: 0.10, contrastOnWhite: 7.00 },
      { step: 7, label: 'Muted Text', hsl: 'hsl(212, 10%, 38%)', rgb: 'rgb(87, 96, 106)', hex: '#57606A', luma: 0.12, contrastOnWhite: 6.18 },
      { step: 8, label: 'Slate Dark', hsl: 'hsl(212, 11%, 22%)', rgb: 'rgb(50, 56, 63)', hex: '#32383F', luma: 0.04, contrastOnWhite: 11.67 },
      { step: 9, label: 'Espresso Ink', hsl: 'hsl(213, 13%, 16%)', rgb: 'rgb(36, 41, 47)', hex: '#24292F', luma: 0.02, contrastOnWhite: 15.00 },
    ],
  },
  'paper-ink': {
    id: 'paper-ink',
    name: 'Paper & Ink (Warm Cream & Espresso)',
    description: 'Print-friendly warm archival cream paper canvas with deep espresso typography.',
    isDark: false,
    canvasBg: '#FAF6EC',
    textColor: '#1F1A12',
    subtextColor: '#5C5243',
    cardBg: 'rgba(255, 253, 247, 0.92)',
    cardBorder: '#D8CEBE',
    accentColor: '#8A5A0E',
    dotMatrix: false,
    headerShadow: 'rgb(255 255 255) 1px 0.7px 0px',
    accentHsl: '37 81% 30%',
    bgHsl: '43 56% 95%',
    textHsl: '36 26% 10%',
    cardBgHsl: '45 100% 98%',
    subtextHsl: '37 16% 31%',
    cardBorderHsl: '36 26% 80%',
    stops: [
      { step: 0, label: 'Warm Archival', hsl: 'hsl(43, 56%, 95%)', rgb: 'rgb(250, 246, 236)', hex: '#FAF6EC', luma: 0.93, contrastOnWhite: 1.07 },
      { step: 1, label: 'Soft Cream', hsl: 'hsl(41, 53%, 91%)', rgb: 'rgb(245, 238, 219)', hex: '#F5EEDB', luma: 0.85, contrastOnWhite: 1.17 },
      { step: 2, label: 'Parchment Tan', hsl: 'hsl(40, 44%, 83%)', rgb: 'rgb(232, 219, 192)', hex: '#E8DBC0', luma: 0.72, contrastOnWhite: 1.36 },
      { step: 3, label: 'Cardboard Tint', hsl: 'hsl(36, 26%, 80%)', rgb: 'rgb(216, 206, 190)', hex: '#D8CEBE', luma: 0.63, contrastOnWhite: 1.54 },
      { step: 4, label: 'Warm Ochre', hsl: 'hsl(37, 56%, 49%)', rgb: 'rgb(194, 139, 56)', hex: '#C28B38', luma: 0.32, contrastOnWhite: 2.84 },
      { step: 5, label: 'Deep Amber', hsl: 'hsl(37, 81%, 30%)', rgb: 'rgb(138, 90, 14)', hex: '#8A5A0E', luma: 0.14, contrastOnWhite: 5.53 },
      { step: 6, label: 'Roasted Sienna', hsl: 'hsl(36, 88%, 23%)', rgb: 'rgb(110, 68, 7)', hex: '#6E4407', luma: 0.09, contrastOnWhite: 7.50 },
      { step: 7, label: 'Espresso Muted', hsl: 'hsl(37, 16%, 31%)', rgb: 'rgb(92, 82, 67)', hex: '#5C5243', luma: 0.09, contrastOnWhite: 7.50 },
      { step: 8, label: 'Dark Espresso', hsl: 'hsl(37, 23%, 18%)', rgb: 'rgb(56, 48, 35)', hex: '#383023', luma: 0.03, contrastOnWhite: 13.12 },
      { step: 9, label: 'Espresso Ink', hsl: 'hsl(36, 26%, 10%)', rgb: 'rgb(31, 26, 18)', hex: '#1F1A12', luma: 0.01, contrastOnWhite: 17.50 },
    ],
  },
  'macos-sonoma': {
    id: 'macos-sonoma',
    name: 'macOS Sonoma (Cupertino Blue & Graphite)',
    description: 'Modern macOS dark desktop aesthetic with Cupertino blue on graphite glass surfaces.',
    isDark: true,
    canvasBg: '#1E1E24',
    textColor: '#F5F5F7',
    subtextColor: '#A1A1A6',
    cardBg: 'rgba(40, 40, 48, 0.85)',
    cardBorder: 'rgba(0, 122, 255, 0.35)',
    accentColor: '#007AFF',
    dotMatrix: false,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '211 100% 50%',
    bgHsl: '240 9% 13%',
    textHsl: '240 6% 96%',
    cardBgHsl: '240 9% 17%',
    subtextHsl: '240 2% 64%',
    cardBorderHsl: '211 100% 50%',
    stops: [
      { step: 0, label: 'Glacier White', hsl: 'hsl(240, 6%, 96%)', rgb: 'rgb(245, 245, 247)', hex: '#F5F5F7', luma: 0.92, contrastOnWhite: 1.08 },
      { step: 1, label: 'Soft Platinum', hsl: 'hsl(240, 11%, 91%)', rgb: 'rgb(229, 229, 234)', hex: '#E5E5EA', luma: 0.78, contrastOnWhite: 1.27 },
      { step: 2, label: 'Muted Aluminum', hsl: 'hsl(240, 7%, 83%)', rgb: 'rgb(209, 209, 214)', hex: '#D1D1D6', luma: 0.64, contrastOnWhite: 1.52 },
      { step: 3, label: 'System Gray', hsl: 'hsl(240, 2%, 57%)', rgb: 'rgb(142, 142, 147)', hex: '#8E8E93', luma: 0.28, contrastOnWhite: 3.18 },
      { step: 4, label: 'Light Cupertino', hsl: 'hsl(211, 100%, 62%)', rgb: 'rgb(64, 156, 255)', hex: '#409CFF', luma: 0.38, contrastOnWhite: 2.44 },
      { step: 5, label: 'Cupertino Blue', hsl: 'hsl(211, 100%, 50%)', rgb: 'rgb(0, 122, 255)', hex: '#007AFF', luma: 0.21, contrastOnWhite: 4.04 },
      { step: 6, label: 'Deep Cobalt', hsl: 'hsl(211, 100%, 33%)', rgb: 'rgb(0, 81, 168)', hex: '#0051A8', luma: 0.09, contrastOnWhite: 7.50 },
      { step: 7, label: 'Dark Glass Panel', hsl: 'hsl(240, 5%, 18%)', rgb: 'rgb(44, 44, 48)', hex: '#2C2C30', luma: 0.03, contrastOnWhite: 13.12 },
      { step: 8, label: 'Graphite Base', hsl: 'hsl(240, 6%, 15%)', rgb: 'rgb(36, 36, 41)', hex: '#242429', luma: 0.02, contrastOnWhite: 15.00 },
      { step: 9, label: 'Graphite Dark', hsl: 'hsl(240, 9%, 13%)', rgb: 'rgb(30, 30, 36)', hex: '#1E1E24', luma: 0.01, contrastOnWhite: 17.50 },
    ],
  },
  'windows-11': {
    id: 'windows-11',
    name: 'Windows 11 (Fluent Cyan & Mica)',
    description: 'Modern Fluent design theme with cyan-blue accents on dark mica slate surfaces.',
    isDark: true,
    canvasBg: '#202020',
    textColor: '#FFFFFF',
    subtextColor: '#A0A0A0',
    cardBg: 'rgba(32, 32, 32, 0.85)',
    cardBorder: 'rgba(96, 205, 255, 0.35)',
    accentColor: '#60CDFF',
    dotMatrix: false,
    headerShadow: 'rgb(0 0 0) 1px 0.7px 0px',
    accentHsl: '199 100% 69%',
    bgHsl: '0 0% 13%',
    textHsl: '0 0% 100%',
    cardBgHsl: '0 0% 13%',
    subtextHsl: '0 0% 63%',
    cardBorderHsl: '199 100% 69%',
    stops: [
      { step: 0, label: 'Pure Fluent White', hsl: 'hsl(0, 0%, 100%)', rgb: 'rgb(255, 255, 255)', hex: '#FFFFFF', luma: 1.00, contrastOnWhite: 1.00 },
      { step: 1, label: 'Mica Highlight', hsl: 'hsl(0, 0%, 88%)', rgb: 'rgb(224, 224, 224)', hex: '#E0E0E0', luma: 0.74, contrastOnWhite: 1.33 },
      { step: 2, label: 'Subtle Silver', hsl: 'hsl(0, 0%, 69%)', rgb: 'rgb(176, 176, 176)', hex: '#B0B0B0', luma: 0.44, contrastOnWhite: 2.14 },
      { step: 3, label: 'Fluent Light Cyan', hsl: 'hsl(191, 100%, 80%)', rgb: 'rgb(153, 235, 255)', hex: '#99EBFF', luma: 0.78, contrastOnWhite: 1.27 },
      { step: 4, label: 'Fluent Cyan', hsl: 'hsl(199, 100%, 69%)', rgb: 'rgb(96, 205, 255)', hex: '#60CDFF', luma: 0.58, contrastOnWhite: 1.67 },
      { step: 5, label: 'Fluent Blue', hsl: 'hsl(206, 100%, 42%)', rgb: 'rgb(0, 120, 212)', hex: '#0078D4', luma: 0.18, contrastOnWhite: 4.57 },
      { step: 6, label: 'Deep Navy Fluent', hsl: 'hsl(205, 100%, 24%)', rgb: 'rgb(0, 69, 120)', hex: '#004578', luma: 0.06, contrastOnWhite: 9.55 },
      { step: 7, label: 'Mica Neutral Dark', hsl: 'hsl(0, 0%, 22%)', rgb: 'rgb(56, 56, 56)', hex: '#383838', luma: 0.04, contrastOnWhite: 11.67 },
      { step: 8, label: 'Mica Elevated', hsl: 'hsl(0, 0%, 17%)', rgb: 'rgb(43, 43, 43)', hex: '#2B2B2B', luma: 0.02, contrastOnWhite: 15.00 },
      { step: 9, label: 'Mica Canvas', hsl: 'hsl(0, 0%, 13%)', rgb: 'rgb(32, 32, 32)', hex: '#202020', luma: 0.01, contrastOnWhite: 17.50 },
    ],
  },
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
      { step: 1, label: 'Wash Sub-Surface', hsl: 'hsl(252, 95%, 94%)', rgb: 'rgb(237, 233, 254)', hex: '#EDE9FE', luma: 0.92, contrastOnWhite: 1.18 },
      { step: 2, label: 'Border Neutral', hsl: 'hsl(251, 91%, 87%)', rgb: 'rgb(221, 214, 254)', hex: '#DDD6FE', luma: 0.86, contrastOnWhite: 1.35 },
      { step: 3, label: 'Badge Tint', hsl: 'hsl(252, 95%, 78%)', rgb: 'rgb(196, 181, 253)', hex: '#C4B5FD', luma: 0.77, contrastOnWhite: 1.69 },
      { step: 4, label: 'Secondary Accent', hsl: 'hsl(255, 92%, 69%)', rgb: 'rgb(167, 139, 250)', hex: '#A78BFA', luma: 0.68, contrastOnWhite: 2.16 },
      { step: 5, label: 'Midtone Primary', hsl: 'hsl(258, 90%, 62%)', rgb: 'rgb(139, 92, 246)', hex: '#8B5CF6', luma: 0.58, contrastOnWhite: 2.96 },
      { step: 6, label: 'Brand Lead', hsl: 'hsl(262, 83%, 58%)', rgb: 'rgb(124, 58, 237)', hex: '#7C3AED', luma: 0.51, contrastOnWhite: 3.84 },
      { step: 7, label: 'Deep Shading', hsl: 'hsl(263, 70%, 50%)', rgb: 'rgb(109, 40, 217)', hex: '#6D28D9', luma: 0.42, contrastOnWhite: 5.66 },
      { step: 8, label: 'High Contrast', hsl: 'hsl(264, 67%, 35%)', rgb: 'rgb(76, 29, 149)', hex: '#4C1D95', luma: 0.28, contrastOnWhite: 11.20 },
      { step: 9, label: 'Deep Navy Ink', hsl: 'hsl(222, 47%, 11%)', rgb: 'rgb(15, 23, 42)', hex: '#0F172A', luma: 0.11, contrastOnWhite: 16.80 },
    ],
  },
};

const LEGACY_ALIASES: Record<string, string> = {
  'paper-editorial': 'paper-ink',
  'true-dark': 'bright-gold',
  'emerald-growth': 'monokai',
  'wp-exam-purple': 'dracula',
  'midnight-luxe': 'vscode-dark',
  'sunset-horizon': 'bright-gold',
  'cyber-neon': 'windows-11',
  'crimson-executive': 'noir-gold',
  'nord-frost': 'macos-sonoma',
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
    if (isSpace) {
      return { char: ' ', hex: 'transparent', hsl: 'transparent' };
    }

    const hasMultipleChars = totalChars > 1;
    const ratio = hasMultipleChars ? index / (totalChars - 1) : 0;
    const targetStep = Math.min(9, Math.max(0, Math.round(startStep + ratio * (endStep - startStep))));
    const stop = palette.stops[targetStep];

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

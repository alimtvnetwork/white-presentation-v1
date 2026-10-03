// lint-allow: file-size reason="WCAG contrast runtime & theme token injector" max=380
import { THEME_PALETTES } from './gradientTokens';
import { ThemePalette } from '../types/presentation';
import { isBooleanTrue, isFalse } from '../utils/booleanGuards';

const THEME_STORAGE_KEY = 'white.theme.v1';
const SYNC_CHANNEL_NAME = 'white-deck-sync';

const FONT_DISPLAY = "'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const FONT_BODY = "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const FONT_MONO = "'JetBrains Mono', 'Fira Code', monospace";

export interface ContrastAuditResult {
  themeId: string;
  ratio: number;
  isAccessible: boolean;
  textLuma: number;
  canvasLuma: number;
  accentTextRatio?: number;
  isAccentTextAccessible?: boolean;
}

let broadcastChannel: BroadcastChannel | null = null;
const hasWindow = typeof window !== 'undefined';
const hasBroadcast = typeof BroadcastChannel !== 'undefined';

if (hasWindow && hasBroadcast) {
  broadcastChannel = new BroadcastChannel(SYNC_CHANNEL_NAME);
  broadcastChannel.onmessage = (event: MessageEvent) => {
    const isThemeSync = event.data?.type === 'THEME_SYNC';
    const hasThemeId = typeof event.data?.themeId === 'string';
    if (isThemeSync && hasThemeId) {
      applyTheme(event.data.themeId, true);
    }
  };
}

export function resolveUrlTheme(): string | null {
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    const params = new URLSearchParams(window.location.search);
    const themeParam = params.get('theme');
    const hasTheme = Boolean(themeParam);
    if (hasTheme) {
      return themeParam;
    }
  }
  return null;
}

export function saveThemeToStorage(themeId: string): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
  } catch {
    // ignore storage access errors in restricted iframe environments
  }
}

export function getStoredTheme(): string {
  const urlTheme = resolveUrlTheme();
  const hasUrlTheme = Boolean(urlTheme);
  if (hasUrlTheme) {
    saveThemeToStorage(urlTheme!);
    return urlTheme!;
  }
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'white-brand';
  } catch {
    return 'white-brand';
  }
}

export function linearizeChannel(val: number): number {
  const norm = val / 255;
  const isLinearDomain = norm <= 0.04045;
  if (isLinearDomain) {
    return norm / 12.92;
  }
  return Math.pow((norm + 0.055) / 1.055, 2.4);
}

export function calculateRelativeLuminance(r: number, g: number, b: number): number {
  const lr = linearizeChannel(r);
  const lg = linearizeChannel(g);
  const lb = linearizeChannel(b);
  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
}

export function parseHexColor(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const isShort = clean.length === 3;
  const full = isShort ? clean.split('').map((c) => c + c).join('') : clean;
  const num = parseInt(full.slice(0, 6), 16) || 0;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return [r, g, b];
}

export function parseRgbColor(rgbStr: string): [number, number, number] {
  const matches = rgbStr.match(/\d+/g);
  const hasValidMatches = Boolean(matches && matches.length >= 3);
  if (hasValidMatches) {
    const r = Number(matches![0]);
    const g = Number(matches![1]);
    const b = Number(matches![2]);
    return [r, g, b];
  }
  return [0, 0, 0];
}

export function parseColorToRgb(color: string): [number, number, number] {
  const trimmed = color.trim();
  const isHex = trimmed.startsWith('#');
  if (isHex) {
    return parseHexColor(trimmed);
  }
  return parseRgbColor(trimmed);
}

export function hexToLuminance(color: string): number {
  const [r, g, b] = parseColorToRgb(color);
  return calculateRelativeLuminance(r, g, b);
}

export function contrastRatio(luma1: number, luma2: number): number {
  const highLuma = Math.max(luma1, luma2);
  const lowLuma = Math.min(luma1, luma2);
  return (highLuma + 0.05) / (lowLuma + 0.05);
}

export function logContrastAudit(themeId: string, ratio: number, isAccessible: boolean): void {
  if (isAccessible) {
    console.info(`[ThemeContrast] ${themeId} passes WCAG AA (${ratio.toFixed(2)}:1)`);
    return;
  }
  console.warn(`[ThemeContrast] ${themeId} fails WCAG AA: ${ratio.toFixed(2)}:1 < 4.5:1`);
}

export function resolveAccentTextColor(theme: ThemePalette, isDark: boolean): string {
  if (isDark) {
    return theme.accentColor;
  }
  if (theme.id === 'white-brand' || theme.id === 'github-light') {
    return '#6D28D9';
  }
  const stop7 = theme.stops?.[7]?.hex;
  const stop8 = theme.stops?.[8]?.hex;
  const candidate = stop7 || stop8 || '#6D28D9';
  const canvasLuma = hexToLuminance(theme.canvasBg || '#FFFFFF');
  const candidateLuma = hexToLuminance(candidate);
  const ratio = contrastRatio(candidateLuma, canvasLuma);
  if (ratio >= 5.5) {
    return candidate;
  }
  if (stop8) {
    const stop8Ratio = contrastRatio(hexToLuminance(stop8), canvasLuma);
    if (stop8Ratio >= 5.5) {
      return stop8;
    }
  }
  return '#6D28D9';
}

export function auditThemeContrast(theme: ThemePalette): ContrastAuditResult {
  const textLuma = hexToLuminance(theme.textColor);
  const canvasLuma = hexToLuminance(theme.canvasBg);
  const ratio = contrastRatio(textLuma, canvasLuma);
  const isAccessible = ratio >= 4.5;
  logContrastAudit(theme.id, ratio, isAccessible);

  const isDark = Boolean(theme.isDark);
  const accentTextColor = resolveAccentTextColor(theme, isDark);
  const accentLuma = hexToLuminance(accentTextColor);
  const accentTextRatio = contrastRatio(accentLuma, canvasLuma);
  const isAccentTextAccessible = accentTextRatio >= 4.5;

  if (isAccentTextAccessible) {
    console.info(`[ThemeContrast] ${theme.id} accent-text passes WCAG AA (${accentTextRatio.toFixed(2)}:1)`);
  } else {
    console.warn(`[ThemeContrast] ${theme.id} accent-text fails WCAG AA: ${accentTextRatio.toFixed(2)}:1 < 4.5:1`);
  }

  return {
    themeId: theme.id,
    ratio,
    isAccessible,
    textLuma,
    canvasLuma,
    accentTextRatio,
    isAccentTextAccessible,
  };
}

function buildColorVars(theme: ThemePalette, isDark: boolean): Record<string, string> {
  const accentGlow = theme.accentHsl
    ? `hsl(${theme.accentHsl} / 0.50)`
    : `${theme.accentColor}40`;
  const accentTextColor = resolveAccentTextColor(theme, isDark);

  return {
    '--pres-bg': theme.canvasBg,
    '--pres-canvas-bg': theme.canvasBg,
    '--pres-bg-surface': isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    '--pres-bg-card': theme.cardBg,
    '--pres-card-bg': theme.cardBg,
    '--pres-bg-card-hover': isDark ? 'rgba(51, 65, 85, 0.95)' : 'rgba(255, 255, 255, 0.98)',
    '--pres-accent': theme.accentColor,
    '--pres-accent-text': accentTextColor,
    '--pres-accent-glow': accentGlow,
    '--pres-accent-hover': theme.accentColor,
    '--pres-text': theme.textColor,
    '--pres-text-primary': theme.textColor,
    '--pres-text-muted': theme.subtextColor,
    '--pres-text-secondary': theme.subtextColor,
    '--pres-text-subtle': isDark ? '#64748B' : '#94A3B8',
    '--pres-border': theme.cardBorder,
    '--pres-card-border': theme.cardBorder,
    '--pres-border-hover': theme.accentColor,
  };
}

function buildTypographyVars(shadow: string): Record<string, string> {
  return {
    '--pres-header-shadow': shadow,
    '--preset-display-font': FONT_DISPLAY,
    '--preset-body-font': FONT_BODY,
    '--preset-mono-font': FONT_MONO,
  };
}

function buildHslThemeVars(theme: ThemePalette): Record<string, string> {
  const vars: Record<string, string> = {};
  if (theme.accentHsl) {
    vars['--pres-accent-hsl'] = theme.accentHsl;
  }
  if (theme.bgHsl) {
    vars['--pres-bg-hsl'] = theme.bgHsl;
  }
  if (theme.canvasBgHsl) {
    vars['--pres-canvas-bg-hsl'] = theme.canvasBgHsl;
  } else if (theme.bgHsl) {
    vars['--pres-canvas-bg-hsl'] = theme.bgHsl;
  }
  if (theme.textHsl) {
    vars['--pres-text-hsl'] = theme.textHsl;
    vars['--pres-text-primary-hsl'] = theme.textHsl;
  }
  if (theme.cardBgHsl) {
    vars['--pres-card-bg-hsl'] = theme.cardBgHsl;
    vars['--pres-bg-card-hsl'] = theme.cardBgHsl;
  }
  if (theme.subtextHsl) {
    vars['--pres-subtext-hsl'] = theme.subtextHsl;
    vars['--pres-text-muted-hsl'] = theme.subtextHsl;
    vars['--pres-text-secondary-hsl'] = theme.subtextHsl;
  }
  if (theme.cardBorderHsl) {
    vars['--pres-border-hsl'] = theme.cardBorderHsl;
    vars['--pres-card-border-hsl'] = theme.cardBorderHsl;
  }

  // Unadorned Global HSL Triplet Tokens
  vars['--gold'] = '41 100% 50%';
  vars['--gold-glow'] = '41 100% 65%';
  vars['--cream'] = '42 100% 94%';
  vars['--ember'] = '14 80% 57%';
  vars['--ink'] = '240 20% 4%';

  // Fixed Dark Chrome HUD Tokens
  vars['--chrome-bg'] = 'rgba(15, 23, 42, 0.94)';
  vars['--chrome-border'] = 'rgba(255, 255, 255, 0.12)';
  vars['--chrome-text'] = '#F8FAFC';
  vars['--chrome-subtext'] = '#94A3B8';
  vars['--chrome-accent'] = '#6366F1';
  vars['--chrome-fg'] = '#F8FAFC';
  vars['--chrome-fg-muted'] = '#94A3B8';
  vars['--chrome-fg-subtle'] = '#64748B';
  vars['--chrome-border-strength'] = '0.22';
  vars['--chrome-divider-strength'] = '0.12';
  vars['--chrome-hover'] = 'rgba(255, 255, 255, 0.08)';

  // Micro-Shadow Weight Variables
  vars['--text-shadow-weight-light'] = '0 1px 0 hsl(0 0% 100% / 0.5)';
  vars['--text-shadow-weight-light-strong'] = '0 1px 1px hsl(0 0% 100% / 0.7)';
  vars['--text-shadow-weight-dark'] = '0 1px 0 hsl(0 0% 0% / 0.4)';
  vars['--text-shadow-weight-dark-strong'] = '0 2px 4px hsl(0 0% 0% / 0.6)';

  return vars;
}

function buildStopVars(stops: ThemePalette['stops']): Record<string, string> {
  const vars: Record<string, string> = {};
  const hasStops = Array.isArray(stops);
  if (hasStops) {
    stops.forEach((stop, index) => {
      vars[`--pres-stop-${stop.step}`] = stop.hex;
      vars[`--pres-s${stop.step}`] = stop.hex;
      vars[`--pres-stop-${stop.step}-hsl`] = stop.hsl;
      vars[`--pres-stop-${stop.step}-rgb`] = stop.rgb;
      vars[`--pres-gradient-stop-${index}`] = stop.hex;
      vars[`--pres-gradient-stop-${index}-hsl`] = stop.hsl;
      vars[`--pres-gradient-stop-${index}-rgb`] = stop.rgb;
    });
  }
  return vars;
}

export function applyThemeRuntimeVariables(theme: ThemePalette, rootEl: HTMLElement): void {
  const isDark = Boolean(theme.isDark);
  const vars = {
    ...buildColorVars(theme, isDark),
    ...buildHslThemeVars(theme),
    ...buildStopVars(theme.stops),
  };
  Object.entries(vars).forEach(([key, val]) => {
    rootEl.style.setProperty(key, val);
  });
  if (isDark) {
    rootEl.classList.add('theme-dark');
    rootEl.classList.remove('theme-light');
  } else {
    rootEl.classList.add('theme-light');
    rootEl.classList.remove('theme-dark');
  }
}

function applyVarsToRoot(vars: Record<string, string>, isDark: boolean): void {
  const root = document.documentElement;
  Object.entries(vars).forEach(([key, val]) => {
    root.style.setProperty(key, val);
  });
  if (isDark) {
    root.classList.add('theme-dark');
    root.classList.remove('theme-light');
  } else {
    root.classList.add('theme-light');
    root.classList.remove('theme-dark');
  }
  const presRoot = document.getElementById('presentation-root');
  const hasPresRoot = Boolean(presRoot);
  if (hasPresRoot) {
    Object.entries(vars).forEach(([key, val]) => {
      presRoot!.style.setProperty(key, val);
    });
    if (isDark) {
      presRoot!.classList.add('theme-dark');
      presRoot!.classList.remove('theme-light');
    } else {
      presRoot!.classList.add('theme-light');
      presRoot!.classList.remove('theme-dark');
    }
  }
}

function broadcastThemeChange(themeId: string, isFromBroadcast: boolean): void {
  const isLocalOrigin = isFalse(isFromBroadcast);
  const hasChannel = Boolean(broadcastChannel);
  if (isLocalOrigin && hasChannel) {
    broadcastChannel!.postMessage({ type: 'THEME_SYNC', themeId });
  }
}

export function applyTheme(id: string, isFromBroadcast = false): ThemePalette {
  const theme = THEME_PALETTES[id] || THEME_PALETTES['white-brand'];
  const isServer = typeof document === 'undefined';
  if (isServer) return theme;
  const isDark = Boolean(theme.isDark);
  document.documentElement.setAttribute('data-theme', theme.id);
  document.documentElement.setAttribute('data-appearance', isDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-is-dark', isDark ? 'true' : 'false');
  const defaultShadow = isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px';
  const vars = {
    ...buildColorVars(theme, isDark),
    ...buildTypographyVars(theme.headerShadow || defaultShadow),
    ...buildHslThemeVars(theme),
    ...buildStopVars(theme.stops),
  };
  applyVarsToRoot(vars, isDark);
  saveThemeToStorage(theme.id);
  auditThemeContrast(theme);
  broadcastThemeChange(theme.id, isFromBroadcast);
  return theme;
}

export function initThemeRuntime(): void {
  const urlTheme = resolveUrlTheme();
  const hasUrlTheme = Boolean(urlTheme);
  if (hasUrlTheme) {
    applyTheme(urlTheme!);
    return;
  }
  const storedTheme = getStoredTheme();
  applyTheme(storedTheme);
}

const isDomReady = typeof window !== 'undefined';
if (isDomReady) {
  initThemeRuntime();
}

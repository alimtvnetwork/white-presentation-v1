import { THEME_PALETTES } from './gradientTokens';
import { ThemePalette } from '../types/presentation';

const THEME_STORAGE_KEY = 'white.theme.v1';
const SYNC_CHANNEL_NAME = 'white-deck-sync';

const FONT_DISPLAY = "'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const FONT_BODY = "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const FONT_MONO = "'JetBrains Mono', 'Fira Code', monospace";

let broadcastChannel: BroadcastChannel | null = null;
if (typeof window !== 'undefined' && typeof BroadcastChannel !== 'undefined') {
  broadcastChannel = new BroadcastChannel(SYNC_CHANNEL_NAME);
  broadcastChannel.onmessage = (event: MessageEvent) => {
    if (event.data?.type === 'THEME_SYNC' && typeof event.data.themeId === 'string') {
      applyTheme(event.data.themeId, true);
    }
  };
}

export function getStoredTheme(): string {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'white-brand';
  } catch {
    return 'white-brand';
  }
}

export function applyTheme(id: string, isFromBroadcast = false): ThemePalette {
  const theme = THEME_PALETTES[id] || THEME_PALETTES['white-brand'];
  if (typeof document === 'undefined') return theme;

  const root = document.documentElement;
  const isDark = Boolean(theme.isDark);

  root.setAttribute('data-theme', theme.id);
  root.setAttribute('data-appearance', isDark ? 'dark' : 'light');

  const vars: Record<string, string> = {
    '--pres-bg': theme.canvasBg,
    '--pres-bg-surface': isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    '--pres-bg-card': theme.cardBg,
    '--pres-bg-card-hover': isDark ? 'rgba(51, 65, 85, 0.95)' : 'rgba(255, 255, 255, 0.98)',
    '--pres-accent': theme.accentColor,
    '--pres-accent-glow': `${theme.accentColor}40`,
    '--pres-accent-hover': theme.accentColor,
    '--pres-text': theme.textColor,
    '--pres-text-muted': theme.subtextColor,
    '--pres-text-subtle': isDark ? '#64748B' : '#94A3B8',
    '--pres-border': theme.cardBorder,
    '--pres-border-hover': theme.accentColor,
    '--pres-header-shadow': theme.headerShadow,
    '--preset-display-font': FONT_DISPLAY,
    '--preset-body-font': FONT_BODY,
    '--preset-mono-font': FONT_MONO,
  };

  Object.entries(vars).forEach(([key, val]) => {
    root.style.setProperty(key, val);
  });

  const presRoot = document.getElementById('presentation-root');
  if (presRoot) {
    Object.entries(vars).forEach(([key, val]) => {
      presRoot.style.setProperty(key, val);
    });
  }

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme.id);
  } catch {
    // ignore storage access errors
  }

  if (!isFromBroadcast && broadcastChannel) {
    broadcastChannel.postMessage({ type: 'THEME_SYNC', themeId: theme.id });
  }

  return theme;
}

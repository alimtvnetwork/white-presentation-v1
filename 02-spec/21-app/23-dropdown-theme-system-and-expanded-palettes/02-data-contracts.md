# 02-Data Contracts: Expanded Theme Palettes & 10-Step Gradient Tokens

## 1. ThemePalette Interface Extension

Every theme palette conforms to `ThemePalette` defined in `src/types/presentation.ts`:

```typescript
export interface ThemePalette {
  id: string;
  name: string;
  description: string;
  isDark?: boolean;
  canvasBg: string;
  textColor: string;
  subtextColor: string;
  cardBg: string;
  cardBorder: string;
  accentColor: string;
  dotMatrix?: boolean;
  headerShadow: string;
  stops: GradientStop[];
}
```

---

## 2. Palette Dictionary Schema

`THEME_PALETTES: Record<string, ThemePalette>` contains all 10 registered palettes:
- `white-brand` (Light)
- `paper-editorial` (Light)
- `true-dark` (Dark)
- `emerald-growth` (Dark)
- `wp-exam-purple` (Dark)
- `midnight-luxe` (Dark)
- `sunset-horizon` (Dark)
- `cyber-neon` (Dark)
- `crimson-executive` (Dark)
- `nord-frost` (Dark)

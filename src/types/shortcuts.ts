export interface ShortcutItem {
  keys: string[];
  label: string;
}

export interface ShortcutGroup {
  group: string;
  items: ShortcutItem[];
}

export const PRESENTATION_SHORTCUTS: ShortcutGroup[] = [
  {
    group: 'Deck Navigation',
    items: [
      { keys: ['→', 'Space', 'Enter'], label: 'Next slide' },
      { keys: ['←', 'Backspace'], label: 'Previous slide' },
      { keys: ['F'], label: 'Toggle presentation fullscreen' },
      { keys: ['G'], label: 'Toggle slide overview grid' },
      { keys: ['T'], label: 'Cycle color theme' },
      { keys: ['M'], label: 'Toggle audio sound mute' },
      { keys: ['B'], label: 'Toggle builder mode' },
      { keys: ['Home'], label: 'Jump to first slide' },
      { keys: ['End'], label: 'Jump to last slide' },
      { keys: ['? / /'], label: 'Open keyboard shortcuts map' },
      { keys: ['Esc'], label: 'Close modals / exit fullscreen' },
    ],
  },
  {
    group: 'Themes (Direct Jump)',
    items: [
      { keys: ['1'], label: 'Pure White (Brand)' },
      { keys: ['2'], label: 'True Dark Obsidian' },
      { keys: ['3'], label: 'Emerald Forest' },
      { keys: ['4'], label: 'WP Exam Purple' },
      { keys: ['5'], label: 'Midnight Luxe' },
    ],
  },
  {
    group: 'Presenter Camera & Webcam',
    items: [
      { keys: ['I'], label: 'Hard acquire ↔ stop webcam' },
      { keys: ['O'], label: 'Toggle circle avatar ↔ rounded card' },
      { keys: ['E'], label: 'Expand camera to fullscreen' },
      { keys: ['M'], label: 'Minimize camera to puck' },
      { keys: ['+'], label: 'Step camera size up (S → XL)' },
      { keys: ['-'], label: 'Step camera size down (XL → S)' },
    ],
  },
];

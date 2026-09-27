import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          violet: '#7C3AED',
          indigo: '#312E81',
          navy: '#0F172A',
          charcoal: '#0B192C',
        },
      },
      boxShadow: {
        neon: '0 0 15px rgba(244, 63, 94, 0.4), 0 0 30px rgba(244, 63, 94, 0.2)',
        'neon-strong': '0 0 25px rgba(244, 63, 94, 0.6), 0 0 50px rgba(244, 63, 94, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;

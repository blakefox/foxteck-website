import defaultTheme from 'tailwindcss/defaultTheme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'brand-shadow': '#1A0805',
        'brand-brown':  '#4A1C08',
        'brand-rust':   '#C04A1A',
        'brand-amber':  '#E8620A',
        'brand-cream':  '#F0E0CC',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};

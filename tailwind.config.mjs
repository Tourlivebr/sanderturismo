import palette from './src/styles/palette.mjs';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: palette,
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      const variables = Object.fromEntries(
        Object.entries(palette).flatMap(([name, shades]) =>
          Object.entries(shades).map(([shade, value]) => [`--clr-${name}-${shade}`, value])
        )
      );
      addBase({ ':root': {
        ...variables,
        '--clr-primary': palette.primary[900],
        '--clr-accent': palette.accent[500],
        '--clr-dark': palette.dark[800],
      } });
    },
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FDF8EC',
          100: '#F9F0D8',
          200: '#F2E1AE',
        },
        primary: {
          50:  '#F3F7F3',
          100: '#DFE8E0',
          200: '#BDCFBF',
          300: '#8FB292',
          400: '#5C8A63',
          500: '#3A6841',
          600: '#2A5031',
          700: '#203E26',
          800: '#18301D',
          900: '#112315',
          950: '#08130B',
        },
        accent: {
          50:  '#FBF4E3',
          100: '#F4E3B9',
          200: '#EACA7E',
          300: '#DFA953',
          400: '#CE8A37',
          500: '#B57323',
          600: '#9D601C',
          700: '#814C1A',
          800: '#6A3E1A',
          900: '#583319',
          950: '#311A09',
        },
        dark: {
          50:  '#FAF6ED',
          100: '#EEE7D5',
          200: '#D9CEB3',
          300: '#BBAD88',
          400: '#9A885E',
          500: '#5E5336',
          600: '#3E3821',
          700: '#282415',
          800: '#1A180E',
          900: '#100F09',
          950: '#080805',
        },
        whatsapp: {
          500: '#25D366',
          600: '#1FB958',
          700: '#1A9A4A',
        },
      },
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
  plugins: [],
}
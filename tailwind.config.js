/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F3E8',
        'warm-white': '#FFFDF8',
        charcoal: '#292722',
        'champagne-gold': '#C89A4B',
        'dark-gold': '#8F6328',
        'soft-border': '#E8DFCF',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        'section': 'rem(96)',
      },
      borderRadius: {
        'sm': '0.5rem',
      },
    },
  },
  plugins: [],
};
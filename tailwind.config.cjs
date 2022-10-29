/** @type {import('tailwindcss').Config} */
const daisy = require('daisyui');
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          300: 'rgba(255, 255, 255, 0.69)',
        },
        marine: {
          900: '#0d1117',
          700: '#15181E',
          600: '#171c26',
        },
        purple: {
          200: '#A67BF2',
          500: '#4e3b7a',
        },
      },
    },
  },
  plugins: [daisy],
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: 'daisy-',
  },
};

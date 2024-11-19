/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFD1DC',
          blue: '#A7C7E7',
          green: '#B2E5C1',
          yellow: '#FFFACD',
          purple: '#D8BFD8',
          orange: '#FFDAB9',
        },
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
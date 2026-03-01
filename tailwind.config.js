/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1F2A33',
          'cool-from': '#B090F5',
          'cool-to': '#5FBFFF',
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#4c1d54',
          accent: '#D19C97',
          gold: '#E5A125',
          green: '#58B245',
        }
      }
    },
  },
  plugins: [],
}


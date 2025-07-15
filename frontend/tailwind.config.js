/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#001D3D',
        'navy-blue': '#003566',
        'gold': '#CCA000',
        'light-gold': '#F0CB46',
      }
    },
  },
  plugins: [],
};
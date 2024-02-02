/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme1: "#e68d09",
        "zinc-750": "#33333c"
      },
      fontFamily: {
        'urbanist': ['urbanist', 'sans-serif']
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme1: "#e68d09"
      },
      fontFamily: {
        'urbanist': ['urbanist', 'sans-serif']
      }
    },
  },
  plugins: [],
}

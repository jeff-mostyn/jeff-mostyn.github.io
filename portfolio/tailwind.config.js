/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'urbanist': ['urbanist', 'sans-serif']
      }
    },
  },
  plugins: [],
}

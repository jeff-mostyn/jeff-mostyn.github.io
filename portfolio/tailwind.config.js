/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        darkOverlayFade: "darkOverlayFade 750ms ease-in-out",
        darkOverlayFadeResponsive: "darkOverlayFadeResponsive 750ms ease-in-out",
        slideInFromRight: "slideInFromRight 750ms ease-in-out forwards"
      },
      colors: {
        theme1: "#e68d09",
        "zinc-750": "#33333c"
      },
      fontFamily: {
        'urbanist': ['urbanist', 'sans-serif']
      },
      keyframes: {
        darkOverlayFade: {
          '0%': { opacity: "0" },
          '100%': { opacity: "0.55" }
        },
        darkOverlayFadeResponsive: {
          '0%': { opacity: "0" },
          '100%': { opacity: "0.2" }
        },
        slideInFromRight: {
          '0%': {
            opacity: "0",
            transform: "translateX(160px)"
          },
          '100%': {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
}

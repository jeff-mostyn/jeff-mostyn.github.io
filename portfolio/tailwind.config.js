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
        slideInFromRight: "slideInFromRight 750ms ease-in-out forwards",
        slideUpFeatureDisplay: "slideUp48px 250ms ease-out forwards",
        slideDownFeatureDisplay: "slideDown48px 250ms ease-out forwards",
        fastFadeIn: "fadeIn 250ms ease-in-out forwards",
        fastFadeOut: "fadeOut 250ms ease-in-out forwards",
      },
      colors: {
        theme1: "#e68d09",
        'theme1-hover': "#8c5400",
        "material-neutral-primary": "#2c2f34",
        "material-neutral-secondary": "#1f2226",
        "zinc-750": "#33333c"
      },
      fontFamily: {
        'noto-sans-jp': ['Noto Sans Jp', 'sans-serif'],
        'urbanist': ['urbanist', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" }
        },
        fadeOut: {
          '0%': { opacity: "1" },
          '100%': { opacity: "0" }
        },
        darkOverlayFade: {
          '0%': { opacity: "0" },
          '100%': { opacity: "0.6" }
        },
        darkOverlayFadeResponsive: {
          '0%': { opacity: "0" },
          '100%': { opacity: "0.35" }
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
        slideUp48px: {
          '0%': {
            transform: "translateY(0px)"
          },
          '100%': {
            transform: "translateY(-48px)"
          }
        },
        slideDown48px: {
          '0%': {
            transform: "translateY(-48px)"
          },
          '100%': {
            transform: "translateY(0px)"
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

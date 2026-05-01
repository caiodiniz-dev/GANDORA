/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        cera: {
          DEFAULT: "#F9F6F0",
          50: "#FBF9F4",
          100: "#F4EFE5",
          tint: "#EDE6D7",
        },
        carvao: {
          DEFAULT: "#333333",
          200: "#B0AFAB",
          400: "#6B6B68",
          600: "#4A4A48",
          800: "#333333",
          900: "#1F1F1F",
        },
        terracota: {
          DEFAULT: "#C08261",
          200: "#F1E0D5",
          400: "#DFB89F",
          600: "#C08261",
          800: "#95613F",
          900: "#5C3A22",
          soft: "#D4A48A",
        },
        salvia: {
          DEFAULT: "#8A9A5B",
          200: "#E2E5D0",
          400: "#B8C28D",
          600: "#8A9A5B",
          800: "#62703D",
          900: "#3D4626",
          soft: "#A8B580",
        },
        kraft: "#D9C7A0",
      },
      fontFamily: {
        serif: ['"Cinzel Decorative"', '"Cinzel"', '"Cormorant Garamond"', "serif"],
        sans: ['"Montserrat"', '"Helvetica Neue"', "system-ui", "sans-serif"],
        script: ['"Great Vibes"', '"Pinyon Script"', "cursive"],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', "monospace"],
      },
      letterSpacing: {
        tight: "0.02em",
        normal: "0.04em",
        wide: "0.12em",
        xwide: "0.22em",
        mono: "0.18em",
      },
      borderRadius: {
        DEFAULT: "0",
      },
      boxShadow: {
        rest: "0 1px 2px rgba(51,33,18,0.04)",
        low: "0 8px 18px -10px rgba(51,33,18,0.18)",
        mid: "0 24px 40px -22px rgba(51,33,18,0.28)",
        deep: "0 40px 60px -30px rgba(51,33,18,0.35)",
        candle: "0 0 60px rgba(255, 200, 130, 0.35)",
      },
      transitionTimingFunction: {
        candle: "cubic-bezier(0.36, 0.07, 0.19, 0.97)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        breathe: "breathe 6s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite",
        rise: "rise 900ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both",
      },
    },
  },
  plugins: [],
};

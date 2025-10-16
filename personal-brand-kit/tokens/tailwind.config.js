const colors = require("./colors.json");

const palette = {
  "dj-midnight": colors.palette.primary.midnight,
  "dj-cerulean": colors.palette.primary.cerulean,
  "dj-sand": colors.palette.neutral.sand,
  "dj-parchment": colors.palette.neutral.parchment,
  "dj-charcoal": colors.palette.neutral.charcoal,
  "dj-canvas": colors.palette.neutral.canvas,
  "dj-white": colors.palette.neutral.white,
  "dj-aqua": colors.palette.accent.aqua,
  "dj-copper": colors.palette.accent.copper,
  "dj-navigator": colors.palette.accent.navigator,
};

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: palette,
      fontFamily: {
        display: ["Morion", "Times New Roman", "serif"],
        body: ["Wigrum", "Inter", "Helvetica Neue", "sans-serif"],
        mono: ["\"DM Mono\"", "Menlo", "monospace"],
      },
      boxShadow: {
        "brand-soft": "0 18px 60px -30px rgba(4, 7, 40, 0.6)",
        "brand-outline": "0 0 0 2px rgba(2, 91, 238, 0.5)",
      },
      borderRadius: {
        brand: "18px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};

const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    height: {
      sm: "320px",
      md: "480px",
      lg: "640px",
      xl: "780px",
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "1": "1px",
      "2": "2px",
      "4": "4px",
    },
    gradients: theme => ({
      "gray-light": [theme("colors.gray.200"), theme("colors.gray.100")],
      // ...
    }),
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        sans: ["Clear Sans", ...defaultTheme.fontFamily.sans],
      },
    },
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
      desaturate: "saturate(0.3)",
      saturate: "saturate(1.3)",
      scale: "scale(1.1)",
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(8px)",
    },
  },
  variants: {
    gradients: ["responsive", "hover"],
    filter: ["responsive", "hover"],
    backdropFilter: ["responsive", "hover"],
  },
  plugins: [require("./plugins/gradients"), require("tailwindcss-filters")],
}

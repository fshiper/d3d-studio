const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
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
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
      saturate: "saturate(1.1)",
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

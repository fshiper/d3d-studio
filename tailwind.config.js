const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "860px",
      // => @media (min-width: 860px) { ... }

      xl: "960px",
      // => @media (min-width: 960px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Aleo", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}

const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    gradients: theme => ({
      "blue-green": [theme("colors.blue.500"), theme("colors.green.500")],
      "purple-blue": [theme("colors.purple.500"), theme("colors.blue.500")],
      "gray-light": [theme("colors.gray.200"), theme("colors.gray.100")],
      // ...
    }),
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 860px) { ... }

      xl: "1280px",
      // => @media (min-width: 960px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    gradients: ["responsive", "hover"],
  },
  plugins: [require("./plugins/gradients")],
}

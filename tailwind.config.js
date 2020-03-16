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
      md: "768px",
      lg: "1024px",
      xl: "1280px",
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

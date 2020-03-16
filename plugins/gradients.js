const _ = require("lodash")
const plugin = require("tailwindcss/plugin")

module.exports = plugin(function({ addUtilities, e, theme, variants }) {
  const gradients = theme("gradients", {})
  const gradientVariants = variants("gradients", [])

  const utilities = _.map(gradients, ([start, end], name) => ({
    [`.bg-gradient-${e(name)}`]: {
      backgroundImage: `linear-gradient(to bottom, ${start}, ${end})`,
    },
  }))

  addUtilities(utilities, gradientVariants)
})

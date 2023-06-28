const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        white: "0px 1px 1px white",
        "red-300": "0px 1px 1px #fca5a5",
        "red-700": "0px 1px 1px #b91c1c",
        "red-800": "0px 1px 1px #991b1b",
        "red-500": "0px 1px 1px #ef4444",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      )
    }),
    //
    // Plugin to expose tailwind colors as css variables :
    //
    // function ({ addBase, theme }) {
    //   function extractColorVars(colorObj, colorGroup = "") {
    //     return Object.keys(colorObj).reduce((vars, colorKey) => {
    //       const value = colorObj[colorKey]

    //       const newVars =
    //         typeof value === "string"
    //           ? { [`--color${colorGroup}-${colorKey}`]: value }
    //           : extractColorVars(value, `-${colorKey}`)

    //       return { ...vars, ...newVars }
    //     }, {})
    //   }

    //   addBase({
    //     ":root": extractColorVars(theme("colors")),
    //   })
    // },
  ],
}

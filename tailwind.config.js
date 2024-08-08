/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "palatinate-blue": {
          50: "#EBF4FF",
          100: "#DBE9FF",
          200: "#BED7FF",
          300: "#97BBFF",
          400: "#6E92FF",
          500: "#4C6BFF",
          600: "#2E42FF",
          700: "#202FE2",
          800: "#1D2BB6",
          900: "#202D8F",
          950: "#131953",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        questrial: ["Questrial", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        open: ["Open", "serif"],
        roboto: ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
};

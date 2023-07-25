/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          maroon: "#3A1212",
          red: "#FF2625",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,css}", "./src/**/*.css"],
  theme: {
    extend: {
      height: {
        custom: "632px",
      },
      spacing: {
        "40-c": "40rem",
      },
    },
  },
  plugins: [],
};

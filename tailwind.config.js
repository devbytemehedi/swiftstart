/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./404.html", "./pages/**/*.{html}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

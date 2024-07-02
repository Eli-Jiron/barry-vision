/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "transparent": "transparent",
      "current": "currentColor",
      "white": "#FFFFFF",
      "black": "#000000",
      "light-green": "#66CC99",
      "blue-gray": {
        100: "#B9C9D8",
        200: "#A8BBCF",
        300: "#97AEC5",
        400: "#86A1BC",
        500: "#7493B2",
        600: "#6386A8",
        700: "#4C6B8A",
        800: "#425D78", 
        900: "#34495E",
      },
      "red": "#E74C3C",
      "light-blue": "#4BA0E3",
      "ice-blue": "#ECF0F1",
    },
    extend: {},
  },
  plugins: [],
};

const autoprefixer = require("autoprefixer");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {},
      screens: {
        screenmax1800: { max: "1800px" },
        screen1800: { min: "1800px" },
        screen1600: { max: "1600px" },
        screen1500: { max: "1500px" },
        screen1400: { max: "1400px" },
        screen1350: { max: "1350px" },
        screen1300: { max: "1300px" },
        screen1250: { max: "1250px" },
        screen1200: { max: "1200px" },
        screen1100: { max: "1100px" },
        screen1000: { max: "1000px" },
        screen950: { max: "950px" },
        screen900: { max: "900px" },
        screen800: { max: "810px" },
        screen750: { max: "750px" },
        screen700: { max: "710px" },
        screen650: { max: "650px" },
        screen640: { max: "640px" },
        screen600: { max: "600px" },
        screen550: { max: "550px" },
        screen500: { max: "500px" },
        screen480: { max: "490px" },

        screen470: { max: "470px" },
        screen400: { max: "400px" },
        screen360: { max: "360px" },
        screen350: { max: "350px" },
        screen330: { max: "329px" },

        screen1000700: { max: "1000px", min: "700px" },
        screen1000800: { max: "1000px", min: "800px" },
        screen700400: { max: "700px", min: "400px" },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

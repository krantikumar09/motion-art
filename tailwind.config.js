/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-color": "#0E0F1A",
        orange: "#f87516",
        blue: "#5e11ff",
        "light-black": "#EEE5FFBD",
        "light-white": "#EEE5FF",

        "sec-gradient-color1": "#0d061f",
        "sec-gradient-color2": "#251e35",
      },
      gradientColorStopPositions: {
        0: "0%",
        100: "100%",
      },
      screens: {
        xs: "480px",
        sm: "769px",
        md: "1024px",
        lg: "1280px",
        xl: "1920px",
      },
    },
  },
  plugins: [],
};

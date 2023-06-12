/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        xl: "76.25rem",
        "xl-p": "1250px",
      },
      colors: {
        blue: {
          primary: "#0E337A",
          secondary: "#005496",
        },
        red: {
          primary: "#8b0304",
        },
        yellow: {
          bg: "#E7EFC1",
        },
      },
      fontSize: {
        sm: ["1.125rem"],
        md: ["1.5625rem"],
        lg: ["2.4375rem"],
      },
      aspectRatio: {
        main: '1.65',
      },
    },
  },
  plugins: [],
};

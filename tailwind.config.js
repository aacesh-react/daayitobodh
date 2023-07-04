/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        px: "15px",
        lg: "960px",
        "lg-p": "990px",
        xl: "1250px",
        "xl-p": "1280px",
      },
      colors: {
        bg: {
          brown: "#F1E7CE",
          gray: "#F1F1F1",
        },
        brown: {
          heading: "#A37224",
        },
        blue: {
          primary: "#0E337A",
          secondary: "#005496",
          pagination: "#644FBE",
        },
        red: {
          primary: "#8b0304",
        },
        yellow: {
          bg: "#E7EFC1",
        },
        green: {
          primary: "#00A145",
        },
      },

      fontSize: {
        xs: ["0.875rem"], //14px
        sm: ["1.25rem"], //20px
        md: ["1.5625rem"], //25px
        lg: ["1.75rem"], //28px
        xl: ["2.4375rem"], //39px
        xxl: ["2.75rem"], //44px
        30: ["1.875rem"],
      },
      aspectRatio: {
        main: "1.65",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      fontSize: {
        main: "15px",
        13: "13px",
      },
      colors: {
        primary: {
          offer: "#4FB26B",
        },
        font: {
          header: "#666F7F",
          primary: "#0C0E14",
          3: "#0E0D19",
          4: "#3E3C47",
          title: "#393E47",
          hover: "#187061",
          "pd-var": "#723BEA", //product-details purple variation
          "pl-gray": "#949BA8", //product-list gray variation
        },
        background: {
          main: "#F5F6F7",
        },
        border: "#C0C4CC",
      },
      fontFamily: {
        yekan: ["IRANYekan"],
        yekanEn: ["IRANYekanEn"],
      },
    },
  },
  plugins: [],
};
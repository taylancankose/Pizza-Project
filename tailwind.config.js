/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", "sans serif"],
        barlow: ["Barlow", "sans serif"],
        quattrocento: ["Quattrocento", "sans serif"],
        satisfy: ["Satisfy", "sans serif"],
      },
      colors: {
        myYellow: "#FDC913",
        myLightGray: "#5F5F5F",
        myDarkGray: "#292929",
        myRed: "#CE2829",
        myBeige: "#FAF7F2",
        myDark: "#1A1A1A",
      },
      height: {
        124: "400px",
      },
      width: {
        136: "500px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      dark:{
        primary: "#292f3f",
        secondary:"#1f232f",
        btnprimary: "#7b00ff",
        btnsecondary: "#920ed1",
        heading: "#ffffff",
        content: "#d4dce2",
        error: "#d946ef",
        hover: "#ffe3fe",
        success: "#42ff01"
      },
      light:{
        primary: "#fff",
        secondary:"#e6e4e7",
        btnprimary: "#7b00ff",
        btnsecondary: "#920ed1",
        heading: "#292f3f",
        content: "#515e80",
        error: "#d946ef",
        hover: "#ffe3fe",
        success: "#33bd04"
      }
    },
    extend: {},
  },
  plugins: [],
}

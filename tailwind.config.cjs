/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sig-orange": "#f4811f",
        "sig-green": "#275931",
        green: "#00b388",
        dark: "#272930",
        darker: "#1a1c20",
        primary: "#5b756e",
        "boston-blue": "#3c8dbc",
        boulder: "#777777",
        tundora: "#484848",
        corduroy: "#5b756e",
        cinnabar: "#e53e3e",
        "aqua-haze": "#E4F0ED",
        "sig-red": "#d11d59",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "source-san-pro": ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};

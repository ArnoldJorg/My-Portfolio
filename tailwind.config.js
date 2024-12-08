/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "border-spin": "border-spin 7s linear infinite",
      },
      colors: {
        "custom-purple": "rgba(192, 132, 252, 0.4)",
        "custom-grey": "rgba(120, 120, 120, 0.8)",
        "custom-stone": "rgba(243, 244, 246)",
        "custom-grey-2": "rgba(20,20,20)",
        "custom-grey-3": "rgba(38,38,38)",
        "custom-white": "rgba(203 213 225),",
      },
      fontFamily: {
        custom: ["font-inter-regular", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        InterBold: ["Inter-Bold", "sans-serif"],
      },

      height: {
        128: "24rem",
      },
    },
  },

  plugins: [],
};

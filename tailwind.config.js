import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grass: "#9bcc50",
        fire: "#fd7d24",
        customBlue: "#53a4cf",
        customRed: "#f16e57",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".grass": {
          backgroundColor: "#9bcc50",
          color: "#000000",
          borderRadius: "0.375rem",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};

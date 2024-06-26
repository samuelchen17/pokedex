// import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
    "bg-red-400",
    "bg-red-700",
    "bg-yellow-400",
    "bg-yellow-700",
    "bg-green-400",
    "bg-green-700",
    "bg-white",
  ],
  theme: {
    extend: {
      screens: {
        sms: "425px",
      },

      animation: {
        bounceOnce: "bounceOnce 0.3s",
      },

      keyframes: {
        bounceOnce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3%)" },
        },
      },

      colors: {
        grass: "#9bcc50",
        fire: "#fd7d24",
        water: "#4592c4",
        bug: "#729f3f",
        dark: "#729f3f",
        dragonTop: "#53a4cf",
        dragonBot: "#f16e57",
        electric: "#eed535",
        fairy: "#fdb9e9",
        fighting: "#d56723",
        flyingTop: "#3dc7ef",
        flyingBot: "#bdb9b8",
        ghost: "#7b62a3",
        groundTop: "#f7de3f",
        groundBot: "#ab9842",
        ice: "#51c4e7",
        normal: "#a4acaf",
        poison: "#b97fc9",
        psychic: "#f366b9",
        rock: "#a38c21",
        steel: "#9eb7b8",
      },
    },
  },
  plugins: [
    // plugin(function ({ addUtilities }) {
    //   const newUtilities = {
    //     ".grass": {
    //       backgroundColor: "#9bcc50",
    //       color: "#000000",
    //       borderRadius: "0.375rem",
    //     },
    //   };
    //   addUtilities(newUtilities, ["responsive", "hover"]);
    // }),
  ],
};

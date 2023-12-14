/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,css}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: [
        "Monaco",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    container: {
      center: true,
      screens: {
        sm: "50rem",
      },
    },
    extend: {
      colors: {
        orange: {
          100: "#EBA701", // Adjust the shades and numbering as per your preference
          200: "#E6950F",
          300: "#E99602",
          400: "#E48011",
          500: "#E9801F",
          600: "#E16F13",
          700: "#E3650D",
          800: "#E14C0F",
          900: "#D03D03",
          1000: "#CA2509",
        },
        slate: {
          850: "hsl(035deg 87% 26%)",
        },
        primary: "#E9801F",
      },
    },
  },
  plugins: [],
};

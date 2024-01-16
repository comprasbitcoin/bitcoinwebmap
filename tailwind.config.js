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
        white: "#FFFFFF",
        offWhite: "#F5F5F5",
        darkGray: "#333333",
        black: "#000000",
        navyBlue: "#000080",
        charcoal: "#434343",
        lightGray: "#D3D3D3",
        paleBlue: "#E6F0FA",
        softWhite: "#FAFAFA",
        pastelGreen: "#DFF0D8",
        beige: "#F5F5DC",
        lightCream: "#FFF8DC",
        slate: {
          850: "hsl(035deg 87% 26%)",
        },
        primary: "#E9801F",
        textColors: {
          white: "#FFFFFF",
          offWhite: "#F5F5F5",
          darkGray: "#333333",
          black: "#000000",
          navyBlue: "#000080",
          charcoal: "#434343",
        },
        backgroundColors: {
          lightGray: "#D3D3D3",
          paleBlue: "#E6F0FA",
          softWhite: "#FAFAFA",
          pastelGreen: "#DFF0D8",
          beige: "#F5F5DC",
          lightCream: "#FFF8DC",
        },
      },
    },
  },
  plugins: [],
};

import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          foreground: "#2185D5",
          DEFAULT: "#2185D5",
        },
        secondary: {
          foreground: "#3A4750",
          DEFAULT: "#3A4750",
        },
        dark: "#303841",
        gray: "#F3F3F3",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        vazir: ["var(--font-vazir)"],
        mono: ["var(--font-mono)"],
      },
      animation: {
        "border-radius": "border-radius-animation 3s ease-in-out forwards",
      },
      keyframes: {
        "border-radius-animation": {
          "0%": { borderRadius: "0%" },
          "50%": { borderRadius: "40px" },
          "100%": { borderRadius: "140px" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "heroui", // prefix for themes variables
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light",
      themes: {
        light: {
          colors: {
            background: "#F3F3F3",
            primary: {
              foreground: "#2185D5",
              DEFAULT: "#2185D5",
            },
            secondary: {
              foreground: "#3A4750",
              DEFAULT: "#3A4750",
            },
            dark: "#303841",
            gray: "#F3F3F3",
          },
        },
        dark: {
          colors: {
            background: "hsl(212, 15%, 22%)",
            primary: {
              foreground: "#2185D5",
              DEFAULT: "#2185D5",
            },
            secondary: {
              foreground: "#3A4750",
              DEFAULT: "#3A4750",
            },
            dark: "#303841",
            gray: "#F3F3F3",
          },
        },
      },
    }),
  ],
};

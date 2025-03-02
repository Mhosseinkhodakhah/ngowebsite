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
        dark: "hsl(var(--dark))",
        gray: "hsl(var(--gray))",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        vazir: ["var(--font-vazir)"],
        mono: ["var(--font-mono)"],
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
            background: "#FFFFFF",
            primary: {
              foreground: "hsl(var(--primary))",
              DEFAULT: "hsl(var(--primary))",
            },
            secondary: {
              foreground: "hsl(var(--secondary))",
              DEFAULT: "hsl(var(--secondary))",
            },
            dark: "hsl(var(--dark))",
            gray: "hsl(var(--gray))",
          },
        },
        dark: {
          colors: {
            background: "hsl(212, 15%, 22%)",
            primary: {
              foreground: "hsl(var(--primary))",
              DEFAULT: "hsl(var(--primary))",
            },
            secondary: {
              foreground: "hsl(var(--secondary))",
              DEFAULT: "hsl(var(--secondary))",
            },
            dark: "hsl(var(--dark))",
            gray: "hsl(var(--gray))",
          },
        },
      },
    }),
  ],
};

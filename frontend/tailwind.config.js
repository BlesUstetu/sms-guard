/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8"
        },

        secondary: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
          dark: "#020617"
        },

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
        info: "#06B6D4",

        background: "#F8FAFC",
        surface: "#FFFFFF",
        border: "#E2E8F0"
      },

      fontFamily: {
        sans: [
          "Inter",
          "sans-serif"
        ]
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },

      boxShadow: {
        card: "0 2px 10px rgba(0,0,0,.08)",
        panel: "0 10px 25px rgba(15,23,42,.08)"
      },

      transitionDuration: {
        400: "400ms"
      }
    }
  },

  plugins: []
};

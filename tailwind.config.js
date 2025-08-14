/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class", // 🔥 Enable dark mode via class
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#F5F5F5",
        accent: "#42D674",
        background: "#000000",
        white: "#F5F5F5",
        black: "#000000",
        gray: {
          100: "#F7F8F8",
          200: "#E1E2E3",
          300: "#C4C5C6",
          400: "#A7A8A9",
          500: "#8A8B8C",
          600: "#6B6C6D", // for dark mode
          700: "#4C4D4E", // for dark mode
        },
      },

      fontSize: {
        sm: ["0.875rem", "1.25rem"],
        md: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    function ({ addComponents, theme }) {
      addComponents({
        ".container": {
          minWidth: "100vw",
          minHeight: "100vh",
          fontFamily: "Poppins",
          padding: "1rem",
          paddingTop: "60px", // Adjust for fixed navbar height
        },
        ".wrapper": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          [`@screen sm`]: {
            paddingLeft: "spacing.lg",
            paddingRight: "spacing.lg",
          },
          [`@screen lg`]: {
            paddingLeft: "spacing.xl",
            paddingRight: "spacing.xl",
            maxWidth: "maxWidth.7xl",
          },
        },
      });
    },
  ],
};

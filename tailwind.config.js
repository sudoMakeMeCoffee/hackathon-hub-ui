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
      spacing: {
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
      fontSize: {
        sm: ["0.875rem", "1.25rem"],
        md: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
      },
      // --- Border radius ---
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },

      // --- Heights for buttons/inputs ---
      height: {
        sm: "2rem",
        md: "2.5rem",
        lg: "3rem",
      },

      // --- Widths for buttons/inputs ---
      width: {
        sm: "8rem",
        md: "12rem",
        lg: "16rem",
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
          // paddingTop: "60px", // Adjust for fixed navbar height
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

        // --- Input wrapper styling ---
        ".input-primary": {
          display: "flex",
          alignItems: "center",
          padding: theme("spacing.md"),
          borderRadius: theme("borderRadius.lg"),
          border: `1px solid #aaa`,
          backgroundColor: "#fff",
        },

        // --- Input field styling ---
        ".input-field": {
          flex: "1",
          border: "1px solid #aaa",
          outline: "none",
          backgroundColor: "transparent",
          color: "#000",
          fontSize: theme("fontSize.md")[0],
          borderRadius: theme("borderRadius.md"),
          transition: "background-color 0.2s ease-in-out",
          "&:focus": {
            border: "1px solid #000",
          },
        },

        // --- Primary button base ---
        ".btn-primary": {
          backgroundColor: theme("colors.primary"),
          color: theme("colors.secondary"),
          fontWeight: "600",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: theme("borderRadius.md"),
          transition: "background-color 0.2s ease-in-out",
          boxShadow: theme("boxShadow.sm"),
          "&:hover": {
            backgroundColor: theme("colors.accent"),
            boxShadow: theme("boxShadow.md"),
          },
          "&:disabled": {
            backgroundColor: theme("colors.secondary"),
            cursor: "not-allowed",
            opacity: "0.6",
            boxShadow: "none",
          },
        },

        ".btn-secondary": {
          backgroundColor: "#fff",
          color: "#000",
          fontWeight: "200",
          border: "1px solid #aaa",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: theme("borderRadius.md"),
          transition: "background-color 0.2s ease-in-out",
          boxShadow: theme("boxShadow.sm"),
          "&:hover": {
            boxShadow: theme("boxShadow.md"),
          },
          "&:disabled": {
            backgroundColor: theme("colors.secondary"),
            cursor: "not-allowed",
            opacity: "0.6",
            boxShadow: "none",
          },
        },

        // --- Button size variants ---
        ".btn-sm": {
          fontSize: theme("fontSize.sm")[0],
          padding: `${theme("spacing.sm")} ${theme("spacing.md")}`,
          height: theme("height.sm"),
        },
        ".btn-md": {
          fontSize: theme("fontSize.md")[0],
          padding: `${theme("spacing.sm")} ${theme("spacing.lg")}`,
          height: theme("height.md"),
        },
        ".btn-lg": {
          fontSize: theme("fontSize.lg")[0],
          padding: `${theme("spacing.md")} ${theme("spacing.xl")}`,
          height: theme("height.lg"),
        },

        // --- Input size variants ---
        ".input-sm": {
          fontSize: theme("fontSize.sm")[0],
          padding: `${theme("spacing.sm")} ${theme("spacing.md")}`,
          height: theme("height.sm"),
        },
        ".input-md": {
          fontSize: theme("fontSize.md")[0],
          padding: `${theme("spacing.sm")} ${theme("spacing.lg")}`,
          height: theme("height.md"),
        },
        ".input-lg": {
          fontSize: theme("fontSize.lg")[0],
          padding: `${theme("spacing.md")} ${theme("spacing.xl")}`,
          height: theme("height.lg"),
        },
      });
    },
  ],
};

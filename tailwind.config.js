/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontWeight: {
        400: 400,
        700: 700,
      },
      colors: {
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        dark: {
          desaturatedBlue: "hsl(228, 34%, 66%)",
        },
        light: {
          darkGrayishBlue: "hsl(228, 12%, 44%)",
          veryDarkBlue: "hsl(230, 17%, 14%)",
        },
      },
      backgroundColor: {
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(208, 92%, 53%)",
        youtube: "hsl(348, 97%, 39%)",
        dark: {
          veryDarkBlue: "hsl(230, 17%, 14%)",
          veryDarkBlue2: "hsl(232, 19%, 15%)",
          darkDesaturatedBlue: "hsl(228, 28%, 20%)",
        },
        light: {
          veryPaleBlue: "hsl(228, 28%, 93%)",
          lightGrayishBlue: "hsl(227, 47%, 96%)",
          darkGrayishBlue: "hsl(228, 12%, 44%)",

          toggle: "hsl(230, 22%, 74%)",
        },
      },
      backgroundImage: {
        instagram:
          "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        toggleDark:
          "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      },
    },
  },
  plugins: [],
};

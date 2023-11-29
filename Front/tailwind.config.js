import { red } from '@mui/material/colors';

/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
    themes: {
      light: {
        colors: {
          background: '#f3eefb',

          primary: {
            50: '#522296',
            DEFAULT: '#522296',

          },
          focus: '#F182F6',
          secondary: "#d8c5f2"
        },
      },
      dark: {
        colors: {
          background: '#090411',

          primary: {
            50: '#522296',
            DEFAULT: '#fff',
            focus: '#F182F6',

          },
          focus: '#F182F6',
          secondary: "#200d3a"
        },

        /* primary:"#200d3a",
       
        secondary:"#fff",
        success:"#A0EBBB",
        danger:"#200d3a" */
        /* background: "#03222b", // or DEFAULT
        foreground: "#ddf6fd",
        primary: {
          //... 50 to 900
          foreground: "#fff",
          DEFAULT: "#90e0f9",
        }, */

      },
      extends: {
        colors: {
          white: "#FFFFFF",
          black: "#cce3fd",
          blue: {
            50: "#e6f1fe",
            100: "#cce3fd",
            200: "#99c7fb",
            300: "#66aaf9",
            400: "#338ef7",
            500: "#006FEE",
            600: "#005bc4",
            700: "#004493",
            800: "#002e62",
            900: "#001731",
          },
          // .. rest of the colors
        },

      }
    }
  })],

}


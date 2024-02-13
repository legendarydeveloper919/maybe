const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./public/*.html",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*.{erb,haml,html,slim}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#0B0B0B",
      success: "#10A861",
      warning: "#F79009",
      error: "#F13636",
      gray: {
        25: "#FAFAFA",
        50: "#F5F5F5",
        100: "#F0F0F0",
        200: "#E5E5E5",
        300: "#D6D6D6",
        400: "#A3A3A3 ",
        500: "#737373",
        600: "#525252",
        700: "#3D3D3D",
        800: "#212121",
        900: "#141414",
      },
      "alpha-white": {
        25: "rgba(255, 255, 255, 0.03)",
        50: "rgba(255, 255, 255, 0.05)",
        100: "rgba(255, 255, 255, 0.08)",
        200: "rgba(255, 255, 255, 0.1)",
        300: "rgba(255, 255, 255, 0.15)",
        400: "rgba(255, 255, 255, 0.2)",
        500: "rgba(255, 255, 255, 0.3)",
        600: "rgba(255, 255, 255, 0.4)",
        700: "rgba(255, 255, 255, 0.5)",
        800: "rgba(255, 255, 255, 0.6)",
        900: "rgba(255, 255, 255, 0.7)",
      },
      "alpha-black": {
        25: "rgba(20, 20, 20, 0.03)",
        50: "rgba(20, 20, 20, 0.05)",
        100: "rgba(20, 20, 20, 0.08)",
        200: "rgba(20, 20, 20, 0.1)",
        300: "rgba(20, 20, 20, 0.15)",
        400: "rgba(20, 20, 20, 0.2)",
        500: "rgba(20, 20, 20, 0.3)",
        600: "rgba(20, 20, 20, 0.4)",
        700: "rgba(20, 20, 20, 0.5)",
        800: "rgba(20, 20, 20, 0.6)",
        900: "rgba(20, 20, 20, 0.7)",
      },
      red: {
        25: "#FFFBFB",
        50: "#FFF1F0",
        100: "#FFDEDB",
        200: "#FEB9B3",
        300: "#F88C86",
        400: "#ED4E4E",
        500: "#F13636",
        600: "#EC2222",
        700: "#C91313",
        800: "#A40E0E",
        900: "#7E0707",
      },
      green: {
        25: "#F6FEF9",
        50: "#ECFDF3",
        100: "#D1FADF",
        200: "#A6F4C5",
        300: "#6CE9A6",
        400: "#32D583",
        500: "#12B76A",
        600: "#10A861",
        700: "#078C52",
        800: "#05603A",
        900: "#054F31",
      },
      yellow: {
        25: "#FFFCF5",
        50: "#FFFAEB",
        100: "#FEF0C7",
        200: "#FEDF89",
        300: "#FEC84B",
        400: "#FDB022",
        500: "#F79009",
        600: "#DC6803",
        700: "#B54708",
        800: "#93370D",
        900: "#7A2E0E",
      },
      cyan: {
        25: "#F5FEFF",
        50: "#ECFDFF",
        100: "#CFF9FE",
        200: "#A5F0FC",
        300: "#67E3F9",
        400: "#22CCEE",
        500: "#06AED4",
        600: "#088AB2",
        700: "#0E7090",
        800: "#155B75",
        900: "#155B75",
      },
      blue: {
        25: "#F5FAFF",
        50: "#EFF8FF",
        100: "#D1E9FF",
        200: "#B2DDFF",
        300: "#84CAFF",
        400: "#53B1FD",
        500: "#2E90FA",
        600: "#1570EF",
        700: "#175CD3",
        800: "#1849A9",
        900: "#194185",
      },
      indigo: {
        25: "#F5F8FF",
        50: "#EFF4FF",
        100: "#E0EAFF",
        200: "#C7D7FE",
        300: "#A4BCFD",
        400: "#8098F9",
        500: "#6172F3",
        600: "#444CE7",
        700: "#3538CD",
        800: "#2D31A6",
        900: "#2D3282",
      },
      violet: {
        25: "#FBFAFF",
        50: "#F5F3FF",
        100: "#ECE9FE",
        200: "#DDD6FE",
        300: "#C3B5FD",
        400: "#A48AFB",
        500: "#875BF7",
        600: "#7839EE",
        700: "#6927DA",
        800: "#5720B7",
        900: "#491C96",
      },
      fuchsia: {
        25: "#FEFAFF",
        50: "#FDF4FF",
        100: "#FBE8FF",
        200: "#F6D0FE",
        300: "#EEAAFD",
        400: "#E478FA",
        500: "#D444F1",
        600: "#BA24D5",
        700: "#9F1AB1",
        800: "#821890",
        900: "#6F1877",
      },
      pink: {
        25: "#FFFAFC",
        50: "#FEF0F7",
        100: "#FFD1E2",
        200: "#FFB1CE",
        300: "#FD8FBA",
        400: "#F86BA7",
        500: "#F23E94",
        600: "#D5327F",
        700: "#BA256B",
        800: "#9E1958",
        900: "#840B45",
      },
      orange: {
        25: "#FFF9F5",
        50: "#FFF4ED",
        100: "#FFE6D5",
        200: "#FFD6AE",
        300: "#FF9C66",
        400: "#FF692E",
        500: "#FF4405",
        600: "#E62E05",
        700: "#BC1B06",
        800: "#97180C",
        900: "#771A0D",
      },
    },
    boxShadow: {
      none: "0 0 #0000",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      xs: "0px 1px 2px 0px rgba(11, 11, 11, 0.05)",
      sm: "0px 1px 2px 0px rgba(11, 11, 11, 0.06), 0px 1px 3px 0px rgba(11, 11, 11, 0.10)",
      md: "0px 2px 4px -2px rgba(11, 11, 11, 0.06), 0px 4px 8px -2px rgba(11, 11, 11, 0.10)",
      lg: "0px 4px 6px -2px rgba(11, 11, 11, 0.03), 0px 12px 16px -4px rgba(11, 11, 11, 0.08)",
      xl: "0px 8px 8px -4px rgba(11, 11, 11, 0.03), 0px 20px 24px -4px rgba(11, 11, 11, 0.08)",
      "2xl": "0px 24px 48px -12px rgba(11, 11, 11, 0.12)",
      "3xl": "0px 32px 64px -12px rgba(11, 11, 11, 0.14)",
    },
    extend: {
      fontFamily: {
        display: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "2xs": ".625rem",
      },
      keyframes: {
        'appear-then-fade': {
          '0%,100%': { opacity: 0 },
          '5%,90%': { opacity: 1 },
        },
        'stroke-fill': {
          to: { 'stroke-dashoffset': 0 },
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};

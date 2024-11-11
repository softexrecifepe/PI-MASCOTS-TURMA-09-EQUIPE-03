import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        jetbrains: ["var(--font-jetbrains)", "monospace"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      boxShadow: {
        // Adicionando sua sombra personalizada
        custom: "4px 4px 16px 0px #ccc",
      },
      maxHeight: {
        // Adicionando a altura mínima de 133rem
        "aisde-main-height": "33rem",
        "main-content": "54rem",
      },
      minHeight: {
        "main-content": "54rem",
      },
      width: {
        "cards-pets": "calc(33% - 1.5rem)",
        "custom-width": "58rem", // 1091px em rem
      },
      height: {
        "custom-height": "29rem", // 578px em rem
        "main-content": "54rem",
      },
      gridTemplateColumns: {
        "grid-main": "5.5rem 1fr",
      },
      colors: {
        "mascots-secundary": {
          "50": "#f8f8f8",
        },

        //600 default
        "pets-color": {
          "50": "#fdf5ef",
          "100": "#fbe6d9",
          "200": "#f5cbb3",
          "300": "#efa882",
          "400": "#e67244",
          "500": "#e2592d",
          "600": "#d34223",
          "700": "#af311f",
          "800": "#8c2920",
          "900": "#71241d",
          "950": "#3d0f0d",
        },
        //800 default
        "internato-color": {
          "50": "#fff0f0",
          "100": "#ffdcdc",
          "200": "#ffc0c0",
          "300": "#ff9494",
          "400": "#ff5656",
          "500": "#ff2222",
          "600": "#ff0202",
          "700": "#d80000",
          "800": "#b70202",
          "900": "#920a0a",
          "950": "#510000",
        },
        "exames-color": {
          "50": "#eef8ff",
          "100": "#dcf0ff",
          "200": "#b2e3ff",
          "300": "#6dceff",
          "400": "#20b5ff",
          "500": "#009cff",
          "600": "#007bdf",
          "700": "#0061b4",
          "800": "#005394",
          "900": "#00457c",
          "950": "#002b51",
        },

        //600 default
        "recursos-color": {
          "50": "#eefff3",
          "100": "#d8ffe7",
          "200": "#b3ffcf",
          "300": "#78fdaa",
          "400": "#36f27e",
          "500": "#0cdb5c",
          "600": "#03a642",
          "700": "#078e3b",
          "800": "#0c6f33",
          "900": "#0c5b2c",
          "950": "#003316",
        },
        //600 default
        "mascots-primary": {
          "50": "#effefa",
          "100": "#c9fef1",
          "200": "#93fce5",
          "300": "#55f3d5",
          "400": "#23dec2",
          "500": "#0ac2a9",
          "600": "#05a693",
          "700": "#097c70",
          "800": "#0c635a",
          "900": "#0f524b",
          "950": "#013230",
        },
      },
    },
  },
  plugins: [],
};
export default config;

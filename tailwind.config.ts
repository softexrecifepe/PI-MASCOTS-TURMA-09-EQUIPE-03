import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // Adicionando sua sombra personalizada
        custom: "4px 4px 16px 0px #ccc",
      },
      maxHeight: {
        // Adicionando a altura mínima de 133rem
        "aisde-main-height": "33.25rem",
      },
      height: {
        // Adicionando a largura personalizada de 932px convertida para rem
        "height-main": "58.25rem",
      },
      gridTemplateColumns: {
        "grid-main": "5.5rem 1fr",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        "mascots-secundary": {
          "50": "#f8f8f8",
        },

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
      "pastel-green": {
        "50": "#f1fcf2",
        "100": "#defae1",
        "200": "#bef4c6",
        "300": "#8bea9a",
        "400": "#53d769",
        "500": "#2abd43",
        "600": "#1d9c33",
        "700": "#1a7b2b",
        "800": "#1a6127",
        "900": "#175023",
        "950": "#072c0f",
      },
    },
  },
  plugins: [],
};
export default config;

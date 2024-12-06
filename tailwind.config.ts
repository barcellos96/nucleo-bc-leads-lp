import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      s: "360px",
      sm: "426px",
      sg: "500px",
      slg: "600px",
      md: "860px",
      lg: "1024px",
      lgg: "1200px",
      xlg: "1320px",
      xl: "1650px",
    },
    fontSize: {
      sm: "0.7rem",
      base: "0.85rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        // você pode adicionar mais opções de sombra de texto aqui
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-glow": "0 0 40px 5px rgba(255, 255, 255, 0.3)",
        "3d-bottom":
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.1), 0 12px 16px rgba(0, 0, 0, 0.1)",
      },
      gridTemplateColumns: {
        app: "minmax(16rem, 19rem) 1fr",
        profileLayout: "minmax(9.5rem, 20rem) minmax(18rem, 1fr)",
        profileLayoutSm: "minmax(9.5rem, 1fr)",
        profileSideBar: "max-content 1fr max-content",
        dashUpLg: "minmax(25rem,1fr) minmax(14rem, 1fr)",
      },
      keyframes: {
        customBounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            "animation-timing-function": "ease-in-out",
          },
          "50%": {
            transform: "translateY(-15px)", // Ajuste a altura do salto aqui para um movimento mais suave
            "animation-timing-function": "ease-in-out",
          },
        },
        pulseCircle: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "1",
            borderColor: "rgba(255, 0, 0, 1)",
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "0.7",
            borderColor: "rgba(0, 0, 255, 1)",
          },
        },
        growShrink3: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(0.4)",
          },
        },
      },
      animation: {
        "custom-bounce": "customBounce 2s infinite", // Ajuste a duração da animação aqui
        "pulse-circle": "pulseCircle 2s infinite",
        "grow-shrink": "growShrink3 5s ease-in-out 0.4s infinite both",
      },
    },
  },
  plugins: [],
};
export default config;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#111111",
        bg2: "#1B1B1B",
        card: "#202020",
        brand: "#FF6B00",
        brand2: "#FF8C42",
        muted: "#A0A0A0",
        line: "#353535",
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(3%,-4%) scale(1.08)" },
        },
        sheen: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        drift: "drift 9s ease-in-out infinite",
        sheen: "sheen 6s linear infinite",
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      keyframes: {
        appearBottom: {
          "0%": { transform: "translateY(350px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        appearTop: {
          "0%": { transform: "translateY(-350px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        appearBottom: "appearBottom 300ms linear",
        appearTop: "appearTop 300ms linear",
        hideBottom: "appearBottom 300ms linear reverse",
        hideTop: "appearTop 300ms linear reverse",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      perspective: {
        1000: "1000px",
      },
      rotate: {
        "y-180": "180deg",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      animation: {
        pop: 'pop 0.5s ease forwards',
      },
      keyframes: {
        pop: {
          '0%': { transform: 'translateY(100%) scale(0)', opacity: '1' },
          '50%': { transform: 'translateY(-50%) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-100%) scale(0)', opacity: '0' },
        },
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".transform-style-3d": {
          transformStyle: "preserve-3d",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
      });
    },
  ],
};

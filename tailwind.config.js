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

import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js"; // Ensure the import is correct

type Props = {
  minDuration: number;
  maxDuration: number;
};

const NeonCubes = ({ minDuration, maxDuration }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Define the number of rows and columns
  const rows = 6; // Adjust as needed
  const cols = 14; // Adjust as needed

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      // Generate dots to fill the area of the div
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const dot = document.createElement("div");
          dot.className =
            "dot absolute w-3 h-3 bg-black pointer-events-none scale-0 opacity-0"; // Added 'opacity-0' class

          // Calculate the position of each dot
          const x = (col / cols) * containerWidth;
          const y = (row / rows) * containerHeight;

          dot.style.left = `${x + 6}px`; // Set the x position
          dot.style.top = `${y + 6}px`; // Set the y position
          container.appendChild(dot);
        }
      }

      const dotAll = container.querySelectorAll(".dot");
      const animation = anime.timeline({
        targets: dotAll,
        easing: "easeInOutExpo",
        loop: 1,
        delay: anime.stagger(1),
      });

      animation
        .add({
          scale: 2,
          opacity: 1,
          duration: function () {
            return anime.random(minDuration, maxDuration);
          },
        })
        .add({
          scale: 0,
          opacity: 0,
          duration: function () {
            return anime.random(minDuration, maxDuration);
          },
        });
    }
  }, []);

  return (
    <div
      className="absolute w-full h-full left-0 top-0 overflow-hidden"
      ref={containerRef}
    ></div>
  );
};

// Add the keyframes in your CSS file
// @keyframes animateColor {
//   0% {
//     filter: hue-rotate(0deg);
//   }
//   100% {
//     filter: hue-rotate(360deg);
//   }
// }

export default NeonCubes;

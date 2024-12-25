import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js"; // Ensure the import is correct

const NeonCubes = () => {
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
          dot.className = "dot absolute w-3 h-3 bg-black  pointer-events-none scale-0 opacity-0"; // Added 'opacity-0' class

          // Calculate the position of each dot
          const x = (col / cols) * containerWidth;
          const y = (row / rows) * containerHeight;

          dot.style.left = `${x}px`; // Set the x position
          dot.style.top = `${y}px`; // Set the y position
          container.appendChild(dot);
        }
      }


      
      const dotAll = container.querySelectorAll(".dot");
      const animation = anime.timeline({
        targets: dotAll,
        easing: "easeInOutExpo",
        loop: 1,
        delay: anime.stagger(15),
      });

      animation
        .add({
          scale: 2,
          opacity: 1,
          duration: function () {
            return anime.random(200, 3000);
          },
        })
        .add({
          scale: 0,
          opacity: 0,
          duration: function () {
            return anime.random(200, 3000);
          },
        });
    }
  }, []);

  return (
    <div className="">
      <div
        ref={containerRef}
        className="relative w-96 h-40 bg-transparent overflow-hidden "
      >
        {/* Container content */}
      </div>
    </div>
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

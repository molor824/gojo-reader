import { useEffect, useState } from "react";

type Props = {
  greeting: string;
  greetingJp: string;
};

export const MouseMask = ({ greeting, greetingJp }: Props) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [greetingRect, setGreetingRect] = useState(new DOMRect());
  const [greetingElem, setGreetingElem] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!greetingElem) return;

    let observer = new ResizeObserver(() => {
      setGreetingRect(greetingElem.getBoundingClientRect());
    });
    observer.observe(greetingElem);

    return () => observer.disconnect();
  }, [greetingElem]);

  const handleMouseMove = (e: React.MouseEvent) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    if (
      mouseX > greetingRect.left &&
      mouseX < greetingRect.right &&
      mouseY > greetingRect.top &&
      mouseY < greetingRect.bottom
    ) {
      setMousePos({ x: mouseX, y: mouseY });
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <>
      <div
        className="relative text-8xl font-bold text-center w-full h-[500px] m-[100px] flex flex-col items-center justify-center"
        onMouseMove={handleMouseMove}
      >
        <div
          className="fixed top-0 left-0 w-[200px] h-[200px] transition-[width,height,opacity] border-2 rounded-full overflow-hidden bg-black"
          style={{
            transform: `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))`,
            opacity: visible ? 1 : 0,
          }}
        >
          <h1
            className="absolute top-0 left-0 text-center text-8xl font-bold"
            style={{
              width: greetingRect.width,
              height: greetingRect.height,
              transform: `translate(${
                greetingRect.left - mousePos.x + 100
              }px, ${greetingRect.top - mousePos.y + 100}px)`,
            }}
          >
            {greetingJp}
          </h1>
        </div>
        <h1 className="w-full" ref={setGreetingElem}>
          {greeting}
        </h1>
      </div>
    </>
  );
};

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
  const [scroll, setScroll] = useState(0);

  const maskRect = new DOMRect(
    greetingRect.x,
    greetingRect.y - scroll,
    greetingRect.width,
    greetingRect.height
  );

  useEffect(() => {
    if (!greetingElem) return;

    let observer = new ResizeObserver(() => {
      setGreetingRect(greetingElem.getBoundingClientRect());
    });
    observer.observe(greetingElem);

    return () => observer.disconnect();
  }, [greetingElem]);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    if (
      mouseX > maskRect.left &&
      mouseX < maskRect.right &&
      mouseY > maskRect.top &&
      mouseY < maskRect.bottom
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
        className="relative text-6xl sm:text-8xl font-bold text-center w-full h-[400px] m-[100px] flex flex-col gap-8 items-center justify-center"
        onMouseMove={handleMouseMove}
      >
        <div
          className="hidden sm:block fixed top-0 left-0 w-[200px] h-[200px] transition-[width,height,opacity] border-2 rounded-full overflow-hidden bg-black"
          style={{
            transform: `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))`,
            opacity: visible ? 1 : 0,
          }}
        >
          <h1
            className="absolute top-0 left-0 text-center text-8xl font-bold"
            style={{
              width: maskRect.width,
              height: maskRect.height,
              transform: `translate(${maskRect.left - mousePos.x + 100}px, ${
                maskRect.top - mousePos.y + 100
              }px)`,
            }}
          >
            {greetingJp}
          </h1>
        </div>
        <h1 className="w-full" ref={setGreetingElem}>
          {greeting}
        </h1>
        <h1 className="w-full text-xl text-gray-400 sm:hidden">{greetingJp}</h1>
      </div>
    </>
  );
};

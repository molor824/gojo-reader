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
    const observer = new ResizeObserver(() => {
      setGreetingRect(greetingElem.getBoundingClientRect());
    });
    observer.observe(greetingElem);
    return () => observer.disconnect();
  }, [greetingElem]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setMousePos({ x: mouseX, y: mouseY });
    setVisible(true);
  };

  return (
    <div 
      className="relative min-h-[20vh] w-screen flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="text-8xl mt-[-150px] font-bold leading-none tracking-tighter">
        <h1 className="w-full" ref={setGreetingElem}>
          {greeting}
        </h1>
        <div
          className="fixed pointer-events-none"
          style={{
            left: mousePos.x - 150,
            top: mousePos.y - 150,
            width: "200px",
            height: "200px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.2s ease",
          }}
        >
          <div
            className="absolute inset-0 bg-black rounded-full overflow-hidden border-2 border-white/50"
          >
            <h1
              className="absolute text-white text-8xl whitespace-nowrap font-bold leading-none tracking-tighter"
              style={{
                transform: `translate(${greetingRect.left - mousePos.x + 150}px, ${
                  greetingRect.top - mousePos.y + 150
                }px)`,
              }}
            >
              {greetingJp}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

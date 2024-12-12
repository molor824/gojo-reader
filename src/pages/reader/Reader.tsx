import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import readings from "../../readings.json";

const Reader = () => {
  const location = useLocation();
  const { level } = location.state || { level: "N5" };
  const [readingText, setReadingText] = useState("");

  useEffect(() => {
    if ((readings.readings as any)[level]) {
      setReadingText((readings.readings as any)[level].text);
    } else {
      setReadingText("Reading not found.");
    }
  }, [level]);

  return (
    <div className="container flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-[-30px]">
        Reader Page - Level: {level}
      </h1>
      <p className="mt-16 text-2xl leading-[70px]">{readingText}</p>
    </div>
  );
};

export default Reader;

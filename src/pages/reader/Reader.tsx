import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import readings from "../../readings.json";
import { JapanText } from "../../components/JapanText";

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
    <div className="container flex flex-col gap-4 items-center p-8">
      <h1 className="text-4xl font-bold mt-[120px] mb-10">Reader Page - Level: {level}</h1>
      <JapanText text={readingText} />
    </div>
  );
};

export default Reader;

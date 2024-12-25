import AudioAnimation from "./AudioAnimation"; // Import the new component
import { useDefinitionHook } from "../hooks/useDefinitionHook";
import NeonCubes from "./NeonCubes";
import { useState } from "react";

const REVEAL_DURATION = 1000;
const ANIMATION_START_DURATION = 500;
const ANIMATION_IDLE_DURATION = 400;

interface KanjiProps {
  word: string;
  reveal: boolean;
  onClick?: () => void;
}
export const KanjiFlashcard = ({ word, reveal, onClick }: KanjiProps) => {
  const definition = useDefinitionHook(word);
  const furigana = definition?.japanese[0].reading;
  const meaning = definition?.senses[0].english_definitions.join("; ");
  const [revealAnimation, setRevealAnimation] = useState(false);

  return (
    <div
      className="bg-gray-200 relative text-black rounded-xl p-4 min-w-[300px] justify-center items-center text-center flex flex-col gap-4"
      onClick={() => {
        if (reveal) {
          onClick?.();
          return;
        }
        setRevealAnimation(true);
        setTimeout(() => onClick?.(), REVEAL_DURATION);
        setTimeout(
          () => setRevealAnimation(false),
          REVEAL_DURATION * 2 + ANIMATION_IDLE_DURATION
        );
      }}
    >
      <p className={`text-gray-700 text-lg ${reveal ? "" : "invisible"}`}>
        {furigana ?? "Loading..."}
      </p>
      <div className="hover:text-blue-300 hover:cursor-pointer">
        <h2 className={`text-3xl font-semibold `}>
          {/* 🔊{word} */}
          <AudioAnimation word={word} />
        </h2>
      </div>
      <h2 className={`text-lg font-bold ${reveal ? "" : "invisible"}`}>
        {meaning ?? "Loading..."}
      </h2>
      {revealAnimation && (
        <NeonCubes
          minDuration={ANIMATION_START_DURATION}
          maxDuration={REVEAL_DURATION}
        />
      )}
    </div>
  );
};

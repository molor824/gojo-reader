import AudioAnimation from "./AudioAnimation"; // Import the new component
import { useDefinitionHook } from "../hooks/useDefinitionHook";
import NeonCubes from "./NeonCubes";
import { useState } from "react";

interface KanjiProps {
  word: string;
  reveal: boolean;
  revealDuration: number;
  minRevealDuration: number;
  onClick?: () => void;
}
export const KanjiFlashcard = ({
  word,
  revealDuration,
  minRevealDuration,
  reveal,
  onClick,
}: KanjiProps) => {
  const definition = useDefinitionHook(word);
  const furigana = definition?.japanese[0].reading;
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
        setTimeout(() => onClick?.(), revealDuration);
        setTimeout(() => setRevealAnimation(false), revealDuration * 2);
      }}
    >
      {revealAnimation && (
        <NeonCubes
          minDuration={minRevealDuration}
          maxDuration={revealDuration}
        />
      )}
      {reveal && furigana && (
        <p className="text-gray-700 text-lg">{furigana}</p>
      )}
      <div className="hover:text-blue-300 hover:cursor-pointer">
        <h2 className={`text-3xl font-semibold `}>
          {/* 🔊{word} */}
          <AudioAnimation word={word} />
        </h2>
      </div>
      {reveal && definition && (
        <div className="flex flex-col gap-4 max-w-[400px] w-full overflow-y-scroll max-h-[300px] p-4 rounded-xl bg-gray-100 text-start">
          {definition.senses.map(
            ({ english_definitions, parts_of_speech }, index) => (
              <div key={index} className="flex gap-2">
                <h2 className="text-lg font-bold">{index + 1}.</h2>
                <div>
                  <h2 className="text-lg font-bold">
                    {english_definitions.join("; ")}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {parts_of_speech.join(". ")}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

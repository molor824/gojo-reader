import { useMemo, useState } from "react";
import { DefinitionCard } from "./DefinitionCard";

type Props = {
  text: string;
};

/**
 * Japanese text component where each word can be selected and definition is shown.
 * @param text Text to render. Spaces will be treated as a word seperator without being rendered. Double space will be rendered as a single space.
 */
export const JapanText = ({ text }: Props) => {
  const [selectedWord, setSelectedWord] = useState<number>();
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <div>
      {words.map((word, index) => (
        <span
          className={`${
            index === selectedWord ? "font-bold" : ""
          } hover:underline`}
          onClick={() =>
            setSelectedWord(selectedWord === index ? undefined : index)
          }
        >
          {word}
          {index === selectedWord && (
            <div className="absolute top-full left-0 w-[400px] max-w-[calc(100vw-2rem)]">
              <DefinitionCard word={word} />
            </div>
          )}
        </span>
      ))}
    </div>
  );
};

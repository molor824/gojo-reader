import { useMemo, useState } from "react";
import { JapanWord } from "./JapanWord";

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
    <div className="w-full text-3xl leading-loose sm:text-2xl sm:leading-loose md:text-3xl md:leading-loose lg:text-3xl lg:leading-loose lg: h-[650px]">
      {words.map((word, index) => (
        <JapanWord
          word={word}
          key={index}
          showDefinition={index === selectedWord}
          onClick={(e) =>
            e.target === e.currentTarget &&
            setSelectedWord(index === selectedWord ? undefined : index)
          }
        />
      ))}
    </div>
  );
};

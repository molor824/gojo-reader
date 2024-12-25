import { useMemo } from "react";
import { DefinitionCard } from "./DefinitionCard";

type Props = {
  word: string;
  showDefinition: boolean;
  onClick?: (e: React.MouseEvent) => void;
};

export const JapanWord = ({ word, showDefinition, onClick }: Props) => {
  const { definable, renderWord, searchWord } = useMemo(() => {
    if (!word) {
      return { definable: false, renderWord: " ", searchWord: "" };
    }
    let definable = true;
    let renderWord = word;
    let searchWord = word;
    if (!searchWord) definable = false;
    if (word.startsWith(";")) {
      definable = false;
      renderWord = word.slice(1);
    }
    let splitWord = word.split("/");
    if (splitWord.length > 1) {
      [renderWord, searchWord] = splitWord;
    }
    searchWord = searchWord.replaceAll(/[、。：「」【】？！,.?! ]/g, "");
    return { definable, renderWord, searchWord };
  }, [word]);
  const handleCardElementRef = (ref: HTMLDivElement | null) => {
    if (!ref) return;

    const windowRect = document.body.getBoundingClientRect();
    const rect = ref.getBoundingClientRect();
    let offset = 0;
    if (rect.left < windowRect.left) offset = windowRect.left - rect.left;
    else if (rect.right > windowRect.right)
      offset = windowRect.right - rect.right;

    ref.style.transform = `translate(${offset}px, 0)`;
  };

  return (
    <span
      className={`${
        showDefinition && definable ? "font-bold" : ""
      } hover:underline relative`}
      onClick={(e) => definable && onClick?.(e)}
    >
      {renderWord}
      {definable && showDefinition && (
        <div
          className="absolute top-full z-10 left-0 w-[400px] max-w-[calc(100vw-2rem)]"
          ref={handleCardElementRef}
        >
          <DefinitionCard word={searchWord} />
        </div>
      )}
    </span>
  );
};

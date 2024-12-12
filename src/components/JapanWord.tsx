import { useMemo } from "react";
import { DefinitionCard } from "./DefinitionCard";

type Props = {
  word: string;
  showDefinition: boolean;
  onClick?: () => void;
};

export const JapanWord = ({ word, showDefinition, onClick }: Props) => {
  const { definable, renderWord, searchWord } = useMemo(() => {
    if (!word) {
      return { definable: false, renderWord: " ", searchWord: "" };
    }
    let definable = true;
    let renderWord = word;
    let searchWord = word;
    if (word.startsWith(";")) {
      definable = false;
      renderWord = word.slice(1);
    }
    let splitWord = word.split("/");
    if (splitWord.length > 1) {
      [renderWord, searchWord] = splitWord;
    }
    return { definable, renderWord, searchWord };
  }, [word]);

  return (
    <span
      className={`${
        showDefinition && definable ? "font-bold" : ""
      } hover:underline relative`}
      onClick={() => definable && onClick?.()}
    >
      {renderWord}
      {definable && showDefinition && (
        <div className="absolute top-full left-0 w-[400px] max-w-[calc(100vw-2rem)]">
          <DefinitionCard word={searchWord} />
        </div>
      )}
    </span>
  );
};

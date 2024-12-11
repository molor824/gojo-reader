import { useMemo } from "react";
import { DefinitionCard } from "./DefinitionCard";

const SHORTCUTS: Record<string, string> = {
  する: "為る",
  この: "此の",
  これ: "此れ",
  その: "其の",
  それ: "其れ",
  あの: "彼の",
  あれ: "彼",
  どちら: "何方",
};

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
      if (searchWord.startsWith("!")) {
        searchWord = searchWord.slice(1);
      } else {
        searchWord = SHORTCUTS[searchWord] ?? searchWord;
      }
    }
    return { definable, renderWord, searchWord };
  }, [word]);

  return (
    <span
      className={`${
        showDefinition && definable ? "font-bold" : ""
      } hover:underline`}
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

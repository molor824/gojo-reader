import { speak } from "../speech/speech";
import { DefinitionCard } from "./DefinitionCard";

interface KanjiProps {
  word: string;
  reveal: boolean;
  onClick?: () => void;
}
export const KanjiFlashcard = ({ word, reveal, onClick }: KanjiProps) => {
  return (
    <div
      className="bg-gray-200 text-black rounded-xl p-8 justify-center items-center text-center flex flex-col"
      onClick={onClick}
    >
      <div className="hover:text-blue-300 hover:cursor-pointer">
        <h2 className={`text-3xl font-semibold `} onClick={() => speak(word)}>
          🔊{word}
        </h2>
      </div>
      <div className={`w-[300px] ${reveal ? "" : "invisible"}`}>
        <DefinitionCard word={word} />
      </div>
    </div>
  );
};

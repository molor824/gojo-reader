import { useState } from "react";

interface KanjiProps {
  furigana?: string;
  word: string;
  answer: string;
  reveal: boolean;
  onClick?: () => void;
}
export const KanjiFlashcard = ({
  furigana,
  word,
  answer,
  reveal,
  onClick,
}: KanjiProps) => {
  return (
    <div
      className="bg-gray-200 text-black rounded-xl p-8 justify-center items-center text-center flex flex-col"
      onClick={onClick}
    >
      <p className={`text-lg ${reveal ? "" : "text-transparent"}`}>
        {furigana}
      </p>
      <h2 className="text-3xl font-semibold">{word}</h2>
      <h2 className={`text-xl ${reveal ? "" : "text-transparent"}`}>
        {answer}
      </h2>
    </div>
  );
};

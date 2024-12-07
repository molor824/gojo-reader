import { useState } from "react";
import { KanjiFlashcard } from "../../components/Flashcard";

const FLASH_CARDS = [
  {
    word: "感じる",
    furigana: "かんじる",
    answer: "To feel",
  },
  {
    word: "我慢",
    furigana: "がまん",
    answer: "Patience",
  },
];

export const Review = () => {
  const [reveal, setReveal] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <section className="container flex flex-col items-center gap-8 p-8">
      <div className="max-w-64 w-full">
        <KanjiFlashcard
          reveal={reveal}
          onClick={() => setReveal(true)}
          {...FLASH_CARDS[currentCard]}
        />
      </div>
      {reveal && (
        <button
          onClick={() => {
            setReveal(false);
            setCurrentCard((c) => c + 1);
          }}
        >
          Next
        </button>
      )}
    </section>
  );
};

import { useState } from "react";
import { useDefinitionHook } from "../../hooks/useDefinitionHook";
import { KanjiFlashcard } from "../../components/Flashcard";
import { useUser } from "@clerk/clerk-react";

import NeonCubes from "../../components/NeonCubes";

const REVEAL_DURATION = 1000;
const ANIMATION_START_DURATION = 500;

export const Review = () => {
  const { user } = useUser();
  const [readingIndex, setReadingIndex] = useState(0);

  if (!user || !user.unsafeMetadata || !user.unsafeMetadata.words) {
    return <div>Loading...</div>;
  }

  console.log(Object.keys(user.unsafeMetadata.words));

  const word = Object.keys(user.unsafeMetadata.words)[readingIndex];
  console.log(word);
  const definition = useDefinitionHook(word);
  console.log(definition);

  const [reveal, setReveal] = useState(false);
  const [currentCard, setCurrentCard] = useState(false);

  return (
    <section className="container flex flex-col items-center gap-8 p-8">
      <div className="relative max-w-96 w-full max-h-56 h-full">
        {currentCard && (
          <NeonCubes
            minDuration={ANIMATION_START_DURATION}
            maxDuration={REVEAL_DURATION}
          />
        )}

        <KanjiFlashcard
          reveal={reveal}
          onClick={() => {
            if (reveal) return;
            setCurrentCard(true);
            setTimeout(() => {
              setCurrentCard(false);
            }, REVEAL_DURATION * 2);

            setTimeout(() => {
              setReveal(true);
            }, REVEAL_DURATION);
          }}
          word={word}
          furigana={definition?.japanese[0].reading}
          answer={definition?.senses[0].english_definitions[0]!}
        />
      </div>
      {reveal && (
        <button
          className="dot p-2 w-32 rounded-2xl"
          onClick={() => {
            setReveal(false);
            setCurrentCard(false);
            setReadingIndex((c) => c + 1);
          }}
        >
          Next
        </button>
      )}
    </section>
  );
};

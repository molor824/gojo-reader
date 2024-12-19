import { useState } from "react";
import { useDefinitionHook } from "../../hooks/useDefinitionHook";
import { KanjiFlashcard } from "../../components/Flashcard";
import { useUser } from "@clerk/clerk-react";

import NeonCubes from "../../components/NeonCubes";


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
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <section className="container flex flex-col items-center gap-8 p-8">
      <NeonCubes />
      <div className="max-w-64 w-full">
        
        <KanjiFlashcard
          reveal={reveal}
          onClick={() => setReveal(true)}
          word={word}
          furigana={definition?.japanese[0].reading}
          answer={definition?.senses[0].english_definitions[0]!}
        />
      </div>
      {reveal && (
        <button
          onClick={() => {
            setReveal(false);
            setCurrentCard((c) => c + 1);
            setReadingIndex((c) => c + 1);
          }}
        >
          Next
        </button>
      )}
    </section>
  );
};

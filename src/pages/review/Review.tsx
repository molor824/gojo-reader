import { useState, useMemo } from "react";
import { KanjiFlashcard } from "../../components/Flashcard";
import { useUser } from "@clerk/clerk-react";

import NeonCubes from "../../components/NeonCubes";
import { UserData } from "../../types/UserDataType";

const MEMO_COLORS = ["red", "orange", "yellow", "green", "blue"];

export const Review = () => {
  const { user } = useUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  const [reveal, setReveal] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const metadata = user.unsafeMetadata as UserData;

  const words = useMemo(
    () =>
      Object.entries(metadata.words).sort(
        (a, b) => b[1].memorizationRate - a[1].memorizationRate
      ),
    []
  );
  const [currentWord, currentMemo] = words[currentCard];
  const handleMemorizationRate = (rate: number) => {
    if (currentMemo.memorizationRate >= 4 && rate >= 4)
      delete metadata.words[currentWord];
    else metadata.words[currentWord].memorizationRate = rate;

    setReveal(false);
    setCurrentCard(currentCard + 1);
    user.update({ unsafeMetadata: metadata });
  };

  return (
    <section className="container flex flex-col items-center gap-8 p-8">
      <NeonCubes />
      <h1 className="text-4xl font-bold">Review Page</h1>
      <KanjiFlashcard
        word={currentWord}
        reveal={reveal}
        onClick={() => setReveal(true)}
      />
      {reveal && (
        <div className="flex flex-col items-center gap-8 p-8 text-white text-center">
          <h1 className="text-4xl font-bold">How well did you guess?</h1>
          <div className="flex gap-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleMemorizationRate(i)}
                  className="rounded-lg p-2 bg-opacity-70 hover:bg-opacity-100"
                  style={{ backgroundColor: MEMO_COLORS[i] }}
                >
                  {i + 1}
                </button>
              ))}
          </div>
        </div>
      )}
    </section>
  );
};

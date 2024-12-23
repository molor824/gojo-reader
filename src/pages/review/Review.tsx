import { useState, useEffect } from "react";
import { KanjiFlashcard } from "../../components/Flashcard";
import { useUser } from "@clerk/clerk-react";

import NeonCubes from "../../components/NeonCubes";
import { UserData } from "../../types/UserDataType";
import { ReviewRating } from "../../components/ReviewRating";

export const Review = () => {
  const { user, isLoaded } = useUser();
  const [reveal, setReveal] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [rating, setRating] = useState(0);
  const [words, setWords] = useState<string[]>([]);
  const currentWord = words[currentCard];

  const metadata = user?.unsafeMetadata as UserData;

  const sortWords = () => {
    if (!metadata.words) return;

    const sortedWords = Object.entries(metadata.words).sort(
      (a, b) => a[1].memorizationRate - b[1].memorizationRate
    );
    setWords(sortedWords.map(([word]) => word));
  };

  useEffect(sortWords, []);

  const handleNext = (rate: number) => {
    if (!metadata.words) return;

    if (rate <= 0) delete metadata.words[currentWord];
    else metadata.words[currentWord].memorizationRate = rate;

    setReveal(false);
    setRating(0);
    setCurrentCard(currentCard + 1);
    user!.update({ unsafeMetadata: metadata });
  };
  const handleReReview = () => {
    setCurrentCard(0);
    setReveal(false);
    setRating(0);
    sortWords();
  };

  return (
    <section className="container flex flex-col items-center gap-8 p-8">
      {user ? (
        <>
          <NeonCubes />
          <h1 className="text-4xl font-bold">Review Page</h1>
          {currentCard < words.length ? (
            <KanjiFlashcard
              word={currentWord}
              reveal={reveal}
              onClick={() => setReveal(true)}
            />
          ) : words.length > 0 ? (
            <>
              <h2>No words left to review</h2>
              <p>Would you like to re-review your words?</p>
              <button
                onClick={handleReReview}
                className="bg-green-300 hover:bg-green-400 rounded-xl p-2"
              >
                Re-review
              </button>
            </>
          ) : (
            <>
              <h2>There are no words to review in your review list</h2>
              <p>
                Add some words to your review list by going to the reading page
              </p>
            </>
          )}
          {reveal && (
            <div className="flex flex-col items-center gap-8 p-8 text-white text-center">
              <h1 className="text-4xl font-bold">How well did you guess?</h1>
              <ReviewRating rating={rating} onRate={setRating} />
              <button
                onClick={() => handleNext(0)}
                className="hover:underline text-gray-600 hover:text-gray-400"
              >
                Remove this word
              </button>
              {rating > 0 && (
                <button
                  className="rounded-xl bg-blue-300 text-black p-2"
                  onClick={() => handleNext(rating)}
                >
                  Next
                </button>
              )}
            </div>
          )}
        </>
      ) : !isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div>Please sign in</div>
      )}
    </section>
  );
};

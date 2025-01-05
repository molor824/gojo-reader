import { useState, useEffect } from "react";
import { KanjiFlashcard } from "../../components/Flashcard";
import { useUser } from "@clerk/clerk-react";
import { UserData } from "../../types/UserDataType";
import { ReviewRating } from "../../components/ReviewRating";
import { useTranslation } from "react-i18next";

export const Review = () => {
  const { user, isLoaded } = useUser();
  const { t } = useTranslation();
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
          <h1 className="text-4xl font-bold">{t("Review")}</h1>
          {currentCard < words.length ? (
            <KanjiFlashcard
              word={currentWord}
              reveal={reveal}
              onClick={() => setReveal(true)}
            />
          ) : words.length > 0 ? (
            <>
              <h2>{t("noWordsLeft")}</h2>
              <p>{t("reReviewPrompt")}</p>
              <button
                onClick={handleReReview}
                className="bg-green-300 hover:bg-green-400 rounded-xl p-2"
              >
                {t("reReviewButton")}
              </button>
            </>
          ) : (
            <>
              <h2>{t("noWordsInList")}</h2>
              <p>{t("addWordsPrompt")}</p>
            </>
          )}
          {reveal && (
            <div className="flex flex-col items-center gap-8 p-8 text-white text-center">
              <h1 className="text-4xl font-bold">{t("howWellDidYouGuess")}</h1>
              <ReviewRating rating={rating} onRate={setRating} />
              <button
                onClick={() => handleNext(0)}
                className="hover:underline text-gray-600 hover:text-gray-400"
              >
                {t("removeWord")}
              </button>
              {rating > 0 && (
                <button
                  className="dot rounded-xl bg-blue-300 text-black p-2"
                  onClick={() => handleNext(rating)}
                >
                  {t("next")}
                </button>
              )}
            </div>
          )}
        </>
      ) : !isLoaded ? (
        <div>{t("loading")}</div>
      ) : (
        <div>{t("pleaseSignIn")}</div>
      )}
    </section>
  );
};

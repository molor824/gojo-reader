import { useState } from "react";
import { speak } from "../speech/speech";
import { useUser } from "@clerk/clerk-react";
import { UserData } from "../types/UserDataType";
import { useDefinitionHook } from "../hooks/useDefinitionHook";

type Props = {
  word: string;
};

export const DefinitionCard = ({ word }: Props) => {
  const [readingIndex, setReadingIndex] = useState(0);
  const definition = useDefinitionHook(word);

  const { user } = useUser();
  console.log(user?.unsafeMetadata);

  const handleFlashcard = () => {
    const word = definition?.japanese[readingIndex].word;
    if (!user) return;
    const metadata = user.unsafeMetadata as UserData;
    if (!metadata.words) metadata.words = {};

    if (metadata.words[word!]) {
      //memorization
      if (metadata.words[word!].memorizationRate >= 5) {
        delete metadata.words[word!];
      } else {
        metadata.words[word!].memorizationRate = 0;
      }
    } else {
      metadata.words[word!] = { memorizationRate: 0, furigana: "", utga: "" };
    }

    user
      .update({ unsafeMetadata: metadata })
      .then(() => console.log("Success"));
  };

  return (
    <div className="w-full rounded-lg bg-gray-800 text-white p-4">
      {definition ? (
        <div className="flex flex-col gap-4">
          <div className="flex w-full gap-4 justify-between">
            <div>
              <h1 className="text-[10px]">
                {definition.japanese[readingIndex].reading}
              </h1>
              <h1
                className={`text-[20px]`}
                onClick={() => speak(definition.japanese[readingIndex].word)}
              >
                {definition.japanese[readingIndex].word}
              </h1>
              <button
                className="bg-white rounded text-black px-3 hover:bg-slate-300"
                onClick={handleFlashcard}
              >
                add
              </button>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setReadingIndex((i) => Math.max(i - 1, 0))}
                className={`bg-gray-300 bg-opacity-0 hover:bg-opacity-20 rounded-lg p-2 ${
                  readingIndex === 0 ? "text-gray-500" : ""
                }`}
              >
                &larr;
              </button>
              <button
                onClick={() =>
                  setReadingIndex((i) =>
                    Math.min(i + 1, definition.japanese.length - 1)
                  )
                }
                className={`bg-gray-300 bg-opacity-0 hover:bg-opacity-20 rounded-lg p-2 ${
                  readingIndex === definition.japanese.length - 1
                    ? "text-gray-500"
                    : ""
                }`}
              >
                &rarr;
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-between overflow-y-scroll max-h-[300px]">
            {definition.senses.map(
              ({ english_definitions, parts_of_speech }, index) => (
                <div key={index} className="flex gap-2">
                  <h2 className="text-lg font-bold">{index + 1}.</h2>
                  <div>
                    <h2 className="text-lg font-bold">
                      {english_definitions.join("; ")}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {parts_of_speech.join(". ")}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-2xl text-gray-400">Loading...</p>
      )}
    </div>
  );
};

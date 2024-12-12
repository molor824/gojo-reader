import { useEffect, useState } from "react";

type Props = {
  word: string;
};

type Definition = {
  slug: string;
  japanese: {
    word: string;
    reading: string;
  }[];
  senses: {
    parts_of_speech: string[];
    english_definitions: string[];
  }[];
};

const wordCache: Record<string, Definition> = {};

export const DefinitionCard = ({ word }: Props) => {
  const [definition, setDefinition] = useState<Definition | undefined>(
    wordCache[word]
  );
  const [readingIndex, setReadingIndex] = useState(0);

  useEffect(() => {
    if (word in wordCache) {
      setDefinition(wordCache[word]);
    } else {
      fetch(`/jisho?word=${encodeURIComponent(word)}`)
        .then((res) =>
          res.status === 200
            ? res.json()
            : Promise.reject(new Error(res.statusText))
        )
        .then((def) => {
          wordCache[word] = def;
          setDefinition(def);
        })
        .catch(console.error);
    }
  }, [word]);

  return (
    <div className="w-full rounded-lg bg-gray-800 text-white p-4">
      {definition ? (
        <div className="flex flex-col gap-4">
          <div className="flex w-full gap-4 justify-between">
            <div>
              <h1 className="text-[10px]">
                {definition.japanese[readingIndex].reading}
              </h1>
              <h1 className="text-[20px]">
                {definition.japanese[readingIndex].word}
              </h1>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setReadingIndex((i) => Math.max(i - 1, 0))}
                className="bg-gray-300 bg-opacity-0 hover:bg-opacity-20 rounded-lg p-2"
              >
                &larr;
              </button>
              <button
                onClick={() =>
                  setReadingIndex((i) =>
                    Math.min(i + 1, definition.japanese.length - 1)
                  )
                }
                className="bg-gray-300 bg-opacity-0 hover:bg-opacity-20 rounded-lg p-2"
              >
                &rarr;
              </button>
            </div>
          </div>
          <div className="flex gap-4 justify-between overflow-scroll max-h-[400px]">
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

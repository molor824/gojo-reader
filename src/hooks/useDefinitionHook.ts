import { useState, useEffect } from "react";

export type Definition = {
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

export function useDefinitionHook(word: string) {
  const [definition, setDefinition] = useState<Definition | undefined>(
    wordCache[word]
  );

  useEffect(() => {
    if (word in wordCache) {
      setDefinition(wordCache[word]);
    } else {
      fetch(`/api/jisho?word=${encodeURIComponent(word)}`)
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

  return definition;
}

import { useEffect, useState } from "react";

type Props = {
  word: string;
};

type Meaning = {
  tag: string;
  meaning: string;
};
type Definition = {
  furigana: (string | null)[];
  meanings: Meaning[];
};

const PARSER = new DOMParser();

const fetchDefinition = (word: string) =>
  fetch(`https://jisho.org/word/${word}`)
    .then((res) =>
      res.status === 200
        ? res.text()
        : Promise.reject(new Error(res.statusText))
    )
    .then((res) => {
      let doc = PARSER.parseFromString(res, "text/html");
      let furiganaElement = doc.getElementsByClassName(
        "furigana"
      )[0] as HTMLElement;
      let meaningTagsElements = Array.from(
        doc.getElementsByClassName("meaning-tags")
      ) as HTMLElement[];
      let meaningWrapperElements = Array.from(
        doc.getElementsByClassName("meaning-wrapper")
      ) as HTMLElement[];

      let furigana = Array.from(furiganaElement.children).map(
        (child) => child.textContent
      );
      let meanings = meaningWrapperElements.map((elem, index) => {
        let meaningElement = elem.getElementsByClassName("meaning-meaning")[0];
        let meaning = meaningElement.textContent;
        let tag = meaningTagsElements[index].textContent;
        if (!meaning) throw new Error("No meaning found");
        if (!tag) throw new Error("No tag found");
        return { tag, meaning };
      });

      return Promise.resolve<Definition>({ furigana, meanings });
    });

// Cache used for storing the word definition data, that way you don't have to fetch the same data multiple times
const cache: Record<string, Definition> = {};

export const DefinitionCard = ({ word }: Props) => {
  const [definition, setDefinition] = useState<Definition>();

  useEffect(() => {
    if (cache[word]) setDefinition(cache[word]);
    else {
      setDefinition(undefined);
      fetchDefinition(word)
        .then((def) => {
          cache[word] = def;
          setDefinition(def);
        })
        .catch(console.error);
    }
  }, [word]);

  return (
    <div className="w-full rounded-lg bg-gray-800 text-white p-4">
      {definition ? (
        <div className="flex flex-col gap-4">
          <h1 className="flex">
            {definition.furigana.map((furigana, index) => (
              <div className="flex flex-col items-center" key={index}>
                <span className="text-[10px]">{furigana}</span>
                <span className="text-xl">{word.charAt(index)}</span>
              </div>
            ))}
          </h1>
          {definition.meanings.map(({ meaning, tag }, index) => (
            <div key={index} className="flex gap-2">
              <span>{index + 1}. </span>
              <div>
                <span className="text-gray-400 text-sm">{tag}</span>
                <p>{meaning}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-2xl text-gray-400">Loading...</p>
      )}
    </div>
  );
};

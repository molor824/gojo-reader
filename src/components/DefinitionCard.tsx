import { useEffect, useState } from "react";

type Props = {
  word: string;
};

type Meaning = {
  tag?: string;
  meaning: string;
};
type Definition = {
  furigana: (string | null)[];
  meanings: Meaning[];
};

const PARSER = new DOMParser();

function fetchDefinition(word: string) {
  return fetch(`https://jisho.org/api/v1/search/words?keyword=${word}`)
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
        return { tag, meaning };
      });

      return Promise.resolve({});
    });
}

// Cache used for storing the word definition data, that way you don't have to fetch the same data multiple times
const cache: Record<string, Definition> = {};

export const DefinitionCard = ({ word }: Props) => {
  const [definition, setDefinition] = useState<Definition>();

  useEffect(() => {
    if (cache[word]) setDefinition(cache[word]);
  }, [word]);

  return <div></div>;
};

type Props = {
  word: string;
  showMeaning: boolean;
};

export const Word = ({ word, showMeaning }: Props) => {
  return (
    <span
      className={`${
        showMeaning ? "" : "font-bold"
      } hover:underline underline-offset-2`}
    >
      {word}
    </span>
  );
};

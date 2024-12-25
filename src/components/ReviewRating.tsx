import { useState } from "react";

type Props = {
  onRate?: (rate: number) => void;
  rating: number;
};

export const ReviewRating = ({ onRate, rating }: Props) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div
      className="flex gap-[1px] text-white"
      onMouseLeave={() => setHoverRating(0)}
    >
      {[1, 2, 3, 4, 5].map((rate) => (
        <div
          className={`border-[2px] p-2 aspect-square text-sm border-white ${
            rate <= rating
              ? "bg-green-300 text-black"
              : rate <= hoverRating
              ? "bg-green-800"
              : ""
          }`}
          key={rate}
          onMouseEnter={() => setHoverRating(rate)}
          onClick={() => onRate && onRate(rate)}
        >
          {rate}
        </div>
      ))}
    </div>
  );
};

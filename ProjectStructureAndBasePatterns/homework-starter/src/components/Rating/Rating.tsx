import StarIcon from "../../assets/star.svg?react";

import "./Rating.css";

type RatingProps = {
  value: number;
  onChange: (value: number) => void;
};

export const Rating = ({
  value,
  onChange,
}: RatingProps) => {
  return (
    <div
      className="rating"
      aria-label={`Rating: ${value} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="rating__button"
          onClick={() => onChange(star)}
          aria-label={`Set rating to ${star}`}
        >
          <StarIcon
            className={
              star <= value
                ? "rating__star rating__star--active"
                : "rating__star"
            }
          />
        </button>
      ))}
    </div>
  );
};
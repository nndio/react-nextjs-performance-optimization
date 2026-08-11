import { Restaurant } from "../../../types";

import { Rating } from "../../../components/Rating/Rating";

import "./RestaurantCard.css";

type RestaurantCardProps = {
  restaurant: Restaurant;
  onRatingChange: (
    restaurantId: string,
    rating: number
  ) => void;
};

export const RestaurantCard = ({
  restaurant,
  onRatingChange,
}: RestaurantCardProps) => {
  const handleRatingChange = (rating: number) => {
    onRatingChange(
      restaurant.id,
      rating
    );
  };

  return (
    <article className="restaurant-card">
      <img
        className="restaurant-card__image"
        src={restaurant.url}
        alt={restaurant.name}
      />

      <h2 className="restaurant-card__title">
        {restaurant.name}
      </h2>

      <p className="restaurant-card__description">
        {restaurant.description}
      </p>

      <Rating
        value={restaurant.rating}
        onChange={handleRatingChange}
      />
    </article>
  );
};
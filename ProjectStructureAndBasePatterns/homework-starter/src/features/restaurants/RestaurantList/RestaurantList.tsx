import { Restaurant } from "../../../types";

import { RestaurantCard } from "../RestaurantCard/RestaurantCard";

type RestaurantListProps = {
  restaurants: Restaurant[];
  onRatingChange: (
    restaurantId: string,
    rating: number
  ) => void;
};

export const RestaurantList = ({
  restaurants,
  onRatingChange,
}: RestaurantListProps) => {
  if (restaurants.length === 0) {
    return (
      <p className="empty">
        No restaurants found.
      </p>
    );
  }

  return (
    <section className="restaurants">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          onRatingChange={onRatingChange}
        />
      ))}
    </section>
  );
};
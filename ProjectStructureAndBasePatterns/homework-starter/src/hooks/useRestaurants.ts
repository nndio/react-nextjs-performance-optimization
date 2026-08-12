import { useEffect, useState } from "react";

import {
  fetchRestaurants,
  updateRestaurantRating,
} from "../api/restaurants";

import { Restaurant } from "../types";

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        setIsLoading(true);
        setError("");

        const data = await fetchRestaurants();

        setRestaurants(data);
      } catch {
        setError("Failed to load restaurants.");
      } finally {
        setIsLoading(false);
      }
    };

    loadRestaurants();
  }, []);

  const changeRating = async (
    restaurantId: string,
    rating: number
  ) => {
    try {
      const updatedRestaurant =
        await updateRestaurantRating(
          restaurantId,
          rating
        );

      setRestaurants((currentRestaurants) =>
        currentRestaurants.map((restaurant) =>
          restaurant.id === updatedRestaurant.id
            ? updatedRestaurant
            : restaurant
        )
      );
    } catch (error) {
      console.error(
        "Failed to update restaurant rating:",
        error
      );
    }
  };

  return {
    restaurants,
    isLoading,
    error,
    changeRating,
  };
};
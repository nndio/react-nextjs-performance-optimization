import { Restaurant } from "../types";

const API_URL = "http://localhost:3000";

export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch(`${API_URL}/restaurants`);

  if (!response.ok) {
    throw new Error("Failed to fetch restaurants");
  }

  return response.json();
};

export const updateRestaurantRating = async (
  restaurantId: string,
  rating: number
): Promise<Restaurant> => {
  const response = await fetch(
    `${API_URL}/restaurants/${restaurantId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update restaurant rating");
  }

  return response.json();
};
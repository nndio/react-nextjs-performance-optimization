import { useEffect, useState } from "react";

import { Logo } from "./components/Logo/Logo";
import { Avatar } from "./components/Avatar/Avatar";
import { Search } from "./components/Search/Search";
import { RestaurantCard } from "./components/RestaurantCard/RestaurantCard";

import { Restaurant } from "./types";

import "./styles.css";

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          "http://localhost:3000/restaurants"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch restaurants");
        }

        const data: Restaurant[] = await response.json();

        setRestaurants(data);
      } catch (error) {
        setError("Failed to load restaurants");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const handleRatingChange = async (
    restaurantId: string,
    rating: number
  ) => {
    try {
      const response = await fetch(
        `http://localhost:3000/restaurants/${restaurantId}`,
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
        throw new Error("Failed to update rating");
      }

      const updatedRestaurant: Restaurant = await response.json();

      setRestaurants((currentRestaurants) =>
        currentRestaurants.map((restaurant) =>
          restaurant.id === updatedRestaurant.id
            ? updatedRestaurant
            : restaurant
        )
      );
    } catch (error) {
      console.error("Failed to update rating", error);
    }
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <header className="header">
        <Logo />

        <Avatar />
      </header>

      <main className="main">
        <Search
          value={search}
          onChange={setSearch}
        />

        {isLoading && (
          <div className="loading">
            Loading...
          </div>
        )}

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {!isLoading && !error && (
          <section className="restaurants">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onRatingChange={handleRatingChange}
              />
            ))}
          </section>
        )}

        {!isLoading &&
          !error &&
          filteredRestaurants.length === 0 && (
            <p className="empty">
              No restaurants found.
            </p>
          )}
      </main>

      <footer className="footer">
        <p>Privacy Policy</p>

        <p className="footer__copyright">
          © 2022 Eats
        </p>

        <p>Terms of Service</p>
      </footer>
    </div>
  );
}

export default App;
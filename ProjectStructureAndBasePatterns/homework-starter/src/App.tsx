import { useState } from "react";

import { useRestaurants } from "./hooks/useRestaurants";

import { Logo } from "./components/Logo/Logo";
import { Avatar } from "./components/Avatar/Avatar";
import { Search } from "./components/Search/Search";

import { RestaurantList } from "./features/restaurants/RestaurantList/RestaurantList";

import "./styles.css";

function App() {
  const {
    restaurants,
    isLoading,
    error,
    changeRating,
  } = useRestaurants();

  const [search, setSearch] = useState("");

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
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
          <RestaurantList
            restaurants={filteredRestaurants}
            onRatingChange={changeRating}
          />
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
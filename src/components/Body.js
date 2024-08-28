import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantsList as list } from "../utils/mockData";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(list);
  console.log({ restaurantsList, setRestaurantsList });
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = restaurantsList.filter(
              (restaurant) => restaurant.rating > 4.8
            );

            setRestaurantsList(filteredData);
          }}
        >
          Filter Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantsList?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

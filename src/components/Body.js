import { useState } from "react";

import "../index.css";
import { ResturantCard } from "./Cards";

import restList from "../utils/mockData";

export const Body = () => {
  //state variable- Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restList);

  //normal JS variable
  // let listOfRestaurantsJS = [];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 3
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-name">
        {listOfRestaurants.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

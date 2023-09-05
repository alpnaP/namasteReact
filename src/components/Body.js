import { useState, useEffect } from "react";

import "../index.css";
import { ResturantCard } from "./Cards";

import restList from "../utils/mockData";

export const Body = (list) => {
  //state variable- Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restList);

  //normal JS variable
  // let listOfRestaurantsJS = [];

  debugger;
  useEffect(() => {
    fetchData();
  }, [list]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5050906&lng=88.2935519&restaurantId=405178"
    );

    console.log(data);

    const json = await data.json();
    console.log(json);

    // setListOfRestaurants(json.data.cards);
  };

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

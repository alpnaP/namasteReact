import { useState, useEffect } from "react";

import "../index.css";
import { ResturantCard } from "./Cards";
import { Shimmer } from "./Shimmer";

import restList from "../utils/mockData";

export const Body = () => {
  //state variable- Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  //normal JS variable
  // let listOfRestaurantsJS = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // //Conditional rendering not  a good practise
  // if (listOfRestaurants.length === 0) {
  //   return (
  //     <h1>
  //       <Shimmer />
  //     </h1>
  //   );
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter(
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setListOfRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-name">
        {filteredRestaurant.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

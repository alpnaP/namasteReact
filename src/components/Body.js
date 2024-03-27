import { useState, useEffect } from "react";

import "../index.css";
import { ResturantCard, withPromatedLabel } from "./Cards";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

//import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Body = () => {
  //state variable- Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromatedLabel(ResturantCard);
  //normal JS variable
  // let listOfRestaurantsJS = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.920552607169611&lng=77.60991264134645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    if (listOfRestaurants.length === 0) {
      <Shimmer />;
    }

    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const search = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setFilteredRestaurant(filteredRestaurant);
  };
  // const onlineStatus = useOnlineStatus();

  // if (onlineStatus === false)
  //   return (
  //     <h1>Look's like you're offline, please check your internet connection</h1>
  //   );

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 bg-slate-400 m-4 rounded-lg"
            onClick={() => search()}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-slate-600"
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
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/** if the resturent is promated then add a promated label to it */}

            <ResturantCard restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

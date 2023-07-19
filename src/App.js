import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import foodlogo from "./img/foodlogo.jpg";

/**
 * Header
 * -logo
 * -nav bar
 * Body
 * -search
 * -resto container
 * Footer
 * -copyright
 * -links
 * -Address/contact
 *
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={foodlogo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Carts</li>
        </ul>
      </div>
    </div>
  );
};
const styleCard = {
  backgroundColor: "gray",
};
const ResturantCard = () => {
  return (
    <div className="rest-card" style={styleCard}>
      <img
        className="res-logo"
        alt="food"
        src="https://b.zmtcdn.com/data/pictures/1/50691/92d9b4053ef0965120828b4fa4eecc3b.jpg?fit=around|771.75:416.25crop=771.75:416.25;*,*"
      />
      <h3>Kritunga Restaurant</h3>
      <h4>Biryani, North Indian</h4>
      <h4>4.4 stars</h4>
      <h4>40 mnt</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-name">
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

import foodlogo from "../img/logo.png";
import "../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  //let btnName = "login";

  const [btnNameReact, setBtnNameReact] = useState("login");

  //if no dependency arry, useeffect will call on evey render
  // if dependency array is empty [], then useeffect will call once
  //If something is there in DA , when the depency changes, that time it will call

  return (
    <div className="header">
      <div>
        <img className="food-logo" src={foodlogo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Conact Us</Link>
          </li>
          <li>Carts</li>
          <button
            className="login"
            onClick={() => {
              setBtnNameReact("logout");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

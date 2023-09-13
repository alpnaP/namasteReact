import foodlogo from "../img/logo.png";
import "../index.css";
import { useState } from "react";

export const Header = () => {
  //let btnName = "login";

  const [btnNameReact, setBtnNameReact] = useState("login");
  return (
    <div className="header">
      <div>
        <img className="food-logo" src={foodlogo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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

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
    <div className="flex justify-between bg-gray-400 shadow m-2 ">
      <div>
        <img className="w-28" src={foodlogo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact-us">Conact Us</Link>
          </li>
          <li className="px-4">Carts</li>
          <button
            className="login px-4"
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

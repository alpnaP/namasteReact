import foodlogo from "../img/logo.png";
import "../index.css";

export const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

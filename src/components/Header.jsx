import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context.jsx";
import cartLogo from "../images/cart.png";

const Header = () => {
  const { cartItems } = useContext(ShopContext);
  let cart = cartItems.length !== 0 ? <div>{cartItems.length} </div> : null;

  return (
    <nav className="container">
      <Link to="/">
        <div className="logoHead">
          <span> Quick Kart</span>
          <img
            src={cartLogo}
            style={{ width: "50px", height: "auto" }}
            alt=""
          />
        </div>
      </Link>

      <ul className="mainNav">
        <Link to="shop">
          <li>Shop</li>
        </Link>

        <Link to="cart">
          <li>Cart {cart}</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;

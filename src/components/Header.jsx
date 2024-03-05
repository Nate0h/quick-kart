import "../styles/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context.jsx";
import Cart from "./Cart.jsx";
const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const { addToCart, cartItems } = useContext(ShopContext);
  let cart = cartItems.length !== 0 ? <div>{cartItems.length} </div> : null;

  return (
    <nav className="container">
      <Link to="/">
        <div className="logoHead">
          <span> Quick Kicks</span>
          <img src="" alt="" />
        </div>
      </Link>

      <ul className="mainNav">
        <Link to="about">
          <li>About</li>
        </Link>

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

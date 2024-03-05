import { useState, useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context.jsx";
import { Link } from "react-router-dom";
import CartItem from "./CartItem.jsx";
const Cart = () => {
  const { addToCart, cartItems, getTotal } = useContext(ShopContext);
  const totalAmount = getTotal();
  if (cartItems.length == 0) {
    return <div>Nada</div>;
  }
  return (
    <div>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div>
        {cartItems.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.id}
              id={cartItem.id}
              quantity={cartItem.quantity}
            />
          );
        })}
      </div>

      <div className="checkout"></div>
      <p>Subtotal: ${totalAmount}</p>
      <Link to="shop">
        <button>Continue Shopping</button>
      </Link>
      <button onClick={() => alert("Your order has successfully processed")}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;

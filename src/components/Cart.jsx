import { useState, useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context.jsx";
import CartItem from "./CartItem.jsx";
const Cart = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
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
    </div>
  );
};

export default Cart;

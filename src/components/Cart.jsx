import "../styles/Cart.css";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context.jsx";
import { Link } from "react-router-dom";
import CartItem from "./CartItem.jsx";
const Cart = () => {
  const { cartItems, getTotal } = useContext(ShopContext);
  const totalAmount = getTotal();
  if (cartItems.length == 0) {
    return <h1 style={{ marginLeft: "2rem" }}>Cart is Empty</h1>;
  }
  return (
    <div className="cartContainer">
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
      <div className="buttonContainer">
        <Link to="shop">
          <button className="continueShop">Continue Shopping</button>
        </Link>
        <button
          className="checkOutButton"
          onClick={() => alert("Your order has successfully processed")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

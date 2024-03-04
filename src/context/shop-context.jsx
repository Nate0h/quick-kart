import { createContext } from "react";
import { useState } from "react";
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(itemId, count) {
    if (count == 0) {
      return;
    }
    // Check if the item is already in the cart
    let isItemInCart = false;
    const modifiedData = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        isItemInCart = true;
        cartItem.quantity += count;
      }

      return item;
    });

    if (isItemInCart) setCartItems(modifiedData);
    else {
      setCartItems([...cartItems, { id: itemId, quantity: count }]);
    }
  }

  const removeFromCart = (itemId) =>
    setItems(cartItems.filter((cartItem) => cartItem.id !== itemId));

  const contextValue = { cartItems, addToCart, removeFromCart };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

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

      return cartItem;
    });

    if (isItemInCart) setCartItems(modifiedData);
    else {
      setCartItems([...cartItems, { id: itemId, quantity: count }]);
    }
  }

  function decrementCartItem(itemId, count) {
    if (count == 1) {
      removeFromCart(itemId);
      return;
    }

    const modifiedData = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        cartItem.quantity -= 1;
      }

      return cartItem;
    });
    setCartItems(modifiedData);
  }

  const removeFromCart = (itemId) => {
    const modifiedData = cartItems.filter((cartItem) => cartItem.id !== itemId);
    console.log(modifiedData);
    setCartItems(modifiedData);
  };

  const contextValue = {
    cartItems,
    addToCart,
    decrementCartItem,
    removeFromCart,
  };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

import { useState, useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context.jsx";

const CartItem = ({ id, quantity }) => {
  const { addToCart, removeFromCart, cartItems, decrementCartItem } =
    useContext(ShopContext);
  const [num, setNum] = useState(quantity);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        console.log(JSON.stringify(actualData));
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="cartItem">
      <img src={data.image} alt="" style={{ width: "100px", height: "auto" }} />
      <div className="description">
        <p>
          <b>{data.title}</b>
        </p>
        <p>${data.price}</p>
        <div className="wrapper">
          <span
            onClick={() => {
              decrementCartItem(id, num);
              setNum(num - 1);
            }}
            className="minus"
          >
            -
          </span>
          <span className="num">{num}</span>
          <span
            onClick={() => {
              addToCart(id, 1);
              setNum(num + 1);
            }}
            className="plus"
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

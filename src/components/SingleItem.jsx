import "../styles/SingleItem.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context.jsx";

const SingleItem = () => {
  const location = useLocation();
  const { addToCart } = useContext(ShopContext);
  const { id } = location.state;
  const [num, setNum] = useState(0);
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
  if (loading) return <div className="loader"></div>;

  return (
    <div className="singleItemContainer">
      <div className="image">
        <img
          src={data.image}
          alt=""
          style={{ width: "250px", height: "auto" }}
        />
      </div>

      <div className="singleItemRight">
        <div>
          <div className="singleTitle">{data.title}</div>
          <div className="descr">{data.description}</div>
        </div>
        <div>${data.price.toFixed(2)}</div>
        <div className="wrapper">
          <span
            onClick={() => {
              if (num > 0) {
                setNum(num - 1);
              } else {
                setNum(0);
              }
            }}
            className="sminus"
          >
            -
          </span>
          <span className="num">
            {" "}
            <input
              type="num"
              value={num}
              onChange={(e) => {
                if (isNaN(e.target.value)) {
                  return 0;
                }
                setNum(Number(e.target.value));
              }}
            />
          </span>
          <span
            onClick={() => {
              setNum(num + 1);
            }}
            className="splus"
          >
            +
          </span>
        </div>
        <button
          className="addCart2"
          onClick={() => addToCart(id, num, data.price)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;

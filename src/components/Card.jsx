import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context.jsx";
import "../styles/Shop.css";

const Card = (props) => {
  const { addToCart } = useContext(ShopContext);
  const [num, setNum] = useState(0);

  return (
    <div className="card">
      <div className="image">
        <Link to="singleItem" state={{ id: props.id }}>
          <img
            src={props.image}
            alt=""
            style={{ width: "100px", height: "auto" }}
          />
        </Link>
      </div>

      <div className="cardDetails">
        <div className="itemName">{props.title}</div>
        <div className="itemPrice">${props.price.toFixed(2)}</div>
        <div className="inputWrapper">
          <span
            onClick={() => {
              if (num > 0) {
                setNum(num - 1);
              } else {
                setNum(0);
              }
            }}
            className="minus"
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
            className="plus"
          >
            +
          </span>
        </div>
        <button
          className="addCart"
          onClick={() => addToCart(props.id, num, props.price)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;

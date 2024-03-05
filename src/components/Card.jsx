import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context.jsx";

const Card = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const [num, setNum] = useState(0);
  const [order, setOrder] = [];
  return (
    <div>
      <Link to="singleItem" state={{ id: props.id }}>
        <img
          src={props.image}
          alt=""
          style={{ width: "100px", height: "auto" }}
        />
      </Link>

      <div>
        <div>
          {props.title}
          {props.rating.rate}
        </div>
        <div>{props.price}</div>
        <div className="wrapper">
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
            {num}
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
        <button onClick={() => addToCart(props.id, num, props.price)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;

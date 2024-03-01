import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const Card = (props) => {
  const [num, setNum] = useState(0);
  const dataToPass = { name: "John Doe", age: 25 };
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
          <span className="num">{num}</span>
          <span
            onClick={() => {
              setNum(num + 1);
            }}
            className="plus"
          >
            +
          </span>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;

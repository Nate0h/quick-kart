import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Card from "./Card.jsx";
import SingleItem from "./SingleItem.jsx";
const Shop = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("https://fakestoreapi.com/products");

  useEffect(() => {
    fetch(url)
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
  }, [url]);

  console.log(url);
  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="banner">
        <div onClick={() => setUrl("https://fakestoreapi.com/products")}>
          All
        </div>
        <div
          onClick={() =>
            setUrl("https://fakestoreapi.com/products/category/electronics")
          }
        >
          Electronics
        </div>
        <div
          onClick={() =>
            setUrl("https://fakestoreapi.com/products/category/jewelery")
          }
        >
          Jewelry
        </div>
        <div
          onClick={() =>
            setUrl("https://fakestoreapi.com/products/category/men's clothing")
          }
        >
          Men's Clothing
        </div>
        <div
          onClick={() =>
            setUrl(
              "https://fakestoreapi.com/products/category/women's clothing"
            )
          }
        >
          Women's Clothing
        </div>
      </div>
      <div className="shopContainer">
        <div className="categories"></div>
        <div className="cards">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <Card
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  rating={item.rating}
                  price={item.price}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Link to="/">Home page</Link>
    </div>
  );
};

export default Shop;

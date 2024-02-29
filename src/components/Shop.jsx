import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Shop = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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

  return (
    <div>
      <div className="banner">Banner</div>
      <div className="shopContainer">
        <div className="categories"></div>
        <div className="cards"></div>
      </div>
      <Link to="/">Home page</Link>
    </div>
  );
};

export default Shop;

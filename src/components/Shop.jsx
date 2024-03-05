import { Link, ScrollRestoration } from "react-router-dom";
import { useState, useEffect } from "react";
import ListCards from "./ListCards.jsx";

const Shop = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState("asc");
  const [url, setUrl] = useState(
    `https://fakestoreapi.com/products?sort=${sort}`
  );
  let stringQuery;
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
        setSearch(actualData);
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

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  const handleInputChange = (event) => {
    if (!event.target.value) {
      setSearch(data);
    }

    const resultsArray = data.filter((product) =>
      product.title.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setSearch(resultsArray);
    stringQuery = event.target.value;
    alert(stringQuery);
  };

  function handleSort(e) {
    let newSort = e.target.value;
    let newUrl = url.replace(sort, newSort);
    setSort(newSort);
    setUrl(newUrl);
  }

  return (
    <div>
      <div className="searchBar">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          placeholder="Enter your search shoes."
        />
      </div>
      <label htmlFor="sort">
        <select onChange={handleSort} name="sort" id="sort">
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </label>
      <div className="banner">
        <div
          onClick={() =>
            setUrl(`https://fakestoreapi.com/products?sort=${sort}`)
          }
        >
          All
        </div>
        <div
          onClick={() =>
            setUrl(
              `https://fakestoreapi.com/products/category/electronics?sort=${sort}`
            )
          }
        >
          Electronics
        </div>
        <div
          onClick={() =>
            setUrl(
              `https://fakestoreapi.com/products/category/jewelery?sort=${sort}`
            )
          }
        >
          Jewelry
        </div>
        <div
          onClick={() =>
            setUrl(
              `https://fakestoreapi.com/products/category/men's clothing?sort=${sort}`
            )
          }
        >
          Men's Clothing
        </div>
        <div
          onClick={() =>
            setUrl(
              `https://fakestoreapi.com/products/category/women's clothing?sort=${sort}`
            )
          }
        >
          Women's Clothing
        </div>
      </div>
      <div className="shopContainer">
        <div className="categories"></div>
        <ListCards searchResults={search} />
      </div>
      <Link to="/">Home page</Link>
    </div>
  );
};

export default Shop;

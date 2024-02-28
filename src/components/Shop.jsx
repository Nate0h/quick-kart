import { Link } from "react-router-dom";
const Shop = () => {
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

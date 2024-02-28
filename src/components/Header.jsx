import "../styles/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="container">
      <Link to="/">
        <div className="logoHead">
          <span> Quick Kicks</span>
          <img src="" alt="" />
        </div>
      </Link>

      <div className="searchBar">
        <input type="search" placeholder="Find your favorite kicks..." />
      </div>

      <ul className="mainNav">
        <Link to="about">
          <li>About</li>
        </Link>

        <Link to="shop">
          <li>Shop</li>
        </Link>

        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Header;

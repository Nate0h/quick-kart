import "../styles/Header.css";

const Header = () => {
  return (
    <nav className="container">
      <div className="logoHead">
        <span> Quick Kicks</span>
        <img src="" alt="" />
      </div>

      <div className="searchBar">
        <input type="search" placeholder="Find your favorite kicks..." />
      </div>

      <div className="mainNav">
        <div>About</div>
        <div>Shop</div>
        <div>Cart</div>
      </div>
    </nav>
  );
};

export default Header;

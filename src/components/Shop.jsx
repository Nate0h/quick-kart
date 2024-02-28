import { Link } from "react-router-dom";
const Shop = () => {
  return (
    <div>
      <h1>Hello from Shop page!</h1>
      <p>So, how are you?</p>
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Shop;

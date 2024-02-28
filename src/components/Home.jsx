import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Hello from Home page!</h1>
      <p>So, how are you?</p>
      <ul>
        <li>
          <Link to="shop">Shop Here</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

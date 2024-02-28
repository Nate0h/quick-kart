import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="Carousel">Carousel</div>
      <div className="shop">
        <div className="left">
          <p>sdssd</p>
          <p>dsdsds</p>
          <button>Click Me!</button>
        </div>
        <div className="right">
          <img src="" alt="" />
        </div>
      </div>

      <div className="about"></div>
      <div className="right">
        <img src="" alt="" />
      </div>
      <div className="left">
        <p>sdssd</p>
        <p>dsdsds</p>
        <button>Click Me!</button>
      </div>

      <Link to="shop">Shop page</Link>
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import githubLogo from "../images/github.png";
const Home = () => {
  return (
    <div className="home">
      <div className="shop">
        <button className="shopButton">
          <Link to="shop">Shop Now</Link>
        </button>
        <div className="footer">
          <p>Made by NateOh</p>
          <a href="">
            {" "}
            <img
              src={githubLogo}
              style={{ width: "3rem", height: "auto" }}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

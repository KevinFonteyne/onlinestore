import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="banner-1">
        <div className="banner-text">
          <h1>Tech junkies</h1>
          <h4>Latest gadgets</h4>
        </div>
        <img src="/images/TechStore.jpg" alt="" />
      </div>
      <Link className="btn btn-primary" to="/catalog">
        Catalog
      </Link>
    </div>
  );
};

export default Home;

import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Boise Food Favorites</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add a New Entry</Link>
      </div>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <>
      <nav class="navbar">
        <h1 class="navbar-title">Blood Donation</h1>
        <h5 class="navbar-title">{props.title}</h5>
        <ul class="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/emergency">Emergency</Link>
          </li>
          <li>
            <Link to="/donation">Donation</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

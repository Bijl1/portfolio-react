import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/about">
        <button>About</button>
      </Link>      
    
      <Link to="/portfolio">
        <button>Portfolio</button>
      </Link>

      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </nav>
  );
}

export default Navbar;
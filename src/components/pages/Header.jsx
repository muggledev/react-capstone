import { Link } from "react-router-dom";
import "../../styles/pages/header.scss";

function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="brand">
          <i className="fa-solid fa-cake-candles"></i>
          <span className="brand-name">Sprinkle & Whisk</span>
        </div>
        <nav>
          <div className="nav-label">
            <Link to="/home">HOME</Link>
          </div>
          <div className="nav-label">
            <Link to="/products">PRODUCTS</Link>
          </div>
          <div className="nav-label">
            <Link to="/cart">CART</Link>
          </div>
          <div className="nav-label">
            <Link to="/contact">CONTACT</Link>
          </div>
          <div className="nav-label">
            <Link to="/about">ABOUT</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

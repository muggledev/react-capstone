import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="home">
          <Link to="/home">
            <i className="fa-solid fa-cake-candles"></i> HOME
          </Link>
        </div>
        <nav>
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

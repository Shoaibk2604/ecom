import logo from "../Assets/logo.png";
// import Data from "../Data/product";
import CartContext from "../hooks/Cartcontext";
import { memo, useContext } from "react";
import React from "react";
// import product2 from '../Assets/product2.png'
import { FaBars, FaShoppingCart, FaSearch, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  const numb = useContext(CartContext);
  return (
    <>
      <div className="top-head">
        <div className="offer-bg">
          <div className="offer">
            <p className="target">
              <i>
                Get <span>FLAT 10% OFF</span> and Free Delivery on your first
                order use promo code <span>HELLO10</span>
              </i>
            </p>
          </div>
        </div>
        <div className="navbar-head">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="" width="190px" className="logo-img" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <FaBars />
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link to="/category" className="nav-link">
                      Category
                    </Link>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Home & Living</a>
                      </li>
                      <li>
                        <a href="#">Bags & Accesories</a>
                      </li>
                      <li>
                        <a href="#">Chocolate Hampers</a>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/AboutPage">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ContactPage">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      New Arrivals
                    </a>
                  </li>
                  <li className="nav-item ic-hover">
                    <Link to="/cart-final" className="nav-link">
                      <FaShoppingCart />
                      <span id="cartTotal">{numb.cartState.length}</span>
                    </Link>
                  </li>
                  <li className="nav-item ic-hover">
                    <a className="nav-link " href="#">
                      <FaSearch />
                    </a>
                  </li>
                  <li className="nav-item ic-hover">
                    <a className="nav-link " href="#">
                      <FaUserAlt />
                    </a>
                    <ul className="dropdown">
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/signup">Sign-up</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Header;

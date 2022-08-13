import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const state=useSelector((state)=>state.addToCartAndRemove)
  console.log("state==",state);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-1 fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold fs-4">
            TOOK-BUY{" "}
            <img
              style={{ height: "70px" }}
              src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutPage">
                  About
                </Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactUs">
                    Contact
                  </Link>
                </li>
            </ul>
      
            <button className="btn btn-outline-secondary me-3" type="submit">
              <i className="fa-solid fa-right-to-bracket me-2"></i>
              Login
            </button>
            <button className="btn btn-outline-secondary me-3" type="submit">
              <i className="fa-solid fa-user-pen me-2"></i>
              Register
            </button>
            <Link to="cart">
            <button className="btn btn-outline-secondary" type="submit">
              <i className="fa-solid fa-cart-arrow-down me-3"></i>
              Cart({state.length})
            </button>
            </Link>
          </div>
        </div>
      </nav>
      {/* <HomeBackground/> */}
    </div>
  );
};
export default Header;

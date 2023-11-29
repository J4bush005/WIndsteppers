import React from "react";
import Logo from "../Photos/Updated Windsteppers-Logo.webp";
import Cart from "../Photos/shopping-cart.webp";
import { Link } from "react-router-dom";

function header() {
   return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" id="words" className="navbar-brand">
          <img id="logo" src={Logo} alt="" style={{width:"100px"}}/>
        </Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".head.collapse"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="head collapse navbar-collapse" id="navbarNavDropdown">
          <ul  className="navbar-nav ms-auto d-flex">
            <li className="nav-item dropdown last mx-3">
              <Link
                to="/Contact"
                id="lists"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/History"
                    className="nav-link under"
                    role="button"
                    aria-expanded="false"
                  >
                    Our History
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    className="nav-link under"
                    role="button"
                    aria-expanded="false"
                  >
                    Coaches
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown mx-3">
              <Link
                to="/Portal"
                id="lists"
                className="nav-link"
                role="button"
              >
                Athletes
              </Link>
             
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/Gallery"
                id="lists"
                className="nav-link"
                role="button"
              >
                Events/Calendar
              </Link>
            </li>
            <li id="cart" className="nav-item dropdown mx-3">
              <Link
                to="/Services"
                id="sub"
                className="nav-link"
                role="button"
              >
                <img src={Cart} alt="" className="img-fluid" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default header;

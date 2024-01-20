import React, { useState } from "react";
import Logo from "../Photos/Updated Windsteppers-Logo.webp";
import Carts from "../Photos/shopping-cart.webp";
import Cart from "./pages/Store Content/Cart";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);

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
            {/** 
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
                    to="/Coaches"
                    className="nav-link under"
                    role="button"
                    aria-expanded="false"
                  >
                    Coaches
                  </Link>
                </li>
              </ul>
               */}
            </li>
           
              <li className="nav-item dropdown mx-3">
              <Link
                to="/History"
                id="lists"
                className="nav-link"
                role="button"
              >
                Our History
              </Link>
             
            </li>
              <li className="nav-item dropdown mx-3">
              <Link
                to="/Coaches"
                id="lists"
                className="nav-link"
                role="button"
              >
                Coaches
              </Link>
             
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
                to="/Events"
                id="lists"
                className="nav-link"
                role="button"
              >
                Events/Calendar
              </Link>
            </li>
            {/** 
                <li className="nav-item mx-3">
              <Link
                to="/Store"
                id="lists"
                className="nav-link"
                role="button"
              >
                Team Store
              </Link>
            </li>
            <li id="cart" className="nav-item dropdown mx-3">
              <div
                id="sub"
                className="nav-link"
                role="button"
                onClick={() => setShow(!show)}
              >
                <img src={Carts} alt="" className="img-fluid" />
             </div>
            </li>
            */}
          </ul>
        </div>
      </div>
      {show && <Cart/>}
    </nav>
  );
}

export default Header;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Logo from "../Photos/Updated Windsteppers-Logo.webp";
import Cart from "../Photos/shopping-cart.webp";

function header() {
  return (
    <div id="nav-styles">
      <Navbar expand="lg" className="bg-none">
        <Container fluid>
          <Navbar.Brand href="/" className="">
            <img src={Logo} alt="" className=" align-top" />
          </Navbar.Brand>
          <div className=" ">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="text-light">
                <NavDropdown
                  title={<span className="text-light">About Us</span>}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/about">
                    Our History
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Coaches
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Gallery
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home" className="text-light">
                  Athletes
                </Nav.Link>
                <Nav.Link href="#home" className="text-light">
                  Events/Calendar
                </Nav.Link>
                <Nav.Link href="#home" className="text-light">
                  Store
                </Nav.Link>
                <Nav.Link href="#home">
                  <img src={Cart} alt="" width="30" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default header;

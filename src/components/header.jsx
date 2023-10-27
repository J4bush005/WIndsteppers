import React from 'react';
import Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from "../Photos/Windsteppers-Logo.webp"

function header() {
  return (
    <Navbar expand="lg" className='bg-body-tertiary'>
        <Container>
            <Navbar.Brand href='#home'>
                <img src={Logo} alt="" className='d-inline-block align-top'/>
            </Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default header
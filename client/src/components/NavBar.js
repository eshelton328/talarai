import React from 'react';
import {
  Navbar,
  Nav,
  Container
} from 'react-bootstrap';

const NavBar = () => {

  return (
    <Navbar expand='sm'>
      <Container>
        <Navbar.Brand>
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link href='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/about'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/services'>Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/functionality'>Functionality</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
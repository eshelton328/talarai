import React from 'react';
import {
  Navbar,
  Nav,
  Container
} from 'react-bootstrap';
import Logo from '../assets/img/logo.jpeg';
// let Logo = document.createElement('img');
// Logo.src = require('../assets/img/logo.png');

let home = {};
let about = {};
let serv = {};
let funcly = {};
let contact = {};

const NavBar = ({ curr }) => {

  // changing color of active page link
  if (curr === 'home') {
    home = {color: '#FEE247'}
  } else if (curr === 'about') {
    about = {color: '#FEE247'}
  } else if (curr === 'serv') {
    serv = {color: '#FEE247'};
  } else if (curr === 'funcly') {
    funcly = {color: '#FEE247'};
  } else {
    contact = {color: '#FEE247'};
  }

  return (
    <div>
      <Navbar expand='md'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              src={Logo}
              className="d-inline-block align-top logo"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link style={home} href='/'>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={about} href='/about'>About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={serv} href='/services'>Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={funcly} href='/functionality'>Functionality</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={contact} href='/contact'>Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const Header = () => {


 

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand> Tours SL </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <LinkContainer to="/products">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/dd">
                <Nav.Link>Destinations</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>Car Rents</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/55">
                <Nav.Link>Tour Guids</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/44">
                <Nav.Link>Tour Guids</Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav className="ml-auto">
              <LinkContainer to="/contact">
                <Nav.Link>Contact us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/fruitlist">
                <Nav.Link>About us</Nav.Link>
              </LinkContainer>
                
              </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

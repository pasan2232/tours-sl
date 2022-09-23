import React, { Component } from 'react';

import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


class Header extends Component {
    render() {
        return (
      
          <div>
          <Navbar bg="light" expand="lg">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand> Lyceum Farm Marketplace </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <LinkContainer to="/destinations">
                    <Nav.Link>Destinations</Nav.Link>
                  </LinkContainer>
                   <LinkContainer to="/carrents">
                    <Nav.Link>Car Rents</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/guides">
                    <Nav.Link>Tour Guide</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link>Contact Us</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link>About Us</Nav.Link>
                  </LinkContainer>
                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>


          
        );
    }
}

export default Header;

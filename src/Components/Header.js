import React from 'react';

import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


function Header(props) {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
      {/* <LinkContainer to="/">
          <Navbar.Brand>aaaa</Navbar.Brand>
        </LinkContainer>
         */}
        <LinkContainer to="/">
          <Navbar.Brand>  <div class="section-titl">
                    
                    <h2>SADEW TOURS</h2>
                    
                </div> </Navbar.Brand>
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
              <Nav.Link>Tours</Nav.Link>
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

export default Header;
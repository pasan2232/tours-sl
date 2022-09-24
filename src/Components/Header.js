import React from 'react';

import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { BsInstagram } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

import logo from '../assests/logo/Logo.png'

function Header(props) {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
      <LinkContainer to="/">
          <Navbar.Brand><img src={logo} alt="logo" /></Navbar.Brand>
        </LinkContainer>
        
        <LinkContainer to="/">
          <Navbar.Brand>  <div class="section-titl">
                    
                    <h2>SADEW TOURS</h2>
                    
                </div> </Navbar.Brand>
        </LinkContainer>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"><hr/>
          <LinkContainer to="/destinations">
              <Nav.Link>Destinations</Nav.Link>
            </LinkContainer><hr/>
             <LinkContainer to="/carrents">
              <Nav.Link>Car Rents</Nav.Link>
            </LinkContainer><hr/>
            <LinkContainer to="/guides">
              <Nav.Link>Tours</Nav.Link>
            </LinkContainer><hr/>
            <LinkContainer to="/contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer><hr/>
            <LinkContainer to="/about">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer><hr/>
          </Nav>

        </Navbar.Collapse>

        {/* <LinkContainer to="/">
          <Navbar.Brand><a href="https://www.facebook.com/bugsbunny23456" class="d-block" target="_blank"><AiFillFacebook/></a></Navbar.Brand>
        </LinkContainer>
        <LinkContainer to="/">
          <Navbar.Brand><a href="//wa.me/+94711308121" class="d-block" target="_blank"><BsWhatsapp/></a></Navbar.Brand>
        </LinkContainer>
        <LinkContainer to="/">
          <Navbar.Brand><a href="https://www.instagram.com/sadew_sanjula_anuhas/" class="d-block" target="_blank"><BsInstagram/></a></Navbar.Brand>
        </LinkContainer> */}
        
      
      </Container>
    </Navbar>
  </div>

  );
}

export default Header;
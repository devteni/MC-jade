import React from "react";
import { Nav, Navbar, Container, NavDropdown,  } from 'react-bootstrap';
import Link from "next/link";

export const NavBar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Mc Jade</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav">
              <Nav.Link href="/about" className="dropdown">About us
                <ul className="dropdownMenu">
                  <li><a href="#">Our History</a></li>
                  <li><a href="#">Our Clients</a></li>
                  <li><a href="#">Our Big Shots</a></li>
                </ul>
              </Nav.Link>
              <Nav.Link href="/services" className="dropdown">Services
                <ul className="dropdownMenu">
                    <li><a href="#">Procurement</a></li>
                    <li><a href="#">Consultancy</a></li>
                    <li><a href="#">Project execution</a></li>
                </ul>
              </Nav.Link> 
              <Nav.Link href="/whyus">Why MCjade</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
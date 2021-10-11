import React from "react";
import { Nav, Navbar, Container, NavDropdown,  } from 'react-bootstrap';
import Link from "next/link";
import ContactModal from "./ContactModal";

export const NavBar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Mc Jade</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about" className="dropdown">About us
                <ul className="dropdownMenu">
                  <li><Link href="/about">Our History</Link></li>
                  <li><Link href="/about">Our Clients</Link></li>
                  <li><Link href="/about">Our Big Shots</Link></li>
                </ul>
              </Nav.Link>
              <Nav.Link href="/services" className="dropdown">Services
                <ul className="dropdownMenu">
                    <li><a href="/services">Procurement</a></li>
                    <li><a href="/services">Consultancy</a></li>
                    <li><a href="/services">Project execution</a></li>
                </ul>
              </Nav.Link> 
              <Nav.Link href="/whyus">Why MCjade</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
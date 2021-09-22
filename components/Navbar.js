import React from "react";
import { Nav, Navbar, Container, NavDropdown,  } from 'react-bootstrap';
import styles from '../styles/Home.module.css';


export const NavBar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mc Jade</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles.nav}>
              <Nav.Link href="#deets" style={{color: "white"}} className={styles.dropdown}>About us
                <ul className={styles.dropdownMenu}>
                  <li><a href="#">Our History</a></li>
                  <li><a href="#">Our Clients</a></li>
                  <li><a href="#">Our Big Shots</a></li>
              </ul>
              </Nav.Link>
              <Nav.Link href="#memes" style={{color: "white"}}>Services</Nav.Link>
              <Nav.Link href="#deets" style={{color: "white"}}>Why MCjade</Nav.Link>
              <Nav.Link href="#memes" style={{color: "white"}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
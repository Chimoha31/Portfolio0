import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header_container">
      <Navbar bg="light" variant="light">
        <Container className="mx-3">
          <Nav className="me-auto">
            <Nav.Link href="/"><i className="fas fa-home mx-3"></i>Home</Nav.Link>
            <Nav.Link href="/all_projects"><i className="fab fa-react mx-1"></i>Works</Nav.Link>
            <Nav.Link href="/contact"><i className="fas fa-mail-bulk mx-3"></i>Contact</Nav.Link>
            <Nav.Link href="Resume.pdf" download="Resume"><i className="fas fa-download mx-3"></i>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

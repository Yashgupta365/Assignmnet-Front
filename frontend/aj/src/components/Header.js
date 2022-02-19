import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">News Feed</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#">
              <i className="fas fa-user"></i> Profile
            </Nav.Link>
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

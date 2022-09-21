import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <div className={"header"}>
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="#">Watch/Lab</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="m-auto">
              <Nav.Link href="#">About us</Nav.Link>
              <Nav.Link href="#services">Brand</Nav.Link>
              <Nav.Link href="#about">Projects</Nav.Link>
              <Nav.Link href="#about">Magazine</Nav.Link>
              <Nav.Link href="#about">Press</Nav.Link>
              <Nav.Link href="#about">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import style from './Header.module.scss';

export default function Header() {
  return (
    <div className={style.header}>
      <Navbar expand="md" fluid>
          <div className={style.logo}>
            <Navbar.Brand href="#">Watch/Lab</Navbar.Brand>
          </div>
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
      </Navbar>
    </div>
  )
}
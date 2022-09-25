import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import style from './Header.module.scss';
import Searchbar from "./Searchbar";

export default function Header() {
  return (
    <div className={style.header}>
      <Navbar expand="lg" fluid>
        <div className={style.logo}>
          <Navbar.Brand href="#">Watch/Lab</Navbar.Brand>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse  className="justify-content-between">
            <Nav>
              <Nav.Link href="#">About us</Nav.Link>
              <Nav.Link href="#services">Brand</Nav.Link>
              <Nav.Link href="#about">Projects</Nav.Link>
              <Nav.Link href="#about">Magazine</Nav.Link>
              <Nav.Link href="#about">Press</Nav.Link>
              <Nav.Link href="#about">Contacts</Nav.Link>
              <Searchbar className="d-lg-none ms-4 mb-4" />
            </Nav>
          </Navbar.Collapse>
          <Searchbar className="d-none d-lg-block" />
      </Navbar>
    </div>
  )
}
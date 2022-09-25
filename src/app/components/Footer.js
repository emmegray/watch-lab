import React from 'react'
import { Navbar, Col, Row, Container } from "react-bootstrap";

import style from './Footer.module.scss';

export default function Footer() {
  return (
    <Container fluid className={style.Footer}>
        <Row>
          <div className={style.logo}>
            <Navbar.Brand href="#">Watch/Lab</Navbar.Brand>
          </div>
        </Row>
        <Row>
          <Col>
            <span>
              Watch/Lab - Innovation brings success <br />
              Via Borgogna 5, Milan <br />
              Italy
            </span>
          </Col>
          <Col>
            <ul>
              <li>About us</li>
              <li>Brand</li>
              <li>Projects</li>
              <li>Magazine</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Press</li>
              <li>Contacts</li>
              <li>Privacy Policy</li>
              <li>Search</li>
            </ul>
          </Col>
          <Col>
            <span>
              T. +39 392 9133937 <br />
              M. info@watch-lab.it
            </span>
            <a href="#" className="subtitle">Facebook</a>
            <a href="#" className="subtitle">Instagram</a>
          </Col>
        </Row>
        <Row>
          <Col>Copyright</Col>
          <Col>website by</Col>
        </Row>
    </Container>
  )
}

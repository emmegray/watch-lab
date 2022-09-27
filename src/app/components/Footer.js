import React from 'react'
import { Navbar, Col, Row, Container } from "react-bootstrap";

import style from './Footer.module.scss';

export default function Footer() {
  return (
    <Container fluid className={style.Footer}>
      <Container className='pt-4 pb-5'>
        <Row className='p-5 pb-0'>
          <div className={style.logo}>
            <Navbar.Brand href="#">Watch/Lab</Navbar.Brand>
          </div>
        </Row>
        <Row className='p-5 pt-0'>
          <Col xs={4} lg={3} className='nav'>
            <span>
              Watch/Lab _ Innovation brings success <br />
              Via Borgogna 5, Milan <br />
              Italy
            </span>
          </Col>
          <Col xs={4} lg={3} className='nav'>
            <ul className='flex-column'>
              <li><a href="#">About us</a></li>
              <li><a href="#">Brand</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Magazine</a></li>
            </ul>
          </Col>
          <Col xs={4} lg={3} className='nav'>
            <ul className='flex-column'>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contacts</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Search</a></li>
            </ul>
          </Col>
          <Col xs={12} lg={3} className='nav mt-5 mt-lg-0'>
            <ul>
              <li>T. +39 392 9133937</li>
              <li>M. <a href="#"><u>info@watch-lab.it</u></a></li>
              <li><a href="#" className="subtitle bold">Facebook</a></li>
              <li><a href="#" className="subtitle bold">Instagram</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container fluid className='bg-dark'>
        <Container className='p-5 pb-2'>
          <Row>
            <Col className='d-flex justify-content-start'>Copyright Watch/Lab all rights reserved</Col>
            <Col className='d-flex justify-content-end'>website by nssfactory</Col>
          </Row>
        </Container>
      </Container>
    </Container>
  )
}

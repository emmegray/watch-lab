import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

import style from "./PressSlider.module.scss";
import AnimatedContainer from './AnimatedContainer';

const defaultSlides = [
  { description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain trouble", title: "Most Important Days on Watchlab", image: "/assets/images/img-3.png", date: "18 SETTEMBRE 2015" },
  { description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed ipsum nunc. Quisque id lectus suscipit, iaculis ex non, hendrerit neque. Cras ac venenatis mi, eu venenatis ipsum.", title: "Lorem ipsum", image: "/assets/images/img-4.png", date: "5 AGOSTO 2015" },
  { description: "Aliquam nisl sem, tincidunt quis fringilla at, mattis ac lectus. Vivamus eleifend, mauris vel pretium facilisis, justo nibh placerat elit, a pretium metus nisi nec diam. Suspendisse non scelerisque augue. Sed sed efficitur nibh. Sed vestibulum mauris non faucibus vulputate.", title: "Dolor sit", image: "/assets/images/img-5.png", date: "23 LUGLIO 2015" },
  { description: "Quisque in elementum lectus, vitae semper ipsum. Etiam ut metus tortor. Etiam vehicula, sem eget tristique tincidunt, nunc diam ullamcorper quam, sit amet feugiat mauris libero ultrices est. Nam nec arcu in neque tristique pulvinar eu at nisl.", title: "Most Important Days on Watchlab", image: "/assets/images/img-6.png", date: "16 GIUGNO 2015" },
]

export default function PressSlider({
  title = "",
  slides = defaultSlides
}) {
  const [page, setPage] = useState(0);

  function previous() {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(slides.length - 1);
    }
  }

  function next() {
    if (page < slides.length - 1) {
      setPage(page + 1);
    } else {
      setPage(0)
    }
  }

  return (
    <AnimatePresence initial={false}>
      <AnimatedContainer className={style.Press + " my-5"}>
        <Row className="mb-2">
          <Col>
            <h2 className="title">{title}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} className="pt-3 pe-5">
            <motion.span animate={{ x: 0 }} initial={{ x: 50 }} exit={{ x: -50 }} key={page} className="text">
              {slides[page].description}
            </motion.span>
          </Col>
          <Col xs={12} md={5} className="mb-3">
            <motion.img animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} exit={{ x: -50 }} key={slides[page].image} src={slides[page].image} alt="press" className="img-fluid" />
          </Col>
          <Col xs={12} md={3} className="ps-3 d-flex flex-column">
            <span className="subtitle bold">Press</span>
            <motion.p animate={{ x: 0 }} initial={{ x: 50 }} exit={{ x: -50 }} key={slides[page].date} className="subtitle mb-5">{slides[page].date}</motion.p>
            <motion.h3 animate={{ x: 0 }} initial={{ x: 50 }} exit={{ x: -50 }} key={slides[page].title} className="title-small mb-5">{slides[page].title}</motion.h3>
            <div className={style.controls}>
              <button onClick={previous}><FontAwesomeIcon icon={faChevronLeft} /></button>
              <button onClick={next}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
          </Col>
        </Row>
      </AnimatedContainer>
    </AnimatePresence>
  )
}

import Layout from "src/app/components/Layout";
import Header from "src/app/components/Header";
import Jumbotron from "src/app/components/Jumbotron";
import { Col, Container, Row } from "react-bootstrap";
import Button from "src/app/components/Button";
import { motion } from "framer-motion";

import PressSlider from "src/app/components/PressSlider";
import AnimatedContainer from "src/app/components/AnimatedContainer";

export default function WatchLab(){
  return (
    <Layout pageTitle="WatchLab">
      <Header />
      <Jumbotron
        title="New Selection Of Herny London"
        description="An estimable experience in the modern collection house"
        subtitle="London Collection Season"
        backgroundUrl="/assets/images/hero.png"
      />

      {/* History */}
      <AnimatedContainer className="my-5">
        <Row>
          <h2 className="title mb-4">History and <br/> Patriarcal season</h2>
        </Row>
        <Row>
          <Col xs={12} md={6} className="pe-4">
            <p className="text">
              On the other hand, we denounce with righteous
              indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment,
              so blinded by desire
            </p>
          </Col>
          <Col xs={12} md={6}>  
            <p className="text">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the great
              explorer of the truth, the master-builder of human happiness. No that
              are extremely painful
            </p>
          </Col>
        </Row>
      </AnimatedContainer>

      {/* Store */}
      <AnimatedContainer className="mb-5">
        <Row>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-center py-4">
            <h3 className="subtitle bold mb-3">London Collection Season</h3>
            <h2 className="title-small mb-5">Temporary Store</h2>
            <p className="text px-2 px-md-3 px-lg-5 mb-4">
              On the other hand, we denounce with righteous
              indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment,
              so blinded by desire
            </p>
            <Button>View</Button>
          </Col>
          <Col xs={12} md={6} className="px-0">
            <img src="/assets/images/img-1.png" alt="store" className="img-fluid mb-4 mb-md-0" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="px-0">
            <img src="/assets/images/img-2.png" alt="collection" className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-center py-4">
            <h3 className="subtitle bold mb-3">London Collection Season</h3>
            <h2 className="title-small mb-5">New Collection <br/> Henry London</h2>
            <p className="text px-2 px-md-3 px-lg-5 mb-4">
              On the other hand, we denounce with righteous
              indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment,
              so blinded by desire
            </p>
            <Button>View</Button>
          </Col>
        </Row>
      </AnimatedContainer>

      {/* Press */}
      <PressSlider title={(<>Press from <br /> Watch Lab Studio</>)}/>
    </Layout>
  )
}
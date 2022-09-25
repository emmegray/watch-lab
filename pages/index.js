import Layout from "src/app/components/Layout";
import Header from "src/app/components/Header";
import Jumbotron from "src/app/components/Jumbotron";
import Footer from "src/app/components/Footer";
import { Col, Row } from "react-bootstrap";
import Button from "src/app/components/Button";
import style from "src/app/styles/index.module.scss";

import PressSlider from "src/app/components/PressSlider";
import AnimatedContainer from "src/app/components/AnimatedContainer";

export default function WatchLab() {
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
          <h2 className="title mb-4">History and <br /> Patriarcal season</h2>
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
            <h2 className="title-small mb-5">New Collection <br /> Henry London</h2>
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
      <PressSlider title={(<>Press from <br /> Watch Lab Studio</>)} />

      {/* Discover */}
      <AnimatedContainer className="mb-5">
        <Row>
          <Col
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
              backgroundImage: `
              linear-gradient(
                  rgba(0, 0, 0, 0.35), 
                  rgba(0, 0, 0, 0.35)
              ),
              url(/assets/images/img-4.png)
            `
            }}>
            <div className="text-center text-white">
              <h3 className="subtitle mb-4">INSTAGRAM</h3>
              <h1 className="title">Discover <br /> Watch Lab</h1>
            </div>
          </Col>
          <Col>
            <Row>
              <Col className="d-flex p-0">
                <img src="/assets/images/img-5.png" className="img-fluid" />
              </Col>
              <Col className="d-flex p-0">
                <img src="/assets/images/img-6.png" className="img-fluid" />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex p-0">
                <img src="/assets/images/img-7.png" className="img-fluid" />
              </Col>
              <Col className="d-flex p-0">
                <img src="/assets/images/img-8.png" className="img-fluid" />
              </Col>
            </Row>
          </Col>
        </Row>
      </AnimatedContainer>

      {/* Get in Touch */}
      <AnimatedContainer
        className="d-flex flex-column justify-content-center align-items-center p-4"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `
            linear-gradient(
              rgba(208, 197, 182, 0.8), 
              rgba(208, 197, 182, 0.8)
            ),
            url(/assets/images/img-9.png)
          `
        }}>
        <div className="text-center text-white">
          <h1 className="title mb-3">Get in Touch</h1>
          <h3 className="subtitle mb-4">Discover more about news,<br /> Exclusive events and discount</h3>
        </div>
        <form action="/subscribe" className={style.newsletter}>
          <input type="text" placeholder="type your email" name="email" id="email" />
          <button type="submit">ok</button>
        </form>
      </AnimatedContainer>

      <Footer />
    </Layout>
  )
}
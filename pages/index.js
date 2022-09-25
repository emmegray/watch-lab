import Layout from "src/app/components/Layout";
import Header from "src/app/components/Header";
import Jumbotron from "src/app/components/Jumbotron";
import { Col, Container, Row } from "react-bootstrap";
import Button from "src/app/components/Button";

import style from "src/app/styles/index.module.scss";

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
      <Container className="my-5">
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
      </Container>

      {/* Store */}
      <Container className="mb-5">
        <Row>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-center">
            <h3 className="subtitle bold mb-3">London Collection Season</h3>
            <h2 className="title-small mb-5">Temporary Store</h2>
            <p className="text px-5 mb-4">
              On the other hand, we denounce with righteous
              indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment,
              so blinded by desire
            </p>
            <Button>View</Button>
          </Col>
          <Col xs={12} md={6} className="px-0">
            <img src="/assets/images/img-1.png" alt="store" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="px-0">
            <img src="/assets/images/img-2.png" alt="collection" className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-center">
            <h3 className="subtitle bold mb-3">London Collection Season</h3>
            <h2 className="title-small mb-5">New Collection <br/> Henry London</h2>
            <p className="text px-5 mb-4">
              On the other hand, we denounce with righteous
              indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment,
              so blinded by desire
            </p>
            <Button>View</Button>
          </Col>
        </Row>
      </Container>

      {/* Press */}
      <Container className={style.Press + " my-5"}>
        <Row className="mb-2">
          <Col>
            <h2 className="title">Press from <br /> Watch Lab Studio</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} className="pt-3 pe-5">
            <p className="text">
              On the other hand, we denounce with
              righteous indignation and dislike men
              who are so beguiled and demoralized
              by the charms of pleasure of the
              moment, so blinded by desire, that
              they cannot foresee the pain trouble 
            </p>
          </Col>
          <Col xs={12} md={5} className="mb-3">
            <img src="/assets/images/img-3.png" alt="press" className="img-fluid" />
          </Col>
          <Col xs={12} md={3} className="ps-3 d-flex flex-column">
            <span className="subtitle bold">Press</span>
            <span className="subtitle mb-5">18 SETTEMBRE 2015</span>
            <h3 className="title-small mb-5">Most Important <br/> Days on Watchlab</h3>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
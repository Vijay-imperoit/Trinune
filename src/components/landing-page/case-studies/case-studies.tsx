import { Col, Container, Row } from "react-bootstrap";
import { IMAGES } from "../../../utils/staticJSON";
import "./style.css";
import React from 'react';
// import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';
const AnimatedImageWithOpacity = React.lazy(() => import('../../../global/AnimatedImageWithOpacity'));
const CaseStudiesCards = () => {
  return (
    <Container>
      <Row className="gy-20 custom-blog-cursor">
        <Col
          xs={12}
          className="mt-0"
        >
          <div className="portfolio-style1 portfolio-card">
            <Row className="align-items-center gy-4">
              <Col lg={5}>
                <div className="info-card d-flex flex-column align-items-center justify-content-center text-center">
                  <AnimatedImageWithOpacity
                    className="logo-img img-fluid"
                    src={IMAGES.uTradeLogo}
                    width="146"
                    height="46"
                    alt="logo"
                    loading="lazy"
                  />
                  <p className="main-text">
                    A B2B portal in East Africa to streamline partnerships by
                    eliminating intermediaries.
                  </p>
                  <a
                    href="/utrade"
                    className="btn bg-white ms-4 custom-cursor"
                  >
                    Explore More
                  </a>
                </div>
              </Col>
              <Col lg={7}>
                <div className="grid-utrade-view">
                  <div className="div1">
                    <p className="fw-bold">
                      Eliminate inefficiencies and foster partnerships that
                      drive success
                    </p>
                  </div>
                  <div className="div2 justify-content-end align-items-end pb-0 pe-0">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={IMAGES.uTradeLaptop1x}
                      width="330"
                      height="228"
                      alt="uTrade-laptop"
                      loading="lazy"
                    />
                  </div>
                  <div className="div3 justify-content-between pb-0">
                    <p className="mb-2 fw-bold">
                      Direct Connections for Suppliers and Retailers
                    </p>
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={IMAGES.uTradeMobile1x}
                      width="176"
                      height="250"
                      alt="uTrade-mobile"
                      loading="lazy"
                    />
                  </div>
                  <div className="div4">
                    <Row className="justify-content-between align-items-center gy-3 w-100">
                      <Col className="d-flex flex-column flex-center">
                        <p className="lh-1 fw-bold">10M +</p>
                        <p className="fs-14 fw-normal">Transactions</p>
                      </Col>
                      <Col className="d-flex flex-column flex-center">
                        <p className="lh-1 fw-bold">75% yearly</p>
                        <p className="fs-14 fw-normal">Business Growth</p>
                      </Col>
                      <Col className="d-flex flex-column flex-center">
                        <p className="lh-1 fw-bold">1000+</p>
                        <p className="fs-14 fw-normal">Orders everyday</p>
                      </Col>
                      <Col className="d-flex flex-column flex-center">
                        <p className="lh-1 fw-bold">99%</p>
                        <p className="fs-14 fw-normal">Satisfaction ratio</p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={12}>
          <div className="portfolio-style2 portfolio-card">
            <Row className=" align-items-center gy-4">
              <Col lg={5}>
                <div className="info-card d-flex flex-column align-items-center justify-content-center text-center">
                  <AnimatedImageWithOpacity
                    className="logo-img img-fluid"
                    src={IMAGES.keepAppy1x}
                    width="130"
                    height="84"
                    alt="logo"
                    loading="lazy"
                  />
                  <p className="main-text">
                    A wellness kit on your phone! Already touching lives of over
                    30k+ users in 75 countries.
                  </p>
                  <a
                    href="/keepappy"
                    className="btn bg-white ms-4 custom-cursor"
                  >
                    Explore More
                  </a>
                </div>
              </Col>
              <Col lg={7}>
                <div className="grid-keepappy-view">
                  <div className="div1 justify-content-between pb-0">
                    <p className="fw-bold">
                      KeepAppy is a multi-featured wellness gym.
                    </p>
                    <AnimatedImageWithOpacity
                      className="img-fluid ms-auto"
                      src={IMAGES.keepAppyMobile1x}
                      width="220"
                      height="300"
                      alt="img"
                      loading="lazy"
                    />
                  </div>
                  <div className="div2">
                    <p className="fw-bold">
                      KeepAppy is mentored by Bill & Melinda Gates Foundation.
                    </p>
                  </div>
                  <div className="div3 align-items-start text-start">
                    <AnimatedImageWithOpacity
                      className="img-fluid mb-2"
                      src={IMAGES.target}
                      width="32"
                      height="32"
                      alt="target-icon"
                      loading="lazy"
                    />
                    <p>
                      Raised €30,000+ funding through the Kickstarter platform.
                    </p>
                  </div>
                  <div className="div4 pb-0 justify-content-end">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={IMAGES.keepAppyMobileTwo1x}
                      width="270"
                      height="318"
                      alt="img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={12}>
          <div className="portfolio-style3 portfolio-card">
            <Row className="align-items-center gy-4">
              <Col lg={5}>
                <div className="info-card d-flex flex-column align-items-center justify-content-center text-center">
                  <AnimatedImageWithOpacity
                    className="logo-img img-fluid"
                    src={IMAGES.scoreBoardCardLogo1x}
                    width="88"
                    height="78"
                    alt="logo"
                    loading="lazy"
                  />
                  <p className="main-text">
                    A fundraising platform to help athletes plan their
                    fundraising journey in USA!
                  </p>
                  <a
                    href="/scoreboard"
                    className="btn bg-white ms-4 custom-cursor"
                  >
                    Explore More
                  </a>
                </div>
              </Col>
              <Col lg={7}>
                <div className="grid-scoreboard-view">
                  <div className="div1 pb-0 justify-content-end">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={IMAGES.scoreBoardFive1x}
                      width="500"
                      height="252"
                      alt="scoreboard"
                      loading="lazy"
                    />
                  </div>
                  <div className="div2 pb-0 justify-content-end">
                    <AnimatedImageWithOpacity
                      className="img-fluid"
                      src={IMAGES.scoreBoardTwo1x}
                      width="168"
                      height="216"
                      alt="scoreboard"
                      loading="lazy"
                    />
                  </div>
                  <div className="div3 text-start align-items-start">
                    <p className="mb-1 fw-bold">15,000 Campaigns</p>
                    <p className="fw-normal">Boosted fundraising successes!</p>
                  </div>
                  <div className="div4 text-start align-items-start p-md-4 p-2">
                    <p className="mb-1 fw-bold">$2 Million</p>
                    <p className="fw-normal">Sales in just 6 months</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          xs={12}
          className="text-center mt-5"
        >
          <a
            href="/case-studies"
            className="fs-16 btn btn-outline-primary custom-cursor"
          >
            View All Case Studies
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default CaseStudiesCards;

import { Col, Container, Row } from 'react-bootstrap';
import { IMAGES } from '../../../utils/staticJSON';
import './style.css';
import { useLocation } from 'react-router-dom';
import React from 'react';
// import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';
const AnimatedImageWithOpacity = React.lazy(() => import('../../../global/AnimatedImageWithOpacity'));
const FactsSection = () => {

  const location = useLocation();

  return (
    <Container className="facts-section custom-blog-cursor">
      <Row className="gy-20">
        <Col
          lg={6}
          className="order-1 order-lg-1"
        >
          <div className="div1 card">
            <div className="card-body">
              <p className="main-text">Featured in Forbes - June 2021</p>
              <p className="sub-text">
                While you take care of your business,our app developer UK team
                is here to help you with a mobile app.
              </p>
              {/* <a href="#" className="link-text">
                Learn More
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.rightWayArrow}
                  width="20"
                  height="20"
                  alt="arrow-right"
                  loading="lazy"
                />
              </a> */}
            </div>
            <div
              className="img-box"
              //  href='#'
            >
              <AnimatedImageWithOpacity
                className="img-fluid"
                src={IMAGES.forbesFeatured1x}
                width="500"
                height="260"
                alt="Featured article on Forbes about tech trends"
                loading="lazy"
              />
            </div>
          </div>
        </Col>
        <Col
          lg={6}
          className="order-2 order-lg-2 d-flex"
        >
          <div className="div2 card">
            <div className="card-body">
              <p className="main-text">Top brands in our clientele list.</p>
              <p className="sub-text">
                We’re very fortunate to have Times of India, Publicis Groupe,
                ReMax, ITC Limited, DNA Daily, and Tanishq, to name a few, in
                our clientele list.
              </p>
              <div
              // href='#'
              >
                <AnimatedImageWithOpacity
                  className="img-fluid"
                  src={IMAGES.topBrandList1x}
                  width="658"
                  height="444"
                  alt="top-brands"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Col>
        <Col
          md={6}
          lg={3}
          className="order-4 order-lg-3 d-flex"
        >
          <div className="div3 card">
            <div className="card-body">
              <p className="main-text">
                Our app KeepAppy was selected for mentorship by Melinda & Bill
                Gates foundation.
              </p>
            </div>
            <div
              // href="#"
              className="img-box"
            >
              <AnimatedImageWithOpacity
                className="img-fluid"
                src={IMAGES.keepAppyMobileRotate1x}
                width="200"
                height="300"
                alt="keep-appy-mobile"
                loading="lazy"
              />
            </div>
          </div>
        </Col>
        <Col
          lg={6}
          className="order-3 order-lg-4"
        >
          <div className="div4">
            <div className="img-hover-style1 mb-3">
              <AnimatedImageWithOpacity
                className="img img-fluid"
                src={IMAGES.clientGroup1x}
                width="528"
                height="220"
                alt="client"
                loading="lazy"
              />
              <div className="text-box">
                <p className="text">
                  One of our startups was adopted by Google in the ‘Adopt a
                  Startup’ program.
                </p>
              </div>
            </div>
            <div className="img-hover-style1">
              <AnimatedImageWithOpacity
                className="img img-fluid"
                src={IMAGES.client1x}
                width="528"
                height="200"
                alt="client"
                loading="lazy"
              />
              <div className="text-box">
                <p className="text">
                  One of our startups was adopted by Google in the ‘Adopt a
                  Startup’ program.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col
          md={6}
          lg={3}
          className="order-5 order-lg-5 d-flex"
        >
          <div className="div5 card">
            <div className="card-body">
              <p className="main-text fs-22 fw-500 text-white">
                Our app Scoreboard FR raised $20M funds in just 1.5 years.
              </p>
            </div>
            <div
              // href="#"
              className="img-box"
            >
              <AnimatedImageWithOpacity
                className="img-fluid"
                src={IMAGES.scoreBoardTwo1x}
                width="250"
                height="310"
                alt="score-board"
                loading="lazy"
              />
            </div>
          </div>
        </Col>
        {location.pathname !== '/achievements' && (
        <Col
          xs={12}
          className="order-last text-center mt-5"
        >
          <a
            href="/achievements"
            className="fs-16 btn btn-outline-primary mt-md-3 custom-cursor"
          >
            View All Achievements
          </a>
        </Col>
        )}
      </Row>
    </Container>
  );
};

export default FactsSection;

import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import { useEffect, useState } from 'react';
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const HeroSection = () => {
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [experts, setExperts] = useState(0);

  useEffect(() => {
    const animateValue = (setState: any, endValue: any, duration: any) => {
      let startValue = 0;
      const increment = endValue / (duration / 50);
      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          setState(Math.round(endValue));
          clearInterval(timer);
        } else {
          setState(Math.round(startValue));
        }
      }, 50);
    };
    animateValue(setYears, 13, 2000);
    animateValue(setClients, 200, 3000);
    animateValue(setProjects, 500, 4000);
    animateValue(setExperts, 80, 2000);
  }, []);

  return (
    <section className="hero-section-about custom-blog-cursor-white">
      <Container className="py-5">
        <Row className="h-100">
          <Col lg={12}>
            <div className="d-flex flex-column align-items-center justify-content-center hero-contain h-100">
              <p className="text-with-pill dark shimmer">About Us</p>
              <h1 className="fs-50 fw-bolder text-white text-center mb-3">
                <span className="text-gradient-style3">Meet Impero</span>
                - Your
                <br />
                Tech Kingdom Of Tomorrow
              </h1>
              <p className="fs-20 fw-normal text-white text-center mb-30">
                Discover how Impero’s innovative solutions are shaping the
                future of technology.
              </p>
              <Row className="align-items-center justify-content-center gx-md-5 gy-4 text-center">
                <Col
                  xs={12}
                  sm="auto"
                >
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.clutchLogo1}
                    width="204"
                    height="42"
                    alt="logo"
                    loading="lazy"
                  />
                </Col>
                <Col
                  xs={12}
                  sm="auto"
                >
                  <AnimatedImageWithOpacity
                    className="img-fluid"
                    src={IMAGES.forbesLogo1}
                    width="92"
                    height="38"
                    alt="logo"
                    loading="lazy"
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={12}>
            <Row className="gy-3">
              <Col
                sm={6}
                lg={3}
                className="d-flex"
              >
                <div className="card hero-s-card-about w-100">
                  <div className="card-body">
                    <p className="text-main">{years} Years</p>
                    <p className="text-sub">
                      Of delivering lasting
                      <br /> digital solutions.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                sm={6}
                lg={3}
                className="d-flex"
              >
                <div className="card hero-s-card-about w-100">
                  <div className="card-body">
                    <p className="text-main">{clients}+ Clients</p>
                    <p className="text-sub">
                      Served with trust and innovation.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                sm={6}
                lg={3}
                className="d-flex"
              >
                <div className="card hero-s-card-about w-100">
                  <div className="card-body">
                    <p className="text-main">{projects}+ Projects</p>
                    <p className="text-sub">
                      Successfully completed with excellence.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                sm={6}
                lg={3}
                className="d-flex"
              >
                <div className="card hero-s-card-about w-100">
                  <div className="card-body">
                    <p className="text-main">{experts}+ Experts</p>
                    <p className="text-sub">
                      Crafting innovative
                      <br /> digital journeys.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

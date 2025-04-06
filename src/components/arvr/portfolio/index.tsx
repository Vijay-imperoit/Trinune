import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IMAGES } from "../../../utils/staticJSON";
import AnimatedImageWithOpacity from '../../../global/AnimatedImageWithOpacity';

const Portfolio = () => {
  return (
    <section className="section pt-0 custom-blog-cursor">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="title-box text-center">
            <h2 className="title-2">AR/VR apps? Our innovative exploration!</h2>
          </Col>
        </Row>
        <Row className="gy-5">
          <Col xs={12}>
            <div className="portfolio-style2 portfolio-card">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.keepAppy1x}
                      width="130"
                      height="84"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      A wellness kit on your phone! Already touching lives of
                      over 30k+ users in 75 countries.
                    </p>
                    <a href="/keepappy" className="btn bg-white custom-cursor">
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-keepappy-view">
                    <div className="div1 justify-content-between pb-0">
                      <p>KeepAppy is a multi-featured wellness gym.</p>
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
                      <p>
                        KeepAppy is mentored by Bill & Melinda Gates Foundation.
                      </p>
                    </div>
                    <div className="div3 align-items-start text-start">
                      <AnimatedImageWithOpacity
                        className="img-fluid mb-2"
                        src={IMAGES.target}
                        width="32"
                        height="32"
                        alt="target"
                        loading="lazy"
                      />
                      <p>
                        Raised €30,000+ funding through the Kickstarter
                        platform.
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
            <div className="portfolio-style3 portfolio-card portfolio-lightbrown">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.donaghmoreMuseumLogo}
                      width="185"
                      height="77"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      Lay your eyes on 300 years old artefacts coming to life at
                      Donaghmore Museum!
                    </p>
                    <a href="/donaghmore" className="btn bg-white custom-cursor">
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-scoreboard-view grid-donaghmore-view">
                    <div className="div1 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.donaghmoreFive}
                        width="500"
                        height="253"
                        alt="scoreboard"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.donaghmoreTwo}
                        width="191"
                        height="281"
                        alt="donaghmore-m-two"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 text-start align-items-start">
                      <p className="mb-1">Increased Attraction</p>
                      <p className="fw-normal">By 50% all over the world!</p>
                    </div>
                    <div className="div4 text-start align-items-start">
                      <p className="mb-1">Gained national recognition</p>
                      <p className="fw-normal">
                        First of its kind in rural Ireland.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} className="text-center mt-5">
            <a href="/case-studies" className="fs-16 btn btn-outline-primary custom-cursor">
              View All Case Studies
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;

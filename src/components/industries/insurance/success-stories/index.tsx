import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import AnimatedImageWithOpacity from "../../../../global/AnimatedImageWithOpacity";
import { IMAGES } from "../../../../utils/staticJSON";

const IndustrySuccessStories = () => {
  return (
    <section className="section custom-blog-cursor">
      <Container>
        <div className="title-box text-center">
          <Row>
            <Col xs={12}>
              <h2 className="title-2">Featured Projects and Case Studies</h2>
              <p>
                See how Impero has helped its clients achieve their vision of
                digital innovation.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row className="gy-20 custom-blog-cursor">
          <Col xs={12}>
            <div className="portfolio-style3 portfolio-card">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
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
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
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
                      <p className="mb-1">15,000 Campaigns</p>
                      <p className="fw-normal">
                        Boosted fundraising successes!
                      </p>
                    </div>
                    <div className="div4 text-start align-items-start">
                      <p className="mb-1">$2 Million</p>
                      <p className="fw-normal">Sales in just 6 months</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style2 portfolio-card portfolio-ottomangreen">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.ethicartLogo}
                      width="74"
                      height="87"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      Ethicart! A complete solution to practice ethical
                      purchasing!
                    </p>
                    <a
                      href="/ethicart"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-keepappy-view grid-ethicart-view">
                    <div className="div1 justify-content-between pb-0">
                      <p>
                        Your Guide to
                        <br /> Sustainable Living
                      </p>
                      <AnimatedImageWithOpacity
                        className="img-fluid ms-auto"
                        src={IMAGES.ethicartMobile}
                        width="185"
                        height="305"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2">
                      <p>
                        Ireland Rising Business Star at Web Summit 2020, praised
                        for UX, and partnered with UPS at Trinity College.
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
                        Featured in The Irish Times and Responsible Innovation
                        Summit, with 5-star ratings on both app stores.
                      </p>
                    </div>
                    <div className="div4">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.ethicartTwoMobile}
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
            <div className="portfolio-style1 portfolio-card portfolio-nursegreen">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.kemasLogo}
                      width="97"
                      height="84"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      KEMAS - Software to help the Indian army maintain
                      inventory & service logs.
                    </p>
                    <a
                      href="/kemas"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-utrade-view grid-kemas-view">
                    <div className="div1">
                      <p>
                        Eliminate inefficiencies and foster partnerships that
                        drive success
                      </p>
                    </div>
                    <div className="div2 bg-kemas justify-content-end p-3">
                      <p>
                        The Golden Katar Regiment's KEMAS tracks and analyzes
                        arms and equipment.
                      </p>
                    </div>
                    <div className="div3 justify-content-between">
                      <p>Certificate of Excellence by Indian Army</p>
                      <AnimatedImageWithOpacity
                        className="img-fluid mt-3"
                        src={IMAGES.kemasAward}
                        width="176"
                        height="250"
                        alt="kemas"
                        loading="lazy"
                      />
                    </div>
                    <div className="div4">
                      <Row className="row-cols-2 row-cols-sm-auto justify-content-between align-items-center gy-3">
                        <Col
                          lg={4}
                          className="d-flex flex-column flex-center"
                        >
                          <p className="lh-1">12+</p>
                          <p className="fs-14 fw-normal">
                            Battalions Uses Kemas
                          </p>
                        </Col>
                        <Col
                          lg={4}
                          className="d-flex flex-column flex-center"
                        >
                          <p className="lh-1">75%</p>
                          <p className="fs-14 fw-normal">
                            Increase in Efficiency
                          </p>
                        </Col>
                        <Col
                          lg={4}
                          className="d-flex flex-column flex-center"
                        >
                          <p className="lh-1">100%</p>
                          <p className="fs-14 fw-normal">Secure and Reliable</p>
                        </Col>
                      </Row>
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
    </section>
  );
};

export default IndustrySuccessStories;

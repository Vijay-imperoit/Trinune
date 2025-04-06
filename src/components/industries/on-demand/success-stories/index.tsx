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
        <Row className="gy-20">
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
                      <p className="mb-1 fw-bold">15,000 Campaigns</p>
                      <p className="fw-normal">
                        Boosted fundraising successes!
                      </p>
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
          <Col xs={12}>
            <div className="portfolio-style2 portfolio-style7 portfolio-card">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.inPractiseLogo}
                      width="146"
                      height="83"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      A cutting-edge financial audit platform built for SMEs.
                    </p>
                    <a
                      href="/inpractice"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-keepappy-view grid-inPractise-view">
                    <div className="div1 ps-3 pe-0 justify-content-start">
                      <div className="pe-3">
                        <p className="mb-2 fs-15">Why InPractise?</p>
                        <p className="fs-15 fw-normal mb-4">
                          This cloud-based audit tool enhances efficiency &
                          profitability by preventing under- & over-auditing,
                          with dynamic time budgeting & reduce fee write-offs.
                        </p>
                      </div>
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.inPractisehalfLaptop}
                        width="405"
                        height="244"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2 px-3">
                      <p className="mb-2 fs-15">Features</p>
                      <Row className="gy-2 mb-4">
                        <Col
                          md={6}
                          lg={12}
                          xl={6}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <AnimatedImageWithOpacity
                              src={IMAGES.auditManagement}
                              width="20"
                              height="20"
                              alt="audit"
                            />
                            <span className="fs-12 text-start">
                              Audit Management
                            </span>
                          </div>
                        </Col>
                        <Col
                          md={6}
                          lg={12}
                          xl={6}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <AnimatedImageWithOpacity
                              src={IMAGES.efficientEngagement}
                              width="20"
                              height="20"
                              alt="efficient"
                            />
                            <span className="fs-12 text-start">
                              Efficient User Engagement
                            </span>
                          </div>
                        </Col>
                      </Row>
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.inpractiseLaptop}
                        width="329"
                        height="199"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 px-3 align-items-start">
                      <p className="fs-15">
                        Dynamic audit files with auto-updates, ISA-compliant
                        planning, & simplified revenue recognition tools.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style2 portfolio-card">
              <Row className=" align-items-center gy-4">
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
                    <a
                      href="/keepappy"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
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

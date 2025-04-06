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
            <div className="portfolio-style1 portfolio-card portfolio-lightorange">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.aquinasLogo}
                      width="146"
                      height="46"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      Connecting schools with qualified education staff—just
                      Look, Click, Book!
                    </p>
                    <a
                      href="/aquinas-education"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-utrade-view grid-aquinas-view">
                    <div className="div1">
                      <p>
                        A vision to change the educational hiring landscape!
                      </p>
                    </div>
                    <div className="div2 justify-content-end align-items-end pb-0 pe-0">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.aquinasLaptop}
                        width="330"
                        height="228"
                        alt="aquinas"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 justify-content-between pb-0">
                      <p>Transforming Education Staffing with Aquinas</p>
                      <AnimatedImageWithOpacity
                        className="img-fluid mt-3"
                        src={IMAGES.aquinasMobile}
                        width="176"
                        height="250"
                        alt="aquinas"
                        loading="lazy"
                      />
                    </div>
                    <div className="div4">
                      <Row className="row-cols-2 row-cols-sm-auto justify-content-between align-items-center gy-3">
                        <Col
                          lg={4}
                          className="d-flex flex-column flex-center"
                        >
                          <p className="lh-1">10K Teachers</p>
                          <p className="fs-14 fw-normal">
                            Placed weekly on average!
                          </p>
                        </Col>
                        <Col
                          lg={4}
                          className="d-flex flex-column flex-center"
                        >
                          <p className="lh-1">48k+</p>
                          <p className="fs-14 fw-normal">
                            Teaching hours every day!
                          </p>
                        </Col>
                        <Col
                          lg={4}
                          className=" d-flex flex-column flex-center"
                        >
                          <p className="lh-1">99%</p>
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
            <div className="portfolio-style2 portfolio-card portfolio-bluesqueeze">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.examflyLogo}
                      width="170"
                      height="70"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      Ease tax and accounting studies for professionals with our
                      interactive platform.
                    </p>
                    <a
                      href="/examfly"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-keepappy-view grid-examfly-view">
                    <div className="div1 justify-content-between pb-0">
                      <p>Revolutionizing Tax & Accounting Learning</p>
                      <AnimatedImageWithOpacity
                        className="img-fluid ms-auto"
                        src={IMAGES.examflyMobile}
                        width="220"
                        height="300"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2">
                      <p>
                        Won Best New Start-Up at the InterTradeIreland Seedcorn
                        Investor Competition.
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
                        Examfly is supported by Bolton Trust and Enterprise
                        Ireland, won Bronze in 2021 and improved pass rates by
                        10%.
                      </p>
                    </div>
                    <div className="div4 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.examflyTwoMobile}
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

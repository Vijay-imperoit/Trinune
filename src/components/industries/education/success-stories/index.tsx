import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import AnimatedImageWithOpacity from "../../../../global/AnimatedImageWithOpacity";
import { IMAGES } from "../../../../utils/staticJSON";

const HCSuccessStories = () => {
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
            <div className="portfolio-style2 portfolio-style7 portfolio-card portfolio-navy">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.nameDownLogo}
                      width="191"
                      height="38"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      Connecting parents and schools seamlessly for streamlined
                      admissions.
                    </p>
                    <a
                      href="/namedown"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-keepappy-view grid-namedown-view">
                    <div className="div1 ps-3 pe-0 justify-content-start">
                      <div className="pe-3">
                        <p className="mb-2 fs-15">Why NameDown?</p>
                        <p className="fs-15 fw-normal mb-4">
                          NameDown simplifies school admissions by allowing
                          parents to search, apply, & access resources and
                          allows schools manage profiles & applications.
                        </p>
                      </div>
                      <AnimatedImageWithOpacity
                        className="img-fluid ms-auto"
                        src={IMAGES.nameDownHalfLaptop}
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
                              src={IMAGES.twoDistinctInterface}
                              width="20"
                              height="20"
                              alt="two-distinct"
                            />
                            <span className="fs-12 text-start">
                              Two Distinct Interface
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
                              src={IMAGES.userFriendlyDesign}
                              width="20"
                              height="20"
                              alt="user-friendly"
                            />
                            <span className="fs-12 text-start">
                              User Friendly Design
                            </span>
                          </div>
                        </Col>
                      </Row>
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.nameDownLaptop}
                        width="329"
                        height="199"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 px-3 align-items-start">
                      <p className="fs-15">
                        Schools on NameDown can register, customize forms,
                        manage applications, and update information efficiently.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
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

export default HCSuccessStories;

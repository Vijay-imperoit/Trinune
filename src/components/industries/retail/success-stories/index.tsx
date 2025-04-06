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
          <Col
            xs={12}
            className="mt-0"
          >
            <div className="portfolio-style1 portfolio-card">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
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
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
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
            <div className="portfolio-style2 portfolio-card portfolio-graygallery">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.esptileLogo}
                      width="94"
                      height="89"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      A 94 page catalogue turned into an app! Enables quick
                      booking of tiles.
                    </p>
                    <a
                      href="/esp-tiles"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-keepappy-view grid-esptiles-view">
                    <div className="div1 justify-content-between pb-0">
                      <p>Smart Tile Ordering with Real-Time Availability</p>
                      <AnimatedImageWithOpacity
                        className="img-fluid ms-auto"
                        src={IMAGES.esptileMobile}
                        width="185"
                        height="305"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2">
                      <p>Used in the network of 250+ distributors.</p>
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
                        Efficient, quick and real-time ordering has saved
                        innumerable staff hours for the client.
                      </p>
                    </div>
                    <div className="div4">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.esptileTwoMobile}
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

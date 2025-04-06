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
                    <a
                      href="/donaghmore"
                      className="btn bg-white custom-cursor"
                    >
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
                        src={IMAGES.donaghmoreMobileTwo}
                        width="191"
                        height="281"
                        alt="donaghmore"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 text-start align-items-start py-3 px-4">
                      <p className="fw-500">Increased Attraction</p>
                      <p className="fw-normal">By 50% all over the world!</p>
                    </div>
                    <div className="div4 text-start align-items-start py-3 px-4">
                      <p className="fw-500">Gained national recognition</p>
                      <p className="fw-normal">
                        First of its kind in rural Ireland.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style3 portfolio-card portfolio-bluecatskill">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.ITCarlowLogo}
                      width="178"
                      height="90"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      An excellent & comprehensive guide app for students of IT
                      Carlow!
                    </p>
                    <a
                      href="/ITCarlow"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-scoreboard-view grid-carlow-view">
                    <div className="div1 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.CarlowM5}
                        width="504"
                        height="308"
                        alt="scoreboard"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2 bg-carlow pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.carlowMobile}
                        width="116"
                        height="231"
                        alt="carlow"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 text-start align-items-start">
                      <p className="fw-normal">
                        Cloud-based app for effortless information storage with
                        FAQs, links, and PDFs.
                      </p>
                    </div>
                    <div className="div4 text-start align-items-start">
                      <p className="fw-normal">
                        Real-time updates delivered through push notifications.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
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

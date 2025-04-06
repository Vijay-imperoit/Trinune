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
          <Col xs={12}>
            <div className="portfolio-style2 portfolio-card portfolio-bluelilac">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.druidLearningLogo}
                      width="254"
                      height="65"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      AI-Powered Tool for Effective Content Management and
                      Distribution
                    </p>
                    <a
                      href="/druidlearning"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-keepappy-view grid-druidlearning-view">
                    <div className="div1 justify-content-between pb-0">
                      <p>
                        Listed in “Top 100 Most Ambitious Companies in Ireland
                      </p>
                      <AnimatedImageWithOpacity
                        className="img-fluid ms-auto"
                        src={IMAGES.druidLearningMobile}
                        width="220"
                        height="300"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2">
                      <p>
                        Secured a place in the finals of the “National Startup
                        Awards”
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
                        Druid Learning was one of 6 to receive full STADIEM
                        funding.
                      </p>
                    </div>
                    <div className="div4 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.druidLearningTwoMobile}
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

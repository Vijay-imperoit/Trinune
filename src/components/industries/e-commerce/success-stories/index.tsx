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
            <div className="portfolio-style3 portfolio-card portfolio-bluecatskill">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.sienteLogo}
                      width="170"
                      height="70"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      Improving the well-being of 500,000 users through guided
                      meditation.
                    </p>
                    <a
                      href="/siente"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-scoreboard-view grid-siente-view">
                    <div className="div1 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.sienteM5}
                        width="504"
                        height="308"
                        alt="scoreboard"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid  w-100"
                        src={IMAGES.sienteTwoMobile}
                        width="116"
                        height="231"
                        alt="siente"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 text-start align-items-start py-3 px-3">
                      <p className="fw-500">Extensive Reach & Partnerships</p>
                      <p className="fw-normal">
                        Helped 250+ Distributor & 50k Gyms and Studios
                      </p>
                    </div>
                    <div className="div4 text-start align-items-start py-3 px-3">
                      <p className="fw-500">High Ratings and Noble Causes</p>
                      <p className="fw-normal">
                        Consistent Rating of 4.7+ & ties with Global
                        Humanitarian Org.
                      </p>
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

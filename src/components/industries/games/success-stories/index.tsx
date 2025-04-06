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
            <div className="portfolio-style3 portfolio-card portfolio-lightmorpich">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.sureWashLogo}
                      width="165"
                      height="88"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      An AR & 3D gaming tool that makes learning hand hygiene
                      fun for kids.
                    </p>
                    <a
                      href="/surewash"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-scoreboard-view grid-surewash-view">
                    <div className="div1 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.sureWashM5}
                        width="504"
                        height="308"
                        alt="scoreboard"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2 bg-surewash">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.sureWashMobile}
                        width="116"
                        height="231"
                        alt="mobile"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 text-start align-items-start">
                      <p className="mb-1">New Advisory Members</p>
                      <p className="fw-normal">
                        Proud to join The Leapfrog Group Partners Advisory
                        Committee.
                      </p>
                    </div>
                    <div className="div4 text-start align-items-start">
                      <p className="mb-1">2 Million+</p>
                      <p className="fw-normal">People Trained Worldwide.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="portfolio-style2 portfolio-card portfolio-greenapple">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.mosaicLogo}
                      width="79"
                      height="90"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      A platform where teachers can update parents about their
                      child’s daily activities
                    </p>
                    <a
                      href="/mosaic"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col
                  lg={6}
                  className=""
                >
                  <div className="grid-keepappy-view grid-mosaic-view">
                    <div className="div1 justify-content-end align-items-end pb-0">
                      <img
                        className="img-fluid ms-auto"
                        src={IMAGES.mosaicMobile}
                        width="220"
                        height="300"
                        alt="img"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2">
                      <p>
                        Named Leading Startup at the Ireland Rising Business
                        Star Awards for innovation and impact.
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
                        Supported 1,500 parents, 85 schools, and 5,000 children
                        in effective learning and skill development within 5
                        months.
                      </p>
                    </div>
                    <div className="div4 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.mosaicTwoMobile}
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
            <div className="portfolio-style3 portfolio-card portfolio-lightpink">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.teachkloudLogo}
                      width="165"
                      height="88"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      An app for educators to focus on what they love! Saved 60%
                      time in admin & compliance!
                    </p>
                    <a
                      href="/teach-kloud"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-scoreboard-view grid-teachkloud-view">
                    <div className="div1 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.teachkloudM5}
                        width="504"
                        height="308"
                        alt="scoreboard"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2 pe-0 align-items-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid w-100"
                        src={IMAGES.teachkloudMobileLaptop}
                        width="329"
                        height="198"
                        alt="teachkloud"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 text-start align-items-start">
                      <p className="mb-1"> €750K Funding Raised</p>
                      <p className="fw-normal">
                        TeachKloud has €750K raised for early childhood services
                      </p>
                    </div>
                    <div className="div4 text-start align-items-start">
                      <p className="mb-1">Among Top 30</p>
                      <p className="fw-normal">Under 30 Irish Rising Stars</p>
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

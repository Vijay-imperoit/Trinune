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

export default IndustrySuccessStories;

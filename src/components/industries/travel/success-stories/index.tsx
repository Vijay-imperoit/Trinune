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
            <div className="portfolio-style3 portfolio-card portfolio-blueathens">
              <Row className="align-items-center gy-4">
                <Col lg={6}>
                  <div className="info-card">
                    <AnimatedImageWithOpacity
                      className="logo-img img-fluid"
                      src={IMAGES.irishLogo}
                      width="202"
                      height="80"
                      alt="logo"
                      loading="lazy"
                    />
                    <p className="main-text">
                      An interactive multi-lingual tour guide app for tourists
                      who are visiting Ireland!
                    </p>
                    <a
                      href="/irish-tour"
                      className="btn bg-white custom-cursor"
                    >
                      Explore More
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="grid-scoreboard-view grid-irish-view">
                    <div className="div1 pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.irishM5}
                        width="504"
                        height="308"
                        alt="scoreboard"
                        loading="lazy"
                      />
                    </div>
                    <div className="div2 bg-irish pb-0 justify-content-end">
                      <AnimatedImageWithOpacity
                        className="img-fluid"
                        src={IMAGES.irishMobile}
                        width="116"
                        height="231"
                        alt="irish"
                        loading="lazy"
                      />
                    </div>
                    <div className="div3 text-start align-items-start">
                      <p className="fw-normal">
                        Multilingual and Offline Access Supports English,
                        French, Italian, German,Spanish & Many more
                      </p>
                    </div>
                    <div className="div4 text-start align-items-start">
                      <p className="fw-normal">
                        Offers 250+ voice-over commentaries, & Comprehensive
                        Features
                      </p>
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
